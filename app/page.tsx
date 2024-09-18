"use client";

import { CallToAction } from './components/call-to-action';
import Countdown from './components/countdown';
import { FAQ } from './components/faq';
import Hero from './components/hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      {/* <Partner /> */}
      {/* <RecentProjects /> */}
      <CallToAction />
      <FAQ />
    </main>
  )
}