import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
import HeroImage from '@/app/assets/hero.png'
import Image from 'next/image'
import { socials } from '../lib/data'
const Footer = () => {
    return (
        <div>
            <BackgroundBeamsWithCollision>
                <section className="px-10 lg:px-28">
                    <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center py-10">
                        <div className="w-full md:w-1/2">
                            <Image src={HeroImage} alt="Parvi Cube Registration" className="w-full max-w-md rounded-lg shadow-lg" priority />
                        </div>
                        <div className="w-full md:w-1/2 my-8 md:my-0">
                            <h2 className="text-4xl font-black md:text-8xl uppercase mb-6">Hey Cubers!</h2>
                            <div className="text-base md:text-lg leading-relaxed flex flex-col space-y-2 text-justify">
                                <div>
                                    For this year&apos;s event, we are bringing together bright minds from diverse backgrounds to solve real-world challenges. Whether you are a developer, designer, or entrepreneur, we have created a space where you can collaborate, learn, and turn your ideas into impactful solutions.
                                </div>
                                <div>
                                    We will equip you with the tools, mentorship, and workshops you need to fuel your imagination and create something extraordinary. And while we cannot reveal everything just yet, expect an exciting lineup of activities, inspiring speakers, and opportunities to connect with industry leaders.
                                </div>
                                <div>
                                    We cannot wait to see the incredible solutions you will bring to life!
                                </div>
                            </div>
                            <p className="mt-4 font-semibold">— <span className='bg-gradient-to-r from-[#050deb] to-[#ff00e2] text-transparent bg-clip-text'>Team Parvi Cube</span> 🌟</p>
                        </div>

                    </div>
                    <footer>
                        <div className="container py-10">
                            <div className="flex w-full max-md:flex-row">
                                <div className="small-compact flex flex-1 flex-wrap items-center md:justify-start gap-5">
                                    <p className="opacity-70">Copyright@ ParviCube</p>
                                </div>


                                <div className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
                                    <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
                                        <a href='#' className="bg-gradient-to-r from-[#050deb] to-[#ff00e2] text-transparent bg-clip-text">Privacy Policy</a>
                                    </p>
                                    <p className="text-p5 transition-all duration-500 hover:text-p1">
                                        <a href='#' className="bg-gradient-to-r from-[#ff00e2] to-[#050deb]  text-transparent bg-clip-text">Terms of Use</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </section>
            </BackgroundBeamsWithCollision>
        </div>
    
    )
}
export default Footer

