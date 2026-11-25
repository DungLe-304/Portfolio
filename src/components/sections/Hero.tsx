import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";
import { resume } from "@/content/resume";

export default function Hero() {
  const { name, alias, headline, availability, targetRoles, location, actions, portrait, education } = resume;
  const [school, internship] = headline;

  return (
    <section aria-labelledby="hero-heading" className="mx-auto w-full max-w-page px-5 pb-section-sm pt-10 sm:px-8 md:pt-20">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_16rem] md:items-end md:gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-rule bg-surface py-1.5 pl-2.5 pr-3.5 text-xs sm:text-sm">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-live ring-4 ring-live/20" />
            <span className="font-mono text-label uppercase text-muted">Currently</span>
            <span>{availability}</span>
          </p>

          <h1 id="hero-heading" className="mt-7 flex flex-wrap items-baseline gap-x-3 text-xl font-medium">
            {name}
            <span className="text-base font-normal text-muted">a.k.a. {alias}</span>
          </h1>

          <p className="mt-3 max-w-statement font-display text-hero">
            {school}. <em className="text-accent">{internship}.</em>
          </p>

          <dl className="mt-7 grid gap-1.5 text-base">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <dt className="font-mono text-label uppercase text-muted">Target roles</dt>
              <dd className="font-medium">{targetRoles.join(" · ")}</dd>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-3">
              <dt className="sr-only">Location</dt>
              <dd className="font-mono text-sm text-muted">{location}</dd>
            </div>
          </dl>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {actions.map((action) => (
              <li key={action.href}>
                <ButtonLink link={action} variant={action.download ? "primary" : "secondary"} />
              </li>
            ))}
          </ul>
        </div>

        <figure className="group w-44 rotate-1 rounded-card border border-rule bg-surface p-2 shadow-frame transition-transform duration-slow hover:rotate-0 md:w-full md:p-2.5">
          <Image
            src={portrait.src}
            alt={portrait.alt}
            width={portrait.width}
            height={portrait.height}
            preload
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 256px, 176px"
            className="aspect-portrait w-full rounded-control object-cover object-top saturate-soft sepia-warm"
          />
          <figcaption className="hidden px-1 pb-0.5 pt-2.5 font-mono text-label text-muted md:block">
            {education.school}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
