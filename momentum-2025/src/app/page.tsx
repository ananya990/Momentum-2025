"use client"
import About from "@/components/About";
import EventsMarquee from "@/components/EventsMarquee";
import Faqs from "@/components/Faqs";
import FeaturedEvents from "@/components/FeaturedEvents";
import FooterMain from "@/components/FooterMain";
import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import { useEffect, useState } from "react";

export default function Home() {
  const [offset, setOffset] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setOffset(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <>
      <Hero/>
      <div 
        style={{ transform: `translateY(-${offset * 0.5}px)` }}
        className="bg-[#5A100B] z-20"
      >
        <EventsMarquee/>
        <About/>
        <FeaturedEvents/>
        <Sponsors/>
        <Faqs/>
        <FooterMain/>
      </div>
      {/* <PaymentButton eventId={1}/> */}
    </>
  );
}
