function PartnerSection({ t }) {
  return (
    <section id="partner" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">

        <p className="label">{t.label}</p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
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
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
          marginBottom: '4rem',
        }}>
          {t.tiers.map(function(tier) {
            return (
              <div
                key={tier.id}
                className="glow-card"
                style={{ padding: '2.5rem 2rem', borderRadius: '8px' }}
              >
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

                <div style={{ marginBottom: '1.5rem' }}>
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

                <div style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: '1rem',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-dim)',
                    letterSpacing: '0.05em',
                  }}>
                    对象：{tier.target}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div style={{
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '2.5rem',
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
            fontSize: '1.2rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: '2rem',
          }}>
            {t.cityTitle}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
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