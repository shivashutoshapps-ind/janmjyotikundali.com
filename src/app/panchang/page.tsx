import { Metadata } from 'next';
import PanchangPageClient from './PanchangPageClient';

export const metadata: Metadata = {
  title: 'आज का पंचांग (Today Panchang)',
  description: 'आज का हिन्दू पंचांग, शुभ-अशुभ मुहूर्त, राहुकाल, तिथि, नक्षत्र और योग जानें। दैनिक पंचांग (Daily Panchang) हिंदी में।',
  alternates: {
    canonical: '/panchang',
  },
  openGraph: {
    title: 'आज का पंचांग - JanmJyoti',
    description: 'आज का हिन्दू पंचांग, राहुकाल, तिथि और शुभ मुहूर्त जानें।',
    url: '/panchang',
  }
};

export default function PanchangPage() {
  return <PanchangPageClient />;
}
