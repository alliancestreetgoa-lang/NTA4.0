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
        // Core monochrome palette
        ink: {
          DEFAULT: "#0A0A0B",
          900: "#121214",
          800: "#1C1C1F",
          700: "#2A2A2E",
        },
        charcoal: {
          DEFAULT: "#3A3A3F",
          light: "#52525A",
          muted: "#6B6B73",
        },
        // UAE desert-inspired sand / beige
        sand: {
          50: "#FBF9F5",
          100: "#F5F0E8",
          200: "#EBE3D5",
          300: "#DDD0BB",
          400: "#C9B596",
          500: "#B89B72",
        },
        line: "#E8E6E1",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-inter)", "sans-serif"],
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
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slow-zoom": "slow-zoom 20s ease-out forwards",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
