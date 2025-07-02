// components/common/Footer.tsx

"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiLeetcode, SiWhatsapp } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-20 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <p className="text-lg font-semibold text-purple-400">
          © {new Date().getFullYear()} Sakib Hasan
        </p>

        {/* Middle - Navigation */}
        <div className="flex gap-6 text-sm font-medium text-white/70">
          <a href="#hero" className="hover:text-purple-400 transition">
            Home
          </a>
          <a href="#projects" className="hover:text-purple-400 transition">
            Projects
          </a>
          <a href="#tech" className="hover:text-purple-400 transition">
            Tech Stack
          </a>
          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
