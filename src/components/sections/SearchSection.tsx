"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const moments = [
  "You try on twelve bras across three stores.",
  "You go home with the one that fits least badly.",
  "You adjust it every forty minutes.",
  "You plan your outfit around what you can hide.",
  "You order online. Three sizes. Return two.",
  "You settle. Again.",
];

const searchImages = [
  {
    src: "/problem.jpg",
    alt: "Close crop of a poorly fitting bra before Forme",
    caption: "The old compromise",
    className: "aspect-[4/5] md:mt-12",
  },
  {
    src: "/landing 2.png",
    alt: "Forme burgundy lace bra with fuller-bust construction",
    caption: "The corrected pattern",
    className: "aspect-[3/4]",
  },
];

export default function SearchSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  return (
    <section ref={ref} className="bg-[#F8F4EE] overflow-hidden">
      {/* Full-bleed marquee line */}
      <div className="py-6 border-y border-[#E8DCCB] overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex items-center gap-12 whitespace-nowrap"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-editorial text-sm text-[#2B221F]/30 italic flex-shrink-0"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Finally Fits. &nbsp;·&nbsp; Actually Pretty. &nbsp;·&nbsp; Built To Last. &nbsp;·&nbsp;
            </span>
          ))}
        </motion.div>
      </div>

      <div className="container-luxury section-luxury">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="gold-rule" />
              <span className="eyebrow">The Experience</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-display-xl font-display text-[#2B221F] mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Some Women
              <br />
              Shop For Bras.
              <br />
              Others{" "}
              <span className="text-[#5C2331] italic">Hunt</span>
              <br />
              For Them.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-base text-[#2B221F]/55 leading-relaxed mb-10 max-w-sm"
            >
              Every purchase becomes a gamble when sizing changes from brand to
              brand, season to season, country to country. You stopped trusting
              labels. You started trusting nothing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="p-8 bg-[#E8DCCB]/50"
            >
              <p
                className="font-editorial text-xl text-[#2B221F]/70 italic leading-relaxed"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                &ldquo;She doesn&apos;t shop for bras the way she shops for shoes.
                She shops for bras the way she shops for a dentist.
                With dread. And low expectations.&rdquo;
              </p>
            </motion.div>
          </div>

          {/* Right: moments list */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 md:gap-6 mb-10"
            >
              {searchImages.map((image, i) => (
                <div key={image.src} className={image.className}>
                  <div className="relative h-full min-h-72 overflow-hidden bg-[#E8DCCB]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B221F]/45 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                      <span className="font-body text-[10px] uppercase tracking-[0.18em] text-[#F8F4EE]/80">
                        {image.caption}
                      </span>
                      <span className="font-body text-xs tabular-nums text-[#D8A5A0]">
                        0{i + 1}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="space-y-0">
              {moments.map((moment, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.12 + 0.3, duration: 0.6 }}
                  className="group border-b border-[#E8DCCB] py-6 flex items-start gap-6 hover:bg-[#E8DCCB]/20 transition-colors duration-300 px-2"
                >
                  <span className="font-body text-xs text-[#D8A5A0] tabular-nums mt-1 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className="font-display text-lg md:text-xl text-[#2B221F]/75 group-hover:text-[#2B221F] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {moment}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="pt-8 flex items-center gap-4"
            >
              <div className="gold-rule flex-shrink-0" />
              <p className="font-body text-sm text-[#2B221F]/40 italic">
                This ends here.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
