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
    // 监听滚动，导航栏背景变化
    function handleScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)

    // 监听每个区块进入视野
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
      padding: '1.2rem 3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: scrolled ? '1px solid #2a2825' : '1px solid transparent',
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      transition: 'all 0.3s',
      zIndex: '100',
    }}>

      <span
        onClick={function() { scrollTo('hero') }}
        style={{
          fontSize: '1.3rem',
          letterSpacing: '0.1em',
          fontFamily: 'Georgia, serif',
          cursor: 'pointer',
          color: '#f0ede8',
        }}
      >
        NOVARA
      </span>

      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        {navItems.map(function(item) {
          return (
            <button
              key={item.id}
              onClick={function() { scrollTo(item.id) }}
              style={{
                background: 'transparent',
                border: 'none',
                color: active === item.id ? '#f0ede8' : '#7a7570',
                fontSize: '0.85rem',
                letterSpacing: '0.08em',
                cursor: 'pointer',
                transition: 'color 0.2s',
                borderBottom: active === item.id ? '1px solid #c8a96e' : '1px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {item.label}
            </button>
          )
        })}

        <button
          onClick={function() { scrollTo('contact') }}
          style={{
            background: 'transparent',
            border: '1px solid #c8a96e',
            color: '#c8a96e',
            padding: '0.5rem 1.4rem',
            cursor: 'pointer',
            letterSpacing: '0.1em',
            fontSize: '0.85rem',
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