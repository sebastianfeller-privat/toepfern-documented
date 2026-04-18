"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjektCardProps {
  titel: string;
  kategorie: string;
  bildPfad: string;
  index: number;
}

export default function ProjektCard({ titel, kategorie, bildPfad, index }: ProjektCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group cursor-pointer"
    >
      {/* Echtes Bild */}
      <div className="w-full h-72 overflow-hidden mb-6 relative">
        <Image
          src={bildPfad}
          alt={titel}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-600"
        />
      </div>

      {/* Info */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-2">
            {kategorie}
          </p>
          <h3 className="font-serif text-xl text-stone-800 capitalize">
            {titel}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}