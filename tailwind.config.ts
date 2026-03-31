import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Base
        navy: {
          950: "#020817",
          900: "#0a1628",
          800: "#0f2044",
          700: "#1a3460",
        },
        // Accent — electric cyan
        cyan: {
          glow: "#38bdf8",
        },
        // Secondary accent — amber
        amber: {
          glow: "#f59e0b",
        },
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        sans:   ["DM Sans", "sans-serif"],
        mono:   ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(56,189,248,0.12) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "dot-md": "28px 28px",
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(56,189,248,0.35), 0 0 60px rgba(56,189,248,0.12)",
        "glow-sm":   "0 0 10px rgba(56,189,248,0.25)",
        "card-dark": "0 4px 24px rgba(2,8,23,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
      },
      animation: {
        "fade-up":      "fadeUp 0.7s ease-out forwards",
        "fade-in":      "fadeIn 0.6s ease-out forwards",
        "gradient-x":   "gradientX 6s ease infinite",
        "pulse-slow":   "pulse 4s ease-in-out infinite",
        "blink":        "blink 1s step-end infinite",
        "float":        "float 6s ease-in-out infinite",
        "scan":         "scan 3s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        scan: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
