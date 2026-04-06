const tiers = [
  {
    id: 'regional',
    pct: '10%',
    name: 'Regional Partners',
    desc: 'Approximately 5 global regions, responsible for regional coordination and long-term resource integration.',
    scope: ['Regional coordination', 'Resource integration', 'Family offices / long-term capital'],
  },
  {
    id: 'city',
    pct: '20%',
    name: 'City Partners',
    desc: 'Core partner in each city, overseeing local user acquisition, community connections, and resources.',
    scope: ['User acquisition', 'Community building', 'Local resource integration'],
  },
  {
    id: 'equity',
    pct: '20%',
    name: 'Equity Contributors',
    desc: 'A 20% equity pool for key resource providers and long-term contributors.',
    scope: ['Key resources', 'Long-term contribution', 'Equity alignment'],
  },
]

function TierCard({ pct, name, desc, scope }) {
  return (
    <div
      className="glow-card"
      style={{
        padding: '2.5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        borderRadius: '8px',
      }}
    >
      <p style={{
        fontFamily: 'var(--font-display)',
        fontSize: '3rem',
        fontWeight: '700',
        color: '#6366f1',
        lineHeight: '1',
        textShadow: '0 0 30px rgba(99,102,241,0.3)',
      }}>
        {pct}
      </p>

      <p style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1rem',
        fontWeight: '600',
        color: 'var(--text-primary)',
      }}>
        {name}
      </p>

      <p style={{
        fontSize: '0.85rem',
        lineHeight: '1.7',
        color: 'var(--text-muted)',
        flexGrow: 1,
      }}>
        {desc}
      </p>

      <div style={{
        borderTop: '1px solid var(--border)',
        paddingTop: '1rem',
        marginTop: 'auto',
      }}>
        {scope.map(function(item) {
          return (
            <p key={item} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
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
                background: '#6366f1',
                flexShrink: 0,
              }} />
              {item}
            </p>
          )
        })}
      </div>
    </div>
  )
}

function PartnerSection() {
  return (
    <section id="partner" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">

        <p className="label">Global Partnership Structure</p>

        <h2 className="section-title">
          Three-Tier<br />
          <span style={{ color: '#6366f1' }}>Partnership System</span>
        </h2>

        <p className="section-intro">
          We are looking for long-term partners to build this capability system together.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}>
          {tiers.map(function(tier) {
            return (
              <TierCard
                key={tier.id}
                pct={tier.pct}
                name={tier.name}
                desc={tier.desc}
                scope={tier.scope}
              />
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default PartnerSection