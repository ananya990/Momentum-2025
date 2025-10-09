'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import SignInButton from './SignInButton'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'

function NavBar() {
  const pathname = usePathname();
  const router = useRouter();

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
      <div className={`z-50 flex text-white w-full justify-between px-1 lg:px-6 xl:px-10 montserrat-light fixed items-start ${scrolled?"bg-white/40 backdrop-blur-md shadow-lg":""}`}>
        <div className='flex items-center justify-center space-x-4 py-4 z-50'>
            <Image src="/navbar/NCU-Logo.svg" alt='NCU Logo' height={70} width={70} className='h-10 w-14' onClick={()=>{router.push("/")}}/>
            <Image src="/navbar/MMT-Logo.svg" alt='Momentum Logo' height={50} width={50} className='h-10 w-10' onClick={()=>{router.push("/")}}/> 
        </div>
        <div className='flex space-x-4 items-center text-black py-4'>
            <Button variant="ghost" className='md:text-md z-50 hover:underline hover:bg-transparent cursor-pointer' onClick={()=>{router.push("/")}}>Home</Button>
            <Button variant="ghost" className='md:text-md z-50 hover:underline hover:bg-transparent cursor-pointer' onClick={()=>{router.push("/events")}}>Events</Button>
            <SignInButton/>
            {/* <Menu size={25} className='sm:hidden'/> */}
        </div>
        
        {/* <SidebarProvider open={false} className='absolute'>
          <SidebarTrigger />
          <MenuBar/>
        </SidebarProvider> */}
    </div>
    </>
  )
}

export default NavBar
