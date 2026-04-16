function Footer({ t }) {
  return (
    <footer style={{
      padding: '3rem',
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-primary)',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
        <div>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            fontWeight: '600',
            letterSpacing: '0.05em',
            color: 'var(--text-primary)',
            marginBottom: '0.8rem',
          }}>
            {t.brand}
          </p>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            lineHeight: '1.7',
            maxWidth: '500px',
          }}>
            {t.tagline}
          </p>
        </div>

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.72rem',
          color: 'var(--text-dim)',
          letterSpacing: '0.05em',
          alignSelf: 'flex-end',
        }}>
          {t.copy}
        </p>
      </div>
    </footer>
  )
}

export default Footer