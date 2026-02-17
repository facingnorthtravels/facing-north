# Revolut Payment Integration

## Overview

Embedded Revolut widget integration for secure payment processing.

## Flow

```
1. User fills form → clicks "Pay Now"
2. POST /api/payment/create-order (server validates price & coupon)
3. Redirect to /payment/checkout?order_id=xxx
4. User enters card in embedded Revolut widget
5. On success → auto-redirect to /payment/success
```

## Files

| File | Purpose |
|------|---------|
| `lib/revolut.js` | API helper (create/get orders, verify webhooks) |
| `pages/api/payment/create-order.js` | Creates order with server-side validation |
| `pages/api/payment/verify.js` | Verifies payment status |
| `pages/api/payment/webhook.js` | Handles Revolut webhooks |
| `pages/payment/checkout.jsx` | Embedded payment widget |
| `pages/payment/success.jsx` | Success confirmation |
| `pages/payment/failure.jsx` | Failure page |

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
REVOLUT_SECRET_KEY=sk_xxx
NEXT_PUBLIC_REVOLUT_PUBLIC_KEY=pk_xxx
NEXT_PUBLIC_REVOLUT_ENV=sandbox  # or 'production'
REVOLUT_WEBHOOK_SECRET=whsec_xxx  # optional
```

## Dependencies

```bash
npm install @revolut/checkout
```

## Test Card

- Number: `4929 4212 3460 0821`
- Expiry: Any future date
- CVV: `123`

## Apple Pay Setup (Production Only)

⚠️ **Important**: Apple Pay is NOT available in sandbox mode. You can only test it in production.

### Step 1: Download Domain Verification File

Download the Apple Pay domain association file from Revolut:
```
https://developer.revolut.com/assets/apple-pay/apple-developer-merchantid-domain-association
```

### Step 2: Host the Verification File

Place the downloaded file at:
```
public/.well-known/apple-developer-merchantid-domain-association
```

This makes it accessible at: `https://yourdomain.com/.well-known/apple-developer-merchantid-domain-association`

### Step 3: Register Domain with Revolut

After deploying to production, call the registration API:

```bash
curl -X POST https://yourdomain.com/api/payment/register-apple-pay-domain \
  -H "Content-Type: application/json" \
  -d '{"domain": "yourdomain.com"}'
```

Or use the Revolut API directly:
```bash
curl -X POST https://merchant.revolut.com/api/apple-pay/domains/register \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{"domain": "yourdomain.com"}'
```

### Device Compatibility

| Payment Method | Availability |
|---------------|--------------|
| Apple Pay | Safari on macOS/iOS with Apple Pay configured |
| Google Pay | Chrome, Edge, Opera with Google Pay configured |

The SDK automatically detects which method is available and shows the appropriate button.

## Production Checklist

- [ ] Change `NEXT_PUBLIC_REVOLUT_ENV` to `production`
- [ ] Use live API keys
- [ ] Download and host Apple Pay domain verification file
- [ ] Register domain with Revolut for Apple Pay
- [ ] Test on actual Apple device with Apple Pay configured
