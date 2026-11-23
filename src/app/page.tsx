import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
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
        <About />
        <Skills />
        <Projects />
        <Awards />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
