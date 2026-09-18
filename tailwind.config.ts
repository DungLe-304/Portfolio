import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#1d1d1f", secondary: "#6e6e73" },
        line: "#d2d2d7",
        ground: { DEFAULT: "#ffffff", alt: "#f5f5f7" },
        accent: { DEFAULT: "#0071e3", hover: "#0077ed" },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          '"SF Pro Display"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
