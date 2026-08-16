import { Metadata } from 'next';
import Link from 'next/link';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import { KundliClient } from './KundliClient';

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
  return (
    <AstroToolLayout 
      title="फ्री जन्मकुंडली"
      description={
        <>
          आपकी जन्मकुंडली आपके जन्म के समय ग्रहों की स्थिति का एक नक्शा है। अपनी <Link href="/rashi" style={{color: 'var(--primary)', textDecoration: 'underline'}}>राशि</Link> और <Link href="/nakshatra" style={{color: 'var(--primary)', textDecoration: 'underline'}}>नक्षत्र</Link> जानने के लिए अलग टूल्स का उपयोग करें।
        </>
      }
      breadcrumbs={[
        { label: 'होम', href: '/' },
        { label: 'ज्योतिष टूल्स' },
        { label: 'जन्म कुंडली' }
      ]}
    >
      <KundliClient />
    </AstroToolLayout>
  );
}
