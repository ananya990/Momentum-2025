import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

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

function About() {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { threshold: 0.5,margin: "-200px 0px -200px 0px" });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

  return (
      <>
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="min-h-auto flex items-center justify-center bg-[#5A100B]" 
            ref={ref}
        >
            <div className="h-full flex justify-evenly items-center px-4 sm:px-10 lg:px-32 text-white space-x-20 absolute z-20">

                <motion.img 
                    variants={itemVariants}
                    src="/about/NCU-Logo.svg"
                    alt=""
                    className="h-40 w-40 hidden md:block "
                />

                <div className="flex flex-col lg:space-y-2">
                    <motion.div className="text-sm lg:text-2xl font-semibold " variants={itemVariants}>
                        POWERED BY
                    </motion.div>
                    <motion.div className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold " variants={itemVariants}>
                        THE NORTHCAP UNIVERSITY
                    </motion.div>
                    <motion.div className='text-xs md:text-sm text-justify font-extralight sm:font-medium ' variants={itemVariants}>
                        Momentum is a 2-day long festival organized in the month of November. Momentum is the university fest where we provide the student community from various Universities and Colleges with velocity. This year Momentum 2025, the 27th Edition is planned for 7th - 8th November.
                    </motion.div>
                    <motion.div className='absolute self-end justify-start -mt-2 ' variants={itemVariants}>
                        <Image
                            src="/about/NCU-Logo.svg"
                            height={20}
                            width={20}
                            alt=""
                            className="h-12 w-12 md:hidden"
                        />
                    </motion.div>
                </div>
            </div>
            <Image
                src="/about/Aboutbg.svg"
                height={20}
                width={20}
                alt=""
                className="lg:h-auto lg:w-screen w-[200%] object-cover h-80 bg-fixed"
            />
        </motion.div>
      </>
  )
}

export default About