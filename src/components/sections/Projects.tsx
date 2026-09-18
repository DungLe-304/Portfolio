import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-24 md:space-y-32">
        {projects.map((project, i) => (
          <Reveal key={project.id}>
            <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Image and text alternate sides on large screens */}
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-ground-alt ${
                  i % 2 === 1 ? "lg:order-last" : ""
                }`}
              >
                {project.imageUrl && (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-contain p-6"
                  />
                )}
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{project.title}</h3>
                <p className="mt-1 text-sm text-ink-secondary">{project.date}</p>
                <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-ink-secondary">
                  {project.description}
                </p>
                <p className="mt-5 text-sm text-ink-secondary">{project.techStack.join(" · ")}</p>
                <div className="mt-6 flex flex-wrap gap-6 text-sm font-medium">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {project.demoLabel ?? "View live demo"} ›
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      View on GitHub ›
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20 text-center">
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent hover:underline"
        >
          View more on GitHub ›
        </a>
      </Reveal>
    </Section>
  );
}
