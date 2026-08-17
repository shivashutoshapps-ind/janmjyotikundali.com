import { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';

export const metadata: Metadata = {
  title: 'प्राइवेसी पॉलिसी (Privacy Policy)',
  description: 'JanmJyotiKundali.com की गोपनीयता नीति। जानें कि हम आपके डेटा को कैसे सुरक्षित रखते हैं।',
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
