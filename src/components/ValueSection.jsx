function ValueSection({ t }) {
  return (
    <section id="value" className="section" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">

        <p className="label" style={{ color: 'rgba(242,240,235,0.4)' }}>{t.label}</p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 7vw, 7rem)',
          fontWeight: '400',
          lineHeight: '0.95',
          color: '#f2f0eb',
          textTransform: 'uppercase',
          letterSpacing: '0.02em',
          marginBottom: '5rem',
        }}>
          {t.title1}<br />
          {t.title2}<br />
          <span style={{ color: 'var(--accent-red)' }}>{t.title3}</span>
        </h2>

        <p style={{
          fontSize: '1rem',
          color: 'rgba(242,240,235,0.6)',
          lineHeight: '1.8',
          maxWidth: '560px',
          marginBottom: '5rem',
        }}>
          {t.desc}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1px',
          background: 'rgba(242,240,235,0.1)',
        }}>
          {t.quotes.map(function(quote, i) {
            return (
              <div key={quote} style={{
                padding: '3rem',
                background: 'var(--bg-dark)',
                transition: 'background 0.2s',
              }}
              onMouseEnter={function(e) {
                e.currentTarget.style.background = '#1a1a1a'
              }}
              onMouseLeave={function(e) {
                e.currentTarget.style.background = 'var(--bg-dark)'
              }}
              >
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--accent-red)',
                  letterSpacing: '0.15em',
                  marginBottom: '1.2rem',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: '400',
                  color: '#f2f0eb',
                  lineHeight: '1.5',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
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