import { Metadata } from 'next';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import { PanchangClient } from './PanchangClient';

export const metadata: Metadata = {
  title: 'आज का पंचांग - JanmJyoti',
  description: 'दैनिक हिन्दू पंचांग, तिथि, नक्षत्र, योग, करण और शुभ मुहूर्त की जानकारी।',
};

export default function PanchangPage() {
  return (
    <AstroToolLayout 
      title="दैनिक पंचांग"
      description="पंचांग हिन्दू कैलेंडर के पाँच अंगों (तिथि, वार, नक्षत्र, योग और करण) से मिलकर बनता है। यह शुभ-अशुभ समय का ज्ञान कराता है।"
    >
      <PanchangClient />
    </AstroToolLayout>
  );
}
