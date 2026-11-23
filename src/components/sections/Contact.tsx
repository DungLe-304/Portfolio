import { Mail, ExternalLink } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { site, contact } from "@/data/site";

const links = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "GitHub", value: site.github.replace(/^https?:\/\//, ""), href: site.github, icon: ExternalLink },
  { label: "LinkedIn", value: site.linkedin.replace(/^https?:\/\//, ""), href: site.linkedin, icon: ExternalLink },
];

export default function Contact() {
  return (
    <Section id="contact" bg="ink" title="Let's connect." lead={contact.lead}>
      <Reveal className="max-w-2xl">
        <ul className="divide-y divide-white/15 border-t border-white/15">
          {links.map(({ label, value, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 py-5 transition-opacity hover:opacity-70"
              >
                <Icon size={18} className="text-white/60" />
                <div className="min-w-0">
                  <p className="text-xs text-white/50">{label}</p>
                  <p className="truncate text-base font-medium">{value}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
