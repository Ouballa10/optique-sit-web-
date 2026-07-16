"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Award, Target, Heart, Users, CheckCircle } from "lucide-react";

const VALUES = [
  {
    icon: Award,
    title: "Excellence",
    description: "Les plus hauts standards de qualité optique, sans compromis.",
    color: "#B40000",
  },
  {
    icon: Target,
    title: "Précision",
    description: "Des examens rigoureux pour une correction visuelle parfaite.",
    color: "#D4AF37",
  },
  {
    icon: Heart,
    title: "Bienveillance",
    description: "Une approche humaine et personnalisée pour chaque client.",
    color: "#B40000",
  },
  {
    icon: Users,
    title: "Accessibilité",
    description: "Des tarifs transparents et des solutions pour tous les budgets.",
    color: "#D4AF37",
  },
];

const MILESTONES = [
  "Plus de 10 ans d'expertise en optique",
  "Opticien et optométriste diplômés d'État",
  "Équipements de dernière génération",
  "Revendeur officiel des marques premium",
  "Suivi et fidélisation personnalisés",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-white dark:bg-[#111111] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-luxury-lg">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80"
                alt="Notre équipe d'experts"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 glass-card dark:bg-[#1a1a1a]/90 rounded-2xl p-5 shadow-luxury-lg border border-white/30 dark:border-white/10"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "10+", label: "Années" },
                  { value: "4K+", label: "Clients" },
                  { value: "500+", label: "Montures" },
                  { value: "9+", label: "Marques" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-2xl font-bold text-[#B40000]">
                      {s.value}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-5 -left-5 w-20 h-20 gradient-primary rounded-2xl flex flex-col items-center justify-center shadow-red"
            >
              <span className="text-white font-display font-bold text-xl leading-none">
                #1
              </span>
              <span className="text-white/70 text-[9px] tracking-wide mt-1 text-center leading-tight">
                OPTIQUE<br/>AÏT OURIR
              </span>
            </motion.div>
          </motion.div>

          {/* Right – Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B40000]/8 dark:bg-[#B40000]/15 rounded-full text-[#B40000] text-xs font-semibold tracking-wider uppercase mb-6">
              <Heart size={12} />
              Notre histoire
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#111] dark:text-white mb-6 leading-tight">
              Plus qu&apos;un opticien,{" "}
              <span className="text-gradient-primary">votre partenaire visuel</span>
            </h2>

            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-4">
              Depuis plus de 10 ans, le Centre d&apos;Optique Aït Ourir accompagne
              les habitants de la région de Marrakech avec passion et expertise.
              Notre mission : offrir une vision parfaite à chacun, avec les
              meilleures technologies et les plus grandes marques mondiales.
            </p>

            <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
              Notre équipe d&apos;opticiens et d&apos;optométristes diplômés est à votre
              service pour vous guider vers la correction visuelle idéale,
              adaptée à votre mode de vie et à votre style.
            </p>

            {/* Milestones */}
            <ul className="space-y-3 mb-10">
              {MILESTONES.map((m, i) => (
                <motion.li
                  key={m}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-[#111] dark:text-white/80"
                >
                  <div className="w-5 h-5 rounded-full bg-[#B40000]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={12} className="text-[#B40000]" />
                  </div>
                  {m}
                </motion.li>
              ))}
            </ul>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {VALUES.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="group p-4 bg-gray-50 dark:bg-[#141414] rounded-2xl border border-gray-100 dark:border-white/5 hover:border-[#B40000]/20 transition-colors duration-300"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${v.color}12` }}
                    >
                      <Icon size={18} style={{ color: v.color }} />
                    </div>
                    <div className="font-semibold text-sm text-[#111] dark:text-white mb-1">
                      {v.title}
                    </div>
                    <div className="text-xs text-gray-400 leading-relaxed">
                      {v.description}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
