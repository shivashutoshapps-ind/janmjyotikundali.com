import { Metadata } from 'next';
import YogaHubClient from './YogaHubClient';

export const metadata: Metadata = {
  title: 'वैदिक ज्योतिष योग - Vedic Astrology Yogas',
  description: 'Learn about the most important Yogas in Vedic astrology including Panchamahapurusha, Gajakesari, Budhaditya, and more. Understand their effects and realities.',
  alternates: {
    canonical: 'https://janmjyotikundali.com/yoga'
  }
};

export default function YogaHubPage() {
  return <YogaHubClient />;
}
