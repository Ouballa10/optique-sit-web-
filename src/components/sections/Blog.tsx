"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Clock, Tag, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";

function BlogCard({ post, index }: { post: (typeof BLOG_POSTS)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white dark:bg-[#141414] rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-white/5 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-[#B40000]/90 backdrop-blur-sm rounded-full text-white text-xs font-semibold">
          <Tag size={10} />
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <Clock size={11} />
            {post.readTime} de lecture
          </span>
          <span>{post.date}</span>
        </div>

        <h3 className="font-display font-semibold text-lg text-[#111] dark:text-white mb-3 group-hover:text-[#B40000] transition-colors duration-200 leading-snug">
          {post.title}
        </h3>

        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center text-[#B40000] text-sm font-semibold group/link">
          Lire l&apos;article
          <ArrowRight
            size={15}
            className="ml-2 group-hover/link:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="blog"
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
            <BookOpen size={12} />
            Conseils & actualités
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-bold text-[#111] dark:text-white mb-5"
          >
            Notre{" "}
            <span className="text-gradient-primary">Blog Optique</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto"
          >
            Conseils d&apos;experts, tendances et actualités du monde de l&apos;optique.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {BLOG_POSTS.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
