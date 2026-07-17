import type { Metadata } from "next";
import { PageHero21 } from "@/components/blocks/page-hero";
import { CTASection } from "@/components/blocks/cta-section";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "NTA Group's ESG commitment: responsible sourcing, environmental awareness, supply chain transparency, sustainable agriculture and long-term partnerships.",
};

// The five ESG commitments folded into three pillars (real content, refolded).
const pillars = [
  {
    tag: "Environmental",
    title: "Lowering the footprint of trade",
    points: [
      "Minimizing the environmental impact of logistics, freight and supply chains.",
      "Supporting balanced fertilizer use and productive, sustainable farming systems.",
    ],
  },
  {
    tag: "Social",
    title: "Sourcing that respects people",
    points: [
      "Partnering with producers who uphold ethical, safe and compliant standards.",
      "Building enduring relationships that create shared, lasting value.",
    ],
  },
  {
    tag: "Governance",
    title: "Traceable, accountable supply",
    points: [
      "Traceability and accountability across every link of the value chain.",
      "Documentation and quality assurance on every shipment.",
    ],
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero21
        eyebrow="Sustainability & ESG"
        title={
          <>
            Responsible trade for a{" "}
            <span className="text-accent-deep">resilient future</span>.
          </>
        }
        subtitle="We balance commercial performance with environmental and social responsibility across every link of our supply chain."
        primary={{ text: "Contact", href: "/contact" }}
      />

      {/* ESG pillars */}
      <section className="bg-white">
        <div className="container-px py-24 md:py-32">
          <span className="eyebrow block">Our approach</span>
          <h2 className="mt-5 max-w-2xl text-display-md font-display font-semibold text-balance text-ink">
            Sustainability built into how we trade.
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-ink/10 bg-ink/10 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.tag} className="bg-white p-8 md:p-10">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-accent-deep">
                  {p.tag}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {p.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-3 text-sm leading-relaxed text-sand-500"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pledge — editorial statement */}
      <section className="border-t border-ink/10 bg-sand-50">
        <div className="container-px py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-accent-deep">
              Our pledge
            </span>
            <blockquote className="mt-8 font-display text-3xl font-semibold leading-tight text-balance text-ink md:text-4xl">
              &ldquo;To trade responsibly — supporting food security, energy
              access and sustainable growth — while protecting the communities
              and environments we touch.&rdquo;
            </blockquote>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-sand-500">
              — NTA Group
            </p>
          </div>
        </div>
      </section>

      <CTASection
        badge={{ text: "ESG" }}
        title="Responsible trade, at global scale."
        action={{ text: "Contact Trading Team", href: "/contact" }}
      />
    </>
  );
}
