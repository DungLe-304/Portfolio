import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import BarChart from "@/components/ui/BarChart";
import ReportSection from "@/components/ui/ReportSection";
import Reveal from "@/components/ui/Reveal";
import SectionGlyph from "@/components/ui/SectionGlyph";
import Tabs from "@/components/ui/Tabs";
import type { Project } from "@/content/resume";
import { resume } from "@/content/resume";

interface ProjectPartProps {
  project: Project;
}

function ProjectLinks({ project }: ProjectPartProps) {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm font-medium">
      {project.links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex min-h-11 items-center gap-1 text-accent"
          >
            <span className="link-grow">{link.label}</span>
            <ArrowUpRight
              size={15}
              aria-hidden="true"
              className="transition-transform duration-fast group-hover/link:-translate-y-px group-hover/link:translate-x-px"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

function StackTags({ project }: ProjectPartProps) {
  return (
    <ul aria-label="Stack" className="flex flex-wrap gap-1.5">
      {project.stack.map((item) => (
        <li key={item} className="rounded-tag border border-rule bg-paper px-2 py-0.5 font-mono text-xs leading-5">
          {item}
        </li>
      ))}
    </ul>
  );
}

function KeyResultStrip({ project }: ProjectPartProps) {
  if (!project.keyResults) return null;
  const { figures, note } = project.keyResults;

  return (
    <figure className="mt-5">
      <dl className="grid divide-y divide-rule overflow-hidden rounded-control border border-rule sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {figures.map((figure) => (
          <div key={figure.value} className="flex flex-col px-3.5 py-3">
            <dt className="text-xs text-muted">{figure.label}</dt>
            <dd className="order-first font-mono text-xl font-medium tabular-nums tracking-tight">{figure.value}</dd>
          </div>
        ))}
      </dl>
      <figcaption className="mt-2 font-mono text-xs text-muted">{note}</figcaption>
    </figure>
  );
}

function FeatureCard({ project }: ProjectPartProps) {
  const tabs = [
    { label: "Problem", content: <p>{project.problem}</p> },
    { label: "Approach", content: <p>{project.approach}</p> },
    {
      label: "Results",
      content: (
        <ul className="list-disc space-y-2 pl-5 marker:text-accent">
          {project.results.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <article
      id={project.slug}
      aria-labelledby={`${project.slug}-title`}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-rule bg-surface transition duration-slow hover:-translate-y-1 hover:border-accent hover:shadow-lift"
    >
      {project.image && (
        <div className="aspect-cover overflow-hidden border-b border-rule bg-paper">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(min-width: 1200px) 580px, (min-width: 1024px) 48vw, 92vw"
            className="h-full w-full object-cover object-left-top transition-transform duration-500 ease-out-soft group-hover:scale-102"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-cell">
        <p className="font-mono text-xs text-muted">
          {project.context ? `${project.context} · ` : ""}
          {project.date}
        </p>
        <h3 id={`${project.slug}-title`} className="mt-2 font-display text-card-title font-normal">
          {project.title}
        </h3>

        <KeyResultStrip project={project} />
        {project.chart && <BarChart data={project.chart} />}

        <div className="mt-6 text-base leading-relaxed">
          <Tabs items={tabs} label={`${project.title} case study`} />
        </div>

        <div className="mt-auto grid gap-3 pt-6">
          <StackTags project={project} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

function CompactProject({ project }: ProjectPartProps) {
  return (
    <article
      id={project.slug}
      aria-labelledby={`${project.slug}-title`}
      className="group grid overflow-hidden rounded-card border border-rule bg-surface transition duration-slow hover:border-accent lg:grid-cols-[minmax(0,1fr)_20rem]"
    >
      <div className="p-cell">
        <p className="font-mono text-xs text-muted">{project.date}</p>
        <h4 id={`${project.slug}-title`} className="mt-1.5 text-item-title font-medium">
          {project.title}
        </h4>
        <p className="mt-3 max-w-prose text-base leading-relaxed">{project.approach}</p>
        <ul className="mt-3 max-w-prose list-disc space-y-1.5 pl-5 text-base leading-relaxed marker:text-accent">
          {project.results.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>
        <div className="mt-5 grid gap-3">
          <StackTags project={project} />
          <ProjectLinks project={project} />
        </div>
      </div>
      {project.image && (
        <div className="border-t border-rule bg-paper p-3 lg:border-l lg:border-t-0">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(min-width: 1024px) 320px, 92vw"
            className="h-auto w-full rounded-control"
          />
        </div>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <ReportSection index="03" id="projects" label="Projects" aside="Case studies" glyph={<SectionGlyph name="path" />}>
      <div className="grid gap-4 lg:grid-cols-2">
        {resume.projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.06} className="h-full">
            <FeatureCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <h3 className="mb-4 flex items-center gap-3 font-mono text-label uppercase text-muted">
          More projects
          <span aria-hidden="true" className="h-px flex-1 bg-rule" />
        </h3>
        {resume.moreProjects.map((project) => (
          <CompactProject key={project.slug} project={project} />
        ))}
      </Reveal>
    </ReportSection>
  );
}
