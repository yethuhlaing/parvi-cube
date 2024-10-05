import React from "react";
import { BackgroundLines } from "./ui/background-lines";

export function About() {
  return (
    <div className="w-full h-screen">
      <BackgroundLines className="flex items-center justify-center w-full h-full flex-col px-10 lg:px-28 bg-transparent relative">
        <div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-5xl font-black md:text-8xl uppercase text-center'>
              <span className="text-8xl font-black md:text-9xl uppercase">Cube!</span>
            </h1>
          </div>
          <div className=" md:mt-10 my-10 text-center text-base md:text-2xl tracking-wide leading-relaxed lg:leading-loose font-semibold">
            <p className="pb-4">
              The Parvi Cube Challenge is back for 2-day of intense collaboration and creativity! Hosted at LUT University, this event challenges participants to tackle real-world problems through innovative tech and business solutions.
            </p>
            <p>
              Teams will dive into an 8-hour Working session, working together to build and present their ideas. Open to designers, developers, entrepreneurs, and students of all backgrounds - Get ready to bring your best ideas to life!
            </p>
          </div>
        </div>
      </BackgroundLines>
    </div>
  );
}
