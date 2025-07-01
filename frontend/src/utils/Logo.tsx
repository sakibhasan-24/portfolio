import React from "react";

export default function Logo() {
  return (
    <a
      href="#hero"
      className="flex items-center space-x-3 font-extrabold text-2xl tracking-wide text-white hover:text-purple-400 transition"
      aria-label="logic"
    >
      <svg
        className="w-8 h-8 text-purple-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2l7 4v8l-7 4-7-4V6l7-4z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V12" />
      </svg>

      <span>MERN</span>
    </a>
  );
}
