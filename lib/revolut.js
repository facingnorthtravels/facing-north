/**
 * Revolut Merchant API Helper
 * 
 * Handles all Revolut API interactions for payment processing.
 * Supports both sandbox and live environments.
 * 
 * Environment Variables Required:
 * - REVOLUT_SECRET_KEY: Your Revolut secret API key (sk_...)
 * - NEXT_PUBLIC_REVOLUT_PUBLIC_KEY: Your Revolut public key (pk_...)
 * - NEXT_PUBLIC_REVOLUT_ENV: 'sandbox' | 'production' | 'live' | 'prod'
 */

const REVOLUT_SANDBOX_URL = 'https://sandbox-merchant.revolut.com/api';
const REVOLUT_LIVE_URL = 'https://merchant.revolut.com/api';

/**
 * Check if we're in production mode
 */
export const isProductionMode = () => {
  const env = process.env.NEXT_PUBLIC_REVOLUT_ENV;
  return env === 'production' || env === 'live' || env === 'prod';
};

/**
 * Get the Revolut API base URL based on environment
 */
export const getRevolutBaseUrl = () => {
  return isProductionMode() ? REVOLUT_LIVE_URL : REVOLUT_SANDBOX_URL;
};

/**
 * Get Revolut API headers with authentication
 */
export const getRevolutHeaders = () => {
  const secretKey = process.env.REVOLUT_SECRET_KEY;
  
  if (!secretKey) {
    throw new Error('REVOLUT_SECRET_KEY is not configured');
  }

  return {
    'Authorization': `Bearer ${secretKey}`,
    'Content-Type': 'application/json',
    'Revolut-Api-Version': '2024-09-01',
  };
};

/**
 * Create a Revolut order for hosted checkout
 * @param {Object} orderData - Order details
 * @returns {Promise<Object>} - Revolut order response
 */
export const createRevolutOrder = async (orderData) => {
  const baseUrl = getRevolutBaseUrl();
  const headers = getRevolutHeaders();

  const response = await fetch(`${baseUrl}/orders`, {
    method: 'POST',
    headers,
    body: JSON.stringify(orderData),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error('Revolut API Error:', data);
    throw new Error(data.message || 'Failed to create Revolut order');
  }

  return data;
};

/**
 * Retrieve a Revolut order by ID
 * @param {string} orderId - Revolut order ID
 * @returns {Promise<Object>} - Revolut order details
 */
export const getRevolutOrder = async (orderId) => {
  const baseUrl = getRevolutBaseUrl();
  const headers = getRevolutHeaders();

  const response = await fetch(`${baseUrl}/orders/${orderId}`, {
    method: 'GET',
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    console.error('Revolut API Error:', data);
    throw new Error(data.message || 'Failed to retrieve Revolut order');
  }

  return data;
};

/**
 * Generate a unique idempotency key for preventing duplicate payments
 * @param {Object} params - Parameters to make the key unique
 * @returns {string} - Unique idempotency key
 */
export const generateIdempotencyKey = ({ tourId, email, timestamp }) => {
  const crypto = require('crypto');
  const data = `${tourId}-${email}-${timestamp}`;
  return crypto.createHash('sha256').update(data).digest('hex').substring(0, 32);
};

/**
 * Verify webhook signature from Revolut
 * @param {string} payload - Raw request body
 * @param {string} signature - Signature from Revolut-Signature header
 * @param {string} signingSecret - Your webhook signing secret
 * @returns {boolean} - Whether signature is valid
 */
export const verifyWebhookSignature = (payload, signature, signingSecret) => {
  if (!signature || !signingSecret) {
    console.error('Missing signature or signing secret');
    return false;
  }

  try {
    const crypto = require('crypto');
    
    // Parse the signature header (format: "v1=signature,t=timestamp")
    const sigParts = signature.split(',').reduce((acc, part) => {
      const [key, value] = part.split('=');
      acc[key] = value;
      return acc;
    }, {});

    const timestamp = sigParts['t'];
    const v1Signature = sigParts['v1'];

    if (!timestamp || !v1Signature) {
      console.error('Invalid signature format');
      return false;
    }

    // Create the signed payload string
    const signedPayload = `${timestamp}.${payload}`;
    
    // Calculate expected signature
    const expectedSignature = crypto
      .createHmac('sha256', signingSecret)
      .update(signedPayload)
      .digest('hex');

    // Compare signatures
    return crypto.timingSafeEqual(
      Buffer.from(v1Signature),
      Buffer.from(expectedSignature)
    );
  } catch (error) {
    console.error('Webhook signature verification error:', error);
    return false;
  }
};

/**
 * Revolut order states
 */
export const ORDER_STATES = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  AUTHORISED: 'authorised',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
  FAILED: 'failed',
};

/**
 * Check if order is in a successful state
 */
export const isOrderSuccessful = (state) => {
  return [ORDER_STATES.AUTHORISED, ORDER_STATES.COMPLETED].includes(state);
};

/**
 * Check if order is in a failed state
 */
export const isOrderFailed = (state) => {
  return [ORDER_STATES.CANCELLED, ORDER_STATES.FAILED].includes(state);
};
