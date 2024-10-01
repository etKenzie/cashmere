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
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "POST",
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitStatus("success");
        // Clear the form
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.log(err);
      setSubmitStatus("error");
    }
  };

  return (
    <form className={`flex flex-col gap-8 ${className}`} onSubmit={onSubmit}>
      <div>
        <div className="label font-semibold mb-2">
          <span className="font-section-title">Full Name*</span>
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

      {submitStatus === "success" && (
        <p className="font-semibold mt-2">Message sent successfully!</p>
      )}
      {submitStatus === "error" && (
        <p className="text-red-600 mt-2">
          Failed to send message. Please try again.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
