function ConferenceSection({ t }) {
  return (
    <section id="conference" className="section" style={{ background: 'var(--bg-primary)' }}>
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
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1px',
          background: 'var(--border)',
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: '3rem',
        }}>
          {t.cards.map(function(item) {
            return (
              <div key={item.title} className="glow-card" style={{ padding: '2.5rem 2rem' }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}>
                  {item.title}
                </p>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.7',
                }}>
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div style={{
          border: '1px solid rgba(99,102,241,0.3)',
          padding: '1.5rem 2rem',
          borderRadius: '4px',
          background: 'rgba(99,102,241,0.05)',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1rem',
            color: '#6366f1',
          }}>
            {t.highlight}
          </p>
        </div>

      </div>
    </section>
  )
}

export default ConferenceSection