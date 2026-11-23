import TextLink from "@/components/ui/TextLink";
import { resume } from "@/content/resume";

export default function Footer() {
  return (
    <footer className="border-t border-ink">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between gap-4 px-5 py-3 text-[13px] sm:px-8 lg:px-14">
        <span className="font-semibold">{resume.name}</span>
        <TextLink link={{ label: "Back to top", href: "#top" }} />
      </div>
    </footer>
  );
}
