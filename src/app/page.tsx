import About from "@/components/page-elements/About";
import Faq from "@/components/page-elements/Faq";
import Footer from "@/components/page-elements/Footer";
import Hero from "@/components/page-elements/Hero";
import Navbar from "@/components/page-elements/Navbar";
import Waitlist from "@/components/page-elements/Waitlist";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Hero />
        {/* <Faq /> */}
        {/* <About /> */}
        <Waitlist />
      </div>

      <Footer />
    </>
  );
}
