import ReportSection from "@/components/ui/ReportSection";
import Reveal from "@/components/ui/Reveal";
import { resume } from "@/content/resume";

export default function Education() {
  const { school, degree, gpa, period, location } = resume.education;

  return (
    <ReportSection id="education" label="Education">
      <Reveal>
        <div className="grid gap-2 border-b border-rule py-6 md:grid-cols-[232px_minmax(0,1fr)] md:gap-0 lg:grid-cols-[232px_minmax(0,1fr)_auto]">
          <p className="font-mono text-[13px] leading-6 text-muted md:pt-1">{period}</p>
          <div>
            <h3 className="font-display text-2xl font-normal leading-tight tracking-[-0.015em] md:text-[1.875rem]">
              {school}
            </h3>
            <p className="mt-1 text-base">{degree}</p>
            <p className="mt-1 text-[15px] text-muted">{location}</p>
          </div>
          <dl className="mt-3 md:col-start-2 lg:col-start-3 lg:mt-0 lg:pl-8 lg:text-right">
            <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">GPA</dt>
            <dd className="mt-1 font-mono text-2xl tracking-[-0.03em]">{gpa}</dd>
          </dl>
        </div>
      </Reveal>
    </ReportSection>
  );
}
