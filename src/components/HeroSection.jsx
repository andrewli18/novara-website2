function HeroSection({ t }) {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 4rem',
      paddingTop: '8rem',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg-primary)',
    }}>

      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        height: '100%',
        background: 'linear-gradient(135deg, transparent 0%, rgba(200,168,75,0.04) 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '4rem',
        width: '120px',
        height: '1px',
        background: 'var(--accent)',
        opacity: 0.4,
      }} />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6rem',
        alignItems: 'center',
      }}>

        <div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '3rem',
          }}>
            <span style={{
              width: '40px',
              height: '1px',
              background: 'var(--accent)',
              display: 'inline-block',
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              letterSpacing: '0.25em',
              color: 'var(--accent-dark)',
              textTransform: 'uppercase',
            }}>
              {t.badge}
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 2.8vw, 3rem)',
            fontWeight: '400',
            lineHeight: '1.15',
            marginBottom: '2rem',
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
          }}>
            {t.title1}<br />
            {t.title2}<br />
            <span style={{
              fontStyle: 'italic',
              color: 'var(--accent-dark)',
            }}>
              {t.title3}
            </span>
          </h1>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1.1rem',
            lineHeight: '1.9',
            maxWidth: '480px',
            marginBottom: '3rem',
            fontFamily: 'var(--font-sub)',
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {t.stats.map(function(stat, i) {
            return (
              <div key={stat.label} style={{
                padding: '2rem 0',
                borderBottom: i < t.stats.length - 1 ? '1px solid var(--border)' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--text-dim)',
                }}>
                  {stat.label}
                </span>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: '400',
                  color: 'var(--accent-dark)',
                  fontStyle: 'italic',
                }}>
                  {stat.num}
                </span>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default HeroSection