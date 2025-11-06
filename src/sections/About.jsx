import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">
          About Me
        </h2>

        <p className="text-lg text-muted mb-8 text-center">
          Hi! I’m <span className="text-purple-300 font-semibold">Bondoc Jan Karol</span> —
          I’m a creative individual who enjoys drawing, improving my coding skills, and
          connecting with others. I’m passionate about learning and growing through every
          project I take on.
        </p>

        <h3 className="text-xl font-semibold mb-4 text-purple-300 text-center">
          My Skills
        </h3>

        {/* 💜 Stylish skill list */}
        <ul className="grid sm:grid-cols-2 gap-3 text-center">
          <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border border-purple-500/20 hover:border-purple-400 transition">
            • Communicating Skills
          </li>
          <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border border-purple-500/20 hover:border-purple-400 transition">
            • Computer Skills
          </li>
          <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border border-purple-500/20 hover:border-purple-400 transition">
            • Drawing Skills
          </li>
          <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border border-purple-500/20 hover:border-purple-400 transition">
            • Critical Thinking Skills
          </li>
          <li className="bg-[rgba(255,255,255,0.05)] p-3 rounded-lg border border-purple-500/20 hover:border-purple-400 transition">
            • Active Listening Skills
          </li>
        </ul>
      </div>
    </section>
  );
}