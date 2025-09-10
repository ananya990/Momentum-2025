import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <>
        <div className='z-50 flex text-white w-full justify-start px-1 lg:px-6 xl:px-10 py-4 montserrat-light fixed'>
            <div className='flex items-center justify-center space-x-4'>
                <Image src="/navbar/NCU-Logo.svg" alt='NCU Logo' height={70} width={70} className='h-10 w-14' />
                <Image src="/navbar/MMT-Logo.svg" alt='Momentum Logo' height={50} width={50} className='h-10 w-10' /> 
            </div>
        </div>
    </>
  )
}

export default NavBar