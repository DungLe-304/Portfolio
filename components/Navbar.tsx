"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Awards",   href: "#awards" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-[#020817]/80 backdrop-blur-xl border-b border-slate-200 dark:border-sky-400/10 shadow-sm dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Monospace logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-sm font-medium tracking-wider text-sky-400 hover:text-sky-300 transition-colors"
        >
          <span className="text-slate-500">~/</span>dung-le
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="relative px-4 py-2 text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors group"
              >
                <span className="font-mono text-sky-600 text-xs mr-1 opacity-60">
                  0{i + 1}.
                </span>
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-sky-400/10 transition-all"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#020817]/95 backdrop-blur-xl border-b border-slate-200 dark:border-sky-400/10 px-6 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left py-2.5 text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-3"
                >
                  <span className="font-mono text-sky-700 text-xs">0{i + 1}.</span>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
