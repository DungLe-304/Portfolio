"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, FileText, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Award } from "@/data/awards";

interface CompetitionModalProps {
  isOpen: boolean;
  onClose: () => void;
  award: Award;
}

export default function CompetitionModal({
  isOpen,
  onClose,
  award,
}: CompetitionModalProps) {
  const [activeImage, setActiveImage] = useState(0);
  const gallery = award.gallery;
  const images = gallery?.images ?? [];

  // Reset image index on open
  useEffect(() => {
    if (isOpen) setActiveImage(0);
  }, [isOpen]);

  // Escape key to close, arrows to navigate
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setActiveImage((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setActiveImage((i) => (i - 1 + images.length) % images.length);
    };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, images.length, onClose]);

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!gallery) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-4 z-50 mx-auto flex max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:inset-8 lg:inset-12"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex flex-shrink-0 items-start justify-between border-b border-line px-6 py-4">
              <div>
                <h3 className="text-base font-semibold leading-tight">{award.title}</h3>
                <p className="mt-0.5 text-xs text-ink-secondary">
                  {award.issuer} · {award.date}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="ml-4 flex-shrink-0 rounded-full p-2 text-ink-secondary transition-colors hover:bg-ground-alt hover:text-ink"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto">
              {/* Photo gallery */}
              {images.length > 0 && (
                <div className="relative aspect-video overflow-hidden bg-ink">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImage}
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={images[activeImage]}
                        alt={`${award.title} — photo ${activeImage + 1}`}
                        fill
                        sizes="(min-width: 1024px) 896px, 100vw"
                        className="object-contain"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Prev / Next arrows (only when multiple images) */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={() => setActiveImage((i) => (i - 1 + images.length) % images.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                        aria-label="Previous photo"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => setActiveImage((i) => (i + 1) % images.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                        aria-label="Next photo"
                      >
                        <ChevronRight size={20} />
                      </button>
                      {/* Dot indicators */}
                      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                        {images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveImage(i)}
                            className={`h-1.5 rounded-full transition-all ${
                              i === activeImage ? "w-4 bg-white" : "w-1.5 bg-white/50"
                            }`}
                            aria-label={`Go to photo ${i + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Project info */}
              <div className="space-y-5 px-6 py-5">
                {gallery.projectName && (
                  <div>
                    <h4 className="text-xl font-semibold">{gallery.projectName}</h4>
                    {gallery.projectTagline && (
                      <p className="mt-0.5 text-sm text-ink-secondary">{gallery.projectTagline}</p>
                    )}
                  </div>
                )}

                <p className="text-sm leading-relaxed text-ink-secondary">{award.description}</p>

                {gallery.summary && (
                  <div className="space-y-2 rounded-xl bg-ground-alt p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-secondary">
                      About {gallery.projectName}
                    </p>
                    <p className="text-sm leading-relaxed">{gallery.summary}</p>
                  </div>
                )}

                {/* CTA links */}
                <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                  {gallery.presentationUrl && (
                    <a
                      href={gallery.presentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
                    >
                      <FileText size={16} />
                      View pitch deck
                    </a>
                  )}
                  {gallery.repoUrl && (
                    <a
                      href={gallery.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-ink"
                    >
                      <Github size={16} />
                      GitHub repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
