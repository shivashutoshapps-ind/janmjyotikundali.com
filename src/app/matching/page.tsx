import { Metadata } from 'next';
import MatchingPageClient from './MatchingPageClient';

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
  return <MatchingPageClient />;
}
