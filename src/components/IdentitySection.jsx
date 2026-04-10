function IdentitySection({ t }) {
  return (
    <section id="identity" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">

        <p className="label">{t.label}</p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          fontWeight: '400',
          lineHeight: '1.15',
          marginBottom: '2rem',
          color: 'var(--text-primary)',
          letterSpacing: '-0.01em',
        }}>
          {t.title1}<br />
          <span style={{ fontStyle: 'italic', color: 'var(--accent-dark)' }}>{t.title2}</span>
        </h2>

        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1.1rem',
          lineHeight: '1.9',
          maxWidth: '600px',
          marginBottom: '2rem',
          fontFamily: 'var(--font-sub)',
        }}>
          {t.desc}
        </p>

        <div style={{
          display: 'inline-block',
          borderLeft: '3px solid var(--accent)',
          paddingLeft: '1.5rem',
          marginBottom: '5rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            fontStyle: 'italic',
            color: 'var(--accent-dark)',
          }}>
            {t.highlight}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
        }}>
          {t.values.map(function(item) {
            return (
              <div key={item.icon} style={{
                background: 'var(--bg-card)',
                padding: '2.5rem 1.5rem',
                transition: 'background 0.3s',
              }}
              onMouseEnter={function(e) {
                e.currentTarget.style.background = 'var(--bg-secondary)'
              }}
              onMouseLeave={function(e) {
                e.currentTarget.style.background = 'var(--bg-card)'
              }}
              >
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--accent)',
                  marginBottom: '1.2rem',
                  letterSpacing: '0.1em',
                }}>
                  {item.icon}
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: '400',
                  color: 'var(--text-primary)',
                  marginBottom: '0.8rem',
                }}>
                  {item.title}
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

        <p style={{
          marginTop: '3rem',
          fontFamily: 'var(--font-display)',
          fontSize: '1rem',
          fontStyle: 'italic',
          color: 'var(--text-muted)',
        }}>
          {t.quote}
        </p>

      </div>
    </section>
  )
}

export default IdentitySection