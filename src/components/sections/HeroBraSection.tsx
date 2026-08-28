"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const features = [
  {
    id: "01",
    title: "Higher Centre Panel",
    description:
      "Sits flat against the sternum — not floating above it. The panel height is calibrated by cup volume, not cup letter.",
    detail: "Eliminates centre-panel lift",
  },
  {
    id: "02",
    title: "Heat-Aware Ventilation",
    description:
      "Perforated TENCEL panels beneath the underwire and along the side seam move heat and moisture through humid Indian days without weakening the frame.",
    detail: "Built for heat, not showroom lighting",
  },
  {
    id: "03",
    title: "Wide Comfort Straps",
    description:
      "28mm padded straps distribute weight across the shoulder — never concentrate it. Adjustable from both front and back.",
    detail: "No strap impression by hour 8",
  },
  {
    id: "04",
    title: "TENCEL Lace Overlay",
    description:
      "The same structural support, now dressed in a botanical lace derived from eucalyptus. Not decorative. Functional and beautiful.",
    detail: "Beautiful was easy. This was hard.",
  },
  {
    id: "05",
    title: "Wardrobe-Aware Shape",
    description:
      "A fuller cup profile designed for T-shirts, kurtas, blouses, wrap dresses, and tailored shirts. Smooth where it should disappear. Beautiful where it can be seen.",
    detail: "Designed around how Indian women dress",
  },
];

export default function HeroBraSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="hero-bra" ref={ref} className="bg-[#E8DCCB]/30 overflow-hidden">
      <div className="container-luxury section-luxury">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <div className="gold-rule" />
            <span className="eyebrow">The Product</span>
            <div
              className="w-12 h-px"
              style={{ background: "linear-gradient(270deg, #C9A96E, transparent)" }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-display-xl font-display text-[#2B221F]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Beautiful Was Easy.
            <br />
            Support Was Hard.
            <br />
            <span className="text-[#5C2331]">We Built Both.</span>
          </motion.h2>
        </div>

        {/* Product + features grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <motion.div className="absolute inset-0" style={{ y: imageY }}>
              <Image
                src="/landing 2.png"
                alt="The Forme burgundy lace bra with structured cups and wide comfort straps"
                fill
                className="object-cover object-[50%_34%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            {/* Annotation: size range */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute top-8 right-8 bg-[#F8F4EE]/90 backdrop-blur-sm px-5 py-3 border border-[#E8DCCB]"
            >
              <p className="eyebrow text-[#5C2331] mb-1">Size Range</p>
              <p
                className="font-display text-xl text-[#2B221F]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                30D – 44J
              </p>
            </motion.div>

            {/* Annotation: fabric */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="absolute bottom-8 left-8 bg-[#2B221F]/85 backdrop-blur-sm px-5 py-3"
            >
              <p className="eyebrow text-[#D8A5A0] mb-1">Primary Fabric</p>
              <p className="font-display text-xl text-[#F8F4EE]" style={{ fontFamily: "var(--font-cormorant)" }}>
                TENCEL™ Lace
              </p>
            </motion.div>
          </motion.div>

          {/* Feature list */}
          <div className="space-y-0">
            {features.map((feature, i) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                className="group border-b border-[#E8DCCB] py-7"
              >
                <div className="flex items-start gap-6">
                  <span className="eyebrow text-[#D8A5A0] mt-1 flex-shrink-0">
                    {feature.id}
                  </span>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3
                        className="font-display text-xl text-[#2B221F] group-hover:text-[#5C2331] transition-colors duration-300"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        {feature.title}
                      </h3>
                    </div>
                    <p className="font-body text-sm text-[#2B221F]/55 leading-relaxed mb-3">
                      {feature.description}
                    </p>
                    <span className="font-editorial text-xs text-[#5C2331] italic" style={{ fontFamily: "var(--font-playfair)" }}>
                      — {feature.detail}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="pt-8"
            >
              <button
                onClick={() => {
                  const el = document.querySelector("#founding");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary"
              >
                <span>Be First To Wear It</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
