import { useAppContext } from '@/app/context/ContextProvider';
import { useSession } from 'next-auth/react';
import React from 'react'
import events from '../data/events.json'

function RegisterButton({eventId, setProceedToPay}) {
    
  const {data:session}= useSession();
  
  const {user}= useAppContext();
  return (
    <>
        <button 
          className={`
            mb-4 px-10 py-1 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
          text-white font-semibold shadow-lg transform transition-all duration-300s
            hover:scale-105 hover:shadow-[0_0_20px_rgba(255,105,180,0.8)] text-xl
            animate-pulse w-full
          `}
          onClick={()=>{setProceedToPay(true)}}
          disabled={(!session || (user && user.events.includes(eventId)) || (user && !user.userVerified) || (events[eventId].closed && events[eventId].closed))?true:false}>
            {
              user && user.events.includes(eventId)?
              <div className='px-5 py-4 w-full h-full'>
                Registered
              </div>
              :
              (
                  (events[eventId].closed && events[eventId].closed)?
                  <div className='px-5 py-4 w-full h-full'>
                    Closed
                  </div>
                  :
                  <>
                    {
                      session?
                      (user && !user.userVerified? 
                        <a href='/profile' className='w-full h-full'>
                          <div className='px-5 py-4'>
                            Kindly Fill your Details
                          </div>
                        </a>
                        : 
                        <div className='px-5 py-4 w-full h-full'>
                          Register !
                        </div>
                      )
                      :
                      <div className='px-5 py-4 w-full h-full'>
                        Sign In To Register !
                      </div>
                    }
                  </>
              )
            }
        </button>
    </>
  )
}

export default RegisterButton
