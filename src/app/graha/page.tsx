import { Metadata } from 'next';
import { GrahaHubClient } from './GrahaHubClient';

export const metadata: Metadata = {
  title: 'नवग्रह (9 Planets) in Vedic Astrology | JanmJyoti',
  description: 'वैदिक ज्योतिष में 9 ग्रहों (नवग्रह) का महत्व। सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु और केतु के प्रभाव और विशेषताएं विस्तार से जानें।',
  alternates: {
    canonical: 'https://janmjyotikundali.com/graha',
  },
  openGraph: {
    title: 'नवग्रह (9 Planets) in Vedic Astrology | JanmJyoti',
    description: 'वैदिक ज्योतिष में नवग्रहों का महत्व और प्रभाव।',
    url: 'https://janmjyotikundali.com/graha',
    type: 'website',
    locale: 'hi_IN',
    alternateLocale: 'en_US',
  }
};

export default function GrahaHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "नवग्रह (9 Planets in Vedic Astrology)",
    "description": "वैदिक ज्योतिष में 9 ग्रहों (नवग्रह) का महत्व।",
    "url": "https://janmjyotikundali.com/graha"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <GrahaHubClient />
    </>
  );
}
