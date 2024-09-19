import { About } from './components/about';
import Countdown from './components/countdown';
import { FAQ } from './components/faq';
import { Footer } from './components/footer';
import Hero from './components/hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <About />
      {/* <CallToAction /> */}
      <FAQ />
      <Footer />
    </main>
  )
}