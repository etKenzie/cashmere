import React from "react";

const Header = () => {
  return (
    <div className="bg-blue-200 flex flex-col gap-4 lg:gap-8 p-10 lg:p-24 rounded-2xl ">
      <h2 className="font-medium text-sm">Contact</h2>
      <h1 className="font-semibold text-2xl lg:text-5xl ">
        Inspirational words right here
      </h1>
      <p className="text-sm lg:text-base">
        Get to know us and let us know what you think
      </p>
    </div>
  );
};

export default Header;
