import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { grahaData } from '@/data/content/graha';
import { GrahaReferenceClient } from './GrahaReferenceClient';

export async function generateStaticParams() {
  return Object.keys(grahaData).map((slug) => ({
    slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = grahaData[slug];

  if (!data) return {};

  const title = `${data.name.hi} ग्रह (${data.englishName} Planet) - Vedic Astrology | JanmJyoti`;
  const description = `वैदिक ज्योतिष में ${data.name.hi} ग्रह का महत्व, गुण, उच्च-नीच राशियां और विशेषताएं। Learn about the significance of ${data.englishName} in Vedic astrology.`;
  const url = `https://janmjyotikundali.com/graha/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      locale: 'hi_IN',
      alternateLocale: 'en_US',
    }
  };
}

export default async function GrahaReferencePage({ params }: Props) {
  const { slug } = await params;
  const data = grahaData[slug];

  if (!data) {
    notFound();
  }

  // Schema.org structured data for Article
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${data.name.hi} ग्रह (${data.englishName}) in Vedic Astrology`,
    "description": `वैदिक ज्योतिष में ${data.name.hi} ग्रह का महत्व और विशेषताएं।`,
    "url": `https://janmjyotikundali.com/graha/${slug}`,
    "publisher": {
      "@type": "Organization",
      "name": "JanmJyoti",
      "logo": {
        "@type": "ImageObject",
        "url": "https://janmjyotikundali.com/logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <GrahaReferenceClient grahaData={data} />
    </>
  );
}
