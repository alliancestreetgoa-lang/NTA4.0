import type { Metadata } from "next";
import { PageHero21 } from "@/components/blocks/page-hero";
import { CTASection } from "@/components/blocks/cta-section";
import { Reveal } from "@/components/Reveal";

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
            {pillars.map((p, i) => {
              // Reveal delays are index units (×0.08s). Columns land ~0.1s apart,
              // their contents ~0.06s apart within a column.
              const base = i * 1.2;
              return (
                <div
                  key={p.tag}
                  className="bg-white p-8 transition-colors duration-300 hover:bg-sand-50 md:p-10"
                >
                  <Reveal
                    as="span"
                    delay={base}
                    className="block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-accent-deep"
                  >
                    {p.tag}
                  </Reveal>
                  <Reveal delay={base + 0.8} className="mt-5">
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {p.title}
                    </h3>
                  </Reveal>
                  <ul className="mt-6 space-y-4">
                    {p.points.map((pt, j) => (
                      <Reveal
                        as="li"
                        key={pt}
                        delay={base + 1.6 + j * 0.8}
                        className="flex gap-3 text-sm leading-relaxed text-sand-500"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {pt}
                      </Reveal>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pledge — editorial statement */}
      <section className="border-t border-ink/10 bg-sand-50">
        <div className="container-px py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal
              as="span"
              className="block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-accent-deep"
            >
              Our pledge
            </Reveal>
            <Reveal delay={1} className="mt-8">
              <blockquote className="font-display text-3xl font-semibold leading-tight text-balance text-ink md:text-4xl">
                &ldquo;To trade responsibly — supporting food security, energy
                access and sustainable growth — while protecting the communities
                and environments we touch.&rdquo;
              </blockquote>
            </Reveal>
            <Reveal delay={2} className="mt-8">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-sand-500">
                — NTA Group
              </p>
            </Reveal>
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
