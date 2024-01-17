import './App.css'
import './variables/typography.css'
import './variables/colors.css'
import './variables/forms.css'
import './variables/layout.css'
import './variables/buttons.css'
import './variables/animations.css'

import Lenis from '@studio-freight/lenis'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Typography from './components/typography/typography'
import Header from './components/header/header'
import Colors from './components/colors/colors'
import Forms from './components/forms/forms'
import Footer from './components/footer/footer'
import ViewportAnimations from './components/viewport-animations/viewport-animations'
import ScrollAnimations from './components/scroll-animations/scroll-animations'

export const lenis = new Lenis()

function App() {

  // Initialize Lenis
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ViewportAnimations />
        <Colors />
        <ScrollAnimations />
        <Typography />
        <Forms />
        <Footer />
      </main>
    </>
  )
}

export default App
