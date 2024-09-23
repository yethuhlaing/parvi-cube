import Image from 'next/image';
import React from 'react'

import LUTES from '/app/assets/LUTES.png'
import LUT from '/app/assets/LUT.png'
import LAB from '/app/assets/LAB.png'
import BUSINESSMILL from '/app/assets/Business mill.png'
function Partners() {
    const images = [
        { src: LUTES, alt: 'Image 1' },
        { src: LUT, alt: 'Image 2' },
        { src: LAB, alt: 'Image 3' },
        // { src: BUSINESSMILL, alt: 'Image 4' },
    ];
    return (
        <div className="overflow-hidden relative w-full py-20">
            <div className="flex flex-col md:flex-row justify-center items-center space-x-4 ">
                {images.map((img, index) => (
                    <div key={index} className=" w-48 h-24">
                        <Image
                            src={img.src.src}
                            alt={img.alt}
                            width={202} // Adjust width
                            height={100} // Adjust height
                            className=''
                        />
                    </div>
                ))}
            </div>
            {/* Optional: Duplicate content for continuous scrolling */}
            {/* <div className="flex space-x-4 absolute top-0 left-full animate-marquee">
                {images.map((img, index) => (
                    <div key={index} className="flex-shrink-0 w-48 h-24">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            width={192}
                            height={96}
                            className="object-cover"
                        />
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default Partners