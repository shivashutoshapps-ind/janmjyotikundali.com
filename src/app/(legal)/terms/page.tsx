import { Metadata } from 'next';
import TermsClient from './TermsClient';

export const metadata: Metadata = {
  title: 'नियम व शर्तें (Terms & Conditions)',
  description: 'JanmJyotiKundali.com के उपयोग के नियम और शर्तें।',
};

export default function TermsPage() {
  return <TermsClient />;
}
