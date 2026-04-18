"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900">
      
      {/* Hintergrund */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 to-stone-900/80 z-10" />
      
      {/* Hintergrundbild Platzhalter */}
      <div className="absolute inset-0 bg-stone-700" />

      {/* Inhalt */}
      <div className="relative z-20 text-center text-white px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs tracking-[0.4em] uppercase text-stone-300 mb-6"
        >
          Handwerk mit Seele
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-6xl md:text-8xl tracking-widest uppercase mb-8"
        >
          Namor
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-16 h-px bg-stone-400 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-sm tracking-[0.2em] uppercase text-stone-300"
        >
          Töpfern · Kurse · Galerie
        </motion.p>
      </div>

      {/* Scroll Indikator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-stone-400">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-stone-400"
        />
      </motion.div>

    </section>
  );
}