import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030014",
        surface: "#0a0a1a",
        "surface-elevated": "#12122a",
        border: "rgba(255,255,255,0.08)",
        accent: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          glow: "#a5b4fc",
        },
        emerald: {
          glow: "#34d399",
        },
        violet: {
          glow: "#8b5cf6",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "aurora-1":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.35), transparent)",
        "aurora-2":
          "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(139,92,246,0.2), transparent)",
        "aurora-3":
          "radial-gradient(ellipse 50% 30% at 20% 80%, rgba(52,211,153,0.15), transparent)",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
      animation: {
        "aurora-shift": "aurora-shift 12s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        marquee: "marquee 40s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        "aurora-shift": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(5%, 3%) scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        glow: "0 0 60px rgba(99,102,241,0.25)",
        "glow-emerald": "0 0 40px rgba(52,211,153,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
