"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, ChevronDown, Star, Award, Users, Sparkles } from "lucide-react";

const STATS = [
  { value: "10+", label: "Ans d'expertise" },
  { value: "4K+", label: "Clients satisfaits" },
  { value: "500+", label: "Montures en stock" },
  { value: "9+", label: "Marques premium" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1920&q=90"
          alt="Collection lunettes premium"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#B40000]/20 via-transparent to-transparent" />
      </motion.div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left */}
          <div className="text-white">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-medium tracking-wider mb-6 border border-[#D4AF37]/30"
            >
              <Sparkles size={13} className="text-[#D4AF37]" />
              <span className="text-[#D4AF37]">CENTRE D&apos;OPTIQUE PREMIUM</span>
              <span className="text-white/40">•</span>
              <span className="text-white/60">AÏT OURIR, MARRAKECH</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
            >
              Votre vision{" "}
              <span className="block">mérite</span>
              <span className="block text-gradient-gold">l&apos;excellence.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/70 text-lg mb-3 leading-relaxed"
            >
              Examen de la vue • Lunettes • Lentilles • Marques internationales
            </motion.p>

            {/* Stars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 mb-10"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className="text-[#D4AF37] fill-[#D4AF37]"
                  />
                ))}
              </div>
              <span className="text-white/60 text-sm">
                4,9/5 · +300 avis Google
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(180,0,0,0.4)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-3 px-8 py-4 gradient-primary rounded-2xl font-semibold text-white shadow-red transition-all duration-300 group"
              >
                <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
                Prendre rendez-vous
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#collections")}
                className="flex items-center gap-3 px-8 py-4 glass border border-white/20 hover:border-white/40 rounded-2xl font-semibold text-white transition-all duration-300"
              >
                Découvrir nos collections
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="grid grid-cols-4 gap-4 mt-14 pt-8 border-t border-white/10"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-2xl font-bold text-[#D4AF37]">
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right – Floating Glass Cards */}
          <div className="hidden lg:block relative h-[500px]">
            {/* Main card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="animate-float absolute top-8 right-0 w-72 glass rounded-3xl p-5 shadow-luxury-lg border border-white/15"
            >
              <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&q=80"
                  alt="Lunettes premium"
                  fill
                  sizes="288px"
                  className="object-cover"
                />
              </div>
              <div className="text-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-display font-semibold">Tom Ford Milano</span>
                  <span className="text-[#D4AF37] font-semibold text-sm">1 200 MAD</span>
                </div>
                <span className="text-white/40 text-xs">Monture Titanium Premium</span>
              </div>
            </motion.div>

            {/* Brand badge card */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="animate-float-delay absolute bottom-24 left-0 glass rounded-2xl p-4 shadow-luxury border border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center">
                  <Award size={20} className="text-[#D4AF37]" />
                </div>
                <div className="text-white">
                  <div className="font-semibold text-sm">Marques Officielles</div>
                  <div className="text-white/50 text-xs">9+ marques internationales</div>
                </div>
              </div>
            </motion.div>

            {/* Client count card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-10 right-12 glass rounded-2xl p-4 shadow-luxury border border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#B40000]/20 rounded-xl flex items-center justify-center">
                  <Users size={20} className="text-[#B40000]" />
                </div>
                <div className="text-white">
                  <div className="font-semibold text-sm">4,330+ Abonnés</div>
                  <div className="text-white/50 text-xs">Instagram · Aït Ourir</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#why-us")}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-white/80 transition-colors"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
