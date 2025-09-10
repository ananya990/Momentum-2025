import { Facebook, Globe, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function FooterMain() {
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
            className='xl:w-96 md:w-64  z-30 hidden md:block'
          />
          <Image
            src="/footer/Katputli1.svg"
            height={100}
            width={100}
            alt=''
            className='xl:w-96 md:w-64 z-50 hidden md:block'
          />
        </div>

        {/* WAVES */}
        <div className='flex flex-col sm:-space-y-10 xl:-space-y-20 w-full overflow-hidden h-auto'>
            <Image
                src="/footer/Waves.svg"
                height={100}
                width={100}
                alt=''
                className='min-w-full z-40 scale-150 sm:scale-100'
            />
          {/* SOCIALS */}
          <div className='w-full flex items-end z-50 mt-10'>
            <div className='text-xl absolute w-full md:py-5 py-2 flex justify-center'>
              <span className='flex items-center lg:space-x-10 sm:space-x-5 space-x-3 z-50'>
                <a href="https://www.facebook.com/ncumomentum/" target='_blank'>
                  <Facebook size={30} color='#5A100B' className='h-6 lg:h-20'/>
                </a>
                <a href="https://www.instagram.com/ncumomentum/" target='_blank'>
                  <Instagram size={30} color='#5A100B' className='h-6 lg:h-20'/>
                </a>
                <a href="https://www.youtube.com/channel/UCBbpxkdsOHEVokkCMMxDD8A" target='_blank'>
                  <Youtube size={30} color='#5A100B' className='h-6 lg:h-20'/>
                </a>
                <a href="https://www.ncuindia.edu/" target='_blank'>
                  <Globe size={30} color='#5A100B' className='h-6 lg:h-20'/>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterMain