"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Aditi M.",
    location: "Mumbai",
    size: "36F",
    quote:
      "I spent eleven years thinking I was just difficult to fit. One conversation with this brand and I realised — I'd been wearing the wrong size for a decade. Not my fault. The industry's failure.",
    type: "story",
  },
  {
    name: "Kavya R.",
    location: "Bangalore",
    size: "34G",
    quote:
      "Every time someone asks why I look so confident today, I know exactly what changed. Nothing shows. That's the point.",
    type: "quote",
  },
  {
    name: "Priya S.",
    location: "Delhi",
    size: "38E",
    quote:
      "I used to plan every outfit around what I could hide. Now I plan it around what I want to wear. That shift feels enormous — and it came from a bra.",
    type: "story",
  },
  {
    name: "Shreya N.",
    location: "Chennai",
    size: "32DD",
    quote:
      "Finally found a brand that isn't embarrassed by my size. That doesn't make me feel like an afterthought.",
    type: "quote",
  },
  {
    name: "Neha K.",
    location: "Pune",
    size: "40F",
    quote:
      "I'd convinced myself comfortable bras couldn't be pretty. I was wrong. This changes everything I thought I knew.",
    type: "story",
  },
  {
    name: "Deepa V.",
    location: "Hyderabad",
    size: "36G",
    quote:
      "By 3pm, I wasn't thinking about my bra at all. That's the goal, isn't it?",
    type: "quote",
  },
];

export default function RealWomenSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="community" ref={ref} className="bg-[#F8F4EE]">
      <div className="container-luxury section-luxury">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="gold-rule" />
              <span className="eyebrow">Real Women</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-display-xl font-display text-[#2B221F]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Real Women.
              <br />
              Real
              <span className="text-[#5C2331]"> Frustrations.</span>
              <br />
              Real Solutions.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/community.jpg"
                alt="Three diverse women — real confidence, real community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F8F4EE]/40 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
              className={`card-editorial p-8 flex flex-col ${
                t.type === "quote" ? "bg-[#2B221F] border-[#2B221F]" : ""
              }`}
            >
              {/* Top meta */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p
                    className={`font-body text-sm font-medium ${
                      t.type === "quote" ? "text-[#F8F4EE]" : "text-[#2B221F]"
                    }`}
                  >
                    {t.name}
                  </p>
                  <p
                    className={`font-body text-xs mt-0.5 ${
                      t.type === "quote" ? "text-[#F8F4EE]/40" : "text-[#2B221F]/40"
                    }`}
                  >
                    {t.location} · {t.size}
                  </p>
                </div>
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-body ${
                    t.type === "quote"
                      ? "bg-[#5C2331]/30 text-[#D8A5A0]"
                      : "bg-[#E8DCCB] text-[#2B221F]/50"
                  }`}
                >
                  ✦
                </div>
              </div>

              {/* Quote */}
              <p
                className={`font-editorial text-base leading-relaxed italic flex-1 ${
                  t.type === "quote" ? "text-[#F8F4EE]/80" : "text-[#2B221F]/70"
                }`}
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Bottom rule */}
              <div
                className={`mt-6 h-px w-8 ${
                  t.type === "quote" ? "bg-[#5C2331]" : "bg-[#D8A5A0]"
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p
            className="font-editorial text-xl text-[#2B221F]/50 italic mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Your story belongs here too.
          </p>
          <button
            onClick={() => document.querySelector("#founding")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-secondary"
          >
            <span>Join The Circle</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
