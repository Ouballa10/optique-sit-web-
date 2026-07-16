"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award } from "lucide-react";
import { BRANDS } from "@/lib/data";

const BRAND_COLORS: Record<string, string> = {
  "Ray-Ban": "#C8102E",
  Oakley: "#DA291C",
  Police: "#1B1B1B",
  Guess: "#C9AA71",
  Carrera: "#E30613",
  Vogue: "#000000",
  "Tom Ford": "#8B6914",
  Prada: "#000000",
  Persol: "#1B4F72",
  Silhouette: "#2E86AB",
  Lindberg: "#4A4A4A",
  "Maui Jim": "#005A9C",
};

export default function Brands() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="brands"
      className="py-24 lg:py-32 bg-[#FAFAFA] dark:bg-[#0a0a0a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Award size={12} />
            Marques officielles
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-[#111] dark:text-white mb-5"
          >
            Les plus grandes{" "}
            <span className="text-gradient-gold">marques mondiales</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto"
          >
            Revendeur officiel des maisons de lunetterie les plus reconnues au
            monde. Authenticité garantie.
          </motion.p>
        </div>

        {/* Brands grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative bg-white dark:bg-[#141414] rounded-2xl p-5 flex flex-col items-center justify-center gap-2 shadow-luxury hover:shadow-luxury-lg transition-all duration-400 hover:-translate-y-1 cursor-pointer border border-gray-100 dark:border-white/5"
            >
              {/* Brand monogram */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${BRAND_COLORS[brand.name] || "#B40000"}12`,
                  color: BRAND_COLORS[brand.name] || "#B40000",
                }}
              >
                {brand.logo}
              </div>
              <div className="text-center">
                <div className="font-semibold text-xs text-[#111] dark:text-white group-hover:text-[#B40000] transition-colors">
                  {brand.name}
                </div>
                <div className="text-gray-400 text-[10px] mt-0.5">
                  {brand.country}
                </div>
              </div>

              {/* Hover border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2"
                style={{ borderColor: `${BRAND_COLORS[brand.name] || "#B40000"}30` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Infinite scroll strip */}
        <div className="mt-16 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FAFAFA] dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FAFAFA] dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 items-center py-3"
            style={{ width: "max-content" }}
          >
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <span
                key={`${brand.name}-${i}`}
                className="font-display text-2xl font-bold text-gray-200 dark:text-white/5 whitespace-nowrap px-4"
              >
                {brand.name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
