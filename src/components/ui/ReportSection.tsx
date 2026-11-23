import type { ReactNode } from "react";

interface ReportSectionProps {
  id: string;
  label: string;
  aside?: string;
  title?: string;
  children: ReactNode;
}

export default function ReportSection({ id, label, aside, title, children }: ReportSectionProps) {
  const headingId = `${id}-heading`;
  const labelClass = "font-semibold";

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="mx-auto w-full max-w-[1320px] px-5 py-14 sm:px-8 md:py-20 lg:px-14"
    >
      <div className="flex items-baseline justify-between gap-4 border-b border-t-[3px] border-b-rule border-t-ink py-2.5 text-xs uppercase tracking-[0.08em]">
        {title ? (
          <p className={labelClass}>{label}</p>
        ) : (
          <h2 id={headingId} className={labelClass}>
            {label}
          </h2>
        )}
        {aside && <span className="text-right font-semibold">{aside}</span>}
      </div>
      {title && (
        <h2
          id={headingId}
          className="mt-7 max-w-[15em] font-display text-[2.125rem] font-normal leading-[1.02] tracking-[-0.03em] md:text-5xl lg:text-[4rem]"
        >
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
