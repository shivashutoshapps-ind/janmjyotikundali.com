import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { yogaData } from '@/data/content/yoga';
import YogaReferenceClient from './YogaReferenceClient';

export function generateStaticParams() {
  return Object.keys(yogaData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const yoga = yogaData[slug];

  if (!yoga) {
    return { title: 'Not Found' };
  }

  return {
    title: `${yoga.name.hi} - ${yoga.name.en} | Kundli Yogas`,
    description: `Understand the formation, significance, and real effects of ${yoga.name.en} in Vedic Astrology.`,
    alternates: {
      canonical: `https://janmjyotikundali.com/yoga/${slug}`
    }
  };
}

export default async function YogaReferencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const yoga = yogaData[slug];

  if (!yoga) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${yoga.name.hi} - ${yoga.name.en} Formation and Significance`,
    description: `Understand the effects and formation of the ${yoga.name.en} in Vedic Astrology.`,
    url: `https://janmjyotikundali.com/yoga/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://janmjyotikundali.com/yoga/${slug}`
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
        name: 'Vedic Yogas',
        item: 'https://janmjyotikundali.com/yoga'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: yoga.name.en,
        item: `https://janmjyotikundali.com/yoga/${slug}`
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
      <YogaReferenceClient yoga={yoga} />
    </>
  );
}
