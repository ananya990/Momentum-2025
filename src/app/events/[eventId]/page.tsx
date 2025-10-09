'use client'
import AboutEvent from '@/components/AboutEvent'
import EventBg from '@/components/EventBg'
import EventFormWrapper from '@/components/EventFormWrapper'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

function Page({params}) {
    const [proceedToPay, setProceedToPay]= useState(false);
    const { data: session } = useSession();
    const router= useRouter();

  useEffect(()=>{
    console.log(params.eventId);
    let eventId= Number(params.eventId);
    console.log(eventId);
    if(eventId<0 || eventId>64 || Number.isNaN(eventId)){
      router.push("/events/"+params.eventId+"/page-not-found");
    }
    // router.push("/events/"+params.eventId+"/page-not-found");
  },[params.eventId])
  
  return (
    <>
      {
        ((params.eventId>=0 && params.eventId<=64)?
          <div className='min-h-screen bg-[url("/eventDescription/Wall_Design_Petals.svg")] sm:bg-transparent'>
            <div className='relative flex flex-col md:flex-row justify-center items-start gap-8 px-6 md:px-16 py-12 z-10 pt-20 overflow-y-scroll md:overflow-y-hidden'>
              {
                !proceedToPay?
                <AboutEvent setProceedToPay={setProceedToPay} eventId={params.eventId}/>
                :
                session && <EventFormWrapper eventId={params.eventId}/>
              }
            </div>
            <EventBg/>
          </div>
          :
          <></>
        )
      }
    </>
  )
}

export default Page
