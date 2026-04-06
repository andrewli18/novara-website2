function HeroSection() {
  function scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 3rem',
      paddingTop: '6rem',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>

        <p style={{
          fontSize: '0.8rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#7a7570',
          marginBottom: '2rem',
        }}>
          A Human Capability System for the Age of AI
        </p>

        <h1 style={{
          fontSize: 'clamp(3rem, 6vw, 5.5rem)',
          fontWeight: '300',
          lineHeight: '1.05',
          marginBottom: '2rem',
        }}>
          In the Age of AI,<br />
          What Capabilities<br />
          <span style={{ color: '#c8a96e', fontStyle: 'italic' }}>
            Should Humans Have?
          </span>
        </h1>

        <p style={{
          color: '#7a7570',
          fontSize: '1rem',
          lineHeight: '1.8',
          maxWidth: '480px',
          marginBottom: '2.5rem',
        }}>
          Novara is not about what to learn — it's about what capabilities
          humans need in the age of AI. We train the cognitive skills
          AI cannot replace, and build long-term capability systems.
        </p>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={function() { scrollTo('layers') }}
            style={{
              background: '#c8a96e',
              color: '#0a0a0a',
              border: 'none',
              padding: '0.8rem 2.2rem',
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            Explore the System
          </button>

          <button
            onClick={function() { scrollTo('contact') }}
            style={{
              background: 'transparent',
              color: '#7a7570',
              border: '1px solid #2a2825',
              padding: '0.8rem 2rem',
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            Apply to Partner
          </button>
        </div>

      </div>
    </section>
  )
}

export default HeroSection