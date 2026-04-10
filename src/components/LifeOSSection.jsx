function LifeOSSection({ t }) {
  return (
    <section id="lifeos" className="section" style={{ background: 'var(--bg-secondary)' }}>
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

        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '4rem',
          flexWrap: 'wrap',
        }}>
          {t.tags.map(function(tag) {
            return (
              <span key={tag} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent-dark)',
                border: '1px solid var(--accent-border)',
                padding: '0.5rem 1.5rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                background: 'rgba(200,168,75,0.05)',
              }}>
                {tag}
              </span>
            )
          })}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
        }}>
          <div style={{
            borderLeft: '3px solid var(--accent)',
            paddingLeft: '2rem',
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: '400',
              fontStyle: 'italic',
              color: 'var(--text-primary)',
              lineHeight: '1.5',
              marginBottom: '1.5rem',
            }}>
              {t.closing}
            </p>
            <p style={{
              fontFamily: 'var(--font-sub)',
              fontSize: '1rem',
              color: 'var(--text-muted)',
              lineHeight: '1.8',
            }}>
              {t.quote}
            </p>
          </div>

          <div style={{
            padding: '3rem',
            border: '1px solid var(--border)',
            background: 'var(--bg-card)',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              width: '20px',
              height: '20px',
              borderTop: '1px solid var(--accent)',
              borderRight: '1px solid var(--accent)',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              width: '20px',
              height: '20px',
              borderBottom: '1px solid var(--accent)',
              borderLeft: '1px solid var(--accent)',
            }} />
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '3.5rem',
              fontWeight: '400',
              fontStyle: 'italic',
              color: 'var(--accent)',
              lineHeight: '1',
              marginBottom: '1rem',
              opacity: 0.3,
            }}>
              "
            </p>
            <p style={{
              fontFamily: 'var(--font-sub)',
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              lineHeight: '1.8',
              fontStyle: 'italic',
            }}>
              {t.quote2}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default LifeOSSection