function Footer() {
  return (
    <footer style={{
      padding: '2rem 3rem',
      borderTop: '1px solid #2a2825',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#0a0a0a',
    }}>
      <span style={{
        fontFamily: 'Georgia, serif',
        fontSize: '1.1rem',
        fontWeight: '300',
        letterSpacing: '0.1em',
        color: '#7a7570',
      }}>
        NOVARA
      </span>

      <span style={{ fontSize: '0.75rem', color: '#7a7570' }}>
        © 2025 Novara. All rights reserved.
      </span>
    </footer>
  )
}

export default Footer