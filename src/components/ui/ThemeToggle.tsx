"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // Storage can be unavailable. The theme still applies for this page view.
    }
  };

  return (
    <button
      type="button"
      data-theme-toggle
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="inline-flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-accent"
    >
      <Moon size={17} aria-hidden="true" className="dark:hidden" />
      <Sun size={17} aria-hidden="true" className="hidden dark:block" />
    </button>
  );
}
