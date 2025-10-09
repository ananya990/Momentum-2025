import Image from 'next/image'
import React from 'react'

function EventBg() {
  return (
    <>
        <div className='-z-10 hidden md:block'>
            <Image
            src="/eventDescription/Wall_Design.svg"
            alt="Wallpaper"
            height={100}
            width={100}
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            <Image
            src="/eventDescription/Petals.svg" // Replace with actual path
            alt="Falling Petals"
            height={100}
            width={100}
            className="absolute top-0 left-0 w-full h-full object-cover z-5 pointer-events-none"
            />

            <Image
            src="/eventDescription/Floor_Elements_1.svg"
            alt="Floor"
            height={100}
            width={100}
            className="absolute bottom-0 left-0 w-full object-contain z-20 hidden md:block"
            />
        </div>
    </>
  )
}

export default EventBg