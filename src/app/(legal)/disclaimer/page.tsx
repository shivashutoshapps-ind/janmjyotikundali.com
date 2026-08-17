import { Metadata } from 'next';
import DisclaimerClient from './DisclaimerClient';

export const metadata: Metadata = {
  title: 'अस्वीकरण (Disclaimer)',
  description: 'JanmJyotiKundali.com के उपयोग के संबंध में महत्वपूर्ण अस्वीकरण।',
};

export default function DisclaimerPage() {
  return <DisclaimerClient />;
}
