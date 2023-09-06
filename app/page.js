import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
    </>
  );
}
