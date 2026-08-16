import { Metadata } from 'next';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import { LagnaClient } from './LagnaClient';

export const metadata: Metadata = {
  title: 'अपना लग्न (Ascendant) जानें - JanmJyoti',
  description: 'जन्म विवरण के आधार पर अपना लग्न (Ascendant) और उसका प्रभाव जानें।',
};

export default function LagnaPage() {
  return (
    <AstroToolLayout 
      title="लग्न कैलकुलेटर"
      description="लग्न (Ascendant) कुंडली का पहला भाव होता है, जो आपके व्यक्तित्व, स्वभाव और शारीरिक संरचना को दर्शाता है।"
    >
      <LagnaClient />
    </AstroToolLayout>
  );
}
