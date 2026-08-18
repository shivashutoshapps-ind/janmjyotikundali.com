'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LagnaContent } from '@/data/content/lagna';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';

interface Props {
  lagnaData: LagnaContent;
}

export const LagnaReferenceClient: React.FC<Props> = ({ lagnaData }) => {
  const { language, t } = useLanguage();

  const title = language === 'hi'
    ? `${lagnaData.name.hi} लग्न`
    : `${lagnaData.englishName} Ascendant`;

  const breadcrumbs = [
    { label: t('nav.home', 'होम'), href: '/' },
    { label: t('nav.lagna', 'लग्न'), href: '/lagna' },
    { label: title, href: `/lagna/${lagnaData.slug}` }
  ];

  return (
    <AstroToolLayout
      title={title}
      description={language === 'hi' 
        ? `वैदिक ज्योतिष में ${lagnaData.name.hi} लग्न (Ascendant) का महत्व और विशेषताएं` 
        : `Significance and characteristics of ${lagnaData.englishName} Ascendant in Vedic Astrology`
      }
      breadcrumbs={breadcrumbs}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
        
        {/* Quick Facts Card */}
        <div style={{ 
          background: 'var(--surface)', 
          border: '1px solid var(--border)', 
          borderRadius: '8px', 
          padding: '1.5rem',
          marginBottom: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          <div>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              {language === 'hi' ? 'लग्न स्वामी (Ruling Planet)' : 'Ruling Planet'}
            </p>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              {language === 'hi' ? lagnaData.rulingPlanet.hi : lagnaData.rulingPlanet.en}
            </p>
          </div>
          <div>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              {language === 'hi' ? 'तत्व (Element)' : 'Element'}
            </p>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              {language === 'hi' ? lagnaData.element.hi : lagnaData.element.en}
            </p>
          </div>
          <div>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              {language === 'hi' ? 'स्वभाव (Modality)' : 'Modality'}
            </p>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              {language === 'hi' ? lagnaData.modality.hi : lagnaData.modality.en}
            </p>
          </div>
        </div>

        {/* Introduction */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>
            {language === 'hi' ? `${lagnaData.name.hi} लग्न का महत्व` : `Significance of ${lagnaData.englishName} Ascendant`}
          </h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
            {language === 'hi' ? lagnaData.introduction.hi : lagnaData.introduction.en}
          </p>
        </section>

        {/* Characteristics */}
        <section style={{ marginBottom: '2.5rem', background: 'var(--background)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>
            {language === 'hi' ? 'व्यक्तित्व और विशेषताएं' : 'Personality and Characteristics'}
          </h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
            {language === 'hi' ? lagnaData.characteristics.hi : lagnaData.characteristics.en}
          </p>
        </section>

        {/* Physical Traits */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.4rem' }}>
            {language === 'hi' ? 'शारीरिक बनावट (Physical Traits)' : 'Physical Traits'}
          </h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
            {language === 'hi' ? lagnaData.physicalTraits.hi : lagnaData.physicalTraits.en}
          </p>
        </section>

        {/* Strengths and Challenges Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          
          {/* Strengths */}
          <div style={{ background: 'rgba(22, 163, 74, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid #16a34a' }}>
            <h3 style={{ color: '#16a34a', marginBottom: '1rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>+</span>
              {language === 'hi' ? 'सकारात्मक गुण' : 'Strengths'}
            </h3>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              {(language === 'hi' ? lagnaData.strengths.hi : lagnaData.strengths.en).map((strength, index) => (
                <li key={index} style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#16a34a' }}>✓</span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div style={{ background: 'rgba(220, 38, 38, 0.05)', padding: '1.5rem', borderRadius: '8px', border: '1px solid #dc2626' }}>
            <h3 style={{ color: '#dc2626', marginBottom: '1rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>-</span>
              {language === 'hi' ? 'चुनौतियां' : 'Challenges'}
            </h3>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              {(language === 'hi' ? lagnaData.challenges.hi : lagnaData.challenges.en).map((challenge, index) => (
                <li key={index} style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#dc2626' }}>•</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* CTA & Cross-Links */}
        <section style={{ 
          background: 'var(--surface)', 
          padding: '2rem', 
          borderRadius: '8px', 
          border: '1px solid var(--border)',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>
            {language === 'hi' ? 'अपनी विस्तृत कुंडली बनाएं' : 'Create Your Detailed Kundli'}
          </h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
            {language === 'hi' 
              ? 'जानें कि आपके लग्न में अन्य ग्रहों की स्थिति आपके जीवन को कैसे प्रभावित करती है।' 
              : 'Discover how the placement of other planets in your Ascendant affects your life.'}
          </p>
          <Link 
            href="/kundli"
            style={{ 
              display: 'inline-block',
              padding: '0.75rem 2rem', 
              background: 'var(--primary)', 
              color: 'white', 
              borderRadius: '4px', 
              textDecoration: 'none',
              fontWeight: 'bold',
              marginBottom: '1.5rem'
            }}
          >
            {t('nav.kundli', 'फ्री कुंडली बनाएं')}
          </Link>
          
          <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link href={`/rashi/${lagnaData.slug}`} style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
              {language === 'hi' 
                ? `चूंकि आपकी कुंडली की शुरुआत ${lagnaData.name.hi} राशि से होती है, ${lagnaData.name.hi} राशि (चंद्र राशि) के सामान्य गुणों के बारे में भी पढ़ें।` 
                : `Read about the general traits of ${lagnaData.englishName} Rashi (Moon Sign).`}
            </Link>
            <Link href="/lagna" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
              {language === 'hi' ? 'लग्न कैलकुलेटर (Lagna Calculator)' : 'Lagna Calculator'}
            </Link>
          </div>
        </section>

      </div>
    </AstroToolLayout>
  );
};
