/**
 * Cloudflare Worker Entry Point
 * - Serves Next.js pre-rendered static assets via env.ASSETS
 * - Handles secure server-side POST /api/contact dispatches via Resend API
 */

// Helper to escape untrusted user input before interpolating into HTML
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Basic RFC 5322 compliant email validator regex
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Handle Contact API Route
    if (url.pathname === '/api/contact') {
      // Enforce POST method only
      if (request.method !== 'POST') {
        return new Response(
          JSON.stringify({ success: false, message: 'Method Not Allowed' }),
          { status: 405, headers: { 'Content-Type': 'application/json', 'Allow': 'POST' } }
        );
      }

      // Enforce Content-Type
      const contentType = request.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) {
        return new Response(
          JSON.stringify({ success: false, message: 'Unsupported Media Type: application/json required' }),
          { status: 415, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // Abuse protection: limit payload size (max 32KB)
      const contentLength = parseInt(request.headers.get('content-length') || '0', 10);
      if (contentLength > 32768) {
        return new Response(
          JSON.stringify({ success: false, message: 'Payload Too Large: maximum allowed size is 32KB' }),
          { status: 413, headers: { 'Content-Type': 'application/json' } }
        );
      }

      let body;
      try {
        body = await request.json();
      } catch {
        return new Response(
          JSON.stringify({ success: false, message: 'Malformed JSON payload' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }

      const { name, email, service, message } = body;

      // Input Validation & Field Length Bounds
      if (typeof name !== 'string' || name.trim().length === 0 || name.trim().length > 100) {
        return new Response(
          JSON.stringify({ success: false, message: 'Invalid name (must be between 1 and 100 characters)' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }

      if (typeof email !== 'string' || email.trim().length > 100 || !EMAIL_REGEX.test(email.trim())) {
        return new Response(
          JSON.stringify({ success: false, message: 'Invalid or malformed email address' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }

      if (service !== undefined && (typeof service !== 'string' || service.length > 120)) {
        return new Response(
          JSON.stringify({ success: false, message: 'Service name exceeds maximum limit of 120 characters' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }

      if (typeof message !== 'string' || message.trim().length < 5 || message.trim().length > 5000) {
        return new Response(
          JSON.stringify({ success: false, message: 'Message must be between 5 and 5,000 characters' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // Check for Resend API Key in server environment variables
      const apiKey = env.RESEND_API_KEY;
      if (!apiKey) {
        return new Response(
          JSON.stringify({ success: false, message: 'Server configuration error: RESEND_API_KEY not configured.' }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // Sender configuration:
      // Note: 'onboarding@resend.dev' is Resend's sandbox sender for testing only (delivers only to account owner's email).
      // For production, configure RESEND_FROM_EMAIL (e.g., 'Aryan Infomedia <contact@aryaninfomedia.com>')
      // after verifying your domain in the Resend dashboard.
      const fromEmail = env.RESEND_FROM_EMAIL || 'Aryan Infomedia <onboarding@resend.dev>';
      const toEmail = env.NOTIFICATION_EMAIL || 'kadamaryan293@gmail.com';

      // Sanitized inputs for safe HTML email rendering
      const safeName = escapeHtml(name.trim());
      const safeEmail = escapeHtml(email.trim());
      const safeService = escapeHtml((service || 'General Inquiry').trim());
      const safeMessage = escapeHtml(message.trim());

      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [toEmail],
            reply_to: email.trim(),
            subject: `New Project Inquiry: ${safeName} (${safeService})`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #0F172A; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 8px; padding: 24px; background-color: #ffffff;">
                <h2 style="color: #2563FF; margin-top: 0; font-size: 20px; font-weight: 700;">New Project Inquiry — Aryan Infomedia</h2>
                <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 16px 0;" />
                
                <p style="margin: 8px 0;"><strong>Client Name:</strong> ${safeName}</p>
                <p style="margin: 8px 0;"><strong>Email Address:</strong> <a href="mailto:${safeEmail}" style="color: #2563FF; text-decoration: none;">${safeEmail}</a></p>
                <p style="margin: 8px 0;"><strong>Service of Interest:</strong> ${safeService}</p>
                
                <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 16px; margin-top: 16px;">
                  <p style="margin-top: 0; font-weight: 600; color: #334155; font-size: 14px;">Project Requirements / Message:</p>
                  <p style="white-space: pre-wrap; margin-bottom: 0; color: #1E293B; font-size: 14px;">${safeMessage}</p>
                </div>
                
                <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 24px 0 16px;" />
                <p style="font-size: 12px; color: #64748B; margin-bottom: 0;">Dispatched securely via Aryan Infomedia Edge Portal.</p>
              </div>
            `,
          }),
        });

        const resendData = await resendResponse.json();

        if (!resendResponse.ok) {
          return new Response(
            JSON.stringify({ success: false, message: resendData.message || 'Failed to dispatch email' }),
            { status: resendResponse.status, headers: { 'Content-Type': 'application/json' } }
          );
        }

        return new Response(
          JSON.stringify({ success: true, id: resendData.id }),
          { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
      } catch (err) {
        return new Response(
          JSON.stringify({ success: false, message: 'Internal Server Error while communicating with email provider' }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // 2. Delegate all other routes to Next.js pre-rendered static assets
    return env.ASSETS.fetch(request);
  },
};
