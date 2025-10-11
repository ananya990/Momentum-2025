import { useAnimation, useInView, motion } from 'framer-motion';
import { Facebook, Globe, Instagram, Youtube } from 'lucide-react'
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

function FooterMain() {
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
        className={`w-screen mt-20`}>
        {/* HOARDING & KATPUTLI */}
        <div className='w-full flex h-auto md:justify-between justify-center absolute'>
          <motion.img
            src="/footer/Katputli2.webp"
            alt=''
            className='xl:w-96 md:w-64 z-30 hidden md:block'
            variants={itemVariants}
          />
          <motion.img
            src="/footer/Katputli1.webp"
            variants={itemVariants}
            alt=''
            className='xl:w-96 md:w-64 z-50 hidden md:block'
          />
        </div>

        {/* WAVES */}
        <div className='flex flex-col sm:-space-y-10 xl:-space-y-20 w-full overflow-hidden h-auto'>
          <motion.img
            src="/footer/Waves.svg"
            alt=''
            className='min-w-full z-40 scale-150 sm:scale-100'
          />
          {/* <AnimatedWaves /> */}

          {/* SOCIALS */}
          <div className='w-full flex items-end z-50 mt-10'>
            <div className='text-xl absolute w-full md:py-5 py-2 flex justify-center'>
              <span className='flex items-center lg:space-x-10 sm:space-x-5 space-x-3 z-50'>
                <motion.a href="https://www.facebook.com/ncumomentum/" target='_blank'>
                  <Facebook size={30} color='#5A100B' className='h-6 lg:h-20'/>
                </motion.a>
                <motion.a href="https://www.instagram.com/ncumomentum/" target='_blank'>
                  <Instagram size={30} color='#5A100B' className='h-6 lg:h-20'/>
                </motion.a>
                <motion.a href="https://www.youtube.com/channel/UCBbpxkdsOHEVokkCMMxDD8A" target='_blank'>
                  <Youtube size={30} color='#5A100B' className='h-6 lg:h-20'/>
                </motion.a>
                <motion.a href="https://www.ncuindia.edu/" target='_blank'>
                  <Globe size={30} color='#5A100B' className='h-6 lg:h-20'/>
                </motion.a>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default FooterMain