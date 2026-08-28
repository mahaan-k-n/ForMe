"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const lines = [
  { text: "Walk Into The Room.", size: "text-display-md" },
  { text: "Forget About The Bra.", size: "text-display-md", italic: true },
  { text: "Confidence Isn't A Push-Up Effect.", size: "text-display-lg" },
  { text: "It's Knowing Nothing Needs Adjusting.", size: "text-xl", italic: true },
];

export default function ConfidenceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={ref} className="relative bg-[#3D1520] overflow-hidden min-h-screen flex items-center">
      {/* Background image */}
      <motion.div className="absolute inset-0 z-0" style={{ scale: imageScale }}>
        <Image
          src="/Generated image 1.png"
          alt="Confident fuller-bust woman in burgundy tailoring and Forme styling"
          fill
          className="object-cover object-[68%_center] opacity-40"
          sizes="100vw"
        />
      </motion.div>

      {/* Texture overlay */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 60% 50%, #5C2331 0%, #3D1520 50%, #1a0a0f 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 container-luxury section-luxury w-full"
        style={{ y: textY }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div style={{ width: "3rem", height: "1px", background: "linear-gradient(90deg, #C9A96E, transparent)" }} />
          <span className="eyebrow text-[#D8A5A0]">Confidence, Reimagined</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: headline */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display text-[#F8F4EE] mb-4"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3.5rem, 8vw, 7.5rem)", lineHeight: "0.92", letterSpacing: "-0.03em", fontWeight: 300 }}
            >
              Beautiful
              <br />
              Enough To
              <br />
              <span className="text-[#D8A5A0]">Be Seen.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-base text-[#F8F4EE]/50 leading-relaxed mt-8 max-w-sm"
            >
              Support should never come at the expense of style. This section
              exists because we refuse to make that trade.
            </motion.p>
          </div>

          {/* Right: copy lines */}
          <div className="space-y-10">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.7 }}
              >
                <p
                  className={`font-display text-[#F8F4EE] leading-tight ${line.italic ? "italic" : ""}`}
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: i === 2 ? "clamp(1.75rem, 3vw, 2.75rem)" : "clamp(1.25rem, 2vw, 2rem)",
                    opacity: i === 2 ? 1 : 0.65,
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {line.text}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="pt-4 border-t border-[#F8F4EE]/10"
            >
              <p
                className="font-editorial text-sm text-[#D8A5A0]/70 italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Support You Feel. Confidence You Notice.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom stat row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px border border-[#F8F4EE]/10"
        >
          {[
            { label: "Size Range", value: "30D – 44J" },
            { label: "Fabric Origin", value: "Austria" },
            { label: "Wash Cycles", value: "200+" },
            { label: "Founding Circle", value: "100 Women" },
          ].map((stat) => (
            <div key={stat.label} className="p-8 border border-[#F8F4EE]/10 text-center">
              <div
                className="font-display text-3xl text-[#F8F4EE] mb-2"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {stat.value}
              </div>
              <div className="eyebrow text-[#F8F4EE]/30">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
