import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forme — Finally Fits. Actually Pretty. Built To Last.",
  description:
    "Beautifully engineered lingerie for the D+ woman. The industry solved for average. We didn't. Engineered for fit, comfort, and durability — without compromise.",
  keywords: [
    "lingerie D+ sizes",
    "full bust bras India",
    "supportive lingerie",
    "luxury lingerie",
    "TENCEL bras",
    "comfortable full coverage bra",
    "D+ lingerie brand",
  ],
  openGraph: {
    title: "Forme — Finally Fits. Actually Pretty. Built To Last.",
    description:
      "The industry told you the problem was your body. The problem was the bra.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forme — Finally Fits. Actually Pretty. Built To Last.",
    description:
      "The industry told you the problem was your body. The problem was the bra.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
