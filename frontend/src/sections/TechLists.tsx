"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFramer,
  SiGit,
  SiGithub,
  SiPostman,
  SiRedux,
  SiVercel,
  SiCplusplus,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: <SiReact size={40} className="text-sky-400" /> },
  { name: "C++", icon: <SiCplusplus size={40} className="text-blue-600" /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} className="text-white" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript size={40} className="text-blue-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={40} className="text-cyan-400" />,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer size={40} className="text-pink-500" />,
  },
  { name: "Redux", icon: <SiRedux size={40} className="text-purple-500" /> },
  {
    name: "Node.js",
    icon: <SiNodedotjs size={40} className="text-green-500" />,
  },
  { name: "Express.js", icon: <SiExpress size={40} className="text-white" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-600" /> },
  { name: "Git", icon: <SiGit size={40} className="text-orange-500" /> },
  { name: "GitHub", icon: <SiGithub size={40} className="text-white" /> },
  {
    name: "Postman",
    icon: <SiPostman size={40} className="text-orange-400" />,
  },
  {
    name: "VS Code",
    icon: (
      <img
        src="/images/vscode.png"
        alt="VS Code"
        className="w-10 h-10 object-contain"
      />
    ),
  },
  { name: "Vercel", icon: <SiVercel size={40} className="text-white" /> },
];

export default function TechLists() {
  return (
    <section
      id="skills"
      className="py-32 px-6 max-w-6xl mx-auto text-white relative"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tech & Tools I Use
      </motion.h2>

      {/* Tech Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {techStack.map(({ name, icon }, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center gap-3 group"
            whileHover={{ scale: 1.1, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-gradient-to-tr from-white/10 to-white/5 p-5 rounded-2xl group-hover:shadow-[0_0_25px_#9333ea] transition-all duration-300">
              {icon}
            </div>
            <p className="text-sm text-white/80 font-medium group-hover:text-purple-400 transition">
              {name}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Background Lighting Effect */}
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-2/3 right-1/4 w-60 h-60 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse delay-300" />
      </div>
    </section>
  );
}
