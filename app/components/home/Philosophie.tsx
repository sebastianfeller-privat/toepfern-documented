"use client";

import { motion } from "framer-motion";

export default function Philosophie() {
  return (
    <section className="bg-stone-50 py-32 px-8">
      <div className="max-w-3xl mx-auto text-center">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-6"
        >
          Philosophie
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl text-stone-800 tracking-wide mb-10"
        >
          Jedes Stück erzählt<br/>eine Geschichte.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-16 h-px bg-stone-300 mx-auto mb-10"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-stone-500 leading-relaxed tracking-wide text-lg"
        >
          Töpfern ist mehr als Handwerk — es ist eine Verbindung zwischen 
          Mensch und Material. Jede Unebenheit, jede Spur der Hände ist 
          gewollt. Wir erschaffen keine perfekten Objekte, wir erschaffen 
          lebendige Stücke.
        </motion.p>

      </div>
    </section>
  );
}