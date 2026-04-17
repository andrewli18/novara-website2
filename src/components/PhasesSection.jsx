import { useState, useEffect } from 'react'

function PhasesSection({ t }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(function() {
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return function() { window.removeEventListener('resize', handleResize) }
  }, [])

  return (
    <section id="phases" className="section" style={{
      background: 'var(--bg-primary)',
      padding: isMobile ? '4rem 1.5rem' : '7rem 3rem',
    }}>
      <div className="container">

        <p className="label">{t.label}</p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: isMobile ? 'clamp(1.8rem, 6vw, 2.5rem)' : 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '700',
          lineHeight: '1.1',
          marginBottom: '1rem',
          color: 'var(--text-primary)',
        }}>
          {t.title1}
        </h2>

        <p style={{
          color: 'var(--text-muted)',
          fontSize: '0.95rem',
          lineHeight: '1.8',
          maxWidth: '560px',
          marginBottom: '3rem',
        }}>
          {t.subtitle}
        </p>

        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '1px',
          background: 'var(--border)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}>
          {t.items.map(function(phase) {
            return (
              <div key={phase.id} style={{
                background: phase.current ? 'rgba(99,102,241,0.06)' : 'var(--bg-card)',
                padding: '2rem 1.5rem',
                flex: '1',
                position: 'relative',
                borderTop: isMobile
                  ? phase.current ? '2px solid #6366f1' : '2px solid var(--border)'
                  : phase.current ? '2px solid #6366f1' : '2px solid var(--border)',
                transition: 'border-color 0.3s',
              }}>
                {phase.current && (
                  <span style={{
                    position: 'absolute',
                    top: '1.2rem',
                    right: '1.2rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    background: '#6366f1',
                    color: 'white',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '100px',
                  }}>
                    Core
                  </span>
                )}

                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.15em',
                  color: phase.current ? '#6366f1' : 'var(--text-dim)',
                  marginBottom: '0.8rem',
                  textTransform: 'uppercase',
                }}>
                  {phase.label}
                </p>

                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1.5rem',
                }}>
                  {phase.name}
                </p>

                <ul style={{ listStyle: 'none' }}>
                  {phase.items.map(function(item) {
                    return (
                      <li key={item} style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        color: 'var(--text-muted)',
                        lineHeight: '2',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}>
                        <span style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: phase.current ? '#6366f1' : 'var(--text-dim)',
                          flexShrink: 0,
                        }} />
                        {item}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>

        <div style={{
          marginTop: '3rem',
          padding: '1.5rem 2rem',
          border: '1px solid rgba(99,102,241,0.2)',
          borderRadius: '8px',
          background: 'rgba(99,102,241,0.04)',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: '#6366f1',
            letterSpacing: '0.05em',
          }}>
            {t.closing}
          </p>
        </div>

      </div>
    </section>
  )
}

export default PhasesSection