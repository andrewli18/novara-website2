function LayersSection({ t }) {
  return (
    <section id="layers" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">

        <p className="label">{t.label}</p>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '700',
          lineHeight: '1.1',
          marginBottom: '1rem',
          color: 'var(--text-primary)',
        }}>
          {t.title1}<br />
          <span style={{ color: '#6366f1' }}>{t.title2}</span>
        </h2>

        <div style={{
          border: '1px solid var(--border)',
          borderRadius: '8px',
          overflow: 'hidden',
          marginTop: '3rem',
          marginBottom: '3rem',
        }}>
          {t.items.map(function(layer) {
            return (
              <div key={layer.num} style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                alignItems: 'center',
                gap: '2rem',
                padding: '1.8rem 1.5rem',
                borderBottom: '1px solid var(--border)',
                transition: 'background 0.2s',
              }}
              onMouseEnter={function(e) {
                e.currentTarget.style.background = 'rgba(99,102,241,0.04)'
              }}
              onMouseLeave={function(e) {
                e.currentTarget.style.background = 'transparent'
              }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--text-dim)',
                  letterSpacing: '0.1em',
                }}>
                  {layer.num}
                </span>

                <div>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: '600',
                    marginBottom: '0.3rem',
                    color: 'var(--text-primary)',
                  }}>
                    {layer.title}
                  </p>
                  <p style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                  }}>
                    {layer.sub}
                  </p>
                </div>

                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#6366f1',
                  border: '1px solid rgba(99,102,241,0.3)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '100px',
                  background: 'rgba(99,102,241,0.06)',
                  whiteSpace: 'nowrap',
                }}>
                  {layer.tag}
                </span>
              </div>
            )
          })}
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
            letterSpacing: '0.05em',
          }}>
            {t.closing}
          </p>
        </div>

      </div>
    </section>
  )
}

export default LayersSection