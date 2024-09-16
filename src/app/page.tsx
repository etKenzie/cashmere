import About from "@/components/page-elements/About";
import Faq from "@/components/page-elements/Faq";
import Footer from "@/components/page-elements/Footer";
import Hero from "@/components/page-elements/Hero";
import Navbar from "@/components/page-elements/Navbar";
import Process from "@/components/page-elements/Process";
import Waitlist from "@/components/page-elements/Waitlist";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="">
        <Hero />
        <Process />
        {/* <Faq /> */}
        {/* <About /> */}
        <Waitlist />
      </div>

      {/* <Footer /> */}
    </>
  );
}
