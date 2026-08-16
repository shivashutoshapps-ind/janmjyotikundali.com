import { Metadata } from 'next';
import Link from 'next/link';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import { RashiClient } from './RashiClient';

export const metadata: Metadata = {
  title: 'अपनी राशि (Moon Sign) जानें',
  description: 'जन्म विवरण के आधार पर अपनी सटीक चंद्र राशि (Moon Sign) और उसका अर्थ जानें। भारतीय वैदिक ज्योतिष के अनुसार अपनी राशि निकालें।',
  alternates: {
    canonical: '/rashi',
  },
  openGraph: {
    title: 'अपनी राशि जानें - JanmJyoti',
    description: 'भारतीय वैदिक ज्योतिष के अनुसार अपनी सटीक चंद्र राशि (Moon Sign) जानें।',
    url: '/rashi',
  }
};

export default function RashiPage() {
  return (
    <AstroToolLayout 
      title="राशि कैलकुलेटर"
      description={
        <>
          वैदिक ज्योतिष में चंद्र राशि (Moon Sign) आपके मन और भावनाओं का प्रतिनिधित्व करती है। 
          विस्तृत फलादेश के लिए अपनी <Link href="/kundli" style={{color: 'var(--primary)', textDecoration: 'underline'}}>जन्म कुंडली</Link> बनाएं।
        </>
      }
      breadcrumbs={[
        { label: 'होम', href: '/' },
        { label: 'ज्योतिष टूल्स' },
        { label: 'राशि' }
      ]}
    >
      <RashiClient />
    </AstroToolLayout>
  );
}
