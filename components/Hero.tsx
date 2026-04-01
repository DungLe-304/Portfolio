"use client";

import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, ArrowDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Typewriter hook for role cycling
const ROLES = [
  "Data Scientist",
  "Data Engineer",
  "Data Analyst",
];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay]   = useState("");
  const [wordIdx, setWordIdx]   = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden section-primary">

      {/* ── Dot grid background ── */}
      <div className="absolute inset-0 bg-dot-grid bg-dot-md opacity-100 pointer-events-none" />

      {/* ── Radial glow centered ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/5 blur-[120px]" />
        <div className="absolute top-2/3 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[80px]" />
      </div>

      {/* ── Decorative grid lines (top-right) ── */}
      <svg
        className="absolute top-0 right-0 w-96 h-96 opacity-[0.04] pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={`h${i}`} x1="0" y1={i * 44} x2="400" y2={i * 44}
            stroke="#38bdf8" strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line
            key={`v${i}`} x1={i * 44} y1="0" x2={i * 44} y2="400"
            stroke="#38bdf8" strokeWidth="0.5"
          />
        ))}
      </svg>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">

          {/* ── Left: text ── */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Monospace greeting */}
            <motion.p
              className="font-mono text-sky-400 text-sm mb-5 flex items-center gap-2 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block w-8 h-px bg-sky-400/60" />
              Hello, I&apos;m
            </motion.p>

            {/* Name — animated gradient */}
            <h1 className="font-sans font-extrabold text-5xl sm:text-6xl lg:text-7xl text-gradient mb-2 leading-none tracking-tight">
              Dung Chi Le
            </h1>

            {/* Alias */}
            <p className="font-mono text-base text-slate-500 mb-4 text-center md:text-left tracking-wide">
              Also known as Tony Le
            </p>

            {/* Typewriter role */}
            <div className="h-10 flex items-center justify-center md:justify-start mb-6">
              <span className="font-display text-xl sm:text-2xl text-slate-300 font-semibold">
                {role}
              </span>
              <span className="ml-0.5 inline-block w-0.5 h-6 bg-sky-400 animate-blink" />
            </div>

            {/* Bio */}
            <p className="text-slate-400 text-base leading-relaxed max-w-md mx-auto md:mx-0 mb-10">
              Data Science sophomore at{" "}
              <span className="text-sky-400 font-medium">Truman State University</span>
              {" "}— experienced across the full analytics workflow, from data cleaning
              and SQL-based feature engineering to statistical modeling and interactive
              dashboard deployment.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-10">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-[#020817] font-semibold text-sm rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
              >
                <Download size={16} />
                Download CV
              </a>
              <button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-6 py-3 border border-sky-400/40 hover:border-sky-400 text-slate-300 hover:text-sky-400 font-semibold text-sm rounded-xl transition-all duration-200 hover:bg-sky-400/5"
              >
                <Mail size={16} />
                Contact Me
              </button>
            </div>

            {/* Social icons */}
            <div className="flex gap-1 justify-center md:justify-start">
              {[
                { href: "https://github.com/DungLe-304", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/dung-le-data304", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:lechidung204@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg text-slate-500 hover:text-sky-400 hover:bg-sky-400/10 transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: avatar ── */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-sky-400/20 blur-2xl scale-110 animate-pulse-slow" />
              {/* Rotating dashed ring */}
              <svg
                className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]"
                viewBox="0 0 288 288"
              >
                <circle
                  cx="144" cy="144" r="140"
                  fill="none"
                  stroke="rgba(56,189,248,0.2)"
                  strokeWidth="1"
                  strokeDasharray="6 10"
                />
              </svg>
              {/* Photo */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-sky-400/30 shadow-[0_0_40px_rgba(56,189,248,0.2)]">
                <Image
                  src="/images/avatar.jpg"
                  alt="Dung Chi Le"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full bg-[#020817] border border-sky-400/30 flex items-center gap-1.5 text-xs text-slate-300 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to internships
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Scroll cue ── */}
        <motion.button
          onClick={() =>
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
          }
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-sky-400 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          aria-label="Scroll down"
        >
          <span className="font-mono text-xs tracking-widest">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
