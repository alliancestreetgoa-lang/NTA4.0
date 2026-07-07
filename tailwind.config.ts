import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pure-neutral monochrome palette, derived from the NTA Group logo.
        // Brand gray = #707070 (sampled from the logo); all tones are true
        // neutral (no cool/warm tint) so the whole site matches the mark.
        // Meridian enterprise dark scale (zinc-family near-blacks).
        ink: {
          DEFAULT: "#09090B",
          900: "#18181B",
          800: "#202024",
          700: "#2A2A2E",
        },
        charcoal: {
          DEFAULT: "#3D3D3D",
          light: "#545454",
          muted: "#707070",
        },
        // Neutral-gray scale anchored on the logo's #707070 (sand-500).
        // Token name kept as `sand` so existing utilities recolor automatically.
        sand: {
          50: "#F5F5F5",
          100: "#EBEBEB",
          200: "#DCDCDC",
          300: "#C2C2C2",
          400: "#969696",
          500: "#707070",
          600: "#5E5E5E",
          700: "#4A4A4A",
        },
        // Meridian accent system: a periwinkle blue as primary (legible as both
        // fill-with-dark-text and text-on-near-black), with purple + emerald as
        // supporting accents. `deep` is the on-white variant.
        accent: {
          DEFAULT: "#6D8BFF",
          soft: "#8BA0FF",
          deep: "#3B60F0",
        },
        accent2: { DEFAULT: "#8B5CF6" },
        accent3: { DEFAULT: "#10B981" },
        line: "#E3E3E3",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 6.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2rem, 3.5vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        container: "1320px",
      },
      letterSpacing: {
        widest: "0.25em",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // A calm downward drift for the scroll hint — no bounce, no elastic.
        "scroll-hint": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.5" },
          "50%": { transform: "translateY(5px)", opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slow-zoom": "slow-zoom 20s ease-out forwards",
        marquee: "marquee 40s linear infinite",
        "scroll-hint": "scroll-hint 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
