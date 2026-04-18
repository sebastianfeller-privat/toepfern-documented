"use client";

import { motion } from "framer-motion";

const SCHRITTE = [
  {
    nummer: "01",
    titel: "Die Erde",
    beschreibung: "Alles beginnt mit dem Material. Ton aus nachhaltigen Quellen, sorgfältig ausgewählt.",
  },
  {
    nummer: "02",
    titel: "Die Form",
    beschreibung: "Auf der Scheibe entsteht Leben. Jede Bewegung der Hände formt ein einzigartiges Stück.",
  },
  {
    nummer: "03",
    titel: "Das Feuer",
    beschreibung: "Im Brennofen bei 1280 Grad wird Ton zu Steinzeug. Eine Transformation die nicht rückgängig zu machen ist.",
  },
  {
    nummer: "04",
    titel: "Das Werk",
    beschreibung: "Ein Stück das bleibt. Für den Alltag gemacht, für Generationen gedacht.",
  },
];

export default function Prozess() {
  return (
    <section className="bg-stone-100 py-32 px-8">
      <div className="max-w-6xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-6 text-center"
        >
          Der Weg
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-stone-800 tracking-wide mb-24 text-center"
        >
          Vom Ton zum Werk
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {SCHRITTE.map((schritt, index) => (
            <motion.div
              key={schritt.nummer}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <span className="font-serif text-6xl text-stone-200 mb-6">
                {schritt.nummer}
              </span>
              <div className="w-8 h-px bg-stone-400 mb-6" />
              <h3 className="font-serif text-2xl text-stone-800 mb-4">
                {schritt.titel}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                {schritt.beschreibung}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}