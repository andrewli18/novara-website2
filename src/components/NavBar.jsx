function NavBar() {
  function scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

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
      <span
        onClick={function() { scrollTo('hero') }}
        style={{
          fontSize: '1.3rem',
          letterSpacing: '0.1em',
          cursor: 'pointer',
        }}
      >
        NOVARA
      </span>

      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <button
          onClick={function() { scrollTo('layers') }}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#7a7570',
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            cursor: 'pointer',
          }}
        >
          Capability
        </button>

        <button
          onClick={function() { scrollTo('phases') }}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#7a7570',
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            cursor: 'pointer',
          }}
        >
          Roadmap
        </button>

        <button
          onClick={function() { scrollTo('partner') }}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#7a7570',
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            cursor: 'pointer',
          }}
        >
          Partnership
        </button>

          <button
  onClick={function() { scrollTo('incentive') }}
  style={{
    background: 'transparent',
    border: 'none',
    color: '#7a7570',
    fontSize: '0.85rem',
    letterSpacing: '0.08em',
    cursor: 'pointer',
  }}
>
  Incentive
</button>

        <button
          onClick={function() { scrollTo('contact') }}
          style={{
            background: 'transparent',
            border: '1px solid #c8a96e',
            color: '#c8a96e',
            padding: '0.5rem 1.4rem',
            cursor: 'pointer',
            letterSpacing: '0.1em',
          }}
        >
          Apply Now
        </button>
      </div>
    </nav>
  )
}

export default NavBar