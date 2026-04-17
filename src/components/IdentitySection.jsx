import { useState, useEffect } from 'react'

function IdentitySection({ t }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(function() {
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return function() { window.removeEventListener('resize', handleResize) }
  }, [])

  return (
    <section id="identity" className="section" style={{
      background: 'var(--bg-secondary)',
      padding: isMobile ? '4rem 1.5rem' : '7rem 3rem',
    }}>
      <div className="container">

        <p className="label">{t.label}</p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: isMobile ? 'clamp(1.8rem, 6vw, 2.5rem)' : 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: '700',
          lineHeight: '1.1',
          marginBottom: '2rem',
          color: 'var(--text-primary)',
        }}>
          {t.title1}
        </h2>

        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1rem',
          lineHeight: '2',
          maxWidth: '600px',
          marginBottom: '2.5rem',
          whiteSpace: 'pre-line',
        }}>
          {t.desc}
        </p>

        <div style={{
          display: 'inline-block',
          border: '1px solid rgba(99,102,241,0.3)',
          padding: '1rem 1.5rem',
          borderRadius: '4px',
          background: 'rgba(99,102,241,0.05)',
          marginBottom: '2rem',
          width: isMobile ? '100%' : 'auto',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: isMobile ? '0.85rem' : '1rem',
            color: '#6366f1',
            letterSpacing: '0.05em',
          }}>
            {t.highlight}
          </p>
        </div>

        <p style={{
          color: 'var(--text-muted)',
          fontSize: '0.95rem',
          lineHeight: '1.8',
          maxWidth: '600px',
          fontStyle: 'italic',
        }}>
          {t.intro}
        </p>

      </div>
    </section>
  )
}

export default IdentitySection