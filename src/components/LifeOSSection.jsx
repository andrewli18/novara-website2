function LifeOSSection({ t }) {
  return (
    <section id="lifeos" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">

        <p className="label">{t.label}</p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: '700',
          lineHeight: '1.1',
          marginBottom: '3rem',
          color: 'var(--text-primary)',
        }}>
          {t.title1}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--border)',
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: '3rem',
        }}>
          {t.tags.map(function(tag) {
            return (
              <div key={tag.title} className="glow-card" style={{ padding: '2.5rem 2rem' }}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: '#6366f1',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}>
                  {tag.title}
                </p>
                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.8',
                }}>
                  {tag.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div style={{
          borderLeft: '2px solid #6366f1',
          paddingLeft: '2rem',
          marginBottom: '1.5rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.3rem',
            fontWeight: '300',
            color: 'var(--text-primary)',
            lineHeight: '1.6',
            marginBottom: '1rem',
          }}>
            {t.closing}
          </p>
        </div>

        <div style={{
          padding: '1.5rem 2rem',
          border: '1px solid rgba(99,102,241,0.2)',
          borderRadius: '8px',
          background: 'rgba(99,102,241,0.04)',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: '#6366f1',
            lineHeight: '1.7',
          }}>
            {t.quote2}
          </p>
        </div>

      </div>
    </section>
  )
}

export default LifeOSSection