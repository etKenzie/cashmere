import React from "react";
import Button from "../items/Button";

const Hero = () => {
  return (
    // <div className="home-page">
    //   <h1 className="head_text text-center">
    //     Patient Diagnosis LLM
    //     <br className="max-mx:hidden" />
    //     <span className="orange_gradient text-center">AI-Powered Reports</span>
    //   </h1>
    //   <p className="desc text-center">
    //     Easily diagnose your patient from the comfort of their home. Save time
    //     and effort with our LLM to create patient diagnosis
    //   </p>
    // </div>
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* <div className="hero-map" /> */}

      {/* LEFT */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">Patient Diagnosis LLM</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Easily diagnose your patient from the comfort of their home. Save time
          and effort with our LLM to create patient diagnosis
        </p>
        <div className="flex w-full gap-3 sm:flex-row mt-10">
          <Button type="button" title="Get Diagnosed" variant="btn_green" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
