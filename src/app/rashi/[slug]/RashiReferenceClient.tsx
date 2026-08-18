'use client';

import React from 'react';
import Link from 'next/link';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import { RashiContent } from '@/data/content/rashi';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface Props {
  rashiData: RashiContent;
}

export const RashiReferenceClient: React.FC<Props> = ({ rashiData }) => {
  const { language, t } = useLanguage();
  const lang = language as 'hi' | 'en';

  const title = `${rashiData.sanskritName[lang]} - ${t('common.rashi', 'राशि')}`;
  
  const breadcrumbs = [
    { label: t('nav.home', 'होम'), href: '/' },
    { label: t('nav.rashi', 'चंद्र राशि'), href: '/rashi' },
    { label: rashiData.name[lang] }
  ];

  return (
    <AstroToolLayout
      title={title}
      description={rashiData.introduction[lang]}
      breadcrumbs={breadcrumbs}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Basic Info Box */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '1.5rem' }}>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1.3rem' }}>
            {t('common.keyAttributes', 'मुख्य विशेषताएँ (Key Attributes)')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div>
              <strong style={{ display: 'block', color: 'var(--text-light)', fontSize: '0.9rem' }}>{t('common.symbol', 'प्रतीक (Symbol)')}</strong>
              <span>{rashiData.symbol[lang]}</span>
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--text-light)', fontSize: '0.9rem' }}>{t('common.rulingPlanet', 'राशि स्वामी (Ruling Planet)')}</strong>
              <span>{rashiData.rulingPlanet[lang]}</span>
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--text-light)', fontSize: '0.9rem' }}>{t('common.element', 'तत्व (Element)')}</strong>
              <span>{rashiData.element[lang]}</span>
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--text-light)', fontSize: '0.9rem' }}>{t('common.nature', 'स्वभाव (Nature)')}</strong>
              <span>{rashiData.nature[lang]}</span>
            </div>
          </div>
        </div>

        {/* Characteristics */}
        <section>
          <h2 style={{ color: 'var(--text)', marginBottom: '1rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>
            {t('common.characteristics', 'सामान्य विशेषताएं (General Characteristics)')}
          </h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>{rashiData.characteristics[lang]}</p>
        </section>

        {/* Strengths and Challenges */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <section style={{ background: 'var(--surface)', padding: '1.5rem', borderRadius: '8px', borderTop: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', marginBottom: '1rem' }}>{t('common.strengths', 'सकारात्मक पक्ष (Strengths)')}</h3>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8' }}>
              {rashiData.strengths[lang].map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </section>
          <section style={{ background: 'var(--surface)', padding: '1.5rem', borderRadius: '8px', borderTop: '4px solid #f43f5e' }}>
            <h3 style={{ color: '#f43f5e', marginBottom: '1rem' }}>{t('common.challenges', 'चुनौतियां (Challenges)')}</h3>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8' }}>
              {rashiData.challenges[lang].map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Career & Relationships */}
        <section>
          <h2 style={{ color: 'var(--text)', marginBottom: '1rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>
            {t('common.career', 'करियर (Career)')}
          </h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>{rashiData.career[lang]}</p>
        </section>

        <section>
          <h2 style={{ color: 'var(--text)', marginBottom: '1rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>
            {t('common.relationships', 'प्रेम और संबंध (Relationships)')}
          </h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>{rashiData.relationships[lang]}</p>
        </section>

        {/* Disclaimer */}
        <div style={{ marginTop: '1rem', padding: '1rem', background: '#fef3c7', borderRadius: '8px', color: '#92400e', fontSize: '0.9rem' }}>
          <strong>{t('common.note', 'ध्यान दें')}:</strong> {lang === 'hi' 
            ? 'वैदिक ज्योतिष में यह जानकारी पारंपरिक मान्यताओं के अनुसार है। इसे व्यक्तिगत जीवन की शत-प्रतिशत भविष्यवाणी नहीं माना जाना चाहिए।' 
            : 'According to Vedic astrology, this information is based on traditional beliefs. It should not be considered as a 100% guarantee of personal predictions.'}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <Link href="/rashi" style={{ display: 'block', padding: '1rem', background: 'var(--primary)', color: 'white', textAlign: 'center', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}>
            {t('common.calculateYourRashi', 'अपनी चंद्र राशि जानें (Calculate Your Moon Sign)')}
          </Link>
          <Link href={`/rashifal/${rashiData.slug}`} style={{ display: 'block', padding: '1rem', background: 'var(--surface)', color: 'var(--primary)', border: '1px solid var(--primary)', textAlign: 'center', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}>
            {lang === 'hi' ? `आज का ${rashiData.name.hi} राशिफल देखें` : `Check Today's ${rashiData.name.en} Rashifal`}
          </Link>
          <Link href={`/lagna/${rashiData.slug}`} style={{ display: 'block', padding: '1rem', background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)', textAlign: 'center', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}>
            {lang === 'hi' ? `${rashiData.name.hi} लग्न के बारे में जानें` : `Learn about ${rashiData.name.en} Ascendant (Lagna)`}
          </Link>
        </div>
      </div>
    </AstroToolLayout>
  );
};
