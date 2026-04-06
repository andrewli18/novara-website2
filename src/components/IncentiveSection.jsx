const steps = [
  {
    id: 'step-1',
    num: '01',
    title: 'Registration',
    range: '$5 – 10',
    desc: 'Reward for referring a new registered user.',
  },
  {
    id: 'step-2',
    num: '02',
    title: 'Participation',
    range: '$20 – 50',
    desc: 'Reward when the referred user completes their first session.',
  },
  {
    id: 'step-3',
    num: '03',
    title: 'Conversion',
    range: '$100 – 300+',
    desc: 'Reward when the referred user becomes a paying member.',
  },
]

const distribution = [
  { label: 'City Lead', value: '40%' },
  { label: 'Training Partner', value: '30%' },
  { label: 'Community', value: '20%' },
  { label: 'Flexible Pool', value: '10%' },
]

function IncentiveSection() {
  return (
    <section id="incentive" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">

        <p className="label">Incentive Structure</p>

        <h2 className="section-title">
          Short · Mid · <span style={{ color: '#6366f1' }}>Long-term</span>
        </h2>

        <p className="section-intro">
          We reward effective contributors at every stage — from referrals
          to profit sharing to long-term equity alignment.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start',
        }}>

          <div>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--text-dim)',
              marginBottom: '1.5rem',
            }}>
              Referral Rewards
            </p>

            {steps.map(function(step) {
              return (
                <div key={step.id} style={{
                  display: 'flex',
                  gap: '1.5rem',
                  padding: '1.5rem 0',
                  borderBottom: '1px solid var(--border)',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    border: '1px solid rgba(99,102,241,0.3)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#6366f1',
                    flexShrink: 0,
                    background: 'rgba(99,102,241,0.05)',
                  }}>
                    {step.num}
                  </div>

                  <div>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      marginBottom: '0.25rem',
                      color: 'var(--text-primary)',
                    }}>
                      {step.title}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#6366f1',
                      textShadow: '0 0 20px rgba(99,102,241,0.3)',
                      marginBottom: '0.2rem',
                    }}>
                      {step.range}
                    </p>
                    <p style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                    }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glow-card" style={{ padding: '2rem', borderRadius: '8px' }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-dim)',
                marginBottom: '1.5rem',
              }}>
                City Profit Distribution (20%)
              </p>

              {distribution.map(function(item) {
                return (
                  <div key={item.label} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.9rem 0',
                    borderBottom: '1px solid var(--border)',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                    }}>
                      {item.label}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                    }}>
                      {item.value}
                    </span>
                  </div>
                )
              })}

              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-dim)',
                lineHeight: '1.7',
                marginTop: '1.2rem',
              }}>
                Base costs covered first. Structure adjustable based on contributions.
              </p>
            </div>

            <div className="glow-card" style={{ padding: '2rem', borderRadius: '8px' }}>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-dim)',
                marginBottom: '1rem',
              }}>
                Long-term Equity
              </p>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#6366f1',
                textShadow: '0 0 30px rgba(99,102,241,0.3)',
                lineHeight: '1',
                marginBottom: '0.8rem',
              }}>
                20%
              </p>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                lineHeight: '1.7',
              }}>
                Equity pool reserved for key resource providers
                and long-term contributors.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default IncentiveSection