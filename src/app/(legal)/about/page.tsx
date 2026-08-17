import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'हमारे बारे में (About Us)',
  description: 'JanmJyotiKundali.com के बारे में जानें। सत्य और सटीक वैदिक ज्योतिष सेवाएं।',
};

export default function AboutPage() {
  return <AboutClient />;
}
