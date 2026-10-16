import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Services } from './components/Services'
import { Routine } from './components/Routine'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { Plans } from './components/Plans'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { StickyBar } from './components/StickyBar'

export default function App() {
  return (
    <>
      <StickyBar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Routine />
        <About />
        <Gallery />
        <Plans />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
