import { Facebook, Globe, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <>
      <div className='w-screen mt-20 '>
        {/* HOARDING & KATPUTLI */}
        <div className='w-full flex h-auto md:justify-between justify-center absolute'>
          <Image
            src="/footer/Katputli2.svg"
            height={100}
            width={100}
            alt=''
            className='md:w-96 md:-mt-96 -mt-44 z-30 hidden'
          />
          <Image
            src="/footer/HoardingBoard.svg"
            height={100}
            width={100}
            alt=''
            className='md:w-[650px] w-[350px] z-40 -mt-36 bg-yellow-200'
          />
          {/* <Image
            src="/footer/Katputli1.svg"
            height={100}
            width={100}
            alt=''
            className='w-96 -mt-72 z-50 hidden'
          /> */}
        </div>

        {/* WAVES */}
        <div className='flex flex-col md:-space-y-42 -space-y-10 w-full'>
          <div className='w-full flex items-end '>
            <Image
              src="/footer/Wave4.svg"
              height={100}
              width={100}
              alt=''
              className='w-full z-30'
            />
          </div>
          <div className='w-full flex items-end '>
            <Image
              src="/footer/Wave3.svg"
              height={100}
              width={100}
              alt=''
              className='w-full z-30'
            />
          </div>
          <div className='w-full flex items-end '>
            <Image
              src="/footer/Wave2.svg"
              height={100}
              width={100}
              alt=''
              className='w-full z-30'
            />
          </div>
          <div className='w-full flex items-end z-50'>
            <Image
              src="/footer/Wave1.svg"
              height={100}
              width={100}
              alt=''
              className='w-full z-30'
            />
            {/* SOCIALS */}
            <div className='text-xl absolute w-full md:py-5 py-2 flex justify-center'>
              <span className='flex items-center md:space-x-5 space-x-3 z-50'>
                <a href="https://www.facebook.com/ncumomentum/" target='_blank'>
                  <Facebook size={30} color='#5A100B' className='h-6'/>
                </a>
                <a href="https://www.instagram.com/ncumomentum/" target='_blank'>
                  <Instagram size={30} color='#5A100B' className='h-6'/>
                </a>
                <a href="https://www.youtube.com/channel/UCBbpxkdsOHEVokkCMMxDD8A" target='_blank'>
                  <Youtube size={30} color='#5A100B' className='h-6'/>
                </a>
                <a href="https://www.ncuindia.edu/" target='_blank'>
                  <Globe size={30} color='#5A100B' className='h-6'/>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer