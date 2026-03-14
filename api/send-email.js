export const config = {
  api: { bodyParser: { sizeLimit: '10mb' } },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'RESEND_API_KEY not configured. Add it to your Vercel environment variables.' })
  }

  // Handle body parsing — Vercel may pass string or object
  let body = req.body
  if (typeof body === 'string') {
    try { body = JSON.parse(body) } catch { return res.status(400).json({ error: 'Invalid JSON body' }) }
  }

  const { to, subject, html } = body || {}
  if (!to || !html) {
    return res.status(400).json({ error: `Missing required fields. Got: to=${!!to}, html=${!!html} (${typeof html}, length=${html?.length || 0})` })
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || 'Wabi Email Builder <onboarding@resend.dev>',
        to: [to],
        subject: subject || 'Test Email from Wabi',
        html,
      }),
    })

    const data = await response.json()
    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || JSON.stringify(data) })
    }
    return res.status(200).json({ success: true, id: data.id })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
