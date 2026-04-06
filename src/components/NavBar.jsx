import { useState, useEffect } from 'react'

const navItems = [
  { id: 'layers', label: 'Capability' },
  { id: 'phases', label: 'Roadmap' },
  { id: 'partner', label: 'Partnership' },
  { id: 'incentive', label: 'Incentive' },
]

function NavBar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(function() {
    function handleScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)

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

    navItems.forEach(function(item) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return function() {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  function scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: '1rem 3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
      transition: 'all 0.3s',
      borderBottom: scrolled ? '1px solid #1a1a2e' : '1px solid transparent',
      background: scrolled ? 'rgba(5,5,8,0.9)' : 'transparent',
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
        NOVARA
      </span>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {navItems.map(function(item) {
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
          Apply Now
        </button>
      </div>
    </nav>
  )
}

export default NavBar