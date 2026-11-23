import type { Config } from "tailwindcss";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: token("paper"),
        surface: token("surface"),
        muted: token("muted"),
        rule: token("rule"),
        "on-accent": token("on-accent"),
        chart: token("chart"),
        ink: { DEFAULT: token("ink"), secondary: "#6e6e73" },
        line: "#d2d2d7",
        ground: { DEFAULT: "#ffffff", alt: "#f5f5f7" },
        accent: { DEFAULT: token("accent"), hover: "#0077ed" },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
