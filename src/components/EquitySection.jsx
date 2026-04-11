function EquitySection({ t }) {
  return (
    <section id="equity" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">

        <p className="label">{t.label}</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'start',
        }}>

          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: '400',
              lineHeight: '1.0',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              marginBottom: '2rem',
            }}>
              {t.title1}<br />
              {t.title2}<br />
              <span style={{ color: 'var(--accent-red)' }}>0.001%</span><br />
              {t.title3}
            </h2>

            <p style={{
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              lineHeight: '1.8',
              marginBottom: '0.8rem',
            }}>
              {t.desc}
            </p>

            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-dim)',
              marginBottom: '3rem',
              letterSpacing: '0.05em',
            }}>
              {t.disclaimer}
            </p>

            <div style={{
              borderTop: '2px solid var(--border-dark)',
              paddingTop: '2rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}>
                {t.card1Title}
              </p>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
                color: 'var(--accent-red)',
              }}>
                {t.card1Desc}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            <div style={{
              background: 'var(--bg-dark)',
              padding: '3rem',
              marginBottom: '1px',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--accent-red)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '2rem',
              }}>
                {t.tableLabel}
              </p>

              {t.rows.map(function(item) {
                return (
                  <div key={item.label} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 0',
                    borderBottom: '1px solid rgba(242,240,235,0.1)',
                  }}>
                    <div>
                      <p style={{
                        fontSize: '0.85rem',
                        color: 'rgba(242,240,235,0.7)',
                      }}>
                        {item.label}
                      </p>
                      <p style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: 'rgba(242,240,235,0.3)',
                        marginTop: '2px',
                        letterSpacing: '0.05em',
                      }}>
                        {item.note}
                      </p>
                    </div>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      fontWeight: '400',
                      color: '#f2f0eb',
                      letterSpacing: '0.02em',
                    }}>
                      {item.value}
                    </p>
                  </div>
                )
              })}
            </div>

            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              padding: '2.5rem',
              marginBottom: '1px',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}>
                {t.card2Label}
              </p>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-primary)',
                lineHeight: '1.7',
                marginBottom: '1rem',
              }}>
                {t.card2Desc}<br />
                <span style={{
                  fontFamily: 'var(--font-display)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  color: 'var(--accent-red)',
                }}>
                  {t.card2Highlight}
                </span>
              </p>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                lineHeight: '1.7',
                whiteSpace: 'pre-line',
              }}>
                {t.card2Sub}
              </p>
            </div>

            <div style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              borderLeft: '3px solid var(--accent-red)',
              padding: '2rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                lineHeight: '1.7',
                marginBottom: '0.8rem',
              }}>
                {t.card3Sub}
              </p>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                lineHeight: '1.7',
                whiteSpace: 'pre-line',
              }}>
                {t.card3Desc}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default EquitySection