"use client";

import { useEffect, useRef } from "react";

interface CountUpProps {
  value: string;
}

const DURATION_MS = 900;

// Counts from 0 to the number inside `value` (for example "2,200+") once it scrolls into view.
// The server renders the final value, so it is correct without JavaScript, in print, and under
// reduced motion. An invisible copy of the final value reserves the width, so nothing shifts.
export default function CountUp({ value }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    const match = value.match(/^(\D*)([\d,]+)(.*)$/);
    if (!element || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const [, prefix, digits, suffix] = match;
    const end = Number(digits.replace(/,/g, ""));
    let frame = 0;

    const run = () => {
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min(1, (now - start) / DURATION_MS);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${prefix}${Math.round(end * eased).toLocaleString("en-US")}${suffix}`;
        if (progress < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        run();
      },
      { threshold: 0.6 },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      element.textContent = value;
    };
  }, [value]);

  return (
    <>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="grid">
        <span className="invisible col-start-1 row-start-1">{value}</span>
        <span ref={ref} className="col-start-1 row-start-1">
          {value}
        </span>
      </span>
    </>
  );
}
