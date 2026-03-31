"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Briefcase, ChevronRight } from "lucide-react";

const education = [
  {
    degree: "B.S. in Data Science",
    school: "Truman State University",
    location: "Kirksville, MO",
    period: "Aug 2024 – Present",
    gpa: "3.73 / 4.0",
  },
];

const experience = [
  {
    role: "Mathematics Tutor",
    org: "Truman State University",
    period: "Sep 2025 – Present",
    bullets: [
      "Tutored 30+ students across Precalculus, Calculus I, and Calculus II through 1:1 and small-group sessions, with 24 students achieving an A grade across all three courses.",
      "Developed targeted practice sets and concept recap sheets spanning key topics: trigonometric identities & the unit circle, limits & derivatives, integration techniques (u-substitution, integration by parts, partial fractions, trigonometric substitution), improper integrals, and sequences & series (convergence tests).",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 section-primary relative overflow-hidden">

      {/* Accent glow — bottom right */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-500/4 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* Section heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">/ about me</p>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ── Left: bio ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 text-slate-400 leading-relaxed text-[0.95rem]">
              <p>
                I&apos;m a <span className="text-sky-400 font-medium">Data Science sophomore</span> at
                Truman State University with hands-on experience across the full analytics
                workflow — from data cleaning and SQL-based feature engineering to statistical
                modeling and interactive dashboard deployment.
              </p>
              <p>
                Demonstrated through end-to-end projects: a reproducible{" "}
                <span className="text-slate-300 font-medium">OLS/ANCOVA regression study</span> in
                Python (SciPy, Statsmodels) and a{" "}
                <span className="text-slate-300 font-medium">MySQL + Chart.js EDA pipeline</span>{" "}
                with a live-hosted dashboard.
              </p>
              <p>
                Proficient in Python, R, SQL, and data visualization. Seeking internship
                opportunities in{" "}
                <span className="text-slate-300 font-medium">
                  Data Analytics, Data Engineering, Data Science,
                </span>{" "}
                or related fields.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-8 space-y-3">
              {[
                { icon: MapPin,    text: "Kirksville, MO — open to relocation" },
                { icon: Calendar,  text: "Available for Summer 2026 internship" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-slate-500">
                  <Icon size={15} className="text-sky-400 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: education + experience ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Education */}
            <div>
              <p className="font-mono text-xs text-sky-600 uppercase tracking-widest mb-3">Education</p>
              {education.map((edu, i) => (
                <div key={i} className="card-glass rounded-2xl p-5 hover-glow transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-sky-400/10 border border-sky-400/20 flex-shrink-0">
                      <GraduationCap size={18} className="text-sky-400" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-white text-sm">{edu.degree}</h4>
                      <p className="text-sky-400 text-xs mt-0.5 font-medium">{edu.school}</p>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-xs text-slate-500">
                        <span>{edu.location}</span>
                        <span>·</span>
                        <span>{edu.period}</span>
                        <span>·</span>
                        <span className="text-emerald-400 font-semibold">GPA {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div>
              <p className="font-mono text-xs text-sky-600 uppercase tracking-widest mb-3">Experience</p>
              {experience.map((exp, i) => (
                <div key={i} className="card-glass rounded-2xl p-5 hover-glow transition-all">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/20 flex-shrink-0">
                      <Briefcase size={18} className="text-amber-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-semibold text-white text-sm">{exp.role}</h4>
                      <p className="text-amber-400 text-xs mt-0.5 font-medium">{exp.org}</p>
                      <p className="text-slate-600 text-xs mt-1 font-mono">{exp.period}</p>
                      <ul className="mt-3 space-y-2">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex gap-2 text-xs text-slate-500 leading-relaxed">
                            <ChevronRight size={12} className="text-sky-600 flex-shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
