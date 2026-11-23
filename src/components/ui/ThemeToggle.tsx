"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const subscribeToTheme = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
};

const readIsDark = () => document.documentElement.classList.contains("dark");

const hasSavedTheme = () => {
  try {
    const saved = localStorage.getItem("theme");
    return saved === "light" || saved === "dark";
  } catch {
    return false;
  }
};

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribeToTheme, readIsDark, () => false);
  const choseThisPageView = useRef(false);

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const followSystem = (event: MediaQueryListEvent) => {
      if (choseThisPageView.current || hasSavedTheme()) return;
      document.documentElement.classList.toggle("dark", event.matches);
    };
    systemTheme.addEventListener("change", followSystem);
    return () => systemTheme.removeEventListener("change", followSystem);
  }, []);

  const toggle = () => {
    choseThisPageView.current = true;
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
      className="inline-flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-accent"
    >
      <Moon size={17} aria-hidden="true" className="dark:hidden" />
      <Sun size={17} aria-hidden="true" className="hidden dark:block" />
    </button>
  );
}
