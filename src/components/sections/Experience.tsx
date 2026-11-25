import ReportSection from "@/components/ui/ReportSection";
import Reveal from "@/components/ui/Reveal";
import { resume } from "@/content/resume";

export default function Experience() {
  return (
    <ReportSection index="02" id="experience" label="Experience">
      <ol className="mt-8 md:mt-10">
        {resume.experience.map((role) => (
          <li
            key={`${role.title}-${role.org}`}
            className="relative pb-10 pl-5 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-rule last:pb-0 md:pl-0 md:before:left-[232px]"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[3px] top-[7px] h-[7px] w-[7px] rounded-full bg-accent md:left-[229px]"
            />
            <Reveal className="grid gap-2 md:grid-cols-[200px_1fr] md:gap-8">
              <p className="font-mono text-[13px] leading-5 text-muted md:pt-0.5">{role.period}</p>
              <div className="md:pl-8">
                <h3 className="font-display text-2xl font-normal leading-tight tracking-[-0.015em] md:text-[1.875rem]">
                  {role.title}
                </h3>
                <p className="mt-1 text-[15px] font-medium text-muted">{role.org}</p>
                <ul className="mt-4 max-w-[70ch] list-disc space-y-2.5 pl-4 text-base leading-relaxed marker:text-muted">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </ReportSection>
  );
}
