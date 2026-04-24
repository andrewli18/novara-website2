import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' })
  }

  try {
    await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID,
      unsubscribed: false,
    })

    await resend.emails.send({
      from: 'Novara <noreply@novara.tech>',
      to: email,
      subject: 'Welcome to Novara Early Access',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #080818; color: #e2e2f0;">
          <h1 style="font-size: 24px; font-weight: 600; margin-bottom: 16px; color: #f0f0ff;">Welcome to Novara</h1>
          <p style="font-size: 16px; line-height: 1.8; color: #ababcc; margin-bottom: 24px;">
            You are now on the Novara early access list. We will keep you updated on our latest developments, research, and events.
          </p>
          <p style="font-size: 16px; line-height: 1.8; color: #ababcc; margin-bottom: 24px;">
            As an early subscriber, you will receive exclusive course discounts when we launch.
          </p>
          <p style="font-size: 14px; color: #6b6b8a;">
            — The Novara Team<br/>
            <a href="mailto:business@novara.tech" style="color: #6366f1;">business@novara.tech</a>
          </p>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    return res.status(500).json({ error: 'Failed to subscribe' })
  }
}