import { ArrowUpRight } from "lucide-react";
import ReportSection from "@/components/ui/ReportSection";
import Reveal from "@/components/ui/Reveal";
import { resume } from "@/content/resume";

const displayValue = (href: string) => href.replace(/^mailto:/, "").replace(/^https:\/\/(www\.)?/, "");

export default function Contact() {
  const { availability, targetRoles, location, contact, contactHeading } = resume;

  return (
    <ReportSection index="08" id="contact" label="Contact" title={contactHeading}>
      <Reveal className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
        <p className="max-w-[30em] text-lg leading-relaxed text-muted">
          {availability}: {targetRoles.join(", ")}.
          <br />
          {location}
        </p>
        <ul className="border-t border-rule">
          {contact.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <li key={link.href} className="border-b border-rule">
                <a
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex min-h-16 items-center justify-between gap-4 py-3 transition-colors hover:text-accent"
                >
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                      {link.label}
                    </span>
                    <span className="mt-0.5 block font-display text-xl [overflow-wrap:anywhere] md:text-2xl">
                      {displayValue(link.href)}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </ReportSection>
  );
}
