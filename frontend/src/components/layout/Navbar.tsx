"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/utils/Logo";
import { motion, AnimatePresence } from "framer-motion";
const NAV_ITEMS = [
  { label: "Education", href: "#education" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50  "
    >
      <header>
        <nav className="max-w-5xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          {/* Logo */}

          <Logo />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10">
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="nav-link relative text-white font-semibold uppercase text-sm tracking-wider hover:text-purple-400 [&.active]:text-purple-400 [&.active]:underline transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 rounded-md  transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden  backdrop-blur-md border-t ">
            <ul className="flex flex-col p-4 space-y-4 text-center">
              {NAV_ITEMS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="block text-white font-semibold uppercase text-lg tracking-wide hover:text-purple-400 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </motion.div>
  );
}
