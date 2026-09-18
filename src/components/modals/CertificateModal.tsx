"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  issuer: string;
  certificateUrl: string;
  alt?: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  title,
  issuer,
  certificateUrl,
  alt,
}: CertificateModalProps) {
  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Prevent background scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isImage = /\.(png|jpe?g|webp|gif)$/i.test(certificateUrl);

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

          {/* Modal panel */}
          <motion.div
            className="fixed inset-4 z-50 flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:inset-8 lg:inset-16"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="flex flex-shrink-0 items-center justify-between border-b border-line px-5 py-4">
              <div>
                <h3 className="text-sm font-semibold sm:text-base">{title}</h3>
                <p className="mt-0.5 text-xs text-ink-secondary">{issuer}</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium transition-colors hover:border-ink"
                >
                  <ExternalLink size={13} />
                  Open
                </a>
                <button
                  onClick={onClose}
                  aria-label="Close certificate"
                  className="rounded-full p-2 text-ink-secondary transition-colors hover:bg-ground-alt hover:text-ink"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Viewer — image or PDF */}
            <div className="relative min-h-0 flex-1 bg-ground-alt">
              {isImage ? (
                <Image src={certificateUrl} alt={alt ?? title} fill sizes="100vw" className="object-contain p-4" />
              ) : (
                <iframe
                  src={`${certificateUrl}#toolbar=0&navpanes=0`}
                  title={title}
                  className="h-full w-full"
                />
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
