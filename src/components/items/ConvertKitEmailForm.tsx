"use client";
import axios from "axios";
import React from "react";

import { useState } from "react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState(null);

  //@ts-ignore
  const submit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "/api/waitlist",
      { email },
      {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "POST",
      }
    );

    if (res.status === 200) {
      console.log("YES");
    }

    // if (json_res.message == "success") {
    //   setHasSubmitted(true);
    // }

    setEmail("");
  };

  if (hasSubmitted) {
    return (
      <>
        <div>
          <span>Thanks for signing up! We will be in touch soon.</span>
        </div>
      </>
    );
  }

  return (
    <form className="flex gap-4 flex-col m-5 p-5" onSubmit={submit}>
      <input
        id="newsletter-input"
        type="email"
        name="email"
        className="w-80 h-10 p-3"
        placeholder="Enter your email"
        aria-label="Enter Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoCapitalize="off"
        autoCorrect="off"
      />
      <button
        type="submit"
        className="btn w-80 bg-orange-400 h-10 font-medium"
        id="newsletter-btn"
      >
        Join the Wait List
      </button>
    </form>
  );
};

export default EmailForm;
