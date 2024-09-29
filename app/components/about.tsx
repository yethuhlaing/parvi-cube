import React from "react";
import { BackgroundLines } from "./ui/background-lines";

export function About() {
  return (
    <div className="w-full h-screen">
      <BackgroundLines className="flex items-center justify-center w-full h-full flex-col px-10 lg:px-28 bg-transparent relative">
        <div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-5xl font-black md:text-8xl uppercase text-center'>
              <span className="">Parvi Cube X TechRace</span>
            </h1>
          </div>
          <div className=" md:mt-10 my-10 text-center text-base md:text-2xl tracking-wide leading-relaxed lg:leading-loose font-semibold">
            <p className="pb-4">
              The Parvi Cube Hackathon and Junction TechRace are joining forces to bring you the ultimate innovation challenge! This 1-day event, hosted at LUT University, combines Parvi Cube's focus on problem-solving in both tech and business with Junction’s fast-paced, hands-on TechRace experience.
            </p>
            <p>
              Participants will face technology and business challenges, choosing one to solve while racing against the clock in a high-energy, 4-hour hacking session. Designers, developers, entrepreneurs, and students from all backgrounds are welcome!
            </p>
          </div>
        </div>
      </BackgroundLines>
    </div>
  );
}
