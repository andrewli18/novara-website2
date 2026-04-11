import { useState } from 'react'
import ReactGA from 'react-ga4'

function ContactSection({ t }) {
  const [form, setForm] = useState({
    name: '',
    city: '',
    role: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function handleChange(field, value) {
    setForm({ ...form, [field]: value })
  }

  function handleSubmit() {
    if (!form.name || !form.city || !form.role) {
      alert(t.alertMsg)
      return
    }

    setSubmitting(true)

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(function(response) {
        if (response.ok) {
          ReactGA.event({
            category: 'Contact',
            action: 'form_submit',
            label: form.role,
          })
          setSubmitted(true)
        } else {
          alert(t.errorMsg)
        }
      })
      .catch(function() {
        alert(t.errorMsg)
      })
      .finally(function() {
        setSubmitting(false)
      })
  }

const inputStyle = {
  width: '100%',
  background: 'var(--bg-primary)',
  border: 'none',
  borderBottom: '2px solid var(--border)',
  color: 'var(--text-primary)',
  padding: '0.9rem 0',
  fontSize: '0.95rem',
  outline: 'none',
  fontFamily: 'var(--font-body)',
  transition: 'border-color 0.2s',
}

  if (submitted) {
    return (
<section id="contact" className="section" style={{
  background: 'var(--bg-secondary)',
  textAlign: 'center',
}}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem',
            fontWeight: '600',
            marginBottom: '1rem',
            color: 'var(--text-primary)',
          }}>
            {t.successTitle}
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            {t.successDesc}
          </p>
        </div>
      </section>
    )
  }

  return (
 <section id="contact" className="section" style={{
  background: 'var(--bg-secondary)',
  textAlign: 'center',
}}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>

        <p className="label" style={{ justifyContent: 'center' }}>{t.label}</p>

<h2 style={{
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
  fontWeight: '400',
  lineHeight: '1.0',
  color: 'var(--text-primary)',
  textTransform: 'uppercase',
  letterSpacing: '0.02em',
  marginBottom: '1.5rem',
}}>
  {t.title1}<br />
  <span style={{ color: 'var(--accent-red)' }}>{t.title2}</span>
</h2>

        <p style={{
          color: 'var(--text-muted)',
          marginBottom: '2.5rem',
          lineHeight: '1.8',
          fontSize: '0.95rem',
          whiteSpace: 'pre-line',
        }}>
          {t.desc}
        </p>

        <a
          href="mailto:partnerships@novara.ai"
          style={{
            display: 'block',
            fontFamily: 'var(--font-mono)',
            fontSize: '1rem',
            color: '#6366f1',
            textDecoration: 'none',
            marginBottom: '3rem',
            letterSpacing: '0.05em',
          }}
        >
          partnerships@novara.ai
        </a>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          textAlign: 'left',
          marginBottom: '1.5rem',
        }}>
          <input
            style={inputStyle}
            placeholder={t.namePlaceholder}
            value={form.name}
            onChange={function(e) { handleChange('name', e.target.value) }}
          />

          <input
            style={inputStyle}
            placeholder={t.cityPlaceholder}
            value={form.city}
            onChange={function(e) { handleChange('city', e.target.value) }}
          />

          <select
            style={{ ...inputStyle, cursor: 'pointer' }}
            value={form.role}
            onChange={function(e) { handleChange('role', e.target.value) }}
          >
            <option value="">{t.roleDefault}</option>
            {t.roles.map(function(r) {
              return (
                <option key={r.value} value={r.value}>{r.label}</option>
              )
            })}
          </select>

          <textarea
            style={{ ...inputStyle, resize: 'none' }}
            placeholder={t.messagePlaceholder}
            rows={4}
            value={form.message}
            onChange={function(e) { handleChange('message', e.target.value) }}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="btn-primary"
          style={{
            width: '100%',
            padding: '1rem',
            opacity: submitting ? 0.6 : 1,
            cursor: submitting ? 'not-allowed' : 'pointer',
          }}
        >
          {submitting ? t.btnSubmitting : t.btnSubmit}
        </button>



<p style={{
  fontFamily: 'var(--font-mono)',
  fontSize: '0.72rem',
  color: 'var(--text-muted)',
  lineHeight: '1.7',
  marginTop: '2rem',
  borderTop: '1px solid var(--border)',
  paddingTop: '1.5rem',
}}>
  {t.disclaimer}
</p>

      </div>
    </section>
  )
}

export default ContactSection