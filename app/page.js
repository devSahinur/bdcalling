import AboutUs from "@/components/AboutUs";
import DusecaInNumbers from "@/components/DusecaInNumbers";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Technologies />
      <DusecaInNumbers />
      <AboutUs />
      <Testimonials />
    </>
  );
}
