import Footer from "@/components/Footer";
import AboutUs from "@/components/Home/AboutUs";
import DusecaInNumbers from "@/components/Home/DusecaInNumbers";
import Hero from "@/components/Home/Hero";
import Portfolio from "@/components/Home/Portfolio";
import Services from "@/components/Home/Services";
import Technologies from "@/components/Home/Technologies";
import Testimonials from "@/components/Home/Testimonials";
import Navbar from "@/components/Navbar";


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
      <Footer />
    </>
  );
}
