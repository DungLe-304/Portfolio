import Image from "next/image";
import type { ReactNode } from "react";
import BarChart from "@/components/ui/BarChart";
import ReportSection from "@/components/ui/ReportSection";
import Reveal from "@/components/ui/Reveal";
import TextLink from "@/components/ui/TextLink";
import type { Project } from "@/content/resume";
import { resume } from "@/content/resume";

interface CaseBlockProps {
  label: string;
  className?: string;
  children: ReactNode;
}

function CaseBlock({ label, className = "", children }: CaseBlockProps) {
  return (
    <div className={className}>
      <p data-case-label className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-accent">
        {label}
      </p>
      {children}
    </div>
  );
}

interface ProjectLinksProps {
  project: Project;
}

function ProjectLinks({ project }: ProjectLinksProps) {
  return (
    <ul className="flex flex-wrap gap-x-5 text-[15px] font-medium">
      {project.links.map((link) => (
        <li key={link.href}>
          <TextLink link={link} />
        </li>
      ))}
    </ul>
  );
}

interface CaseStudyProps {
  project: Project;
}

function CaseStudy({ project }: CaseStudyProps) {
  return (
    <Reveal>
      <article className="border-b border-rule py-10 md:py-14">
        <p className="font-mono text-[13px] text-muted">
          {project.context ? `${project.context} · ` : ""}
          {project.date}
        </p>
        <h3 className="mt-2 max-w-[18em] font-display text-[2.125rem] font-normal leading-[1.02] tracking-[-0.03em] md:text-5xl lg:text-[3.5rem]">
          {project.title}
        </h3>

        <div className="mt-8 grid gap-7 text-base leading-relaxed md:grid-cols-2 md:gap-9 lg:grid-cols-3">
          <CaseBlock label="Problem">
            <p>{project.problem}</p>
          </CaseBlock>
          <CaseBlock label="Approach">
            <p>{project.approach}</p>
          </CaseBlock>
          <CaseBlock label="Results" className="md:col-span-2 lg:col-span-1">
            <ul className="space-y-2">
              {project.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
            {project.chart && <BarChart data={project.chart} />}
          </CaseBlock>
        </div>

        <div className="mt-9 grid items-start gap-7 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-12">
          {project.image && (
            <div className="bg-surface p-2.5">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                sizes="(min-width: 1320px) 660px, (min-width: 1024px) 52vw, 92vw"
                className="h-auto w-full"
              />
            </div>
          )}
          <div>
            <CaseBlock label="Stack">
              <p className="font-mono text-[13px] leading-6 text-muted">{project.stack.join(" · ")}</p>
            </CaseBlock>
            <div className="mt-3">
              <ProjectLinks project={project} />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

interface CompactProjectProps {
  project: Project;
}

function CompactProject({ project }: CompactProjectProps) {
  return (
    <article className="mt-6 grid items-start gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,300px)] md:gap-10">
      <div>
        <p className="font-mono text-[13px] text-muted">{project.date}</p>
        <h4 className="mt-1.5 font-display text-2xl font-normal leading-tight tracking-[-0.015em] md:text-[1.875rem]">
          {project.title}
        </h4>
        <p className="mt-3 max-w-[70ch] text-base leading-relaxed">{project.approach}</p>
        <ul className="mt-3 max-w-[70ch] list-disc space-y-1.5 pl-4 text-base leading-relaxed marker:text-muted">
          {project.results.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
        <p className="mt-3 font-mono text-[13px] leading-6 text-muted">{project.stack.join(" · ")}</p>
        <div className="mt-1">
          <ProjectLinks project={project} />
        </div>
      </div>
      {project.image && (
        <div className="bg-surface p-2">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(min-width: 768px) 300px, 92vw"
            className="h-auto w-full"
          />
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <ReportSection index="03" id="projects" label="Projects" aside="Case studies">
      {resume.projects.map((project) => (
        <CaseStudy key={project.slug} project={project} />
      ))}
      <Reveal className="pt-10 md:pt-14">
        <h3 className="text-xs font-semibold uppercase tracking-[0.08em]">More projects</h3>
        {resume.moreProjects.map((project) => (
          <CompactProject key={project.slug} project={project} />
        ))}
      </Reveal>
    </ReportSection>
  );
}
