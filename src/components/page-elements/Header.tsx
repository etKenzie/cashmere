import React from "react";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-blue-light to-blue-bg flex flex-col gap-4 lg:gap-8 p-10 lg:p-24 rounded-2xl ">
      <h2 className="font-section-title">Contact</h2>
      <h1 className="font-heading text-2xl lg:text-5xl ">
        Have a Question? Let us know!
      </h1>
      <p className="font-subheading">
        Get to know us and let us know what you think
      </p>
    </div>
  );
};

export default Header;
