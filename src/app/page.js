import Hero from "./components/homepage/Hero.jsx"
import About from "./components/homepage/About.jsx"
import Sponsors from "./components/homepage/Sponsors.jsx";
import Faqs from "./components/homepage/Faqs.jsx";
import Footer from "./components/homepage/Footer.jsx";
import NavBar from "./components/homepage/NavBar.jsx";
import FeaturedEvents from "./components/homepage/FeaturedEvents.jsx";

export default function Home() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <FeaturedEvents/>
      <Sponsors/>
      <Faqs/>
      <Footer/>
    </>
  );
}
