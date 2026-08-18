import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { doshaData } from '@/data/content/dosha';
import { DoshaReferenceClient } from './DoshaReferenceClient';

export async function generateStaticParams() {
  return Object.keys(doshaData).map((slug) => ({
    slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = doshaData[slug];

  if (!data) return {};

  const title = `${data.name.hi} (${data.englishName}) Meaning, Myths, and Significance - Vedic Astrology`;
  const description = `वैदिक ज्योतिष में ${data.name.hi} का अर्थ, प्रभाव और महत्व। Learn about the significance, myths, and reality of ${data.englishName} in Vedic astrology.`;
  const url = `https://janmjyotikundali.com/dosha/${slug}`;

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

export default async function DoshaReferencePage({ params }: Props) {
  const { slug } = await params;
  const data = doshaData[slug];

  if (!data) {
    notFound();
  }

  // Schema.org structured data for Article
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${data.name.hi} (${data.englishName}) in Vedic Astrology`,
    "description": `वैदिक ज्योतिष में ${data.name.hi} का अर्थ, प्रभाव और महत्व।`,
    "url": `https://janmjyotikundali.com/dosha/${slug}`,
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
      <DoshaReferenceClient doshaData={data} />
    </>
  );
}
