import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { dashaData } from '@/data/content/dasha';
import DashaReferenceClient from './DashaReferenceClient';

export function generateStaticParams() {
  return Object.keys(dashaData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const dasha = dashaData[slug];

  if (!dasha) {
    return { title: 'Not Found' };
  }

  return {
    title: `${dasha.name.hi} - ${dasha.name.en} | Vimshottari Mahadasha Effects`,
    description: `Understand the effects, career impact, relationship changes, and remedies for the ${dasha.name.en} (${dasha.durationYears} years) in Vedic Astrology.`,
    alternates: {
      canonical: `https://janmjyotikundali.com/dasha/${slug}`
    }
  };
}

export default async function DashaReferencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dasha = dashaData[slug];

  if (!dasha) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${dasha.name.hi} - ${dasha.name.en} Effects and Remedies`,
    description: `Understand the effects and remedies for the ${dasha.name.en} in Vedic Astrology.`,
    url: `https://janmjyotikundali.com/dasha/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://janmjyotikundali.com/dasha/${slug}`
    }
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://janmjyotikundali.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Vimshottari Mahadasha',
        item: 'https://janmjyotikundali.com/dasha'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: dasha.name.en,
        item: `https://janmjyotikundali.com/dasha/${slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <DashaReferenceClient dasha={dasha} />
    </>
  );
}
