import { FaPhone } from "react-icons/fa";
import ContactForm from "@/components/items/ContactForm";
import Footer from "@/components/page-elements/Footer";
import Header from "@/components/page-elements/Header";
import Navbar from "@/components/page-elements/Navbar";
import React from "react";
import { FOOTER_CONTACT_INFO } from "@/constants";
import { CiMail } from "react-icons/ci";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col max-container padding-container py-10 pb-32 gap-28 lg:py-20">
        <Header />
        <div className="flex justify-center">
          <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row lg:w-11/12">
            <div className="flex-1 flex flex-col gap-4">
              <h1 className="font-heading">Reach Out</h1>
              <p className="w-4/5 font-subheading">
                Have questions or want a demo? Fill out our form. We will
                connect with you to discuss creating capacity for care and
                revenue while reducing your admin tasks.
              </p>
              <div className="flex gap-8">
                <div className="flex gap-2 items-center">
                  <FaPhone className="font-medium" />
                  {FOOTER_CONTACT_INFO.links[0].value}
                </div>
                <div className="flex gap-2 items-center">
                  <CiMail className="font-medium" />
                  <div>{FOOTER_CONTACT_INFO.links[1].value}</div>
                </div>
              </div>
            </div>
            <ContactForm className="flex-1" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
