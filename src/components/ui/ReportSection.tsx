import type { ReactNode } from "react";

interface ReportSectionProps {
  id: string;
  index: string;
  label: string;
  aside?: string;
  title?: string;
  glyph?: ReactNode;
  className?: string;
  children: ReactNode;
}

// Section shell: a mono index kicker, a serif heading, and an optional line glyph on the right.
export default function ReportSection({ id, index, label, aside, title, glyph, className = "", children }: ReportSectionProps) {
  const headingId = `${id}-heading`;
  const kicker = title ? label : aside;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`mx-auto w-full max-w-page px-5 py-section-sm sm:px-8 md:py-section ${className}`.trim()}
    >
      <div className="mb-8 flex items-end justify-between gap-6 md:mb-10">
        <div>
          <p className="flex items-center gap-3 font-mono text-label uppercase text-muted">
            <span className="text-accent">{index}</span>
            <span aria-hidden="true" className="h-px w-6 bg-rule" />
            {kicker && <span>{kicker}</span>}
          </p>
          <h2 id={headingId} className="mt-3 font-display text-title font-normal">
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
