"use client";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-gradient-to-br from-[#1e1b4b] to-[#111827] p-6 rounded-2xl text-white shadow-lg hover:shadow-purple-700/50 border border-white/10 backdrop-blur"
    >
      {/* Icon */}
      <div className="absolute -top-6 left-6 bg-purple-600 p-3 rounded-xl shadow-md group-hover:rotate-[8deg] transition-transform">
        <Icon size={30} />
      </div>

      {/* Content */}
      <div className="pt-6 pl-0 md:pl-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-white/80 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-purple-500/10 text-purple-300 text-xs font-medium px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex flex-wrap gap-4">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              🌐 Live
            </a>
          )}
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              📂 Code
            </a>
          )}
          {project.sourceClient && (
            <a
              href={project.sourceClient}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              💻 Client
            </a>
          )}
          {project.sourceServer && (
            <a
              href={project.sourceServer}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              🖥️ Server
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
