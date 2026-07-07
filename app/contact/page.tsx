import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock, Building2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the NTA Group trading desk. UAE headquarters, commodity inquiry form and trading desk contact for fertilizer, energy and agri-commodity trade.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with our trading desk."
        intro="Whether you're sourcing commodities or seeking a supply partnership, our team is ready to help. We respond within one business day."
        image="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="container-px py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Info side */}
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold text-white">
                Let&apos;s build a trading partnership.
              </h2>
            </Reveal>

            <div className="mt-10 space-y-7">
              {[
                {
                  icon: Building2,
                  label: "Headquarters",
                  value: `${site.address.line1}, ${site.address.line2}, ${site.address.city}, ${site.address.country}`,
                },
                {
                  icon: Mail,
                  label: "Trading Desk",
                  value: site.email,
                  href: `mailto:${site.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: site.phone,
                  href: `tel:${site.phone.replace(/\s/g, "")}`,
                },
                {
                  icon: Clock,
                  label: "Trading Hours",
                  value: "Sunday – Friday · 24/7 desk coverage",
                },
              ].map((c, i) => (
                <Reveal key={c.label} delay={i}>
                  <div className="flex gap-4 border-t border-white/15 pt-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-white/10 text-white">
                      <c.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-[0.14em] text-white/70">
                        {c.label}
                      </div>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="mt-1 block text-[0.95rem] leading-relaxed text-white transition-colors hover:text-white"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-[0.95rem] leading-relaxed text-white">
                          {c.value}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={2}>
              <div className="mt-10 flex items-start gap-3 rounded-sm border border-white/15 bg-ink-900 p-5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                <p className="text-sm leading-relaxed text-white/80">
                  Strategically located in Dubai — at the crossroads of European,
                  Asian and African trade routes.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form side */}
          <div className="lg:col-span-8">
            <Reveal delay={1}>
              <div className="border border-line bg-white p-8 md:p-10">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  Commodity Inquiry Form
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                  Share your requirement and our trading team will respond with
                  availability, pricing and terms.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
