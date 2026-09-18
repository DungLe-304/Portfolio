import type { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

const backgrounds = {
  ground: "bg-ground text-ink",
  alt: "bg-ground-alt text-ink",
  ink: "bg-ink text-white",
} as const;

interface SectionProps {
  id: string;
  title: string;
  lead?: string;
  bg?: keyof typeof backgrounds;
  children: ReactNode;
}

export default function Section({ id, title, lead, bg = "ground", children }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${backgrounds[bg]}`}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mb-14 md:mb-20">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">{title}</h2>
          {lead && <p className="mt-4 max-w-2xl text-lg opacity-70 md:text-xl">{lead}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
