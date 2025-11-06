import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto max-w-2xl px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">
          Contact Me
        </h2>

        {/* 📨 Contact Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-[rgba(255,255,255,0.05)] p-6 rounded-xl shadow-md space-y-4"
        >
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 rounded-md bg-transparent border border-purple-400/40 focus:border-purple-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-md bg-transparent border border-purple-400/40 focus:border-purple-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full p-3 rounded-md bg-transparent border border-purple-400/40 focus:border-purple-400 outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-500 hover:bg-purple-600 rounded-md font-semibold transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* 🌐 Social Links */}
        <div className="flex justify-center gap-6 mt-8 text-2xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/ayedian"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
