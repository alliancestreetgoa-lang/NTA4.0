import type { Metadata } from "next";
import { Building2, Mail, Phone, Clock } from "lucide-react";
import { PageHero21 } from "@/components/blocks/page-hero";
import { ContactForm } from "@/components/ContactForm";
import { LedgerAccordion } from "@/components/blocks/ledger-accordion";
import { CTASection } from "@/components/blocks/cta-section";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the NTA Group trading desk. UAE headquarters, commodity inquiry form and trading desk contact for fertilizer, energy and agri-commodity trade.",
};

const contactRows = [
  {
    icon: Building2,
    label: "Headquarters",
    value: (
      <>
        {site.address.line1}
        <br />
        {site.address.line2}
        <br />
        {site.address.city}, {site.address.country}
      </>
    ),
  },
  {
    icon: Mail,
    label: "Trading Desk",
    value: (
      <a
        href={`mailto:${site.email}`}
        className="transition-colors hover:text-accent-deep"
      >
        {site.email}
      </a>
    ),
  },
  {
    icon: Phone,
    label: "Phone",
    value: (
      <a
        href={`tel:${site.phone.replace(/\s/g, "")}`}
        className="transition-colors hover:text-accent-deep"
      >
        {site.phone}
      </a>
    ),
  },
  {
    icon: Clock,
    label: "Trading Hours",
    value: "Sunday – Friday · 24/7 desk coverage",
  },
];

const faq = [
  {
    id: "moq",
    label: "What is your minimum order quantity?",
    content:
      "MOQ varies by commodity and grade — from full-container loads to bulk vessel parcels. Share your requirement and the desk will confirm what's workable.",
  },
  {
    id: "incoterms",
    label: "Which Incoterms do you trade on?",
    content:
      "We work across FOB, CFR and CIF, structured around your discharge port and logistics needs.",
  },
  {
    id: "response",
    label: "How quickly will I hear back?",
    content:
      "The trading desk responds to inquiries within one business day, with 24/7 coverage while a deal is live.",
  },
  {
    id: "kyc",
    label: "Do you require KYC and documentation?",
    content:
      "Yes — standard KYC and trade documentation apply to every counterparty, in line with international compliance practice.",
  },
  {
    id: "coverage",
    label: "Which markets do you cover?",
    content:
      "40+ destination markets across the GCC, Africa, India, Southeast Asia and Europe, run from our Dubai hub.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero21
        eyebrow="Contact"
        title={
          <>
            Speak with our <span className="text-accent-deep">trading desk</span>.
          </>
        }
        subtitle="Whether you're sourcing commodities or seeking a supply partnership, our team responds within one business day."
      />

      {/* Reach the desk — methods grid */}
      <section className="container-px py-16 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactRows.map((row, i) => (
            // Reveal owns the entry transform; the inner card owns the hover
            // transform, so framer's inline transform never fights the CSS one.
            <Reveal key={row.label} delay={i} className="h-full">
              <div className="group h-full rounded-xl border border-ink/10 bg-sand-50 p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-white motion-safe:transition-all motion-safe:duration-300 motion-safe:hover:-translate-y-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent-deep transition-colors duration-300 group-hover:bg-accent/20 motion-safe:transition-all motion-safe:duration-300 motion-safe:group-hover:scale-105">
                  <row.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="mt-5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-sand-500">
                  {row.label}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-ink">
                  {row.value}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Inquiry form — trading-desk panel */}
      <section className="container-px pb-20 md:pb-24">
        <Reveal className="rounded-xl border border-ink/10 bg-sand-50 p-6 md:p-10">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Commodity inquiry form
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-sand-500">
            Share your requirement and our trading team will respond with
            availability, pricing and terms.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </Reveal>
      </section>

      {/* Desk FAQ */}
      <section className="border-t border-ink/10 bg-white">
        <div className="container-px py-24 md:py-32">
          <Reveal as="span" className="eyebrow block">
            Desk FAQ
          </Reveal>
          <h2 className="mt-5 max-w-2xl text-display-md font-display font-semibold text-balance text-ink">
            Answers before you ask.
          </h2>
          <Reveal delay={1} className="mt-12 max-w-3xl">
            <LedgerAccordion items={faq} defaultValue="moq" />
          </Reveal>
        </div>
      </section>

      <CTASection
        badge={{ text: "Let's trade" }}
        title="Explore what we trade."
        action={{ text: "View commodities", href: "/commodities" }}
      />
    </>
  );
}
