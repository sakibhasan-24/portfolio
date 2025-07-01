"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 pt-28 gap-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 text-white"
      >
        <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 blur-2xl opacity-30 z-0"></div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I'm{" "}
          <span className="text-purple-400">a Full Stack Developer</span>
        </h1>

        <TypeAnimation
          sequence={[
            "I love to build clean UI.",
            2000,
            "I work with Next.js & TypeScript.",
            2000,
            "I focus on performance & user experience.",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl text-purple-300 font-mono"
        />

        <p className="mt-6 max-w-xl text-gray-300 text-lg leading-relaxed">
          I'm a MERN stack developer passionate about building beautiful,
          performant, and scalable applications. I enjoy turning ideas into
          real-life products with strong UI and clean code.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 flex justify-center items-center relative"
      >
        <motion.div
          className="absolute -top-10 -left-10 md:-top-16 md:-left-16 w-[300px] h-[300px] md:w-[420px] md:h-[420px] bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-600 rounded-full blur-2xl opacity-30 z-0"
          animate={{
            y: [0, -10, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-64 h-64 md:w-80 md:h-80 relative z-10 rounded-full overflow-hidden border-4 border-purple-400 shadow-2xl"
        >
          <Image
            src="/images/profile.png"
            alt="Sakib Portrait"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
