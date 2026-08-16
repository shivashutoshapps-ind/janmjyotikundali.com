import { Metadata } from 'next';
import Link from 'next/link';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import { PanchangClient } from './PanchangClient';

export const metadata: Metadata = {
  title: 'आज का पंचांग (Today Panchang)',
  description: 'आज का हिन्दू पंचांग, शुभ-अशुभ मुहूर्त, राहुकाल, तिथि, नक्षत्र और योग जानें। दैनिक पंचांग (Daily Panchang) हिंदी में।',
  alternates: {
    canonical: '/panchang',
  },
  openGraph: {
    title: 'आज का पंचांग - JanmJyoti',
    description: 'आज का हिन्दू पंचांग, राहुकाल, तिथि और शुभ मुहूर्त जानें।',
    url: '/panchang',
  }
};

export default function PanchangPage() {
  return (
    <AstroToolLayout 
      title="आज का पंचांग"
      description={
        <>
          दैनिक हिन्दू पंचांग, तिथि, नक्षत्र, योग, करण और शुभ मुहूर्त की विस्तृत जानकारी। विस्तृत भविष्यफल के लिए अपनी <Link href="/kundli" style={{color: 'var(--primary)', textDecoration: 'underline'}}>जन्म कुंडली</Link> देखें।
        </>
      }
      breadcrumbs={[
        { label: 'होम', href: '/' },
        { label: 'पंचांग' }
      ]}
    >
      <PanchangClient />
    </AstroToolLayout>
  );
}
