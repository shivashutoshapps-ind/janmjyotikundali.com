import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { bhavaData } from '@/data/content/bhava';
import BhavaReferenceClient from './BhavaReferenceClient';

export function generateStaticParams() {
  return Object.keys(bhavaData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const bhava = bhavaData[slug];

  if (!bhava) {
    return { title: 'Not Found' };
  }

  return {
    title: `${bhava.name.hi} - ${bhava.name.en} | 12 Houses of Kundli in Vedic Astrology`,
    description: `Understand the meaning and significance of the ${bhava.name.en} (${bhava.sanskritName}) in Vedic Astrology. Learn about the areas of life governed by this house.`,
    alternates: {
      canonical: `https://janmjyotikundali.com/bhava/${slug}`
    }
  };
}

export default async function BhavaReferencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const bhava = bhavaData[slug];

  if (!bhava) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${bhava.name.hi} - ${bhava.name.en} in Vedic Astrology`,
    description: `Understand the meaning and significance of the ${bhava.name.en} (${bhava.sanskritName}) in Vedic Astrology.`,
    url: `https://janmjyotikundali.com/bhava/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://janmjyotikundali.com/bhava/${slug}`
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
        name: 'Bhava (Houses)',
        item: 'https://janmjyotikundali.com/bhava'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: bhava.name.en,
        item: `https://janmjyotikundali.com/bhava/${slug}`
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
      <BhavaReferenceClient bhava={bhava} />
    </>
  );
}
