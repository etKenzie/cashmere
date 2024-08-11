import React from "react";

const About = () => {
  return (
    <div className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 mb-24">
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold">About</h3>
        <h2 className="xl:bold-40 bold-32 lg:w-2/3">
          Get answers. Find inspiration. Be more productive.
        </h2>
        <p className="lg:w-2/3">
          Midjourney is an independent research lab exploring new mediums of
          thought and expanding the imaginative powers of the human species. We
          are a small self-funded team focused on design, human infrastructure,
          and AI. We have 11 full-time staff and an incredible set of advisor
        </p>
      </div>
      <div className="border bg-gray-20 " />
      <div className="bold-32 lg:bold-52">
        These are random words and maybe we will put an inspirational text
        somewhere here in between just maybe
      </div>
      <div className="border bg-gray-20 " />
    </div>
  );
};

export default About;
