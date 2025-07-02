// "use client";
// import ProjectCard from "@/components/card/ProjectCard";
// import { projects } from "@/data/projects";

// import { motion } from "framer-motion";

// export default function Projects() {
//   return (
//     <section id="projects" className="py-32 px-6 max-w-6xl mx-auto text-white">
//       <motion.h2
//         className="text-4xl md:text-5xl font-bold text-center mb-12 text-purple-400"
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         My Projects
//       </motion.h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {projects.map((project, i) => (
//           <ProjectCard key={i} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";
import { useState } from "react";
import ProjectCard from "@/components/card/ProjectCard";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

const categories = ["all", "fullstack", "dsa", "system", "ui", "portfolio"];

export default function Projects() {
  const [active, setActive] = useState("all");

  const filteredProjects =
    active === "all"
      ? projects
      : projects.filter((project) => project.type === active);

  return (
    <section id="projects" className="py-32 px-6 max-w-6xl mx-auto text-white">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-purple-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${
              active === cat
                ? "bg-purple-600 text-white"
                : "bg-white/10 text-white hover:bg-purple-500/40"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
