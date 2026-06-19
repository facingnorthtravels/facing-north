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
  <title>Official Booking Confirmation – Facing North Travels</title>
</head>
<body style="margin: 0; padding: 0; font-family: Georgia, 'Times New Roman', serif; background-color: #f0f0ee;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0f0ee; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="640" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border: 1px solid #ddd; border-radius: 4px;">

          <!-- Logo -->
          <tr>
            <td style="padding: 36px 48px 16px; text-align: center; border-bottom: 1px solid #e0e0e0;">
              <img src="${data.siteUrl}/assets/logo.png" alt="Facing North Travels" width="90" style="display: block; margin: 0 auto 12px;" />
            </td>
          </tr>

          <!-- Letter Title -->
          <tr>
            <td style="padding: 28px 48px 0; text-align: center;">
              <h1 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 1px; color: #1a1a1a; text-transform: uppercase;">Official Booking Confirmation Letter</h1>
            </td>
          </tr>

          <!-- Company Info -->
          <tr>
            <td style="padding: 24px 48px 0;">
              <p style="margin: 0; font-size: 14px; font-weight: 700; color: #1a1a1a;">Facing North Travels (Pvt) Ltd</p>
              <p style="margin: 4px 0 0; font-size: 13px; color: #555;">License No. 10751 – DTS Registered</p>
            </td>
          </tr>

          <!-- Salutation -->
          <tr>
            <td style="padding: 24px 48px 0;">
              <p style="margin: 0; font-size: 14px; color: #1a1a1a;">Dear <strong>${data.customerName}</strong>,</p>
            </td>
          </tr>

          <!-- Opening paragraph -->
          <tr>
            <td style="padding: 14px 48px 0;">
              <p style="margin: 0; font-size: 14px; color: #333; line-height: 1.7;">
                We are pleased to issue this official confirmation letter acknowledging your successful registration for the upcoming group expedition:
              </p>
            </td>
          </tr>

          <!-- Trip Summary -->
          <tr>
            <td style="padding: 20px 48px 0;">
              <table cellpadding="0" cellspacing="0">
                ${data.hostDate ? `
                <tr>
                  <td style="padding: 3px 0; font-size: 14px; color: #1a1a1a; font-weight: 700; white-space: nowrap; padding-right: 8px;">Tour Dates:</td>
                  <td style="padding: 3px 0; font-size: 14px; color: #1a1a1a;"><em>${data.hostDate}</em></td>
                </tr>
                ` : ''}
                ${data.tourDuration ? `
                <tr>
                  <td style="padding: 3px 0; font-size: 14px; color: #1a1a1a; font-weight: 700; white-space: nowrap; padding-right: 8px;">Duration:</td>
                  <td style="padding: 3px 0; font-size: 14px; color: #1a1a1a;">${data.tourDuration}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 3px 0; font-size: 14px; color: #1a1a1a; font-weight: 700; white-space: nowrap; padding-right: 8px;">Package Cost:</td>
                  <td style="padding: 3px 0; font-size: 14px; color: #1a1a1a; font-weight: 700;">£${data.tourPricePerPerson?.toFixed(2) || data.originalPrice?.toFixed(2)} per person</td>
                </tr>
                <tr>
                  <td style="padding: 3px 0; font-size: 14px; color: #1a1a1a; font-weight: 700; white-space: nowrap; padding-right: 8px;">Room Basis:</td>
                  <td style="padding: 3px 0; font-size: 14px; color: #1a1a1a;">${data.roomPreference || 'Standard'}</td>
                </tr>
                ${data.hostName ? `
                <tr>
                  <td style="padding: 3px 0; font-size: 14px; color: #1a1a1a; font-weight: 700; white-space: nowrap; padding-right: 8px;">Hosted By:</td>
                  <td style="padding: 3px 0; font-size: 14px; color: #1a1a1a;"><em>${data.hostName}</em></td>
                </tr>
                ` : ''}
              </table>
            </td>
          </tr>

          <!-- Deposit Paid Notice -->
          <tr>
            <td style="padding: 20px 48px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0fdf4; border-left: 4px solid #176060; border-radius: 4px;">
                <tr>
                  <td style="padding: 14px 16px;">
                    <p style="margin: 0; font-size: 13px; color: #166534; font-weight: 700;">Deposit Paid: £${data.amount.toFixed(2)} ${data.currency}</p>
                    <p style="margin: 4px 0 0; font-size: 12px; color: #555;">50% deposit received. The remaining balance is due prior to departure.</p>
                    ${data.couponCode ? `<p style="margin: 4px 0 0; font-size: 12px; color: #166534;">Coupon applied: ${data.couponCode} (saving £${data.discountAmount.toFixed(2)})</p>` : ''}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Guest Information -->
          <tr>
            <td style="padding: 32px 48px 0;">
              <h2 style="margin: 0 0 14px; font-size: 17px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #1a1a1a; padding-bottom: 6px;">Guest Information</h2>
              <table cellpadding="0" cellspacing="4">
                <tr>
                  <td style="font-size: 14px; color: #1a1a1a; font-weight: 700; padding-right: 12px; white-space: nowrap; vertical-align: top; padding-bottom: 5px;">Full Name:</td>
                  <td style="font-size: 14px; color: #333; padding-bottom: 5px;">${data.passengerFullName || data.customerName}</td>
                </tr>
                ${data.gender ? `
                <tr>
                  <td style="font-size: 14px; color: #1a1a1a; font-weight: 700; padding-right: 12px; white-space: nowrap; vertical-align: top; padding-bottom: 5px;">Gender:</td>
                  <td style="font-size: 14px; color: #333; padding-bottom: 5px; text-transform: capitalize;">${data.gender}</td>
                </tr>
                ` : ''}
                ${data.dateOfBirth ? `
                <tr>
                  <td style="font-size: 14px; color: #1a1a1a; font-weight: 700; padding-right: 12px; white-space: nowrap; vertical-align: top; padding-bottom: 5px;">Date of Birth:</td>
                  <td style="font-size: 14px; color: #333; padding-bottom: 5px;">${data.dateOfBirth}</td>
                </tr>
                ` : ''}
                ${data.country ? `
                <tr>
                  <td style="font-size: 14px; color: #1a1a1a; font-weight: 700; padding-right: 12px; white-space: nowrap; vertical-align: top; padding-bottom: 5px;">Nationality:</td>
                  <td style="font-size: 14px; color: #333; padding-bottom: 5px;">${data.country}</td>
                </tr>
                ` : ''}
                ${data.address ? `
                <tr>
                  <td style="font-size: 14px; color: #1a1a1a; font-weight: 700; padding-right: 12px; white-space: nowrap; vertical-align: top; padding-bottom: 5px;">Address:</td>
                  <td style="font-size: 14px; color: #333; padding-bottom: 5px;">${[data.address, data.city, data.country].filter(Boolean).join(', ')}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="font-size: 14px; color: #1a1a1a; font-weight: 700; padding-right: 12px; white-space: nowrap; vertical-align: top; padding-bottom: 5px;">Email:</td>
                  <td style="font-size: 14px; color: #333; padding-bottom: 5px;">${data.passengerEmail || data.customerEmail}</td>
                </tr>
                ${data.passengerPhone || data.customerPhone ? `
                <tr>
                  <td style="font-size: 14px; color: #1a1a1a; font-weight: 700; padding-right: 12px; white-space: nowrap; vertical-align: top; padding-bottom: 5px;">Phone:</td>
                  <td style="font-size: 14px; color: #333; padding-bottom: 5px;">${data.passengerPhone || data.customerPhone}</td>
                </tr>
                ` : ''}
                ${data.passportNumber ? `
                <tr>
                  <td style="font-size: 14px; color: #1a1a1a; font-weight: 700; padding-right: 12px; white-space: nowrap; vertical-align: top; padding-bottom: 5px;">Passport No.:</td>
                  <td style="font-size: 14px; color: #333; padding-bottom: 5px;">${data.passportNumber}</td>
                </tr>
                ` : ''}
              </table>
            </td>
          </tr>

          <!-- Booking Status -->
          <tr>
            <td style="padding: 32px 48px 0;">
              <h2 style="margin: 0 0 14px; font-size: 17px; font-weight: 700; color: #1a1a1a; border-bottom: 2px solid #1a1a1a; padding-bottom: 6px;">Booking Status</h2>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size: 14px; color: #333; padding: 4px 0; vertical-align: top;">&#9679;&nbsp;&nbsp;</td>
                  <td style="font-size: 14px; color: #333; padding: 4px 0;">Terms &amp; Conditions have been accepted</td>
                </tr>
                <tr>
                  <td style="font-size: 14px; color: #333; padding: 4px 0; vertical-align: top;">&#9679;&nbsp;&nbsp;</td>
                  <td style="font-size: 14px; color: #333; padding: 4px 0;">Itinerary has been reviewed and agreed</td>
                </tr>
                <tr>
                  <td style="font-size: 14px; color: #333; padding: 4px 0; vertical-align: top;">&#9679;&nbsp;&nbsp;</td>
                  <td style="font-size: 14px; color: #333; padding: 4px 0;">Travel guidelines have been acknowledged</td>
                </tr>
                <tr>
                  <td style="font-size: 14px; color: #333; padding: 4px 0; vertical-align: top;">&#9679;&nbsp;&nbsp;</td>
                  <td style="font-size: 14px; color: #333; padding: 4px 0;">Flight arrangements are <em>not required</em> through Facing North${data.flightPreference && data.flightPreference !== 'Not flight quote required' ? ` (${data.flightPreference})` : ''}</td>
                </tr>
                <tr>
                  <td style="font-size: 14px; color: #333; padding: 4px 0; vertical-align: top;">&#9679;&nbsp;&nbsp;</td>
                  <td style="font-size: 14px; color: #333; padding: 4px 0;">Room sharing preference has been confirmed</td>
                </tr>
                <tr>
                  <td style="font-size: 14px; color: #333; padding: 4px 0; vertical-align: top;">&#9679;&nbsp;&nbsp;</td>
                  <td style="font-size: 14px; color: #333; padding: 4px 0;">Your place on the tour is <strong>secured</strong></td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Closing paragraph -->
          <tr>
            <td style="padding: 28px 48px 0;">
              <p style="margin: 0; font-size: 14px; color: #333; line-height: 1.7;">
                We thank you for choosing <strong>Facing North Travels</strong> and look forward to welcoming you on an unforgettable journey across the northern valleys of Pakistan.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 14px 48px 0;">
              <p style="margin: 0; font-size: 14px; color: #333; line-height: 1.7;">
                Should you require any additional assistance, please do not hesitate to contact us.
              </p>
            </td>
          </tr>

          <!-- Signature -->
          <tr>
            <td style="padding: 24px 48px 40px;">
              <p style="margin: 0; font-size: 14px; color: #333;">Warm regards,</p>
              <p style="margin: 8px 0 0; font-size: 14px; font-weight: 700; color: #1a1a1a;">Team Facing North</p>
              <p style="margin: 2px 0 0; font-size: 13px; color: #555;">Facing North Travels (Pvt) Ltd</p>
              <p style="margin: 2px 0 0; font-size: 13px; color: #555;">
                <a href="mailto:info@facingnorthtravels.com" style="color: #176060; text-decoration: none;">info@facingnorthtravels.com</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #176060; padding: 18px 48px; text-align: center;">
              <p style="color: #cde8e8; font-size: 12px; margin: 0; font-family: Arial, sans-serif;">
                Facing North Travels (Pvt) Ltd &nbsp;|&nbsp; License No. 10751 – DTS Registered &nbsp;|&nbsp;
                <a href="mailto:info@facingnorthtravels.com" style="color: #ffffff; text-decoration: none;">info@facingnorthtravels.com</a>
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
      currency: order.currency || 'GBP',
      originalPrice: parseFloat(metadata.originalPrice) || 0,
      finalPrice: parseFloat(metadata.finalPrice) || 0,
      couponCode: escapeHtml(metadata.couponCode || ''),
      discountAmount: parseFloat(metadata.discountAmount) || 0,
      onlineFee: parseFloat(metadata.onlineFee) || 0,

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
      subject: `Official Booking Confirmation – ${emailData.tourTitle} | Facing North Travels`,
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
