"use client";

import { useId, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";

export interface TabItem {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  items: TabItem[];
  label: string;
}

// ARIA tabs with arrow-key, Home, and End support. The server renders the final tabbed markup, so
// nothing shifts on hydration. Inactive panels are hidden only when the <html> element has the
// "js" class (set before first paint). Without JavaScript, and in print, every panel shows under
// its own label. See the tab rules in globals.css.
export default function Tabs({ items, label }: TabsProps) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = items.length - 1;
    const next =
      event.key === "ArrowRight" ? (index === last ? 0 : index + 1)
      : event.key === "ArrowLeft" ? (index === 0 ? last : index - 1)
      : event.key === "Home" ? 0
      : event.key === "End" ? last
      : null;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div data-tabs>
      <div role="tablist" aria-label={label} className="flex gap-1 border-b border-rule">
        {items.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.label}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${index}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${index}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={`relative -mb-px min-h-11 rounded-t-control px-3 text-sm font-medium transition-colors duration-fast after:absolute after:inset-x-2 after:bottom-0 after:h-0.5 after:rounded-full after:transition-colors after:duration-fast ${
                selected ? "text-ink after:bg-accent" : "text-muted after:bg-transparent hover:text-ink hover:after:bg-rule"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="pt-4">
        {items.map((item, index) => {
          const selected = index === active;
          return (
            <div
              key={item.label}
              role="tabpanel"
              id={`${baseId}-panel-${index}`}
              aria-labelledby={`${baseId}-tab-${index}`}
              tabIndex={selected ? 0 : -1}
              data-tab-panel
              data-inactive={selected ? undefined : ""}
              className="animate-fade-in"
            >
              <p data-tab-label className="mb-1.5 hidden font-mono text-label uppercase text-accent">
                {item.label}
              </p>
              {item.content}
            </div>
          );
        })}
      </div>
    </div>
  );
}
