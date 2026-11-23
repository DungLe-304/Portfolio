"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import type { ContentLink } from "@/content/resume";

interface NavbarProps {
  name: string;
  links: ContentLink[];
  resumeLink: ContentLink;
}

export default function Navbar({ name, links, resumeLink }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-paper/90 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 w-full max-w-[1320px] items-center justify-between gap-5 px-5 text-[13px] sm:px-8 lg:px-14"
      >
        <a href="#top" className="inline-flex min-h-11 items-center font-semibold">
          {name}
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="inline-flex min-h-11 items-center transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="-mr-2.5 flex items-center gap-1 md:mr-0">
          <a
            href={resumeLink.href}
            download="DungLe_Resume.pdf"
            className="hidden min-h-11 items-center px-2 font-medium text-accent underline-offset-4 hover:underline md:inline-flex"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center md:hidden"
          >
            {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <ul id="mobile-menu" hidden={!menuOpen} className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-rule px-5 py-2 sm:px-8 md:hidden">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-11 items-center font-display text-xl"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={resumeLink.href}
            download="DungLe_Resume.pdf"
            onClick={() => setMenuOpen(false)}
            className="flex min-h-11 items-center font-display text-xl text-accent"
          >
            {resumeLink.label}
          </a>
        </li>
      </ul>
    </header>
  );
}
