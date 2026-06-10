import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'
import lang from './lang'
import IntroScreen from './components/IntroScreen'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import IdentitySection from './components/IdentitySection'
import PhasesSection from './components/PhasesSection'
import ConferenceSection from './components/ConferenceSection'
import LifeOSSection from './components/LifeOSSection'
import PartnerSection from './components/PartnerSection'
import IncentiveSection from './components/IncentiveSection'
import WaitlistSection from './components/WaitlistSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [lightMode, setLightMode] = useState(false)
  const [showIntro, setShowIntro] = useState(true)

  const t = lang['en']

  useEffect(function() {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
  }, [])

  useEffect(function() {
    if (lightMode) {
      document.body.classList.add('light-mode')
    } else {
      document.body.classList.remove('light-mode')
    }
  }, [lightMode])

  function toggleMode() {
    setLightMode(function(prev) { return !prev })
  }

  function handleIntroComplete() {
    setShowIntro(false)
  }

  return (
    <div>
      {showIntro && (
        <IntroScreen
          t={lang['en'].intro}
          onComplete={handleIntroComplete}
        />
      )}
      <NavBar t={t.nav} lightMode={lightMode} toggleMode={toggleMode} />
      <HeroSection t={t.hero} />
      <IdentitySection t={t.identity} />
      <PhasesSection t={t.phases} />
      <ConferenceSection t={t.conference} />
      <LifeOSSection t={t.lifeos} />
      <PartnerSection t={t.partner} />
      <IncentiveSection t={t.incentive} />
      <WaitlistSection t={t.waitlist} />
      <ContactSection t={t.contact} />
      <Footer t={t.footer} />
    </div>
  )
}

export default App