"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Typewriter from "typewriter-effect";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-32 max-w-6xl mx-auto text-white"
    >
      {/* Background glow (optional) */}
      <div className="absolute inset-0 blur-[100px] opacity-30 bg-gradient-to-br from-purple-700 to-indigo-900 z-[-1]" />

      {/* Title */}
      <motion.h2
        className="text-center text-4xl md:text-5xl font-bold tracking-tight text-purple-400 mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Who am I?
      </motion.h2>

      <motion.p
        className="text-center text-lg md:text-xl max-w-3xl mx-auto text-white/80 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        I’m a self-driven full-stack developer with a deep love for clean
        design, solid architecture, and creative UI/UX. I build modern apps
        using the MERN stack, and I’m constantly leveling up in areas like
        system design and DSA.
      </motion.p>
      {/* Typing Goal Effect */}
      <motion.div
        className="mt-6 text-center text-xl font-medium text-purple-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Typewriter
          options={{
            strings: [
              "Aspiring Top  Developer 💡",
              "Obsessed with Clean Code ✨",
              "Learning System Design 📐",
              "waiting solve problem using Data Structure and algorithm 🧠",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 40,
          }}
        />
      </motion.div>

      {/* Quick Info Blocks */}
      <motion.div
        className="mt-14 grid md:grid-cols-2 gap-10 text-white/80 text-sm md:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="space-y-2">
          <p>
            <strong>🎓 Education:</strong> B.Sc. in Computer Science
          </p>
          <p>
            <strong>📍 Location:</strong> Bangladesh
          </p>
          <p>
            <strong>🧠 Current Focus:</strong> Problem Solving, Deep Thinking
          </p>
        </div>
        <div className="space-y-2">
          <p>
            <strong>💻 Tech Stack:</strong> TypeScript, React, Next.js, Tailwind
          </p>
          <p>
            <strong>🚀 Currently Learning:</strong> System Design, DSA, Software
            Craft
          </p>
        </div>
      </motion.div>

      {/* Resume Button */}
      <motion.div
        className="mt-14 flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <a
          href="/Sakib_Hasan_resume.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-xl transition-all duration-300"
        >
          <Download size={20} />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
