import AboutMe from "@/sections/AboutMe";
import Contact from "@/sections/Contact";
import CoreSkills from "@/sections/CoreSkills";
import Education from "@/sections/Education";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import TechLists from "@/sections/TechLists";

export default function Home() {
  return (
    <>
      <Hero />
      <Education />
      <AboutMe />
      <CoreSkills />
      <TechLists />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
