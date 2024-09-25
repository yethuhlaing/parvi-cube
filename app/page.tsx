"use client";

import { About } from './components/about';
import Countdown from './components/countdown';
import { FAQ } from './components/faq';
import Footer from './components/footer';
import Hero from './components/hero';
import Partners from './components/Partners';

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <About />
      <Partners />
      <FAQ />
      <Footer />
    </main>
  )
}