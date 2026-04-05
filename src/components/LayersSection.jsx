const layers = [
  {
    num: '01',
    title: '核心认知能力 Human Core',
    sub: '看懂问题 · 发现错误 · 举一反三 · 判断掌握',
    tag: '当前阶段',
  },
  {
    num: '02',
    title: 'AI / Agent 指挥能力',
    sub: '提问 · 拆解任务 · 验证结果',
    tag: 'Phase 2',
  },
  {
    num: '03',
    title: '能力进化系统 Capability System',
    sub: '错误模式 · 训练路径 · 成长轨迹',
    tag: 'Phase 3',
  },
  {
    num: '04',
    title: '心智与判断能力 Mind & Judgment',
    sub: '长期决策 · 结构判断 · 责任能力',
    tag: 'Phase 4',
  },
  {
    num: '05',
    title: '个人孪生 Agent（未来层）',
    sub: '信息获取 · 任务处理 · 决策支持',
    tag: '未来',
  },
]

function LayerItem({ num, title, sub, tag }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '80px 1fr auto',
      alignItems: 'center',
      gap: '2rem',
      padding: '1.8rem 0',
      borderBottom: '1px solid #2a2825',
    }}>
      <span style={{
        fontFamily: 'Georgia, serif',
        fontSize: '3rem',
        fontWeight: '300',
        color: '#2a2825',
        lineHeight: '1',
      }}>
        {num}
      </span>

      <div>
        <p style={{ fontSize: '0.95rem', fontWeight: '500', marginBottom: '0.3rem' }}>
          {title}
        </p>
        <p style={{ fontSize: '0.82rem', color: '#7a7570' }}>
          {sub}
        </p>
      </div>

      <span style={{
        fontSize: '0.7rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#c8a96e',
        border: '1px solid #c8a96e',
        padding: '0.3rem 0.8rem',
      }}>
        {tag}
      </span>
    </div>
  )
}

function LayersSection() {
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
          能力架构
        </p>

        <h2 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: '300',
          marginBottom: '1rem',
        }}>
          五层能力系统
        </h2>

        <p style={{
          color: '#7a7570',
          maxWidth: '560px',
          marginBottom: '4rem',
          lineHeight: '1.8',
        }}>
          从核心认知到个人 AI 协同，Novara 构建一套完整的人类能力进化路径。
        </p>

        <div>
          {layers.map((layer) => (
            <LayerItem
              key={layer.num}
              num={layer.num}
              title={layer.title}
              sub={layer.sub}
              tag={layer.tag}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default LayersSection