const layers = [
  {
    num: '01',
    title: 'Human Core',
    sub: 'Read the problem · Spot errors · Transfer knowledge · Verify mastery',
    tag: 'Current',
  },
  {
    num: '02',
    title: 'AI / Agent Command',
    sub: 'Prompt · Decompose tasks · Validate outputs',
    tag: 'Phase 2',
  },
  {
    num: '03',
    title: 'Capability Evolution System',
    sub: 'Error patterns · Training paths · Growth tracking',
    tag: 'Phase 3',
  },
  {
    num: '04',
    title: 'Mind & Judgment',
    sub: 'Long-term decisions · Structural thinking · Accountability',
    tag: 'Phase 4',
  },
  {
    num: '05',
    title: 'Personal Twin Agent',
    sub: 'Information retrieval · Task execution · Decision support',
    tag: 'Future',
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
    <section id="layers" style={{ padding: '7rem 3rem', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <p style={{
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#c8a96e',
          marginBottom: '1.5rem',
        }}>
          Capability Architecture
        </p>

        <h2 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: '300',
          marginBottom: '1rem',
        }}>
          Five-Layer Capability System
        </h2>

        <p style={{
          color: '#7a7570',
          maxWidth: '560px',
          marginBottom: '4rem',
          lineHeight: '1.8',
        }}>
          From core cognition to personal AI collaboration, Novara builds
          a complete human capability evolution path.
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