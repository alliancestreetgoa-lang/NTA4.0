"use client";

import { Linkedin, Mail, Phone } from "lucide-react";
import { Footer } from "@/components/blocks/footer-newsletter";
import { nav, site } from "@/lib/site";
import { asset } from "@/lib/asset";

export function SiteFooter() {
  return (
    <Footer
      logoSrc={asset("/logo.png")}
      companyName="NTA Group"
      description={`${site.tagline}. A UAE-based global commodity trading company connecting producers and markets worldwide.`}
      usefulLinks={nav.map((n) => ({ label: n.label, href: n.href }))}
      socialLinks={[
        { label: "LinkedIn", href: site.social.linkedin, icon: <Linkedin className="h-5 w-5" /> },
        { label: site.email, href: `mailto:${site.email}`, icon: <Mail className="h-5 w-5" /> },
        { label: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, icon: <Phone className="h-5 w-5" /> },
      ]}
      newsletterTitle="Market & trade updates"
      onSubscribe={async () => true}
    />
  );
}
