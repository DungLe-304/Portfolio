import ReportSection from "@/components/ui/ReportSection";
import Reveal from "@/components/ui/Reveal";
import { resume } from "@/content/resume";

export default function Skills() {
  return (
    <ReportSection index="04" id="skills" label="Skills">
      <Reveal>
        {resume.skills.map((group) => (
          <div
            key={group.name}
            className="grid gap-3 border-b border-rule py-5 md:grid-cols-[232px_1fr] md:items-baseline md:gap-0 md:py-6"
          >
            <h3 className="font-display text-xl font-normal tracking-[-0.01em] md:text-2xl">{group.name}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="border border-rule bg-surface px-2.5 py-1 font-mono text-[13px] leading-5">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </ReportSection>
  );
}
