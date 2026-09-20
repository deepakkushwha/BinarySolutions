"use client";

import { useState } from "react";
import { SITE } from "@/lib/data";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  if (status === "sent") {
    return (
      <div role="status" className="card mt-6 border-neon-500/40 text-center">
        <p className="text-lg font-semibold text-white">
          Thanks for reaching out! 🎉
        </p>
        <p className="mt-2 text-sm text-slate-400">
          We&apos;ll get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="mt-6 space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("sent");
      }}
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Full name <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-lg border border-white/10 bg-night-800 px-4 py-3 text-white placeholder:text-slate-600 focus:border-neon-400"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Work email <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-lg border border-white/10 bg-night-800 px-4 py-3 text-white placeholder:text-slate-600 focus:border-neon-400"
        />
      </div>
      <div>
        <label
          htmlFor="budget"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Project budget
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full rounded-lg border border-white/10 bg-night-800 px-4 py-3 text-white focus:border-neon-400"
        >
          <option value="">Select a range (optional)</option>
          <option>Under $10,000</option>
          <option>$10,000 – $50,000</option>
          <option>$50,000 – $100,000</option>
          <option>$100,000+</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Project details <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-white/10 bg-night-800 px-4 py-3 text-white placeholder:text-slate-600 focus:border-neon-400"
        />
      </div>
      <button type="submit" className="btn-primary w-full">
        Send Message
      </button>
    </form>
  );
}
