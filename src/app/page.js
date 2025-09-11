"use client"
import Hero from "./components/homepage/Hero.jsx"
import About from "./components/homepage/About.jsx"
import Sponsors from "./components/homepage/Sponsors.jsx";
import Faqs from "./components/homepage/Faqs.jsx";
import Footer from "./components/homepage/Footer.jsx";
import FeaturedEvents from "./components/homepage/FeaturedEvents.jsx";
import FooterMain from "./components/homepage/FooterMain.jsx";
import React, { useEffect, useState } from "react";

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
        style={{ transform: `translateY(-${offset * 0.55}px)` }}
        className="bg-[#5A100B]"
      >
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
