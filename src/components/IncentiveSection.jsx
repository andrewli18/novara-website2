const steps = [
  {
    id: 'step-1',
    num: '1',
    title: 'Registration',
    range: '$5 – 10',
    desc: 'Reward for referring a new registered user.',
  },
  {
    id: 'step-2',
    num: '2',
    title: 'Participation',
    range: '$20 – 50',
    desc: 'Reward when the referred user completes their first session.',
  },
  {
    id: 'step-3',
    num: '3',
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
    <section id="incentive" style={{ padding: '7rem 3rem', background: '#0a0a0a' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <p style={{
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#c8a96e',
          marginBottom: '1.5rem',
        }}>
          Incentive Structure
        </p>

        <h2 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          fontWeight: '300',
          marginBottom: '1rem',
        }}>
          Short-term · Mid-term · Long-term
        </h2>

        <p style={{
          color: '#7a7570',
          maxWidth: '560px',
          marginBottom: '4rem',
          lineHeight: '1.8',
        }}>
          We reward effective contributors at every stage — from referrals
          to profit sharing to long-term equity alignment.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
        }}>

          {/* Left: Referral rewards */}
          <div>
            <p style={{
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#7a7570',
              marginBottom: '2rem',
            }}>
              Referral Rewards
            </p>

            {steps.map(function(step) {
              return (
                <div key={step.id} style={{
                  display: 'flex',
                  gap: '2rem',
                  padding: '1.5rem 0',
                  borderBottom: '1px solid #2a2825',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid #2a2825',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.2rem',
                    fontWeight: '300',
                    color: '#c8a96e',
                    flexShrink: '0',
                  }}>
                    {step.num}
                  </div>

                  <div>
                    <p style={{
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      marginBottom: '0.25rem',
                    }}>
                      {step.title}
                    </p>
                    <p style={{
                      fontFamily: 'Georgia, serif',
                      fontSize: '1.6rem',
                      fontWeight: '300',
                      color: '#c8a96e',
                      marginBottom: '0.25rem',
                    }}>
                      {step.range}
                    </p>
                    <p style={{ fontSize: '0.82rem', color: '#7a7570' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: City profit distribution */}
          <div>
            <p style={{
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#7a7570',
              marginBottom: '2rem',
            }}>
              City Profit Distribution (20%)
            </p>

            <div style={{
              border: '1px solid #2a2825',
              background: '#111',
              padding: '2.5rem 2rem',
            }}>
              {distribution.map(function(item) {
                return (
                  <div key={item.label} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 0',
                    borderBottom: '1px solid #2a2825',
                  }}>
                    <span style={{ fontSize: '0.85rem', color: '#7a7570' }}>
                      {item.label}
                    </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '500' }}>
                      {item.value}
                    </span>
                  </div>
                )
              })}

              <p style={{
                fontSize: '0.75rem',
                color: '#7a7570',
                lineHeight: '1.7',
                marginTop: '1.5rem',
              }}>
                Base costs (instructor fees, venue) are covered first
                before profit distribution. Structure may be adjusted
                based on actual contributions.
              </p>
            </div>

            <div style={{
              marginTop: '2rem',
              padding: '2rem',
              border: '1px solid #2a2825',
              background: '#111',
            }}>
              <p style={{
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#7a7570',
                marginBottom: '1rem',
              }}>
                Long-term Alignment
              </p>
              <p style={{
                fontFamily: 'Georgia, serif',
                fontSize: '1.1rem',
                fontWeight: '300',
                color: '#f0ede8',
                lineHeight: '1.7',
              }}>
                20% equity pool reserved for key resource providers
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