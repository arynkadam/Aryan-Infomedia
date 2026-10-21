import { Resend } from 'resend';

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key');

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, service, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
  }

  try {
    // If you haven't added an API key yet, log it to the server console gracefully
    if (!process.env.RESEND_API_KEY) {
      console.log('--- [CONTACT FORM INQUIRY RECEIVED] ---');
      console.log(`Name:    ${name}`);
      console.log(`Email:   ${email}`);
      console.log(`Service: ${service || 'General Inquiry'}`);
      console.log(`Message: ${message}`);
      console.log('----------------------------------------');
      console.log('Note: To receive real emails in your inbox, set RESEND_API_KEY in .env.local');

      return res.status(200).json({
        success: true,
        message: 'Inquiry received in development mode! Add RESEND_API_KEY to send live emails.',
      });
    }

    // Send real email notification to your inbox
    const data = await resend.emails.send({
      from: 'Aryan Infomedia <onboarding@resend.dev>',
      to: process.env.NOTIFICATION_EMAIL || 'kadamaryan293@gmail.com', // Your notification email
      subject: `New Project Inquiry: ${name} (${service || 'General'})`,
      reply_to: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0F172A; max-width: 600px; margin: 0 auto; border: 1px solid #E2E8F0; border-radius: 8px; padding: 24px;">
          <h2 style="color: #2563FF; margin-top: 0;">New Project Inquiry — Aryan Infomedia</h2>
          <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 16px 0;" />
          
          <p><strong>Client Name:</strong> ${name}</p>
          <p><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #2563FF;">${email}</a></p>
          <p><strong>Service of Interest:</strong> ${service || 'General'}</p>
          
          <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 16px; margin-top: 16px;">
            <p style="margin-top: 0; font-weight: bold; color: #334155;">Project Requirements / Message:</p>
            <p style="white-space: pre-wrap; margin-bottom: 0;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 24px 0 16px;" />
          <p style="font-size: 12px; color: #64748B; margin-bottom: 0;">Sent automatically from Aryan Infomedia Website Contact Portal.</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Email dispatch error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
}
