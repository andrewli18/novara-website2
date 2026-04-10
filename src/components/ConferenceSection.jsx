function ConferenceSection({ t }) {
  return (
    <section id="conference" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">

        <p className="label">{t.label}</p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          fontWeight: '400',
          lineHeight: '1.15',
          marginBottom: '3rem',
          color: 'var(--text-primary)',
          letterSpacing: '-0.01em',
        }}>
          {t.title1}<br />
          <span style={{ fontStyle: 'italic', color: 'var(--accent-dark)' }}>{t.title2}</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          marginBottom: '4rem',
        }}>
          {t.cards.map(function(item) {
            return (
              <div key={item.title} style={{
                padding: '3rem 2.5rem',
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
                position: 'relative',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={function(e) {
                e.currentTarget.style.borderColor = 'var(--accent-border)'
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(200,168,75,0.08)'
              }}
              onMouseLeave={function(e) {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              >
                <div style={{
                  width: '30px',
                  height: '1px',
                  background: 'var(--accent)',
                  marginBottom: '1.5rem',
                }} />
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  fontWeight: '400',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}>
                  {item.title}
                </p>
                <p style={{
                  fontFamily: 'var(--font-sub)',
                  fontSize: '0.95rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.8',
                }}>
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div style={{
          borderLeft: '3px solid var(--accent)',
          paddingLeft: '2rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.3rem',
            fontStyle: 'italic',
            color: 'var(--accent-dark)',
          }}>
            {t.highlight}
          </p>
        </div>

      </div>
    </section>
  )
}

export default ConferenceSection