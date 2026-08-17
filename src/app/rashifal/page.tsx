import { Metadata } from 'next';
import RashifalDashboardClient from './RashifalDashboardClient';

export const metadata: Metadata = {
  title: 'आज का राशिफल (Daily Rashifal) - JanmJyoti',
  description: 'आज का राशिफल जानें। चंद्र राशि पर आधारित मेष, वृषभ, मिथुन, कर्क, सिंह, कन्या, तुला, वृश्चिक, धनु, मकर, कुंभ, मीन राशिफल।',
  alternates: {
    canonical: '/rashifal',
  },
  openGraph: {
    title: 'आज का राशिफल - JanmJyoti',
    description: 'सभी 12 राशियों का आज का सटीक राशिफल जानें।',
    url: '/rashifal',
  }
};

export default function RashifalDashboardPage() {
  return <RashifalDashboardClient />;
}
