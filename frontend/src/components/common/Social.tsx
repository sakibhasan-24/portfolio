import React from "react";
import { FaCode, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Social() {
  return (
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2 text-white text-center">
      <a
        href="https://github.com/sakibhasan-24/"
        target="_blank"
        className="p-2  rounded-xl hover:shadow-[0_0_10px_#a855f7] transition"
      >
        <FaGithub size={28} className="mx-auto mb-2" />
        <span className="block text-sm">GitHub</span>
      </a>
      <a
        href="https://www.linkedin.com/in/sakib-hasan-0b7a821a5/"
        target="_blank"
        className="p-2  rounded-xl hover:shadow-[0_0_10px_#a855f7] transition"
      >
        <FaLinkedin size={28} className="mx-auto mb-2" />
        <span className="block text-sm">LinkedIn</span>
      </a>
      <a
        href="mailto:sakibhasan200176@gmail.com"
        className="p-2  rounded-xl hover:shadow-[0_0_10px_#a855f7] transition"
      >
        <FaEnvelope size={28} className="mx-auto mb-2" />
        <span className="block text-sm">Email Me</span>
      </a>
      <a
        href="https://leetcode.com/u/sakibHasan28/"
        target="_blank"
        className="p-2  rounded-xl hover:shadow-[0_0_10px_#a855f7] transition"
      >
        <FaCode size={28} className="mx-auto mb-2" />
        <span className="block text-sm">LeetCode</span>
      </a>
    </div>
  );
}
