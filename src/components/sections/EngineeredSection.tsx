"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const principles = [
  {
    number: "I",
    title: "Every Thread Has A Passport",
    body: "Our TENCEL lace traces back to a single eucalyptus forest in Austria, processed at Lenzing AG, woven at our partner mill in Gujarat. Every material has a traceable origin. We publish the full chain on request.",
    tag: "Sourcing",
  },
  {
    number: "II",
    title: "Fit Tested by D+ Women",
    body: "Our fit panel is composed entirely of women above a D cup, across cup sizes D through J and band sizes 30 through 44. No design decision is made without their direct feedback.",
    tag: "Fit Testing",
  },
  {
    number: "III",
    title: "Support Is Engineering",
    body: "The underwire shape, cup depth, and side seam position are calculated against a cup-volume matrix — not adapted from a 34B pattern scaled up. This distinction changes everything.",
    tag: "Engineering",
  },
  {
    number: "IV",
    title: "200-Wash Durability Standard",
    body: "We test every design across 200 machine wash cycles before production sign-off. Elasticity retention, colour fastness, and structural integrity must meet our minimum threshold. Most brands test for 40 washes.",
    tag: "Durability",
  },
  {
    number: "V",
    title: "Know What Touches Your Skin",
    body: "Every fabric in our collection is Oeko-Tex Standard 100 certified — meaning no harmful chemicals, dyes, or finishing agents. The certification document is available on our website, unedited.",
    tag: "Transparency",
  },
  {
    number: "VI",
    title: "Not Marketing. Engineering.",
    body: "We don't describe our bras as 'supportive' — we publish the underwire gauge, wing height, and strap width. Because you deserve numbers, not adjectives.",
    tag: "Honesty",
  },
];

export default function EngineeredSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="engineered" ref={ref} className="bg-[#2B221F]">
      <div className="container-luxury section-luxury">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <div style={{ width: "3rem", height: "1px", background: "linear-gradient(90deg, #C9A96E, transparent)" }} />
            <span className="eyebrow text-[#D8A5A0]">Engineered Differently</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-display-xl font-display text-[#F8F4EE]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Built By
              <br />
              The{" "}
              <span className="text-[#D8A5A0]">Customer.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col justify-end gap-6"
            >
              <p className="font-body text-base text-[#F8F4EE]/45 leading-relaxed">
                The women who told us the problem weren&apos;t just our early
                customers. They were our brief, our design team, our quality
                department, and our most rigorous critics. Every decision below
                came directly from their experience.
              </p>
              <div className="flex items-center gap-4">
                <div style={{ width: "3rem", height: "1px", background: "linear-gradient(90deg, #5C2331, transparent)" }} />
                <span
                  className="font-editorial text-sm text-[#D8A5A0]/60 italic"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Support Is Engineering. Not Marketing.
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F8F4EE]/5">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
              className="bg-[#2B221F] p-10 group hover:bg-[#3D1520]/60 transition-colors duration-400"
            >
              <div className="flex items-start justify-between mb-8">
                <span
                  className="font-display text-5xl text-[#F8F4EE]/10 group-hover:text-[#F8F4EE]/15 transition-colors"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {p.number}
                </span>
                <span className="eyebrow text-[#5C2331] border border-[#5C2331]/30 px-3 py-1">
                  {p.tag}
                </span>
              </div>

              <h3
                className="font-display text-xl text-[#F8F4EE] mb-4 leading-tight group-hover:text-[#D8A5A0] transition-colors duration-300"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {p.title}
              </h3>

              <p className="font-body text-sm text-[#F8F4EE]/35 leading-relaxed">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
