"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Award,
  Clock,
  HeartHandshake,
  Microscope,
  Star,
} from "lucide-react";

const FEATURES = [
  {
    icon: Microscope,
    title: "Équipements de pointe",
    description:
      "Les dernières technologies d'optométrie pour un examen de la vue précis et complet.",
    color: "#B40000",
  },
  {
    icon: Award,
    title: "Marques certifiées",
    description:
      "Revendeur officiel des plus grandes marques mondiales : Ray-Ban, Oakley, Tom Ford, Prada...",
    color: "#D4AF37",
  },
  {
    icon: HeartHandshake,
    title: "Conseil personnalisé",
    description:
      "Notre équipe vous accompagne de l'examen au choix de vos lunettes, avec patience et expertise.",
    color: "#B40000",
  },
  {
    icon: Shield,
    title: "Garantie & SAV",
    description:
      "Garantie 1 an sur toutes nos montures. Réparations, ajustements et nettoyage gratuits à vie.",
    color: "#D4AF37",
  },
  {
    icon: Clock,
    title: "Livraison express 48h",
    description:
      "Vos lunettes prêtes en 24 à 48 heures pour la plupart des corrections. Sur place ou livraison.",
    color: "#B40000",
  },
  {
    icon: Star,
    title: "Excellence reconnue",
    description:
      "4,9/5 sur Google avec plus de 300 avis. La confiance de toute la région d'Aït Ourir.",
    color: "#D4AF37",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white dark:bg-[#141414] rounded-3xl p-7 shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-white/5"
    >
      {/* Gradient overlay on hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${feature.color}08 0%, transparent 60%)`,
        }}
      />

      {/* Icon */}
      <div
        className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${feature.color}12` }}
      >
        <Icon size={26} style={{ color: feature.color }} />
      </div>

      <h3 className="font-display font-semibold text-xl mb-3 text-[#111] dark:text-white">
        {feature.title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
        {feature.description}
      </p>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-7 right-7 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
      />
    </motion.div>
  );
}

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-[#FAFAFA] dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#B40000]/8 dark:bg-[#B40000]/15 rounded-full text-[#B40000] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Star size={12} className="fill-[#B40000]" />
            Pourquoi nous choisir
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-[#111] dark:text-white mb-5"
          >
            L&apos;excellence optique{" "}
            <span className="text-gradient-primary">à votre portée</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Nous combinons expertise clinique, marques premium et service
            personnalisé pour vous offrir la meilleure expérience optique.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
