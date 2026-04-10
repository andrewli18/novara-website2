function IncentiveSection({ t }) {
  return (
    <section id="incentive" className="section" style={{ background: 'var(--bg-primary)' }}>
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
          marginBottom: '5rem',
        }}>
          {t.levels.map(function(item) {
            return (
              <div key={item.period} style={{
                padding: '3rem 2.5rem',
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
                position: 'relative',
              }}>
                <div style={{
                  width: '30px',
                  height: '1px',
                  background: 'var(--accent)',
                  marginBottom: '1.5rem',
                }} />
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--accent-dark)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '0.8rem',
                }}>
                  {item.period}
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: '400',
                  color: 'var(--text-primary)',
                  marginBottom: '0.8rem',
                }}>
                  {item.type}
                </p>
                <p style={{
                  fontFamily: 'var(--font-sub)',
                  fontSize: '0.9rem',
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
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start',
        }}>

          <div>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent-dark)',
              marginBottom: '2rem',
            }}>
              {t.stepsLabel}
            </p>

            {t.steps.map(function(step) {
              return (
                <div key={step.num} style={{
                  display: 'flex',
                  gap: '2rem',
                  padding: '1.8rem 0',
                  borderBottom: '1px solid var(--border)',
                  alignItems: 'flex-start',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontStyle: 'italic',
                    color: 'var(--accent)',
                    opacity: 0.5,
                    lineHeight: '1',
                    flexShrink: 0,
                    minWidth: '2rem',
                  }}>
                    {step.num}
                  </span>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      fontWeight: '400',
                      marginBottom: '0.3rem',
                      color: 'var(--text-primary)',
                    }}>
                      {step.title}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-sub)',
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                    }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}

            <div style={{
              marginTop: '2rem',
              padding: '1.5rem 2rem',
              borderLeft: '3px solid var(--accent)',
              background: 'rgba(200,168,75,0.04)',
            }}>
              <p style={{
                fontFamily: 'var(--font-sub)',
                fontSize: '0.9rem',
                fontStyle: 'italic',
                color: 'var(--text-muted)',
                lineHeight: '1.8',
              }}>
                {t.principle}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{
              padding: '3rem',
              border: '1px solid var(--border)',
              background: 'var(--bg-card)',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent-dark)',
                marginBottom: '2rem',
              }}>
                {t.distLabel}
              </p>

              <p style={{
                fontFamily: 'var(--font-sub)',
                fontSize: '0.9rem',
                color: 'var(--text-dim)',
                marginBottom: '0.5rem',
                fontStyle: 'italic',
              }}>
                {t.step1}
              </p>

              <p style={{
                fontFamily: 'var(--font-sub)',
                fontSize: '0.9rem',
                color: 'var(--accent-dark)',
                marginBottom: '2rem',
                fontStyle: 'italic',
              }}>
                {t.step2}
              </p>

              {t.distribution.map(function(item) {
                return (
                  <div key={item.label} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 0',
                    borderBottom: '1px solid var(--border)',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-sub)',
                      fontSize: '0.95rem',
                      color: 'var(--text-muted)',
                    }}>
                      {item.label}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.3rem',
                      fontWeight: '400',
                      fontStyle: 'italic',
                      color: 'var(--accent-dark)',
                    }}>
                      {item.value}
                    </span>
                  </div>
                )
              })}

              <p style={{
                fontFamily: 'var(--font-sub)',
                fontSize: '0.85rem',
                fontStyle: 'italic',
                color: 'var(--text-dim)',
                lineHeight: '1.7',
                marginTop: '1.5rem',
              }}>
                {t.distNote}
              </p>
            </div>

            <div style={{
              padding: '2.5rem',
              border: '1px solid var(--border)',
              background: 'var(--bg-secondary)',
              borderLeft: '3px solid var(--accent)',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent-dark)',
                marginBottom: '1rem',
              }}>
                {t.equityLabel}
              </p>
              <p style={{
                fontFamily: 'var(--font-sub)',
                fontSize: '0.95rem',
                fontStyle: 'italic',
                color: 'var(--text-muted)',
                lineHeight: '1.8',
              }}>
                {t.equityDesc}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default IncentiveSection