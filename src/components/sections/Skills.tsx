import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" bg="alt" title="Skills" lead="Technologies I use daily.">
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.category} delay={i * 0.05}>
            <h3 className="mb-4 text-sm font-semibold">{cat.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <li key={skill} className="rounded-full bg-white px-3 py-1 text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
