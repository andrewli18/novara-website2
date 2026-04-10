import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'
import lang from './lang'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import IdentitySection from './components/IdentitySection'
import ConferenceSection from './components/ConferenceSection'
import LifeOSSection from './components/LifeOSSection'
import EquitySection from './components/EquitySection'
import PartnerSection from './components/PartnerSection'
import IncentiveSection from './components/IncentiveSection'
import ValueSection from './components/ValueSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [lightMode, setLightMode] = useState(false)
  const [locale, setLocale] = useState('en')

  const t = lang[locale]

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

  function toggleLocale() {
    setLocale(function(prev) { return prev === 'zh' ? 'en' : 'zh' })
  }

  return (
    <div>
      <NavBar t={t.nav} lightMode={lightMode} toggleMode={toggleMode} toggleLocale={toggleLocale} />
      <HeroSection t={t.hero} />
      <IdentitySection t={t.identity} />
      <ConferenceSection t={t.conference} />
      <LifeOSSection t={t.lifeos} />
      <EquitySection t={t.equity} />
      <PartnerSection t={t.partner} />
      <IncentiveSection t={t.incentive} />
      <ValueSection t={t.value} />
      <ContactSection t={t.contact} />
      <Footer t={t.footer} />
    </div>
  )
}

export default App