"use client";

import { About } from './components/about';
import Countdown from './components/countdown';
import { FAQ } from './components/faq';
import FeatureSection from './components/FeatureSection';
import Hero from './components/hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <About />
      {/* <CallToAction /> */}
      <FAQ />
      <FeatureSection />
    </main>
  )
}