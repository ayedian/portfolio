import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/ui/Navbar"
import Home from "./sections/Home"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import "./App.css"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="py-10 text-center text-sm text-muted">
          © {new Date().getFullYear()} Jan Karol Bondoc, All Rights Reserved
        </footer>
      </div>
    </Router>
  )
}
