import { Metadata } from 'next';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import { MatchingClient } from './MatchingClient';

export const metadata: Metadata = {
  title: 'कुंडली मिलान (Kundli Matching) - JanmJyoti',
  description: 'पारंपरिक अष्टकूट गुण मिलान (Ashtakoot Guna Milan) द्वारा निःशुल्क और सटीक कुंडली मिलान करें। 36 गुणों की विस्तृत जानकारी।',
  alternates: {
    canonical: '/matching',
  },
  openGraph: {
    title: 'कुंडली मिलान (Kundli Matching) - JanmJyoti',
    description: 'वर और वधू की जन्म कुंडली का पारंपरिक अष्टकूट आधार पर मिलान करें।',
    url: '/matching',
  }
};

export default function MatchingPage() {
  return (
    <AstroToolLayout 
      title="कुंडली मिलान (Kundli Matching)"
      description="वर (लड़के) और वधू (लड़की) का जन्म विवरण दर्ज करके पारंपरिक वैदिक अष्टकूट आधार पर 36 गुणों का मिलान करें।"
      breadcrumbs={[
        { label: 'होम', href: '/' },
        { label: 'कुंडली मिलान' }
      ]}
    >
      <MatchingClient />
    </AstroToolLayout>
  );
}
