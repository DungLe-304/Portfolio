"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { awards, type Award } from "@/data/awards";
import CertificateModal from "@/components/modals/CertificateModal";

const certifications = awards.filter((a) => a.category === "certification");

export default function Certifications() {
  const [active, setActive] = useState<Award | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = (cert: Award) => {
    setActive(cert);
    setIsOpen(true);
  };

  return (
    <Section
      id="certifications"
      title="Certifications"
      lead="Programs and courses I have completed or been selected for."
    >
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.id} delay={i * 0.05}>
            <article className="group">
              <button
                type="button"
                onClick={() => open(cert)}
                aria-label={`View ${cert.title}`}
                className="relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-ground-alt"
              >
                {cert.thumbnailUrl ? (
                  <Image
                    src={cert.thumbnailUrl}
                    alt={cert.certificateAlt ?? cert.title}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-sm text-ink-secondary">
                    {cert.issuer}
                  </span>
                )}
              </button>
              <h3 className="mt-5 font-semibold">{cert.title}</h3>
              <p className="mt-1 text-sm text-ink-secondary">
                {cert.issuer} · {cert.date}
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink-secondary">{cert.description}</p>
              <button
                type="button"
                onClick={() => open(cert)}
                className="mt-4 text-sm font-medium text-accent hover:underline"
              >
                View ›
              </button>
            </article>
          </Reveal>
        ))}
      </div>

      {active && (
        <CertificateModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={active.title}
          issuer={active.issuer}
          certificateUrl={active.certificateUrl ?? ""}
          alt={active.certificateAlt}
        />
      )}
    </Section>
  );
}
