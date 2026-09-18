import Image from "next/image";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { site, hero } from "@/data/site";

const socials = [
  { href: site.github, icon: Github, label: "GitHub" },
  { href: site.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${site.email}`, icon: Mail, label: "Email" },
];

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-12">
      <Reveal className="flex max-w-3xl flex-col items-center text-center">
        <div className="relative mb-10 h-36 w-36 overflow-hidden rounded-full md:h-40 md:w-40">
          <Image
            src={site.avatarUrl}
            alt={site.name}
            fill
            priority
            sizes="160px"
            className="object-cover object-top"
          />
        </div>

        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">{site.name}</h1>
        <p className="mt-2 text-sm text-ink-secondary">Also known as {site.alias}</p>
        <p className="mt-5 text-2xl text-ink-secondary md:text-3xl">{hero.tagline}</p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-secondary md:text-xl">
          {hero.bio}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <a
            href={site.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            <Download size={16} />
            Download CV
          </a>
          <a href="#contact" className="text-sm font-medium text-accent hover:underline">
            Contact me ›
          </a>
        </div>

        <div className="mt-8 flex gap-1">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full p-2.5 text-ink-secondary transition-colors hover:text-ink"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
