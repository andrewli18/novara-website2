function NavBar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: '1.2rem 3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #2a2825',
      background: '#0a0a0a',
    }}>
      <span style={{ fontSize: '1.3rem', letterSpacing: '0.1em' }}>
        NOVARA
      </span>
      <button style={{
        background: 'transparent',
        border: '1px solid #c8a96e',
        color: '#c8a96e',
        padding: '0.5rem 1.4rem',
        cursor: 'pointer',
        letterSpacing: '0.1em',
      }}>
        Apply Now
      </button>
    </nav>
  )
}

export default NavBar