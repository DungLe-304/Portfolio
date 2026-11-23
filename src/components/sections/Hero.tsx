import Image from "next/image";
import TextLink from "@/components/ui/TextLink";
import { resume } from "@/content/resume";

export default function Hero() {
  const { name, alias, headline, availability, targetRoles, location, actions, portrait } = resume;
  const [school, internship] = headline;

  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto w-full max-w-[1320px] px-5 pb-6 pt-9 sm:px-8 md:pb-8 md:pt-16 lg:px-14"
    >
      <h1
        id="hero-heading"
        className="whitespace-nowrap font-display text-[clamp(4.25rem,15.2vw,13.5rem)] font-normal leading-[0.88] tracking-[-0.045em]"
      >
        {name}
      </h1>
      <p className="mt-4 font-display text-xl italic text-muted lg:text-3xl">a.k.a. {alias}</p>

      <div className="mt-8 grid gap-7 md:mt-12 md:grid-cols-[120px_1fr] md:gap-9 lg:grid-cols-[140px_1fr_300px]">
        <Image
          src={portrait.src}
          alt={portrait.alt}
          width={portrait.width}
          height={portrait.height}
          priority
          sizes="(min-width: 1024px) 140px, 120px"
          className="aspect-[4/5] w-28 object-cover object-top grayscale sepia-[.18] md:w-full"
        />
        <p className="max-w-[21em] font-display text-[1.6rem] leading-[1.14] tracking-[-0.015em] lg:text-[2.5rem]">
          {school}. <em className="text-accent">{internship}.</em>
        </p>
        <div className="grid content-start gap-3 text-[15px] text-muted md:col-start-2 lg:col-start-3">
          <p>
            {availability}: {targetRoles.join(", ")}.
            <br />
            {location}
          </p>
          <ul className="flex flex-wrap gap-x-4 font-medium text-ink">
            {actions.map((action, index) => (
              <li key={action.href}>
                <TextLink
                  link={action}
                  download={index === 0 ? "DungLe_Resume.pdf" : undefined}
                  className={index === 0 ? "text-accent" : ""}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
