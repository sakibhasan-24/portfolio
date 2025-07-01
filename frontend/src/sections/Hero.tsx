export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-secondary text-white"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-primary glow-text">
        Hi, I'm Sakib Hasan
      </h1>
      <p className="max-w-xl text-primary text-lg md:text-xl mb-8">
        I build intelligent and beautiful web experiences with Next.js,
        TypeScript, and Tailwind CSS.
      </p>
      <a
        href="#projects"
        className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-600 transition"
      >
        See My Work
      </a>
    </section>
  );
}
