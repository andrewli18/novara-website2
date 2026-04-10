function EquitySection({ t }) {
  return (
    <section id="equity" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">

        <p className="label">{t.label}</p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
          fontWeight: '400',
          lineHeight: '1.2',
          marginBottom: '1.5rem',
          color: 'var(--text-primary)',
          letterSpacing: '-0.01em',
        }}>
          {t.title1}<br />
          {t.title2} <span style={{ fontStyle: 'italic', color: 'var(--accent-dark)' }}>0.001%</span>{t.title3}
        </h2>

        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1rem',
          lineHeight: '1.9',
          maxWidth: '600px',
          marginBottom: '0.8rem',
          fontFamily: 'var(--font-sub)',
        }}>
          {t.desc}
        </p>

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--text-dim)',
          marginBottom: '4rem',
          letterSpacing: '0.05em',
        }}>
          {t.disclaimer}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
        }}>

          <div style={{
            border: '1px solid var(--border)',
            background: 'var(--bg-card)',
            padding: '3rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--accent-dark)',
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
                  padding: '1.2rem 0',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-sub)',
                      fontSize: '0.95rem',
                      color: 'var(--text-muted)',
                    }}>
                      {item.label}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--text-dim)',
                      marginTop: '2px',
                      letterSpacing: '0.05em',
                    }}>
                      {item.note}
                    </p>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.6rem',
                    fontWeight: '400',
                    fontStyle: 'italic',
                    color: 'var(--accent-dark)',
                  }}>
                    {item.value}
                  </p>
                </div>
              )
            })}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{
              padding: '2.5rem',
              border: '1px solid var(--border)',
              background: 'var(--bg-card)',
              borderLeft: '3px solid var(--accent)',
            }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: '400',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                lineHeight: '1.6',
              }}>
                {t.card1Title}
              </p>
              <p style={{
                fontFamily: 'var(--font-sub)',
                fontSize: '1rem',
                fontStyle: 'italic',
                color: 'var(--accent-dark)',
                lineHeight: '1.7',
              }}>
                {t.card1Desc}
              </p>
            </div>

            <div style={{
              padding: '2.5rem',
              border: '1px solid var(--border)',
              background: 'var(--bg-card)',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--accent-dark)',
                marginBottom: '1rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>
                {t.card2Label}
              </p>
              <p style={{
                fontFamily: 'var(--font-sub)',
                fontSize: '1rem',
                color: 'var(--text-primary)',
                lineHeight: '1.8',
                marginBottom: '1rem',
              }}>
                {t.card2Desc}<br />
                <span style={{ fontStyle: 'italic', color: 'var(--accent-dark)' }}>{t.card2Highlight}</span>
              </p>
              <p style={{
                fontFamily: 'var(--font-sub)',
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                lineHeight: '1.7',
                whiteSpace: 'pre-line',
              }}>
                {t.card2Sub}
              </p>
            </div>

            <div style={{
              padding: '2.5rem',
              border: '1px solid var(--border)',
              background: 'var(--bg-secondary)',
            }}>
              <p style={{
                fontFamily: 'var(--font-sub)',
                fontSize: '0.9rem',
                fontStyle: 'italic',
                color: 'var(--text-muted)',
                marginBottom: '0.8rem',
                lineHeight: '1.6',
              }}>
                {t.card3Sub}
              </p>
              <p style={{
                fontFamily: 'var(--font-sub)',
                fontSize: '0.9rem',
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