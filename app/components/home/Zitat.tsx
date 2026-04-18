"use client";

import { motion } from "framer-motion";

export default function Zitat() {
  return (
    <section className="bg-stone-50 py-40 px-8">
      <div className="max-w-3xl mx-auto text-center">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-serif text-8xl text-stone-200 leading-none block mb-8"
        >
          "
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-serif text-2xl md:text-3xl text-stone-700 tracking-wide leading-relaxed mb-12"
        >
          Die Hände erinnern sich an Dinge die der Kopf vergessen hat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-16 h-px bg-stone-300 mx-auto mb-8"
        />

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-stone-400"
        >
          Namor · Töpfer
        </motion.span>

      </div>
    </section>
  );
}