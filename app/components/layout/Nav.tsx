"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-5 transition-all duration-500 ${
      scrolled
        ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100"
        : "bg-transparent"
    }`}>
      <Link href="/" className={`font-serif text-xl tracking-widest uppercase transition-colors duration-500 ${
        scrolled ? "text-gray-900" : "text-white"
      }`}>
        Namor
      </Link>
      <ul className="flex gap-10 list-none">
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
    </nav>
  );
}