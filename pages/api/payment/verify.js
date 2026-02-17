/**
 * Verify Payment Status API
 * 
 * This endpoint verifies the payment status after redirect.
 * Used by success/failure pages to confirm order state.
 * 
 * GET /api/payment/verify?order_id=xxx
 */

import { getRevolutOrder, isOrderSuccessful, isOrderFailed } from '../../../lib/revolut';

// UUID v4 format validation
const isValidUUID = (id) => {
  if (!id || typeof id !== 'string') return false;
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(id);
};

export default async function handler(req, res) {
  // Only allow GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { order_id } = req.query;

    if (!order_id) {
      return res.status(400).json({
        error: 'Missing order_id',
        success: false,
      });
    }

    // Validate order_id format to prevent injection
    if (!isValidUUID(order_id)) {
      return res.status(400).json({
        error: 'Invalid order_id format',
        success: false,
      });
    }

    // Fetch order from Revolut
    const order = await getRevolutOrder(order_id);

    // Determine status
    const isSuccess = isOrderSuccessful(order.state);
    const isFailed = isOrderFailed(order.state);
    const isPending = !isSuccess && !isFailed;

    // Extract metadata
    const metadata = order.metadata || {};

    return res.status(200).json({
      success: true,
      orderId: order.id,
      orderToken: order.token, // Required for @revolut/checkout SDK
      state: order.state,
      isSuccess,
      isFailed,
      isPending,
      amount: order.amount / 100, // Convert from cents
      currency: order.currency,
      tour: {
        id: metadata.tourId,
        title: metadata.tourTitle,
      },
      customer: {
        name: metadata.customerName,
        email: metadata.customerEmail,
      },
      host: metadata.hostName ? {
        name: metadata.hostName,
      } : null,
      pricing: {
        originalPrice: parseFloat(metadata.originalPrice) || 0,
        finalPrice: parseFloat(metadata.finalPrice) || 0,
        discountAmount: parseFloat(metadata.discountAmount) || 0,
        numberOfTravellers: parseInt(metadata.numberOfTravellers) || 1,
        couponCode: metadata.couponCode || null,
      },
      createdAt: order.created_at,
      completedAt: order.completed_at,
    });

  } catch (error) {
    console.error('Payment verify error:', error);
    
    return res.status(500).json({
      success: false,
      error: 'Failed to verify payment',
      details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error',
    });
  }
}
