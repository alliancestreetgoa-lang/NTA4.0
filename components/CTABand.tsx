import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function CTABand() {
  return (
    <section className="border-t border-ink/10 bg-white text-ink">
      <div className="container-px py-24 md:py-32">
        <Reveal>
          <span className="eyebrow">Start a conversation</span>
        </Reveal>
        <div className="mt-6 grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal delay={1}>
              <h2 className="text-display-lg font-display font-semibold leading-[1.04] text-balance">
                Tell us what you need to move, and where.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand-500">
                Send an inquiry with product, volume and destination — the
                trading desk responds with origin options and indicative terms.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Reveal delay={3}>
              <Link href="/contact" className="btn-primary group">
                Contact the trading desk
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <div className="mt-7 space-y-2 font-mono text-xs tracking-[0.06em] text-sand-500">
                <a
                  href={`mailto:${site.email}`}
                  className="block transition-colors hover:text-accent-deep"
                >
                  {site.email}
                </a>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="block transition-colors hover:text-accent-deep"
                >
                  {site.phone}
                </a>
                <p className="text-sand-500">
                  {site.address.city}, {site.address.country} — 24/7 desk
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
