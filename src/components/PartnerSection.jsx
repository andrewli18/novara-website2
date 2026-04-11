function PartnerSection({ t }) {
  return (
    <section id="partner" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">

        <p className="label">{t.label}</p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: '400',
          lineHeight: '1.0',
          color: 'var(--text-primary)',
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
          marginBottom: '1rem',
        }}>
          {t.title}
        </h2>

        <p style={{
          fontSize: '0.95rem',
          color: 'var(--text-muted)',
          maxWidth: '560px',
          marginBottom: '5rem',
          lineHeight: '1.8',
        }}>
          {t.desc}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--border)',
          marginBottom: '4rem',
        }}>
          {t.tiers.map(function(tier, i) {
            return (
              <div key={tier.id} style={{
                padding: '3rem 2.5rem',
                background: 'var(--bg-primary)',
                transition: 'background 0.2s',
              }}
              onMouseEnter={function(e) {
                e.currentTarget.style.background = 'var(--bg-card)'
              }}
              onMouseLeave={function(e) {
                e.currentTarget.style.background = 'var(--bg-primary)'
              }}
              >
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--accent-red)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}>
                  {tier.layer}
                </p>

                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: '400',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  marginBottom: '0.3rem',
                }}>
                  {tier.name}
                </p>

                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  marginBottom: '2rem',
                  letterSpacing: '0.05em',
                }}>
                  {tier.nameZh}
                </p>

                <div style={{ marginBottom: '2rem' }}>
                  {tier.items.map(function(item) {
                    return (
                      <p key={item} style={{
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        lineHeight: '2',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}>
                        <span style={{
                          width: '6px',
                          height: '2px',
                          background: 'var(--accent-red)',
                          flexShrink: 0,
                        }} />
                        {item}
                      </p>
                    )
                  })}
                </div>

                <div style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: '1.2rem',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-dim)',
                    letterSpacing: '0.08em',
                  }}>
                    {tier.target_label}：{tier.target}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div style={{
          background: 'var(--bg-dark)',
          padding: '4rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent-red)',
            marginBottom: '1.5rem',
          }}>
            {t.cityLabel}
          </p>

          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
            fontWeight: '400',
            color: '#f2f0eb',
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
            marginBottom: '3rem',
          }}>
            {t.cityTitle}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'rgba(242,240,235,0.1)',
          }}>
            {t.cityRoles.map(function(item) {
              return (
                <div key={item.role} style={{
                  padding: '2rem',
                  background: 'var(--bg-dark)',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: '400',
                    color: 'var(--accent-red)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.5rem',
                  }}>
                    {item.role}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'rgba(242,240,235,0.5)',
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
