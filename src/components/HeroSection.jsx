import { useEffect, useRef, useState } from 'react'

function HeroSection({ t }) {
  const canvasRef = useRef(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(function() {
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return function() { window.removeEventListener('resize', handleResize) }
  }, [])

  useEffect(function() {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    function resize() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 60 }, function() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 1.5 + 0.5,
      }
    })

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(function(p) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(99,102,241,0.7)'
        ctx.fill()
      })
      particles.forEach(function(a, i) {
        particles.slice(i + 1).forEach(function(b) {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 160) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(99,102,241,${0.9 * (1 - dist / 140)})`
            ctx.lineWidth = 1.2
            ctx.stroke()
          }
        })
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return function() {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: isMobile ? '0 1.5rem' : '0 3rem',
      paddingTop: isMobile ? '5rem' : '6rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <canvas ref={canvasRef} style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.8,
      }} />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '30%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        width: '100%',
        position: 'relative',
        zIndex: 1,
      }}>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid rgba(99,102,241,0.3)',
          padding: '6px 14px',
          borderRadius: '100px',
          marginBottom: '2rem',
          background: 'rgba(99,102,241,0.05)',
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#6366f1',
            boxShadow: '0 0 8px rgba(99,102,241,0.8)',
            animation: 'pulse 2s infinite',
            display: 'inline-block',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            letterSpacing: '0.15em',
            color: '#6366f1',
            textTransform: 'uppercase',
          }}>
            {t.badge}
          </span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: isMobile ? 'clamp(1.8rem, 7vw, 2.5rem)' : 'clamp(2.5rem, 5vw, 5rem)',
          fontWeight: '700',
          lineHeight: '1.1',
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em',
        }}>
          {t.title1}<br />
          <span style={{
            color: '#6366f1',
            textShadow: '0 0 60px rgba(99,102,241,0.4)',
          }}>
            {t.title2}
          </span>
        </h1>

        <p style={{
          color: 'var(--text-muted)',
          fontSize: '0.95rem',
          lineHeight: '1.9',
          maxWidth: isMobile ? '100%' : '560px',
          marginBottom: '2.5rem',
          fontWeight: '300',
          whiteSpace: 'pre-line',
        }}>
          {t.desc}
        </p>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <button
            className="btn-primary"
            onClick={function() {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {t.btn}
          </button>
          <button
            className="btn-ghost"
            onClick={function() {
              document.getElementById('identity').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {t.btnSecondary}
          </button>
        </div>

        <div style={{
          display: 'flex',
          gap: isMobile ? '1.5rem' : '3rem',
          marginTop: '4rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          flexWrap: 'wrap',
        }}>
          {t.stats.map(function(stat) {
            return (
              <div key={stat.label}>
                <p style={{
  fontFamily: 'var(--font-display)',
  fontSize: isMobile ? '1.3rem' : '1.8rem',
  fontWeight: '600',
  color: 'var(--text-primary)',
  lineHeight: '1',
  marginBottom: '0.4rem',
  display: 'flex',
  alignItems: 'baseline',
  gap: '2px',
}}>
  {stat.num}
</p>
                <p style={{
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.05em',
                }}>
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>

      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  )
}

export default HeroSection