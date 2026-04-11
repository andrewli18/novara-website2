function PartnerSection({ t }) {
  return (
    <section id="partner" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">

        <p className="label">{t.label}</p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          fontWeight: '400',
          lineHeight: '1.15',
          marginBottom: '1rem',
          color: 'var(--text-primary)',
          letterSpacing: '-0.01em',
        }}>
          {t.title}
        </h2>

        <p style={{
          color: 'var(--text-muted)',
          maxWidth: '560px',
          marginBottom: '4rem',
          lineHeight: '1.9',
          fontFamily: 'var(--font-sub)',
        }}>
          {t.desc}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          marginBottom: '4rem',
        }}>
          {t.tiers.map(function(tier) {
            return (
              <div key={tier.id} style={{
                padding: '3rem 2.5rem',
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={function(e) {
                e.currentTarget.style.borderColor = 'var(--accent-border)'
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(200,168,75,0.08)'
              }}
              onMouseLeave={function(e) {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              >
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.2em',
                  color: 'var(--accent-dark)',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                }}>
                  {tier.layer}
                </p>

                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  fontWeight: '400',
                  color: 'var(--text-primary)',
                  marginBottom: '0.3rem',
                }}>
                  {tier.name}
                </p>

                <p style={{
                  fontFamily: 'var(--font-sub)',
                  fontSize: '0.9rem',
                  fontStyle: 'italic',
                  color: 'var(--text-muted)',
                  marginBottom: '2rem',
                }}>
                  {tier.nameZh}
                </p>

                <div style={{ marginBottom: '2rem' }}>
                  {tier.items.map(function(item) {
                    return (
                      <p key={item} style={{
                        fontFamily: 'var(--font-sub)',
                        fontSize: '0.9rem',
                        color: 'var(--text-muted)',
                        lineHeight: '2',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}>
                        <span style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          background: 'var(--accent)',
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
                    {tier.target_label}： {tier.target}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div style={{
          border: '1px solid var(--border)',
          padding: '3rem',
          background: 'var(--bg-card)',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent-dark)',
            marginBottom: '1.5rem',
          }}>
            {t.cityLabel}
          </p>

          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.3rem',
            fontWeight: '400',
            color: 'var(--text-primary)',
            marginBottom: '2.5rem',
          }}>
            {t.cityTitle}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}>
            {t.cityRoles.map(function(item) {
              return (
                <div key={item.role} style={{
                  padding: '2rem',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-secondary)',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: '400',
                    color: 'var(--accent-dark)',
                    marginBottom: '0.5rem',
                  }}>
                    {item.role}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-sub)',
                    fontSize: '0.9rem',
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