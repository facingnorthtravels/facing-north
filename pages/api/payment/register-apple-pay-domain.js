/**
 * API Route: Register Domain for Apple Pay
 * 
 * This endpoint registers your domain with Revolut for Apple Pay.
 * 
 * Prerequisites:
 * 1. Download the domain validation file from:
 *    https://developer.revolut.com/assets/apple-pay/apple-developer-merchantid-domain-association
 * 
 * 2. Host it at: /.well-known/apple-developer-merchantid-domain-association
 *    (In Next.js, place it in: public/.well-known/apple-developer-merchantid-domain-association)
 * 
 * 3. Call this endpoint to register the domain with Revolut
 * 
 * @see https://developer.revolut.com/docs/merchant/register-domain-apple-pay
 */

const isProductionMode = () => {
  const env = process.env.NEXT_PUBLIC_REVOLUT_ENV;
  return env === 'production' || env === 'live' || env === 'prod';
};

const REVOLUT_API_BASE = isProductionMode() 
  ? 'https://merchant.revolut.com' 
  : 'https://sandbox-merchant.revolut.com';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  try {
    const { domain } = req.body;

    if (!domain) {
      return res.status(400).json({
        success: false,
        error: 'Domain is required'
      });
    }

    const secretKey = process.env.REVOLUT_SECRET_KEY;
    if (!secretKey) {
      return res.status(500).json({
        success: false,
        error: 'Revolut API key not configured'
      });
    }

    // Register the domain with Revolut's Apple Pay API
    const response = await fetch(`${REVOLUT_API_BASE}/api/apple-pay/domains/register`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ domain }),
    });

    // Success - domain registered (can be 200 or 204)
    if (response.ok) {
      // Try to get response body if available
      const responseData = await response.json().catch(() => null);
      return res.status(200).json({
        success: true,
        message: `Domain "${domain}" registered successfully for Apple Pay`,
        data: responseData
      });
    }

    // Handle error responses
    const errorData = await response.json().catch(() => ({ status: response.status }));
    
    return res.status(response.status).json({
      success: false,
      error: errorData.message || 'Failed to register domain',
      details: errorData
    });

  } catch (error) {
    console.error('Apple Pay domain registration error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message
    });
  }
}
