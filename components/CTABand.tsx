import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 grain opacity-[0.5]" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(109,139,255,0.42) 0%, rgba(109,139,255,0) 70%)",
        }}
      />
      <div className="container-px relative py-24 md:py-32">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="text-display-lg font-display font-semibold leading-[1.04] text-balance">
                Partner with a global commodity trading company built on trust.
              </h2>
            </Reveal>
          </div>
          <div className="flex flex-wrap gap-4 lg:col-span-4 lg:justify-end">
            <Reveal delay={2}>
              <Link href="/contact" className="btn-light group">
                Contact Trading Team
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
            <Reveal delay={3}>
              <Link href="/commodities" className="btn-ghost-light">
                Explore Commodities
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
