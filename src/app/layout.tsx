import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansDevanagari = Noto_Sans_Devanagari({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["devanagari"],
  variable: "--font-noto-sans-devanagari"
});

export const metadata: Metadata = {
  title: "JanmJyoti - आपकी जन्मकुंडली और राशिफल",
  description: "JanmJyoti provides simplified, trustworthy Indian astrology, daily Rashifal, and free personalized Kundli in Hindi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body className={`${inter.variable} ${notoSansDevanagari.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
