"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  ClipboardList,
  Scan,
  Eye,
  CheckCircle,
  Package,
} from "lucide-react";
import { EYE_TEST_STEPS } from "@/lib/data";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Calendar,
  ClipboardList,
  Scan,
  Eye,
  CheckCircle,
  Package,
};

export default function EyeTestProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      className="py-24 lg:py-32 bg-[#FAFAFA] dark:bg-[#0a0a0a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#B40000]/8 dark:bg-[#B40000]/15 rounded-full text-[#B40000] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Eye size={12} />
            Processus d&apos;examen
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-[#111] dark:text-white mb-5"
          >
            De la consultation{" "}
            <span className="text-gradient-primary">à vos lunettes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Un parcours simple et transparent pour obtenir la correction parfaite.
          </motion.p>
        </div>

        {/* Steps timeline */}
        <div className="relative">
          {/* Connecting line – desktop */}
          <div className="hidden lg:block absolute top-16 left-[calc(8.33%+28px)] right-[calc(8.33%+28px)] h-0.5 bg-gradient-to-r from-[#B40000] via-[#D4AF37] to-[#B40000] opacity-20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
            {EYE_TEST_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon] || Eye;
              const isGold = i % 2 !== 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="bg-white dark:bg-[#141414] rounded-3xl p-7 shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-white/5 h-full">
                    {/* Step number */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                          isGold
                            ? "bg-[#D4AF37]/10"
                            : "bg-[#B40000]/10"
                        }`}
                      >
                        <Icon
                          size={24}
                          className={isGold ? "text-[#D4AF37]" : "text-[#B40000]"}
                        />
                      </div>
                      <span
                        className={`font-display text-5xl font-bold opacity-10 ${
                          isGold ? "text-[#D4AF37]" : "text-[#B40000]"
                        }`}
                      >
                        {step.step}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-xl text-[#111] dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Bottom accent */}
                    <div
                      className={`absolute bottom-0 left-7 right-7 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        isGold
                          ? "bg-gradient-to-r from-[#D4AF37] to-transparent"
                          : "bg-gradient-to-r from-[#B40000] to-transparent"
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-14"
        >
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-3 px-8 py-4 gradient-primary text-white rounded-2xl font-semibold shadow-red hover:shadow-lg hover:opacity-90 transition-all duration-300"
          >
            <Calendar size={18} />
            Réserver mon examen
          </button>
        </motion.div>
      </div>
    </section>
  );
}
