"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = [
  { title: "Blogs", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "CaseStudies", href: "#contact" },  

];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
      

        {/* Desktop Menu */}
        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <a
            href="https://github.com/lijochungath"
            target="_blank"
            className="text-slate-300 transition hover:text-white"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/lijochungathjose/"
            className="text-slate-300 transition hover:text-blue-400"
          >
            <FaLinkedin size={20} />
          </a>

      <Link 
  href="#hero" 
  className="hidden rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 md:block"
>
  About Me
</Link>

        </div>

      </div>
    </header>
  );
}