# PLAN — NTA Group homepage redesign
Stack: existing Next.js 14 (App Router) + Tailwind + framer-motion, static export. Fixed by codebase.
Spike findings: none needed — no novel technical risk; dev server already renders the site.

1. [x] Design tokens per DESIGN direction: accent + type + surface tokens updated in tailwind.config/globals; all 7 pages still render.
   Verify by: homepage + /about + /commodities load with new tokens, zero console errors.
2. [x] Hero: bespoke art-directed hero (composition, imagery, real copy), replacing the 21st.dev template hero.
   Verify by: at 1440×900 headline/subhead/primary CTA visible without scroll, no template badge-chip; at 375px no horizontal scroll.
3. [x] Proof strip: stats + commodity ticker consolidated under hero.
   Verify by: stats from lib/site.ts visible; marquee pauses under prefers-reduced-motion emulation.
4. [x] Divisions section redesigned (6 divisions, fertilizer visibly flagship).
   Verify by: 6 division cards render, each links to a route that resolves (click one: no 404); layout holds at 375px.
5. [x] Fertilizer flagship section: single curated product presentation, full 20-row table removed from homepage, link to full range.
   Verify by: products appear once on the page; "full range" link navigates to catalog section/page.
6. [x] Why-NTA + services consolidated into one credibility section; About preview trimmed.
   Verify by: section renders with no duplicated copy blocks vs. other homepage sections; 375px holds.
7. [x] CTA band + homepage-wide contrast pass on muted text.
   Verify by: computed color check on muted paragraphs ≥4.5:1 (preview_inspect spot checks on each section).
8. [x] VERIFY ladder: production build, click-every-link, responsive sweep 320–1440, reduced-motion, keyboard pass.
   Verify by: `npm run build` exits 0; checklist results recorded with zero console errors.
