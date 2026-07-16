"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookies-accepted", "false");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-4 z-50 max-w-sm w-[calc(100%-2rem)] sm:w-auto"
        >
          <div className="glass-card dark:bg-[#111]/90 rounded-2xl p-5 shadow-luxury-lg border border-white/30 dark:border-white/10">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center">
                  <Cookie size={18} className="text-[#D4AF37]" />
                </div>
                <span className="font-semibold text-sm">Cookies</span>
              </div>
              <button
                onClick={decline}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience. En
              continuant, vous acceptez notre politique de confidentialité.
            </p>
            <div className="flex gap-2">
              <button
                onClick={accept}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 gradient-primary text-white rounded-xl text-xs font-semibold"
              >
                <Check size={13} />
                Accepter
              </button>
              <button
                onClick={decline}
                className="flex-1 py-2.5 border border-gray-200 dark:border-white/10 rounded-xl text-xs font-medium hover:border-[#B40000] hover:text-[#B40000] transition-colors"
              >
                Refuser
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
