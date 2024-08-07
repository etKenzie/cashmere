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
        <Waitlist />
      </div>

      <Footer />
    </>
  );
}
