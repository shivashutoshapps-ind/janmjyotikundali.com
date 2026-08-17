import { Metadata } from 'next';
import KundliPageClient from './KundliPageClient';

export const metadata: Metadata = {
  title: 'जन्म कुंडली बनाएं (Free Kundli)',
  description: 'अपनी जन्म तिथि, समय और स्थान के आधार पर मुफ्त में विस्तृत जन्म कुंडली (Birth Chart) बनाएं। ग्रहों की स्थिति, भाव और दोष जानें।',
  alternates: {
    canonical: '/kundli',
  },
  openGraph: {
    title: 'फ्री जन्म कुंडली बनाएं - JanmJyoti',
    description: 'अपनी जन्म तिथि, समय और स्थान के आधार पर मुफ्त में विस्तृत जन्म कुंडली (Birth Chart) बनाएं।',
    url: '/kundli',
  }
};

export default function KundliPage() {
  return <KundliPageClient />;
}
