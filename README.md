# NTA Group — Global Commodity Trading

A premium, enterprise-grade corporate website for **NTA Group**, a UAE-based
global commodity trading company specialising in chemical fertilizers, energy,
oil, petrochemicals and agricultural commodities.

> **Powering Global Trade Through Energy & Agri Commodities**

## Design

A Fortune 500 / investor-grade aesthetic inspired by leading global traders
(Vitol, Trafigura, ADNOC Trading, Mercuria, Gunvor, Glencore):

- White background, black typography, charcoal-gray accents
- Subtle UAE desert sand / beige highlights
- Large display typography, generous whitespace, modern grid layouts
- Smooth Framer Motion scroll-reveal animations
- High-end editorial photography

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (custom design system)
- **Framer Motion** (scroll reveal + cinematic hero)
- **Lucide Icons**
- SEO optimised (metadata, JSON-LD, sitemap, robots), fully responsive

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, divisions, fertilizer focus, why NTA, solutions |
| `/about` | About NTA Group |
| `/commodities` | Interactive commodity showcase (6 divisions) |
| `/global-markets` | Interactive world map + region cards |
| `/why-nta` | Advantages + process |
| `/sustainability` | ESG commitments |
| `/contact` | UAE HQ + commodity inquiry form |

## Business Divisions

1. **Chemical Fertilizers** _(flagship / primary focus)_ — Urea, DAP, MAP, NPK, Potash, SOP, CAN, Sulphur and more
2. **Energy Trading** — LNG, natural gas, LPG, condensate, industrial gas
3. **Oil Trading** — crude & refined products
4. **Petrochemicals** — polymers, aromatics, solvents, feedstocks
5. **Grains & Cereals** — agriculture & food commodities
6. **Commodity Solutions** — sourcing, logistics & supply chain

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Project Structure

```
app/            Routes (App Router) + global styles, SEO (sitemap, robots)
components/     UI + section components (Navbar, Hero, GlobalMap, forms…)
lib/            Site config + commodity/division data
public/         Logo & static assets
```

Content lives in `lib/data.ts` and `lib/site.ts` for easy editing.
