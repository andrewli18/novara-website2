function HeroSection({ t }) {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 4rem',
      paddingTop: '7rem',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg-primary)',
    }}>

      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '45%',
        height: '100%',
        background: 'var(--bg-dark)',
        zIndex: 0,
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '0',
        alignItems: 'center',
        minHeight: '80vh',
      }}>

        <div style={{ paddingRight: '4rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '2.5rem',
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: 'var(--accent-red)',
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              letterSpacing: '0.2em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}>
              {t.badge}
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 5rem)',
            fontWeight: '400',
            lineHeight: '1.0',
            marginBottom: '2.5rem',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            color: 'var(--text-primary)',
          }}>
            {t.title1}<br />
            {t.title2}<br />
            <span style={{ color: 'var(--accent-red)' }}>
              {t.title3}
            </span>
          </h1>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.95rem',
            lineHeight: '1.8',
            maxWidth: '440px',
            marginBottom: '3rem',
          }}>
            {t.desc}
          </p>

          <button
            className="btn-primary"
            onClick={function() {
              document.getElementById('identity').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {t.btn}
          </button>
        </div>

        <div style={{
          padding: '4rem 3rem',
          background: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
        }}>
          {t.stats.map(function(stat, i) {
            return (
              <div key={stat.label} style={{
                padding: '2rem 0',
                borderBottom: i < t.stats.length - 1 ? '1px solid rgba(242,240,235,0.15)' : 'none',
              }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: '400',
                  color: '#f2f0eb',
                  lineHeight: '1',
                  marginBottom: '0.4rem',
                  letterSpacing: '0.02em',
                }}>
                  {stat.num}
                </p>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'rgba(242,240,235,0.5)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>

      </div>

      <div style={{
        position: 'absolute',
        bottom: '3rem',
        left: '4rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
      }}>
        <div style={{
          width: '40px',
          height: '1px',
          background: 'var(--border)',
        }} />
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--text-dim)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          Scroll to explore
        </span>
      </div>

    </section>
  )
}

export default HeroSection