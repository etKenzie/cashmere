import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "../items/Button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
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
            className="regular-16 text-gray-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <SignedOut>
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
      </SignedIn>
      {/* <div className="lg:flexCenter hidden">
        <SigninButton className="btn_dark_green" icon="/user.svg">
          Login
        </SigninButton>
      </div> */}

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
