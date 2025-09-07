import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
<>
    <div className="h-full w-full bg-red-400 flex flex-col items-end ">
        {/* <Image src="/hero/Layer7.svg" 
        alt=""
          height={700}
          width={700}
          className="min-w-screen absolute"
        /> */}
        <Image src="/hero/Layer6.svg" 
        alt=""
          height={700}
          width={700}
          className="min-w-screen absolute align-end"
        />
        <Image src="/hero/Layer5.svg" 
        alt=""
          height={700}
          width={700}
          className="min-w-screen absolute"
        />
        <Image src="/hero/Layer4.svg" 
        alt=""
          height={700}
          width={700}
          className="min-w-screen absolute"
        />
        <Image src="/hero/Layer3.svg" 
        alt=""
          height={700}
          width={700}
          className="min-w-screen absolute"
        />
        <Image src="/hero/Layer2.svg" 
        alt=""
          height={700}
          width={700}
          className="min-w-screen absolute"
        />
        <Image src="/hero/Layer1.svg" 
        alt=""
          height={700}
          width={700}
          className="w-full absolute"
        />
    </div>
</>
  )
}

export default Hero
