"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function KursSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={sectionRef} className="bg-stone-800 py-32 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Bild mit Parallax */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative h-[600px] overflow-hidden"
        >
          <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
            <Image
              src="/home/namor.jpeg"
              alt="Namor beim Töpfern"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>

        {/* Text */}
        <div className="flex flex-col gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.4em] uppercase text-stone-400"
          >
            Kurse & Workshops
          </motion.p>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl text-white tracking-wide"
            >
              Lerne es selbst.
            </motion.h2>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
            className="w-16 h-px bg-stone-500"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-stone-400 leading-relaxed"
          >
            In kleinen Gruppen von maximal 6 Personen lernst du die Grundlagen
            des Töpferns. Vom ersten Zentrieren bis zum fertigen Stück —
            begleitet von Namor persönlich.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/kurse"
              className="inline-block text-xs tracking-[0.3em] uppercase text-white border-b border-stone-500 hover:border-white pb-1 transition-colors duration-300 w-fit"
            >
              Kurs buchen
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
