"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = [
  { title: "Experience", href: "/experience" },
  { title: "Execution", href: "/execution" },
  { title: "Projects", href: "/portfolio" },
  { title: "DQMs", href: "/dqm" },
  { title: "AI Lab", href: "/ai" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">


        {/* Desktop Menu */}
        {/* Note: I changed md:flex to lg:flex here so your 7 menu items don't overlap your social icons on smaller laptops */}
        <nav className="hidden gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/lijochungath"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 transition hover:text-white"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/lijochungathjose/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 transition hover:text-blue-400"
          >
            <FaLinkedin size={20} />
          </a>
           
          <Link 
            href="/#hero" 
            className="hidden rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 md:block"
          >
            About Me
          </Link>
             <Link 
            href="/contact" 
            className="hidden rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 md:block"
          >
            Contact Me
          </Link>
        </div>

      </div>
    </header>
  );
}