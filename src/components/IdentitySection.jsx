function IdentitySection({ t }) {
  return (
    <section id="identity" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">

        <p className="label">{t.label}</p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: '700',
          lineHeight: '1.1',
          marginBottom: '2rem',
          color: 'var(--text-primary)',
        }}>
          {t.title1}<br />
          <span style={{ color: '#6366f1' }}>{t.title2}</span>
        </h2>

        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1.1rem',
          lineHeight: '1.9',
          maxWidth: '600px',
          marginBottom: '2rem',
        }}>
          {t.desc}
        </p>

        <div style={{
          display: 'inline-block',
          border: '1px solid rgba(99,102,241,0.3)',
          padding: '1rem 2rem',
          borderRadius: '4px',
          background: 'rgba(99,102,241,0.05)',
          marginBottom: '4rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1rem',
            color: '#6366f1',
            letterSpacing: '0.05em',
          }}>
            {t.highlight}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1px',
          background: 'var(--border)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}>
          {t.values.map(function(item) {
            return (
              <div key={item.icon} className="glow-card" style={{ padding: '2rem 1.5rem' }}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: '#6366f1',
                  marginBottom: '1rem',
                  letterSpacing: '0.1em',
                }}>
                  {item.icon}
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}>
                  {item.title}
                </p>
                <p style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.6',
                }}>
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>

        <p style={{
          marginTop: '2rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          color: 'var(--text-muted)',
          fontStyle: 'italic',
        }}>
          {t.quote}
        </p>

      </div>
    </section>
  )
}

export default IdentitySection