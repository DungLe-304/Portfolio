import ReportSection from "@/components/ui/ReportSection";
import { resume } from "@/content/resume";

interface EducationProps {
  className?: string;
}

export default function Education({ className = "" }: EducationProps) {
  const { school, degree, gpa, period, location } = resume.education;

  return (
    <ReportSection index="07" id="education" label="Education" variant="cell" className={className}>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs text-muted">{period}</p>
          <h3 className="mt-1.5 text-lg font-medium leading-snug">{school}</h3>
          <p className="mt-0.5 text-base">{degree}</p>
          <p className="mt-0.5 text-sm text-muted">{location}</p>
        </div>
        <dl className="flex flex-col rounded-control border border-rule bg-paper px-4 py-3">
          <dt className="font-mono text-label uppercase text-muted">GPA</dt>
          <dd className="order-first font-mono text-3xl tracking-tight tabular-nums">{gpa}</dd>
        </dl>
      </div>
    </ReportSection>
  );
}
