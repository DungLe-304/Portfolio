"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const subscribeToTheme = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
};

const readIsDark = () => document.documentElement.classList.contains("dark");

// Keeps the browser UI color (theme-color meta) in step with the paper token of the active theme.
const syncThemeColor = () => {
  const paper = getComputedStyle(document.documentElement).getPropertyValue("--paper").trim();
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", `rgb(${paper})`);
};

// Light is the default. Dark applies only after the visitor chooses it, and the choice is saved.
export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribeToTheme, readIsDark, () => false);

  useEffect(syncThemeColor, [isDark]);

  const toggle = () => {
    const nextIsDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    } catch {
      // Storage can be unavailable. The theme still applies for this page view.
    }
  };

  return (
    <button
      type="button"
      data-theme-toggle
      onClick={toggle}
      aria-label="Dark mode"
      aria-pressed={isDark}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-control border border-rule bg-surface text-ink transition-colors duration-fast after:absolute after:-inset-1 hover:border-accent hover:text-accent"
    >
      <Moon size={16} aria-hidden="true" className="dark:hidden" />
      <Sun size={16} aria-hidden="true" className="hidden dark:block" />
    </button>
  );
}
