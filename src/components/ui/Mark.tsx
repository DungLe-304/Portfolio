interface MarkProps {
  className?: string;
}

// Original site mark: three rising data points in a rounded frame.
export default function Mark({ className = "" }: MarkProps) {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" className={`h-5 w-5 ${className}`.trim()}>
      <rect x="1" y="1" width="16" height="16" rx="4" fill="none" stroke="currentColor" />
      <circle cx="5.75" cy="12.25" r="1.6" fill="currentColor" />
      <circle cx="9" cy="9" r="1.6" fill="currentColor" />
      <circle cx="12.25" cy="5.75" r="1.6" className="fill-accent" />
    </svg>
  );
}
