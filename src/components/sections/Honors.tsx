import ImageDialog from "@/components/ui/ImageDialog";
import ReportSection from "@/components/ui/ReportSection";
import Reveal from "@/components/ui/Reveal";
import TextLink from "@/components/ui/TextLink";
import { resume } from "@/content/resume";

export default function Honors() {
  return (
    <ReportSection index="06" id="honors" label="Honors & Certifications">
      <Reveal>
        {resume.honors.map((honor) => (
          <article
            key={honor.title}
            className="grid gap-2 border-b border-rule py-6 md:grid-cols-[232px_minmax(0,1fr)] md:gap-0 lg:grid-cols-[232px_minmax(0,1fr)_auto]"
          >
            <p className="font-mono text-[13px] leading-6 text-muted md:pt-1">{honor.date}</p>
            <div>
              <h3 className="font-display text-2xl font-normal leading-tight tracking-[-0.015em]">{honor.title}</h3>
              <p className="mt-1 text-[15px] font-medium text-muted">{honor.issuer}</p>
              {honor.detail && <p className="mt-2 max-w-[60ch] text-base leading-relaxed">{honor.detail}</p>}
            </div>
            <ul className="flex flex-wrap gap-x-4 text-[15px] font-medium md:col-start-2 lg:col-start-3 lg:justify-end lg:pl-8">
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
        ))}
      </Reveal>
    </ReportSection>
  );
}
