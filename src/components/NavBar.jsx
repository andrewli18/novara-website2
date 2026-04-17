import { useState, useEffect } from 'react'

function NavBar({ t, lightMode, toggleMode, toggleLocale }) {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(function() {
    function handleScroll() {
      setScrolled(window.scrollY > 60)
    }
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    const observer = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    t.items.forEach(function(item) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return function() {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      observer.disconnect()
    }
  }, [t])

  function scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: isMobile ? '1rem 1.5rem' : '1rem 3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
      transition: 'all 0.3s',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      background: scrolled
        ? lightMode ? 'rgba(248,248,255,0.92)' : 'rgba(8,8,24,0.92)'
        : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
    }}>

      <span
        onClick={function() { scrollTo('hero') }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.2rem',
          fontWeight: '600',
          letterSpacing: '0.05em',
          cursor: 'pointer',
          color: 'var(--text-primary)',
        }}
      >
        {t.brand}
      </span>

      {isMobile ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={toggleLocale}
            style={{
              background: 'transparent',
              border: '1px solid var(--border-bright)',
              color: 'var(--text-muted)',
              padding: '0.3rem 0.8rem',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              borderRadius: '4px',
            }}
          >
            {t.langToggle}
          </button>

          <button
            onClick={function() { setMenuOpen(function(prev) { return !prev }) }}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              fontSize: '1.5rem',
              lineHeight: '1',
              padding: '0',
            }}
          >
            {menuOpen ? 'x' : '='}
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {t.items.map(function(item) {
            return (
              <button
                key={item.id}
                onClick={function() { scrollTo(item.id) }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: active === item.id ? 'var(--text-primary)' : 'var(--text-muted)',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                  fontFamily: 'var(--font-body)',
                  position: 'relative',
                  padding: '4px 0',
                }}
              >
                {item.label}
                {active === item.id && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: '#6366f1',
                    boxShadow: '0 0 8px rgba(99,102,241,0.8)',
                  }} />
                )}
              </button>
            )
          })}

          <button
            onClick={toggleLocale}
            style={{
              background: 'transparent',
              border: '1px solid var(--border-bright)',
              color: 'var(--text-muted)',
              padding: '0.3rem 0.8rem',
              borderRadius: '4px',
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.05em',
              transition: 'all 0.2s',
            }}
          >
            {t.langToggle}
          </button>

          <button
            onClick={toggleMode}
            style={{
              background: 'transparent',
              border: '1px solid var(--border-bright)',
              color: 'var(--text-muted)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              transition: 'all 0.2s',
              flexShrink: 0,
            }}
          >
            {lightMode ? 'D' : 'L'}
          </button>

          <button
            onClick={function() { scrollTo('contact') }}
            style={{
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.3)',
              color: '#6366f1',
              padding: '0.5rem 1.4rem',
              cursor: 'pointer',
              fontSize: '0.85rem',
              borderRadius: '4px',
              fontFamily: 'var(--font-body)',
              transition: 'all 0.2s',
            }}
          >
            {t.apply}
          </button>
        </div>
      )}

      {isMobile && menuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: lightMode ? 'rgba(248,248,255,0.98)' : 'rgba(8,8,24,0.98)',
          borderBottom: '1px solid var(--border)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
          zIndex: 99,
        }}>
          {t.items.map(function(item) {
            return (
              <button
                key={item.id}
                onClick={function() { scrollTo(item.id) }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid var(--border)',
                  color: active === item.id ? '#6366f1' : 'var(--text-muted)',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  padding: '1rem 0',
                  textAlign: 'left',
                  letterSpacing: '0.05em',
                }}
              >
                {item.label}
              </button>
            )
          })}

          <button
            onClick={function() { scrollTo('contact') }}
            style={{
              background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.3)',
              color: '#6366f1',
              padding: '0.8rem',
              cursor: 'pointer',
              fontSize: '0.85rem',
              borderRadius: '4px',
              fontFamily: 'var(--font-body)',
              marginTop: '1rem',
              textAlign: 'center',
            }}
          >
            {t.apply}
          </button>
        </div>
      )}

    </nav>
  )
}

export default NavBar
