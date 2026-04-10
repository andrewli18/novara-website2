function IncentiveSection({ t }) {
  return (
    <section id="incentive" className="section" style={{ background: 'var(--bg-primary)' }}>
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
          marginBottom: '4rem',
          lineHeight: '1.8',
          fontSize: '0.95rem',
        }}>
          {t.desc}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--border)',
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: '4rem',
        }}>
          {t.levels.map(function(item) {
            return (
              <div key={item.period} className="glow-card" style={{ padding: '2rem' }}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: '#6366f1',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '0.8rem',
                }}>
                  {item.period}
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}>
                  {item.type}
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start',
        }}>

          <div>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--text-dim)',
              marginBottom: '1.5rem',
            }}>
              {t.stepsLabel}
            </p>

            {t.steps.map(function(step) {
              return (
                <div key={step.num} style={{
                  display: 'flex',
                  gap: '1.5rem',
                  padding: '1.5rem 0',
                  borderBottom: '1px solid var(--border)',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid rgba(99,102,241,0.3)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#6366f1',
                    flexShrink: 0,
                    background: 'rgba(99,102,241,0.05)',
                  }}>
                    {step.num}
                  </div>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      fontWeight: '600',
                      marginBottom: '0.3rem',
                      color: 'var(--text-primary)',
                    }}>
                      {step.title}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                    }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}

            <div style={{
              marginTop: '1.5rem',
              padding: '1.2rem',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              background: 'rgba(99,102,241,0.03)',
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glow-card" style={{ padding: '2rem', borderRadius: '8px' }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-dim)',
                marginBottom: '1.5rem',
              }}>
                {t.distLabel}
              </p>

              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-dim)',
                marginBottom: '0.8rem',
              }}>
                {t.step1}
              </p>

              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: '#6366f1',
                marginBottom: '1.5rem',
              }}>
                {t.step2}
              </p>

              {t.distribution.map(function(item) {
                return (
                  <div key={item.label} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.8rem 0',
                    borderBottom: '1px solid var(--border)',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                    }}>
                      {item.label}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: '#6366f1',
                    }}>
                      {item.value}
                    </span>
                  </div>
                )
              })}

              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-dim)',
                lineHeight: '1.7',
                marginTop: '1.2rem',
              }}>
                {t.distNote}
              </p>
            </div>

            <div className="glow-card" style={{ padding: '2rem', borderRadius: '8px' }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-dim)',
                marginBottom: '1rem',
              }}>
                {t.equityLabel}
              </p>
              <p style={{
                fontSize: '0.85rem',
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