"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Award, BookOpen, Star, ExternalLink, type LucideIcon } from "lucide-react";
import { awards, type Award as AwardType } from "@/data/awards";
import CertificateModal from "@/components/CertificateModal";
import CompetitionModal from "@/components/CompetitionModal";

const categoryConfig: Record<
  AwardType["category"],
  {
    icon: LucideIcon;
    accent: string;       // text + border color
    glow: string;         // glow shadow
    bg: string;           // icon bg
  }
> = {
  competition: {
    icon: Trophy,
    accent: "text-amber-400 border-amber-400/25",
    glow: "hover:shadow-[0_0_24px_rgba(251,191,36,0.15)] hover:border-amber-400/40",
    bg: "bg-amber-400/10",
  },
  scholarship: {
    icon: Star,
    accent: "text-violet-400 border-violet-400/25",
    glow: "hover:shadow-[0_0_24px_rgba(167,139,250,0.15)] hover:border-violet-400/40",
    bg: "bg-violet-400/10",
  },
  certification: {
    icon: BookOpen,
    accent: "text-sky-400 border-sky-400/25",
    glow: "hover:shadow-[0_0_24px_rgba(56,189,248,0.15)] hover:border-sky-400/40",
    bg: "bg-sky-400/10",
  },
  recognition: {
    icon: Award,
    accent: "text-emerald-400 border-emerald-400/25",
    glow: "hover:shadow-[0_0_24px_rgba(52,211,153,0.15)] hover:border-emerald-400/40",
    bg: "bg-emerald-400/10",
  },
};

export default function Awards() {
  const [certModal, setCertModal] = useState({ isOpen: false, title: "", issuer: "", certificateUrl: "" });
  const [competitionModal, setCompetitionModal] = useState<{ isOpen: boolean; award: AwardType | null }>({ isOpen: false, award: null });

  const handleCardClick = (award: AwardType) => {
    if (award.certificateUrl) {
      setCertModal({ isOpen: true, title: award.title, issuer: award.issuer, certificateUrl: award.certificateUrl });
    } else if (award.gallery) {
      setCompetitionModal({ isOpen: true, award });
    }
  };

  return (
    <section id="awards" className="py-28 px-4 sm:px-6 lg:px-8 section-secondary relative overflow-hidden">

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-amber-500/3 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* Section heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">/ recognition</p>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white">
            Honors & Awards
          </h2>
          <p className="text-slate-500 text-sm mt-2">Click on each card for more details.</p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {awards.map((award, index) => {
            const config = categoryConfig[award.category];
            const Icon = config.icon;
            const isClickable = Boolean(award.certificateUrl || award.gallery);
            const hintLabel = award.gallery ? "View Gallery & Pitch Deck" : award.certificateUrl ? "View Certificate" : null;

            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => isClickable && handleCardClick(award)}
                className={`
                  relative card-glass rounded-2xl p-5 flex flex-col border
                  transition-all duration-300
                  ${config.accent.split(" ")[1]}
                  ${config.glow}
                  ${isClickable ? "cursor-pointer group" : ""}
                `}
              >
                {/* Colored left accent bar */}
                <div className={`absolute left-0 top-6 bottom-6 w-0.5 rounded-full ${config.accent.split(" ")[0].replace("text-", "bg-")} opacity-60`} />

                <div className="flex items-start gap-4 flex-1 pl-3">
                  <div className={`flex-shrink-0 p-2.5 rounded-xl border ${config.accent.split(" ")[1]} ${config.bg}`}>
                    <Icon size={18} className={config.accent.split(" ")[0]} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-semibold text-white text-sm leading-snug">
                      {award.title}
                    </h3>
                    <p className={`text-xs mt-0.5 font-mono font-medium ${config.accent.split(" ")[0]}`}>
                      {award.issuer}
                    </p>
                    <p className="text-slate-600 text-xs mt-0.5 font-mono">{award.date}</p>
                    <p className="text-slate-500 text-xs mt-2.5 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>

                {hintLabel && (
                  <div className={`mt-4 pt-3 pl-3 border-t border-slate-800/60 flex items-center gap-1.5 text-xs font-medium transition-colors ${config.accent.split(" ")[0]} opacity-70 group-hover:opacity-100`}>
                    <ExternalLink size={11} />
                    {hintLabel}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
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
    </section>
  );
}
