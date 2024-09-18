import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
import HeroImage from '@/app/assets/hero.png'
import Image from 'next/image'

export default function Footer() {
    return (
        <BackgroundBeamsWithCollision>

            <section className="px-10 lg:px-28">
                <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
                    <div className="w-full md:w-1/2">
                        <Image src={HeroImage} alt="Parvi Cube Registration" className="w-full max-w-md rounded-lg shadow-lg" priority />
                    </div>
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-4xl font-black md:text-6xl uppercase mb-6">Hey Cubers!</h2>
                        <div className="text-base md:text-lg leading-relaxed flex flex-col space-y-2 text-justify">
                            <div>
                                Welcome to Parvi Cube 2024, where creativity meets technology! For this year's event, we're bringing together bright minds from diverse backgrounds to solve real-world challenges. Whether you're a developer, designer, or entrepreneur, we’ve created a space where you can collaborate, learn, and turn your ideas into impactful solutions.
                            </div>
                            <div>
                                We'll equip you with the tools, mentorship, and workshops you need to fuel your imagination and create something extraordinary. And while we can't reveal everything just yet, expect an exciting lineup of activities, inspiring speakers, and opportunities to connect with industry leaders.
                            </div>
                            <div>
                                We can’t wait to see the incredible solutions you’ll bring to life!
                            </div>
                        </div>
                        <p className="mt-4 font-semibold">— <span className='bg-gradient-to-r from-[#050deb] to-[#ff00e2] text-transparent bg-clip-text'>Team Parvi Cube</span> 🌟</p>
                    </div>

                    {/* <div className="flex flex-col items-center">
                        <h1 className="text-4xl font-black md:text-6xl uppercase mb-4">
                            Did we miss anything?
                        </h1>
                        <p className="text-white-200 md:mt-10 my-5 ">
                            Reach out to us at team@parvicube.com😊
                        </p>
                        <a href="mailto:team@parvicube.com">
                            <MagicButton
                                title="Let's get in touch"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>
                    </div> */}
                </div>
            </section>

        </BackgroundBeamsWithCollision>
        

    )
}

