'use client';
import styles from '../legal.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function TermsClient() {
  const { t } = useLanguage();
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('legal.termsTitle', 'नियम व शर्तें (Terms & Conditions)')}</h1>
      </div>
      <div className={styles.content}>
        <p>
          {t('footer.disclaimerText', 'डिस्क्लेमर: ज्योतिष एक मार्गदर्शन है। हम किसी परिणाम की गारंटी नहीं देते।')}
        </p>
      </div>
    </main>
  );
}
