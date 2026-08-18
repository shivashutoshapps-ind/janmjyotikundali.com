import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { rashiData } from '@/data/content/rashi';
import { RashiReferenceClient } from './RashiReferenceClient';

export async function generateStaticParams() {
  return Object.keys(rashiData).map((slug) => ({
    slug,
  }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = rashiData[slug];

  if (!data) return {};

  return {
    title: `${data.sanskritName.hi} (${data.name.en} Moon Sign) - JanmJyoti`,
    description: data.introduction.hi,
    alternates: {
      canonical: `/rashi/${slug}`,
    },
    openGraph: {
      title: `${data.sanskritName.hi} - JanmJyoti`,
      description: data.introduction.hi,
      url: `/rashi/${slug}`,
    }
  };
}

export default async function RashiReferencePage({ params }: Props) {
  const { slug } = await params;
  const data = rashiData[slug];

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
            "headline": `${data.sanskritName.hi} - ${data.name.en} Moon Sign`,
            "description": data.introduction.hi,
            "about": {
              "@type": "Thing",
              "name": data.name.en
            },
            "url": `https://janmjyotikundali.com/rashi/${slug}`
          })
        }}
      />
      <RashiReferenceClient rashiData={data} />
    </>
  );
}
