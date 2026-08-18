import { Metadata } from 'next';
import DashaHubClient from './DashaHubClient';

export const metadata: Metadata = {
  title: 'विंशोत्तरी महादशा - Vimshottari Mahadasha in Vedic Astrology',
  description: 'Understand the effects and remedies of the 9 planetary Mahadashas (periods) in Vedic Astrology. Learn how Sun, Moon, Mars, Rahu, Jupiter, Saturn, Mercury, Ketu, and Venus periods affect your life.',
  alternates: {
    canonical: 'https://janmjyotikundali.com/dasha'
  }
};

export default function DashaHubPage() {
  return <DashaHubClient />;
}
