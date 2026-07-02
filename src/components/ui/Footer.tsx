"use client";

import { scrollToSection } from "@/lib/scrollToSection";

const footerLinks = {
  "The Brand": [
    { label: "Our Story", href: "#problem" },
    { label: "Fabric Truth", href: "#fabric" },
    { label: "Engineered Differently", href: "#engineered" },
    { label: "The Founding Circle", href: "#founding" },
  ],
  Community: [
    { label: "Real Women", href: "#community" },
    { label: "Join The Circle", href: "#founding" },
    { label: "Instagram", href: "#" },
    { label: "Contact", href: "mailto:hello@formelingerie.in" },
  ],
  "Fine Print": [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Sizing Guide", href: "#fit-finder" },
  ],
};

export default function Footer() {
  const handleClick = (href: string) => {
    if (href.startsWith("#")) {
      scrollToSection(href);
    }
  };

  return (
    <footer className="bg-[#2B221F] text-[#F8F4EE]">
      <div className="container-luxury section-luxury-sm">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 pb-16 border-b border-[#F8F4EE]/10">
          {/* Brand column */}
          <div className="flex-shrink-0 max-w-sm">
            <div
              className="text-4xl font-light tracking-[0.12em] uppercase mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Forme
            </div>
            <p className="font-body text-sm leading-relaxed text-[#F8F4EE]/50 mb-8">
              Finally Fits. Actually Pretty. Built To Last.
              <br />
              <br />
              Engineered for the D+ woman India forgot.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 border border-[#F8F4EE]/20 flex items-center justify-center text-[#F8F4EE]/50 hover:text-[#F8F4EE] hover:border-[#F8F4EE]/50 transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-xl">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <div className="eyebrow mb-6 opacity-40">{category}</div>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => handleClick(link.href)}
                        className="font-body text-sm text-[#F8F4EE]/50 hover:text-[#F8F4EE] transition-colors duration-300 bg-transparent border-none cursor-pointer p-0"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="font-body text-xs text-[#F8F4EE]/30 tracking-wide">
            © 2026 Forme. All rights reserved. Engineered in India.
          </p>
          <p
            className="font-editorial text-xs text-[#F8F4EE]/20 italic"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The problem was never your body.
          </p>
        </div>
      </div>
    </footer>
  );
}
