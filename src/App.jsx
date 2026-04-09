import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import LayersSection from './components/LayersSection'
import PhasesSection from './components/PhasesSection'
import PartnerSection from './components/PartnerSection'
import IncentiveSection from './components/IncentiveSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [lightMode, setLightMode] = useState(false)

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

  return (
    <div>
      <NavBar lightMode={lightMode} toggleMode={toggleMode} />
      <HeroSection />
      <LayersSection />
      <PhasesSection />
      <PartnerSection />
      <IncentiveSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App