import React from 'react'

function EventBg() {
  return (
    <>
        <div className='-z-10 hidden md:block'>
            <img
            src="/eventDescription/Wall_Design_Petals.webp"
            alt="Wallpaper"
            height={100}
            width={100}
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            <img
            src="/eventDescription/Floor_Elements.webp"
            alt="Floor"
            height={100}
            width={100}
            className="absolute bottom-0 left-0 w-full object-contain hidden lg:block"
            />
        </div>
    </>
  )
}

export default EventBg