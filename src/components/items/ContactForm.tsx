"use client";

import { headers } from "next/headers";
import React, { FormEvent, useState } from "react";

interface Props {
  className?: string;
}

const ContactForm = ({ className }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "POST",
        body: JSON.stringify({ name, email, message }),
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className={`flex flex-col gap-8 ${className}`} onSubmit={onSubmit}>
      <div>
        <div className="label font-semibold mb-2">
          <span className="font-section-title">Full Name*</span>
          {/* <span className="label-text-alt">Top Right label</span> */}
        </div>
        <input
          className="input w-full input-bordered text-input-padding"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <div className="label font-semibold mb-2">
          <span className="font-section-title">Email*</span>
          {/* <span className="label-text-alt">Top Right label</span> */}
        </div>
        <input
          className="input w-full input-bordered text-input-padding"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <div className="label font-semibold mb-2">
          <span className="font-section-title">Message*</span>
          {/* <span className="label-text-alt">Top Right label</span> */}
        </div>
        <textarea
          className="textarea w-full textarea-bordered text-input-padding"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <button
        className="btn btn-neutral border-2 border-black p-3 rounded-lg hover:bg-black hover:text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
