"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  Heart,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

function InstagramIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function FacebookIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function TikTokIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
    </svg>
  );
}

const QUICK_LINKS = [
  { label: "Accueil", href: "#hero" },
  { label: "Collections", href: "#collections" },
  { label: "Nos marques", href: "#brands" },
  { label: "À propos", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const SERVICES_LINKS = [
  "Examen de la vue",
  "Lunettes de prescription",
  "Lunettes de soleil",
  "Lentilles de contact",
  "Lunettes enfants",
  "Réparation express",
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B40000]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      </div>

      {/* Newsletter bar */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl font-bold mb-1">
                Restez informé des{" "}
                <span className="text-gradient-gold">nouvelles collections</span>
              </h3>
              <p className="text-white/50 text-sm">
                Recevez nos offres exclusives et les dernières tendances optiques.
              </p>
            </div>
            <form
              className="flex gap-2 w-full md:w-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Votre email..."
                className="flex-1 md:w-64 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm placeholder-white/30 focus:outline-none focus:border-[#B40000] transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 gradient-primary rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                S&apos;abonner
                <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 gradient-primary rounded-xl flex items-center justify-center">
                <Eye size={22} className="text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-xl leading-none">
                  Aït Ourir
                </div>
                <div className="text-xs tracking-[0.2em] uppercase text-white/40 font-sans">
                  Optique
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Votre centre d&apos;optique premium à Aït Ourir. Expertise, qualité
              et service depuis plus de 10 ans.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={SITE_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/5 hover:bg-[#1877F2] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FacebookIcon size={17} />
              </a>
              <a
                href={SITE_CONFIG.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 bg-white/5 hover:bg-[#010101] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-transparent hover:border-white/10"
              >
                <TikTokIcon size={17} />
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 bg-white/5 hover:bg-[#25D366] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-[#B40000]"
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">
              Nos Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 text-[#D4AF37]"
                    />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              {/* Address */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#B40000]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[#B40000]" />
                </div>
                <div className="text-sm leading-relaxed">
                  <div className="text-white/70 font-medium" dir="rtl">
                    {SITE_CONFIG.address}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5">
                    {SITE_CONFIG.addressFr}
                  </div>
                </div>
              </li>
              {/* Phone */}
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#B40000]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-[#B40000]" />
                </div>
                <a
                  href={`tel:+212606708444`}
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              {/* WhatsApp */}
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#25D366]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={14} className="text-[#25D366]" />
                </div>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-[#25D366] text-sm transition-colors"
                >
                  WhatsApp · {SITE_CONFIG.phone}
                </a>
              </li>
              {/* Hours */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#B40000]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={14} className="text-[#B40000]" />
                </div>
                <div className="text-sm text-white/50">
                  <div>Lun–Ven: {SITE_CONFIG.hours.weekdays}</div>
                  <div>Sam: {SITE_CONFIG.hours.saturday}</div>
                  <div className="text-[#B40000]/70">
                    Dim: {SITE_CONFIG.hours.sunday}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Centre d&apos;Optique Aït Ourir. Tous droits réservés.
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1.5">
            Fait avec <Heart size={11} className="text-[#B40000] fill-[#B40000]" /> à Aït Ourir, Maroc
          </p>
        </div>
      </div>
    </footer>
  );
}
