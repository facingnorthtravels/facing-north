/**
 * Payment Confirmation Email API
 * 
 * Sends confirmation emails to both customer and admin after successful payment.
 * Uses Resend SDK for reliable email delivery.
 * 
 * POST /api/payment/send-confirmation
 * Body: { orderId: string }
 * 
 * Environment Variables Required:
 * - RESEND_API_KEY: Your Resend API key (re_xxxxx)
 * - ADMIN_EMAIL: Admin email to receive notifications (optional, defaults to info@)
 */

import { getRevolutOrder } from '../../../lib/revolut';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
const FROM_EMAIL = 'info@facingnorthtravels.com';
const FROM_NAME = 'Facing North Travels';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'info@facingnorthtravels.com';

// UUID validation
const isValidUUID = (id) => {
  if (!id || typeof id !== 'string') return false;
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(id);
};

// HTML escape for email templates (prevent XSS)
const escapeHtml = (str) => {
  if (!str || typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

// Email templates
const getCustomerEmailTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Confirmation</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #176060 0%, #176060 100%); padding: 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">🎉 Booking Confirmed!</h1>
              <p style="color: #cccccc; margin: 10px 0 0; font-size: 16px;">Your adventure with Facing North awaits</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                Dear <strong>${data.customerName}</strong>,
              </p>
              <p style="color: #666; font-size: 16px; line-height: 1.6; margin: 0 0 30px;">
                Thank you for booking with Facing North! We're thrilled to have you join us on this incredible adventure. Your payment has been successfully processed.
              </p>
              
              <!-- Tour Details Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0fdf4; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <h3 style="color: #166534; margin: 0 0 15px; font-size: 18px;">🏔️ Tour Details</h3>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 6px 0; color: #666; font-size: 14px;">Tour Name</td>
                        <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; text-align: right; font-weight: 600;">${data.tourTitle}</td>
                      </tr>
                      ${data.tourDuration ? `
                      <tr>
                        <td style="padding: 6px 0; color: #666; font-size: 14px;">Duration</td>
                        <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; text-align: right;">${data.tourDuration}</td>
                      </tr>
                      ` : ''}
                      ${data.hostName ? `
                      <tr>
                        <td style="padding: 6px 0; color: #666; font-size: 14px;">Hosted By</td>
                        <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; text-align: right;">${data.hostName}</td>
                      </tr>
                      ` : ''}
                      ${data.hostDate ? `
                      <tr>
                        <td style="padding: 6px 0; color: #666; font-size: 14px;">Trip Date</td>
                        <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; text-align: right;">${data.hostDate}</td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding: 6px 0; color: #666; font-size: 14px;">Number of Travellers</td>
                        <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; text-align: right;">${data.numberOfTravellers}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Order Details Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <h3 style="color: #1a1a1a; margin: 0 0 15px; font-size: 18px;">💳 Payment Details</h3>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 6px 0; color: #666; font-size: 14px;">Order ID</td>
                        <td style="padding: 6px 0; color: #1a1a1a; font-size: 12px; text-align: right; font-family: monospace;">${data.orderId}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #666; font-size: 14px;">Price per Person</td>
                        <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; text-align: right;">$${data.tourPricePerPerson?.toFixed(2) || data.originalPrice?.toFixed(2)}</td>
                      </tr>
                      ${data.couponCode ? `
                      <tr>
                        <td style="padding: 6px 0; color: #666; font-size: 14px;">Coupon Applied</td>
                        <td style="padding: 6px 0; color: #16a34a; font-size: 14px; text-align: right; font-weight: 600;">${data.couponCode}</td>
                      </tr>
                      ` : ''}
                      ${data.discountAmount > 0 ? `
                      <tr>
                        <td style="padding: 6px 0; color: #666; font-size: 14px;">Discount</td>
                        <td style="padding: 6px 0; color: #16a34a; font-size: 14px; text-align: right;">-$${data.discountAmount.toFixed(2)}</td>
                      </tr>
                      ` : ''}
                      <tr style="border-top: 2px solid #e5e5e5;">
                        <td style="padding: 16px 0 8px; color: #1a1a1a; font-size: 16px; font-weight: 700;">Total Paid</td>
                        <td style="padding: 16px 0 8px; color: #059669; font-size: 20px; text-align: right; font-weight: 700;">$${data.amount.toFixed(2)} ${data.currency}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Passenger Details -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f9ff; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <h3 style="color: #1a1a1a; margin: 0 0 15px; font-size: 18px;">👤 Passenger Details</h3>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 4px 0; color: #666; font-size: 14px; width: 120px;">Full Name</td>
                        <td style="padding: 4px 0; color: #1a1a1a; font-size: 14px;">${data.passengerFullName || data.customerName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 4px 0; color: #666; font-size: 14px;">Email</td>
                        <td style="padding: 4px 0; color: #1a1a1a; font-size: 14px;">${data.passengerEmail || data.customerEmail}</td>
                      </tr>
                      ${data.passengerPhone || data.customerPhone ? `
                      <tr>
                        <td style="padding: 4px 0; color: #666; font-size: 14px;">Phone</td>
                        <td style="padding: 4px 0; color: #1a1a1a; font-size: 14px;">${data.passengerPhone || data.customerPhone}</td>
                      </tr>
                      ` : ''}
                      ${data.passportNumber ? `
                      <tr>
                        <td style="padding: 4px 0; color: #666; font-size: 14px;">Passport No.</td>
                        <td style="padding: 4px 0; color: #1a1a1a; font-size: 14px;">${data.passportNumber}</td>
                      </tr>
                      ` : ''}
                      ${data.gender ? `
                      <tr>
                        <td style="padding: 4px 0; color: #666; font-size: 14px;">Gender</td>
                        <td style="padding: 4px 0; color: #1a1a1a; font-size: 14px;">${data.gender}</td>
                      </tr>
                      ` : ''}
                      ${data.dateOfBirth ? `
                      <tr>
                        <td style="padding: 4px 0; color: #666; font-size: 14px;">Date of Birth</td>
                        <td style="padding: 4px 0; color: #1a1a1a; font-size: 14px;">${data.dateOfBirth}</td>
                      </tr>
                      ` : ''}
                      ${(data.city || data.country) ? `
                      <tr>
                        <td style="padding: 4px 0; color: #666; font-size: 14px;">Location</td>
                        <td style="padding: 4px 0; color: #1a1a1a; font-size: 14px;">${[data.city, data.country].filter(Boolean).join(', ')}</td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Trip Options -->
              ${(data.roomPreference || data.flightPreference) ? `
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fefce8; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <h3 style="color: #1a1a1a; margin: 0 0 15px; font-size: 18px;">⚙️ Your Preferences</h3>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      ${data.roomPreference ? `
                      <tr>
                        <td style="padding: 4px 0; color: #666; font-size: 14px; width: 120px;">Room</td>
                        <td style="padding: 4px 0; color: #1a1a1a; font-size: 14px;">${data.roomPreference}</td>
                      </tr>
                      ` : ''}
                      ${data.flightPreference ? `
                      <tr>
                        <td style="padding: 4px 0; color: #666; font-size: 14px;">Flight Quote</td>
                        <td style="padding: 4px 0; color: #1a1a1a; font-size: 14px;">${data.flightPreference}</td>
                      </tr>
                      ` : ''}
                      ${data.additionalInfo ? `
                      <tr>
                        <td style="padding: 4px 0; color: #666; font-size: 14px; vertical-align: top;">Additional Info</td>
                        <td style="padding: 4px 0; color: #1a1a1a; font-size: 14px;">${data.additionalInfo}</td>
                      </tr>
                      ` : ''}
                    </table>
                  </td>
                </tr>
              </table>
              ` : ''}
              
              <!-- Next Steps -->
              <h3 style="color: #1a1a1a; margin: 0 0 15px; font-size: 18px;">📋 What's Next?</h3>
              <ul style="color: #666; font-size: 14px; line-height: 1.8; padding-left: 20px; margin: 0 0 30px;">
                <li>You'll receive a detailed itinerary within 24-48 hours</li>
                <li>Our team will contact you to confirm travel dates and arrangements</li>
                <li>Please ensure your passport is valid for at least 6 months</li>
                <li>Start preparing for your adventure!</li>
              </ul>
              
              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 20px 0;">
                    <a href="${data.siteUrl}/contact" style="display: inline-block; background: linear-gradient(135deg, #176060 0%, #176060 100%); color: #ffffff; text-decoration: none; padding: 14px 40px; border-radius: 8px; font-size: 16px; font-weight: 600;">Contact Us</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #1a1a1a; padding: 30px; text-align: center;">
              <p style="color: #999; font-size: 14px; margin: 0 0 10px;">Facing North Travels - Adventure Tours</p>
              <p style="color: #666; font-size: 12px; margin: 0;">
                Questions? Reply to this email or contact us at<br>
                <a href="mailto:info@facingnorthtravels.com" style="color: #176060; text-decoration: none;">info@facingnorthtravels.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

const getAdminEmailTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Booking Received</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #176060 0%, #176060 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">💰 New Booking Received!</h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <!-- Amount Highlight -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0fdf4; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px; text-align: center;">
                    <p style="color: #166534; font-size: 14px; margin: 0 0 5px; text-transform: uppercase; letter-spacing: 1px;">Payment Received</p>
                    <p style="color: #059669; font-size: 36px; margin: 0; font-weight: 700;">$${data.amount.toFixed(2)} ${data.currency}</p>
                  </td>
                </tr>
              </table>
              
              <!-- Passenger Details -->
              <h3 style="color: #1a1a1a; margin: 0 0 15px; font-size: 16px; border-bottom: 2px solid #e5e5e5; padding-bottom: 8px;">👤 Passenger Details</h3>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px; width: 160px;">Number of Travellers</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; font-weight: 600;">${data.numberOfTravellers}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Full Name</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; font-weight: 600;">${data.passengerFullName || data.customerName}</td>
                </tr>
                ${data.passportNumber ? `
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Passport Number</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.passportNumber}</td>
                </tr>
                ` : ''}
                ${data.gender ? `
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Gender</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.gender}</td>
                </tr>
                ` : ''}
                ${data.dateOfBirth ? `
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Date of Birth</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.dateOfBirth}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Phone</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.passengerPhone || data.customerPhone || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Email</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;"><a href="mailto:${data.passengerEmail || data.customerEmail}" style="color: #059669;">${data.passengerEmail || data.customerEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Country</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.country || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">City</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.city || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Postal Code</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.postalCode || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Address</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.address || 'N/A'}</td>
                </tr>
              </table>
              
              <!-- Trip Options -->
              <h3 style="color: #1a1a1a; margin: 0 0 15px; font-size: 16px; border-bottom: 2px solid #e5e5e5; padding-bottom: 8px;">⚙️ Trip Options</h3>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px; width: 180px;">Additional Information</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.additionalInfo || 'None'}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Room Preference</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.roomPreference || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Flight Quote</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.flightPreference || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Terms & Conditions</td>
                  <td style="padding: 6px 0; color: ${data.termsAccepted === 'Accepted' ? '#16a34a' : '#dc2626'}; font-size: 14px; font-weight: 600;">${data.termsAccepted}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Itinerary Agreed</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.itineraryAgreed}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Trip Names Listed</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.tripNamesListed}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Travel Advice</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.travelAdvice}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Newsletter Subscription</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.newsletter}</td>
                </tr>
              </table>
              
              <!-- Confirmation Contact -->
              <h3 style="color: #1a1a1a; margin: 0 0 15px; font-size: 16px; border-bottom: 2px solid #e5e5e5; padding-bottom: 8px;">📧 Confirmation Contact</h3>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px; width: 160px;">Name</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; font-weight: 600;">${data.customerName}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Email</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;"><a href="mailto:${data.customerEmail}" style="color: #059669;">${data.customerEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Phone</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.customerPhone || 'N/A'}</td>
                </tr>
              </table>
              
              <!-- Tour Details -->
              <h3 style="color: #1a1a1a; margin: 0 0 15px; font-size: 16px; border-bottom: 2px solid #e5e5e5; padding-bottom: 8px;">🏔️ Tour Details</h3>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px; width: 160px;">Order ID</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 12px; font-family: monospace;">${data.orderId}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Tour Name</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; font-weight: 600;">${data.tourTitle}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Price per Person</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">$${data.tourPricePerPerson?.toFixed(2) || data.originalPrice?.toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Duration</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.tourDuration || 'N/A'}</td>
                </tr>
              </table>
              
              <!-- Host Information -->
              ${data.hostName ? `
              <h3 style="color: #1a1a1a; margin: 0 0 15px; font-size: 16px; border-bottom: 2px solid #e5e5e5; padding-bottom: 8px;">👥 Host Information</h3>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px; width: 160px;">Hosted By</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; font-weight: 600;">${data.hostName}</td>
                </tr>
                ${data.hostDate ? `
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Date</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.hostDate}</td>
                </tr>
                ` : ''}
              </table>
              ` : ''}
              
              <!-- Price Details -->
              <h3 style="color: #1a1a1a; margin: 0 0 15px; font-size: 16px; border-bottom: 2px solid #e5e5e5; padding-bottom: 8px;">💳 Price Details</h3>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px; width: 160px;">Original Price</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">$${data.originalPrice?.toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Final Price</td>
                  <td style="padding: 6px 0; color: #059669; font-size: 14px; font-weight: 600;">$${data.finalPrice?.toFixed(2) || data.amount.toFixed(2)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Coupon Code</td>
                  <td style="padding: 6px 0; color: ${data.couponCode ? '#16a34a' : '#666'}; font-size: 14px; font-weight: ${data.couponCode ? '600' : '400'};">${data.couponCode || 'N/A'}</td>
                </tr>
                ${data.discountAmount > 0 ? `
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Discount Amount</td>
                  <td style="padding: 6px 0; color: #16a34a; font-size: 14px; font-weight: 600;">-$${data.discountAmount.toFixed(2)}</td>
                </tr>
                ` : ''}
              </table>
              
              <!-- Action Buttons -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 10px 0;">
                    <a href="https://business.revolut.com/merchant/orders" style="display: inline-block; background: #1a1a1a; color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-size: 14px; font-weight: 600;">View in Revolut</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f5f5f5; padding: 20px; text-align: center;">
              <p style="color: #999; font-size: 12px; margin: 0;">
                Payment processed at ${new Date(data.completedAt || Date.now()).toLocaleString()}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { orderId } = req.body;

    if (!orderId) {
      return res.status(400).json({ error: 'Missing orderId' });
    }

    // Validate orderId format (UUID)
    if (!isValidUUID(orderId)) {
      return res.status(400).json({ error: 'Invalid orderId format' });
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not configured. Emails will not be sent.');
      return res.status(200).json({ 
        success: true, 
        message: 'Email sending skipped - Resend API key not configured',
      });
    }

    // Fetch order details from Revolut
    const order = await getRevolutOrder(orderId);
    
    if (!order || !['completed', 'authorised'].includes(order.state)) {
      return res.status(400).json({ error: 'Order not found or not completed' });
    }

    const metadata = order.metadata || {};
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://facingnorthtravels.com';

    // Prepare email data with all form fields - escape HTML to prevent XSS
    const emailData = {
      orderId: escapeHtml(order.id),
      
      // Tour Details
      tourTitle: escapeHtml(metadata.tourTitle || 'Tour Booking'),
      tourDuration: escapeHtml(metadata.tourDuration || ''),
      tourPricePerPerson: parseFloat(metadata.tourPricePerPerson) || 0,
      
      // Pricing
      numberOfTravellers: parseInt(metadata.numberOfTravellers) || 1,
      amount: order.amount / 100,
      currency: order.currency || 'USD',
      originalPrice: parseFloat(metadata.originalPrice) || 0,
      finalPrice: parseFloat(metadata.finalPrice) || 0,
      couponCode: escapeHtml(metadata.couponCode || ''),
      discountAmount: parseFloat(metadata.discountAmount) || 0,
      
      // Host Info
      hostId: escapeHtml(metadata.hostId || ''),
      hostName: escapeHtml(metadata.hostName || ''),
      hostDate: escapeHtml(metadata.hostDate || ''),
      
      // Confirmation Contact (who paid)
      customerName: escapeHtml(metadata.customerName || 'Valued Customer'),
      customerEmail: metadata.customerEmail || order.customer_email, // Keep raw for email sending
      customerPhone: escapeHtml(metadata.customerPhone || ''),
      
      // Passenger Details
      passengerFullName: escapeHtml(metadata.passengerFullName || metadata.customerName || ''),
      passengerEmail: escapeHtml(metadata.passengerEmail || metadata.customerEmail || ''),
      passengerPhone: escapeHtml(metadata.passengerPhone || metadata.customerPhone || ''),
      passportNumber: escapeHtml(metadata.passportNumber || ''),
      gender: escapeHtml(metadata.gender || ''),
      dateOfBirth: escapeHtml(metadata.dateOfBirth || ''),
      
      // Location
      country: escapeHtml(metadata.country || ''),
      city: escapeHtml(metadata.city || ''),
      postalCode: escapeHtml(metadata.postalCode || ''),
      address: escapeHtml(metadata.address || ''),
      
      // Trip Options
      roomPreference: escapeHtml(metadata.roomPreference || ''),
      flightPreference: escapeHtml(metadata.flightPreference || ''),
      additionalInfo: escapeHtml(metadata.additionalInfo || ''),
      
      // Agreements
      termsAccepted: escapeHtml(metadata.termsAccepted || 'N/A'),
      itineraryAgreed: escapeHtml(metadata.itineraryAgreed || 'N/A'),
      tripNamesListed: escapeHtml(metadata.tripNamesListed || 'N/A'),
      travelAdvice: escapeHtml(metadata.travelAdvice || 'N/A'),
      newsletter: escapeHtml(metadata.newsletter || 'No'),
      
      // Timestamps
      completedAt: order.completed_at,
      siteUrl,
    };

    const adminEmail = ADMIN_EMAIL;

    // Send customer confirmation email
    const { data: customerData, error: customerError } = await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: [emailData.customerEmail],
      subject: `🎉 Booking Confirmed - ${emailData.tourTitle}`,
      html: getCustomerEmailTemplate(emailData),
      reply_to: FROM_EMAIL,
    });

    if (customerError) {
      console.error('Failed to send customer email:', customerError);
      throw new Error(`Customer email failed: ${customerError.message}`);
    }

    console.log('Customer email sent:', customerData?.id);

    // Send admin notification email
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: `${FROM_NAME} Bookings <${FROM_EMAIL}>`,
      to: [adminEmail],
      subject: `💰 New Booking: ${emailData.customerName} - $${emailData.amount.toFixed(2)}`,
      html: getAdminEmailTemplate(emailData),
      reply_to: emailData.customerEmail, // Reply goes to customer
    });

    if (adminError) {
      console.error('Failed to send admin email:', adminError);
      // Don't throw here - customer email was sent successfully
    } else {
      console.log('Admin email sent:', adminData?.id);
    }

    return res.status(200).json({
      success: true,
      message: 'Confirmation emails sent successfully',
      customerEmailId: customerData?.id,
      adminEmailId: adminData?.id,
    });

  } catch (error) {
    console.error('Send confirmation email error:', error);
    
    return res.status(500).json({
      success: false,
      error: 'Failed to send confirmation emails',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
