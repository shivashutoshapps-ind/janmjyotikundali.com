import { Metadata } from 'next';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import { NakshatraClient } from './NakshatraClient';

export const metadata: Metadata = {
  title: 'अपना जन्म नक्षत्र जानें - JanmJyoti',
  description: 'जन्म विवरण के आधार पर अपना जन्म नक्षत्र, चरण और उसके स्वामी के बारे में जानें।',
};

export default function NakshatraPage() {
  return (
    <AstroToolLayout 
      title="नक्षत्र कैलकुलेटर"
      description="नक्षत्र आपके स्वभाव और जीवन की दिशा को प्रभावित करते हैं। नीचे अपना विवरण भरें और अपना जन्म नक्षत्र जानें।"
    >
      <NakshatraClient />
    </AstroToolLayout>
  );
}
