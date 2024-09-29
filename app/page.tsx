"use client";

import { About } from './components/about';
import Countdown from './components/countdown';
import { EventTimeline } from './components/EventTimeline';
import { FAQ } from './components/faq';
import Footer from './components/footer';
import Hero from './components/hero';
import Partners from './components/Partners';
import { BackgroundBeamsWithCollision } from './components/ui/background-beams-with-collision';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Partners />
      <Countdown />
      <EventTimeline />
      <BackgroundBeamsWithCollision>
        <FAQ />
        <Footer />
      </BackgroundBeamsWithCollision>
    </main>
  )
}