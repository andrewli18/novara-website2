import { useState, useEffect } from 'react'

function WaitlistSection({ t }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(function() {
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return function() { window.removeEventListener('resize', handleResize) }
  }, [])

  function handleSubmit() {
    if (!email || !email.includes('@')) {
  alert(t.invalidEmail || 'Please enter a valid email address')
  return
}

    setSubmitting(true)

    fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email }),
    })
      .then(function(response) {
        if (response.ok) {
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

  if (submitted) {
    return (
      <section id="waitlist" style={{
        background: 'var(--bg-secondary)',
        padding: isMobile ? '3rem 1.5rem' : '5rem 3rem',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          fontWeight: '600',
          color: 'var(--text-primary)',
          marginBottom: '0.5rem',
        }}>
          {t.successTitle}
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          {t.successDesc}
        </p>
      </section>
    )
  }

  return (
    <section id="waitlist" style={{
      background: 'var(--bg-secondary)',
      padding: isMobile ? '3rem 1.5rem' : '5rem 3rem',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '2rem' : '4rem',
          alignItems: 'center',
        }}>

          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid rgba(99,102,241,0.3)',
              padding: '4px 12px',
              borderRadius: '100px',
              marginBottom: '1.5rem',
              background: 'rgba(99,102,241,0.05)',
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#6366f1',
                boxShadow: '0 0 8px rgba(99,102,241,0.8)',
                display: 'inline-block',
              }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.15em',
                color: '#6366f1',
                textTransform: 'uppercase',
              }}>
                {t.badge}
              </span>
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: isMobile ? '1.8rem' : '2rem',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '1rem',
              color: 'var(--text-primary)',
            }}>
              {t.title1}
            </h2>

            <p style={{
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
              lineHeight: '1.8',
              marginBottom: '2rem',
            }}>
              {t.desc}
            </p>

            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? '0.8rem' : '0',
            }}>
              <input
                type="email"
                placeholder={t.placeholder}
                value={email}
                onChange={function(e) { setEmail(e.target.value) }}
                onKeyDown={function(e) { if (e.key === 'Enter') handleSubmit() }}
                style={{
                  flex: 1,
                  background: 'rgba(99,102,241,0.04)',
                  border: '1px solid var(--border)',
                  borderRight: isMobile ? '1px solid var(--border)' : 'none',
                  borderRadius: isMobile ? '4px' : '4px 0 0 4px',
                  color: 'var(--text-primary)',
                  padding: '0.9rem 1.2rem',
                  fontSize: '0.9rem',
                  outline: 'none',
                  fontFamily: 'var(--font-body)',
                }}
              />
              <button
                onClick={handleSubmit}
                className="btn-primary"
                style={{
                  borderRadius: isMobile ? '4px' : '0 4px 4px 0',
                  padding: '0.9rem 1.5rem',
                  opacity: submitting ? 0.6 : 1,
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {submitting ? t.btnSubmitting : t.btn}
              </button>
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            {t.perks.map(function(perk) {
              return (
                <div key={perk.icon} style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  padding: '1rem',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  background: 'rgba(99,102,241,0.02)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: '#6366f1',
                    letterSpacing: '0.1em',
                    flexShrink: 0,
                    paddingTop: '2px',
                  }}>
                    {perk.icon}
                  </span>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '0.2rem',
                    }}>
                      {perk.title}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      lineHeight: '1.6',
                    }}>
                      {perk.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default WaitlistSection