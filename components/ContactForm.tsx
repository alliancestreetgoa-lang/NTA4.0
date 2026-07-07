"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { divisions } from "@/lib/data";

const inquiryTypes = [
  "Commodity Purchase Inquiry",
  "Supplier / Producer Partnership",
  "Logistics & Supply Chain",
  "General Inquiry",
];

type Errors = Record<string, string>;

// Required fields and their human messages. Validation is presentational —
// it gates the existing submit, it does not change what submit does.
function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = (data.get("name") as string)?.trim();
  const email = (data.get("email") as string)?.trim();
  const type = data.get("type") as string;
  const message = (data.get("message") as string)?.trim();

  if (!name) errors.name = "Please enter your name.";
  if (!email) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Enter a valid email, e.g. you@company.com.";
  if (!type) errors.type = "Please choose an inquiry type.";
  if (!message) errors.message = "Please tell us about your requirement.";
  return errors;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(new FormData(form));
    setErrors(found);

    if (Object.keys(found).length > 0) {
      // Move focus to the first field with an error for keyboard/SR users.
      const first = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setSubmitting(true);
    // No backend wired; reflect the same "received" outcome as before.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center justify-center border border-line bg-sand-50 px-8 py-20 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-accent-deep" strokeWidth={1.4} />
        <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
          Thank you — your inquiry has been received.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal-light">
          Our trading team will review your request and respond within one
          business day. For urgent matters, contact our trading desk directly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setSubmitting(false);
            setErrors({});
          }}
          className="mt-8 link-underline"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full border border-line bg-white px-4 py-3.5 text-sm text-ink transition-colors duration-300 placeholder:text-charcoal-muted/70 focus:border-ink aria-[invalid=true]:border-red-500";
  const labelCls =
    "mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-charcoal";

  const errorCount = Object.keys(errors).length;

  // Small helper for the inline error line + a11y wiring on each field.
  const fieldError = (id: string) =>
    errors[id] ? (
      <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
        {errors[id]}
      </p>
    ) : null;

  const aria = (id: string) => ({
    "aria-invalid": errors[id] ? true : undefined,
    "aria-describedby": errors[id] ? `${id}-error` : undefined,
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Assertive summary so screen readers announce that submit failed */}
      <p aria-live="assertive" className="sr-only">
        {errorCount > 0
          ? `Form has ${errorCount} error${errorCount > 1 ? "s" : ""}. Please review the highlighted fields.`
          : ""}
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">
            Full Name *
          </label>
          <input id="name" name="name" required className={inputCls} placeholder="Your name" {...aria("name")} />
          {fieldError("name")}
        </div>
        <div>
          <label className={labelCls} htmlFor="company">
            Company
          </label>
          <input id="company" name="company" className={inputCls} placeholder="Company name" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputCls}
            placeholder="you@company.com"
            {...aria("email")}
          />
          {fieldError("email")}
        </div>
        <div>
          <label className={labelCls} htmlFor="country">
            Country
          </label>
          <input id="country" name="country" className={inputCls} placeholder="Country" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="type">
            Inquiry Type *
          </label>
          <select id="type" name="type" required className={inputCls} defaultValue="" {...aria("type")}>
            <option value="" disabled>
              Select an option
            </option>
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {fieldError("type")}
        </div>
        <div>
          <label className={labelCls} htmlFor="commodity">
            Commodity of Interest
          </label>
          <select id="commodity" name="commodity" className={inputCls} defaultValue="">
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
            name="quantity"
            className={inputCls}
            placeholder="e.g. 25,000 MT"
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="incoterm">
            Preferred Incoterm
          </label>
          <input id="incoterm" name="incoterm" className={inputCls} placeholder="e.g. CIF / FOB" />
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="message">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputCls} resize-none`}
          placeholder="Tell us about your requirement, destination port and timeline…"
          {...aria("message")}
        />
        {fieldError("message")}
      </div>

      <button type="submit" disabled={submitting} className="btn-primary group w-full disabled:opacity-70 sm:w-auto">
        {submitting ? "Sending…" : "Submit Inquiry"}
        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>
      <p className="text-xs text-charcoal-muted">
        By submitting, you agree to be contacted by the NTA Group trading team
        regarding your inquiry.
      </p>
    </form>
  );
}
