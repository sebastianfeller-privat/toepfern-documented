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

        {/* Mask-Reveal Heading */}
        <div className="overflow-hidden mb-24 text-center">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-stone-800 tracking-wide"
          >
            Vom Ton zum Werk
          </motion.h2>
        </div>

        <div className="relative">
          {/* Verbindungslinie – nur auf Desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
            className="hidden md:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-stone-300 via-stone-400 to-stone-300 z-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {SCHRITTE.map((schritt, index) => (
              <motion.div
                key={schritt.nummer}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col relative z-10"
              >
                <span className="font-serif text-6xl text-stone-200 mb-6 leading-none">
                  {schritt.nummer}
                </span>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                  viewport={{ once: true }}
                  style={{ originX: 0 }}
                  className="w-8 h-px bg-stone-400 mb-6"
                />

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

      </div>
    </section>
  );
}
