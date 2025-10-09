'use client'

import EventsSearchBar from "@/components/EventsSearchBar";
import Image from "next/image";
import Link from "next/link";
// import { getEvents } from "lib/eventList";
// import EventCard from "@/components/newUI/eventCard";
// import PageWrapper from "@/components/PageWrapper";
import React, { useEffect, useRef, useState } from "react";
import events from '@/data/events.json'
import { useRouter } from 'next/navigation'
import FooterMain from "@/components/FooterMain";

export default function Events({ }) {
  const [eventFilter, setEventFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const router= useRouter();

  useEffect(()=>{
    // router.push("/page-not-found");
  },[])
  
  return (
    // border-[#fde6cea4]
    <div className="overscroll-none">
      <div className="absolute w-screen">
        <div className="min-h-screen text-white z-30" >
          <EventsSearchBar eventFilter={eventFilter} setEventFilter={setEventFilter} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
          <div className="">  
            <div className="h-max mt-5 overflow-y-scroll grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 gap-10 px-10">
              {
                events.map((event, index)=>{
                  return (
                    ( 
                      event.categories.includes(eventFilter) || eventFilter=="All"?
                      (
                        event.name.toLowerCase().includes(searchQuery.toLowerCase())?
                        <Link href={`events/${index}`} key={index}>
                          <Image src={event.imgUrl} alt='p1' height={200} width={200} className="event-card "/>
                        </Link>
                        :
                        <React.Fragment key={index}></React.Fragment>
                      )
                      :
                      <React.Fragment key={index}></React.Fragment>
                    )
                  )
                })
              }
            </div>
            <FooterMain/>
          </div>  
        </div>
      </div>
      <img
        src="/event/brick-wall.png"
        alt=""
        className="h-screen min-w-[2000px] overflow-x-hidden fixed -z-10 bg-[#5b100b]"
      />
    </div>
  );
}