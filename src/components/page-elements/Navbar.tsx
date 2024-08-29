"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "../items/Button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
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
    <nav className="flexBetween max-container padding-container z-50 py-4 sticky top-0  backdrop-blur-md bg-gradient-to-b from-white/70 to-transparent">
      <Link href="/">
        {/* {<Image src="/" alt="logo" width={74} height={29}></Image>} */}
        <b>CASHMERE</b>
        health
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-14 text-gray-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      {/* <SignedOut>
        <div className="lg:flexCenter hidden">
          <SignInButton>
            <Button
              type="button"
              title="Sign In"
              variant="btn_dark_green"
              icon="/user.svg"
            ></Button>
          </SignInButton>
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn> */}
      {/* <div className="lg:flexCenter hidden">
        <SigninButton className="btn_dark_green" icon="/user.svg">
          Login
        </SigninButton>
      </div> */}

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Diagnosis"
          variant="px-5 py-2 border-black text-sm font-semibold transition-all hover:bg-black hover:text-white"
          // icon="/message.svg"
        ></Button>
      </div>

      <button className="block sm:hidden transition" onClick={toggleNav}>
        {showNav ? <FaTimes /> : <CiMenuFries />}
      </button>

      {showNav && content}
    </nav>
  );
};

export default Navbar;
