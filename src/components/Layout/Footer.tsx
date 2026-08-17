'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brandSection}>
          <h2 className={`hindi-text ${styles.brandName}`}>जन्मज्योति</h2>
          <p className={styles.brandTagline}>{t('footer.tagline', 'सरल, सत्य और सटीक भारतीय ज्योतिष')}</p>
        </div>
        
        <div className={styles.linksSection}>
          <div className={styles.linkGroup}>
            <h3 className={styles.linkTitle}>{t('footer.mainLinks', 'मुख्य लिंक्स')}</h3>
            <Link href="/rashifal">{t('home.dailyRashifal', 'आज का राशिफल')}</Link>
            <Link href="/kundli">{t('nav.kundli', 'फ्री जन्मकुंडली')}</Link>
            <Link href="/panchang">{t('home.panchangToday', 'आज का पंचांग')}</Link>
          </div>
          
          <div className={styles.linkGroup}>
            <h3 className={styles.linkTitle}>{t('footer.info', 'जानकारी')}</h3>
            <Link href="/about">{t('footer.about', 'हमारे बारे में')}</Link>
            <Link href="/privacy">{t('footer.privacy', 'प्राइवेसी पॉलिसी')}</Link>
            <Link href="/terms">{t('footer.terms', 'नियम व शर्तें')}</Link>
            <Link href="/disclaimer">{t('footer.disclaimer', 'अस्वीकरण')}</Link>
            <Link href="/contact">{t('footer.contact', 'संपर्क करें')}</Link>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} JanmJyoti. {t('footer.rights', 'All rights reserved.')}</p>
          <p className={styles.disclaimer}>
            {t('footer.disclaimerText', 'डिस्क्लेमर: ज्योतिष एक मार्गदर्शन है। हम किसी परिणाम की गारंटी नहीं देते।')}
          </p>
        </div>
      </div>
    </footer>
  );
};
