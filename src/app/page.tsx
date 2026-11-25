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
      <Navbar name={resume.name} links={resume.nav} resumeLink={resume.resumeLink} />
      <main id="main">
        <Hero />
        <Highlights />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Honors />
        <Education />
        <Contact />
      </main>
      <Footer />
      <PrintExpand />
    </>
  );
}
