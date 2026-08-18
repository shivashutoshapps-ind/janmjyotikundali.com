import { Metadata } from 'next';
import { DoshaHubClient } from './DoshaHubClient';

export const metadata: Metadata = {
  title: 'ज्योतिषीय दोष (Astrological Doshas) | JanmJyoti',
  description: 'वैदिक ज्योतिष में विभिन्न दोषों (जैसे मांगलिक दोष) का अर्थ, प्रभाव और वास्तविकता जानें। Learn the meaning and effects of Astrological Doshas.',
  alternates: {
    canonical: 'https://janmjyotikundali.com/dosha',
  },
  openGraph: {
    title: 'ज्योतिषीय दोष (Astrological Doshas) | JanmJyoti',
    description: 'वैदिक ज्योतिष में दोषों का महत्व और प्रभाव।',
    url: 'https://janmjyotikundali.com/dosha',
    type: 'website',
    locale: 'hi_IN',
    alternateLocale: 'en_US',
  }
};

export default function DoshaHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ज्योतिषीय दोष (Astrological Doshas)",
    "description": "वैदिक ज्योतिष में विभिन्न दोषों का अर्थ और महत्व।",
    "url": "https://janmjyotikundali.com/dosha"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <DoshaHubClient />
    </>
  );
}
