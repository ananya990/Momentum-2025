"use client"
import Hero from "./components/homepage/Hero.jsx"
import About from "./components/homepage/About.jsx"
import Sponsors from "./components/homepage/Sponsors.jsx";
import Faqs from "./components/homepage/Faqs.jsx";
import Footer from "./components/homepage/Footer.jsx";
import FeaturedEvents from "./components/homepage/FeaturedEvents.jsx";
import FooterMain from "./components/homepage/FooterMain.jsx";
import React, { useEffect, useState } from "react";
import EventsMarquee from "./components/homepage/EventsMarquee.jsx";
import { useSession, signIn, signOut } from "next-auth/react"

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
      {/* <Footer/> */}
    </>
  );
}

export function Component() {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn("google")}>Sign in Using Google</button>
  </>
}