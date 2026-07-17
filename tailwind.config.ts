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
        // Trading-desk palette: warm near-blacks (tinted toward the brass
        // accent) instead of zinc, so dark surfaces read like a desk at night
        // rather than a SaaS default. Token names kept so all pages recolor.
        ink: {
          DEFAULT: "#0A0A09",
          900: "#131311",
          800: "#1C1B18",
          700: "#262521",
        },
        charcoal: {
          DEFAULT: "#3D3B36",
          light: "#57544D",
          muted: "#6E6A62",
        },
        // Warm-gray ramp; sand-50 doubles as the "paper" light-section ground.
        sand: {
          50: "#F4F2ED",
          100: "#E9E6DF",
          200: "#D8D4CB",
          300: "#BDB8AD",
          400: "#94908A",
          500: "#6E6A62",
          600: "#5A574F",
          700: "#47443E",
        },
        // ONE accent: brass. Legible as text on ink (9.1:1) and as a fill with
        // ink text (9.1:1). `deep` is the on-paper/on-white variant (4.5:1).
        accent: {
          DEFAULT: "#D9A84E",
          soft: "#E3BA6E",
          deep: "#8A6A1F",
          foreground: "var(--accent-foreground)",
        },
        line: "#E3E0D8",
        // shadcn/ui semantic tokens (mapped to the OKLCH vars in globals.css)
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: { DEFAULT: "var(--primary)", foreground: "var(--primary-foreground)" },
        secondary: { DEFAULT: "var(--secondary)", foreground: "var(--secondary-foreground)" },
        destructive: { DEFAULT: "var(--destructive)", foreground: "var(--primary-foreground)" },
        muted: { DEFAULT: "var(--muted)", foreground: "var(--muted-foreground)" },
        popover: { DEFAULT: "var(--popover)", foreground: "var(--popover-foreground)" },
        card: { DEFAULT: "var(--card)", foreground: "var(--card-foreground)" },
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
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
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slow-zoom": "slow-zoom 20s ease-out forwards",
        marquee: "marquee 40s linear infinite",
        "scroll-hint": "scroll-hint 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
