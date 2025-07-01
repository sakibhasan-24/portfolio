"use client";

import Glow from "@/components/common/Glow";
import { educationList } from "@/data/educationLists";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="relative max-w-4xl mx-auto py-20 px-6 md:px-0 text-white my-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl font-bold mb-16 tracking-wide text-purple-400"
      >
        Education
      </motion.h2>

      {/* Vertical line */}
      <div className="absolute left-10 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-indigo-500 rounded"></div>

      <div className="space-y-12">
        {educationList.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative flex items-start pl-20"
          >
            <Glow />
            {/* Circle */}
            <div className="absolute left-4 top-2 w-6 h-6 rounded-full bg-purple-600 shadow-lg shadow-purple-600/50"></div>

            {/* Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 shadow-lg max-w-xl hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-xl font-semibold text-purple-300">
                {item.title}
              </h3>
              <p className="text-sm italic text-gray-400 mt-1">
                {item.institution} • {item.year}
              </p>
              <p className="mt-3 text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
