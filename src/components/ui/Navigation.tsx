"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "The Story", href: "#problem" },
  { label: "Fabric Truth", href: "#fabric" },
  { label: "The Bra", href: "#hero-bra" },
  { label: "Community", href: "#community" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F8F4EE]/95 backdrop-blur-md border-b border-[#E8DCCB]/60 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container-luxury flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="/"
            className={`font-display text-xl tracking-[0.12em] uppercase font-light transition-colors duration-300 ${
              scrolled ? "text-espresso" : "text-[#2B221F]"
            }`}
            style={{ fontFamily: "var(--font-cormorant)" }}
            whileHover={{ letterSpacing: "0.16em" }}
            transition={{ duration: 0.3 }}
          >
            Forme
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-body text-xs tracking-[0.12em] uppercase text-[#2B221F] opacity-60 hover:opacity-100 transition-opacity duration-300 bg-transparent border-none cursor-pointer"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#founding")}
              className="btn-primary text-xs"
            >
              <span>Join The Circle</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
                className="block w-6 h-px bg-[#2B221F] transition-all"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className="block w-6 h-px bg-[#2B221F] transition-all"
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
                className="block w-6 h-px bg-[#2B221F] transition-all"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[#F8F4EE] flex flex-col pt-24 pb-12 px-8"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-display text-4xl text-left text-[#2B221F] font-light bg-transparent border-none cursor-pointer"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
            <div className="mt-12">
              <button
                onClick={() => handleNavClick("#founding")}
                className="btn-primary w-full justify-center"
              >
                <span>Join The Founding Circle</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
