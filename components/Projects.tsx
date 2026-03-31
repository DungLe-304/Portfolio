"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects    = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 section-primary relative overflow-hidden">

      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-sky-500/3 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* Section heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">/ what I&apos;ve built</p>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white">
            Projects
          </h2>
        </motion.div>

        {/* ── Featured hero cards ── */}
        {featuredProjects.map((featuredProject, fi) => (
          <motion.div
            key={featuredProject.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: fi * 0.1 }}
            className="mb-8 rounded-2xl overflow-hidden card-glass hover-glow transition-all duration-300 group"
          >
            <div className="flex flex-col lg:flex-row">

              {/* Visual pane */}
              <div className="relative lg:w-2/5 h-56 lg:h-auto flex-shrink-0 bg-gradient-to-br from-sky-950 to-[#020817] overflow-hidden">
                {featuredProject.imageUrl ? (
                  <Image src={featuredProject.imageUrl} alt={featuredProject.title} fill className="object-cover" priority={fi === 0} />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                    {/* Animated chart bars */}
                    <div className="flex items-end gap-2">
                      {[45, 70, 55, 85, 60, 95, 72].map((h, i) => (
                        <motion.div
                          key={i}
                          className="w-4 rounded-t bg-sky-400/30 border-t border-sky-400/60"
                          style={{ height: `${h * 0.7}px` }}
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
                        />
                      ))}
                    </div>
                    <p className="font-mono text-sky-400/50 text-xs tracking-widest uppercase">
                      Interactive Dashboard
                    </p>
                  </div>
                )}
                {/* Scan line effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                  <div className="w-full h-8 bg-gradient-to-b from-transparent via-sky-400/20 to-transparent animate-[scanline_3s_linear_infinite]" />
                </div>
              </div>

              {/* Content pane */}
              <div className="flex flex-col justify-between p-7 lg:p-10 flex-1">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-400/10 border border-sky-400/25 text-sky-400 text-xs font-mono font-medium">
                      <Star size={10} className="fill-current" />
                      Featured Project
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                    {featuredProject.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs font-mono bg-sky-400/8 border border-sky-400/20 text-sky-300 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {featuredProject.demoUrl && (
                    <a
                      href={featuredProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-[#020817] font-semibold text-sm rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]"
                    >
                      <ExternalLink size={14} />
                      {featuredProject.demoLabel ?? "Live Demo"}
                    </a>
                  )}
                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white font-semibold text-sm rounded-xl transition-all duration-200"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* ── Other projects grid ── */}
        {otherProjects.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col rounded-2xl overflow-hidden card-glass hover-glow transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative h-44 w-full bg-gradient-to-br from-sky-950/60 to-[#020817] overflow-hidden flex items-center justify-center">
                  {project.imageUrl ? (
                    <Image src={project.imageUrl} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <span className="font-display font-bold text-6xl text-sky-400/10 select-none">
                      {project.title.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-display font-semibold text-base text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-xs font-mono bg-slate-800/60 border border-slate-700/50 text-slate-400 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2 border-t border-slate-800/60">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-sky-400 transition-colors font-medium">
                        <Github size={13} /> Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-sky-500 hover:text-sky-400 transition-colors font-medium">
                        <ExternalLink size={13} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* View all on GitHub */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/DungLe-304"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-sky-400 transition-colors"
          >
            <Github size={15} />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
