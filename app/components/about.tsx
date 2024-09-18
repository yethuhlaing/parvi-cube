import React from "react";
import { Vortex } from "./ui/vortex";
import { FAQ } from "./faq";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

export function About() {
  return (
    <div className="mx-auto rounded-md min-h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 py-20 w-full h-full"
      >
        <div className="flex flex-col items-center w-full px-10 lg:px-28 py-0 lg:py-20">
          <h1 className="text-2xl font-bold md:text-6xl uppercase">
            What is Parvi Cube?
          </h1>
          <div className=" md:mt-10 my-10 text-center text-base md:text-2xl tracking-wide leading-relaxed lg:leading-loose font-semibold">
            <p className="pb-4">
              Parvi Cube is an immersive innovation event hosted at LUT University, bringing together creative minds from diverse fields including technology, business, and entrepreneurship. This event provides a platform for participants to collaborate and tackle real-world problems through creative solutions.
            </p>
            <p>
              Whether you're a developer, designer, engineer, or business strategist, Parvi Cube is where ideas transform into impactful projects. You will have the opportunity to showcase their talents and compete for recognition and rewards. Join us and be a part of this vibrant community shaping the future!
            </p>
          </div>
        </div>
      </Vortex>
    </div>
  );
}
