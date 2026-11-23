import type { ContentLink } from "@/content/resume";

interface TextLinkProps {
  link: ContentLink;
  download?: string;
  className?: string;
}

export default function TextLink({ link, download, className = "" }: TextLinkProps) {
  const opensNewTab = link.href.startsWith("http") || (link.href.endsWith(".pdf") && !download);

  return (
    <a
      href={link.href}
      download={download}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
      className={`inline-block py-2.5 leading-6 underline decoration-1 underline-offset-4 transition-colors hover:text-accent ${className}`.trim()}
    >
      {link.label}
    </a>
  );
}
