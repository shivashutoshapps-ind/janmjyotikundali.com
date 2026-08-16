import { Metadata } from 'next';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import { KundliClient } from './KundliClient';

export const metadata: Metadata = {
  title: 'फ्री जन्मकुंडली बनाएं - JanmJyoti',
  description: 'अपनी जन्म तिथि, समय और स्थान के आधार पर मुफ्त में विस्तृत जन्मकुंडली बनाएं और अपने जीवन के विभिन्न पहलुओं को समझें।',
};

export default function KundliPage() {
  return (
    <AstroToolLayout 
      title="फ्री जन्मकुंडली"
      description="आपकी जन्मकुंडली आपके जन्म के समय ग्रहों की स्थिति का एक नक्शा है। यह आपके जीवन की संभावनाओं को समझने में मदद करती है।"
    >
      <KundliClient />
    </AstroToolLayout>
  );
}
