import { Metadata } from 'next';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import { RashiClient } from './RashiClient';

export const metadata: Metadata = {
  title: 'अपनी राशि (Moon Sign) जानें - JanmJyoti',
  description: 'जन्म विवरण के आधार पर अपनी सटीक चंद्र राशि (Moon Sign) और उसका अर्थ जानें।',
};

export default function RashiPage() {
  return (
    <AstroToolLayout 
      title="राशि कैलकुलेटर"
      description="वैदिक ज्योतिष में चंद्र राशि (Moon Sign) आपके मन और भावनाओं का प्रतिनिधित्व करती है। नीचे अपना विवरण भरें और अपनी राशि जानें।"
    >
      <RashiClient />
    </AstroToolLayout>
  );
}
