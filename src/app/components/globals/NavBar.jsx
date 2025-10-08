"use client"
import { signIn } from 'next-auth/react';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
        <div className={`z-50 flex text-white w-full justify-between px-1 lg:px-6 xl:px-10 py-3 montserrat-light fixed ${scrolled?"bg-white/40 backdrop-blur-md shadow-lg":""}`}>
          <div className='flex items-center justify-center space-x-4'>
            <Image src="/navbar/NCU-Logo.svg" alt='NCU Logo' height={70} width={70} className='h-10 w-14' />
            <Image src="/navbar/MMT-Logo.svg" alt='Momentum Logo' height={50} width={50} className='h-10 w-10' /> 
          </div>
          <div className='flex items-center justify-center space-x-4 text-black'>
            <span>Home</span>
            <span>Events</span>
            <span onClick={
              async ()=>{
              await signIn("google");
            }}>
              Sign In
            </span>
          </div>
        </div>
    </>
  )
}

export default NavBar