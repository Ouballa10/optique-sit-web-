"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Eye,
  Sun,
  Circle,
  Baby,
  Wrench,
  Glasses,
  ArrowRight,
  Check,
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Eye,
  Sun,
  Circle,
  Baby,
  Wrench,
  Glasses,
};

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = ICON_MAP[service.icon] || Eye;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white dark:bg-[#141414] rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2 border border-gray-100/80 dark:border-white/5"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Icon badge */}
        <div
          className={`absolute top-4 left-4 w-11 h-11 rounded-2xl flex items-center justify-center ${
            service.color === "red"
              ? "bg-[#B40000]"
              : "bg-[#D4AF37]"
          }`}
        >
          <Icon size={20} className="text-white" />
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-4 left-5 right-5">
          <div className="text-white/60 text-xs font-medium mb-1">
            {service.subtitle}
          </div>
          <h3 className="font-display text-xl font-bold text-white">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-[#111] dark:text-white/80">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                  service.color === "red"
                    ? "bg-[#B40000]/10"
                    : "bg-[#D4AF37]/10"
                }`}
              >
                <Check
                  size={11}
                  className={
                    service.color === "red" ? "text-[#B40000]" : "text-[#D4AF37]"
                  }
                />
              </div>
              {f}
            </li>
          ))}
        </ul>

        <button
          onClick={() => {
            const el = document.querySelector("#contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 group/btn ${
            service.color === "red"
              ? "bg-[#B40000]/10 hover:bg-[#B40000] text-[#B40000] hover:text-white"
              : "bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-white"
          }`}
        >
          En savoir plus
          <ArrowRight
            size={15}
            className="group-hover/btn:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-white dark:bg-[#111111] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#B40000]/3 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#D4AF37]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#B40000]/8 dark:bg-[#B40000]/15 rounded-full text-[#B40000] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Eye size={12} />
            Nos prestations
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-[#111] dark:text-white mb-5"
          >
            Services{" "}
            <span className="text-gradient-primary">complets</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            De l&apos;examen de la vue à la livraison de vos lunettes, nous
            prenons soin de chaque étape avec professionnalisme.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
