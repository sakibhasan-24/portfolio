import AboutMe from "@/sections/AboutMe";
import CoreSkills from "@/sections/CoreSkills";
import Education from "@/sections/Education";
import Hero from "@/sections/Hero";
import TechLists from "@/sections/TechLists";

export default function Home() {
  return (
    <>
      <Hero />
      <Education />
      <AboutMe />
      <CoreSkills />
      <TechLists />
    </>
  );
}
