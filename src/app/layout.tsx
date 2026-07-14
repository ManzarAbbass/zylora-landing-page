import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: false,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-heading",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Zylora — Boutique Email Marketing Agency",
  description:
    "Boutique email agency that takes your growth seriously. Get a free email audit today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-text-primary bg-white">
        {children}
      </body>
    </html>
  );
}
