import About from "@/components/page-elements/About";
import Footer from "@/components/page-elements/Footer";
import Navbar from "@/components/page-elements/Navbar";
import React from "react";

export default function Page() {
  return (
    <>
      <Navbar />
      <div>
        <About />
      </div>
      <Footer />
    </>
  );
}
