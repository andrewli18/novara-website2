function IdentitySection({ t }) {
  return (
    <section id="identity" className="section" style={{ background: 'var(--bg-secondary)' }}>
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
          {t.title1}
        </h2>

        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1.1rem',
          lineHeight: '2',
          maxWidth: '600px',
          marginBottom: '2.5rem',
          whiteSpace: 'pre-line',
        }}>
          {t.desc}
        </p>

        <div style={{
          display: 'inline-block',
          border: '1px solid rgba(99,102,241,0.3)',
          padding: '1rem 2rem',
          borderRadius: '4px',
          background: 'rgba(99,102,241,0.05)',
          marginBottom: '2rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '1rem',
            color: '#6366f1',
            letterSpacing: '0.05em',
          }}>
            {t.highlight}
          </p>
        </div>

        <p style={{
          color: 'var(--text-muted)',
          fontSize: '0.95rem',
          lineHeight: '1.8',
          maxWidth: '600px',
          marginBottom: '3rem',
          fontStyle: 'italic',
        }}>
          {t.intro}
        </p>

      </div>
    </section>
  )
}

export default IdentitySection