import { Plus } from "lucide-react";
import ReportSection from "@/components/ui/ReportSection";
import Reveal from "@/components/ui/Reveal";
import SectionGlyph from "@/components/ui/SectionGlyph";
import type { Role } from "@/content/resume";
import { resume } from "@/content/resume";

interface RoleHeaderProps {
  role: Role;
}

function RoleHeader({ role }: RoleHeaderProps) {
  return (
    <>
      <p className="font-mono text-sm text-muted md:hidden">{role.period}</p>
      <h3 className="text-item-title font-medium">{role.title}</h3>
      <p className="mt-0.5 text-sm font-medium text-muted">{role.org}</p>
    </>
  );
}

interface RoleCardProps {
  role: Role;
  defaultOpen: boolean;
}

// Roles with several bullets collapse to their first bullet, using native <details> so the
// accordion works with the keyboard and without JavaScript. Single-bullet roles stay static.
function RoleCard({ role, defaultOpen }: RoleCardProps) {
  const [first, ...rest] = role.bullets;
  const cardClass = "rounded-card border border-rule bg-surface";

  if (rest.length === 0) {
    return (
      <div className={`${cardClass} p-5`}>
        <RoleHeader role={role} />
        <p className="mt-3 max-w-prose text-base leading-relaxed">{first}</p>
      </div>
    );
  }

  return (
    <details
      open={defaultOpen}
      className={`group ${cardClass} transition-colors duration-slow hover:border-accent/60 open:border-ink/25`}
    >
      <summary className="block cursor-pointer list-none rounded-card p-5 [&::-webkit-details-marker]:hidden">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <RoleHeader role={role} />
          </div>
          <span className="mt-0.5 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-rule bg-paper py-1 pl-2.5 pr-2 font-mono text-label text-muted transition-colors duration-fast group-hover:border-accent group-hover:text-accent">
            <span className="group-open:hidden">+{rest.length} more</span>
            <span className="hidden group-open:inline">Less</span>
            <Plus size={14} aria-hidden="true" className="transition-transform duration-slow group-open:rotate-45" />
          </span>
        </div>
        <p className="mt-3 line-clamp-2 max-w-prose text-base leading-relaxed group-open:line-clamp-none">{first}</p>
      </summary>
      <ul className="max-w-prose list-disc space-y-3 px-5 pb-5 pl-10 text-base leading-relaxed marker:text-accent">
        {rest.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </details>
  );
}

export default function Experience() {
  return (
    <ReportSection index="02" id="experience" label="Experience" glyph={<SectionGlyph name="timeline" />}>
      <ol>
        {resume.experience.map((role, index) => (
          <li key={`${role.title}-${role.org}`} className="md:grid md:grid-cols-[14rem_minmax(0,1fr)] md:gap-x-8">
            <div className="relative hidden border-r border-rule pt-6 md:block">
              <p className="font-mono text-sm text-muted">{role.period}</p>
              <span aria-hidden="true" className="absolute -right-1.5 top-7 h-3 w-3 rounded-full border-2 border-paper bg-accent" />
            </div>
            <Reveal delay={index * 0.05} className={index < resume.experience.length - 1 ? "pb-3" : ""}>
              <RoleCard role={role} defaultOpen={index === 0} />
            </Reveal>
          </li>
        ))}
      </ol>
    </ReportSection>
  );
}
