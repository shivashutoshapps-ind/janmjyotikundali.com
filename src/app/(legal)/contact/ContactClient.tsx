'use client';
import styles from '../legal.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ContactClient() {
  const { t } = useLanguage();
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('legal.contactTitle', 'संपर्क करें (Contact Us)')}</h1>
      </div>
      <div className={styles.content}>
        <p>
          {t('legal.contactP1', 'यदि आपके पास कोई प्रश्न या सुझाव है, तो कृपया हमसे संपर्क करें:')}
        </p>
        <p>
          <strong>{t('legal.email', 'ईमेल:')}</strong> shivashutosh.apps@gmail.com
        </p>
      </div>
    </main>
  );
}
