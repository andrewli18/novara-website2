function EquitySection({ t }) {
  return (
    <section id="equity" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">

        <p className="label">{t.label}</p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
          fontWeight: '700',
          lineHeight: '1.2',
          marginBottom: '1.5rem',
          color: 'var(--text-primary)',
        }}>
          {t.title1}<br />
          {t.title2} <span style={{ color: '#6366f1' }}>0.001%</span>{t.title3}
        </h2>

        <p style={{
          color: 'var(--text-muted)',
          fontSize: '0.95rem',
          lineHeight: '1.8',
          maxWidth: '600px',
          marginBottom: '1rem',
        }}>
          {t.desc}
        </p>

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          color: 'var(--text-dim)',
          marginBottom: '3rem',
        }}>
          {t.disclaimer}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginBottom: '3rem',
        }}>

          <div className="glow-card" style={{ padding: '2.5rem', borderRadius: '8px' }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-dim)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '2rem',
            }}>
              {t.tableLabel}
            </p>

            {t.rows.map(function(item) {
              return (
                <div key={item.label} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem 0',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                    }}>
                      {item.label}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-dim)',
                      marginTop: '2px',
                    }}>
                      {item.note}
                    </p>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    color: '#6366f1',
                    textShadow: '0 0 20px rgba(99,102,241,0.3)',
                  }}>
                    {item.value}
                  </p>
                </div>
              )
            })}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glow-card" style={{ padding: '2rem', borderRadius: '8px' }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                lineHeight: '1.6',
              }}>
                {t.card1Title}
              </p>
              <p style={{
                color: '#6366f1',
                fontSize: '1rem',
                lineHeight: '1.7',
              }}>
                {t.card1Desc}
              </p>
            </div>

            <div className="glow-card" style={{ padding: '2rem', borderRadius: '8px' }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--text-dim)',
                marginBottom: '1rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                {t.card2Label}
              </p>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-primary)',
                lineHeight: '1.7',
                marginBottom: '1rem',
              }}>
                {t.card2Desc}<br />
                <span style={{ color: '#6366f1' }}>{t.card2Highlight}</span>
              </p>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                lineHeight: '1.6',
                whiteSpace: 'pre-line',
              }}>
                {t.card2Sub}
              </p>
            </div>

            <div className="glow-card" style={{ padding: '2rem', borderRadius: '8px' }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--text-dim)',
                marginBottom: '0.8rem',
              }}>
                {t.card3Sub}
              </p>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                lineHeight: '1.6',
                whiteSpace: 'pre-line',
              }}>
                {t.card3Desc}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default EquitySection