"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
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
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "glass-card shadow-luxury border-b border-white/20 dark:border-white/5 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollTo("#hero")}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-red group-hover:scale-110 transition-transform duration-300">
                <Eye size={20} className="text-white" />
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#D4AF37] rounded-full"></div>
              </div>
              <div className={cn("transition-colors duration-300", isScrolled ? "text-[#111]  dark:text-white" : "text-white")}>
                <div className="font-display font-bold text-lg leading-none">
                  Aït Ourir
                </div>
                <div className="text-xs tracking-[0.2em] uppercase opacity-70 font-sans">
                  Optique
                </div>
              </div>
            </motion.button>

            {/* Desktop Nav */}
            <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1">
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
                        isScrolled
                          ? "text-[#111] dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
                          : "text-white/90 hover:text-white hover:bg-white/10"
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
                        isScrolled
                          ? "text-[#111] dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {item.label}
                    </button>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 glass-card rounded-2xl shadow-luxury-lg border border-white/20 dark:border-white/10 overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => scrollTo(child.href)}
                            className="w-full text-left px-5 py-3 text-sm text-[#111] dark:text-white hover:bg-[#B40000]/5 dark:hover:bg-[#B40000]/10 hover:text-[#B40000] transition-colors duration-150"
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

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={cn(
                  "p-2.5 rounded-xl transition-all duration-200",
                  isScrolled
                    ? "text-[#111] dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
                    : "text-white hover:bg-white/10"
                )}
              >
                <Search size={18} />
              </motion.button>

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className={cn(
                  "p-2.5 rounded-xl transition-all duration-200",
                  isScrolled
                    ? "text-[#111] dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
                    : "text-white hover:bg-white/10"
                )}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>

              {/* Phone - desktop */}
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className={cn(
                  "hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                  isScrolled
                    ? "text-[#111] dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
                    : "text-white hover:bg-white/10"
                )}
              >
                <Phone size={15} />
                <span className="hidden xl:block">{SITE_CONFIG.phone}</span>
              </a>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#contact")}
                className="hidden sm:flex items-center px-5 py-2.5 gradient-primary text-white rounded-xl text-sm font-semibold shadow-red hover:shadow-lg transition-all duration-300"
              >
                Rendez-vous
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={cn(
                  "lg:hidden p-2.5 rounded-xl",
                  isScrolled
                    ? "text-[#111] dark:text-white"
                    : "text-white"
                )}
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-white/10"
            >
              <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="relative">
                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Rechercher lunettes, marques, services..."
                    autoFocus
                    className="w-full pl-11 pr-4 py-3 bg-white/10 dark:bg-black/20 backdrop-blur rounded-xl border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#B40000] transition-colors"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-[#0a0a0a] shadow-2xl flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 gradient-primary rounded-xl flex items-center justify-center">
                    <Eye size={18} className="text-white" />
                  </div>
                  <span className="font-display font-bold text-lg">
                    Aït Ourir Optique
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex-1 overflow-y-auto py-4">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <button
                      onClick={() => scrollTo(item.href)}
                      className="w-full text-left px-6 py-4 text-base font-medium hover:text-[#B40000] hover:bg-[#B40000]/5 transition-colors duration-150 border-b border-gray-50 dark:border-white/5"
                    >
                      {item.label}
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="p-6 space-y-3 border-t border-gray-100 dark:border-white/10">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full py-4 gradient-primary text-white rounded-2xl font-semibold text-center shadow-red"
                >
                  Prendre rendez-vous
                </button>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="w-full py-3 border border-gray-200 dark:border-white/10 rounded-2xl font-medium text-center flex items-center justify-center gap-2 hover:border-[#B40000] hover:text-[#B40000] transition-colors"
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
