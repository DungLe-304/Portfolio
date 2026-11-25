import type { Config } from "tailwindcss";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

// Design tokens for the "Paper-first" system. Spec: docs/superpowers/specs/2026-11-24-blend-design.md
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: token("paper"),
        surface: token("surface"),
        ink: token("ink"),
        muted: token("muted"),
        rule: token("rule"),
        accent: token("accent"),
        "accent-soft": token("accent-soft"),
        "on-accent": token("on-accent"),
        chart: token("chart"),
        live: token("live"),
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        label: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.04em" }],
        hero: ["clamp(2.5rem, 5.4vw, 4.6rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        title: ["clamp(2.125rem, 3.6vw, 2.75rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "card-title": ["clamp(1.75rem, 2.6vw, 2.125rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "item-title": ["1.375rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        stat: ["clamp(2.5rem, 4.4vw, 3.5rem)", { lineHeight: "1", letterSpacing: "-0.05em" }],
      },
      spacing: {
        cell: "1.75rem",
        "section-sm": "4rem",
        section: "6rem",
      },
      maxWidth: {
        page: "75rem",
        prose: "65ch",
      },
      borderRadius: {
        tag: "4px",
        control: "10px",
        card: "14px",
      },
      boxShadow: {
        lift: "0 18px 40px -24px rgb(var(--ink) / 0.45)",
        frame: "0 20px 40px -28px rgb(var(--ink) / 0.6)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
        fast: "150ms",
        slow: "250ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-soft": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
