import { useState, useEffect } from 'react'

function PartnerSection({ t }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(function() {
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return function() { window.removeEventListener('resize', handleResize) }
  }, [])

  return (
    <section id="partner" className="section" style={{
      background: 'var(--bg-secondary)',
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
          {t.title}
        </h2>

        <p style={{
          color: 'var(--text-muted)',
          maxWidth: '560px',
          marginBottom: '3rem',
          lineHeight: '1.8',
          fontSize: '0.95rem',
        }}>
          {t.desc}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: '1.5rem',
          marginBottom: '4rem',
        }}>
          {t.tiers.map(function(tier) {
            return (
              <div key={tier.id} className="glow-card" style={{
                padding: '2.5rem 2rem',
                borderRadius: '8px',
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  color: '#6366f1',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                }}>
                  {tier.layer}
                </p>

                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '0.2rem',
                }}>
                  {tier.name}
                </p>

                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  marginBottom: '1.5rem',
                }}>
                  {tier.nameZh}
                </p>

                <div>
                  {tier.items.map(function(item) {
                    return (
                      <p key={item} style={{
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
                          background: '#6366f1',
                          flexShrink: 0,
                        }} />
                        {item}
                      </p>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        <div style={{
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: isMobile ? '2rem 1.5rem' : '2.5rem',
          background: 'var(--bg-card)',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#6366f1',
            marginBottom: '1.5rem',
          }}>
            {t.cityLabel}
          </p>

          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: isMobile ? '1rem' : '1.3rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: '2rem',
            lineHeight: '1.4',
          }}>
            {t.cityTitle}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '1rem',
          }}>
            {t.cityRoles.map(function(item) {
              return (
                <div key={item.role} style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  background: 'rgba(99,102,241,0.03)',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#6366f1',
                    marginBottom: '0.4rem',
                  }}>
                    {item.role}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.6',
                  }}>
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default PartnerSection