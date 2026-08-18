'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { yogaData } from '@/data/content/yoga';
import { Card } from '@/components/Card/Card';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import styles from './YogaHub.module.css';

export default function YogaHubClient() {
  const { language, t } = useLanguage();
  const title = t('yoga.hubTitle', 'वैदिक ज्योतिष योग');
  const subtitle = t('yoga.hubSubtitle', 'कुंडली में प्रमुख ग्रह संयोजनों (योगों) के निर्माण, अर्थ और महत्वपूर्ण सीमाओं (Caveats) को समझें।');

  const breadcrumbs = [
    { label: t('nav.home', 'होम'), href: '/' },
    { label: title, href: '/yoga' }
  ];

  return (
    <main className={styles.main}>
      <div className="container">
        <Breadcrumbs items={breadcrumbs} />
        
        <header className={styles.header}>
          <h1 className={`hindi-text ${styles.title}`}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </header>

        <div className={styles.disclaimer}>
          <strong>{language === 'hi' ? 'महत्वपूर्ण सूचना:' : 'Important Note:'}</strong>
          {' '}
          {language === 'hi' 
            ? 'योगों के प्रभाव हमेशा कुंडली के अन्य कारकों (जैसे दशा, नीचता, दृष्टि) पर निर्भर करते हैं। कोई भी योग 100% गारंटी नहीं देता है।' 
            : 'The effects of yogas always depend on other factors in the chart (like Dasha, debilitation, aspects). No single yoga guarantees a 100% specific outcome.'}
        </div>

        <div className={styles.grid}>
          {Object.values(yogaData).map((yoga) => (
            <Link key={yoga.slug} href={`/yoga/${yoga.slug}`} className={styles.cardLink}>
              <Card interactive className={styles.card}>
                <h2 className={`hindi-text ${styles.yogaName}`}>{yoga.name[language]}</h2>
                <div className={styles.sanskritName}>{yoga.sanskritName}</div>
                <div className={styles.categoryBadge}>
                  {yoga.category === 'panchamahapurusha' 
                    ? (language === 'hi' ? 'पंचमहापुरुष योग' : 'Panchamahapurusha')
                    : yoga.category === 'wealth'
                    ? (language === 'hi' ? 'धन योग' : 'Wealth Yoga')
                    : yoga.category === 'intellect'
                    ? (language === 'hi' ? 'बुद्धि योग' : 'Intellect Yoga')
                    : (language === 'hi' ? 'मिश्रित योग' : 'Mixed Yoga')}
                </div>
                <p className={styles.introText}>
                  {yoga.introduction[language].substring(0, 110)}...
                </p>
                <div className={styles.readMore}>
                  {t('yoga.readMore', 'इसके बारे में और पढ़ें')} →
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
