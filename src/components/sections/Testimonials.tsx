"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

const AVATAR_COLORS: Record<string, string> = {
  FZ: "#B40000",
  MA: "#1a6b3c",
  AK: "#D4AF37",
  YM: "#1e40af",
  NR: "#7c3aed",
};

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof TESTIMONIALS)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white dark:bg-[#141414] rounded-3xl p-7 shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-white/5 relative flex flex-col"
    >
      {/* Quote icon */}
      <div className="absolute top-5 right-6 opacity-5">
        <Quote size={50} className="fill-[#B40000] text-[#B40000]" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1 mb-5">
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
            style={{ backgroundColor: AVATAR_COLORS[t.avatar] || "#B40000" }}
          >
            {t.avatar}
          </div>
          <div>
            <div className="font-semibold text-sm text-[#111] dark:text-white">
              {t.name}
            </div>
            <div className="text-gray-400 text-xs">{t.date}</div>
          </div>
        </div>

        {/* Google badge */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 dark:bg-white/5 rounded-lg">
          <div className="flex gap-0.5">
            <span className="text-[#4285F4] text-xs font-bold">G</span>
          </div>
          <span className="text-gray-400 text-xs">Google</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-white dark:bg-[#111111] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Star size={12} className="fill-[#D4AF37]" />
            Avis clients
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-[#111] dark:text-white mb-5"
          >
            Ce que disent{" "}
            <span className="text-gradient-gold">nos clients</span>
          </motion.h2>

          {/* Global rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 mt-2"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
            <span className="font-display text-3xl font-bold text-[#111] dark:text-white">
              4,9
            </span>
            <span className="text-gray-400 text-sm">/ 5 sur Google</span>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} />
          ))}
        </div>

        {/* Google CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://g.page/r/optique-ait-ourir/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 border border-gray-200 dark:border-white/10 rounded-2xl text-sm font-medium hover:border-[#4285F4] hover:text-[#4285F4] transition-all duration-300 group"
          >
            <span className="font-bold text-[#4285F4] text-lg">G</span>
            Laisser un avis Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
