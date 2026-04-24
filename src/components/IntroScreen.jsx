import { useState, useEffect, useRef } from 'react'

function IntroScreen({ t, onComplete, onToggleLocale, langToggle }) {
  const canvasRef = useRef(null)
  const [visibleLines, setVisibleLines] = useState(0)
  const [showButtons, setShowButtons] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(function() {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 120 }, function() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.6 + 0.2,
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
        ctx.fillStyle = `rgba(99,102,241,${p.opacity})`
        ctx.fill()
      })

      particles.forEach(function(a, i) {
        particles.slice(i + 1).forEach(function(b) {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(99,102,241,${0.15 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
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

  useEffect(function() {
    let current = 0
    const interval = setInterval(function() {
      current += 1
      setVisibleLines(current)
      if (current >= t.lines.length) {
        clearInterval(interval)
        setTimeout(function() {
          setShowButtons(true)
        }, 800)
      }
    }, 500)

    return function() { clearInterval(interval) }
  }, [t])

  function handleComplete() {
    setFading(true)
    setTimeout(function() {
      onComplete()
    }, 1000)
  }

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#020208',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 3rem',
      opacity: fading ? 0 : 1,
      transition: 'opacity 1s ease',
      overflowY: 'auto',
    }}>

      <canvas ref={canvasRef} style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        opacity: 0.6,
      }} />

      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '900px',
        height: '600px',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* 顶部 NOVARA + 语言切换 */}
      <div style={{
        position: 'fixed',
        top: '2rem',
        left: '0',
        right: '0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 3rem',
        zIndex: 2,
      }}>
        <span style={{
          fontFamily: "'SF Mono', monospace",
          fontSize: '0.75rem',
          letterSpacing: '0.35em',
          color: '#2a2a4a',
          textTransform: 'uppercase',
        }}>
          NOVARA
        </span>

        <button
          onClick={onToggleLocale}
          style={{
            background: 'transparent',
            border: '1px solid #2a2a4a',
            color: '#5a5a7a',
            padding: '0.3rem 0.8rem',
            fontFamily: "'SF Mono', monospace",
            fontSize: '0.72rem',
            letterSpacing: '0.05em',
            cursor: 'pointer',
            borderRadius: '4px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={function(e) {
            e.currentTarget.style.borderColor = '#6366f1'
            e.currentTarget.style.color = '#6366f1'
          }}
          onMouseLeave={function(e) {
            e.currentTarget.style.borderColor = '#2a2a4a'
            e.currentTarget.style.color = '#5a5a7a'
          }}
        >
          {langToggle}
        </button>
      </div>

      {/* 主内容 */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '680px',
        width: '100%',
        paddingTop: '4rem',
        paddingBottom: '6rem',
      }}>

        <div style={{
          width: '40px',
          height: '2px',
          background: '#6366f1',
          marginBottom: '3rem',
          boxShadow: '0 0 12px rgba(99,102,241,0.8)',
        }} />

        {t.lines.map(function(line, i) {
          const isHighlight = line.includes('真正的价值') || line.includes('real value')
          const isLast = i >= t.lines.length - 2 && line !== ''
          const isFirst = i < 2 && line !== ''
          const isEmpty = line === ''

          return (
            <div key={i} style={{
              marginBottom: isEmpty ? '2rem' : '0',
            }}>
              <p style={{
                fontFamily: isFirst
                  ? "'Syne', 'Inter', sans-serif"
                  : "'Inter', sans-serif",
                fontSize: isFirst
                  ? 'clamp(1.6rem, 3.5vw, 2.2rem)'
                  : isHighlight
                  ? 'clamp(1.2rem, 2.5vw, 1.6rem)'
                  : isLast
                  ? 'clamp(0.85rem, 1.8vw, 1rem)'
                  : 'clamp(1rem, 2vw, 1.3rem)',
                fontWeight: isFirst ? '600' : isHighlight ? '500' : '300',
                color: isHighlight
                  ? '#6366f1'
                  : isFirst
                  ? '#f0f0ff'
                  : isLast
                  ? '#4a4a6a'
                  : '#8888aa',
                lineHeight: isEmpty ? '0' : isFirst ? '1.3' : '1.9',
                letterSpacing: isFirst ? '-0.01em' : isLast ? '0.05em' : '0.01em',
                opacity: isEmpty ? 0 : i < visibleLines ? 1 : 0,
                transform: i < visibleLines ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
                textShadow: isHighlight
                  ? '0 0 40px rgba(99,102,241,0.5)'
                  : isFirst
                  ? '0 0 60px rgba(240,240,255,0.1)'
                  : 'none',
              }}>
                {isEmpty ? '\u00A0' : line}
              </p>
            </div>
          )
        })}

      </div>

      {/* 底部按钮 */}
      {showButtons && (
        <div style={{
          position: 'fixed',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          opacity: showButtons ? 1 : 0,
          transition: 'opacity 0.8s ease',
          zIndex: 2,
        }}>
          <button
            onClick={handleComplete}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#3a3a5a',
              fontFamily: "'SF Mono', monospace",
              fontSize: '0.72rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'color 0.2s',
              padding: '0.5rem',
            }}
            onMouseEnter={function(e) { e.currentTarget.style.color = '#6b6b8a' }}
            onMouseLeave={function(e) { e.currentTarget.style.color = '#3a3a5a' }}
          >
            {t.skip}
          </button>

          <div style={{
            width: '1px',
            height: '20px',
            background: '#2a2a4a',
          }} />

          <button
            onClick={handleComplete}
            style={{
              background: 'transparent',
              border: '1px solid rgba(99,102,241,0.4)',
              color: '#6366f1',
              padding: '0.9rem 3rem',
              fontFamily: "'SF Mono', monospace",
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              borderRadius: '2px',
              transition: 'all 0.3s',
              boxShadow: '0 0 20px rgba(99,102,241,0.1)',
            }}
            onMouseEnter={function(e) {
              e.currentTarget.style.background = 'rgba(99,102,241,0.1)'
              e.currentTarget.style.boxShadow = '0 0 40px rgba(99,102,241,0.25)'
            }}
            onMouseLeave={function(e) {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.boxShadow = '0 0 20px rgba(99,102,241,0.1)'
            }}
          >
            {t.enter}
          </button>
        </div>
      )}

    </div>
  )
}

export default IntroScreen