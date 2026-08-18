'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { DashaContent } from '@/data/content/dasha';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { Card } from '@/components/Card/Card';
import styles from './DashaReference.module.css';

interface Props {
  dasha: DashaContent;
}

export default function DashaReferenceClient({ dasha }: Props) {
  const { language, t } = useLanguage();
  
  const breadcrumbs = [
    { label: t('nav.home', 'होम'), href: '/' },
    { label: t('dasha.hubTitle', 'विंशोत्तरी महादशा'), href: '/dasha' },
    { label: dasha.name[language], href: `/dasha/${dasha.slug}` }
  ];

  return (
    <main className={styles.main}>
      <div className="container">
        <Breadcrumbs items={breadcrumbs} />

        <div className={styles.contentLayout}>
          <article className={styles.article}>
            <header className={styles.header}>
              <div>
                <h1 className={`hindi-text ${styles.title}`}>{dasha.name[language]}</h1>
                <div className={styles.planetName}>
                  <Link href={`/graha/${dasha.slug}`} className={styles.grahaLink}>
                    {dasha.planet}
                  </Link>
                  {' '}• {t('dasha.duration', 'अवधि')}: {dasha.durationYears} {language === 'hi' ? 'वर्ष' : 'Years'}
                </div>
              </div>
            </header>

            <section className={styles.section}>
              <p className={`${styles.text} ${styles.introText}`}>{dasha.introduction[language]}</p>
            </section>

            <section className={styles.section}>
              <h2 className={`hindi-text ${styles.sectionTitle}`}>{t('dasha.generalEffects', 'सामान्य प्रभाव')}</h2>
              <p className={styles.text}>{dasha.generalEffects[language]}</p>
            </section>

            <section className={styles.section}>
              <h2 className={`hindi-text ${styles.sectionTitle}`}>{t('dasha.careerFinance', 'करियर और धन')}</h2>
              <p className={styles.text}>{dasha.careerFinance[language]}</p>
            </section>

            <section className={styles.section}>
              <h2 className={`hindi-text ${styles.sectionTitle}`}>{t('dasha.relationshipsFamily', 'रिश्ते और परिवार')}</h2>
              <p className={styles.text}>{dasha.relationshipsFamily[language]}</p>
            </section>

            <section className={styles.section}>
              <h2 className={`hindi-text ${styles.sectionTitle}`}>{t('dasha.psychologicalChanges', 'मानसिक परिवर्तन')}</h2>
              <p className={styles.text}>{dasha.psychologicalChanges[language]}</p>
            </section>

            <section className={styles.section}>
              <h2 className={`hindi-text ${styles.sectionTitle}`}>{t('dasha.remedies', 'उपाय')}</h2>
              <Card className={styles.infoCard}>
                <p className={styles.text}>{dasha.remedies[language]}</p>
              </Card>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
