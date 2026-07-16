"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Moon,
  Sun,
  Phone,
  Search,
  ChevronDown,
  Eye,
} from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/data";

const NAV_ITEMS = [
  { label: "Accueil", href: "#hero" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Examen de la vue", href: "#services" },
      { label: "Lunettes de vue", href: "#services" },
      { label: "Lunettes de soleil", href: "#services" },
      { label: "Lentilles de contact", href: "#services" },
      { label: "Lunettes enfants", href: "#services" },
    ],
  },
  { label: "Collections", href: "#collections" },
  { label: "Marques", href: "#brands" },
  { label: "À propos", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollTo = (href: string) => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ─── colour logic ──────────────────────────────────────────────
  // On hero (not scrolled) → always white text (image behind)
  // Scrolled → white on dark-mode, dark on light-mode
  const isDark = theme === "dark";

  const textColor = isScrolled
    ? isDark
      ? "text-white"
      : "text-[#111]"
    : "text-white";               // hero always white

  const hoverBg = isScrolled
    ? isDark
      ? "hover:bg-white/10"
      : "hover:bg-black/6"
    : "hover:bg-white/10";

  const scrolledBg = isScrolled
    ? isDark
      ? "bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-white/8"
      : "bg-white/90 backdrop-blur-xl border-b border-black/6 shadow-sm"
    : "bg-transparent";
  // ──────────────────────────────────────────────────────────────

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          scrolledBg,
          isScrolled ? "py-3" : "py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* ── Logo ── */}
            <motion.button
              onClick={() => scrollTo("#hero")}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-red group-hover:scale-110 transition-transform duration-300">
                <Eye size={20} className="text-white" />
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#D4AF37] rounded-full" />
              </div>
              <div className={cn("transition-colors duration-300", textColor)}>
                <div className="font-display font-bold text-lg leading-none">
                  Aït Ourir
                </div>
                <div className="text-xs tracking-[0.2em] uppercase opacity-60 font-sans">
                  Optique
                </div>
              </div>
            </motion.button>

            {/* ── Desktop Nav ── */}
            <nav
              ref={dropdownRef}
              className="hidden lg:flex items-center gap-0.5"
            >
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        )
                      }
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                        textColor,
                        hoverBg
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <button
                      onClick={() => scrollTo(item.href)}
                      className={cn(
                        "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                        textColor,
                        hoverBg
                      )}
                    >
                      {item.label}
                    </button>
                  )}

                  {/* Dropdown panel */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.96 }}
                        transition={{ duration: 0.18 }}
                        className={cn(
                          "absolute top-full left-0 mt-2 w-56 rounded-2xl shadow-luxury-lg overflow-hidden z-50",
                          "border",
                          isDark
                            ? "bg-[#111] border-white/10"
                            : "bg-white border-gray-100"
                        )}
                      >
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => scrollTo(child.href)}
                            className={cn(
                              "w-full text-left px-5 py-3 text-sm transition-colors duration-150 hover:text-[#B40000]",
                              isDark
                                ? "text-white/80 hover:bg-white/5"
                                : "text-[#111] hover:bg-[#B40000]/5"
                            )}
                          >
                            {child.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* ── Right Actions ── */}
            <div className="flex items-center gap-1.5">

              {/* Search */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={cn(
                  "p-2.5 rounded-xl transition-all duration-200",
                  textColor,
                  hoverBg
                )}
              >
                <Search size={18} />
              </motion.button>

              {/* Theme toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={cn(
                  "p-2.5 rounded-xl transition-all duration-200",
                  textColor,
                  hoverBg
                )}
                aria-label="Changer le thème"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>

              {/* Phone */}
              <a
                href="tel:+212606708444"
                className={cn(
                  "hidden md:flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                  textColor,
                  hoverBg
                )}
              >
                <Phone size={15} />
                <span className="hidden xl:block">{SITE_CONFIG.phone}</span>
              </a>

              {/* Rendez-vous CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#contact")}
                className="hidden sm:flex items-center px-5 py-2.5 gradient-primary text-white rounded-xl text-sm font-semibold shadow-red hover:shadow-lg transition-all duration-300"
              >
                Rendez-vous
              </motion.button>

              {/* Mobile hamburger */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={cn(
                  "lg:hidden p-2.5 rounded-xl transition-colors duration-200",
                  textColor,
                  hoverBg
                )}
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* ── Search bar ── */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={cn(
                "overflow-hidden border-t",
                isDark ? "border-white/8" : "border-black/6"
              )}
            >
              <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="relative">
                  <Search
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Rechercher lunettes, marques, services…"
                    autoFocus
                    className={cn(
                      "w-full pl-11 pr-4 py-3 rounded-xl border text-sm focus:outline-none focus:border-[#B40000] transition-colors",
                      isDark
                        ? "bg-white/8 border-white/12 text-white placeholder-white/40"
                        : "bg-black/5 border-black/10 text-[#111] placeholder-gray-400"
                    )}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ══ Mobile side drawer ══ */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "absolute right-0 top-0 bottom-0 w-[85%] max-w-sm shadow-2xl flex flex-col",
                isDark ? "bg-[#0d0d0d]" : "bg-white"
              )}
            >
              {/* Drawer header */}
              <div
                className={cn(
                  "flex items-center justify-between p-6 border-b",
                  isDark ? "border-white/8" : "border-gray-100"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 gradient-primary rounded-xl flex items-center justify-center">
                    <Eye size={18} className="text-white" />
                  </div>
                  <span
                    className={cn(
                      "font-display font-bold text-lg",
                      isDark ? "text-white" : "text-[#111]"
                    )}
                  >
                    Aït Ourir Optique
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "p-2 rounded-xl transition-colors",
                    isDark
                      ? "text-white hover:bg-white/10"
                      : "text-[#111] hover:bg-gray-100"
                  )}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto py-2">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <button
                      onClick={() => scrollTo(item.href)}
                      className={cn(
                        "w-full text-left px-6 py-4 text-base font-medium transition-colors duration-150 border-b",
                        isDark
                          ? "text-white/85 hover:text-white hover:bg-white/5 border-white/5"
                          : "text-[#111] hover:text-[#B40000] hover:bg-[#B40000]/5 border-gray-50"
                      )}
                    >
                      {item.label}
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div
                className={cn(
                  "p-6 space-y-3 border-t",
                  isDark ? "border-white/8" : "border-gray-100"
                )}
              >
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full py-4 gradient-primary text-white rounded-2xl font-semibold text-center shadow-red"
                >
                  Prendre rendez-vous
                </button>
                <a
                  href="tel:+212606708444"
                  className={cn(
                    "w-full py-3 rounded-2xl font-medium text-sm text-center flex items-center justify-center gap-2 border transition-colors",
                    isDark
                      ? "border-white/15 text-white hover:border-[#B40000] hover:text-[#B40000]"
                      : "border-gray-200 text-[#111] hover:border-[#B40000] hover:text-[#B40000]"
                  )}
                >
                  <Phone size={16} />
                  {SITE_CONFIG.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
