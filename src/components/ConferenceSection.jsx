import { useState, useEffect } from 'react'

function ConferenceSection({ t }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(function() {
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return function() { window.removeEventListener('resize', handleResize) }
  }, [])

  return (
    <section id="conference" className="section" style={{
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
          marginBottom: '3rem',
          color: 'var(--text-primary)',
        }}>
          {t.title1}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--border)',
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: '3rem',
        }}>
          {t.cards.slice(0, 3).map(function(item) {
            return (
              <div key={item.title} className="glow-card" style={{ padding: '2.5rem 2rem' }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}>
                  {item.title}
                </p>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.7',
                }}>
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div style={{
          border: '1px solid rgba(99,102,241,0.3)',
          padding: '1.5rem 2rem',
          borderRadius: '4px',
          background: 'rgba(99,102,241,0.05)',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: isMobile ? '0.85rem' : '1rem',
            color: '#6366f1',
              whiteSpace: 'pre-line',
  lineHeight: '1.8',
          }}>
            {t.highlight}
          </p>
        </div>

      </div>
    </section>
  )
}

export default ConferenceSection