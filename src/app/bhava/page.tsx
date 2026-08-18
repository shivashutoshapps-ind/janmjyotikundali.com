import { Metadata } from 'next';
import BhavaHubClient from './BhavaHubClient';

export const metadata: Metadata = {
  title: 'कुंडली के 12 भाव - 12 Houses of Kundli in Vedic Astrology',
  description: 'Understand the meaning and significance of the 12 houses (Bhavas) in Vedic Astrology. Learn what each house represents in your birth chart.',
  alternates: {
    canonical: 'https://janmjyotikundali.com/bhava'
  }
};

export default function BhavaHubPage() {
  return <BhavaHubClient />;
}
