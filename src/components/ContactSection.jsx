import { useState } from 'react'

const inputStyle = {
  width: '100%',
  background: '#111',
  border: '1px solid #2a2825',
  color: '#f0ede8',
  padding: '0.9rem 1.2rem',
  fontSize: '0.9rem',
  outline: 'none',
  fontFamily: 'sans-serif',
}

function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    city: '',
    role: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  function handleChange(field, value) {
    setForm({ ...form, [field]: value })
  }

  function handleSubmit() {
    if (!form.name || !form.city || !form.role) {
      alert('请填写姓名、城市和合作方向')
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section style={{
        padding: '7rem 3rem',
        background: '#111',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'Georgia, serif',
            fontSize: '2rem',
            fontWeight: '300',
            marginBottom: '1rem',
          }}>
            申请已提交
          </p>
          <p style={{ color: '#7a7570', lineHeight: '1.8' }}>
            我们会在 3 个工作日内与你联系。
          </p>
        </div>
      </section>
    )
  }

  return (
    <section style={{
      padding: '7rem 3rem',
      background: '#111',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>

        <p style={{
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#c8a96e',
          marginBottom: '1.5rem',
        }}>
          联系我们
        </p>

        <h2 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: '300',
          marginBottom: '1rem',
        }}>
          申请成为合作伙伴
        </h2>

        <p style={{
          color: '#7a7570',
          marginBottom: '2.5rem',
          lineHeight: '1.8',
        }}>
          告诉我们你所在的城市、你的资源能力，以及你希望的合作方向。
        </p>

        
        <a
          href="mailto:partnerships@novara.ai"
          style={{
            display: 'block',
            fontFamily: 'Georgia, serif',
            fontSize: '1.4rem',
            fontWeight: '300',
            color: '#c8a96e',
            textDecoration: 'none',
            marginBottom: '3rem',
          }}
        >
          partnerships@novara.ai
        </a>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          textAlign: 'left',
          marginBottom: '2rem',
        }}>
          <input
            style={inputStyle}
            placeholder="你的姓名"
            value={form.name}
            onChange={function(e) { handleChange('name', e.target.value) }}
          />

          <input
            style={inputStyle}
            placeholder="所在城市 / 区域"
            value={form.city}
            onChange={function(e) { handleChange('city', e.target.value) }}
          />

          <select
            style={{ ...inputStyle, cursor: 'pointer' }}
            value={form.role}
            onChange={function(e) { handleChange('role', e.target.value) }}
          >
            <option value="">合作方向</option>
            <option value="regional">Regional Partner（片区）</option>
            <option value="city">City Partner（城市）</option>
            <option value="equity">Equity Contributor（股权）</option>
            <option value="training">Training Partner（用户）</option>
          </select>

          <textarea
            style={{ ...inputStyle, resize: 'none' }}
            placeholder="简述你的资源能力与合作想法"
            rows={4}
            value={form.message}
            onChange={function(e) { handleChange('message', e.target.value) }}
          />
        </div>

        <button
          onClick={handleSubmit}
          style={{
            width: '100%',
            background: '#c8a96e',
            color: '#0a0a0a',
            border: 'none',
            padding: '1rem',
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          提交申请
        </button>

        <p style={{
          fontSize: '0.75rem',
          color: '#7a7570',
          lineHeight: '1.7',
          marginTop: '2rem',
          borderTop: '1px solid #2a2825',
          paddingTop: '1.5rem',
        }}>
          所有合作结构、利润分配与股权激励，将根据具体合作与贡献进一步协商确定。
          Novara 保留最终解释权。
        </p>

      </div>
    </section>
  )
}

export default ContactSection