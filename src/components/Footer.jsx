function Footer({ t }) {
  return (
    <footer style={{
      padding: '3rem 4rem',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'var(--bg-secondary)',
    }}>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.2rem',
        fontWeight: '400',
        fontStyle: 'italic',
        letterSpacing: '0.1em',
        color: 'var(--text-muted)',
      }}>
        Novara
      </span>
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem',
        color: 'var(--text-dim)',
        letterSpacing: '0.1em',
      }}>
        {t.copy}
      </span>
    </footer>
  )
}

export default Footer