import React from "react";
import { Timeline } from "./ui/timeline";

export function EventTimeline() {
    const data = [
        {
            title: "October 16",
            content: (
                <div className="flex flex-col space-y-6 mt-2">
                    <div className="space-y-2">
                        <p className="font-bold text-lg lg:text-2xl">10:00 AM – 10:30 AM: Registration & Welcome</p>
                        <p className="text-sm lg:text-lg">Participants check-in and get an overview of the event.</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-bold text-lg lg:text-2xl">10:30 AM – 10:45 AM: Problem Reveal</p>
                        <p className="text-sm lg:text-lg">The challenge is revealed, and teams choose their focus.</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-bold text-lg lg:text-2xl">10:45 AM – 6:00 PM: 8-Hour Hacking Session</p>
                        <p className="text-sm lg:text-lg">Teams work on solving their chosen challenge.</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-bold text-lg lg:text-2xl">1:00 PM – 2:00 PM: Lunch Break</p>
                        <p className="text-sm lg:text-lg">A chance to relax and network before continuing the session.</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-bold text-lg lg:text-2xl">6:00 PM: Hacking Ends & Submission</p>
                        <p className="text-sm lg:text-lg">All teams submit their final projects for evaluation.</p>
                    </div>
                </div>
            ),
        },
        {
            title: "October 17",
            content: (
                <div className="flex flex-col space-y-6 mt-2">
                    <div className="space-y-2">
                        <p className="font-bold text-lg lg:text-2xl">10:00 AM – 10:15 AM: Welcome Back</p>
                        <p className="text-sm lg:text-lg">Overview of the presentation process.</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-bold text-lg lg:text-2xl">10:15 AM – 12:15 PM: Team Presentations</p>
                        <p className="text-sm lg:text-lg">Teams showcase their solutions to the judges with Q&A sessions.</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-bold text-lg lg:text-2xl">12:15 PM – 12:45 PM: Judging & Deliberation</p>
                        <p className="text-sm lg:text-lg">Judges deliberate to select winners.</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-bold text-lg lg:text-2xl">12:45 PM – 1:00 PM: Awards & Closing</p>
                        <p className="text-sm lg:text-lg">Announcement of winners for Best Overall Solution and Audience Choice Award.</p>
                    </div>
                </div>
            ),
        },
    ];


    return (
        <div className="w-full px-10 lg:px-28 mx-auto mt-8">
            <div className="w-full flex flex-col justify-center items-center mb-15">
                <h1 className='text-5xl font-black md:text-8xl uppercase mb-4'>Schedule</h1>
                <h2 className="text-lg md:text-xl text-center max-w-xl mt-2 mb-6">From brainstorming challenges to the final pitches, here&apos;s a timeline of the key moments from the <span className="bg-gradient-to-r from-[#050deb] to-[#ff00e2] text-transparent bg-clip-text">Parvi Cube Challenge</span>.</h2>
            </div>
            <Timeline data={data} />
        </div>
    );
}
