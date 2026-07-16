"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  phone: z.string().min(8, "Numéro de téléphone invalide"),
  email: z.string().email("Email invalide").optional().or(z.literal("")),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  date: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const SERVICES_OPTIONS = [
  "Examen de la vue",
  "Lunettes de vue",
  "Lunettes de soleil",
  "Lentilles de contact",
  "Lunettes enfants",
  "Réparation / SAV",
  "Autre",
];

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
    </svg>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Build WhatsApp message
    const msg = [
      `🔴 *Nouvelle demande — Aït Ourir Optique*`,
      ``,
      `👤 *Nom:* ${data.name}`,
      `📞 *Téléphone:* ${data.phone}`,
      data.email ? `📧 *Email:* ${data.email}` : "",
      `🔧 *Service:* ${data.service}`,
      data.date ? `📅 *Date souhaitée:* ${data.date}` : "",
      ``,
      `💬 *Message:*`,
      data.message,
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encoded}`;

    // Open WhatsApp in new tab
    window.open(waUrl, "_blank");

    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  const inputClass =
    "w-full px-4 py-3.5 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded-xl text-sm text-[#111] dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#B40000] focus:ring-2 focus:ring-[#B40000]/10 transition-all duration-200";

  const errorClass = "text-[#B40000] text-xs mt-1";

  const contactItems = [
    {
      icon: MapPin,
      label: "Adresse",
      value: SITE_CONFIG.address,
      subValue: SITE_CONFIG.addressFr,
      color: "#B40000",
      href: null,
      dir: "rtl" as const,
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: SITE_CONFIG.phone,
      color: "#B40000",
      href: `tel:+212606708444`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: SITE_CONFIG.phone,
      color: "#25D366",
      href: `https://wa.me/${SITE_CONFIG.whatsapp}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: SITE_CONFIG.email,
      color: "#D4AF37",
      href: `mailto:${SITE_CONFIG.email}`,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-[#FAFAFA] dark:bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#B40000]/8 dark:bg-[#B40000]/15 rounded-full text-[#B40000] text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <MessageCircle size={12} />
            Contactez-nous
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-[#111] dark:text-white mb-5"
          >
            Prenez{" "}
            <span className="text-gradient-primary">rendez-vous</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto"
          >
            Remplissez le formulaire — votre demande sera envoyée directement
            sur notre WhatsApp.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-4"
          >
            {contactItems.map((item) => {
              const Icon = item.icon;
              const inner = (
                <div
                  className="flex items-start gap-4 p-5 bg-white dark:bg-[#141414] rounded-2xl shadow-luxury border border-gray-100 dark:border-white/5 hover:border-[#B40000]/20 transition-colors duration-300 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Icon size={20} style={{ color: item.color }} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-400 font-medium mb-0.5">
                      {item.label}
                    </div>
                    <div
                      className="text-sm text-[#111] dark:text-white font-medium break-words"
                      dir={item.dir}
                    >
                      {item.value}
                    </div>
                    {"subValue" in item && item.subValue && (
                      <div className="text-xs text-gray-400 mt-0.5">
                        {item.subValue}
                      </div>
                    )}
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              );
            })}

            {/* Hours */}
            <div className="p-5 bg-white dark:bg-[#141414] rounded-2xl shadow-luxury border border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-[#B40000]/10 rounded-xl flex items-center justify-center">
                  <Clock size={20} className="text-[#B40000]" />
                </div>
                <span className="font-semibold text-[#111] dark:text-white">
                  Horaires d&apos;ouverture
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Lun – Ven</span>
                  <span className="text-[#111] dark:text-white font-medium text-right">
                    {SITE_CONFIG.hours.weekdays}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Samedi</span>
                  <span className="text-[#111] dark:text-white font-medium">
                    {SITE_CONFIG.hours.saturday}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Dimanche</span>
                  <span className="text-[#B40000] font-medium">
                    {SITE_CONFIG.hours.sunday}
                  </span>
                </div>
              </div>
            </div>

            {/* Social quick links */}
            <div className="p-5 bg-white dark:bg-[#141414] rounded-2xl shadow-luxury border border-gray-100 dark:border-white/5">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-3">
                Suivez-nous
              </p>
              <div className="flex gap-3">
                <a
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-[#B40000] hover:text-white text-gray-600 dark:text-gray-400 text-xs font-medium transition-all duration-200"
                >
                  Instagram
                </a>
                <a
                  href={SITE_CONFIG.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-[#1877F2] hover:text-white text-gray-600 dark:text-gray-400 text-xs font-medium transition-all duration-200"
                >
                  Facebook
                </a>
                <a
                  href={SITE_CONFIG.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-[#010101] hover:text-white text-gray-600 dark:text-gray-400 text-xs font-medium transition-all duration-200"
                >
                  TikTok
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-[#141414] rounded-3xl p-8 shadow-luxury-lg border border-gray-100 dark:border-white/5">
              {/* WhatsApp badge */}
              <div className="flex items-center gap-2.5 mb-6 p-3.5 bg-[#25D366]/8 dark:bg-[#25D366]/10 rounded-2xl border border-[#25D366]/20">
                <div className="w-8 h-8 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111] dark:text-white">
                    Envoi direct sur WhatsApp
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Votre demande s&apos;ouvre automatiquement dans WhatsApp
                  </p>
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-14 text-center"
                >
                  <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-[#25D366]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#111] dark:text-white mb-2">
                    WhatsApp ouvert !
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
                    Vérifiez votre WhatsApp et envoyez le message. À très bientôt !
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                        Nom complet *
                      </label>
                      <input
                        {...register("name")}
                        placeholder="Mohammed Alaoui"
                        className={inputClass}
                      />
                      {errors.name && (
                        <p className={errorClass}>{errors.name.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                        Téléphone *
                      </label>
                      <input
                        {...register("phone")}
                        placeholder="06 06 70 84 44"
                        className={inputClass}
                      />
                      {errors.phone && (
                        <p className={errorClass}>{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                        Email <span className="text-gray-400 normal-case font-normal">(optionnel)</span>
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="votre@email.com"
                        className={inputClass}
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                        Date souhaitée
                      </label>
                      <input
                        {...register("date")}
                        type="date"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Service souhaité *
                    </label>
                    <select {...register("service")} className={inputClass}>
                      <option value="">Sélectionnez un service...</option>
                      {SERVICES_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className={errorClass}>{errors.service.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Décrivez votre demande..."
                      className={`${inputClass} resize-none`}
                    />
                    {errors.message && (
                      <p className={errorClass}>{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] hover:bg-[#20bc5a] text-white rounded-2xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Ouverture WhatsApp...
                      </>
                    ) : (
                      <>
                        <MessageCircle size={20} />
                        Envoyer via WhatsApp
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-gray-400">
                    ✓ Réponse rapide · ✓ Consultation gratuite · ✓ Sans engagement
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-12 rounded-3xl overflow-hidden shadow-luxury-lg border border-gray-100 dark:border-white/5 h-80"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.0!2d-7.6583!3d31.5618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMzJzQyLjUiTiA3wrAzOSczMC4wIlc!5e0!3m2!1sfr!2sma!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Centre d'Optique Aït Ourir — السوق الجديد العمران"
          />
        </motion.div>
      </div>
    </section>
  );
}
