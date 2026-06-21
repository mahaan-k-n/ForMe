"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden flex items-end"
      style={{ backgroundColor: "#F8F4EE" }}
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
      >
        <Image
          src="/hero.jpg"
          alt="A woman wearing Forme lingerie — confident, comfortable, elegant"
          fill
          className="object-cover object-center"
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F4EE]/85 via-[#F8F4EE]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F4EE]/60 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 container-luxury pb-20 md:pb-28"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="gold-rule" />
            <span className="eyebrow">For the D+ woman</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-display-hero font-display text-espresso mb-8 leading-none"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Finally
            <br />
            <em className="not-italic text-[#5C2331]">Fits.</em>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-base md:text-lg text-[#2B221F]/70 mb-4 leading-relaxed max-w-sm"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Beautifully engineered for women who deserve more.
          </motion.p>

          {/* Brand pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center gap-3 mb-12"
          >
            {["Beautiful.", "Breathable.", "Built To Last."].map((word, i) => (
              <span key={word} className="flex items-center gap-3">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-[#D8A5A0]" />}
                <span
                  className="font-body text-sm text-[#2B221F]/60 tracking-wide"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {word}
                </span>
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => {
                const el = document.querySelector("#founding");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
              id="hero-cta-primary"
            >
              <span>Join The Founding Circle</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={() => {
                const el = document.querySelector("#fabric");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-secondary"
              id="hero-cta-secondary"
            >
              <span>Discover The Fabric Truth</span>
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{ opacity }}
      >
        <span className="eyebrow" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[#D8A5A0] to-transparent"
        />
      </motion.div>
    </section>
  );
}
