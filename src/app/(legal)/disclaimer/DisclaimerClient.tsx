'use client';
import styles from '../legal.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function DisclaimerClient() {
  const { t } = useLanguage();
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('legal.disclaimerTitle', 'अस्वीकरण (Disclaimer)')}</h1>
      </div>
      <div className={styles.content}>
        <p>
          {t('rashifal.disclaimer', 'यह एक सामान्य राशिफल/पंचांग है। इसे पूर्ण भविष्यवाणी न मानें। व्यक्तिगत सटीक फल के लिए अपनी जन्म कुंडली का विश्लेषण करवाएं।')}
        </p>
      </div>
    </main>
  );
}
