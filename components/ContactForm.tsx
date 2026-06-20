"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { divisions } from "@/lib/data";

const inquiryTypes = [
  "Commodity Purchase Inquiry",
  "Supplier / Producer Partnership",
  "Logistics & Supply Chain",
  "General Inquiry",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center border border-line bg-sand-50 px-8 py-20 text-center">
        <CheckCircle2 className="h-12 w-12 text-sand-500" strokeWidth={1.4} />
        <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
          Thank you — your inquiry has been received.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal-light">
          Our trading team will review your request and respond within one
          business day. For urgent matters, contact our trading desk directly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 link-underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full border border-line bg-white px-4 py-3.5 text-sm text-ink outline-none transition-colors duration-300 placeholder:text-charcoal-muted/70 focus:border-ink";
  const labelCls =
    "mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-charcoal-muted";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">
            Full Name *
          </label>
          <input id="name" required className={inputCls} placeholder="Your name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="company">
            Company
          </label>
          <input id="company" className={inputCls} placeholder="Company name" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            className={inputCls}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="country">
            Country
          </label>
          <input id="country" className={inputCls} placeholder="Country" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="type">
            Inquiry Type *
          </label>
          <select id="type" required className={inputCls} defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="commodity">
            Commodity of Interest
          </label>
          <select id="commodity" className={inputCls} defaultValue="">
            <option value="">Select a division</option>
            {divisions.map((d) => (
              <option key={d.slug} value={d.title}>
                {d.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="quantity">
            Estimated Quantity / Volume
          </label>
          <input
            id="quantity"
            className={inputCls}
            placeholder="e.g. 25,000 MT"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="incoterm">
            Preferred Incoterm
          </label>
          <input id="incoterm" className={inputCls} placeholder="e.g. CIF / FOB" />
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="message">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className={`${inputCls} resize-none`}
          placeholder="Tell us about your requirement, destination port and timeline…"
        />
      </div>

      <button type="submit" className="btn-primary group w-full sm:w-auto">
        Submit Inquiry
        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>
      <p className="text-xs text-charcoal-muted">
        By submitting, you agree to be contacted by the NTA Group trading team
        regarding your inquiry.
      </p>
    </form>
  );
}
