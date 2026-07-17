import type { Metadata } from "next";
import { Inter, Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar1 } from "@/components/blocks/shadcnblocks-com-navbar1";
import { SiteFooter } from "@/components/SiteFooter";
import { nav, site } from "@/lib/site";
import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Display face: a grotesque with an industrial, mechanical skeleton that reads
// clearly against Inter's humanist body — the two-font split now does real work.
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Data face: cargo-manifest language — eyebrows, N-P-K grades, stats, route
// tags all set in mono so figures read as trading data, not decoration.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Fertilizer Trading UAE",
    "Commodity Trading UAE",
    "LNG Trading Company UAE",
    "Petrochemical Trading UAE",
    "Crude Oil Trading UAE",
    "Global Commodity Supplier",
    "Agricultural Commodity Trading",
    "Fertilizer Exporters UAE",
    "Urea Trading UAE",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    slogan: site.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressCountry: "AE",
    },
    areaServed: ["UAE", "GCC", "Africa", "India", "Southeast Asia", "Europe"],
    knowsAbout: [
      "Fertilizer Trading",
      "Commodity Trading",
      "LNG Trading",
      "Petrochemical Trading",
      "Crude Oil Trading",
      "Agricultural Commodity Trading",
    ],
  };

  return (
    <html lang="en" className={cn(inter.variable, archivo.variable, plexMono.variable, "font-sans")}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar1
          logo={{ url: "/", src: asset("/logo.png"), alt: "NTA Group", title: "NTA Group" }}
          menu={nav.map((n) => ({ title: n.label, url: n.href }))}
          auth={{
            login: { text: "Commodities", url: "/commodities" },
            signup: { text: "Contact Trading Team", url: "/contact" },
          }}
        />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
