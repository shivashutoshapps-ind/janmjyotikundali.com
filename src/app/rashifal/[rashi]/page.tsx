import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { calculateRashifalAction } from '@/app/actions/astrology';
import { getRashiNameFromSlug } from '@/lib/astrology/transit/transitCalculator';
import RashiDetailClient from './RashiDetailClient';

const RASHI_SLUGS = [
  'mesh', 'vrishabh', 'mithun', 'kark',
  'singh', 'kanya', 'tula', 'vrishchik',
  'dhanu', 'makar', 'kumbh', 'meen'
];

interface Props {
  params: { rashi: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { rashi } = params;
  if (!RASHI_SLUGS.includes(rashi)) return {};

  const name = getRashiNameFromSlug(rashi);
  
  return {
    title: `आज का ${name} राशिफल (Today's ${name} Rashifal) - JanmJyoti`,
    description: `आज का ${name} राशिफल जानें। ग्रहों के गोचर पर आधारित करियर, धन, प्रेम और स्वास्थ्य का विस्तृत भविष्यफल।`,
    alternates: {
      canonical: `/rashifal/${rashi}`,
    },
    openGraph: {
      title: `आज का ${name} राशिफल - JanmJyoti`,
      description: `आज का ${name} राशिफल जानें।`,
      url: `/rashifal/${rashi}`,
    }
  };
}

export async function generateStaticParams() {
  return RASHI_SLUGS.map((rashi) => ({
    rashi,
  }));
}

export default async function RashifalDetailPage({ params }: Props) {
  const { rashi } = params;
  
  if (!RASHI_SLUGS.includes(rashi)) {
    notFound();
  }

  const result = await calculateRashifalAction(rashi);
  
  if (!result) {
    return (
      <div style={{padding: '2rem', textAlign: 'center'}}>राशिफल लोड करने में समस्या आई।</div>
    );
  }

  return <RashiDetailClient rashiSlug={rashi} result={result} />;
}
