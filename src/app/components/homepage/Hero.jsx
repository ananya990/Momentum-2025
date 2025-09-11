import Image from 'next/image'
import React from 'react'


function Hero() {
  return (
    <>
      <div className="h-full w-full bg-[#FCE6CE] flex flex-col ">
        <div className='w-full h-full layer flex items-end'>
          <Image
            src="/hero/Layer7.svg"
            height={100}
            width={100}
            alt=''
            className='w-full object-cover h-[75%] sm:h-[95%] xl:h-auto'
          />
        </div>
        <div className='w-full h-full absolute flex items-end'>
          <Image
            src="/hero/Layer6.svg"
            height={100}
            width={100}
            alt=''
            className='w-full object-cover h-[60%] sm:h-[90%] xl:h-auto'
          />
        </div>
        <div className='w-full h-full absolute flex items-end'>
          <Image
            src="/hero/Layer5.svg"
            height={100}
            width={100}
            alt=''
            className='w-full object-cover h-[50%] sm:h-[70%] xl:h-auto'
          />
        </div>
        <div className='w-full h-full absolute flex items-end'>
          <Image
            src="/hero/Layer4.svg"
            height={100}
            width={100}
            alt=''
            className='w-full object-cover h-[40%] sm:h-[80%] xl:h-auto'
          />
        </div>
        <div className='w-full h-full absolute flex items-end'>
          <Image
            src="/hero/Layer3.svg"
            height={100}
            width={100}
            alt=''
            className='w-full object-cover h-[40%] sm:h-[80%] xl:h-auto'
          />
        </div>
        <div className='w-full h-full absolute flex items-end'>
          <Image
            src="/hero/Layer2.svg"
            height={100}
            width={100}
            alt=''
            className='w-full object-cover h-0 sm:h-[75%] xl:h-auto'
          />
        </div>
        <div className='w-full h-full absolute flex items-end'>
          <Image
            src="/hero/Layer1.svg"
            height={100}
            width={100}
            alt=''
            className='w-full object-cover h-[14%] sm:h-[20%] xl:h-auto'
          />
        </div>
      </div>
    </>
  )
}

export default Hero
