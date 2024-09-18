'use client'

import React, { useState, useEffect } from "react";
import Meteors from "./meteors";

const getTimeLeft = () => {
    const COUNTDOWN_TARGET = new Date("2024-10-15T23:59:59");
    const totalTimeLeft = COUNTDOWN_TARGET.getTime() - new Date().getTime();
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((totalTimeLeft / 1000) % 60);
    return { days, hours, minutes, seconds };
};

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-background p-10">
            <Meteors number={30} />
            <div className="font-semibold md:text-4xl text-lg">
                <div>Join us for the Parvi Cube event at LUT University on October 16!</div>
                <div>With a €100 prize pool, it’s an opportunity you won’t want to miss!</div>
            </div>
            <div className='p-10 flex flex-col items-center'>
                <div className='w-full flex flex-row justify-center gap-3 sm:gap-8 mx-auto'>
                    {Object.entries(timeLeft).map((el: any) => {
                        const label = el[0];
                        const value = el[1];
                        return (
                            <div className='w-1/4 max-w-[150px] sm:max-w-[200px] flex flex-col items-center justify-center h-[150px] sm:h-[200px] md:h-[250px]' key={label}>
                                <div className='text-[30px] sm:text-[50px] md:text-[100px] font-semibold flex justify-center items-center w-[80px] sm:w-[120px] md:w-[200px] h-[80px] sm:h-[120px] md:h-[200px] relative'>
                                    <span>{value}</span>
                                </div>
                                <span className='text-lg font-light tracking-[4px] mt-2'>{label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    );
};

export default Countdown;