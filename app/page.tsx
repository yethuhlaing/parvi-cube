"use client";

import { About } from './components/about';
import Countdown from './components/countdown';
import { EventTimeline } from './components/EventTimeline';
import { FAQ } from './components/faq';
import Footer from './components/footer';
import Hero from './components/hero';
import { Memories } from './components/memories';
import Partners from './components/Partners';
import { BackgroundBeamsWithCollision } from './components/ui/background-beams-with-collision';
import Team from './components/team';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Partners />
      <Countdown />
      <Memories />
      <Team />
      <EventTimeline />
      <BackgroundBeamsWithCollision>
        <FAQ />
        <Footer />
      </BackgroundBeamsWithCollision>
    </main>
  )
}