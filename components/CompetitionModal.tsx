"use client";

import { useEffect, useState } from "react";
import { X, FileText, Github, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
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

  // Escape key to close
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
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-4 sm:inset-8 lg:inset-12 z-50 flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex-shrink-0">
              <div className="flex items-center gap-3">
                {/* Trophy badge */}
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-yellow-50 dark:bg-yellow-950 flex items-center justify-center text-xl">
                  🏆
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-base leading-tight">
                    {award.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {award.issuer} · {award.date}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="p-2 rounded-lg text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0 ml-4"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto">
              {/* Photo gallery */}
              {images.length > 0 && (
                <div className="relative bg-black">
                  <div className="relative aspect-video overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeImage}
                        src={images[activeImage]}
                        alt={`${award.title} — photo ${activeImage + 1}`}
                        className="w-full h-full object-contain"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </AnimatePresence>

                    {/* Prev / Next arrows (only when multiple images) */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={() => setActiveImage((i) => (i - 1 + images.length) % images.length)}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                          aria-label="Previous photo"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={() => setActiveImage((i) => (i + 1) % images.length)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                          aria-label="Next photo"
                        >
                          <ChevronRight size={20} />
                        </button>
                        {/* Dot indicators */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                          {images.map((_, i) => (
                            <button
                              key={i}
                              onClick={() => setActiveImage(i)}
                              className={`w-1.5 h-1.5 rounded-full transition-all ${
                                i === activeImage
                                  ? "bg-white w-4"
                                  : "bg-white/50"
                              }`}
                              aria-label={`Go to photo ${i + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Project info */}
              <div className="px-6 py-5 space-y-5">
                {/* Project name + tagline */}
                {gallery.projectName && (
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">🔄</span>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {gallery.projectName}
                      </h4>
                    </div>
                    {gallery.projectTagline && (
                      <p className="text-sm text-blue-500 dark:text-blue-400 font-medium ml-7">
                        {gallery.projectTagline}
                      </p>
                    )}
                  </div>
                )}

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {award.description}
                </p>

                {/* Pitch summary pulled from the deck */}
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 space-y-2">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    About SyncShift
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    SyncShift solves a gap no existing tool addresses: F-1 international students
                    are legally capped at 20 hrs/week, yet no scheduling platform understands
                    their real availability. Using an Uber-inspired AI matching algorithm,
                    SyncShift automatically fills open shifts by scanning availability, ranked
                    priorities, and hour compliance — no manager phone calls required.
                  </p>
                </div>

                {/* CTA links */}
                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  {gallery.presentationUrl && (
                    <a
                      href={gallery.presentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors text-sm shadow-md shadow-blue-200 dark:shadow-none"
                    >
                      <FileText size={16} />
                      View Pitch Deck
                      <ExternalLink size={13} className="opacity-70" />
                    </a>
                  )}
                  {gallery.repoUrl && (
                    <a
                      href={gallery.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gray-900 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-semibold rounded-xl transition-colors text-sm"
                    >
                      <Github size={16} />
                      GitHub Repository
                      <ExternalLink size={13} className="opacity-70" />
                    </a>
                  )}
                </div>

                {images.length > 0 && (
                  <p className="text-xs text-gray-400 dark:text-gray-600 text-center pt-1">
                    💡 Tip: if the photo appears blank, convert the .heic file to .jpg and replace{" "}
                    <code className="font-mono">public/truhacks/award-photo.heic</code>
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
