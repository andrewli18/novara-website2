import { useState, useEffect } from 'react'

const navItems = [
  { id: 'layers', label: 'Capability' },
  { id: 'phases', label: 'Roadmap' },
  { id: 'partner', label: 'Partnership' },
  { id: 'incentive', label: 'Incentive' },
]

function NavBar({ lightMode, toggleMode }) {
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
      borderBottom: scrolled
        ? '1px solid var(--border)'
        : '1px solid transparent',
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
                color: active === item.id
                  ? 'var(--text-primary)'
                  : 'var(--text-muted)',
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

        {/* 深色/浅色切换按钮 */}
        <button
          onClick={toggleMode}
          title={lightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
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
          onMouseEnter={function(e) {
            e.currentTarget.style.borderColor = '#6366f1'
            e.currentTarget.style.color = '#6366f1'
          }}
          onMouseLeave={function(e) {
            e.currentTarget.style.borderColor = 'var(--border-bright)'
            e.currentTarget.style.color = 'var(--text-muted)'
          }}
        >
          {lightMode ? '🌙' : '☀️'}
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
          Apply Now
        </button>
      </div>
    </nav>
  )
}

export default NavBar