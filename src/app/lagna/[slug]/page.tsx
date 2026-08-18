import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { lagnaData } from '@/data/content/lagna';
import { LagnaReferenceClient } from './LagnaReferenceClient';

export async function generateStaticParams() {
  return Object.keys(lagnaData).map((slug) => ({
    slug,
  }));
}

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const data = lagnaData[slug];

  if (!data) return {};

  return {
    title: `${data.name.hi} लग्न (${data.englishName} Ascendant) - Vedic Astrology | JanmJyoti`,
    description: data.introduction.hi,
    alternates: {
      canonical: `/lagna/${slug}`,
    },
    openGraph: {
      title: `${data.name.hi} लग्न - JanmJyoti`,
      description: data.introduction.hi,
      url: `/lagna/${slug}`,
    }
  };
}

export default function LagnaReferencePage({ params }: Props) {
  const { slug } = params;
  const data = lagnaData[slug];

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
            "headline": `${data.name.hi} लग्न - ${data.englishName} Ascendant`,
            "description": data.introduction.hi,
            "about": {
              "@type": "Thing",
              "name": `${data.englishName} Ascendant`
            },
            "url": `https://janmjyotikundali.com/lagna/${slug}`
          })
        }}
      />
      <LagnaReferenceClient lagnaData={data} />
    </>
  );
}
