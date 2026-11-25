import ImageDialog from "@/components/ui/ImageDialog";
import ReportSection from "@/components/ui/ReportSection";
import TextLink from "@/components/ui/TextLink";
import { resume } from "@/content/resume";

interface HonorsProps {
  className?: string;
}

export default function Honors({ className = "" }: HonorsProps) {
  return (
    <ReportSection index="06" id="honors" label="Honors & Certifications" variant="cell" className={className}>
      <ol className="divide-y divide-rule">
        {resume.honors.map((honor) => (
          <li key={honor.title} className="py-4 first:pt-0 last:pb-0">
            <article>
              <p className="font-mono text-xs text-muted">{honor.date}</p>
              <h3 className="mt-1.5 text-lg font-medium leading-snug">{honor.title}</h3>
              <p className="mt-0.5 text-sm font-medium text-muted">{honor.issuer}</p>
              {honor.detail && <p className="mt-2 text-base leading-relaxed">{honor.detail}</p>}
              <ul className="mt-1 flex flex-wrap gap-x-4 text-sm font-medium">
                {honor.image && honor.imageLabel && (
                  <li>
                    <ImageDialog image={honor.image} triggerLabel={honor.imageLabel} title={honor.title} />
                  </li>
                )}
                {honor.links.map((link) => (
                  <li key={link.href}>
                    <TextLink link={link} />
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </ReportSection>
  );
}
