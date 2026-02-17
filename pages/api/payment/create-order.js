/**
 * Create Revolut Order API
 * 
 * This endpoint creates a Revolut order for hosted checkout.
 * All price validation happens server-side to prevent tampering.
 * 
 * POST /api/payment/create-order
 */

import { createRevolutOrder, generateIdempotencyKey } from '../../../lib/revolut';
import { TOUR_PAKAGE } from '../../../data/tours-pakages';
import { validateCoupon, parsePrice, calculateDiscount } from '../../../data/coupons';
import { getCohostedProfileById } from '../../../data/cohosted-profiles';

// In-memory store for idempotency (use Redis in production for multi-instance)
const processedOrders = new Map();
const ORDER_EXPIRY_MS = 30 * 60 * 1000; // 30 minutes

/**
 * Sanitize string input to prevent XSS and injection
 */
const sanitizeString = (str, maxLength = 500) => {
  if (!str || typeof str !== 'string') return '';
  return str
    .trim()
    .substring(0, maxLength)
    .replace(/[<>"'&]/g, (char) => {
      const entities = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '&': '&amp;' };
      return entities[char] || char;
    });
};

/**
 * Sanitize phone number
 */
const sanitizePhone = (phone) => {
  if (!phone || typeof phone !== 'string') return '';
  // Only allow digits, plus, spaces, hyphens, parentheses
  return phone.replace(/[^\d+\s()-]/g, '').substring(0, 20);
};

/**
 * Clean up expired idempotency keys
 */
const cleanupExpiredKeys = () => {
  const now = Date.now();
  for (const [key, data] of processedOrders.entries()) {
    if (now - data.timestamp > ORDER_EXPIRY_MS) {
      processedOrders.delete(key);
    }
  }
};

/**
 * Validate tour exists and get server-side price
 */
const getTourDetails = (tourId) => {
  const tour = TOUR_PAKAGE.find(t => t.id === tourId);
  if (!tour) {
    return null;
  }
  return {
    id: tour.id,
    title: tour.title,
    price: parsePrice(tour.price),
    days: tour.days,
    description: tour.description,
  };
};

/**
 * Validate and calculate final price with coupon
 */
