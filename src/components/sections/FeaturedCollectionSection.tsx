"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: "balconette",
    name: "The Signature Balconette",
    description: "Lift and separation for D-H cups, with a higher centre panel and a band that stays anchored through long Indian days.",
    proof: ["28mm comfort straps", "Higher centre panel", "Heat-aware lining"],
    image: "/product-bra.jpg",
    colors: ["#2B221F", "#F8F4EE", "#5C2331"],
  },
  {
    id: "plunge",
    name: "The Everyday Plunge",
    description: "A lower neckline that still respects gravity. Built for silk shirts, kurtas, wrap dresses, and the outfits you stopped trusting.",
    proof: ["No top-cup spill", "Stabilised side wing", "Breathable cup depth"],
    image: "/confidence.jpg",
    colors: ["#2B221F", "#E8DCCB"],
  },
  {
    id: "lounge",
    name: "The Seamless Lounge",
    description: "Wire-free ease for fuller busts without the usual collapse. Soft enough for home, structured enough for the day outside.",
    proof: ["Wide underband", "Moisture-moving modal", "Shape without padding"],
    image: "/hero.jpg",
    colors: ["#2B221F", "#F8F4EE", "#D8A5A0", "#5C2331"],
  },
];

export default function FeaturedCollectionSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="collection" ref={ref} className="bg-white py-24 md:py-32">
      <div className="container-luxury">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="gold-rule" />
              <span className="eyebrow">The First Forms</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9 }}
              className="text-display-lg font-display text-espresso max-w-xl leading-tight"
            >
              Not A Collection.
              <br />
              A Correction.
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="max-w-md"
          >
            <p className="font-body text-sm text-espresso/50 leading-relaxed">
              Three launch silhouettes. Each one starts from D+ proportions,
              Indian wardrobes, humid weather, and the simple refusal to choose
              between support and beauty.
            </p>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + (i * 0.15) }}
              className="group flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-champagne mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B221F]/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-grow">
                <h3 className="font-display text-2xl text-espresso group-hover:text-burgundy transition-colors mb-3">
                  {product.name}
                </h3>
                
                <p className="font-body text-sm text-espresso/60 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-3 mt-auto mb-6">
                  {product.proof.map((item) => (
                    <div key={item} className="flex items-center gap-3 border-t border-champagne pt-3">
                      <span className="w-1 h-1 rounded-full bg-dusty-rose flex-shrink-0" />
                      <span className="font-body text-xs text-espresso/45 tracking-wide">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    {product.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-4 h-4 rounded-full border border-black/10"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span className="font-body text-[10px] text-espresso/35 uppercase tracking-widest">
                    Prototype {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 flex flex-col md:flex-row md:items-center justify-between gap-8 border-t border-champagne pt-10"
        >
          <p className="font-editorial text-xl text-espresso/60 italic max-w-xl">
            We are not releasing more styles until these first forms survive
            real bodies, real weather, and real feedback.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#founding");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary md:flex-shrink-0"
          >
            <span>Join The Fitting List</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
