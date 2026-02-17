/**
 * Coupon Codes Configuration
 * 
 * This file contains all static coupon codes for the booking system.
 * Coupons can be of two types:
 * - 'percentage': Discount is a percentage of the total price
 * - 'fixed': Discount is a fixed dollar amount
 */

export const COUPON_CODES = {
  // All coupons are 10% discounts
  'LUKAS10': {
    code: 'LUKAS10',
    type: 'percentage',
    value: 10,
    description: '10% off your booking',
    minPurchase: 0, // Minimum purchase amount required (0 = no minimum)
    isActive: true,
    includes : ['lukas'], // Applicable to all tours
  },
  'OGIK10': {
    code: 'OGIK10',
    type: 'percentage',
    value: 10,
    description: '10% off your booking',
    minPurchase: 0,
    isActive: true,
    includes : ['ogik'], // Applicable to all tours
  },
  'MARIUS10': {
    code: 'MARIUS10',
    type: 'percentage',
    value: 10,
    description: '10% off your booking',
    minPurchase: 0,
    isActive: true,
    includes : ['marius'], // Applicable to all tours
  },
  'JONAS10': {
    code: 'JONAS10',
    type: 'percentage',
    value: 10,
    description: '10% off your booking',
    minPurchase: 0,
    isActive: true,
    includes : ['jonas'], // Applicable to all tours
  },
};

/**
 * Validates a coupon code and returns the coupon details if valid
 * @param {string} code - The coupon code to validate
 * @returns {Object|null} - Returns coupon object if valid, null if invalid
 */
export const validateCoupon = (code) => {
  if (!code || typeof code !== 'string') return null;
  
  const normalizedCode = code.trim().toUpperCase();
  const coupon = COUPON_CODES[normalizedCode];
  
  if (!coupon || !coupon.isActive) return null;
  
  return coupon;
};

/**
 * Parses a price string and extracts the numeric value
 * Handles formats like "$1,800", "€1,800", "1800", etc.
 * @param {string|number} price - The price to parse
 * @returns {number} - The numeric price value
 */
export const parsePrice = (price) => {
  if (typeof price === 'number') return price;
  if (!price || typeof price !== 'string') return 0;
  
  // Remove currency symbols and commas, then parse
  const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
  return isNaN(numericPrice) ? 0 : numericPrice;
};

/**
 * Formats a number as a price string with currency symbol
 * @param {number} amount - The amount to format
 * @param {string} currency - The currency symbol (default: '$')
 * @returns {string} - Formatted price string
 */
export const formatPrice = (amount, currency = '$') => {
  if (typeof amount !== 'number' || isNaN(amount)) return `${currency}0`;
  
  // Format with commas for thousands
  const formatted = amount.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  
  return `${currency}${formatted}`;
};

/**
 * Calculates the discounted price based on coupon type
 * @param {number} originalPrice - The original price (numeric)
 * @param {Object} coupon - The coupon object
 * @returns {Object} - Object containing discount amount and final price
 */
export const calculateDiscount = (originalPrice, coupon) => {
  if (!coupon || typeof originalPrice !== 'number') {
    return {
      originalPrice,
      discountAmount: 0,
      finalPrice: originalPrice,
      discountPercentage: 0,
    };
  }

  let discountAmount = 0;

  if (coupon.type === 'percentage') {
    discountAmount = (originalPrice * coupon.value) / 100;
  } else if (coupon.type === 'fixed') {
    discountAmount = coupon.value;
  }

  // Ensure discount doesn't exceed original price
  discountAmount = Math.min(discountAmount, originalPrice);
  
  const finalPrice = originalPrice - discountAmount;

  return {
    originalPrice,
    discountAmount,
    finalPrice,
    discountPercentage: coupon.type === 'percentage' ? coupon.value : Math.round((discountAmount / originalPrice) * 100),
  };
};

/**
 * Complete function to validate coupon and calculate discount
 * @param {string} couponCode - The coupon code entered by user
 * @param {any} data - The original Itinerary data containing price info
 * @returns {Object} - Complete discount calculation result
 */
export const applyCoupon = (couponCode, data) => {
  const coupon = validateCoupon(couponCode);
  const price = data?.price;
  const numericPrice = parsePrice(price);
  
  if (!coupon) {
    return {
      isValid: false,
      error: 'Invalid or expired coupon code',
      originalPrice: numericPrice,
      discountAmount: 0,
      finalPrice: numericPrice,
      coupon: null,
    };
  }

  if(coupon.includes && coupon.includes?.length > 0 && !coupon.includes.some(key => data?.id?.includes(key))){
    return {
      isValid: false,
      error: 'Coupon not applicable for this tour',
      originalPrice: numericPrice,
      discountAmount: 0,
      finalPrice: numericPrice,
      coupon: null,
    };
  }

  if (coupon.minPurchase > 0 && numericPrice < coupon.minPurchase) {
    return {
      isValid: false,
      error: `Minimum purchase of ${formatPrice(coupon.minPurchase)} required`,
      originalPrice: numericPrice,
      discountAmount: 0,
      finalPrice: numericPrice,
      coupon: null,
    };
  }

  const discountResult = calculateDiscount(numericPrice, coupon);

  return {
    isValid: true,
    error: null,
    ...discountResult,
    coupon,
  };
};
