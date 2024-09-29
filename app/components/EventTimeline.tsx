import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";

export function EventTimeline() {
    const data = [
        {
            title: "10:00 AM – 10:30 AM: Registration & Welcome",
            content: <div></div>,
        },
        {
            title: "10:30 AM – 10:45 AM: Problem Reveal",
            content: <div></div>,
        },
        {
            title: "10:45 AM – 2:45 PM: Hacking Session",
            content: <div></div>,
        },
        {
            title: "2:45 PM – 3:00 PM: Hacking Ends & Submission",
            content: <div></div>,
        },
        {
            title: "3:00 PM – 4:00 PM: Presentations & Judging",
            content: <div></div>,
        },
        {
            title: "4:00 PM – 4:30 PM: Award Ceremony",
            content: <div></div>,
        },
        {
            title: "4:30 PM: Event Close & Networking",
            content: <div></div>,
        },
    ];


    return (
        <div className="w-full px-10 lg:px-28 mx-auto mt-8">
            <div className="w-full flex flex-col justify-center items-center mb-15">
                <h1 className='text-5xl font-black md:text-8xl uppercase mb-4'>Timeline</h1>
                <h2 className="text-lg md:text-xl text-center max-w-xl mt-2 mb-6">From brainstorming challenges to the final pitches, here's a timeline of the key moments from the <span className="bg-gradient-to-r from-[#050deb] to-[#ff00e2] text-transparent bg-clip-text">Parvi Cube Hackathon X TechRace</span>.</h2>
            </div>
            <Timeline data={data} />
        </div>
    );
}
