import { ArrowUp } from "lucide-react";
import Mark from "@/components/ui/Mark";
import { resume } from "@/content/resume";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex w-full max-w-page items-center justify-between gap-4 px-5 py-4 text-sm sm:px-8">
        <span className="inline-flex items-center gap-2.5 font-semibold">
          <Mark />
          {resume.name}
        </span>
        <a href="#top" className="group inline-flex min-h-11 items-center gap-1.5 text-muted transition-colors duration-fast hover:text-ink">
          <span className="link-grow">Back to top</span>
          <ArrowUp size={15} aria-hidden="true" className="transition-transform duration-fast group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
