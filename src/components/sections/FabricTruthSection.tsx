"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const fabrics = [
  {
    id: "tencel",
    name: "TENCEL™ Lace",
    origin: "Austria — Lenzing AG",
    tagline: "Where engineering meets elegance.",
    description:
      "Derived from certified eucalyptus wood pulp using a closed-loop process that recaptures 99% of solvents. TENCEL absorbs moisture 50% more efficiently than cotton while remaining featherlight against skin.",
    properties: {
      Breathability: 95,
      Longevity: 88,
      Softness: 92,
      "Skin Safety": 96,
    },
    badge: "Our Choice",
    color: "#5C2331",
  },
  {
    id: "micromodal",
    name: "MicroModal",
    origin: "Austria — Lenzing AG",
    tagline: "Softer than silk. More durable than cotton.",
    description:
      "Produced from beech wood pulp, MicroModal is three times softer than cotton with exceptional colour retention. Its fibres are 0.9 dtex — finer than a human hair — making it ideal for next-to-skin comfort.",
    properties: {
      Breathability: 88,
      Longevity: 82,
      Softness: 97,
      "Skin Safety": 91,
    },
    badge: "Ultra Soft",
    color: "#D8A5A0",
  },
  {
    id: "bamboo",
    name: "Organic Bamboo Cotton",
    origin: "Certified Farms — Oeko-Tex 100",
    tagline: "Nature's original performance fabric.",
    description:
      "Bamboo grows without pesticides, requires no irrigation, and regenerates without replanting. The resulting fibre is naturally anti-bacterial, thermoregulating, and hypoallergenic — verified through independent Oeko-Tex certification.",
    properties: {
      Breathability: 91,
      Longevity: 79,
      Softness: 88,
      "Skin Safety": 94,
    },
    badge: "Sustainable",
    color: "#C9A96E",
  },
  {
    id: "polyester",
    name: "Conventional Polyester",
    origin: "Synthetic — Petroleum-derived",
    tagline: "The industry default. Not ours.",
    description:
      "Petroleum-derived, non-breathable, and statically charged against skin. Traps moisture and heat. Degrades and pills within months. Used widely because it's inexpensive to produce — not because it's right for the body.",
    properties: {
      Breathability: 22,
      Longevity: 45,
      Softness: 30,
      "Skin Safety": 28,
    },
    badge: "Industry Default",
    color: "#2B221F",
  },
];

function PropertyBar({ label, value, color }: { label: string; value: number; color: string }) {
  const barRef = useRef(null);
  const inView = useInView(barRef, { once: true });

  return (
    <div ref={barRef} className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="font-body text-xs text-[#2B221F]/60 tracking-wide">{label}</span>
        <span className="font-body text-xs text-[#2B221F]/40 tabular-nums">{value}%</span>
      </div>
      <div className="h-px bg-[#E8DCCB] relative overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          className="absolute inset-0 origin-left"
          style={{
            width: `${value}%`,
            backgroundColor: value < 50 ? "#2B221F" : color,
            opacity: value < 50 ? 0.3 : 1,
          }}
        />
      </div>
    </div>
  );
}

export default function FabricTruthSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [active, setActive] = useState("tencel");

  const activeFabric = fabrics.find((f) => f.id === active)!;

  return (
    <section id="fabric" ref={ref} className="bg-[#FAF7F2]">
      <div className="container-luxury section-luxury">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="gold-rule" />
              <span className="eyebrow">Fabric Truth</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-display-xl font-display text-[#2B221F]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              The Fabric
              <br />
              Matters.
              <br />
              The Truth
              <br />
              <span className="text-[#5C2331]">Matters More.</span>
            </motion.h2>
          </div>

          <div className="flex flex-col justify-end gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-body text-base text-[#2B221F]/55 leading-relaxed"
            >
              Most brands tell you their fabric is &ldquo;soft&rdquo; and
              &ldquo;breathable.&rdquo; We tell you the mill, the certification,
              and the process — because what touches your skin matters more than
              what's printed on a tag.
            </motion.p>

            {["If We Can't Explain It,\nWe Won't Use It.", "Transparency Is The New Luxury."].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
                className="font-editorial text-lg text-[#2B221F]/60 italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                &ldquo;{line}&rdquo;
              </motion.p>
            ))}
          </div>
        </div>

        {/* Fabric image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.0 }}
          className="relative h-48 md:h-64 mb-16 overflow-hidden"
        >
          <Image
            src="/fabric.jpg"
            alt="TENCEL fabric texture — fine, breathable, sustainable"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-transparent to-[#FAF7F2]" />
        </motion.div>

        {/* Interactive tab selector */}
        <div className="flex flex-wrap gap-2 mb-12">
          {fabrics.map((fabric) => (
            <button
              key={fabric.id}
              onClick={() => setActive(fabric.id)}
              className={`px-5 py-2.5 text-xs font-body tracking-[0.1em] uppercase border transition-all duration-300 ${
                active === fabric.id
                  ? "bg-[#2B221F] text-[#F8F4EE] border-[#2B221F]"
                  : "bg-transparent text-[#2B221F]/50 border-[#E8DCCB] hover:border-[#2B221F]/30 hover:text-[#2B221F]"
              }`}
            >
              {fabric.name}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-12 p-8 md:p-12 border border-[#E8DCCB]"
          >
            {/* Left info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-xs font-body tracking-widest uppercase px-3 py-1"
                  style={{
                    backgroundColor: activeFabric.color + "15",
                    color: activeFabric.color,
                    border: `1px solid ${activeFabric.color}30`,
                  }}
                >
                  {activeFabric.badge}
                </span>
                <span className="font-body text-xs text-[#2B221F]/35">
                  {activeFabric.origin}
                </span>
              </div>

              <h3
                className="font-display text-3xl text-[#2B221F] mb-3"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {activeFabric.name}
              </h3>
              <p
                className="font-editorial text-base text-[#2B221F]/50 italic mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {activeFabric.tagline}
              </p>
              <p className="font-body text-sm text-[#2B221F]/60 leading-relaxed">
                {activeFabric.description}
              </p>
            </div>

            {/* Right: property bars */}
            <div className="flex flex-col justify-center">
              <p className="font-body text-xs text-[#2B221F]/35 tracking-widest uppercase mb-8">
                Performance Index
              </p>
              {Object.entries(activeFabric.properties).map(([label, value]) => (
                <PropertyBar
                  key={label}
                  label={label}
                  value={value}
                  color={activeFabric.color}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-body text-xs text-[#2B221F]/35 text-center mt-8 tracking-wide"
        >
          All fabrics are independently tested and Oeko-Tex Standard 100 certified.
          We publish our full supply chain documentation on request.
        </motion.p>
      </div>
    </section>
  );
}
