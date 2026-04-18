"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-5 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}>
        <Link href="/" className={`font-serif text-xl tracking-widest uppercase transition-colors duration-500 ${
          scrolled || menuOpen ? "text-gray-900" : "text-white"
        }`}>
          Namor
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 list-none">
          {["Home", "Galerie", "Kurse"].map((item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`text-xs tracking-[0.2em] uppercase transition-colors duration-500 hover:opacity-60 ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`md:hidden flex flex-col gap-1.5 p-3 transition-colors duration-500 ${
            scrolled || menuOpen ? "text-gray-900" : "text-white"
        }`}
        >
          <span className={`block w-6 h-px bg-current transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-current transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-12 transition-opacity duration-300 ${
        menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
        <button
        onClick={() => setMenuOpen(prev => !prev)}
        className="relative w-8 h-8 flex items-center justify-center z-50"
        >
        <span
            className={`block absolute w-6 h-px bg-stone-900 transition-transform duration-300 ${
            menuOpen ? "rotate-45" : "-translate-y-2"
            }`}
        />
        <span
            className={`block absolute w-6 h-px bg-stone-900 transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
            }`}
        />
        <span
            className={`block absolute w-6 h-px bg-stone-900 transition-transform duration-300 ${
            menuOpen ? "-rotate-45" : "translate-y-2"
            }`}
        />
        </button>
        {["Home", "Galerie", "Kurse"].map((item) => (
            <Link
            key={item}
            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="font-serif text-4xl text-gray-900 tracking-widest"
            >
            {item}
            </Link>
        ))}
        </div>
      )}
    </>
  );
}