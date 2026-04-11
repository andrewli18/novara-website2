import { useState, useEffect } from 'react'

function NavBar({ t, toggleLocale }) {
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

    t.items.forEach(function(item) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return function() {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [t])

  function scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: '1rem 4rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
      transition: 'all 0.3s',
      borderBottom: scrolled ? '2px solid var(--border-dark)' : '2px solid transparent',
      background: scrolled ? 'rgba(242,240,235,0.97)' : 'transparent',
    }}>

      <span
        onClick={function() { scrollTo('hero') }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          letterSpacing: '0.08em',
          cursor: 'pointer',
          color: 'var(--text-primary)',
          textTransform: 'uppercase',
        }}
      >
        {t.brand}
      </span>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {t.items.map(function(item) {
          return (
            <button
              key={item.id}
              onClick={function() { scrollTo(item.id) }}
              style={{
                background: 'transparent',
                border: 'none',
                color: active === item.id ? 'var(--accent-red)' : 'var(--text-muted)',
                fontSize: '0.72rem',
                cursor: 'pointer',
                transition: 'color 0.2s',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              {item.label}
            </button>
          )
        })}

        <button
          onClick={toggleLocale}
          style={{
            background: 'transparent',
            border: '2px solid var(--border-dark)',
            color: 'var(--text-primary)',
            padding: '0.3rem 0.8rem',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.08em',
            transition: 'all 0.2s',
          }}
          onMouseEnter={function(e) {
            e.currentTarget.style.background = 'var(--bg-dark)'
            e.currentTarget.style.color = '#f2f0eb'
          }}
          onMouseLeave={function(e) {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--text-primary)'
          }}
        >
          {t.langToggle}
        </button>

        <button
          onClick={function() { scrollTo('contact') }}
          className="btn-primary"
        >
          {t.apply}
        </button>
      </div>
    </nav>
  )
}

export default NavBar