'use client';
import styles from '../legal.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function PrivacyClient() {
  const { t } = useLanguage();
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t('legal.privacyTitle', 'प्राइवेसी पॉलिसी (Privacy Policy)')}</h1>
      </div>
      <div className={styles.content}>
        <p>
          {t('legal.privacyP1', 'हम आपकी निजता का सम्मान करते हैं। जन्मज्योति पर बनाई गई कोई भी कुंडली या मिलान डेटा हमारे सर्वर पर सुरक्षित या सहेजा नहीं जाता है। सभी गणनाएं सुरक्षित रूप से होती हैं और सत्र समाप्त होते ही मिटा दी जाती हैं।')}
        </p>
      </div>
    </main>
  );
}
