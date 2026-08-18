'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { BhavaContent } from '@/data/content/bhava';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { Card } from '@/components/Card/Card';
import styles from './BhavaReference.module.css';

interface Props {
  bhava: BhavaContent;
}

export default function BhavaReferenceClient({ bhava }: Props) {
  const { language, t } = useLanguage();
  
  const breadcrumbs = [
    { label: t('nav.home', 'होम'), href: '/' },
    { label: t('bhava.hubTitle', 'कुंडली के 12 भाव'), href: '/bhava' },
    { label: bhava.name[language], href: `/bhava/${bhava.slug}` }
  ];

  return (
    <main className={styles.main}>
      <div className="container">
        <Breadcrumbs items={breadcrumbs} />

        <div className={styles.contentLayout}>
          <article className={styles.article}>
            <header className={styles.header}>
              <div className={styles.houseBadge}>
                {bhava.houseNumber}
              </div>
              <div>
                <h1 className={`hindi-text ${styles.title}`}>{bhava.name[language]}</h1>
                <div className={styles.sanskritName}>{bhava.sanskritName}</div>
              </div>
            </header>

            <section className={styles.section}>
              <h2 className={`hindi-text ${styles.sectionTitle}`}>{t('bhava.significance', 'महत्व')}</h2>
              <p className={styles.text}>{bhava.significance[language]}</p>
            </section>

            <section className={styles.section}>
              <h2 className={`hindi-text ${styles.sectionTitle}`}>{t('common.details', 'विस्तृत जानकारी')}</h2>
              <p className={styles.text}>{bhava.description[language]}</p>
            </section>

            <section className={styles.section}>
              <h2 className={`hindi-text ${styles.sectionTitle}`}>{t('bhava.bodyParts', 'शरीर के अंग')}</h2>
              <Card className={styles.infoCard}>
                <p className={styles.text}>{bhava.bodyParts[language]}</p>
              </Card>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
