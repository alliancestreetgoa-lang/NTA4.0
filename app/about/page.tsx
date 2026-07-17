import type { Metadata } from "next";
import {
  Globe2,
  ShieldCheck,
  Network,
  BadgeCheck,
  Leaf,
  Handshake,
  type LucideIcon,
} from "lucide-react";
import { PageHero21 } from "@/components/blocks/page-hero";
import { FeatureBento } from "@/components/blocks/feature-bento";
import { StatLedger } from "@/components/blocks/stat-ledger";
import { Milestones } from "@/components/blocks/milestones";
import { CTASection } from "@/components/blocks/cta-section";
import { aboutPoints } from "@/lib/data";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "About",
  description:
    "NTA Group is a UAE-based global commodity trading company with international market presence, a global sourcing network and a commitment to quality and sustainable partnerships.",
};

const aboutIcons: LucideIcon[] = [
  Globe2,
  Network,
  ShieldCheck,
  BadgeCheck,
  Leaf,
  Handshake,
];

// Phase-based trajectory (no invented dates — confirm real milestones with NTA).
const milestones = [
  {
    phase: "Origins",
    title: "A trading desk in the UAE",
    description:
      "NTA Group is founded in the United Arab Emirates — a commodity trading operation at the crossroads of global trade.",
  },
  {
    phase: "Fertilizers",
    title: "The flagship division",
    description:
      "We build our chemical-fertilizer business — nitrogen, phosphate and potash grades shipped with full documentation and specification sheets.",
  },
  {
    phase: "Energy",
    title: "Into energy & petrochemicals",
    description:
      "We expand into energy, oil and petrochemical trading, connecting Gulf producers with global demand.",
  },
  {
    phase: "Agriculture",
    title: "Grains & food security",
    description:
      "We add grains and cereals, supplying food-security markets across Africa and Asia.",
  },
  {
    phase: "Today",
    title: "Six divisions, 40+ markets",
    description:
      "A single accountable desk serving more than forty destination markets across five regions, from our Dubai hub.",
  },
];

// One subject-matched image per aboutPoints card (vendored locally).
const aboutImages = [
  "/images/vendor/dubai-skyline-day.jpg", // UAE-Based Trading — Dubai skyline
  "/world-trade-map.png", // International Market Presence — world trade map
  "/images/about-trade.jpg", // Global Sourcing Network — container port
  "/images/vendor/lab-quality.jpg", // Commitment to Quality — lab QC testing
  "/fertilizers/flagship-plant.png", // Sustainable Partnerships — seedling in soil
  "/images/vendor/handshake.jpg", // Long-Term Relationships — handshake
];

export default function AboutPage() {
  return (
    <>
      <PageHero21
        eyebrow="About NTA Group"
        title={
          <>
            Connecting global producers with the{" "}
            <span className="text-accent-deep">markets that need them</span>.
          </>
        }
        subtitle={site.description}
        primary={{ text: "Explore Commodities", href: "/commodities" }}
        secondary={{ text: "Contact", href: "/contact" }}
      />

      {/* Proof by numbers — count-up ledger */}
      <StatLedger
        eyebrow="The desk in numbers"
        items={site.stats.map((s) => ({ value: s.value, label: s.label }))}
      />

      {/* Trajectory — milestones timeline */}
      <Milestones
        eyebrow="Our story"
        title="From a Dubai trading desk to 40+ markets."
        items={milestones}
        className="border-t border-ink/10"
      />

      <FeatureBento
        badge="Who we are"
        title="What defines us"
        subtitle="A UAE-based commodity trading company built on trust, expertise and an unwavering commitment to reliable global supply."
        items={aboutPoints.map((p, i) => ({
          title: p.title,
          description: p.desc,
          icon: aboutIcons[i % aboutIcons.length],
          image: asset(aboutImages[i % aboutImages.length]),
          wide: i === 0,
        }))}
      />

      <CTASection
        badge={{ text: "Let's trade" }}
        title="Partner with a trusted global trading company."
        action={{ text: "Contact Trading Team", href: "/contact" }}
      />
    </>
  );
}
