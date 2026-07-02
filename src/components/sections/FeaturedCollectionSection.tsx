"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const products = [
  {
    id: "balconette",
    name: "The Signature Balconette",
    description: "Uncompromised lift and separation for D-H cups. Engineered without the padding.",
    price: "£85",
    image: "/product-bra.jpg",
    colors: ["#2B221F", "#F8F4EE", "#5C2331"]
  },
  {
    id: "plunge",
    name: "The Everyday Plunge",
    description: "Deep V-neckline support that actually stays put. Perfect under tailored shirts.",
    price: "£80",
    image: "/confidence.jpg",
    colors: ["#2B221F", "#E8DCCB"]
  },
  {
    id: "lounge",
    name: "The Seamless Lounge",
    description: "Wire-free comfort that doesn't sacrifice shape. Sunday morning, elevated.",
    price: "£65",
    image: "/hero.jpg",
    colors: ["#2B221F", "#F8F4EE", "#D8A5A0", "#5C2331"]
  }
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
              <span className="eyebrow">The Collection</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9 }}
              className="text-display-lg font-display text-espresso max-w-xl leading-tight"
            >
              Engineered for Your Reality.
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <a href="#" className="font-body text-xs uppercase tracking-widest text-espresso border-b border-espresso pb-1 hover:text-burgundy hover:border-burgundy transition-colors">
              View All Styles
            </a>
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
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-champagne mb-6">
                {/* Note: Using standard img tag temporarily for external unsplash URLs */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <button className="w-full py-4 bg-white/95 backdrop-blur-sm text-espresso font-body text-xs uppercase tracking-widest hover:bg-espresso hover:text-white transition-colors">
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-2xl text-espresso group-hover:text-burgundy transition-colors">
                    {product.name}
                  </h3>
                  <span className="font-body text-sm text-espresso">{product.price}</span>
                </div>
                
                <p className="font-body text-sm text-espresso/60 mb-6 line-clamp-2">
                  {product.description}
                </p>

                {/* Colors */}
                <div className="flex items-center gap-2 mt-auto">
                  {product.colors.map((color, idx) => (
                    <div 
                      key={idx} 
                      className="w-4 h-4 rounded-full border border-black/10"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                  <span className="font-body text-[10px] text-espresso/40 uppercase tracking-widest ml-2">
                    {product.colors.length} Colors
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
