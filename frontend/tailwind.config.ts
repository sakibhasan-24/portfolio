module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        md: "12px",
      },
      colors: {
        primary: "#A855F7",
        secondary: "#0f172a",
      },
    },
  },
  plugins: [],
};
