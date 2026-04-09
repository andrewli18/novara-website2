import { useEffect, useRef } from 'react'

function HeroSection() {
  const canvasRef = useRef(null)

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

    const particles = Array.from({ length: 80 }, function() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 1.5 + 0.8,
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
        ctx.fillStyle = 'rgba(99,102,241,1)'
        ctx.fill()
      })

      particles.forEach(function(a, i) {
        particles.slice(i + 1).forEach(function(b) {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(99,102,241,${0.9 * (1 - dist / 120)})`
            ctx.lineWidth = 0.8
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
      padding: '0 3rem',
      paddingTop: '6rem',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* 粒子动画画布 */}
      <canvas ref={canvasRef} style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 1,
      }} />

      {/* 中心发光光晕 */}
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
          marginBottom: '2.5rem',
          background: 'rgba(99,102,241,0.05)',
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#6366f1',
            boxShadow: '0 0 8px rgba(99,102,241,0.8)',
            animation: 'pulse 2s infinite',
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.15em',
            color: '#6366f1',
            textTransform: 'uppercase',
          }}>
            Human Capability System · AI Age
          </span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 6vw, 5.5rem)',
          fontWeight: '700',
          lineHeight: '1.0',
          marginBottom: '2rem',
          letterSpacing: '-0.02em',
        }}>
          What Capabilities<br />
          Should Humans<br />
          <span style={{
            color: '#6366f1',
            textShadow: '0 0 60px rgba(99,102,241,0.4)',
          }}>
            Have in the AI Age?
          </span>
        </h1>

        <p style={{
          color: 'var(--text-muted)',
          fontSize: '1.05rem',
          lineHeight: '1.8',
          maxWidth: '500px',
          marginBottom: '3rem',
          fontWeight: '300',
        }}>
          Novara trains the cognitive skills AI cannot replace —
          and builds the long-term capability systems humans need
          to thrive alongside AI.
        </p>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button
            className="btn-primary"
            onClick={function() {
              document.getElementById('layers').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Explore the System
          </button>
          <button
            className="btn-ghost"
            onClick={function() {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Apply to Partner
          </button>
        </div>

        {/* 底部统计数字 */}
        <div style={{
          display: 'flex',
          gap: '3rem',
          marginTop: '5rem',
          paddingTop: '3rem',
          borderTop: '1px solid var(--border)',
        }}>
          {[
            { num: '5', label: 'Capability Layers' },
            { num: '4', label: 'Development Phases' },
            { num: '20min', label: 'Daily Training' },
            { num: '3', label: 'Partnership Tiers' },
          ].map(function(stat) {
            return (
              <div key={stat.label}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  lineHeight: '1',
                  marginBottom: '0.4rem',
                }}>
                  {stat.num}
                </p>
                <p style={{
                  fontSize: '0.78rem',
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