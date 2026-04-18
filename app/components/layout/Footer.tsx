"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-12 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-12">

        {/* Logo & Beschreibung */}
        <div className="flex flex-col gap-4">
          <span className="font-serif text-xl tracking-widest uppercase">
            Namor
          </span>
          <p className="text-xs tracking-widest text-gray-400 leading-relaxed uppercase">
            Handwerk mit Seele.<br/>Töpfern in seiner reinsten Form.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-4">
          <span className="text-xs tracking-[0.2em] uppercase text-gray-500">
            Navigation
          </span>
          <ul className="flex flex-col gap-3 list-none">
            {["Home", "Galerie", "Kurse"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div className="flex flex-col gap-4">
        <span className="text-xs tracking-[0.2em] uppercase text-gray-500">
            Kontakt
        </span>
        <div className="flex flex-col gap-3">
            <a
            href="mailto:namor@toepfern.de"
            className="text-xs tracking-widest uppercase text-gray-400 hover:text-white transition-colors duration-300"
            >
            namor@toepfern.de
            </a>
            <span className="text-xs tracking-widest uppercase text-gray-400">
            Zürich, Schweiz
            </span>
        </div>
        </div>

      </div>

      {/* Trennlinie & Copyright */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 flex justify-between items-center">
        <span className="text-xs tracking-widest uppercase text-gray-600">
          © 2026 Töpfern mit Namor
        </span>
        <span className="text-xs tracking-widest uppercase text-gray-600">
          Handgemacht mit Leidenschaft
        </span>
      </div>
    </footer>
  );
}