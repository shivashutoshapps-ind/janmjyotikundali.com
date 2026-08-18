import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { nakshatraData } from '@/data/content/nakshatra';
import { NakshatraReferenceClient } from './NakshatraReferenceClient';

export async function generateStaticParams() {
  return Object.keys(nakshatraData).map((slug) => ({
    slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = nakshatraData[slug];

  if (!data) return {};

  return {
    title: `${data.sanskritName.hi} (${data.name.en} Nakshatra) - Vedic Astrology - JanmJyoti`,
    description: data.introduction.hi,
    alternates: {
      canonical: `/nakshatra/${slug}`,
    },
    openGraph: {
      title: `${data.sanskritName.hi} - JanmJyoti`,
      description: data.introduction.hi,
      url: `/nakshatra/${slug}`,
    }
  };
}

export default async function NakshatraReferencePage({ params }: Props) {
  const { slug } = await params;
  const data = nakshatraData[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": `${data.sanskritName.hi} - ${data.name.en} Nakshatra`,
            "description": data.introduction.hi,
            "about": {
              "@type": "Thing",
              "name": data.name.en
            },
            "url": `https://janmjyotikundali.com/nakshatra/${slug}`
          })
        }}
      />
      <NakshatraReferenceClient nakshatraData={data} />
    </>
  );
}
