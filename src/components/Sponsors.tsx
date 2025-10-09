import { useAnimation, useInView, motion } from 'framer-motion';
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

function Sponsors() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5,margin: "-200px 0px -200px 0px" });

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
        className='flex flex-col space-y-5 items-center justify-center h-auto overflow-hidden lg:mt-20 sponsor-bg'
      >

        <motion.div 
          variants={itemVariants}
          className='text-white lg:font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold'
        >
          Past Sponsors
        </motion.div>
        <motion.img
          variants={itemVariants}
          src="/sponsors/Sponsors.svg"
          alt=""
          className="w-full min-h-auto scale-110 pb-10"
        />
      </motion.div>
    </>
  )
}

export default Sponsors