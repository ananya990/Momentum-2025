import Hero from "./components/homepage/Hero.jsx"
import About from "./components/homepage/About.jsx"
import TopEvents from "./components/homepage/TopEvents.jsx";
import Sponsors from "./components/homepage/Sponsors.jsx";
import Faqs from "./components/homepage/Faqs.jsx";
import Footer from "./components/homepage/Footer.jsx";
import FooterMain from "./components/homepage/FooterMain.jsx";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <TopEvents/>
      <Sponsors/>
      <Faqs/>
      <FooterMain/>
      {/* <Footer/> */}
    </>
  );
}
