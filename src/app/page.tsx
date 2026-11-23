import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Leadership from "@/components/sections/Leadership";
import Projects from "@/components/sections/Projects";
import Awards from "@/components/sections/Awards";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import { resume } from "@/content/resume";

export default function Home() {
  return (
    <>
      <Navbar name={resume.name} links={resume.nav} resumeLink={resume.actions[0]} />
      <main id="main">
        <Hero />
        <Highlights />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Awards />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
