"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Calendar, MessageCircle, Phone, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1920&q=80"
          alt="CTA Background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-[#1a0000]/85 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#B40000]/20 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#B40000]/10 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-medium tracking-wider mb-6 border border-[#D4AF37]/30"
        >
          <Sparkles size={13} className="text-[#D4AF37]" />
          <span className="text-[#D4AF37]">CONSULTATION GRATUITE</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Prenez soin de{" "}
          <span className="text-gradient-gold">votre vision</span>{" "}
          aujourd&apos;hui
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Réservez votre examen de la vue dès maintenant. Notre équipe d&apos;experts
          est prête à vous accueillir avec les dernières technologies optiques.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 25px 50px rgba(180,0,0,0.5)" }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToContact}
            className="flex items-center gap-3 px-10 py-5 gradient-primary text-white rounded-2xl font-bold text-base shadow-red transition-all duration-300 group min-w-[220px]"
          >
            <Calendar size={20} className="group-hover:rotate-12 transition-transform" />
            Prendre rendez-vous
          </motion.button>

          <motion.a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Bonjour, je voudrais prendre rendez-vous`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-2xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 min-w-[220px]"
          >
            <MessageCircle size={20} />
            WhatsApp
          </motion.a>

          <motion.a
            href={`tel:${SITE_CONFIG.phone}`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-8 py-5 glass border border-white/20 hover:border-white/40 text-white rounded-2xl font-semibold text-base transition-all duration-300"
          >
            <Phone size={20} />
            Appeler
          </motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/40 text-xs"
        >
          {[
            "✓ Examen gratuit dès l'achat",
            "✓ Livraison en 48h",
            "✓ Garantie 1 an",
            "✓ Retouches gratuites",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
