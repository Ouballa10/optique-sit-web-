"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Heart, Eye, ShoppingBag, Sparkles } from "lucide-react";
import { COLLECTIONS } from "@/lib/data";

const FILTERS = [
  { label: "Tous", value: "all" },
  { label: "Hommes", value: "men" },
  { label: "Femmes", value: "women" },
  { label: "Enfants", value: "kids" },
  { label: "Solaires", value: "sunglasses" },
  { label: "Optique", value: "optical" },
];

function ProductCard({ item, index }: { item: (typeof COLLECTIONS)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      layout
      className="group bg-white dark:bg-[#141414] rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2 border border-gray-100/80 dark:border-white/5"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden bg-gray-50 dark:bg-[#1a1a1a]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Badge */}
        {item.badge && (
          <div
            className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white ${
              item.badgeColor === "gold" ? "bg-[#D4AF37]" : "bg-[#B40000]"
            }`}
          >
            {item.badge}
          </div>
        )}

        {/* Actions overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setLiked(!liked)}
            className="w-9 h-9 bg-white dark:bg-[#141414] rounded-xl flex items-center justify-center shadow-lg"
          >
            <Heart
              size={15}
              className={liked ? "fill-[#B40000] text-[#B40000]" : "text-gray-400"}
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 bg-white dark:bg-[#141414] rounded-xl flex items-center justify-center shadow-lg"
          >
            <Eye size={15} className="text-gray-400" />
          </motion.button>
        </div>

        {/* Quick add button */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full py-2.5 bg-white/95 dark:bg-[#141414]/95 backdrop-blur rounded-xl text-xs font-semibold text-[#111] dark:text-white flex items-center justify-center gap-2 hover:bg-[#B40000] hover:text-white transition-all duration-200"
          >
            <ShoppingBag size={13} />
            Demander en boutique
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="text-xs text-gray-400 dark:text-gray-500 font-medium mb-1">
          {item.brand}
        </div>
        <h3 className="font-display font-semibold text-[#111] dark:text-white mb-2">
          {item.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="font-bold text-[#B40000] text-lg">{item.price}</span>
          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-white/5 rounded-lg text-gray-500 dark:text-gray-400 capitalize">
            {item.type === "sunglasses" ? "Solaires" : "Optique"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Collections() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = COLLECTIONS.filter((c) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "sunglasses") return c.type === "sunglasses";
    if (activeFilter === "optical") return c.type === "optical";
    return c.category === activeFilter;
  });

  return (
    <section
      id="collections"
      className="py-24 lg:py-32 bg-white dark:bg-[#111111]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#B40000]/8 dark:bg-[#B40000]/15 rounded-full text-[#B40000] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Sparkles size={12} />
            Nouvelle collection 2025
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-[#111] dark:text-white mb-5"
          >
            Nos{" "}
            <span className="text-gradient-primary">Collections</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto"
          >
            Des montures soigneusement sélectionnées parmi les plus belles
            collections mondiales.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2.5 mb-10"
        >
          {FILTERS.map((f) => (
            <motion.button
              key={f.value}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === f.value
                  ? "gradient-primary text-white shadow-red"
                  : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10"
              }`}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <ProductCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#B40000] text-[#B40000] hover:bg-[#B40000] hover:text-white rounded-2xl font-semibold transition-all duration-300"
          >
            Voir toute la collection en boutique
          </button>
        </motion.div>
      </div>
    </section>
  );
}
