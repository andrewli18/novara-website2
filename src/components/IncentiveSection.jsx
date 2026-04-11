function IncentiveSection({ t }) {
  return (
    <section id="incentive" className="section" style={{ background: 'var(--bg-primary)' }}>
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
          marginBottom: '5rem',
        }}>
          {t.levels.map(function(item, i) {
            return (
              <div key={item.period} style={{
                padding: '3rem 2.5rem',
                background: i === 2 ? 'var(--bg-dark)' : 'var(--bg-card)',
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--accent-red)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: '400',
                  color: i === 2 ? '#f2f0eb' : 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.8rem',
                }}>
                  {item.period}
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  fontWeight: '400',
                  color: i === 2 ? '#f2f0eb' : 'var(--text-primary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  marginBottom: '0.8rem',
                }}>
                  {item.type}
                </p>
                <p style={{
                  fontSize: '0.85rem',
                  color: i === 2 ? 'rgba(242,240,235,0.5)' : 'var(--text-muted)',
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
          gap: '4rem',
          alignItems: 'start',
        }}>

          <div>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              borderBottom: '2px solid var(--border-dark)',
              paddingBottom: '1rem',
            }}>
              {t.stepsLabel}
            </p>

            {t.steps.map(function(step, i) {
              return (
                <div key={step.num} style={{
                  display: 'grid',
                  gridTemplateColumns: '50px 1fr',
                  gap: '1.5rem',
                  padding: '1.8rem 0',
                  borderBottom: '1px solid var(--border)',
                  alignItems: 'start',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: '400',
                    color: 'var(--border)',
                    lineHeight: '1',
                    letterSpacing: '0.02em',
                  }}>
                    {step.num}
                  </span>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      fontWeight: '400',
                      color: 'var(--text-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.3rem',
                    }}>
                      {step.title}
                    </p>
                    <p style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      lineHeight: '1.6',
                    }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}

            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              borderLeft: '3px solid var(--accent-red)',
              background: 'var(--bg-secondary)',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                lineHeight: '1.8',
              }}>
                {t.principle}
              </p>
            </div>
          </div>

          <div>
            <div style={{
              background: 'var(--bg-dark)',
              padding: '3rem',
              marginBottom: '1px',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent-red)',
                marginBottom: '2rem',
              }}>
                {t.distLabel}
              </p>

              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'rgba(242,240,235,0.4)',
                marginBottom: '0.5rem',
              }}>
                {t.step1}
              </p>

              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent-red)',
                marginBottom: '2rem',
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
                    borderBottom: '1px solid rgba(242,240,235,0.1)',
                  }}>
                    <span style={{
                      fontSize: '0.9rem',
                      color: 'rgba(242,240,235,0.6)',
                    }}>
                      {item.label}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.3rem',
                      fontWeight: '400',
                      color: '#f2f0eb',
                      letterSpacing: '0.02em',
                    }}>
                      {item.value}
                    </span>
                  </div>
                )
              })}

              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'rgba(242,240,235,0.3)',
                lineHeight: '1.7',
                marginTop: '1.5rem',
              }}>
                {t.distNote}
              </p>
            </div>

            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderLeft: '3px solid var(--accent-red)',
              padding: '2rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1rem',
              }}>
                {t.equityLabel}
              </p>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                lineHeight: '1.7',
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