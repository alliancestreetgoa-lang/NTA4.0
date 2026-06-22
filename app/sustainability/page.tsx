import type { Metadata } from "next";
import Image from "next/image";
import { Leaf } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABand } from "@/components/CTABand";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { sustainability } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "NTA Group's ESG commitment: responsible sourcing, environmental awareness, supply chain transparency, sustainable agriculture and long-term partnerships.",
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability & ESG"
        title="Responsible trade for a resilient future."
        intro="We balance commercial performance with environmental and social responsibility across every link of our supply chain."
        image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Intro */}
      <section className="container-px py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our commitment"
              title="Sustainability built into how we trade."
            />
            <Reveal delay={2}>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                As a global trader of fertilizers, energy and food commodities,
                we recognise our role in the systems that feed and power the
                world. Responsible practice is not an add-on — it is integral to
                how we source, ship and deliver.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-10 relative aspect-[16/10] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=80"
                  alt="Sustainable landscape"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <RevealGroup className="space-y-px overflow-hidden border border-line bg-line">
              {sustainability.map((s, i) => (
                <Reveal key={s.title} className="bg-white">
                  <div className="group flex gap-6 bg-white p-8 transition-colors duration-500 hover:bg-sand-50">
                    <span className="font-display text-2xl font-semibold tabular-nums text-sand-300">
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <Leaf className="h-5 w-5 text-sand-500" strokeWidth={1.5} />
                        <h3 className="font-display text-xl font-semibold text-ink">
                          {s.title}
                        </h3>
                      </div>
                      <p className="mt-2.5 text-sm leading-relaxed text-charcoal-light">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* Pledge */}
      <section className="border-t border-line bg-ink text-white">
        <div className="container-px py-24 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="eyebrow mx-auto text-white/60 [&::before]:bg-sand-400">
                Our pledge
              </span>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-8 font-display text-3xl font-semibold leading-snug text-balance md:text-4xl">
                &ldquo;To trade responsibly — supporting food security, energy
                access and sustainable growth — while protecting the
                communities and environments we touch.&rdquo;
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
