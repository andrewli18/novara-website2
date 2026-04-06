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
    <section id="partner" style={{ padding: '7rem 3rem', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <p style={{
  fontSize: '0.75rem',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#c8a96e',
  marginBottom: '1.5rem',
}}>
  Global Partnership Structure
</p>

<h2 style={{
  fontFamily: 'Georgia, serif',
  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
  fontWeight: '300',
  marginBottom: '1rem',
}}>
  Three-Tier Partnership System
</h2>

<p style={{
  color: '#7a7570',
  maxWidth: '560px',
  marginBottom: '3rem',
  lineHeight: '1.8',
}}>
  We are looking for long-term partners to build this capability system together.
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