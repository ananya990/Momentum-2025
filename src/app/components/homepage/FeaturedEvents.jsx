import Image from 'next/image';
import React from 'react';
import VideoWithFallback from './VideoWithFallback';

function FeaturedEvents() {
  return (
    <>
        <div className="text-white text-center font-semibold text-xl lg:font-bold lg:text-4xl mb-6 mt-10">
            Events
        </div>

        <div className="w-full flex lg:flex-row items-center px-3 py-9 h-auto justify-center">
            {/* Map */}
            <div className="relative z-20 -ml-96 -mr-42 xl:-ml-15 overflow-hidden hidden md:block h-full">
                <Image
                    src="/events/Map.svg"
                    alt="Map"
                    width={1000}
                    height={800}
                    priority
                    className="rotate-[-2deg] drop-shadow-xl" 
                />
            </div>

            {/* Rectangles Grid */}
            <div className="relative z-10 flex-1 grid grid-cols-2 gap-4 h-full w-full">

                <div className="col-span-2">
                    <VideoWithFallback
                        videoSrc="/videos/performance4.mp4"
                        imageSrc="/events/performance1.jpg"
                        alt="Performance 4"
                        className="h-72 w-full object-cover rounded-xl"
                    />
                </div>
            
                <VideoWithFallback
                    videoSrc="/videos/performance1.mp4"
                    imageSrc="/events/performance1.jpg"
                    alt="Performance 1"
                    className="row-span-2 h-full w-full object-cover rounded-xl md:hidden xl:block"
                />

                <VideoWithFallback
                    videoSrc="/videos/performance2.mp4"
                    imageSrc="/events/performance1.jpg"
                    alt="Performance 2"
                    className="h-48 w-full object-cover rounded-xl"
                />

                <VideoWithFallback
                    videoSrc="/videos/performance3.mp4"
                    imageSrc="/events/performance1.jpg"
                    alt="Performance 3"
                    className="h-48 w-full object-cover rounded-xl"
                />

                <div className="col-span-2">
                    <VideoWithFallback
                        videoSrc="/videos/performance4.mp4"
                        imageSrc="/events/performance1.jpg"
                        alt="Performance 4"
                        className="h-72 w-full object-cover rounded-xl"
                    />
                </div>
            </div>
        </div>
    </>
  );
}

export default FeaturedEvents;