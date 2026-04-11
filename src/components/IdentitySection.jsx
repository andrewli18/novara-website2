function IdentitySection({ t }) {
  return (
    <section id="identity" className="section" style={{ background: 'var(--bg-primary)' }}>
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
              fontSize: 'clamp(3rem, 6vw, 6rem)',
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
              borderTop: '2px solid var(--border-dark)',
              paddingTop: '2rem',
            }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                lineHeight: '1.8',
                marginBottom: '1.5rem',
              }}>
                {t.desc}
              </p>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                textTransform: 'uppercase',
                color: 'var(--accent-red)',
                letterSpacing: '0.05em',
              }}>
                {t.highlight}
              </p>
            </div>
          </div>

          <div style={{ paddingTop: '1rem' }}>
            {t.values.map(function(item, i) {
              return (
                <div key={item.icon} style={{
                  display: 'grid',
                  gridTemplateColumns: '40px 1fr',
                  gap: '1.5rem',
                  padding: '1.8rem 0',
                  borderBottom: '1px solid var(--border)',
                  alignItems: 'start',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--accent-red)',
                    letterSpacing: '0.1em',
                    paddingTop: '4px',
                  }}>
                    {item.icon}
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
                      {item.title}
                    </p>
                    <p style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      lineHeight: '1.6',
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}

            <p style={{
              marginTop: '2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontStyle: 'italic',
              color: 'var(--text-muted)',
              lineHeight: '1.7',
            }}>
              {t.quote}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default IdentitySection