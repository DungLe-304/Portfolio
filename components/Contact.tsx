"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const SOCIAL = [
  {
    label: "Email",
    value: "lechidung204@gmail.com",
    href: "mailto:lechidung204@gmail.com",
    icon: Mail,
    accent: "text-sky-400 border-sky-400/20 hover:border-sky-400/50 hover:bg-sky-400/5 hover:shadow-[0_0_20px_rgba(56,189,248,0.10)]",
  },
  {
    label: "GitHub",
    value: "github.com/DungLe-304",
    href: "https://github.com/DungLe-304",
    icon: Github,
    accent: "text-slate-300 border-slate-700/60 hover:border-slate-500 hover:bg-slate-800/40 hover:shadow-[0_0_20px_rgba(148,163,184,0.06)]",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dung-le-data304",
    href: "https://linkedin.com/in/dung-le-data304",
    icon: Linkedin,
    accent: "text-sky-500 border-sky-500/20 hover:border-sky-500/50 hover:bg-sky-500/5 hover:shadow-[0_0_20px_rgba(14,165,233,0.10)]",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Wire to Formspree: await fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-sky-400/50 focus:border-sky-400/40 transition-all text-sm font-sans";

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 section-primary relative overflow-hidden">

      {/* Glow */}
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[400px] rounded-full bg-sky-500/4 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">

        {/* Section heading */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-3">/ get in touch</p>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white mb-4">
            Contact Me
          </h2>
          <p className="text-slate-500 text-sm max-w-sm">
            Seeking internship opportunities in Data Analytics, Data Engineering,
            Data Science, or related fields. Let&apos;s connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* ── Left: socials ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <p className="font-mono text-xs text-sky-700 uppercase tracking-widest mb-5">
              Find me at
            </p>
            {SOCIAL.map(({ label, value, href, icon: Icon, accent }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-2xl border card-glass transition-all duration-300 group ${accent}`}
              >
                <div className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-600 font-mono mb-0.5">{label}</p>
                  <p className="text-sm text-slate-300 font-medium truncate">{value}</p>
                </div>
                <ArrowUpRight size={14} className="text-slate-600 group-hover:text-current transition-colors flex-shrink-0" />
              </a>
            ))}
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs text-sky-700 uppercase tracking-widest mb-5">
              Or send a message
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Name</label>
                <input
                  name="name" type="text" required value={form.name}
                  onChange={handleChange} placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Email</label>
                <input
                  name="email" type="email" required value={form.email}
                  onChange={handleChange} placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">Message</label>
                <textarea
                  name="message" required rows={5} value={form.message}
                  onChange={handleChange} placeholder="Your message..."
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={status !== "idle"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 disabled:bg-sky-500/40 text-[#020817] font-semibold text-sm rounded-xl transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]"
              >
                {status === "sending" ? (
                  <span className="animate-pulse">Sending…</span>
                ) : status === "sent" ? (
                  "Message Sent ✓"
                ) : (
                  <><Send size={15} /> Send Message</>
                )}
              </button>
              {status === "sent" && (
                <p className="text-center text-xs text-emerald-400 font-mono pt-1">
                  Thank you — I&apos;ll get back to you soon!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
