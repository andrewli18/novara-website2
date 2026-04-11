import { useState, useEffect } from 'react'

function NavBar({ t, lightMode, toggleMode, toggleLocale }) {
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
      padding: '1.2rem 4rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
      transition: 'all 0.4s',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      background: scrolled ? 'rgba(250,248,244,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
    }}>

      <span
        onClick={function() { scrollTo('hero') }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          fontWeight: '400',
          letterSpacing: '0.15em',
          cursor: 'pointer',
          color: 'var(--text-primary)',
          fontStyle: 'italic',
        }}
      >
        {t.brand}
      </span>

      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {t.items.map(function(item) {
          return (
            <button
              key={item.id}
              onClick={function() { scrollTo(item.id) }}
              style={{
                background: 'transparent',
                border: 'none',
                color: active === item.id ? 'var(--text-primary)' : 'var(--text-muted)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'color 0.2s',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
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
                  background: 'var(--accent)',
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
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.05em',
            transition: 'all 0.2s',
          }}
          onMouseEnter={function(e) {
            e.currentTarget.style.borderColor = 'var(--accent)'
            e.currentTarget.style.color = 'var(--accent-dark)'
          }}
          onMouseLeave={function(e) {
            e.currentTarget.style.borderColor = 'var(--border-bright)'
            e.currentTarget.style.color = 'var(--text-muted)'
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