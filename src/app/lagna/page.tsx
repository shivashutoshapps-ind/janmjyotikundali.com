import { Metadata } from 'next';
import Link from 'next/link';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import { LagnaClient } from './LagnaClient';

export const metadata: Metadata = {
  title: 'अपना लग्न (Ascendant) जानें',
  description: 'जन्म समय और स्थान के आधार पर अपना सटीक लग्न (Ascendant) और उसका आपके जीवन पर प्रभाव जानें।',
  alternates: {
    canonical: '/lagna',
  },
  openGraph: {
    title: 'अपना लग्न जानें - JanmJyoti',
    description: 'वैदिक ज्योतिष के अनुसार अपना सटीक लग्न (Ascendant) जानें।',
    url: '/lagna',
  }
};

export default function LagnaPage() {
  return (
    <AstroToolLayout 
      title="लग्न कैलकुलेटर"
      description={
        <>
          लग्न (Ascendant) आपके व्यक्तित्व को दर्शाता है। संपूर्ण भाव फल जानने के लिए अपनी <Link href="/kundli" style={{color: 'var(--primary)', textDecoration: 'underline'}}>विस्तृत जन्म कुंडली</Link> बनाएं।
        </>
      }
      breadcrumbs={[
        { label: 'होम', href: '/' },
        { label: 'ज्योतिष टूल्स' },
        { label: 'लग्न' }
      ]}
    >
      <LagnaClient />
    </AstroToolLayout>
  );
}
