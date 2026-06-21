"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

type FormState = {
  email: string;
  size: string;
  city: string;
  feedback: string;
};

const sizes = [
  "30D", "30DD", "30E", "30F", "30FF", "30G", "30GG", "30H", "30HH", "30J",
  "32D", "32DD", "32E", "32F", "32FF", "32G", "32GG", "32H", "32HH", "32J",
  "34D", "34DD", "34E", "34F", "34FF", "34G", "34GG", "34H", "34HH", "34J",
  "36D", "36DD", "36E", "36F", "36FF", "36G", "36GG", "36H", "36HH", "36J",
  "38D", "38DD", "38E", "38F", "38FF", "38G", "38H", "38HH", "38J",
  "40D", "40DD", "40E", "40F", "40FF", "40G", "40H", "40J",
  "42D", "42DD", "42E", "42F", "42G", "42H",
  "44D", "44DD", "44E", "44F", "44G",
  "I don't know my size",
];

export default function FoundingCircleSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [form, setForm] = useState<FormState>({
    email: "",
    size: "",
    city: "",
    feedback: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.size) return;
    setSubmitted(true);
  };

  const countFilled = [form.email, form.size, form.city].filter(Boolean).length;

  return (
    <section
      id="founding"
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#F8F4EE" }}
    >
      {/* Decorative background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <p
          className="font-display text-[20vw] text-[#E8DCCB]/50 whitespace-nowrap"
          style={{ fontFamily: "var(--font-cormorant)", lineHeight: 1 }}
        >
          Forme
        </p>
      </div>

      <div className="container-luxury section-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: editorial copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="gold-rule" />
              <span className="eyebrow">Founding Circle</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-display-xl font-display text-[#2B221F] mb-10"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Help Us Build
              <br />
              What Should
              <br />
              <span className="text-[#5C2331]">Already Exist.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="space-y-8"
            >
              {[
                { headline: "Not Customers.", sub: "Co-Creators." },
                { headline: "Before The Product.", sub: "Before The Launch." },
                { headline: "Before The Industry Notices.", sub: "" },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-[#E8DCCB] pl-6">
                  <p
                    className="font-display text-2xl text-[#2B221F]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {item.headline}
                  </p>
                  {item.sub && (
                    <p
                      className="font-editorial text-xl text-[#5C2331] italic mt-1"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.sub}
                    </p>
                  )}
                </div>
              ))}

              <div className="p-8 bg-[#2B221F] mt-10">
                <p className="eyebrow text-[#D8A5A0] mb-4">What You Get</p>
                {[
                  "Early access before public launch",
                  "Founding price — locked forever",
                  "Direct input on the final design",
                  "Your name in the founding story",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-4 py-3 border-b border-[#F8F4EE]/10 last:border-0">
                    <div className="w-1 h-1 rounded-full bg-[#D8A5A0] flex-shrink-0" />
                    <span className="font-body text-sm text-[#F8F4EE]/60">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <div>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  {/* Spots counter */}
                  <div className="flex items-center justify-between mb-10 pb-6 border-b border-[#E8DCCB]">
                    <div>
                      <p className="eyebrow mb-1">Founding Spots</p>
                      <div className="flex items-end gap-2">
                        <span
                          className="font-display text-5xl text-[#2B221F]"
                          style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                          100
                        </span>
                        <span className="font-body text-sm text-[#2B221F]/40 pb-1">available</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="eyebrow mb-1">Closes</p>
                      <p
                        className="font-display text-xl text-[#5C2331]"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                      >
                        October 2025
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Email */}
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className={`absolute top-0 left-0 transition-all duration-300 font-body pointer-events-none ${
                          focused === "email" || form.email
                            ? "text-xs text-[#2B221F]/40 -translate-y-4"
                            : "text-sm text-[#2B221F]/40 translate-y-3"
                        }`}
                      >
                        Email address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        className="input-luxury mt-4"
                        autoComplete="email"
                      />
                    </div>

                    {/* Size */}
                    <div>
                      <label htmlFor="size" className="eyebrow block mb-3">
                        Bra Size *
                      </label>
                      <select
                        id="size"
                        name="size"
                        required
                        value={form.size}
                        onChange={handleChange}
                        className="input-luxury cursor-pointer bg-transparent"
                        style={{ appearance: "none" }}
                      >
                        <option value="" disabled>
                          Select your size (or closest)
                        </option>
                        {sizes.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* City */}
                    <div className="relative">
                      <label
                        htmlFor="city"
                        className={`absolute top-0 left-0 transition-all duration-300 font-body pointer-events-none ${
                          focused === "city" || form.city
                            ? "text-xs text-[#2B221F]/40 -translate-y-4"
                            : "text-sm text-[#2B221F]/40 translate-y-3"
                        }`}
                      >
                        City
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        value={form.city}
                        onChange={handleChange}
                        onFocus={() => setFocused("city")}
                        onBlur={() => setFocused(null)}
                        className="input-luxury mt-4"
                        autoComplete="address-level2"
                      />
                    </div>

                    {/* Feedback */}
                    <div className="relative">
                      <label
                        htmlFor="feedback"
                        className={`absolute top-0 left-0 transition-all duration-300 font-body pointer-events-none ${
                          focused === "feedback" || form.feedback
                            ? "text-xs text-[#2B221F]/40 -translate-y-4"
                            : "text-sm text-[#2B221F]/40 translate-y-3"
                        }`}
                      >
                        What do you wish existed? (optional)
                      </label>
                      <textarea
                        id="feedback"
                        name="feedback"
                        rows={3}
                        value={form.feedback}
                        onChange={handleChange}
                        onFocus={() => setFocused("feedback")}
                        onBlur={() => setFocused(null)}
                        className="input-luxury mt-4 resize-none"
                      />
                    </div>

                    {/* Progress indicator */}
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="h-0.5 flex-1 transition-all duration-500"
                          style={{
                            backgroundColor: i < countFilled ? "#2B221F" : "#E8DCCB",
                          }}
                        />
                      ))}
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full justify-center"
                      id="founding-circle-submit"
                    >
                      <span>Join The Circle</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>

                    <p className="font-body text-xs text-[#2B221F]/30 text-center leading-relaxed">
                      No spam. No launches you didn&apos;t ask for.
                      Only what you need to know, when it matters.
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center text-center py-20"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                    className="w-16 h-16 border border-[#D8A5A0] flex items-center justify-center mb-8"
                  >
                    <span className="text-[#D8A5A0] text-2xl">✦</span>
                  </motion.div>

                  <h3
                    className="font-display text-4xl text-[#2B221F] mb-4"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    You&apos;re In The Circle.
                  </h3>
                  <p className="font-body text-base text-[#2B221F]/50 leading-relaxed max-w-sm mb-3">
                    Welcome, co-creator. We&apos;ll be in touch when it matters —
                    which means before anyone else knows this exists.
                  </p>
                  <p
                    className="font-editorial text-sm text-[#5C2331] italic"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    The industry told you the problem was your body.
                    <br />
                    You knew better.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
