'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { YogaContent } from '@/data/content/yoga';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { Card } from '@/components/Card/Card';
import styles from './YogaReference.module.css';

interface Props {
  yoga: YogaContent;
}

export default function YogaReferenceClient({ yoga }: Props) {
  const { language, t } = useLanguage();
  
  const breadcrumbs = [
    { label: t('nav.home', 'होम'), href: '/' },
    { label: t('yoga.hubTitle', 'वैदिक ज्योतिष योग'), href: '/yoga' },
    { label: yoga.name[language], href: `/yoga/${yoga.slug}` }
  ];

  return (
    <main className={styles.main}>
      <div className="container">
        <Breadcrumbs items={breadcrumbs} />

        <div className={styles.contentLayout}>
          <article className={styles.article}>
            <header className={styles.header}>
              <h1 className={`hindi-text ${styles.title}`}>{yoga.name[language]}</h1>
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
            </header>

            <section className={styles.section}>
              <p className={`${styles.text} ${styles.introText}`}>{yoga.introduction[language]}</p>
            </section>

            <section className={styles.section}>
              <h2 className={`hindi-text ${styles.sectionTitle}`}>{t('yoga.formation', 'निर्माण')}</h2>
              <p className={styles.text}>{yoga.formation[language]}</p>
            </section>

            <section className={styles.section}>
              <h2 className={`hindi-text ${styles.sectionTitle}`}>{t('yoga.significance', 'महत्व और प्रभाव')}</h2>
              <p className={styles.text}>{yoga.significance[language]}</p>
            </section>

            <section className={styles.section}>
              <h2 className={`hindi-text ${styles.sectionTitle}`}>{t('yoga.traditionalInterpretation', 'पारंपरिक दृष्टिकोण')}</h2>
              <p className={styles.text}>{yoga.traditionalInterpretation[language]}</p>
            </section>

            <section className={styles.section}>
              <h2 className={`hindi-text ${styles.sectionTitle}`}>{t('yoga.limitations', 'महत्वपूर्ण सीमाएं (Caveats)')}</h2>
              <Card className={styles.warningCard}>
                <p className={styles.text}>{yoga.limitations[language]}</p>
              </Card>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
