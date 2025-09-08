import { Facebook, Globe, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <>
      <div className='w-screen bg-[#5A100B] min-h-auto '>
        {/* HOARDING & KATPUTLI */}
        <div className='w-full flex h-auto justify-between absolute'>
          <Image
            src="/footer/Katputli2.svg"
            height={100}
            width={100}
            alt=''
            className='w-96 -mt-96 z-30'
          />
          <Image
            src="/footer/HoardingBoard.svg"
            height={100}
            width={100}
            alt=''
            className='w-[650px] -mt-14 z-40'
          />
          <Image
            src="/footer/Katputli1.svg"
            height={100}
            width={100}
            alt=''
            className='w-96 -mt-72 z-50'
          />
        </div>

        {/* WAVES */}
        <div className='flex flex-col -space-y-42 w-full'>
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
            <div className='text-xl absolute w-full py-5 flex justify-center'>
              <span className='flex items-center space-x-5 z-50'>
                <a href="https://www.facebook.com/ncumomentum/" target='_blank'>
                  <Facebook size={30} color='#5A100B'/>
                </a>
                <a href="https://www.instagram.com/ncumomentum/" target='_blank'>
                  <Instagram size={30} color='#5A100B'/>
                </a>
                <a href="https://www.youtube.com/channel/UCBbpxkdsOHEVokkCMMxDD8A" target='_blank'>
                  <Youtube size={30} color='#5A100B'/>
                </a>
                <a href="https://www.ncuindia.edu/" target='_blank'>
                  <Globe size={30} color='#5A100B'/>
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