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
      padding: '1.8rem 1.5rem',
      borderBottom: '1px solid var(--border)',
      cursor: 'default',
      transition: 'background 0.2s',
      borderRadius: '4px',
    }}
    onMouseEnter={function(e) {
      e.currentTarget.style.background = 'rgba(99,102,241,0.04)'
    }}
    onMouseLeave={function(e) {
      e.currentTarget.style.background = 'transparent'
    }}
    >
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.85rem',
        color: 'var(--text-dim)',
        letterSpacing: '0.1em',
      }}>
        {num}
      </span>

      <div>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1rem',
          fontWeight: '600',
          marginBottom: '0.3rem',
          color: 'var(--text-primary)',
        }}>
          {title}
        </p>
        <p style={{
          fontSize: '0.82rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)',
        }}>
          {sub}
        </p>
      </div>

      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#6366f1',
        border: '1px solid rgba(99,102,241,0.3)',
        padding: '0.3rem 0.8rem',
        borderRadius: '100px',
        background: 'rgba(99,102,241,0.06)',
        whiteSpace: 'nowrap',
      }}>
        {tag}
      </span>
    </div>
  )
}

function LayersSection() {
  return (
    <section id="layers" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">

        <p className="label">Capability Architecture</p>

        <h2 className="section-title">
          Five-Layer<br />
          <span style={{ color: '#6366f1' }}>Capability System</span>
        </h2>

        <p className="section-intro">
          From core cognition to personal AI collaboration, Novara builds
          a complete human capability evolution path.
        </p>

        <div style={{ border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
          {layers.map(function(layer) {
            return (
              <LayerItem
                key={layer.num}
                num={layer.num}
                title={layer.title}
                sub={layer.sub}
                tag={layer.tag}
              />
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default LayersSection