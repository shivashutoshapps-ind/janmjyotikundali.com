'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { dashaData } from '@/data/content/dasha';
import { Card } from '@/components/Card/Card';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import styles from './DashaHub.module.css';

export default function DashaHubClient() {
  const { language, t } = useLanguage();
  const title = t('dasha.hubTitle', 'विंशोत्तरी महादशा');
  const subtitle = t('dasha.hubSubtitle', 'वैदिक ज्योतिष में 9 ग्रहों की महादशाओं के प्रभाव और उनके उपाय जानें।');

  const breadcrumbs = [
    { label: t('nav.home', 'होम'), href: '/' },
    { label: title, href: '/dasha' }
  ];

  return (
    <main className={styles.main}>
      <div className="container">
        <Breadcrumbs items={breadcrumbs} />
        
        <header className={styles.header}>
          <h1 className={`hindi-text ${styles.title}`}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </header>

        <div className={styles.grid}>
          {Object.values(dashaData).map((dasha) => (
            <Link key={dasha.slug} href={`/dasha/${dasha.slug}`} className={styles.cardLink}>
              <Card interactive className={styles.card}>
                <h2 className={`hindi-text ${styles.dashaName}`}>{dasha.name[language]}</h2>
                <div className={styles.planetName}>{dasha.planet}</div>
                <div className={styles.duration}>
                  <strong>{t('dasha.duration', 'अवधि')}:</strong> {dasha.durationYears} {language === 'hi' ? 'वर्ष' : 'Years'}
                </div>
                <p className={styles.introText}>
                  {dasha.introduction[language].substring(0, 120)}...
                </p>
                <div className={styles.readMore}>
                  {t('dasha.readMore', 'इसके बारे में और पढ़ें')} →
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
