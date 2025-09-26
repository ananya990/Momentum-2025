"use client";
import React, { useState, useEffect } from "react";
import eventsData from "../../../data/events.json"; 
import PosterBox from "../../components/eventdescriptionpage/PosterBox";
import EventDetails from "../../components/eventdescriptionpage/EventDetails";
import Image from "next/image";

function Page() {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Load the first event (you can later switch dynamically)
    setEvent(eventsData[0]);
  }, []);

  if (!event) return null;

  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden">
        <Image
          src="/eventDescription/Wall_Design.svg"
          alt="Wallpaper"
          height={100}
          width={100}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        <Image
          src="/eventDescription/Petals.svg" // Replace with actual path
          alt="Falling Petals"
          height={100}
          width={100}
          className="absolute top-0 left-0 w-full h-full object-cover z-5 pointer-events-none"
        />

        <Image
          src="/eventDescription/Floor_Elements.svg"
          alt="Floor"
          height={100}
          width={100}
          className="absolute bottom-0 left-0 w-full object-contain z-20"
        />

        <div className="relative flex flex-col md:flex-row justify-center items-start md:items-center gap-8 px-6 md:px-16 py-12 z-10">
          <PosterBox poster={event.poster} title={event.title} />
          <EventDetails event={event} />
        </div>
      </div>
    </>
  );
}

export default Page;
