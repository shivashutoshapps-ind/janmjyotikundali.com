import { Metadata } from 'next';
import Link from 'next/link';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import styles from './Rashifal.module.css';

export const metadata: Metadata = {
  title: 'आज का राशिफल (Daily Rashifal) - JanmJyoti',
  description: 'आज का राशिफल जानें। चंद्र राशि पर आधारित मेष, वृषभ, मिथुन, कर्क, सिंह, कन्या, तुला, वृश्चिक, धनु, मकर, कुंभ, मीन राशिफल।',
  alternates: {
    canonical: '/rashifal',
  },
  openGraph: {
    title: 'आज का राशिफल - JanmJyoti',
    description: 'सभी 12 राशियों का आज का सटीक राशिफल जानें।',
    url: '/rashifal',
  }
};

const RASHIS = [
  { slug: 'mesh', name: 'मेष', en: 'Aries' },
  { slug: 'vrishabh', name: 'वृषभ', en: 'Taurus' },
  { slug: 'mithun', name: 'मिथुन', en: 'Gemini' },
  { slug: 'kark', name: 'कर्क', en: 'Cancer' },
  { slug: 'singh', name: 'सिंह', en: 'Leo' },
  { slug: 'kanya', name: 'कन्या', en: 'Virgo' },
  { slug: 'tula', name: 'तुला', en: 'Libra' },
  { slug: 'vrishchik', name: 'वृश्चिक', en: 'Scorpio' },
  { slug: 'dhanu', name: 'धनु', en: 'Sagittarius' },
  { slug: 'makar', name: 'मकर', en: 'Capricorn' },
  { slug: 'kumbh', name: 'कुंभ', en: 'Aquarius' },
  { slug: 'meen', name: 'मीन', en: 'Pisces' },
];

export default function RashifalDashboardPage() {
  // Use today's date in IST for display
  const utcNow = new Date();
  const istTime = new Date(utcNow.getTime() + (5.5 * 3600000));
  const dateStr = `${istTime.getUTCDate()} / ${istTime.getUTCMonth() + 1} / ${istTime.getUTCFullYear()}`;

  return (
    <AstroToolLayout 
      title="आज का राशिफल"
      description={`दिनांक: ${dateStr} - अपनी चंद्र राशि चुनें और ग्रहों के गोचर पर आधारित आज का विस्तृत फल जानें।`}
      breadcrumbs={[
        { label: 'होम', href: '/' },
        { label: 'राशिफल' }
      ]}
    >
      <div className={styles.grid}>
        {RASHIS.map((rashi) => (
          <Link key={rashi.slug} href={`/rashifal/${rashi.slug}`} className={styles.card}>
            <div className={styles.iconPlaceholder}>
              {/* Fallback to first letter if no SVG icon */}
              {rashi.name.charAt(0)}
            </div>
            <h3 className={styles.cardTitle}>{rashi.name}</h3>
            <p className={styles.cardSubtitle}>{rashi.en}</p>
          </Link>
        ))}
      </div>

      <div className={styles.disclaimer}>
        <strong>अस्वीकरण:</strong> यह राशिफल ग्रहों के गोचर (Planetary Transits) पर आधारित एक सामान्य फल है। इसे पूर्ण भविष्यवाणी न मानें। व्यक्तिगत सटीक फल के लिए अपनी <Link href="/kundli" style={{color: 'var(--primary)', textDecoration: 'underline'}}>जन्म कुंडली</Link> का विश्लेषण करवाएं।
      </div>
    </AstroToolLayout>
  );
}
