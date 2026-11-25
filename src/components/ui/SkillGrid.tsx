"use client";

import { useState } from "react";
import type { SkillGroup } from "@/content/resume";

export interface SkillUse {
  slug: string;
  title: string;
}

interface SkillGridProps {
  groups: SkillGroup[];
  usage: Record<string, SkillUse[]>;
}

// Bento rhythm on a 12-column grid: wide and narrow cells alternate between rows.
const GROUP_SPANS = ["lg:col-span-5", "lg:col-span-7", "lg:col-span-7", "lg:col-span-5"];

// Skills that appear by exact name in a project's stack can be hovered, focused, or tapped to
// show those projects in the "Used in" cell. Other skills are plain tags.
export default function SkillGrid({ groups, usage }: SkillGridProps) {
  const [active, setActive] = useState<string | null>(null);
  const activeUses = active ? usage[active] ?? [] : [];

  return (
    <div className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-12">
      {groups.map((group, index) => (
        <div key={group.name} className={`rounded-card border border-rule bg-surface p-cell ${GROUP_SPANS[index] ?? ""}`}>
          <h3 className="font-mono text-label uppercase text-muted">{group.name}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => {
              const linked = (usage[item]?.length ?? 0) > 0;
              const base = "inline-flex min-h-8 items-center gap-1.5 rounded-tag border px-2.5 font-mono text-sm";
              return (
                <li key={item}>
                  {linked ? (
                    <button
                      type="button"
                      aria-controls="skill-usage"
                      onMouseEnter={() => setActive(item)}
                      onFocus={() => setActive(item)}
                      onClick={() => setActive(item)}
                      className={`${base} transition-colors duration-fast ${
                        active === item
                          ? "border-accent bg-accent-soft text-ink"
                          : "border-rule bg-paper hover:border-accent"
                      }`}
                    >
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {item}
                    </button>
                  ) : (
                    <span className={`${base} border-rule bg-paper`}>{item}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <div
        id="skill-usage"
        aria-live="polite"
        className="flex min-h-16 flex-wrap items-center gap-x-3 gap-y-1 rounded-card border border-dashed border-rule px-cell py-4 text-sm md:col-span-2 lg:col-span-12"
      >
        {active ? (
          <>
            <span className="font-mono text-label uppercase text-muted">{active} · used in</span>
            {activeUses.map((use, index) => (
              <span key={use.slug}>
                <a href={`#${use.slug}`} className="link-grow font-medium text-accent">
                  {use.title}
                </a>
                {index < activeUses.length - 1 && <span className="text-muted">,</span>}
              </span>
            ))}
          </>
        ) : (
          <span className="text-muted">
            <span aria-hidden="true" className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
            Skills with a dot appear in a project stack. Hover, focus, or tap one to see where.
          </span>
        )}
      </div>
    </div>
  );
}
