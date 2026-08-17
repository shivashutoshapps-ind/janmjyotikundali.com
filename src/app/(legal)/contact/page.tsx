import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'संपर्क करें (Contact Us)',
  description: 'JanmJyotiKundali.com से संपर्क करें। अपने सुझाव या प्रश्न हमें भेजें।',
};

export default function ContactPage() {
  return <ContactClient />;
}
