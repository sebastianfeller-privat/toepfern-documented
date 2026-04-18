"use client";

import { motion } from "framer-motion";

const WERKE = [
  {
    titel: "Steinzeug Vase",
    material: "Steinzeug · Holzbrand",
    jahr: "2024",
  },
  {
    titel: "Schalen Serie",
    material: "Porzellan · Glasur",
    jahr: "2024",
  },
  {
    titel: "Krug No. 7",
    material: "Irdenware · Naturglasur",
    jahr: "2023",
  },
];

export default function Werke() {
  return (
    <section className="bg-stone-900 py-32 px-8">
      <div className="max-w-6xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-6 text-center"
        >
          Ausgewählte Werke
        </motion.p>

        {/* Mask-Reveal Heading */}
        <div className="overflow-hidden mb-16 text-center">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-white tracking-wide"
          >
            Aus der Werkstatt
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WERKE.map((werk, index) => (
            <motion.div
              key={werk.titel}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
              className="bg-stone-800 p-8 cursor-pointer group border-b-2 border-transparent hover:border-stone-500 transition-colors duration-500"
            >
              {/* Bild Platzhalter */}
              <div className="w-full h-64 bg-stone-700 mb-8 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full h-full bg-stone-600"
                />
              </div>

              <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-3">
                {werk.material}
              </p>
              <h3 className="font-serif text-2xl text-white mb-2">
                {werk.titel}
              </h3>
              <p className="text-xs tracking-widest text-stone-500">
                {werk.jahr}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/galerie"
            className="text-xs tracking-[0.3em] uppercase text-stone-400 hover:text-white transition-colors duration-300 border-b border-stone-600 hover:border-white pb-1"
          >
            Alle Werke ansehen
          </a>
        </motion.div>

      </div>
    </section>
  );
}
