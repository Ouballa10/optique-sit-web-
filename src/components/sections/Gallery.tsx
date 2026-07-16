"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/data";

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prev = () => {
    if (lightboxIndex !== null)
      setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const next = () => {
    if (lightboxIndex !== null)
      setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
  };

  return (
    <section
      id="gallery"
      className="py-24 lg:py-32 bg-[#FAFAFA] dark:bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#B40000]/8 dark:bg-[#B40000]/15 rounded-full text-[#B40000] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Camera size={12} />
            Notre galerie
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-[#111] dark:text-white mb-5"
          >
            L&apos;univers{" "}
            <span className="text-gradient-primary">Aït Ourir Optique</span>
          </motion.h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                i === 0 || i === 5 ? "md:col-span-2" : ""
              } ${i === 0 || i === 5 ? "h-64" : "h-52"}`}
              onClick={() => setLightboxIndex(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/40"
                >
                  <ZoomIn size={20} className="text-white" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-4xl w-full h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[lightboxIndex].src}
                alt={GALLERY_IMAGES[lightboxIndex].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>

            {/* Controls */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 w-11 h-11 glass rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 glass rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 glass rounded-full flex items-center justify-center text-white border border-white/20 hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {lightboxIndex + 1} / {GALLERY_IMAGES.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
