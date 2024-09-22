'use client'

import React, { useState, useEffect } from "react";
import Meteors from "./meteors";



const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const getTimeLeft = () => {
        const COUNTDOWN_TARGET = new Date("2024-10-15T23:59:59");
        const totalTimeLeft = COUNTDOWN_TARGET.getTime() - new Date().getTime();

        if (totalTimeLeft <= 0) {
            // Return zero values if the countdown has finished
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
        const seconds = Math.floor((totalTimeLeft / 1000) % 60);

        return { days, hours, minutes, seconds };
    };
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft()); 
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    // Prevent SSR rendering until timeLeft is available
    if (!timeLeft) {
        return null; // Avoid rendering mismatched content
    }
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-transparent px-10 lg:px-28 py-10">
            <Meteors number={20} />
            <div className='flex flex-col gap-4'>
                <h1 className='text-8xl font-black md:text-9xl uppercase z-30 mt-20 text-center'>Find Us Here!</h1>
                <div className="mt-4 text-center">
                    <p className="text-xl md:text-2xl">Parvi Cube at LUT University</p>
                    <p className="text-lg md:text-xl mt-2"><span className="bg-gradient-to-r from-[#050deb] to-[#ff00e2] text-transparent bg-clip-text">October 16</span> - Don’t miss out!</p>
                </div>
            </div>
            <div className='p-10 flex flex-col items-center'>
                <div className='w-full flex flex-row justify-center items-center gap-3 sm:gap-8 mx-auto'>
                    {Object.entries(timeLeft).map((el: any, index: number, arr: any[]) => {
                        const label = el[0];
                        const value = el[1];
                        return (
                            <div key={label} className='flex flex-col items-center'>
                                <div className='flex items-center'>
                                    <div className='w-[80px]  sm:w-[120px] md:w-[200px] h-[80px] sm:h-[120px] md:h-[200px] flex items-center justify-center text-[30px] sm:text-[50px] md:text-[100px] font-semibold'>
                                        <span className="font-bold bg-gradient-to-r from-[#050deb] to-[#ff00e2] text-transparent bg-clip-text">{value}</span>
                                    </div>
                                    {/* Add colon if it's not the last item */}
                                    {index < arr.length - 1 && (
                                        <span className='text-[30px] sm:text-[50px] md:text-[100px] font-semibold mx-2'>:</span>
                                    )}
                                </div>
                                <span className='text-base lg:text-lg font-semibold tracking-[4px] mt-2'>{label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    );
};

export default Countdown;