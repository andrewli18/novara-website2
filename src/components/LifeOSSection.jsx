function LifeOSSection({ t }) {
  return (
    <section id="lifeos" className="section" style={{ background: 'var(--bg-secondary)' }}>
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

        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '3rem',
          flexWrap: 'wrap',
        }}>
          {t.tags.map(function(tag) {
            return (
              <span key={tag} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: '#6366f1',
                border: '1px solid rgba(99,102,241,0.3)',
                padding: '0.5rem 1.5rem',
                borderRadius: '100px',
                background: 'rgba(99,102,241,0.05)',
              }}>
                {tag}
              </span>
            )
          })}
        </div>

        <div style={{
          borderLeft: '2px solid #6366f1',
          paddingLeft: '2rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.4rem',
            fontWeight: '300',
            color: 'var(--text-primary)',
            lineHeight: '1.6',
            marginBottom: '1rem',
          }}>
            {t.closing}
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}>
            {t.quote}
          </p>
        </div>

      </div>
    </section>
  )
}

export default LifeOSSection