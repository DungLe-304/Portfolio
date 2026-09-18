"use client";

import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { site, contact } from "@/data/site";

const links = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "GitHub", value: site.github.replace(/^https?:\/\//, ""), href: site.github, icon: Github },
  { label: "LinkedIn", value: site.linkedin.replace(/^https?:\/\//, ""), href: site.linkedin, icon: Linkedin },
];

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-white/40";
const labelClass = "mb-1.5 block text-xs font-medium text-white/60";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: wire to a form backend, e.g. Formspree:
    // await fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Section id="contact" bg="ink" title="Let's connect." lead={contact.lead}>
      <div className="grid gap-16 md:grid-cols-2">
        {/* Links */}
        <Reveal>
          <ul className="divide-y divide-white/15 border-t border-white/15">
            {links.map(({ label, value, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 py-5 transition-opacity hover:opacity-70"
                >
                  <Icon size={18} className="text-white/60" />
                  <div className="min-w-0">
                    <p className="text-xs text-white/50">{label}</p>
                    <p className="truncate text-base font-medium">{value}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className={labelClass}>Name</label>
              <input
                id="name" name="name" type="text" required value={form.name}
                onChange={handleChange} placeholder="Your name" className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email</label>
              <input
                id="email" name="email" type="email" required value={form.email}
                onChange={handleChange} placeholder="your@email.com" className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="message" className={labelClass}>Message</label>
              <textarea
                id="message" name="message" required rows={5} value={form.message}
                onChange={handleChange} placeholder="Your message..." className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={status !== "idle"}
              className="w-full rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send message"}
            </button>
            {status === "sent" && (
              <p className="pt-1 text-center text-xs text-white/60">
                Thank you — I&apos;ll get back to you soon!
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
