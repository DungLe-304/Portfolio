"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  category: string;
  color: string;        // accent color class
  glowColor: string;   // tailwind shadow color
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    color: "text-sky-400 border-sky-400/30 bg-sky-400/5",
    glowColor: "hover:border-sky-400/60 hover:bg-sky-400/10 hover:shadow-[0_0_12px_rgba(56,189,248,0.2)]",
    skills: ["Python", "R", "SQL", "Java", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Data & ML",
    color: "text-violet-400 border-violet-400/30 bg-violet-400/5",
    glowColor: "hover:border-violet-400/60 hover:bg-violet-400/10 hover:shadow-[0_0_12px_rgba(167,139,250,0.2)]",
    skills: ["pandas", "NumPy", "scikit-learn", "PyTorch", "SciPy", "Statsmodels"],
  },
  {
    category: "Statistics & Modeling",
    color: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
    glowColor: "hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:shadow-[0_0_12px_rgba(52,211,153,0.2)]",
    skills: ["EDA", "OLS/ANCOVA", "Interaction Models", "Classification", "Model Diagnostics", "Cross-validation", "Hypothesis Testing"],
  },
  {
    category: "Tools & Backend",
    color: "text-amber-400 border-amber-400/30 bg-amber-400/5",
    glowColor: "hover:border-amber-400/60 hover:bg-amber-400/10 hover:shadow-[0_0_12px_rgba(251,191,36,0.2)]",
    skills: ["Jupyter", "Git", "GitHub", "FastAPI", "Flask", "MongoDB", "REST APIs"],
  },
  {
    category: "Visualization & BI",
    color: "text-rose-400 border-rose-400/30 bg-rose-400/5",
    glowColor: "hover:border-rose-400/60 hover:bg-rose-400/10 hover:shadow-[0_0_12px_rgba(251,113,133,0.2)]",
    skills: ["Tableau", "Power BI", "Excel"],
  },
  {
    category: "Databases",
    color: "text-cyan-400 border-cyan-400/30 bg-cyan-400/5",
    glowColor: "hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:shadow-[0_0_12px_rgba(34,211,238,0.2)]",
    skills: ["MySQL", "MongoDB", "SQL DDL/DML", "Data Pipelines"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 section-secondary relative overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-sky-500/3 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* Section heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">/ tech stack</p>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white">
            Skills & Tools
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-md">
            Technologies I use daily — hover any skill to learn more.
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.07 }}
              className="card-glass rounded-2xl p-6 hover-glow transition-all duration-300"
            >
              {/* Category label */}
              <div className="flex items-center gap-2 mb-5">
                <span className={`w-1.5 h-1.5 rounded-full ${cat.color.split(" ")[0].replace("text-", "bg-")} shadow-[0_0_6px_currentColor]`} />
                <h3 className={`font-mono text-xs font-medium tracking-widest uppercase ${cat.color.split(" ")[0]}`}>
                  {cat.category}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`
                      px-2.5 py-1 text-xs font-medium rounded-lg border
                      text-slate-300 border-slate-700/60 bg-slate-800/40
                      cursor-default select-none
                      transition-all duration-200
                      ${cat.glowColor}
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
