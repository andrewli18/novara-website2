function ConferenceSection({ t }) {
  return (
    <section id="conference" className="section" style={{ background: 'var(--bg-dark)' }}>
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
          <span style={{ color: 'var(--accent-red)' }}>{t.title2}</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'rgba(242,240,235,0.1)',
          marginBottom: '4rem',
        }}>
          {t.cards.map(function(item, i) {
            return (
              <div key={item.title} style={{
                padding: '3rem 2.5rem',
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
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  fontWeight: '400',
                  color: '#f2f0eb',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '1rem',
                }}>
                  {item.title}
                </p>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'rgba(242,240,235,0.5)',
                  lineHeight: '1.7',
                }}>
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div style={{
          borderTop: '2px solid var(--accent-red)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
            fontWeight: '400',
            color: '#f2f0eb',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            {t.highlight}
          </p>
          <div style={{
            width: '60px',
            height: '2px',
            background: 'var(--accent-red)',
          }} />
        </div>

      </div>
    </section>
  )
}

export default ConferenceSection