const calculateFinalPrice = (tourPrice, couponCode) => {
  if (!couponCode) {
    return {
      originalPrice: tourPrice,
      finalPrice: tourPrice,
      discountAmount: 0,
      discountPercentage: 0,
      couponApplied: false,
      couponCode: null,
    };
  }

  const coupon = validateCoupon(couponCode);
  
  if (!coupon) {
    return {
      originalPrice: tourPrice,
      finalPrice: tourPrice,
      discountAmount: 0,
      discountPercentage: 0,
      couponApplied: false,
      couponCode: null,
      couponError: 'Invalid or expired coupon code',
    };
  }

  // Check minimum purchase requirement
  if (coupon.minPurchase > 0 && tourPrice < coupon.minPurchase) {
    return {
      originalPrice: tourPrice,
      finalPrice: tourPrice,
      discountAmount: 0,
      discountPercentage: 0,
      couponApplied: false,
      couponCode: null,
      couponError: `Minimum purchase of $${coupon.minPurchase} required`,
    };
  }

  const discountResult = calculateDiscount(tourPrice, coupon);

  return {
    originalPrice: discountResult.originalPrice,
    finalPrice: discountResult.finalPrice,
    discountAmount: discountResult.discountAmount,
    discountPercentage: discountResult.discountPercentage,
    couponApplied: true,
    couponCode: coupon.code,
  };
};

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      tourId,
      couponCode,
      email,
      fullName,
      phone,
      hostId,
      numberOfTravellers,
      tourDuration,
      hostDate,
      formData,
    } = req.body;

    // =====================================
    // 1. VALIDATION
    // =====================================

    // Required fields validation
    if (!tourId || !email || !fullName) {
      return res.status(400).json({
        error: 'Missing required fields',
        details: 'tourId, email, and fullName are required',
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Validate number of travellers
    const travellers = parseInt(numberOfTravellers, 10) || 1;
    if (travellers < 1 || travellers > 10) {
      return res.status(400).json({
        error: 'Invalid number of travellers',
        details: 'Number of travellers must be between 1 and 10',
      });
    }

    // =====================================
    // 2. GET TOUR DETAILS (SERVER-SIDE PRICE)
    // =====================================

    const tour = getTourDetails(tourId);
    if (!tour) {
      return res.status(404).json({ error: 'Tour not found' });
    }

    // =====================================
    // 3. VALIDATE AND CALCULATE PRICE WITH COUPON
    // =====================================

    const priceDetails = calculateFinalPrice(tour.price, couponCode);
    
    // If coupon was provided but invalid, return error
    if (couponCode && priceDetails.couponError) {
      return res.status(400).json({
        error: 'Coupon validation failed',
        details: priceDetails.couponError,
      });
    }

    // Calculate total amount (per person * number of travellers)
    const totalAmount = priceDetails.finalPrice * travellers;
    
    // Amount in minor units (cents)
    const amountInCents = Math.round(totalAmount * 100);

    // =====================================
    // 4. IDEMPOTENCY CHECK (PREVENT DOUBLE PAYMENTS)
    // =====================================

    // Clean up expired keys periodically
    cleanupExpiredKeys();

    const idempotencyKey = generateIdempotencyKey({
      tourId,
      email,
      timestamp: Math.floor(Date.now() / (5 * 60 * 1000)), // 5-minute window
    });

    // Check if we already processed this order
    if (processedOrders.has(idempotencyKey)) {
      const existingOrder = processedOrders.get(idempotencyKey);
      console.log('Returning existing order for idempotency key:', idempotencyKey);
      return res.status(200).json(existingOrder.response);
    }

    // =====================================
    // 5. GET HOST DETAILS (IF APPLICABLE)
    // =====================================

    let hostDetails = null;
    if (hostId) {
      const host = getCohostedProfileById(hostId);
      if (host) {
        hostDetails = {
          id: host.id,
          name: host.name,
        };
      }
    }

    // =====================================
    // 6. CREATE REVOLUT ORDER
    // =====================================

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    
    // Build metadata for tracking (store all customer/form details)
    // All strings are sanitized to prevent XSS in emails
    const metadata = {
      // Tour Info
      tourId: tour.id,
      tourTitle: tour.title,
      tourDuration: sanitizeString(tourDuration, 50),
      tourPricePerPerson: tour.price,
      // Pricing
      originalPrice: priceDetails.originalPrice,
      finalPrice: priceDetails.finalPrice,
      discountAmount: priceDetails.discountAmount,
      couponCode: priceDetails.couponCode || '',
      numberOfTravellers: travellers,
      // Host Info
      hostId: hostDetails?.id || '',
      hostName: hostDetails?.name || '',
      hostDate: sanitizeString(hostDate, 50),
      // Confirmation Contact (sanitized)
      customerEmail: email.toLowerCase().trim(),
      customerName: sanitizeString(fullName, 100),
      customerPhone: sanitizePhone(phone),
      // Passenger Details (may differ from confirmation contact)
      passengerFullName: sanitizeString(formData?.passengerFullName, 100),
      passengerEmail: formData?.passengerEmail?.toLowerCase().trim() || '',
      passengerPhone: sanitizePhone(formData?.passengerPhone),
      passportNumber: sanitizeString(formData?.passportNumber, 30),
      gender: sanitizeString(formData?.gender, 20),
      dateOfBirth: sanitizeString(formData?.dateOfBirth, 15),
      // Location (sanitized)
      country: sanitizeString(formData?.country, 60),
      city: sanitizeString(formData?.city, 60),
      postalCode: sanitizeString(formData?.postalCode, 20),
      address: sanitizeString(formData?.address, 200),
      // Trip Options (sanitized)
      roomPreference: sanitizeString(formData?.room, 100),
      flightPreference: sanitizeString(formData?.flight, 100),
      additionalInfo: sanitizeString(formData?.additionalInfo, 500),
      // Agreements
      termsAccepted: sanitizeString(formData?.termsAccepted, 20),
      itineraryAgreed: sanitizeString(formData?.itineraryAgreed, 20),
      tripNamesListed: sanitizeString(formData?.tripNamesListed, 20),
      travelAdvice: sanitizeString(formData?.travelAdvice, 20),
      newsletter: sanitizeString(formData?.newsletter, 10),
    };

    const orderPayload = {
      amount: amountInCents,
      currency: 'USD',
      customer_email: email,
      description: `Booking: ${tour.title} - ${travellers} traveller(s)`,
      metadata,
    };

    console.log('Creating Revolut order:', {
      tourId: tour.id,
      amount: amountInCents,
      travellers,
      couponApplied: priceDetails.couponApplied,
    });

    const revolutOrder = await createRevolutOrder(orderPayload);

    // =====================================
    // 7. BUILD FINAL CHECKOUT URL
    // =====================================
    
    // Store order ID and token for frontend to use
    // The SDK needs the 'token' (public_id), not the 'id'
    const orderId = revolutOrder.id;
    const orderToken = revolutOrder.token; // This is the public_id for SDK
    const checkoutUrl = revolutOrder.checkout_url;

    // =====================================
    // 8. STORE FOR IDEMPOTENCY
    // =====================================

    const responseData = {
      success: true,
      orderId: orderId,
      orderToken: orderToken, // Required for @revolut/checkout SDK
      checkoutUrl: checkoutUrl,
      amount: totalAmount,
      currency: 'USD',
      tour: {
        id: tour.id,
        title: tour.title,
        days: tour.days,
      },
      pricing: {
        pricePerPerson: priceDetails.finalPrice,
        numberOfTravellers: travellers,
        subtotal: priceDetails.originalPrice * travellers,
        discount: priceDetails.discountAmount * travellers,
        total: totalAmount,
        couponApplied: priceDetails.couponApplied,
        couponCode: priceDetails.couponCode,
      },
      host: hostDetails,
    };

    processedOrders.set(idempotencyKey, {
      timestamp: Date.now(),
      response: responseData,
    });

    console.log('Revolut order created:', {
      orderId: revolutOrder.id,
      orderToken: orderToken,
      checkoutUrl: checkoutUrl,
    });

    return res.status(200).json(responseData);

  } catch (error) {
    console.error('Payment create-order error:', error);
    
    return res.status(500).json({
      error: 'Failed to create payment order',
      details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
}
