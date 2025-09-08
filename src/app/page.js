import Image from "next/image";
import Hero from "./components/homepage/Hero.jsx"
import About from "./components/homepage/About.jsx"
import TopEvents from "./components/homepage/TopEvents.jsx";
import Sponsors from "./components/homepage/Sponsors.jsx";
import Faq from "./components/homepage/Faq.jsx";
import Footer from "./components/homepage/Footer.jsx";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <TopEvents/>
      <Sponsors/>
      <Faq/>
      <Footer/>
    </>
  );
}
