import ReportSection from "@/components/ui/ReportSection";
import Reveal from "@/components/ui/Reveal";
import SectionGlyph from "@/components/ui/SectionGlyph";
import SkillGrid from "@/components/ui/SkillGrid";
import type { SkillUse } from "@/components/ui/SkillGrid";
import { resume } from "@/content/resume";

// Maps each skill to the projects whose stack lists it by exact name. No fuzzy matching,
// so a skill links only where the resume itself pairs them.
function buildUsage(): Record<string, SkillUse[]> {
  const projects = [...resume.projects, ...resume.moreProjects];
  const usage: Record<string, SkillUse[]> = {};
  for (const group of resume.skills) {
    for (const skill of group.items) {
      const uses = projects.filter((project) => project.stack.includes(skill));
      if (uses.length > 0) usage[skill] = uses.map(({ slug, title }) => ({ slug, title }));
    }
  }
  return usage;
}

export default function Skills() {
  return (
    <ReportSection index="04" id="skills" label="Skills" glyph={<SectionGlyph name="nodes" />}>
      <Reveal>
        <SkillGrid groups={resume.skills} usage={buildUsage()} />
      </Reveal>
    </ReportSection>
  );
}
