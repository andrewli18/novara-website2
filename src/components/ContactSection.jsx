import { useState } from 'react'

const inputStyle = {
  width: '100%',
  background: '#111',
  border: '1px solid #2a2825',
  color: '#f0ede8',
  padding: '0.9rem 1.2rem',
  fontSize: '0.9rem',
  outline: 'none',
  fontFamily: 'sans-serif',
}

function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    city: '',
    role: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(field, value) {
    setForm({ ...form, [field]: value })
  }

  function handleSubmit() {
    if (!form.name || !form.city || !form.role) {
      alert('Please fill in your name, city, and partnership type.')
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section style={{
        padding: '7rem 3rem',
        background: '#111',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '2rem',
            fontWeight: '300',
            marginBottom: '1rem',
          }}>
            Application Submitted
          </p>
          <p style={{ color: '#7a7570', lineHeight: '1.8' }}>
            We will get back to you within 3 business days.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section style={{
      padding: '7rem 3rem',
      background: '#111',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>

        <p style={{
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#c8a96e',
          marginBottom: '1.5rem',
        }}>
          Contact Us
        </p>

        <h2 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: '300',
          marginBottom: '1rem',
        }}>
          Apply to Partner
        </h2>

        <p style={{
          color: '#7a7570',
          marginBottom: '2.5rem',
          lineHeight: '1.8',
        }}>
          Tell us your city, your resources, and how you'd like to collaborate.
        </p>

        
        <a
          href="mailto:partnerships@novara.ai"
          style={{
            display: 'block',
            fontFamily: 'Georgia, serif',
            fontSize: '1.4rem',
            fontWeight: '300',
            color: '#c8a96e',
            textDecoration: 'none',
            marginBottom: '3rem',
          }}
        >
          partnerships@novara.ai
        </a>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          textAlign: 'left',
          marginBottom: '2rem',
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
          style={{
            width: '100%',
            background: '#c8a96e',
            color: '#0a0a0a',
            border: 'none',
            padding: '1rem',
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Submit Application
        </button>

        <p style={{
          fontSize: '0.75rem',
          color: '#7a7570',
          lineHeight: '1.7',
          marginTop: '2rem',
          borderTop: '1px solid #2a2825',
          paddingTop: '1.5rem',
        }}>
          All partnership structures, profit sharing, and equity incentives will be further negotiated based on specific contributions. Novara reserves the right of final interpretation.
        </p>

      </div>
    </section>
  )
}

export default ContactSection