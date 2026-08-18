'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { bhavaData } from '@/data/content/bhava';
import { Card } from '@/components/Card/Card';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import styles from './BhavaHub.module.css';

export default function BhavaHubClient() {
  const { language, t } = useLanguage();
  const title = t('bhava.hubTitle', 'कुंडली के 12 भाव');
  const subtitle = t('bhava.hubSubtitle', 'वैदिक ज्योतिष में जन्म कुंडली के 12 भावों और उनके अर्थ के बारे में जानें।');

  const breadcrumbs = [
    { label: t('nav.home', 'होम'), href: '/' },
    { label: title, href: '/bhava' }
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
          {Object.values(bhavaData).map((bhava) => (
            <Link key={bhava.slug} href={`/bhava/${bhava.slug}`} className={styles.cardLink}>
              <Card interactive className={styles.card}>
                <div className={styles.houseNumberBadge}>{bhava.houseNumber}</div>
                <h2 className={`hindi-text ${styles.bhavaName}`}>{bhava.name[language]}</h2>
                <div className={styles.sanskritName}>{bhava.sanskritName}</div>
                <div className={styles.significance}>
                  <strong>{t('bhava.significance', 'महत्व')}:</strong> {bhava.significance[language]}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
