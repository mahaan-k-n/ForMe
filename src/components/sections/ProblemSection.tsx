"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Image from "next/image";

const problems = [
  {
    number: "01",
    title: "The Fit That Never Was",
    description:
      "A D-cup in one brand. An E in another. An F in a third. Your body didn't change. The industry's indifference did.",
  },
  {
    number: "02",
    title: "The Ugly Tax",
    description:
      "Fuller busts were offered support. Rarely beauty. As if the two were incompatible — as if support required a design surrender.",
  },
  {
    number: "03",
    title: "The Comfort Compromise",
    description:
      "Straps that dig. Underwires that stab. Elastic that fails by month three. You were told this was normal. It wasn't.",
  },
  {
    number: "04",
    title: "The Vanishing Act",
    description:
      "Entire size ranges simply not stocked. Not designed. Not even considered. The D+ woman was profitable on paper. Ignored in practice.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="problem" ref={ref} className="bg-[#2B221F] overflow-hidden">
      <div className="container-luxury section-luxury">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="gold-rule" style={{ background: "linear-gradient(90deg, #C9A96E, transparent)" }} />
          <span className="eyebrow text-[#D8A5A0]">The Failure</span>
        </motion.div>

        {/* Main headline */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-display-xl font-display text-[#F8F4EE] mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              The Industry
              <br />
              Solved For
              <br />
              <span className="text-[#D8A5A0]">Average.</span>
              <br />
              We Didn&apos;t.
            </motion.h2>
          </div>
          <div className="flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-body text-lg text-[#F8F4EE]/55 leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Forty-two percent of women in India wear a D cup or above. The
              lingerie industry responded with three beige options, an ugly
              minimiser, and a silent shrug.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="p-8 border-l-2 border-[#5C2331]"
            >
              <p
                className="font-editorial text-2xl text-[#F8F4EE]/80 italic leading-snug"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                &ldquo;The problem was never your body.
                <br />
                The problem was the bra.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>

        {/* Problem image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="relative w-full h-72 md:h-96 overflow-hidden mb-20"
        >
          <Image
            src="/problem.jpg"
            alt="The industry's failure — ill-fitting lingerie"
            fill
            className="object-cover object-center grayscale opacity-60"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B221F] via-transparent to-[#2B221F]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p
              className="font-editorial text-3xl md:text-5xl text-[#F8F4EE]/80 italic text-center"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Designed to fit everyone.
              <br />
              <span className="text-[#D8A5A0]">Which meant fitting no one.</span>
            </p>
          </div>
        </motion.div>

        {/* Problem grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.number}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="border-t border-[#F8F4EE]/10 pt-8"
            >
              <div className="eyebrow text-[#5C2331] mb-4">{problem.number}</div>
              <h3
                className="font-display text-xl text-[#F8F4EE] mb-4 leading-tight"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {problem.title}
              </h3>
              <p className="font-body text-sm text-[#F8F4EE]/45 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
