import React from "react";
import { BentoGrid, BentoGridItem } from "@/app/components/ui/bento-grid";
import { memories } from "@/app/lib/data"

export function Memories() {

    return (
        <section id="extracurricular" className="w-full px-10 lg:px-28" >
            <div className="w-full flex flex-col justify-center items-center mb-15 py-20">
                <h1 className='text-5xl font-black md:text-8xl uppercase mb-4'>Event Finale</h1>
                <h2 className="text-lg md:text-xl text-center mt-2 mb-6  text-neutral-400 max-w-3xl">As the event comes to a close, teams and participants gather for group photos and final farewells. These images capture the camaraderie and friendships formed over the course of the event, immortalizing the smiles, laughter, and memorable moments. A perfect conclusion to a day filled with innovation and teamwork.</h2>
            </div>          
            <BentoGrid className="w-full mx-auto md:auto-rows-[25rem] mb-20">
                {memories.map((item, i) => (
                    <React.Fragment key={i}>
                        <BentoGridItem
                            header={item.header}
                            className={i === 4 || i === 8 ? "md:col-span-2" : ""}
                        />
                    </React.Fragment>
                ))}
            </BentoGrid>
        </section>
    );
}