import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";
import { divisions } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900 text-white">
      <div className="container-px py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="dark" className="h-32 md:h-40" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
              {site.tagline}. A UAE-based global commodity trading company
              connecting producers and markets worldwide.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-white/70"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
              Navigate
            </h4>
            <ul className="mt-6 space-y-3.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
              Divisions
            </h4>
            <ul className="mt-6 space-y-3.5">
              {divisions.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/commodities#${d.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {d.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-white/50">
              Headquarters
            </h4>
            <ul className="mt-6 space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                <span>
                  {site.address.line1},<br />
                  {site.address.line2}
                  <br />
                  {site.address.city}, {site.address.country}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-8 text-xs text-white/60 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.18em]">
            Powering Global Trade · Energy & Agri Commodities
          </p>
        </div>
      </div>
    </footer>
  );
}
