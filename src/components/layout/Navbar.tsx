"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import CommandMenu from "@/components/ui/CommandMenu";
import Mark from "@/components/ui/Mark";
import ThemeToggle from "@/components/ui/ThemeToggle";
import type { ContentLink } from "@/content/resume";

interface NavbarProps {
  name: string;
  links: ContentLink[];
  resumeLink: ContentLink;
  sections: ContentLink[];
  actions: ContentLink[];
}

export default function Navbar({ name, links, resumeLink, sections, actions }: NavbarProps) {
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
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/85 backdrop-blur-md">
      <nav aria-label="Primary">
        <div className="mx-auto flex h-14 w-full max-w-page items-center justify-between gap-5 px-5 text-sm sm:px-8">
          <a href="#top" className="group inline-flex min-h-11 items-center gap-2.5 font-semibold">
            <Mark className="transition-transform duration-slow group-hover:-rotate-6" />
            {name}
          </a>

          <ul className="hidden items-center gap-6 md:flex lg:gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="inline-flex min-h-11 items-center text-muted transition-colors duration-fast hover:text-ink">
                  <span className="link-grow">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="-mr-1 flex items-center gap-2 md:mr-0">
            <a
              href={resumeLink.href}
              download={resumeLink.download}
              className="hidden min-h-11 items-center font-medium text-accent md:inline-flex"
            >
              <span className="link-grow">Resume</span>
            </a>
            <CommandMenu sections={sections} links={actions} />
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
        </div>

        <ul
          id="mobile-menu"
          hidden={!menuOpen}
          className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-rule px-5 py-2 sm:px-8 md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-12 items-center border-b border-rule font-display text-2xl last:border-b-0"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={resumeLink.href}
              download={resumeLink.download}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-12 items-center font-display text-2xl text-accent"
            >
              {resumeLink.label}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
