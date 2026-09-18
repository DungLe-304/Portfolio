import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { about } from "@/data/site";
import { education } from "@/data/education";
import { experience } from "@/data/experience";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-16 md:grid-cols-5">
        {/* Bio */}
        <Reveal className="md:col-span-2">
          <div className="space-y-5 text-lg leading-relaxed text-ink-secondary">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 space-y-2 text-sm text-ink-secondary">
            {about.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </Reveal>

        {/* Education + experience */}
        <div className="space-y-14 md:col-span-3">
          <Reveal delay={0.1}>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-ink-secondary">
              Education
            </h3>
            {education.map((edu) => (
              <div key={edu.degree} className="border-t border-line py-5">
                <p className="font-semibold">{edu.degree}</p>
                <p className="text-ink-secondary">{edu.school}</p>
                <p className="mt-1 text-sm text-ink-secondary">
                  {edu.location} · {edu.period} · GPA {edu.gpa}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.15}>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-ink-secondary">
              Experience
            </h3>
            {experience.map((exp) => (
              <div key={exp.role + exp.org} className="border-t border-line py-5">
                <p className="font-semibold">{exp.role}</p>
                <p className="text-ink-secondary">
                  {exp.org} · {exp.period}
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-ink-secondary">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
