const phases = [
  {
    id: 'phase-1',
    label: 'Phase 01',
    name: 'Core Launch',
    items: ['20 minutes daily training', 'Core cognitive skills', 'Baseline capability profile'],
    current: true,
  },
  {
    id: 'phase-2',
    label: 'Phase 02',
    name: 'Systematic Training',
    items: ['Structured training program', 'AI collaboration skills', 'From learning to applying'],
    current: false,
  },
  {
    id: 'phase-3',
    label: 'Phase 03',
    name: 'Capability System',
    items: ['Full capability system', 'Path optimization', 'Long-term accumulation'],
    current: false,
  },
  {
    id: 'phase-4',
    label: 'Phase 04',
    name: 'Judgment & Mastery',
    items: ['Judgment training', 'Complex problem solving', 'Accountability systems'],
    current: false,
  },
]

function PhaseCard({ label, name, items, current }) {
  return (
    <div style={{
      background: current ? 'rgba(99,102,241,0.06)' : 'var(--bg-card)',
      padding: '2rem 1.5rem',
      position: 'relative',
      borderTop: current ? '2px solid #6366f1' : '2px solid var(--border)',
      flex: '1',
      transition: 'border-color 0.3s',
    }}
    onMouseEnter={function(e) {
      if (!current) e.currentTarget.style.borderTopColor = 'rgba(99,102,241,0.4)'
    }}
    onMouseLeave={function(e) {
      if (!current) e.currentTarget.style.borderTopColor = 'var(--border)'
    }}
    >
      {current && (
        <span style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          background: '#6366f1',
          color: 'white',
          padding: '0.25rem 0.6rem',
          borderRadius: '100px',
        }}>
          Live
        </span>
      )}

      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.72rem',
        letterSpacing: '0.15em',
        color: current ? '#6366f1' : 'var(--text-dim)',
        marginBottom: '1rem',
        textTransform: 'uppercase',
      }}>
        {label}
      </p>

      <p style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.3rem',
        fontWeight: '600',
        marginBottom: '1.5rem',
        color: 'var(--text-primary)',
      }}>
        {name}
      </p>

      <ul style={{ listStyle: 'none' }}>
        {items.map(function(item) {
          return (
            <li key={item} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              lineHeight: '2',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: current ? '#6366f1' : 'var(--text-dim)',
                flexShrink: 0,
              }} />
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function PhasesSection() {
  return (
    <section id="phases" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">

        <p className="label">Product Roadmap</p>

        <h2 className="section-title">
          Four-Phase<br />
          <span style={{ color: '#6366f1' }}>Development Plan</span>
        </h2>

        <div style={{
          display: 'flex',
          gap: '1px',
          background: 'var(--border)',
          borderRadius: '8px',
          overflow: 'hidden',
          marginTop: '3rem',
        }}>
          {phases.map(function(phase) {
            return (
              <PhaseCard
                key={phase.id}
                label={phase.label}
                name={phase.name}
                items={phase.items}
                current={phase.current}
              />
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default PhasesSection