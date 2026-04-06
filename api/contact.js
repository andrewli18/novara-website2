import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, city, role, message } = req.body

  try {
    await resend.emails.send({
      from: 'Novara Website <onboarding@resend.dev>',
      to: 'andrew.li@ausviccapital.com',
      subject: `New Partner Application — ${name}`,
      html: `
        <h2>New Partner Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>City / Region:</strong> ${city}</p>
        <p><strong>Partnership Type:</strong> ${role}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No message provided.'}</p>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    return res.status(500).json({ error: 'Failed to send email' })
  }
}