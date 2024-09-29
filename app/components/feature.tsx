import Image from 'next/image'
import React from 'react'
import HeroImage from '@/app/assets/hero.png'
import { socials } from '../lib/data'

function Feature() {
    return (
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center py-10">
            <div className="w-full md:w-1/2">
                <Image src={HeroImage} alt="Parvi Cube Registration" className="w-full max-w-md rounded-lg shadow-lg" priority />
            </div>
            <div className="w-full md:w-1/2 my-8 md:my-0">
                <h2 className="text-4xl font-black md:text-8xl uppercase mb-6">How It Works</h2>
                <div className="text-base md:text-lg leading-relaxed flex flex-col space-y-2 text-justify">
                    <div>
                        Problem Reveal: Challenges will be announced at the event. Choose to solve either a tech or business problem.
                    </div>
                    <div>
                        Hacking: In just 4 hours, teams will brainstorm, build, and prepare their solutions.
                    </div>
                    <div>
                        Presentations & Judging: Teams will present their solutions, with prizes awarded for Best Overall Solution and Audience Choice.                                </div>
                </div>
                <p className="mt-4 font-semibold">— <span className='bg-gradient-to-r from-[#050deb] to-[#ff00e2] text-transparent bg-clip-text'>Team Parvi Cube</span> 🌟</p>
            </div>

        </div>
    )
}

export default Feature