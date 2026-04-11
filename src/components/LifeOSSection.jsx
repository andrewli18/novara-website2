function LifeOSSection({ t }) {
  return (
    <section id="lifeos" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">

        <p className="label">{t.label}</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
        }}>

          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: '400',
              lineHeight: '0.95',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              marginBottom: '3rem',
            }}>
              {t.title1}<br />
              <span style={{ color: 'var(--accent-red)' }}>{t.title2}</span>
            </h2>

            <div style={{
              display: 'flex',
              gap: '0.8rem',
              marginBottom: '3rem',
              flexWrap: 'wrap',
            }}>
              {t.tags.map(function(tag) {
                return (
                  <span key={tag} style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-primary)',
                    border: '2px solid var(--border-dark)',
                    padding: '0.4rem 1rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}>
                    {tag}
                  </span>
                )
              })}
            </div>

            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.3rem',
              textTransform: 'uppercase',
              letterSpacing: '0.03em',
              color: 'var(--text-primary)',
              lineHeight: '1.2',
            }}>
              {t.closing}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            <div style={{
              padding: '3rem',
              background: 'var(--bg-dark)',
              marginBottom: '1px',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--accent-red)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1.2rem',
              }}>
                Quote
              </p>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                color: '#f2f0eb',
                lineHeight: '1.5',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
              }}>
                {t.quote}
              </p>
            </div>

            <div style={{
              padding: '3rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '1.2rem',
              }}>
                Principle
              </p>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                color: 'var(--text-primary)',
                lineHeight: '1.5',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
              }}>
                {t.quote2}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default LifeOSSection