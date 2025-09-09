import Image from 'next/image'
import React from 'react'

function About() {
  return (
      <>
        <div className="min-h-auto bg-[#5A100B] flex items-center justify-center">
            <div className="h-full flex justify-evenly items-center px-32 text-white space-x-20 absolute">
                    <Image
                        src="/about/NCU-Logo.svg"
                        height={20}
                        width={20}
                        alt=""
                        className="h-40 w-40"
                    />
                    <div className="flex flex-col space-y-3">
                        <div className="text-2xl font-semibold">
                            POWERED BY
                        </div>
                        <div className="text-3xl font-bold">
                            THE NORTHCAP UNIVERSITY
                        </div>
                        <div>
                            Momentum is a 2-day long festival organized in the month of November. Momentum is the university fest where we provide the student community from various Universities and Colleges with velocity. This year Momentum 2025, the 27th Edition is planned for 7th - 8th November.
                        </div>

                    </div>
                </div>
            <Image
                src="/about/Aboutbg.svg"
                height={20}
                width={20}
                alt=""
                className="min-h-auto w-screen"
            />
        </div>
      </>
  )
}

export default About