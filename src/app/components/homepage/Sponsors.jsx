import Image from 'next/image'
import React from 'react'

function Sponsors() {
  return (
    <>
      <div className='flex flex-col space-y-5 items-center '>
        <div className='text-white font-bold text-4xl'>Our Sponsors</div>
        <Image
          src="/sponsors/Sponsors.svg"
          height={20}
          width={20}
          alt=""
          className="w-full min-h-auto"
        />
      </div>
    </>
  )
}

export default Sponsors