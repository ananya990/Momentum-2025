"use client"
import Image from 'next/image'
import React from 'react'
import { MenuBar } from '../homepage/MenuBar.jsx'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Menu } from 'lucide-react'
import SignInButton from '../homepage/SignInButton.jsx'

function NavBar() {
  
  return (
    <>
        <div className='z-50 flex text-white w-full justify-between px-1 lg:px-6 xl:px-10 montserrat-light fixed items-start'>
            <div className='flex items-center justify-center space-x-4 py-4'>
                <Image src="/navbar/NCU-Logo.svg" alt='NCU Logo' height={70} width={70} className='h-10 w-14' />
                <Image src="/navbar/MMT-Logo.svg" alt='Momentum Logo' height={50} width={50} className='h-10 w-10' /> 
            </div>
            <div className='flex space-x-4 items-center text-black py-4'>
                <span className='hidden sm:block'>Home</span>
                <span className='hidden sm:block' >Events</span>
                {/* <span className='hidden sm:block'>Sign in</span> */}
                <SignInButton/>
                <Menu size={25} className='sm:hidden'/>
            </div>
            
            <SidebarProvider open={false} className='absolute'>
              <SidebarTrigger />
              <MenuBar/>
            </SidebarProvider>
        </div>
    </>
  )
}

export default NavBar