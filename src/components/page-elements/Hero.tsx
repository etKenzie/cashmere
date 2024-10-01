"use client";
import React from "react";
import Button from "../items/Button";
import Image from "next/image";

const Hero = () => {
  const handleClick = () => {
    window.open("https://cashmerehealth.chat/");
  };
  return (
    <section className="bg-blue-bg pt-8">
      <div className="max-container padding-container flex flex-col gap-14 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row overflow-visible">
        {/* LEFT */}
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ">
          <h1 className=" font-heading ">Transform Patient Diagnosis Today</h1>
          <p className=" mt-6 lg:max-w-[630px] font-subheading ">
            Save time and improve patient experience. Utilize cutting-edge
            technology to streamline patient assessments and provide precise
            health insights remotely.
          </p>
          <div className="flex w-max gap-4 sm:flex-row mt-10">
            <Button
              type="button"
              title="Get Diagnosed"
              variant="btn_navy"
              onClick={handleClick}
            />
            <div className="font-warning justify-center self-center w-24">
              Do not use during Emergencies
            </div>
          </div>
          <div className="flex w-max gap-3 mt-3">
            <div className="flex gap-1 ">
              {<Image src="/check.svg" alt="check" width={18} height={18} />}
              <div className="font-small">Intuitive Interface</div>
            </div>
            <div className="flex gap-1">
              {<Image src="/check.svg" alt="check" width={18} height={18} />}
              <div className="font-small">Rapid Feedback</div>
            </div>
            <div className="flex gap-1">
              {<Image src="/check.svg" alt="check" width={18} height={18} />}
              <div className="font-small">Available 24/7</div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 items-start ">
          <Image
            src="/Hero.png"
            alt="hero"
            width={700}
            height={700}
            className="lg:max-w-none lg:max-h-none object-cover "
          />
          <Image
            src="/chat_bubble.png"
            alt="hero"
            width={200}
            height={200}
            className="hidden lg:block absolute top-28 right-0 -rotate-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
