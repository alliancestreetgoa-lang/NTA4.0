# BRIEF: NTA Group — Homepage Redesign

**Building:** A redesigned homepage for NTA Group's existing Next.js corporate site — a UAE (JLT, Dubai) global commodity trader whose flagship business is chemical fertilizers.
**Job class:** Landing page (homepage of an existing multi-page marketing site).
**Visitor's job:** B2B buyers (fertilizer importers, distributors, government-tender buyers) contact the trading team / send a commodity inquiry.
**Register:** Institutional, assured, quietly premium — trading-house gravitas (Vitol/Trafigura), not SaaS.
**Pages/features:** `app/page.tsx` + home components (hero, divisions, fertilizer flagship, why-NTA, services, CTA). Shared Navbar/Footer/tokens may be touched only where the homepage needs it and other pages must not break.
**Constraints/Existing:** Next.js 14 App Router + Tailwind + framer-motion; static export to GitHub Pages (basePath via `asset()`, images unoptimized, Unsplash allowed); dark "Meridian" theme with periwinkle accent currently in working tree (uncommitted 21st.dev rebuild); real content in `lib/data.ts` / `lib/site.ts`; assets: 21 fertilizer posters, flagship-plant.png, world-trade-map.png, logo. Impeccable audit (2026-07-07) on file: kill template scaffolding, commit one accent, de-duplicate fertilizer content, fix muted-text contrast.
**Assumptions:**
- Assuming the redesign should replace the generic 21st.dev centered hero with bespoke art direction, since the last commit parked work "before 21st.dev rebuild" and the audit calls the current look template-grade.
- Assuming dark theme stays (rest of site is dark; only the homepage is in scope) but the SaaS periwinkle accent is replaced with a single trading-house accent used sparingly.
- Assuming the homepage keeps the fertilizer flagship as hero-adjacent focus and cuts the duplicated full catalog table to a curated presentation linking to /commodities.
- Assuming primary CTA is "Contact the trading team", secondary "Explore commodities".
**Done when:**
- [ ] At 1440×900: headline, subhead and primary CTA visible without scrolling; hero is art-directed (imagery/composition, no zap-badge template chip).
- [ ] At 375×812: no horizontal scroll anywhere on the homepage; mobile nav opens and closes.
- [ ] Every muted body text on the homepage computes to ≥4.5:1 contrast against its background (spot-check via computed styles).
- [ ] Fertilizer products appear once on the homepage in curated form, with a working link to the full range (no duplicate slideshow + 20-row table dump).
- [ ] Every homepage link/CTA navigates to an existing route (click-through: no 404).
- [ ] `npm run build` (static export) succeeds; homepage console clean on load.
- [ ] Animations honor `prefers-reduced-motion` (content readable with JS animations disabled).
**Out of scope:** Redesign of the other six pages (they must merely keep working); contact-form backend; CMS; new deployment/DNS work; sourcing paid photography.

## Design
**Direction:** Industrial / technical — "trading desk": near-black warm ground, hairline rules, mono data labels (cargo-manifest language), one brass accent.
**Fit:** NTA trades physical cargo — urea grades, tonnage, routes — so the visual language of manifests, spec tables and mono figures is authentically theirs, where SaaS periwinkle/centered-hero was borrowed.
**Type:** Display = Archivo 600/700 tight-tracked (Google Fonts, already wired); Body = Inter (Google Fonts); Data/labels = IBM Plex Mono (Google Fonts) for eyebrows, N-P-K grades, stats.
**Palette (warm neutrals, ONE accent):** ground `#0A0A09`, raised `#161512`, hairline `rgba(236,234,228,0.12)`, text `#ECEAE4`, muted `#A6A29A`, paper section `#F4F2ED` with ink `#201E1B` / muted `#57544D`; accent brass `#D9A84E` (deep-on-paper variant `#8A6A1F`).
**Contrast (computed):** muted 7.79:1 on ground, 7.18:1 on raised; brass text 9.11:1; ink-on-brass fill 9.11:1; paper muted 6.75:1 — all ≥4.5:1.
**Spacing/radius:** 8px base, section padding 112–144px desktop / 64–80px mobile; radius 0 (hairline boxes) with 6px only on small chips; 12-col grid, asymmetric 7/5–8/4 splits, dark-dominant with one paper section for rhythm.
**Motion:** fade-up ≤20px, 400ms ease-out, 80ms stagger; content never JS-gated (renders visible without JS); ticker tape as the one signature ambient motion; all guarded by prefers-reduced-motion.
**Imagery:** existing fertilizer posters + flagship plant photo, world-trade-map as faint hero backdrop; Lucide icons at 1.5px stroke only where semantic — no emoji, no stock-photo collage.
