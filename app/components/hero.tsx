import React from 'react'
import Spline from '@splinetool/react-spline';
import MagicButton from './ui/MagicButton';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import heroImage from "../assets/heroImage.jpg"
import AnimatedCube from './ui/animated-cube';
export default function Hero() {
    const router = useRouter()

    return (
        <div className="flex flex-col-reverse h-screen md:flex-row w-full items-center justify-center relative overflow-hidden bg-transparent">
            <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-start px-10 lg:px-28'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-8xl font-black md:text-9xl uppercase'>Parvi <br />Cube</h1>
                    <h2 className='text-xl md:text-2xl'>Think Big, Solve Bigger</h2>
                </div>
                <p className='max-w-md text-sm md:text-base text-zinc-500 py-2'>Where creativity meets innovation. Solve real-world challenges in tech or business in just 4 hours!
                 </p>
                <div className='w-full flex items-center justify-center md:justify-start mt-4'>
                    <MagicButton
                    title='Register Now!'
                    otherClasses='w-lg'
                        handleClick={() => router.push('https://forms.gle/dPhAGzZSVpZigcc78')}
                    />
                </div>
            </div>
            <div className='w-full h-2/4 md:h-full flex items-center justify-center relative mb-4 lg:mb-10'>
                <AnimatedCube />
            </div>
        </div>
    )
}

