'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { doshaData } from '@/data/content/dosha';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';

export const DoshaHubClient: React.FC = () => {
  const { language, t } = useLanguage();

  const title = language === 'hi' ? 'ज्योतिषीय दोष (Astrological Doshas)' : 'Astrological Doshas';
  const description = language === 'hi'
    ? 'वैदिक ज्योतिष में विभिन्न दोषों (जैसे मांगलिक दोष) का अर्थ, प्रभाव और वास्तविकता जानें।'
    : 'Learn the meaning, effects, and reality of various Doshas (like Manglik Dosha) in Vedic Astrology.';

  const breadcrumbs = [
    { label: t('nav.home', 'होम'), href: '/' },
    { label: t('nav.tools', 'ज्योतिष टूल्स'), href: '/tools' },
    { label: language === 'hi' ? 'दोष' : 'Doshas', href: '/dosha' },
  ];

  return (
    <AstroToolLayout
      title={title}
      description={description}
      breadcrumbs={breadcrumbs}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem', paddingBottom: '3rem' }}>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '3rem', lineHeight: '1.6' }}>
          {language === 'hi'
            ? 'वैदिक ज्योतिष में "दोष" का अर्थ कोई शाप नहीं है, बल्कि यह ग्रहों की एक ऐसी विशेष स्थिति है जो जीवन के कुछ क्षेत्रों में चुनौतियों या अतिरिक्त ऊर्जा का संकेत देती है। किसी भी दोष के बारे में विस्तार से जानने के लिए उस पर क्लिक करें।'
            : 'In Vedic astrology, a "Dosha" is not a curse, but rather a specific planetary placement indicating challenges or excess energy in certain areas of life. Click on any Dosha to learn about it in detail.'}
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {Object.values(doshaData).map((dosha) => (
            <Link 
              key={dosha.slug} 
              href={`/dosha/${dosha.slug}`}
              style={{
                display: 'block',
                padding: '1.5rem',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.2s, box-shadow 0.2s',
                textAlign: 'center'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.4rem' }}>
                {language === 'hi' ? dosha.name.hi : dosha.englishName}
              </h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                {language === 'hi' ? dosha.englishName : dosha.name.hi}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </AstroToolLayout>
  );
};
