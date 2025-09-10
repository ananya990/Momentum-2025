import Image from 'next/image'
import React from 'react'

function About() {
  return (
      <>
        <div className="min-h-auto flex items-center justify-center">
            <div className="h-full flex justify-evenly items-center px-4 sm:px-10 lg:px-32 text-white space-x-20 absolute z-20">
                <Image
                    src="/about/NCU-Logo.svg"
                    height={20}
                    width={20}
                    alt=""
                    className="h-40 w-40 hidden md:block"
                />
                <div className="flex flex-col lg:space-y-2">
                    <div className="text-sm lg:text-2xl font-semibold">
                        POWERED BY
                    </div>
                    <div className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold">
                        THE NORTHCAP UNIVERSITY
                    </div>
                    <div className='text-xs md:text-sm text-justify font-light sm:font-medium'>
                        Momentum is a 2-day long festival organized in the month of November. Momentum is the university fest where we provide the student community from various Universities and Colleges with velocity. This year Momentum 2025, the 27th Edition is planned for 7th - 8th November.
                    </div>
                    <div className='absolute self-end justify-start -mt-2'>
                        <Image
                            src="/about/NCU-Logo.svg"
                            height={20}
                            width={20}
                            alt=""
                            className="h-12 w-12 md:hidden"
                        />
                    </div>
                </div>
            </div>
            {/* <div className='h-auto'> */}
                <Image
                    src="/about/Aboutbg.svg"
                    height={20}
                    width={20}
                    alt=""
                    className="lg:h-auto lg:w-screen w-[200%] object-cover h-96"
                />
            {/* </div> */}
        </div>
      </>
  )
}

export default About