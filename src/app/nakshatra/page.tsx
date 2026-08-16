import { Metadata } from 'next';
import Link from 'next/link';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import { NakshatraClient } from './NakshatraClient';

export const metadata: Metadata = {
  title: 'अपना जन्म नक्षत्र जानें',
  description: 'जन्म विवरण के आधार पर अपना सटीक जन्म नक्षत्र, चरण और उसके स्वामी ग्रह के बारे में विस्तार से जानें।',
  alternates: {
    canonical: '/nakshatra',
  },
  openGraph: {
    title: 'अपना जन्म नक्षत्र जानें - JanmJyoti',
    description: 'जन्म विवरण के आधार पर अपना सटीक जन्म नक्षत्र और चरण जानें।',
    url: '/nakshatra',
  }
};

export default function NakshatraPage() {
  return (
    <AstroToolLayout 
      title="नक्षत्र कैलकुलेटर"
      description={
        <>
          नक्षत्र आपके स्वभाव और जीवन की दिशा को प्रभावित करते हैं। सम्पूर्ण विश्लेषण के लिए अपनी <Link href="/kundli" style={{color: 'var(--primary)', textDecoration: 'underline'}}>जन्म कुंडली</Link> अवश्य जांचें।
        </>
      }
      breadcrumbs={[
        { label: 'होम', href: '/' },
        { label: 'ज्योतिष टूल्स' },
        { label: 'नक्षत्र' }
      ]}
    >
      <NakshatraClient />
    </AstroToolLayout>
  );
}
