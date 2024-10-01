import React from "react";
import EmailForm from "../items/EmailForm";

const Waitlist = () => {
  return (
    <section className="max-container padding-container  align-middle flex gap-20 py-10 pb-32 md:gap-28 lg:py-20 ">
      <div className="w-screen h-72 flex flex-col justify-center items-center md:flex-row md:justify-between ">
        <div className="flex flex-col gap-3 w-5/6 ">
          <h2 className="font-heading">Join our Waitlist today!</h2>
          <p className="font-subheading">
            Keep updated with our progress and get notified to be potential beta
            testers!
          </p>
        </div>

        <EmailForm className="mt-5" />
      </div>
    </section>
  );
};

export default Waitlist;
