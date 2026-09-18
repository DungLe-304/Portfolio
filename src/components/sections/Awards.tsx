"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { awards, type Award } from "@/data/awards";
import CertificateModal from "@/components/modals/CertificateModal";
import CompetitionModal from "@/components/modals/CompetitionModal";

// Certifications have their own section
const honors = awards.filter((a) => a.category !== "certification");

export default function Awards() {
  const [certModal, setCertModal] = useState({ isOpen: false, title: "", issuer: "", certificateUrl: "" });
  const [competitionModal, setCompetitionModal] = useState<{ isOpen: boolean; award: Award | null }>({ isOpen: false, award: null });

  const openAward = (award: Award) => {
    if (award.certificateUrl) {
      setCertModal({ isOpen: true, title: award.title, issuer: award.issuer, certificateUrl: award.certificateUrl });
    } else if (award.gallery) {
      setCompetitionModal({ isOpen: true, award });
    }
  };

  return (
    <Section
      id="awards"
      bg="alt"
      title="Honors & Awards"
      lead="Select an entry to view the certificate or gallery."
    >
      <div className="grid gap-x-12 sm:grid-cols-2">
        {honors.map((award, i) => {
          const actionLabel = award.certificateUrl
            ? "View certificate"
            : award.gallery
              ? "View gallery & pitch deck"
              : null;

          return (
            <Reveal key={award.id} delay={i * 0.05}>
              <article className="border-t border-line py-6">
                <h3 className="font-semibold">{award.title}</h3>
                <p className="mt-1 text-sm text-ink-secondary">
                  {award.issuer} · {award.date}
                </p>
                {award.description && (
                  <p className="mt-3 text-base leading-relaxed text-ink-secondary">{award.description}</p>
                )}
                {actionLabel && (
                  <button
                    onClick={() => openAward(award)}
                    className="mt-4 text-sm font-medium text-accent hover:underline"
                  >
                    {actionLabel} ›
                  </button>
                )}
              </article>
            </Reveal>
          );
        })}
      </div>

      <CertificateModal
        isOpen={certModal.isOpen}
        onClose={() => setCertModal((p) => ({ ...p, isOpen: false }))}
        title={certModal.title}
        issuer={certModal.issuer}
        certificateUrl={certModal.certificateUrl}
      />
      {competitionModal.award && (
        <CompetitionModal
          isOpen={competitionModal.isOpen}
          onClose={() => setCompetitionModal((p) => ({ ...p, isOpen: false }))}
          award={competitionModal.award}
        />
      )}
    </Section>
  );
}
