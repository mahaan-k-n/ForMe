"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SearchSection from "@/components/sections/SearchSection";
import FabricTruthSection from "@/components/sections/FabricTruthSection";
import HeroBraSection from "@/components/sections/HeroBraSection";
import ConfidenceSection from "@/components/sections/ConfidenceSection";
import RealWomenSection from "@/components/sections/RealWomenSection";
import EngineeredSection from "@/components/sections/EngineeredSection";
import FitFinderSection from "@/components/sections/FitFinderSection";
import FoundingCircleSection from "@/components/sections/FoundingCircleSection";
import FeaturedCollectionSection from "@/components/sections/FeaturedCollectionSection";
import LifestyleGallerySection from "@/components/sections/LifestyleGallerySection";

function PageLoader() {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: "#F8F4EE" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      aria-hidden="true"
    >
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-6xl md:text-8xl text-espresso tracking-[0.1em] uppercase"
          style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
        >
          Forme
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.0, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-px bg-[#D8A5A0] mt-4 origin-left"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="eyebrow mt-4 text-center"
        >
          Finally Fits.
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!loaded && <PageLoader />}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Navigation />
        <HeroSection />
        <ProblemSection />
        <SearchSection />
        <FabricTruthSection />
        <HeroBraSection />
        <FeaturedCollectionSection />
        <ConfidenceSection />
        <LifestyleGallerySection />
        <RealWomenSection />
        <EngineeredSection />
        <FitFinderSection />
        <FoundingCircleSection />
        <Footer />
      </motion.main>
    </>
  );
}
