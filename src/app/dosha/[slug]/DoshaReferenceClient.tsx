'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { DoshaContent } from '@/data/content/dosha';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';

interface Props {
  doshaData: DoshaContent;
}

export const DoshaReferenceClient: React.FC<Props> = ({ doshaData }) => {
  const { language, t } = useLanguage();

  const title = language === 'hi'
    ? `${doshaData.name.hi}`
    : `${doshaData.englishName}`;

  const breadcrumbs = [
    { label: t('nav.home', 'होम'), href: '/' },
    { label: t('nav.tools', 'ज्योतिष टूल्स'), href: '/tools' },
    { label: language === 'hi' ? 'दोष' : 'Doshas', href: '/dosha' },
    { label: title, href: `/dosha/${doshaData.slug}` }
  ];

  return (
    <AstroToolLayout
      title={title}
      description={language === 'hi' 
        ? `वैदिक ज्योतिष में ${doshaData.name.hi} का अर्थ, प्रभाव और महत्व।` 
        : `Meaning, effects, and significance of ${doshaData.englishName} in Vedic Astrology.`
      }
      breadcrumbs={breadcrumbs}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
        
        {/* Introduction */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>
            {language === 'hi' ? 'परिचय' : 'Introduction'}
          </h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
            {language === 'hi' ? doshaData.introduction.hi : doshaData.introduction.en}
          </p>
        </section>

        {/* Calculation Basis */}
        <section style={{ marginBottom: '2.5rem', background: 'var(--background)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>
            {language === 'hi' ? 'यह कैसे बनता है?' : 'How is it Formed?'}
          </h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
            {language === 'hi' ? doshaData.calculationBasis.hi : doshaData.calculationBasis.en}
          </p>
        </section>

        {/* Significance */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.4rem' }}>
            {language === 'hi' ? 'महत्व और प्रभाव' : 'Significance and Effects'}
          </h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
            {language === 'hi' ? doshaData.significance.hi : doshaData.significance.en}
          </p>
        </section>
        
        {/* Limitations (Educational Reality Check) */}
        <section style={{ marginBottom: '2.5rem', padding: '1.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
          <h2 style={{ color: '#047857', marginBottom: '1rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            💡 {language === 'hi' ? 'वास्तविकता (क्या यह बुरा है?)' : 'Reality Check (Is it bad?)'}
          </h2>
          <p style={{ lineHeight: '1.8', fontSize: '1rem', color: '#064e3b' }}>
            {language === 'hi' ? doshaData.limitations.hi : doshaData.limitations.en}
          </p>
        </section>

        {/* Educational Guidance */}
        <section style={{ marginBottom: '2.5rem', padding: '1.5rem', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '8px', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
          <h2 style={{ color: '#d97706', marginBottom: '1rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            ℹ️ {language === 'hi' ? 'ज्योतिषीय मार्गदर्शन' : 'Astrological Guidance'}
          </h2>
          <p style={{ lineHeight: '1.8', fontSize: '1rem' }}>
            {language === 'hi' ? doshaData.educationalGuidance.hi : doshaData.educationalGuidance.en}
          </p>
        </section>

        {/* Related Planets */}
        {doshaData.relatedGrahaSlugs.length > 0 && (
          <section style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>
              {language === 'hi' ? 'संबंधित ग्रह (Related Planets)' : 'Related Planets'}
            </h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {doshaData.relatedGrahaSlugs.map(grahaSlug => (
                <Link 
                  key={grahaSlug} 
                  href={`/graha/${grahaSlug}`}
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    color: 'var(--primary)',
                    fontWeight: '500'
                  }}
                >
                  {grahaSlug === 'mangal' ? (language === 'hi' ? 'मंगल ग्रह के बारे में जानें' : 'Learn about Mars') : grahaSlug}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section style={{ 
          background: 'var(--surface)', 
          padding: '2rem', 
          borderRadius: '8px', 
          border: '1px solid var(--border)',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>
            {language === 'hi' ? `क्या आपकी कुंडली में ${doshaData.name.hi} है?` : `Do you have ${doshaData.englishName} in your chart?`}
          </h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
            {language === 'hi' 
              ? 'अपनी विस्तृत जन्म कुंडली बनाएं या विवाह मिलान का उपयोग करें।' 
              : 'Create your detailed birth chart or use marriage matching to find out.'}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <Link 
              href="/kundli"
              style={{ 
                padding: '0.75rem 2rem', 
                background: 'var(--primary)', 
                color: 'white', 
                borderRadius: '4px', 
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              {t('nav.kundli', 'फ्री कुंडली')}
            </Link>
            <Link 
              href="/matching"
              style={{ 
                padding: '0.75rem 2rem', 
                background: 'var(--surface)', 
                color: 'var(--primary)',
                border: '1px solid var(--primary)',
                borderRadius: '4px', 
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              {t('nav.matching', 'कुंडली मिलान')}
            </Link>
          </div>
        </section>

      </div>
    </AstroToolLayout>
  );
};
