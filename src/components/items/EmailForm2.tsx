"use client";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import { useState } from "react";

interface Props {
  className?: string;
}

const EmailForm2 = ({ className }: Props) => {
  const [email, setEmail] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  //@ts-ignore
  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/waitlist", {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "POST",
        body: JSON.stringify({ email }),
      });

      const response = await res.json();

      setMessage(response.message);
      setHasSubmitted(true);

      // if (res.status == 200) {
      //   setMessage(response.message);
      //   setHasSubmitted(true);
      // }else {
      //   setMessage()
      // }

      setEmail("");
    } catch (e) {}
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <form className="flex flex-col lg:flex-row gap-4" onSubmit={submit}>
        <input
          id="newsletter-input"
          type="email"
          name="email"
          className="xl:w-96 h-14 pl-5 text-sm rounded-lg border-2 border-black"
          placeholder="Subscribe your email"
          aria-label="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoCapitalize="off"
          autoCorrect="off"
        />
        <button
          type="submit"
          className="h-14 font-medium text-sm px-4 bg-slate-900 text-white rounded-lg"
          id="newsletter-btn"
        >
          Join the Waitlist
        </button>
      </form>
      <div>{hasSubmitted && <span className="bold-16">{message}</span>}</div>
    </div>
  );
};

export default EmailForm2;
