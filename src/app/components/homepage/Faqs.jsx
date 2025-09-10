import Image from 'next/image'
import React from 'react'
import Faq from "../../components/homepage/Faq.jsx"
import { Accordion } from '@/components/ui/accordion.jsx'

function Faqs() {
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
      <div className='w-full lg:h-full md:py-10 flex items-center justify-center'>
        <div className='flex flex-col items-center space-y-5 md:space-y-10 xl:w-2/4 lg:w-3/4 w-full px-5 z-30'>
          <span className='text-white font-bold text-2xl md:text-3xl lg:text-4xl'>Frequently Asked Questions</span>
          <div className='lg:h-[500px] w-full'>
            <Accordion type="single" collapsible className="w-full lg:space-y-5 space-y-2">
              {
                faqs.map((f, index)=>{
                  return (
                    <React.Fragment key={index}>
                      <Faq faq={f} index={index}/>
                    </React.Fragment>
                  )
                })
              }
            </Accordion>
          </div>
        </div>
        <Image
          src="/faq/FaqBg.svg"
          height={100}
          width={100}
          alt=''
          className='w-full object-cover h-auto absolute scale-90'
        />
      </div>
    </>
  )
}

export default Faqs