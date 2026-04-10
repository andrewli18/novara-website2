function ValueSection({ t }) {
  return (
    <section id="value" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>

        <p className="label">{t.label}</p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          fontWeight: '400',
          lineHeight: '1.2',
          marginBottom: '1.5rem',
          color: 'var(--text-primary)',
          letterSpacing: '-0.01em',
        }}>
          {t.title1}<br />
          {t.title2}<span style={{ fontStyle: 'italic', color: 'var(--accent-dark)' }}>{t.title3}</span>
        </h2>

        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1.1rem',
          lineHeight: '1.9',
          marginBottom: '4rem',
          fontFamily: 'var(--font-sub)',
        }}>
          {t.desc}
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}>
          {t.quotes.map(function(quote, i) {
            return (
              <div key={quote} style={{
                padding: '2rem 2.5rem',
                border: '1px solid var(--border)',
                background: i % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-primary)',
                borderLeft: '3px solid var(--accent)',
                transition: 'box-shadow 0.3s',
              }}
              onMouseEnter={function(e) {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(200,168,75,0.08)'
              }}
              onMouseLeave={function(e) {
                e.currentTarget.style.boxShadow = 'none'
              }}
              >
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  color: 'var(--text-muted)',
                  lineHeight: '1.7',
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