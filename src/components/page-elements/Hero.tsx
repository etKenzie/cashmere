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
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row overflow-visible">
      {/* LEFT */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ">
        <h1 className=" bold-52 lg:bold-64 ">
          Diagnose patients from the comfort of their home
        </h1>
        <p className="regular-16 mt-6 text-gray-30 lg:max-w-[630px]">
          Save time and improve patient experience with our LLM that integrates
          with your workflow and seamlessly generates patient diagnosis.
        </p>
        <div className="flex w-max gap-3 sm:flex-row mt-10">
          <Button
            type="button"
            title="Get Diagnosed"
            variant="btn_black bold-16"
          />
        </div>
      </div>
      <div className="relative flex-1 items-start">
        <div className="hero w-[calc(100%+10rem)] h-full rounded-2xl -ml-8"></div>
      </div>
    </section>
  );
};

export default Hero;
