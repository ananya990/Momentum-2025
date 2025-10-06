import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import VideoWithFallback from './VideoWithFallback';
import { motion, useAnimation, useInView } from 'framer-motion';


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // stagger delay between children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function FeaturedEvents() {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { threshold: 0.5, margin: "-200px 0px -200px 0px" });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    return (
        <>
            <motion.div 
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <motion.div 
                    variants={itemVariants}
                    className="text-white text-center font-semibold text-xl lg:font-bold lg:text-4xl mb-6 mt-10 ">
                    Events
                </motion.div>

                <div className="w-full flex lg:flex-row items-center px-3 py-9 h-auto justify-center">
                    {/* Map */}
                    <motion.div className="relative z-20 -ml-96 -mr-42 xl:-ml-15 overflow-hidden hidden md:block h-full " variants={itemVariants}>
                        <Image
                            src="/events/Map.svg"
                            alt="Map"
                            width={1000}
                            height={800}
                            priority
                            className="rotate-[-2deg] drop-shadow-xl" 
                        />
                    </motion.div>

                    {/* Rectangles Grid */}
                    <motion.div className="relative z-10 flex-1 grid grid-cols-2 gap-4 h-full w-full " variants={itemVariants}>

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

                        <div className="col-span-2 ">
                            <VideoWithFallback
                                videoSrc="/videos/performance4.mp4"
                                imageSrc="/events/performance1.jpg"
                                alt="Performance 4"
                                className="h-72 w-full object-cover rounded-xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}

export default FeaturedEvents;