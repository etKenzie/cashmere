"use client";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import { useState } from "react";

const EmailForm = () => {
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

      if (res.status == 200) {
        setMessage(response.message);
        setHasSubmitted(true);
      }

      setEmail("");
    } catch (e) {}
  };

  return (
    <div className="mt-5 flex flex-col gap-2">
      <form className="flex" onSubmit={submit}>
        <input
          id="newsletter-input"
          type="email"
          name="email"
          className="email-form-input xl:w-96 h-14 pl-5 text-sm  "
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
          className="email-form-button w-12 h-14 font-medium text-2xl "
          id="newsletter-btn"
        >
          <HiArrowNarrowRight />
        </button>
      </form>
      <div>{hasSubmitted && <span className="bold-16">{message}</span>}</div>
    </div>
  );
};

export default EmailForm;
