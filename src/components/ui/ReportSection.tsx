import type { ReactNode } from "react";

interface ReportSectionProps {
  id: string;
  index: string;
  label: string;
  aside?: string;
  title?: string;
  glyph?: ReactNode;
  variant?: "page" | "cell";
  tone?: "surface" | "accent";
  className?: string;
  children: ReactNode;
}

// Section shell: a mono index kicker, a serif heading, and an optional line glyph on the right.
// "page" is a full-width section; "cell" is a compact card that sits in a shared grid.
export default function ReportSection({
  id,
  index,
  label,
  aside,
  title,
  glyph,
  variant = "page",
  tone = "surface",
  className = "",
  children,
}: ReportSectionProps) {
  const headingId = `${id}-heading`;
  const kicker = title ? label : aside;
  const isCell = variant === "cell";

  const shell = isCell
    ? `rounded-card border border-rule p-cell ${tone === "accent" ? "bg-accent-soft" : "bg-surface"}`
    : "mx-auto w-full max-w-page px-5 py-section-sm sm:px-8 md:py-section";

  return (
    <section id={id} aria-labelledby={headingId} className={`${shell} ${className}`.trim()}>
      <div className={`flex items-end justify-between gap-6 ${isCell ? "mb-5" : "mb-8 md:mb-10"}`}>
        <div>
          <p className="flex items-center gap-3 font-mono text-label uppercase text-muted">
            <span className="text-accent">{index}</span>
            <span aria-hidden="true" className="h-px w-6 bg-rule" />
            {kicker && <span>{kicker}</span>}
          </p>
          <h2 id={headingId} className={`mt-3 font-display font-normal ${isCell ? "text-card-title" : "text-title"}`}>
            {title ?? label}
          </h2>
        </div>
        {glyph && (
          <div aria-hidden="true" className="hidden shrink-0 text-accent sm:block">
            {glyph}
          </div>
        )}
      </div>
      {children}
    </section>
  );
}
