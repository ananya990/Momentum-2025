import Image from 'next/image'
import React from 'react'

function Sponsors() {
  return (
    <>
      <div className='flex flex-col bg-yellow-200 space-y-5 items-center justify-center sponsor-bg h-auto overflow-hidden lg:mt-20'>
        <div className='text-white lg:font-bold text-2xl md:text-3xl lg:text-4xl font-semibold'>Past Sponsors</div>
        <Image
          src="/sponsors/Sponsors.svg"
          height={20}
          width={20}
          alt=""
          className="w-full min-h-auto scale-110 pb-10"
        />
      </div>
    </>
  )
}

export default Sponsors