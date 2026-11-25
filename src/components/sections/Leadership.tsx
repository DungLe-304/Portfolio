import ReportSection from "@/components/ui/ReportSection";
import { resume } from "@/content/resume";

interface LeadershipProps {
  className?: string;
}

export default function Leadership({ className = "" }: LeadershipProps) {
  return (
    <ReportSection index="05" id="leadership" label="Leadership" variant="cell" className={className}>
      <div className="grid gap-5 divide-y divide-rule md:grid-cols-2 md:gap-8 md:divide-y-0">
        {resume.leadership.map((role) => (
          <article key={role.title} className="pt-5 first:pt-0 md:pt-0">
            <p className="font-mono text-xs text-muted">{role.period}</p>
            <h3 className="mt-1.5 text-lg font-medium leading-snug">{role.title}</h3>
            <p className="mt-0.5 text-sm font-medium text-muted">{role.org}</p>
            {role.bullets.map((bullet) => (
              <p key={bullet} className="mt-3 text-base leading-relaxed">
                {bullet}
              </p>
            ))}
          </article>
        ))}
      </div>
    </ReportSection>
  );
}
