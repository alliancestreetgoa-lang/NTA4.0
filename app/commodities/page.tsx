import type { Metadata } from "next";
import Image from "next/image";
import { Check, Globe2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CTABand } from "@/components/CTABand";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { divisions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Commodities",
  description:
    "Explore NTA Group's commodity portfolio: chemical fertilizers, energy, oil, petrochemicals, grains and cereals — with global supply capability across every category.",
};

export default function CommoditiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Commodities"
        title="A complete portfolio across energy & agri commodities."
        intro="From our flagship fertilizer trading to energy, oil, petrochemicals and grains — explore the commodities we source and supply to global markets."
        image="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=2400&q=80"
      />

      {/* Quick nav */}
      <section className="sticky top-16 z-30 border-b border-white/15 bg-sand-500/95 backdrop-blur-xl">
        <div className="container-px flex gap-6 overflow-x-auto py-4">
          {divisions.map((d) => (
            <a
              key={d.slug}
              href={`#${d.slug}`}
              className="whitespace-nowrap text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {d.title}
            </a>
          ))}
        </div>
      </section>

      {divisions.map((d, idx) => {
        const Icon = d.icon;
        const reversed = idx % 2 === 1;
        return (
          <section
            key={d.slug}
            id={d.slug}
            className={`scroll-mt-36 ${
              d.primary ? "bg-sand-700" : idx % 2 === 1 ? "bg-sand-600" : "bg-sand-500"
            } border-b border-white/15`}
          >
            <div className="container-px py-24 md:py-28">
              <div
                className={`grid items-start gap-14 lg:grid-cols-2 lg:gap-20 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Text side */}
                <div>
                  <Reveal>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center border border-white/20 bg-white/10 text-white">
                        <Icon className="h-6 w-6" strokeWidth={1.4} />
                      </div>
                      {d.primary && (
                        <span className="rounded-full bg-ink px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white">
                          Primary Focus
                        </span>
                      )}
                    </div>
                  </Reveal>

                  <Reveal delay={1}>
                    <h2 className="mt-6 text-display-md font-display font-semibold text-white">
                      {d.title}
                    </h2>
                  </Reveal>
                  <Reveal delay={2}>
                    <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
                      {d.description}
                    </p>
                  </Reveal>

                  {/* Applications */}
                  <Reveal delay={3}>
                    <div className="mt-9">
                      <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                        Industry Applications
                      </h3>
                      <div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                        {d.applications.map((a) => (
                          <div key={a} className="flex items-center gap-2.5">
                            <Check className="h-4 w-4 shrink-0 text-white" />
                            <span className="text-sm text-white/70">{a}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>

                  {/* Capability */}
                  <Reveal delay={4}>
                    <div className="mt-8 flex gap-3 border-l-2 border-white/50 bg-white/5 p-5">
                      <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-white" strokeWidth={1.5} />
                      <div>
                        <div className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                          Global Supply Capability
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                          {d.capability}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Image + products */}
                <div>
                  <Reveal delay={1}>
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Image
                        src={d.image}
                        alt={d.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </Reveal>

                  <RevealGroup className="mt-8 space-y-7">
                    {d.groups.map((group) => (
                      <Reveal key={group.heading}>
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
                            {group.heading}
                          </h3>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {group.products.map((p) => (
                              <span
                                key={p.name}
                                className="group inline-flex items-center gap-1.5 border border-white/25 bg-white/5 px-3.5 py-2 text-xs font-medium text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-ink"
                              >
                                {p.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </RevealGroup>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CTABand />
    </>
  );
}
