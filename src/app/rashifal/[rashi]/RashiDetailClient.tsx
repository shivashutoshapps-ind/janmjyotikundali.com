'use client';

import Link from 'next/link';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from '../Rashifal.module.css';

const RASHI_SLUGS = [
  'mesh', 'vrishabh', 'mithun', 'kark',
  'singh', 'kanya', 'tula', 'vrishchik',
  'dhanu', 'makar', 'kumbh', 'meen'
];

interface Props {
  rashiSlug: string;
  result: any;
}

export default function RashiDetailClient({ rashiSlug, result }: Props) {
  const { t } = useLanguage();
  const { interpretation, signals, date, moonSignDevanagari } = result;

  return (
    <AstroToolLayout 
      title={`${t('home.dailyRashifal', 'आज का राशिफल')} - ${moonSignDevanagari}`}
      description={t('rashifal.subtitle', 'ग्रहों के गोचर पर आधारित आपका दैनिक राशिफल।')}
      breadcrumbs={[
        { label: t('nav.home', 'होम'), href: '/' },
        { label: t('nav.rashifal', 'राशिफल'), href: '/rashifal' },
        { label: moonSignDevanagari }
      ]}
    >
      <div className={styles.summaryBox}>
        <p><strong>आज का संकेत:</strong> {interpretation.summary}</p>
      </div>

      <div className={styles.categoryGrid}>
        <div className={styles.categoryCard}>
          <h3>💼 {t('rashifal.career', 'करियर')}</h3>
          <p>{interpretation.career}</p>
        </div>
        
        <div className={styles.categoryCard}>
          <h3>💰 {t('rashifal.finance', 'आर्थिक')}</h3>
          <p>{interpretation.finance}</p>
        </div>
        
        <div className={styles.categoryCard}>
          <h3>❤️ {t('rashifal.relationships', 'प्रेम व संबंध')}</h3>
          <p>{interpretation.relationships}</p>
        </div>
        
        <div className={styles.categoryCard}>
          <h3>⚕️ {t('rashifal.health', 'स्वास्थ्य')}</h3>
          <p>{interpretation.health}</p>
        </div>
      </div>

      <div className={styles.categoryCard} style={{ marginBottom: '2rem', backgroundColor: 'var(--background)' }}>
        <h3>💡 आज की सलाह (Advice)</h3>
        <p>{interpretation.advice}</p>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link href={`/rashi/${rashiSlug}`} style={{ padding: '0.75rem 1.5rem', background: 'var(--primary)', color: 'white', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
          {t('common.readAboutRashi', `${moonSignDevanagari} राशि के बारे में विस्तृत जानकारी पढ़ें`)}
        </Link>
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
              {signals.map((s: any, i: number) => (
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
        <strong>{t('footer.disclaimer', 'अस्वीकरण')}:</strong> {t('rashifal.disclaimer', 'यह राशिफल ग्रहों के गोचर पर आधारित एक सामान्य फल है। व्यक्तिगत सटीक फल के लिए अपनी')} <Link href="/kundli" style={{color: 'var(--primary)', textDecoration: 'underline'}}>{t('nav.kundli', 'जन्म कुंडली')}</Link> {t('common.details', 'देखें।')}
      </div>
    </AstroToolLayout>
  );
}
