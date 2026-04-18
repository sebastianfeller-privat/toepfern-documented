"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjektCard from "./ProjektCard";

interface Projekt {
  titel: string;
  kategorie: string;
  bildPfad: string;
}

interface GalerieFilterProps {
  projekte: Projekt[];
  kategorien: string[];
}

export default function GalerieFilter({ projekte, kategorien }: GalerieFilterProps) {
  const [aktiv, setAktiv] = useState("Alle");

  const gefiltert = aktiv === "Alle"
    ? projekte
    : projekte.filter((p) => p.kategorie === aktiv);

  return (
    <div>
      {/* Filter */}
      <div className="flex gap-8 mb-16 justify-center">
        {["Alle", ...kategorien].map((kat) => (
          <button
            key={kat}
            onClick={() => setAktiv(kat)}
            className={`text-xs tracking-[0.3em] uppercase transition-colors duration-300 pb-1 capitalize ${
              aktiv === kat
                ? "text-stone-800 border-b border-stone-800"
                : "text-stone-400 hover:text-stone-600"
            }`}
          >
            {kat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {gefiltert.map((projekt, index) => (
          <ProjektCard
            key={projekt.bildPfad}
            titel={projekt.titel}
            kategorie={projekt.kategorie}
            bildPfad={projekt.bildPfad}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
}