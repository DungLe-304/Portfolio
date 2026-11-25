import type { ReactNode } from "react";

// Small original line drawings for section headers. Decorative only: they show no data.
type GlyphName = "chart" | "timeline" | "path" | "nodes" | "laurel";

interface SectionGlyphProps {
  name: GlyphName;
}

const drawings: Record<GlyphName, ReactNode> = {
  chart: (
    <>
      <path d="M3 44h70" />
      <path d="M10 44V32M22 44V24M34 44V34M46 44V18M58 44V28" opacity=".5" />
      <path d="M6 36c10-4 16-14 26-13s14 9 22 3 12-16 16-22" />
      <circle cx="70" cy="4" r="2.2" fill="currentColor" />
    </>
  ),
  timeline: (
    <>
      <path d="M4 24h68" opacity=".5" />
      <circle cx="12" cy="24" r="3.5" />
      <circle cx="32" cy="24" r="3.5" />
      <circle cx="52" cy="24" r="3.5" />
      <circle cx="70" cy="24" r="3.5" fill="currentColor" />
      <path d="M12 16v-8M32 32v8M52 16v-8" opacity=".5" />
    </>
  ),
  path: (
    <>
      <path d="M6 42 28 14l18 16 24-24" />
      <circle cx="28" cy="14" r="3" />
      <circle cx="46" cy="30" r="3" />
      <circle cx="70" cy="6" r="3" fill="currentColor" />
      <path d="M4 46h68" opacity=".5" />
    </>
  ),
  nodes: (
    <>
      <path d="M14 34 34 12l22 10 14 18M14 34l20 8 22-20M34 42l36-2" opacity=".5" />
      <circle cx="14" cy="34" r="3" />
      <circle cx="34" cy="12" r="3" />
      <circle cx="56" cy="22" r="3" fill="currentColor" />
      <circle cx="34" cy="42" r="3" />
      <circle cx="70" cy="40" r="3" />
    </>
  ),
  laurel: (
    <>
      <path d="M38 44V22" />
      <path d="M38 40c-8-1-14-7-16-16M38 32c-6-1-10-5-12-11M38 40c8-1 14-7 16-16M38 32c6-1 10-5 12-11" opacity=".6" />
      <circle cx="38" cy="14" r="6" />
      <path d="M38 11v6M35 14h6" />
    </>
  ),
};

export default function SectionGlyph({ name }: SectionGlyphProps) {
  return (
    <svg
      viewBox="0 0 76 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-12 w-20"
    >
      {drawings[name]}
    </svg>
  );
}
