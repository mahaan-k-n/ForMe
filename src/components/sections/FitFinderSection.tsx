"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type Step = {
  id: number;
  question: string;
  subtext: string;
  options: { label: string; value: string; icon?: string }[];
  field: string;
};

const steps: Step[] = [
  {
    id: 1,
    question: "What's your current bra size?",
    subtext:
      "Don't worry if you're unsure — we'll help you find your true size shortly.",
    field: "size",
    options: [
      { label: "30–32 Band", value: "small-band" },
      { label: "34–36 Band", value: "mid-band" },
      { label: "38–40 Band", value: "large-band" },
      { label: "42–44 Band", value: "xlarge-band" },
      { label: "I don't know my size", value: "unknown" },
    ],
  },
  {
    id: 2,
    question: "What does your current bra fail at?",
    subtext: "Select everything that resonates.",
    field: "problem",
    options: [
      { label: "Straps dig into my shoulders", value: "straps" },
      { label: "Band rides up", value: "band" },
      { label: "Centre panel doesn't lie flat", value: "centre" },
      { label: "Cup spillage", value: "spillage" },
      { label: "Uncomfortable by afternoon", value: "comfort" },
      { label: "Never look pretty enough", value: "aesthetics" },
    ],
  },
  {
    id: 3,
    question: "What matters most to you?",
    subtext: "Choose up to two.",
    field: "priority",
    options: [
      { label: "All-day comfort", value: "comfort" },
      { label: "Beautiful aesthetics", value: "aesthetics" },
      { label: "Strong support", value: "support" },
      { label: "Durability", value: "durability" },
      { label: "Skin safety", value: "skin" },
      { label: "Sustainable fabrics", value: "sustainable" },
    ],
  },
  {
    id: 4,
    question: "How would you describe your style?",
    subtext: "This helps us tailor your recommendation.",
    field: "style",
    options: [
      { label: "Minimal & clean", value: "minimal" },
      { label: "Soft & feminine", value: "feminine" },
      { label: "Structured & polished", value: "structured" },
      { label: "Effortless & everyday", value: "everyday" },
    ],
  },
];

const recommendations: Record<string, { headline: string; body: string }> = {
  default: {
    headline: "The Forme Signature Bra",
    body:
      "Based on your answers, our TENCEL lace full-coverage bra with wide-set straps and a reinforced centre panel is engineered for exactly your needs. Join the Founding Circle to be first in queue.",
  },
};

export default function FitFinderSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [done, setDone] = useState(false);

  const step = steps[currentStep];

  const toggleOption = (field: string, value: string) => {
    setAnswers((prev) => {
      const current = prev[field] || [];
      if (current.includes(value)) {
        return { ...prev, [field]: current.filter((v) => v !== value) };
      }
      return { ...prev, [field]: [...current, value] };
    });
  };

  const isSelected = (field: string, value: string) =>
    (answers[field] || []).includes(value);

  const canContinue = (answers[step?.field] || []).length > 0;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      setDone(true);
    }
  };

  return (
    <section id="fit-finder" ref={ref} className="bg-[#FAF7F2]">
      <div className="container-luxury section-luxury">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="gold-rule" />
            <span className="eyebrow">Fit Finder</span>
            <div style={{ width: "3rem", height: "1px", background: "linear-gradient(270deg, #C9A96E, transparent)" }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="text-display-lg font-display text-[#2B221F]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Let&apos;s Find Your Fit.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-sm text-[#2B221F]/45 mt-4 max-w-sm mx-auto"
          >
            Four questions. Personalised recommendation. No guesswork.
          </motion.p>
        </div>

        {/* Finder card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl mx-auto border border-[#E8DCCB] bg-white"
        >
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="p-10 md:p-14"
              >
                {/* Progress */}
                <div className="flex items-center gap-2 mb-10">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className="h-px flex-1 transition-all duration-500"
                      style={{
                        backgroundColor: i <= currentStep ? "#2B221F" : "#E8DCCB",
                      }}
                    />
                  ))}
                  <span className="font-body text-xs text-[#2B221F]/35 ml-2 tabular-nums flex-shrink-0">
                    {currentStep + 1}/{steps.length}
                  </span>
                </div>

                {/* Question */}
                <h3
                  className="font-display text-2xl md:text-3xl text-[#2B221F] mb-3"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {step.question}
                </h3>
                <p className="font-body text-sm text-[#2B221F]/45 mb-8">
                  {step.subtext}
                </p>

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {step.options.map((opt) => {
                    const selected = isSelected(step.field, opt.value);
                    return (
                      <button
                        key={opt.value}
                        onClick={() => toggleOption(step.field, opt.value)}
                        className={`text-left px-5 py-4 border text-sm font-body transition-all duration-250 ${
                          selected
                            ? "bg-[#2B221F] text-[#F8F4EE] border-[#2B221F]"
                            : "bg-white text-[#2B221F]/60 border-[#E8DCCB] hover:border-[#2B221F]/30 hover:text-[#2B221F]"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {selected && (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                          {opt.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Nav */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
                    disabled={currentStep === 0}
                    className="font-body text-xs text-[#2B221F]/35 disabled:opacity-0 transition-opacity tracking-widest uppercase bg-transparent border-none cursor-pointer hover:text-[#2B221F] transition-colors duration-200"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!canContinue}
                    className={`btn-primary text-xs transition-opacity duration-300 ${
                      !canContinue ? "opacity-30 cursor-not-allowed" : ""
                    }`}
                  >
                    <span>
                      {currentStep === steps.length - 1 ? "See My Match" : "Continue"}
                    </span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="p-10 md:p-14 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-8 border border-[#D8A5A0] flex items-center justify-center">
                  <span className="text-[#D8A5A0] text-lg">✦</span>
                </div>
                <div className="eyebrow text-[#5C2331] mb-4">Your Match</div>
                <h3
                  className="font-display text-3xl text-[#2B221F] mb-6"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {recommendations.default.headline}
                </h3>
                <p className="font-body text-sm text-[#2B221F]/55 leading-relaxed mb-10 max-w-sm mx-auto">
                  {recommendations.default.body}
                </p>
                <button
                  onClick={() => document.querySelector("#founding")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn-primary mx-auto"
                >
                  <span>Join The Founding Circle</span>
                </button>
                <button
                  onClick={() => { setCurrentStep(0); setAnswers({}); setDone(false); }}
                  className="block mx-auto mt-4 font-body text-xs text-[#2B221F]/30 hover:text-[#2B221F]/60 transition-colors duration-200 bg-transparent border-none cursor-pointer"
                >
                  Start again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
