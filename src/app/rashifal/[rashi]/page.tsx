import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import { calculateRashifalAction } from '@/app/actions/astrology';
import { getRashiNameFromSlug } from '@/lib/astrology/transit/transitCalculator';
import styles from '../Rashifal.module.css';

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
      <AstroToolLayout title="त्रुटि (Error)" description="राशिफल लोड करने में समस्या आई।" breadcrumbs={[{label: 'होम', href:'/'}, {label: 'राशिफल', href: '/rashifal'}]}>
        <p>राशिफल लोड करने में समस्या आई।</p>
      </AstroToolLayout>
    );
  }

  const { interpretation, signals, date, moonSignDevanagari } = result;

  return (
    <AstroToolLayout 
      title={`आज का ${moonSignDevanagari} राशिफल`}
      description={`दिनांक: ${date} - ग्रहों के गोचर पर आधारित आपका दैनिक राशिफल।`}
      breadcrumbs={[
        { label: 'होम', href: '/' },
        { label: 'राशिफल', href: '/rashifal' },
        { label: moonSignDevanagari }
      ]}
    >
      <div className={styles.summaryBox}>
        <p><strong>आज का संकेत:</strong> {interpretation.summary}</p>
      </div>

      <div className={styles.categoryGrid}>
        <div className={styles.categoryCard}>
          <h3>💼 करियर एवं कार्य (Career & Work)</h3>
          <p>{interpretation.career}</p>
        </div>
        
        <div className={styles.categoryCard}>
          <h3>💰 धन एवं वित्त (Finance)</h3>
          <p>{interpretation.finance}</p>
        </div>
        
        <div className={styles.categoryCard}>
          <h3>❤️ प्रेम एवं संबंध (Relationships)</h3>
          <p>{interpretation.relationships}</p>
        </div>
        
        <div className={styles.categoryCard}>
          <h3>⚕️ स्वास्थ्य (Health)</h3>
          <p>{interpretation.health}</p>
        </div>
      </div>

      <div className={styles.categoryCard} style={{ marginBottom: '2rem', backgroundColor: 'var(--background)' }}>
        <h3>💡 आज की सलाह (Advice)</h3>
        <p>{interpretation.advice}</p>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>ग्रह गोचर स्थिति (Planetary Transit)</h3>
        <div style={{ overflowX: 'auto' }}>
          <table className={styles.transitTable}>
            <thead>
              <tr>
                <th>ग्रह (Planet)</th>
                <th>गोचर राशि (Transit Sign)</th>
                <th>भाव (House from Moon)</th>
              </tr>
            </thead>
            <tbody>
              {signals.map((s, i) => (
                <tr key={i}>
                  <td>{s.planet}</td>
                  <td>{s.transitRashi}</td>
                  <td>{s.fromMoonHouse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.disclaimer}>
        <strong>अस्वीकरण:</strong> यह राशिफल ग्रहों के गोचर (Planetary Transits) पर आधारित एक सामान्य फल है। इसे पूर्ण भविष्यवाणी न मानें। व्यक्तिगत सटीक फल के लिए अपनी <Link href="/kundli" style={{color: 'var(--primary)', textDecoration: 'underline'}}>जन्म कुंडली</Link> का विश्लेषण करवाएं।
      </div>
    </AstroToolLayout>
  );
}
