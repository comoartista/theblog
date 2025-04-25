"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus("success");
      setEmail("");
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter your email"
        className="border rounded-md px-4 py-3 text-[#667085]  border-[#D0D5DD] focus:outline-none focus:border-[#7757c2] focus:ring-1 focus:ring-[#6941C6] placeholder:text-[#D0D5DD] w-full"
        autoComplete="email"
        autoFocus
        aria-label="Email address"
        aria-required="true"
      />
      <button
        type="submit"
        className="bg-[#6941C6] text-white px-4 py-3 rounded-md">
        Subscribe
      </button>
      {status === "success" && (
        <p className="text-green-600 text-sm">Thanks for subscribing!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
