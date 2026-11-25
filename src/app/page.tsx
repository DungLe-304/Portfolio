import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Honors from "@/components/sections/Honors";
import Leadership from "@/components/sections/Leadership";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import PrintExpand from "@/components/ui/PrintExpand";
import { resume } from "@/content/resume";

export default function Home() {
  return (
    <>
      <Navbar
        name={resume.name}
        links={resume.nav}
        resumeLink={resume.resumeLink}
        sections={resume.sections}
        actions={resume.actions}
      />
      <main id="main">
        <Hero />
        <Highlights />
        <Experience />
        <Projects />
        <Skills />
        <div className="mx-auto grid w-full max-w-page gap-3.5 px-5 pb-section-sm sm:px-8 md:pb-section lg:grid-cols-12 lg:grid-rows-[auto_1fr]">
          <Leadership className="lg:col-span-7" />
          <Honors className="lg:col-span-5 lg:row-span-2" />
          <Education className="lg:col-span-7" />
          <Contact className="lg:col-span-12" />
        </div>
      </main>
      <Footer />
      <PrintExpand />
    </>
  );
}
