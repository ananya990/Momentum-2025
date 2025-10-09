import { useAppContext } from '@/app/context/ContextProvider';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import events from '../data/events.json';
import EventDetails from './EventDetails';
import RegisterButton from './RegisterButton';

function AboutEvent({setProceedToPay, eventId}) {
  const {data:session}= useSession();
  const [drawerOpen, setDrawerOpen]= useState(false);
  const {user}= useAppContext();

  console.log(user);
  

  return (
    <>
      <div className='xl:sticky top-[110px] z-30'>
        <div className='space-y-3'>
          <div className='hidden sm:block'>
            {
              user && user.events.includes(eventId)?
              <a href={events[eventId].waLink} target='_blank' className='w-full'>
                <button 
                  className={`mb-4 px-10 py-1 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
          text-white font-semibold shadow-lg transform transition-all duration-300s
            hover:scale-105 hover:shadow-[0_0_20px_rgba(255,105,180,0.8)] text-2xl
            animate-pulse w-full`}>
                  Join Whatsapp Group
                </button>
              </a>
              :
              <RegisterButton setProceedToPay={setProceedToPay} eventId={eventId} />
            }
          </div>
          <Image src={events[eventId].imgUrl} height={300} width={300} alt='p1' 
            className='mt-8 flex flex-col items-center bg-white rounded-lg shadow-lg p-4 w-[280px] md:w-[300px] flex-shrink-0'/> 
        </div>
      </div>
      <div className='bg-[#5A100B] text-white rounded-lg shadow-lg p-6 w-full md:w-[750px] h-[500px] overflow-y-auto'>
        <EventDetails event={events[eventId]}/>
      </div>
      <div className='sm:hidden w-full z-30'>
        {
          user && user.events.includes(eventId)?
          <a href={events[eventId].waLink} target='_blank' className='w-full'>
            <button className={`mb-4 px-10 py-1 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
          text-white font-semibold shadow-lg transform transition-all duration-300s
            hover:scale-105 hover:shadow-[0_0_20px_rgba(255,105,180,0.8)] text-2xl
            animate-pulse w-full`}></button>
          </a>
          :
          <RegisterButton setProceedToPay={setProceedToPay} eventId={eventId} />
        }
      </div>
    </>
  )
}

export default AboutEvent
