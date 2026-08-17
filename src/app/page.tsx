import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'JanmJyoti - आपकी व्यक्तिगत जन्मकुंडली और राशिफल',
  description: 'JanmJyoti provides trustworthy Indian astrology, daily Rashifal, free personalized Kundli, Panchang, and astrology tools in Hindi.',
  openGraph: {
    title: 'JanmJyoti - आपकी व्यक्तिगत जन्मकुंडली और राशिफल',
    description: 'JanmJyoti provides trustworthy Indian astrology, daily Rashifal, free personalized Kundli, Panchang, and astrology tools in Hindi.',
    type: 'website',
    locale: 'hi_IN',
  },
  alternates: {
    canonical: '/',
  }
};

export default function Home() {
  return <HomeClient />;
}
