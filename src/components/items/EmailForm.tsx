"use client";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import { useState } from "react";

interface Props {
  className?: string;
}

const EmailForm = ({ className }: Props) => {
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
    <div className={`flex flex-col gap-2 w-full text-right ${className}`}>
      <form className="flex justify-end" onSubmit={submit}>
        <input
          id="newsletter-input"
          type="email"
          name="email"
          className="email-form-input w-full md:max-w-[450px] h-14 pl-5 text-sm  bg-background"
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
          className="email-form-button w-12 h-14 font-medium text-2xl pl-2"
          id="newsletter-btn"
        >
          <HiArrowNarrowRight />
        </button>
      </form>
      <div>
        {hasSubmitted && <span className="font-semibold">{message}</span>}
      </div>
    </div>
  );
};

export default EmailForm;
