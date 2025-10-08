import React from 'react'
import eventsData from '../../data/events.json'
import Link from 'next/link'
import Image from 'next/image'
import EventsSearchBar from '../components/eventspage/EventsSearchBar'

function page() {
  return (
    <>
      <div className='flex flex-col pt-20 px-4 bg-red-800 h-full'>
        <div>
          <EventsSearchBar/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {
            eventsData.map((event,index)=>{
              return(
                <Link key={index} href={`/events/${index}`}>
                  {/* <div className='m-4 h-20 border border-gray-300 rounded-lg bg-amber-300'/> */}
                  <Image
                    src='/events/1.webp'
                    alt=''
                    height={100}
                    width={100}
                    className='w-full h-auto object-cover rounded-lg'
                  />
                </Link>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default page