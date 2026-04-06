function Footer() {
  return (
    <footer style={{
      padding: '2rem 3rem',
      borderTop: '1px solid #1a1a2e',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'var(--bg-primary)',
    }}>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1rem',
        fontWeight: '600',
        letterSpacing: '0.05em',
        color: 'var(--text-muted)',
      }}>
        NOVARA
      </span>

      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.72rem',
        color: 'var(--text-dim)',
        letterSpacing: '0.05em',
      }}>
        © 2025 Novara. All rights reserved.
      </span>
    </footer>
  )
}

export default Footer