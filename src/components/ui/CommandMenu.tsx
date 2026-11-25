"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } from "react";
import type { KeyboardEvent } from "react";
import { ArrowDownToLine, ArrowUpRight, CornerDownLeft, Hash, Mail, Search } from "lucide-react";
import type { ContentLink } from "@/content/resume";

interface CommandMenuProps {
  sections: ContentLink[];
  links: ContentLink[];
}

interface Command {
  link: ContentLink;
  group: "Sections" | "Links";
}

const subscribe = () => () => {};
const readIsMac = () => /Mac|iPhone|iPad/.test(navigator.platform);

function iconFor(link: ContentLink) {
  if (link.href.startsWith("#")) return Hash;
  if (link.download) return ArrowDownToLine;
  if (link.href.startsWith("mailto:")) return Mail;
  return ArrowUpRight;
}

function run(link: ContentLink) {
  if (link.href.startsWith("#")) {
    // Scroll directly so picking the section already in the URL hash still moves the page.
    document.querySelector(link.href)?.scrollIntoView();
    history.replaceState(null, "", link.href);
    return;
  }
  const anchor = document.createElement("a");
  anchor.href = link.href;
  if (link.download) anchor.download = link.download;
  if (link.href.startsWith("http")) {
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
  }
  anchor.click();
}

// ⌘K / Ctrl+K command menu: a native <dialog> with a combobox that filters a listbox.
// Arrow keys move the active option, Enter runs it, and Esc closes and returns focus to the trigger.
export default function CommandMenu({ sections, links }: CommandMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const isMac = useSyncExternalStore(subscribe, readIsMac, () => true);
  const baseId = useId();

  const commands = useMemo<Command[]>(
    () => [
      ...sections.map((link) => ({ link, group: "Sections" as const })),
      ...links.map((link) => ({ link, group: "Links" as const })),
    ],
    [sections, links],
  );

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return needle ? commands.filter(({ link }) => link.label.toLowerCase().includes(needle)) : commands;
  }, [commands, query]);

  const open = useCallback(() => {
    setQuery("");
    setActive(0);
    dialogRef.current?.showModal();
    inputRef.current?.focus();
  }, []);

  const close = () => dialogRef.current?.close();

  useEffect(() => {
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key.toLowerCase() !== "k" || !(event.metaKey || event.ctrlKey)) return;
      event.preventDefault();
      if (dialogRef.current?.open) dialogRef.current.close();
      else open();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const choose = (command: Command | undefined) => {
    if (!command) return;
    close();
    run(command.link);
  };

  const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (results.length === 0) return;
      const step = event.key === "ArrowDown" ? 1 : -1;
      setActive((current) => (current + step + results.length) % results.length);
    } else if (event.key === "Enter") {
      event.preventDefault();
      choose(results[active]);
    }
  };

  const optionId = (index: number) => `${baseId}-option-${index}`;
  const groups = (["Sections", "Links"] as const)
    .map((group) => ({ group, items: results.map((command, index) => ({ command, index })).filter(({ command }) => command.group === group) }))
    .filter(({ items }) => items.length > 0);

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        className="relative inline-flex h-9 items-center gap-2 rounded-control border border-rule bg-surface px-2.5 text-sm text-muted transition-colors duration-fast after:absolute after:-inset-1 hover:border-accent hover:text-ink"
      >
        <Search size={15} aria-hidden="true" />
        <span className="sr-only lg:not-sr-only">Jump to…</span>
        <kbd aria-hidden="true" className="hidden rounded-tag border border-rule px-1 font-mono text-xs sm:inline">{isMac ? "⌘K" : "Ctrl K"}</kbd>
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Command menu"
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        className="mx-auto mt-24 w-11/12 max-w-lg overflow-hidden rounded-card border border-rule bg-surface p-0 text-ink shadow-lift backdrop:bg-ink/30 backdrop:backdrop-blur-sm open:animate-fade-in"
      >
        <div className="flex items-center gap-2.5 border-b border-rule px-4 transition-colors duration-fast focus-within:border-accent">
          <Search size={16} aria-hidden="true" className="shrink-0 text-muted" />
          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls={`${baseId}-list`}
            aria-activedescendant={results[active] ? optionId(active) : undefined}
            aria-autocomplete="list"
            aria-label="Search sections and links"
            placeholder="Jump to a section or open a link"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActive(0);
            }}
            onKeyDown={onInputKeyDown}
            className="h-12 w-full bg-transparent text-base outline-none placeholder:text-muted"
          />
          <kbd className="rounded-tag border border-rule px-1.5 font-mono text-xs text-muted">Esc</kbd>
        </div>

        <div id={`${baseId}-list`} role="listbox" aria-label="Results" className="max-h-96 overflow-y-auto p-2">
          {groups.map(({ group, items }) => (
            <div key={group} role="group" aria-labelledby={`${baseId}-${group}`}>
              <p id={`${baseId}-${group}`} className="px-2.5 pb-1 pt-2 font-mono text-label uppercase text-muted">
                {group}
              </p>
              {items.map(({ command, index }) => {
                const Icon = iconFor(command.link);
                const selected = index === active;
                return (
                  <div
                    key={command.link.href}
                    id={optionId(index)}
                    role="option"
                    aria-selected={selected}
                    onMouseMove={() => setActive(index)}
                    onClick={() => choose(command)}
                    className={`flex min-h-10 cursor-pointer items-center gap-3 rounded-control px-2.5 text-sm ${
                      selected ? "bg-accent-soft text-ink" : "text-ink"
                    }`}
                  >
                    <Icon size={15} aria-hidden="true" className={selected ? "text-accent" : "text-muted"} />
                    <span className="flex-1">{command.link.label}</span>
                    {selected && <CornerDownLeft size={14} aria-hidden="true" className="text-muted" />}
                  </div>
                );
              })}
            </div>
          ))}
          {results.length === 0 && <p className="px-2.5 py-6 text-center text-sm text-muted">No matches</p>}
        </div>
      </dialog>
    </>
  );
}
