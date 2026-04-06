import { useState } from 'react'
import ReactGA from 'react-ga4'

const inputStyle = {
  width: '100%',
  background: 'rgba(99,102,241,0.04)',
  border: '1px solid #1a1a2e',
  color: '#e2e2f0',
  padding: '0.9rem 1.2rem',
  fontSize: '0.9rem',
  outline: 'none',
  fontFamily: 'Inter, sans-serif',
  borderRadius: '4px',
  transition: 'border-color 0.2s',
}

function ContactSection() {
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
    alert('Please fill in your name, city, and partnership type.')
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
        alert('Something went wrong. Please try again or email us directly.')
      }
    })
    .catch(function() {
      alert('Something went wrong. Please try again or email us directly.')
    })
    .finally(function() {
      setSubmitting(false)
    })
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
            Application Submitted
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            We will get back to you within 3 business days.
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

        <p className="label" style={{ justifyContent: 'center' }}>Contact Us</p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '600',
          marginBottom: '1rem',
          color: 'var(--text-primary)',
        }}>
          Apply to <span style={{ color: '#6366f1' }}>Partner</span>
        </h2>

        <p style={{
          color: 'var(--text-muted)',
          marginBottom: '2.5rem',
          lineHeight: '1.8',
          fontSize: '0.95rem',
        }}>
          Tell us your city, your resources, and how you would like to collaborate.
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
            placeholder="Your name"
            value={form.name}
            onChange={function(e) { handleChange('name', e.target.value) }}
          />

          <input
            style={inputStyle}
            placeholder="City / Region"
            value={form.city}
            onChange={function(e) { handleChange('city', e.target.value) }}
          />

          <select
            style={{ ...inputStyle, cursor: 'pointer' }}
            value={form.role}
            onChange={function(e) { handleChange('role', e.target.value) }}
          >
            <option value="">Partnership type</option>
            <option value="regional">Regional Partner</option>
            <option value="city">City Partner</option>
            <option value="equity">Equity Contributor</option>
            <option value="training">Training Partner</option>
          </select>

          <textarea
            style={{ ...inputStyle, resize: 'none' }}
            placeholder="Briefly describe your resources and partnership ideas"
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
          {submitting ? 'Sending...' : 'Submit Application'}
        </button>

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--text-dim)',
          lineHeight: '1.7',
          marginTop: '2rem',
          borderTop: '1px solid var(--border)',
          paddingTop: '1.5rem',
        }}>
          All partnership structures, profit sharing, and equity incentives will be
          further negotiated based on specific contributions.
          Novara reserves the right of final interpretation.
        </p>

      </div>
    </section>
  )
}

export default ContactSection