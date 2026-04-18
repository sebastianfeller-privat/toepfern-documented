"use client";

import { motion } from "framer-motion";

export default function GalerieHeader() {
  return (
    <div className="bg-stone-900 pt-40 pb-24 px-8 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-6"
      >
        Arbeiten
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-serif text-5xl md:text-7xl text-white tracking-wide"
      >
        Galerie
      </motion.h1>
    </div>
  );
}