"use client";

import { motion } from "framer-motion";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiLeetcode,
} from "react-icons/si";
import { BiNetworkChart } from "react-icons/bi";
import { FaBrain } from "react-icons/fa";

const coreSkills = [
  {
    name: "MERN Stack",
    icon: (
      <div className="flex space-x-3 text-4xl">
        <SiMongodb className="text-green-600" />
        <SiExpress className="text-gray-400" />
        <SiReact className="text-sky-400" />
        <SiNodedotjs className="text-green-500" />
      </div>
    ),
    description:
      "Build full-stack applications with MongoDB, Express, React & Node.js",
    learnMoreLink: "https://github.com/sakibhasan-24",
  },
  {
    name: "Data Structures & Algorithms",
    icon: <SiLeetcode className="text-orange-500 text-5xl" />,
    description:
      "Strong foundation in algorithms, problem solving and complexity analysis",
    learnMoreLink:
      "https://github.com/sakibhasan-24/data-structure-and-algorithm",
  },
  {
    name: "System Design",
    icon: <BiNetworkChart className="text-purple-500 text-5xl" />,
    description:
      "Design scalable, maintainable, and efficient systems & architectures",
    learnMoreLink: "https://github.com/sakibhasan-24/system-design",
  },
  {
    name: "Quick Learner",
    icon: <FaBrain className="text-yellow-400 text-5xl" />,
    description:
      "Adapt rapidly to new technologies, methodologies, and challenges",
    learnMoreLink: "https://github.com/sakibhasan-24",
  },
];

export default function CoreSkills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20 text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-16 text-purple-400"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Core Skills
      </motion.h2>

      <motion.div
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {coreSkills.map(({ name, icon, description, learnMoreLink }, idx) => (
          <motion.div
            key={idx}
            className="bg-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md cursor-pointer flex flex-col items-center text-center group"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px 3px #a855f7" }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => window.open(learnMoreLink, "_blank")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") window.open(learnMoreLink, "_blank");
            }}
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition">
              {name}
            </h3>
            <p className="text-sm text-white/80 mb-4">{description}</p>
            <a
              href={learnMoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 underline text-sm"
            >
              Learn More
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
