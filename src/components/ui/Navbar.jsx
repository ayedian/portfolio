import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--bg)] shadow-md z-50">
      <div className="container flex items-center justify-between py-4">
        <h1 className="text-xl font-bold text-accent">Bondoc</h1>
        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}