"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { X } from "lucide-react";
import type { ContentImage } from "@/content/resume";

interface ImageDialogProps {
  image: ContentImage;
  triggerLabel: string;
  title: string;
}

export default function ImageDialog({ image, triggerLabel, title }: ImageDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [hasOpened, setHasOpened] = useState(false);

  const open = () => {
    setHasOpened(true);
    dialogRef.current?.showModal();
  };

  const closeOnBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) dialogRef.current.close();
  };

  return (
    <>
      <button
        type="button"
        data-dialog-trigger
        aria-haspopup="dialog"
        aria-label={`${triggerLabel}: ${title}`}
        onClick={open}
        className="inline-block py-2.5 leading-6 underline decoration-1 underline-offset-4 transition-colors hover:text-accent"
      >
        {triggerLabel}
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={closeOnBackdrop}
        className="m-auto max-h-[92dvh] w-[min(92vw,720px)] overflow-hidden bg-paper p-0 text-ink backdrop:bg-black/70"
      >
        <div className="flex max-h-[92dvh] flex-col">
          <div className="flex items-center justify-between gap-4 border-b border-ink py-1 pl-4 pr-1">
            <h4 id={titleId} className="font-display text-lg font-normal leading-tight">
              {title}
            </h4>
            <button
              type="button"
              data-dialog-close
              aria-label="Close dialog"
              onClick={() => dialogRef.current?.close()}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center transition-colors hover:text-accent"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <div className="min-h-0 overflow-y-auto bg-surface p-3">
            {hasOpened && (
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="eager"
                sizes="(min-width: 800px) 696px, 88vw"
                className="h-auto max-h-[78dvh] w-full object-contain"
              />
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
