import ReportSection from "@/components/ui/ReportSection";
import Reveal from "@/components/ui/Reveal";
import { resume } from "@/content/resume";

export default function Leadership() {
  return (
    <ReportSection id="leadership" label="Leadership">
      <div className="grid md:grid-cols-2 md:gap-x-12">
        {resume.leadership.map((role, index) => (
          <Reveal key={role.title} delay={index * 0.06}>
            <article className="h-full border-b border-rule py-7 md:border-b-0">
              <p className="font-mono text-[13px] text-muted">{role.period}</p>
              <h3 className="mt-2 font-display text-2xl font-normal leading-tight tracking-[-0.015em] md:text-[1.875rem]">
                {role.title}
              </h3>
              <p className="mt-1 text-[15px] font-medium text-muted">{role.org}</p>
              {role.bullets.map((bullet) => (
                <p key={bullet} className="mt-4 max-w-[58ch] text-base leading-relaxed">
                  {bullet}
                </p>
              ))}
            </article>
          </Reveal>
        ))}
      </div>
    </ReportSection>
  );
}
