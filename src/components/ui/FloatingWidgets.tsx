"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Calendar } from "lucide-react";
import { useState } from "react";
import { SITE_CONFIG } from "@/lib/data";

export default function FloatingWidgets() {
  const [showLabel, setShowLabel] = useState<string | null>(null);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* Appointment button */}
      <div className="relative">
        <AnimatePresence>
          {showLabel === "rdv" && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-14 top-1/2 -translate-y-1/2 bg-[#111] dark:bg-white text-white dark:text-[#111] text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg"
            >
              Rendez-vous
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToContact}
          onMouseEnter={() => setShowLabel("rdv")}
          onMouseLeave={() => setShowLabel(null)}
          className="w-12 h-12 gradient-primary rounded-full shadow-red flex items-center justify-center text-white"
          aria-label="Prendre rendez-vous"
        >
          <Calendar size={20} />
        </motion.button>
      </div>

      {/* Phone */}
      <div className="relative">
        <AnimatePresence>
          {showLabel === "phone" && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-14 top-1/2 -translate-y-1/2 bg-[#111] dark:bg-white text-white dark:text-[#111] text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg"
            >
              {SITE_CONFIG.phone}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.a
          href={`tel:${SITE_CONFIG.phone}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={() => setShowLabel("phone")}
          onMouseLeave={() => setShowLabel(null)}
          className="w-12 h-12 bg-[#111] dark:bg-white rounded-full shadow-luxury flex items-center justify-center text-white dark:text-[#111]"
          aria-label="Appeler"
        >
          <Phone size={20} />
        </motion.a>
      </div>

      {/* WhatsApp */}
      <div className="relative">
        <AnimatePresence>
          {showLabel === "wa" && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-14 top-1/2 -translate-y-1/2 bg-[#25D366] text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg"
            >
              WhatsApp
            </motion.div>
          )}
        </AnimatePresence>
        <motion.a
          href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Bonjour, je voudrais prendre rendez-vous`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={() => setShowLabel("wa")}
          onMouseLeave={() => setShowLabel(null)}
          className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center text-white"
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} />
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        </motion.a>
      </div>
    </div>
  );
}
