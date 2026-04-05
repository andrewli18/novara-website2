const tiers = [
  {
    id: 'regional',
    pct: '10%',
    name: 'Regional Partners · 片区',
    desc: '全球约 5 个区域，负责区域协调与长期资源整合。',
    scope: ['区域协调', '资源整合', '家族 / 长期资源方'],
  },
  {
    id: 'city',
    pct: '20%',
    name: 'City Partners · 城市',
    desc: '每城市核心合作方，统筹本地用户获取、社区连接与资源。',
    scope: ['用户获取', '社区连接', '本地资源整合'],
  },
  {
    id: 'equity',
    pct: '20%',
    name: 'Equity Contributors · 股权',
    desc: '20% 股权池，面向关键资源提供方与长期贡献者。',
    scope: ['关键资源', '长期贡献', '股权绑定'],
  },
]

function TierCard({ pct, name, desc, scope }) {
  return (
    <div style={{
      padding: '2.5rem 2rem',
      border: '1px solid #2a2825',
      background: '#111',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}>
      <p style={{
        fontFamily: 'Georgia, serif',
        fontSize: '3.5rem',
        fontWeight: '300',
        color: '#c8a96e',
        lineHeight: '1',
      }}>
        {pct}
      </p>

      <p style={{
        fontSize: '0.75rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#7a7570',
      }}>
        {name}
      </p>

      <p style={{
        fontSize: '0.85rem',
        lineHeight: '1.7',
        color: '#f0ede8',
      }}>
        {desc}
      </p>

      <div style={{ marginTop: 'auto' }}>
        {scope.map((item) => (
          <p key={item} style={{
            fontSize: '0.78rem',
            color: '#7a7570',
            lineHeight: '1.9',
          }}>
            · {item}
          </p>
        ))}
      </div>
    </div>
  )
}

function PartnerSection() {
  return (
    <section style={{ padding: '7rem 3rem', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <p style={{
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#c8a96e',
          marginBottom: '1.5rem',
        }}>
          全球合作结构
        </p>

        <h2 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: '300',
          marginBottom: '1rem',
        }}>
          三层合作体系
        </h2>

        <p style={{
          color: '#7a7570',
          maxWidth: '560px',
          marginBottom: '3rem',
          lineHeight: '1.8',
        }}>
          我们正在寻找长期合作伙伴，共同构建这一能力系统。
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}>
          {tiers.map((tier) => (
            <TierCard
              key={tier.id}
              pct={tier.pct}
              name={tier.name}
              desc={tier.desc}
              scope={tier.scope}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default PartnerSection