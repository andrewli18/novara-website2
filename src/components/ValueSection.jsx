function ValueSection({ t }) {
  return (
    <section id="value" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>

        <p className="label" style={{ justifyContent: 'center' }}>{t.label}</p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: '700',
          lineHeight: '1.2',
          marginBottom: '1.5rem',
          color: 'var(--text-primary)',
        }}>
          {t.title1}<br />
          {t.title2}<span style={{ color: '#6366f1' }}>{t.title3}</span>
        </h2>

        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1rem',
          lineHeight: '1.9',
          marginBottom: '3rem',
        }}>
          {t.desc}
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginBottom: '3rem',
          textAlign: 'left',
        }}>
          {t.quotes.map(function(quote) {
            return (
              <div key={quote} style={{
                padding: '1.2rem 2rem',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                background: 'rgba(99,102,241,0.03)',
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.6',
                }}>
                  "{quote}"
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default ValueSection