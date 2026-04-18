"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function KursSection() {
  return (
    <section className="bg-stone-800 py-32 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Bild Platzhalter */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-96 bg-stone-700"
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-stone-400">
            Kurse & Workshops
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-wide">
            Lerne es selbst.
          </h2>

          <div className="w-16 h-px bg-stone-500" />

          <p className="text-stone-400 leading-relaxed">
            In kleinen Gruppen von maximal 6 Personen lernst du die Grundlagen 
            des Töpferns. Vom ersten Zentrieren bis zum fertigen Stück — 
            begleitet von Namor persönlich.
          </p>

          <Link
            href="/kurse"
            className="inline-block text-xs tracking-[0.3em] uppercase text-white border-b border-stone-500 hover:border-white pb-1 transition-colors duration-300 w-fit"
          >
            Kurs buchen
          </Link>
        </motion.div>

      </div>
    </section>
  );
}