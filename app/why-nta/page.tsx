import type { Metadata } from "next";
import {
  Globe2,
  ShieldCheck,
  BadgeCheck,
  Brain,
  Handshake,
  Leaf,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { PageHero21 } from "@/components/blocks/page-hero";
import { FeatureBento } from "@/components/blocks/feature-bento";
import { CTASection } from "@/components/blocks/cta-section";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { whyNta } from "@/lib/data";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "Why NTA Group",
  description:
    "Global network, trusted supply chain, quality assurance, market expertise, strategic partnerships and sustainable growth — the reasons partners choose NTA Group.",
};

const icons: LucideIcon[] = [
  Globe2,
  ShieldCheck,
  BadgeCheck,
  Brain,
  Handshake,
  Leaf,
];

// One subject-matched image per whyNta card (vendored locally).
const whyImages = [
  "/world-trade-map.png", // Global Network — world trade map
  "/images/vendor/container-port.jpg", // Trusted Supply Chain — container port
  "/images/vendor/lab-quality.jpg", // Quality Assurance — lab QC testing
  "/images/vendor/market-data.jpg", // Market Expertise — market data screens
  "/images/vendor/handshake.jpg", // Strategic Partnerships — handshake
  "/fertilizers/flagship-plant.png", // Sustainable Growth — seedling in soil
];

const steps = [
  {
    number: "01",
    title: "Source",
    desc: "We identify reliable origins and vetted producers across global markets.",
  },
  {
    number: "02",
    title: "Contract",
    desc: "We negotiate terms, structure trade finance and secure the deal.",
  },
  {
    number: "03",
    title: "Ship",
    desc: "We coordinate freight, inspection and documentation end to end.",
  },
  {
    number: "04",
    title: "Deliver",
    desc: "We complete on-time, quality-assured delivery to your market.",
  },
];

export default function WhyNtaPage() {
  return (
    <>
      <PageHero21
        eyebrow="Why NTA Group"
        title={
          <>
            The <span className="text-accent-deep">trusted choice</span> for global
            commodity trade.
          </>
        }
        subtitle="A global network, a disciplined supply chain and deep market expertise — the advantages producers, distributors and institutions rely on."
        primary={{ text: "Explore Commodities", href: "/commodities" }}
        secondary={{ text: "About us", href: "/about" }}
      />

      <FeatureBento
        badge="Why NTA"
        title="The advantages of a trusted global partner"
        subtitle="Six reasons partners choose NTA Group for reliable, large-scale commodity supply."
        items={whyNta.map((item, i) => ({
          title: item.title,
          description: item.desc,
          icon: icons[i],
          image: asset(whyImages[i % whyImages.length]),
          wide: i === 0,
        }))}
      />

      {/* Process rail — how a trade moves through the desk */}
      <section className="border-t border-ink/10 bg-white">
        <div className="container-px py-24 md:py-32">
          <Reveal>
            <span className="eyebrow block">How we trade</span>
            <h2 className="mt-5 max-w-2xl text-display-md font-display font-semibold text-balance text-ink">
              Four steps, one accountable desk.
            </h2>
          </Reveal>
          <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10 md:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={s.number}
                className="group bg-white p-7 transition-colors duration-300 hover:bg-sand-50 md:p-8"
              >
                <RevealItem>
                  <div className="flex items-center justify-between">
                    <span className="inline-block font-mono text-3xl font-semibold text-accent-deep transition-transform duration-300 ease-out group-hover:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none">
                      {s.number}
                    </span>
                    {i < steps.length - 1 && (
                      <ArrowRight className="hidden h-4 w-4 text-ink/25 transition-colors duration-300 group-hover:text-accent-deep md:block motion-reduce:transition-none" />
                    )}
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-sand-500">
                    {s.desc}
                  </p>
                </RevealItem>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTASection
        badge={{ text: "Why NTA" }}
        title="A partner built on trust."
        description="Speak with our trading desk about your sourcing, supply and logistics needs."
        action={{ text: "Contact Trading Team", href: "/contact" }}
      />
    </>
  );
}
