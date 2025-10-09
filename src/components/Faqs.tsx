import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { Accordion } from '@/components/ui/accordion.tsx'
import { useAnimation, useInView, motion } from 'framer-motion';
import Faq from './Faq';

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

function Faqs() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5,margin: "-200px 0px -200px 0px" });

  useEffect(() => {
      if (inView) controls.start("visible");
  }, [controls, inView]);

  const faqs= [
    {
      question: "How Can Students from outside NCU Join?",
      answer: "The students must register for at least one event and carry their valid university identity proof as an absolute requirement."
    },
    {
      question: "How do I confirm my participation in the fest?",
      answer: "To confirm your participation, you will receive a confirmation email."
    },
    {
      question: "How is Momentum being conducted this year ?",
      answer: "Momentum will be conducted at the NCU Campus, with a few events happening online."
    },
    {
      question: "Is the entry free for all? Who can attend ?",
      answer: "To secure your entry to Momentum, you must register for at least one event"
    },
    {
      question: "Who can attend Momentum ?",
      answer: "Momentum is open to all students from any college. You can attend Momentum even if you are not part of any college fest committee. However carrying your College ID card is essential along with your event registration ticket."
    },
    {
      question: "Will there be food stalls in the fest ?",
      answer: "Yes, there will be a variety of food stalls available at the fest."
    },
  ]
  return (
    <>
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className=' w-full h-auto md:py-10 flex items-center justify-center overflow-x-hidden md:mt-32' >

        <div className='flex flex-col items-center space-y-5 md:space-y-10 xl:w-2/4 md:w-3/4 w-full px-5 z-30 '>
          <motion.span className='text-white font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl' variants={itemVariants}>Frequently Asked Questions</motion.span>
          <div className='h-full w-full'>
            <Accordion type="single" collapsible className="w-full lg:space-y-5 space-y-2">
              {
                faqs.map((f, index)=>{
                  return (
                    <motion.div key={index} variants={itemVariants}>
                      <Faq faq={f} index={index}/>
                    </motion.div>
                  )
                })
              }
            </Accordion>
          </div>
        </div>
        <div className='h-auto w-full absolute sm:scale-95'>
          <motion.img
            variants={itemVariants}
            src="/faq/FaqBg.svg"
            alt=''
            className='w-full object-cover'
          />
        </div>
      </motion.div>
    </>
  )
}

export default Faqs