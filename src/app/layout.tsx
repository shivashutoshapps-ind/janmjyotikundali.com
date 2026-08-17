import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansDevanagari = Noto_Sans_Devanagari({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["devanagari"],
  variable: "--font-noto-sans-devanagari"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://janmjyotikundali.com'),
  title: {
    template: '%s | JanmJyoti',
    default: 'JanmJyoti - सत्य, सरल और सटीक भारतीय ज्योतिष',
  },
  description: 'JanmJyoti provides trustworthy Indian astrology, daily Rashifal, free personalized Kundli, Panchang, and astrology tools in Hindi.',
  keywords: ['जन्मकुंडली', 'राशिफल', 'astrology in hindi', 'free kundli', 'kundali matching', 'panchang', 'vedic astrology', 'ज्योतिष'],
  openGraph: {
    title: 'JanmJyoti - सत्य, सरल और सटीक भारतीय ज्योतिष',
    description: 'JanmJyoti provides trustworthy Indian astrology, daily Rashifal, free personalized Kundli, Panchang, and astrology tools in Hindi.',
    url: 'https://janmjyotikundali.com',
    siteName: 'JanmJyoti',
    locale: 'hi_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JanmJyoti - भारतीय ज्योतिष',
    description: 'Trustworthy Indian astrology and Kundli tools in Hindi.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body className={`${inter.variable} ${notoSansDevanagari.variable}`}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
