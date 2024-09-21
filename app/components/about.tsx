import React from "react";
import { BackgroundLines } from "./ui/background-lines";

export function About() {
  return (
    <div className="">
      <BackgroundLines className="flex items-center justify-center w-full h-screen flex-col px-10 lg:px-28 bg-transparent">
        <div>
          <div className='flex flex-col gap-4'>
            <h1 className='text-8xl font-black md:text-9xl uppercase text-center'>Cube!</h1>
          </div>
          <div className=" md:mt-10 my-10 text-center text-base md:text-2xl tracking-wide leading-relaxed lg:leading-loose font-semibold">
            <p className="pb-4">
              Parvi Cube is an immersive innovation event hosted at LUT University, bringing together creative minds from diverse fields including technology, business, and entrepreneurship. This event provides a platform for participants to collaborate and tackle real-world problems through creative solutions.
            </p>
            <p>
              Whether you are a developer, designer, engineer, or business strategist, Parvi Cube is where ideas transform into impactful projects. You will have the opportunity to showcase their talents and compete for recognition and rewards. Join us and be a part of this vibrant community shaping the future!
            </p>
          </div>
        </div>
      </BackgroundLines>
    </div>
  );
}
