import React from "react";
import EmailForm from "../items/EmailForm";

const Waitlist = () => {
  return (
    <section className="max-container padding-container  align-middle flex gap-20 py-10 pb-32 md:gap-28 lg:py-20 ">
      <div className="w-screen h-72 flex flex-col justify-center items-center md:flex-row md:justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="xl:bold-40 bold-32">Join our Waitlist today!</h2>
          <p className="text-gray-30">
            Keep informed for when we release our product!
          </p>
        </div>

        <EmailForm />
      </div>
    </section>
  );
};

export default Waitlist;
