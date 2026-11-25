import { ArrowUpRight } from "lucide-react";
import ReportSection from "@/components/ui/ReportSection";
import { resume } from "@/content/resume";

interface ContactProps {
  className?: string;
}

const displayValue = (href: string) => href.replace(/^mailto:/, "").replace(/^https:\/\/(www\.)?/, "");

export default function Contact({ className = "" }: ContactProps) {
  const { availability, targetRoles, location, contact, contactHeading } = resume;

  return (
    <ReportSection
      index="08"
      id="contact"
      label="Contact"
      title={contactHeading}
      variant="cell"
      tone="accent"
      className={className}
    >
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <p className="max-w-prose text-lg leading-relaxed text-muted">
          {availability}: {targetRoles.join(", ")}.
          <br />
          {location}
        </p>
        <ul className="divide-y divide-ink/15 border-y border-ink/15">
          {contact.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex min-h-16 items-center justify-between gap-4 py-3 transition-colors duration-fast hover:text-accent"
                >
                  <span className="min-w-0">
                    <span className="block font-mono text-label uppercase text-muted">{link.label}</span>
                    <span className="mt-0.5 block font-display text-xl [overflow-wrap:anywhere] md:text-2xl">
                      {displayValue(link.href)}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 transition-transform duration-fast group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </ReportSection>
  );
}
