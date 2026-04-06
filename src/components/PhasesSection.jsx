const phases = [
  {
    id: 'phase-1',
    label: 'Phase 1 · Now',
    name: 'Core Launch',
    items: ['20 minutes daily training', 'Core cognitive skills', 'Baseline capability profile'],
    current: true,
  },
  {
    id: 'phase-2',
    label: 'Phase 2 · Short-term',
    name: 'Systematic Training',
    items: ['Structured training program', 'AI collaboration skills', 'From learning to applying'],
    current: false,
  },
  {
    id: 'phase-3',
    label: 'Phase 3 · Mid-term',
    name: 'Capability System',
    items: ['Full capability system', 'Path optimization', 'Long-term accumulation'],
    current: false,
  },
  {
    id: 'phase-4',
    label: 'Phase 4 · Long-term',
    name: 'Judgment & Mastery',
    items: ['Judgment training', 'Complex problem solving', 'Accountability systems'],
    current: false,
  },
]

function PhaseCard({ label, name, items, current }) {
  return (
    <div style={{
      background: '#111',
      padding: '2rem 1.5rem',
      position: 'relative',
      borderTop: current ? '2px solid #c8a96e' : '2px solid #2a2825',
      flex: '1',
    }}>

      {current && (
        <span style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          fontSize: '0.65rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          background: '#c8a96e',
          color: '#0a0a0a',
          padding: '0.25rem 0.6rem',
        }}>
          In progress
        </span>
      )}

      <p style={{
        fontSize: '0.7rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#7a7570',
        marginBottom: '1rem',
      }}>
        {label}
      </p>

      <p style={{
        fontFamily: 'Georgia, serif',
        fontSize: '1.4rem',
        fontWeight: '300',
        marginBottom: '1.5rem',
      }}>
        {name}
      </p>

      <ul style={{ listStyle: 'none' }}>
        {items.map((item) => (
          <li key={item} style={{
            fontSize: '0.82rem',
            color: '#7a7570',
            lineHeight: '2',
          }}>
            — {item}
          </li>
        ))}
      </ul>

    </div>
  )
}

function PhasesSection() {
  return (
    <section id="phases" style={{ padding: '7rem 3rem', background: '#111' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <p style={{
  fontSize: '0.75rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#c8a96e',
  marginBottom: '1.5rem',
}}>
  Product Roadmap
</p>

<h2 style={{
  fontFamily: 'Georgia, serif',
  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
  fontWeight: '300',
  marginBottom: '3rem',
}}>
  Four-Phase Development Plan
</h2>

        <div style={{ display: 'flex', gap: '1px', background: '#2a2825' }}>
          {phases.map((phase) => (
            <PhaseCard
              key={phase.id}
              label={phase.label}
              name={phase.name}
              items={phase.items}
              current={phase.current}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default PhasesSection