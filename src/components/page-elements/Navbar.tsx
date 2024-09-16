"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showNav, setNav] = useState(false);
  const toggleNav = () => setNav(!showNav);

  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-300 transition ">
        <ul className="text-center text-xl p-20 flex flex-col">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="my-4 py-4 border-b border-slate-700 hover:rounded hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
  return (
    <nav className="fixed top-0 left-0 w-full z-50  backdrop-blur-md bg-gradient-to-b">
      <div className="flex justify-between items-center max-container padding-container py-2">
        <Link href="/" className="self-center flex items-center">
          {<Image src="/Logo.svg" alt="logo" width={40} height={20}></Image>}
          <div className="hidden lg:block">
            <b>CASHMERE</b>
            health
          </div>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="font-nav-link flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        {/* <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Try it Out"
          variant="px-5 py-2 border-black text-sm font-semibold transition-all hover:bg-black hover:text-white rounded-full"
          // icon="/message.svg"
        ></Button>
      </div> */}

        <button className="block lg:hidden transition" onClick={toggleNav}>
          {showNav ? <FaTimes /> : <CiMenuFries />}
        </button>

        {showNav && content}
      </div>
    </nav>
  );
};

export default Navbar;
