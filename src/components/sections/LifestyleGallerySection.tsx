"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "/confidence.jpg",
    alt: "Forme lingerie styled under oversized tailoring",
    aspect: "aspect-[3/4]",
    caption: "Worn under oversized tailoring.",
    yOffset: 0
  },
  {
    src: "/hero.jpg",
    alt: "Relaxed morning styling with comfortable Forme support",
    aspect: "aspect-[4/5]",
    caption: "Sunday mornings, uncompromised.",
    yOffset: 40
  },
  {
    src: "/community.jpg",
    alt: "Women wearing outfits supported by invisible Forme fit",
    aspect: "aspect-[1/1]",
    caption: "Support that stays invisible.",
    yOffset: -20
  },
  {
    src: "/product-bra.jpg",
    alt: "Close product view of the everyday Forme plunge bra",
    aspect: "aspect-[3/4]",
    caption: "The everyday plunge.",
    yOffset: 20
  }
];

export default function LifestyleGallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const transforms = [y1, y2, y3, y4];

  return (
    <section 
      ref={containerRef} 
      className="py-32 overflow-hidden bg-ivory relative"
    >
      <div className="container-luxury">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9 }}
            className="font-display text-4xl md:text-5xl text-espresso mb-4"
          >
            Styled for Your Reality
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-sm text-espresso/60"
          >
            Tag @forme to be featured in our community gallery.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {galleryImages.map((img, i) => (
            <motion.div 
              key={i}
              style={{ y: transforms[i] }}
              className={`relative group flex flex-col ${i % 2 !== 0 ? 'md:mt-16' : ''}`}
            >
              <div className={`relative w-full ${img.aspect} overflow-hidden bg-champagne`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Shop the look overlay */}
                <div className="absolute inset-0 bg-espresso/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <button className="px-6 py-3 bg-white text-espresso font-body text-xs uppercase tracking-widest hover:bg-ivory transition-colors">
                    Shop The Look
                  </button>
                </div>
              </div>
              <p className="font-editorial text-sm text-espresso/70 mt-4 text-center">
                {img.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
