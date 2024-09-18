import React from 'react'
import Spline from '@splinetool/react-spline';

export default function Hero() {
    return (
        <div className="flex flex-col-reverse h-full md:flex-row w-full items-center justify-center relative overflow-hidden">
            <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-start gap-8 px-10 lg:px-28'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-8xl font-black md:text-9xl uppercase'>Parvi <br />Cube</h1>
                    <h2 className='text-lg md:text-4xl'>Think Big, Solve Bigger</h2>
                </div>
                <p className='max-w-md text-sm md:text-base text-zinc-500'>Join the Parvi Cube event at LUT University, where creative minds come together to tackle real-world challenges. </p>
                <div className='w-full flex items-center justify-center md:justify-start gap-4'>
                    <button className='w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors'>Try 7 days free!</button>
                    <button className='w-48 h-12 text-sm sm:text-base rounded hover:bg-white hover:text-white hover:bg-opacity-5 transition-colors'>Contact</button>
                </div>
            </div>
            {/* <div className='w-full h-[screen] md:h-full md:w-3/5 flex items-center justify-center relative -z-10 mb-10'>
                <Spline className="w-full flex scale-[1] lg:scale-[.9] items-center justify-center md:justify-start" scene='https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode' />
            </div> */}
        </div>
    )
}

