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
            className='w-full'
          />
        </div>
        <div className='w-full h-full absolute flex items-end'>
          <Image
            src="/hero/Layer6.svg"
            height={100}
            width={100}
            alt=''
            className='w-full'
          />
        </div>
        <div className='w-full h-full absolute flex items-end'>
          <Image
            src="/hero/Layer5.svg"
            height={100}
            width={100}
            alt=''
            className='w-full'
          />
        </div>
        <div className='w-full h-full absolute flex items-end'>
          <Image
            src="/hero/Layer4.svg"
            height={100}
            width={100}
            alt=''
            className='w-full'
          />
        </div>
        <div className='w-full h-full absolute flex items-end'>
          <Image
            src="/hero/Layer3.svg"
            height={100}
            width={100}
            alt=''
            className='w-full'
          />
        </div>
        <div className='w-full h-full absolute flex items-end'>
          <Image
            src="/hero/Layer2.svg"
            height={100}
            width={100}
            alt=''
            className='w-full'
          />
        </div>
        <div className='w-full h-full absolute flex items-end'>
          <Image
            src="/hero/Layer1.svg"
            height={100}
            width={100}
            alt=''
            className='w-full'
          />
        </div>
      </div>
    </>
  )
}

export default Hero
