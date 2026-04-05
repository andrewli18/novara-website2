function HeroSection() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 3rem',
      paddingTop: '6rem',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>

        <p style={{
          fontSize: '0.8rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#7a7570',
          marginBottom: '2rem',
        }}>
          面向 AI 时代的人类能力系统
        </p>

        <h1 style={{
          fontSize: 'clamp(3rem, 6vw, 5.5rem)',
          fontWeight: '300',
          lineHeight: '1.05',
          marginBottom: '2rem',
        }}>
          AI 时代，<br />
          人该具备<br />
          <span style={{ color: '#c8a96e', fontStyle: 'italic' }}>
            什么能力
          </span>
        </h1>

        <p style={{
          color: '#7a7570',
          fontSize: '1rem',
          lineHeight: '1.8',
          maxWidth: '480px',
          marginBottom: '2.5rem',
        }}>
          Novara 关注的不是学什么，而是人在 AI 时代应具备什么能力。
          训练 AI 无法替代的核心认知能力，构建长期能力系统。
        </p>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={{
            background: '#c8a96e',
            color: '#0a0a0a',
            border: 'none',
            padding: '0.8rem 2.2rem',
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}>
            了解能力系统
          </button>

          <button style={{
            background: 'transparent',
            color: '#7a7570',
            border: '1px solid #2a2825',
            padding: '0.8rem 2rem',
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}>
            申请合作
          </button>
        </div>

      </div>
    </section>
  )
}

export default HeroSection