'use client';

import Link from 'next/link';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from './Rashifal.module.css';

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

export default function RashifalDashboardClient() {
  const { t } = useLanguage();
  // Use today's date in IST for display
  const utcNow = new Date();
  const istTime = new Date(utcNow.getTime() + (5.5 * 3600000));
  const dateStr = `${istTime.getUTCDate()} / ${istTime.getUTCMonth() + 1} / ${istTime.getUTCFullYear()}`;

  return (
    <AstroToolLayout 
      title={t('home.dailyRashifal', 'आज का राशिफल')}
      description={t('rashifal.subtitle', 'अपनी राशि चुनें और दैनिक भविष्यफल पढ़ें')}
      breadcrumbs={[
        { label: t('nav.home', 'होम'), href: '/' },
        { label: t('nav.rashifal', 'राशिफल') }
      ]}
    >
      <div className={styles.grid}>
        {RASHIS.map((rashi) => (
          <div key={rashi.slug} className={styles.card} style={{ display: 'flex', flexDirection: 'column' }}>
            <Link href={`/rashifal/${rashi.slug}`} style={{ textDecoration: 'none', flexGrow: 1 }}>
              <div className={styles.iconPlaceholder}>
                {/* Fallback to first letter if no SVG icon */}
                {rashi.name.charAt(0)}
              </div>
              <h3 className={styles.cardTitle}>{rashi.name}</h3>
              <p className={styles.cardSubtitle}>{rashi.en}</p>
            </Link>
            <Link href={`/rashi/${rashi.slug}`} style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--primary)', textDecoration: 'underline', textAlign: 'center' }}>
              {t('common.readAboutRashi', `${rashi.name} राशि के बारे में जानें`)}
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.disclaimer}>
        <strong>{t('footer.disclaimer', 'अस्वीकरण')}:</strong> {t('rashifal.disclaimer', 'यह राशिफल ग्रहों के गोचर पर आधारित एक सामान्य फल है। इसे पूर्ण भविष्यवाणी न मानें। व्यक्तिगत सटीक फल के लिए अपनी')} <Link href="/kundli" style={{color: 'var(--primary)', textDecoration: 'underline'}}>{t('nav.kundli', 'जन्म कुंडली')}</Link> {t('common.details', 'का विश्लेषण करवाएं।')}
      </div>
    </AstroToolLayout>
  );
}
