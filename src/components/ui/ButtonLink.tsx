import { ArrowDownToLine, ArrowUpRight, Mail } from "lucide-react";
import type { ContentLink } from "@/content/resume";

interface ButtonLinkProps {
  link: ContentLink;
  variant?: "primary" | "secondary";
}

const variants = {
  primary: "border-ink bg-ink text-paper hover:border-accent hover:bg-accent hover:text-on-accent",
  secondary: "border-rule bg-surface text-ink hover:border-ink",
};

// Pill-shaped link. The icon says what happens: download, new tab, or email.
export default function ButtonLink({ link, variant = "secondary" }: ButtonLinkProps) {
  const isExternal = link.href.startsWith("http");
  const Icon = link.download ? ArrowDownToLine : link.href.startsWith("mailto:") ? Mail : isExternal ? ArrowUpRight : null;

  return (
    <a
      href={link.href}
      download={link.download}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group inline-flex min-h-11 items-center gap-2 rounded-full border px-5 text-sm font-medium transition duration-200 ease-out-soft hover:-translate-y-px ${variants[variant]}`}
    >
      {link.download && Icon && <Icon size={16} aria-hidden="true" />}
      {link.label}
      {!link.download && Icon && (
        <Icon
          size={15}
          aria-hidden="true"
          className="text-muted transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-current"
        />
      )}
    </a>
  );
}
