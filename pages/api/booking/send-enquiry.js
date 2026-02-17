/**
 * Booking Enquiry Email API
 * 
 * Sends enquiry emails to both customer and admin when user submits a booking request.
 * Uses Resend SDK for reliable email delivery.
 * 
 * POST /api/booking/send-enquiry
 */

import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
const FROM_EMAIL = 'info@facingnorthtravels.com';
const FROM_NAME = 'Facing North Travels';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'info@facingnorthtravels.com';

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

// Customer email template - simple confirmation
const getCustomerEmailTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Booking Request Received</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #176060 0%, #176060 100%); padding: 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">📨 Request Received!</h1>
              <p style="color: #cccccc; margin: 10px 0 0; font-size: 16px;">We've got your booking enquiry</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="color: #333; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                Dear <strong>${data.fullName}</strong>,
              </p>
              <p style="color: #666; font-size: 16px; line-height: 1.6; margin: 0 0 30px;">
                Thank you for your interest in traveling with Facing North! We've received your booking enquiry and our team will review it shortly.
              </p>
              
              <!-- Request Summary -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f0fdf4; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <h3 style="color: #166534; margin: 0 0 15px; font-size: 18px;">🏔️ Your Request Summary</h3>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 6px 0; color: #666; font-size: 14px;">Tour</td>
                        <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; text-align: right; font-weight: 600;">${data.tourName}</td>
                      </tr>
                      ${data.tourDuration ? `
                      <tr>
                        <td style="padding: 6px 0; color: #666; font-size: 14px;">Duration</td>
                        <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; text-align: right;">${data.tourDuration}</td>
                      </tr>
                      ` : ''}
                      ${data.hostName && data.hostName !== 'N/A' ? `
                      <tr>
                        <td style="padding: 6px 0; color: #666; font-size: 14px;">Hosted By</td>
                        <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; text-align: right;">${data.hostName}</td>
                      </tr>
                      ` : ''}
                      ${data.hostDate && data.hostDate !== 'N/A' ? `
                      <tr>
                        <td style="padding: 6px 0; color: #666; font-size: 14px;">Trip Date</td>
                        <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; text-align: right;">${data.hostDate}</td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding: 6px 0; color: #666; font-size: 14px;">Number of Travellers</td>
                        <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; text-align: right;">${data.numberOfTravellers || 1}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Contact Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <h3 style="color: #1a1a1a; margin: 0 0 15px; font-size: 18px;">👤 Your Details</h3>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 4px 0; color: #666; font-size: 14px; width: 80px;">Name</td>
                        <td style="padding: 4px 0; color: #1a1a1a; font-size: 14px;">${data.fullName}</td>
                      </tr>
                      <tr>
                        <td style="padding: 4px 0; color: #666; font-size: 14px;">Email</td>
                        <td style="padding: 4px 0; color: #1a1a1a; font-size: 14px;">${data.email}</td>
                      </tr>
                      <tr>
                        <td style="padding: 4px 0; color: #666; font-size: 14px;">Phone</td>
                        <td style="padding: 4px 0; color: #1a1a1a; font-size: 14px;">${data.phone}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- What's Next -->
              <h3 style="color: #1a1a1a; margin: 0 0 15px; font-size: 18px;">📋 What Happens Next?</h3>
              <ul style="color: #666; font-size: 14px; line-height: 1.8; padding-left: 20px; margin: 0 0 30px;">
                <li>Our team will review your request within 24-48 hours</li>
                <li>We'll contact you to discuss availability and details</li>
                <li>Once confirmed, we'll send you payment instructions</li>
                <li>You'll receive your complete itinerary after booking</li>
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

// Admin email template - all details
const getAdminEmailTemplate = (data) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Booking Enquiry</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #176060 0%, #176060 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">📨 New Booking Enquiry!</h1>
              <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0; font-size: 14px;">Requires review - No payment received</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <!-- Passenger Details -->
              <h3 style="color: #1a1a1a; margin: 0 0 15px; font-size: 16px; border-bottom: 2px solid #e5e5e5; padding-bottom: 8px;">👤 Passenger Details</h3>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px; width: 160px;">Number of Travellers</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; font-weight: 600;">${data.numberOfTravellers || 1}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Full Name</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; font-weight: 600;">${data.fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Passport Number</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.passportNumber || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Gender</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.gender || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Date of Birth</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.dateOfBirth || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Phone</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.phone}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Email</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;"><a href="mailto:${data.email}" style="color: #059669;">${data.email}</a></td>
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
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.room || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Flight Quote</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.flight || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Terms & Conditions</td>
                  <td style="padding: 6px 0; color: ${data.conditions === 'Accepted' ? '#16a34a' : '#dc2626'}; font-size: 14px; font-weight: 600;">${data.conditions}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Itinerary Agreed</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.itinerary}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Trip Names Listed</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.tripNames}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Travel Advice</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.travelAdvice}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Newsletter Subscription</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.newsSubscription}</td>
                </tr>
              </table>
              
              <!-- Confirmation Contact -->
              <h3 style="color: #1a1a1a; margin: 0 0 15px; font-size: 16px; border-bottom: 2px solid #e5e5e5; padding-bottom: 8px;">📧 Confirmation Contact</h3>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px; width: 160px;">Name</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; font-weight: 600;">${data.confirmName}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Email</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;"><a href="mailto:${data.confirmEmail}" style="color: #059669;">${data.confirmEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Phone</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.confirmPhone}</td>
                </tr>
              </table>
              
              <!-- Tour Details -->
              <h3 style="color: #1a1a1a; margin: 0 0 15px; font-size: 16px; border-bottom: 2px solid #e5e5e5; padding-bottom: 8px;">🏔️ Tour Details</h3>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px; width: 160px;">Tour Name</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; font-weight: 600;">${data.tourName}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Price per Person</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.tourPrice}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Duration</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.tourDuration}</td>
                </tr>
              </table>
              
              <!-- Host Information -->
              ${data.hostName && data.hostName !== 'N/A' ? `
              <h3 style="color: #1a1a1a; margin: 0 0 15px; font-size: 16px; border-bottom: 2px solid #e5e5e5; padding-bottom: 8px;">👥 Host Information</h3>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px; width: 160px;">Hosted By</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px; font-weight: 600;">${data.hostName}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Date</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.hostDate}</td>
                </tr>
              </table>
              ` : ''}
              
              <!-- Price Details -->
              <h3 style="color: #1a1a1a; margin: 0 0 15px; font-size: 16px; border-bottom: 2px solid #e5e5e5; padding-bottom: 8px;">💳 Price Details</h3>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px; width: 160px;">Original Price</td>
                  <td style="padding: 6px 0; color: #1a1a1a; font-size: 14px;">${data.originalPrice}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Final Price</td>
                  <td style="padding: 6px 0; color: #059669; font-size: 14px; font-weight: 600;">${data.finalPrice}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Coupon Code</td>
                  <td style="padding: 6px 0; color: ${data.couponCode !== 'N/A' ? '#16a34a' : '#666'}; font-size: 14px; font-weight: ${data.couponCode !== 'N/A' ? '600' : '400'};">${data.couponCode}</td>
                </tr>
                ${data.couponDiscount !== 'N/A' ? `
                <tr>
                  <td style="padding: 6px 0; color: #666; font-size: 14px;">Discount</td>
                  <td style="padding: 6px 0; color: #16a34a; font-size: 14px; font-weight: 600;">-${data.couponDiscount}</td>
                </tr>
                ` : ''}
              </table>
              
              <!-- Action Note -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fef3c7; border-radius: 8px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 16px; text-align: center;">
                    <p style="color: #92400e; font-size: 14px; margin: 0; font-weight: 600;">
                      ⚠️ Action Required: Contact customer to confirm booking and arrange payment
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f5f5f5; padding: 20px; text-align: center;">
              <p style="color: #999; font-size: 12px; margin: 0;">
                Enquiry received at ${new Date().toLocaleString()}
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
    const data = req.body;

    // Validate required fields
    if (!data.email || !data.fullName || !data.confirmEmail) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.confirmEmail)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not configured. Emails will not be sent.');
      return res.status(200).json({ 
        success: true, 
        message: 'Email sending skipped - Resend API key not configured',
      });
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://facingnorthtravels.com';

    // Escape all user input for XSS prevention
    const safeData = {
      // Passenger Details
      numberOfTravellers: escapeHtml(data.numberOfTravellers?.toString() || '1'),
      fullName: escapeHtml(data.fullName),
      passportNumber: escapeHtml(data.passportNumber || ''),
      gender: escapeHtml(data.gender || ''),
      dateOfBirth: escapeHtml(data.dateOfBirth || ''),
      phone: escapeHtml(data.phone || ''),
      email: data.email, // Keep raw for sending
      country: escapeHtml(data.country || ''),
      city: escapeHtml(data.city || ''),
      postalCode: escapeHtml(data.postalCode || ''),
      address: escapeHtml(data.address || ''),
      // Trip Options
      room: escapeHtml(data.room || ''),
      flight: escapeHtml(data.flight || ''),
      additionalInfo: escapeHtml(data.additionalInfo || ''),
      conditions: escapeHtml(data.conditions || 'Not Accepted'),
      itinerary: escapeHtml(data.itinerary || 'Not Read'),
      tripNames: escapeHtml(data.trip_names || 'Not Confirmed'),
      travelAdvice: escapeHtml(data.travelAdvice || 'Not Read'),
      newsSubscription: escapeHtml(data.newsSubscription || 'No'),
      // Confirmation Contact
      confirmName: escapeHtml(data.confirmName || data.fullName),
      confirmEmail: data.confirmEmail, // Keep raw for sending
      confirmPhone: escapeHtml(data.confirmPhone || data.phone || ''),
      // Tour Details
      tourName: escapeHtml(data.tourName || 'N/A'),
      tourPrice: escapeHtml(data.tourPrice || 'N/A'),
      tourDuration: escapeHtml(data.tourDuration || 'N/A'),
      // Host Details
      hostName: escapeHtml(data.hostName || 'N/A'),
      hostDate: escapeHtml(data.hostDate || 'N/A'),
      // Coupon Details
      couponCode: escapeHtml(data.couponCode || 'N/A'),
      couponDiscount: escapeHtml(data.couponDiscount || 'N/A'),
      discountPercentage: escapeHtml(data.discountPercentage || 'N/A'),
      originalPrice: escapeHtml(data.originalPrice || 'N/A'),
      finalPrice: escapeHtml(data.finalPrice || 'N/A'),
      siteUrl,
    };

    // Send customer confirmation email
    const { data: customerData, error: customerError } = await resend.emails.send({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: [safeData.confirmEmail],
      subject: `📨 Booking Request Received - ${safeData.tourName}`,
      html: getCustomerEmailTemplate(safeData),
      reply_to: FROM_EMAIL,
    });

    if (customerError) {
      console.error('Failed to send customer email:', customerError);
      throw new Error(`Customer email failed: ${customerError.message}`);
    }

    console.log('Customer enquiry email sent:', customerData?.id);

    // Send admin notification email
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: `${FROM_NAME} Enquiries <${FROM_EMAIL}>`,
      to: [ADMIN_EMAIL],
      subject: `📨 New Enquiry: ${safeData.fullName} - ${safeData.tourName}`,
      html: getAdminEmailTemplate(safeData),
      reply_to: safeData.confirmEmail,
    });

    if (adminError) {
      console.error('Failed to send admin email:', adminError);
    } else {
      console.log('Admin enquiry email sent:', adminData?.id);
    }

    return res.status(200).json({
      success: true,
      message: 'Booking enquiry sent successfully',
      customerEmailId: customerData?.id,
      adminEmailId: adminData?.id,
    });

  } catch (error) {
    console.error('Send enquiry email error:', error);
    
    return res.status(500).json({
      success: false,
      error: 'Failed to send booking enquiry',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
