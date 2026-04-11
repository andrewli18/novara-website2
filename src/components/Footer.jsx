function Footer({ t }) {
  return (
    <footer style={{
      padding: '2.5rem 4rem',
      borderTop: '2px solid var(--border-dark)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'var(--bg-primary)',
    }}>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.2rem',
        fontWeight: '400',
        letterSpacing: '0.08em',
        color: 'var(--text-primary)',
        textTransform: 'uppercase',
      }}>
        NOVARA
      </span>

      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem',
        color: 'var(--text-dim)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        {t.copy}
      </span>
    </footer>
  )
}

export default Footer