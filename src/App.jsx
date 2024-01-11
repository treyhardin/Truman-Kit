import { createSignal } from 'solid-js'
import './App.css'
import Lenis from '@studio-freight/lenis'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Typography from './components/typography/typography'
import Header from './components/header/header'
import Colors from './components/colors/colors'
import Forms from './components/forms/forms'
import Footer from './components/footer/footer'

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
        <Typography />
        <Colors />
        <Forms />
        <Footer />
      </main>
    </>
  )
}

export default App
