import { useState, useEffect, useRef } from 'react'

function IntroScreen({ t, onComplete, onToggleLocale, langToggle }) {
  const canvasRef = useRef(null)
  const animationDone = useRef(false)

  const [lineStates, setLineStates] = useState(function() {
    return t.lines.map(function() { return { text: '', done: false } })
  })
  const [currentLine, setCurrentLine] = useState(0)
  const [showButtons, setShowButtons] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(function() {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let time = 0

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 80 }, function() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.6 + 0.2,
      }
    })

    const beams = Array.from({ length: 5 }, function() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        angle: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.5,
        length: 80 + Math.random() * 120,
        opacity: 0.3 + Math.random() * 0.4,
      }
    })

    function drawGrid() {
      const gridSize = 60
      const offsetX = (time * 0.3) % gridSize
      const offsetY = (time * 0.2) % gridSize
      ctx.strokeStyle = 'rgba(99,102,241,0.08)'
      ctx.lineWidth = 0.5
      for (let x = -gridSize + offsetX; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = -gridSize + offsetY; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    function drawBeams() {
      beams.forEach(function(beam) {
        beam.x += Math.cos(beam.angle) * beam.speed
        beam.y += Math.sin(beam.angle) * beam.speed
        if (beam.x < -200) beam.x = canvas.width + 200
        if (beam.x > canvas.width + 200) beam.x = -200
        if (beam.y < -200) beam.y = canvas.height + 200
        if (beam.y > canvas.height + 200) beam.y = -200

        const grad = ctx.createLinearGradient(
          beam.x, beam.y,
          beam.x + Math.cos(beam.angle) * beam.length,
          beam.y + Math.sin(beam.angle) * beam.length
        )
        grad.addColorStop(0, 'rgba(99,102,241,0)')
        grad.addColorStop(0.5, `rgba(99,102,241,${beam.opacity})`)
        grad.addColorStop(1, 'rgba(99,102,241,0)')
        ctx.beginPath()
        ctx.moveTo(beam.x, beam.y)
        ctx.lineTo(
          beam.x + Math.cos(beam.angle) * beam.length,
          beam.y + Math.sin(beam.angle) * beam.length
        )
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.5
        ctx.stroke()
      })
    }

    function drawPulse() {
      const cx = canvas.width / 2
      const cy = canvas.height / 2
      const maxR = Math.max(canvas.width, canvas.height) * 0.8
      const pulseR = ((time * 0.5) % maxR)
      const opacity = (1 - pulseR / maxR) * 0.15
      ctx.beginPath()
      ctx.arc(cx, cy, pulseR, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(99,102,241,${opacity})`
      ctx.lineWidth = 1
      ctx.stroke()
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.5
      drawGrid()
      drawBeams()
      drawPulse()

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
            ctx.strokeStyle = `rgba(99,102,241,${0.12 * (1 - dist / 100)})`
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
    if (!animationDone.current) return
    setLineStates(t.lines.map(function(line) { return { text: line, done: true } }))
    setCurrentLine(t.lines.length)
  }, [t])

  useEffect(function() {
    if (currentLine >= t.lines.length) {
      setTimeout(function() {
        animationDone.current = true
        setShowButtons(true)
      }, 800)
      return
    }

    const line = t.lines[currentLine]

    if (line === '') {
      setLineStates(function(prev) {
        const next = [...prev]
        next[currentLine] = { text: '', done: true }
        return next
      })
      setTimeout(function() {
        setCurrentLine(function(c) { return c + 1 })
      }, 200)
      return
    }

    let charIndex = 0
    const speed = line.length > 30 ? 35 : 50

    const typeInterval = setInterval(function() {
      charIndex += 1
      setLineStates(function(prev) {
        const next = [...prev]
        next[currentLine] = {
          text: line.slice(0, charIndex),
          done: charIndex >= line.length,
        }
        return next
      })

      if (charIndex >= line.length) {
        clearInterval(typeInterval)
        setTimeout(function() {
          setCurrentLine(function(c) { return c + 1 })
        }, 150)
      }
    }, speed)

    return function() { clearInterval(typeInterval) }
  }, [currentLine, t.lines])

  function handleComplete() {
    setFading(true)
    setTimeout(function() { onComplete() }, 1000)
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
        opacity: 1,
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
          const state = lineStates[i]
          const isHighlight = line.includes('真正的价值') || line.includes('real value') || line.includes('判断') || line.includes('Judgment')
          const isFirst = i < 2 && line !== ''
          const isLast = i >= t.lines.length - 2 && line !== ''
          const isEmpty = line === ''
          const isActive = i === currentLine
          const isVisible = (state && state.done) || isActive

          return (
            <div key={i} style={{
              marginBottom: isEmpty ? '2rem' : '0',
            }}>
              <p style={{
                fontFamily: "'Inter', sans-serif",
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
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.3s ease',
                textShadow: isHighlight ? '0 0 40px rgba(99,102,241,0.5)' : 'none',
                minHeight: isEmpty ? '0' : '1.2em',
              }}>
                {isEmpty ? '\u00A0' : (state ? state.text : '')}
                {isActive && !isEmpty && (
                  <span style={{
                    display: 'inline-block',
                    width: '2px',
                    height: '1em',
                    background: '#6366f1',
                    marginLeft: '2px',
                    verticalAlign: 'middle',
                    animation: 'blink 0.8s infinite',
                  }} />
                )}
              </p>
            </div>
          )
        })}

      </div>

      <div style={{
        position: 'fixed',
        bottom: '3rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
      }}>
        {!showButtons && (
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
        )}

        {showButtons && (
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
              animation: 'fadeIn 0.8s ease forwards',
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
        )}
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

    </div>
  )
}

export default IntroScreen