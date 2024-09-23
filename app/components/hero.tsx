import React from 'react'
import Spline from '@splinetool/react-spline';
import MagicButton from './ui/MagicButton';
import { useRouter } from 'next/navigation'

export default function Hero() {
    const router = useRouter()

    return (
        <div className="flex flex-col-reverse h-full md:flex-row w-full items-center justify-center relative overflow-hidden">
            <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-start px-10 lg:px-28'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-8xl font-black md:text-9xl uppercase'>Parvi <br />Cube</h1>
                    <h2 className='text-xl md:text-2xl'>Think Big, Solve Bigger</h2>
                </div>
                <p className='max-w-md text-sm md:text-base text-zinc-500 py-2'>Join the Parvi Cube event at LUT University, where creative minds come together to tackle real-world challenges. </p>
                <div className='w-full flex items-center justify-center md:justify-start mt-4'>
                    <MagicButton
                    title='Register Now!'
                    otherClasses='w-lg'
                        handleClick={() => router.push('https://forms.gle/dPhAGzZSVpZigcc78')}
                    />
                </div>
            </div>
            {/* <div className='w-full h-[45vh] md:h-[130vh] md:w-3/5 flex items-center justify-center relative -z-10 mb-10'>
                <Spline className="w-full flex scale-[1] lg:scale-[1] items-center justify-center md:justify-start" scene='https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode' />
            </div> */}
        </div>
    )
}

