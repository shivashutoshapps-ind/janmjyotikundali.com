'use client';

import React from 'react';
import Link from 'next/link';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import { NakshatraContent } from '@/data/content/nakshatra';
import { useLanguage } from '@/lib/i18n/LanguageContext';

interface Props {
  nakshatraData: NakshatraContent;
}

export const NakshatraReferenceClient: React.FC<Props> = ({ nakshatraData }) => {
  const { language, t } = useLanguage();
  const lang = language as 'hi' | 'en';

  const title = `${nakshatraData.sanskritName[lang]} - ${t('common.nakshatra', 'नक्षत्र')}`;
  
  const breadcrumbs = [
    { label: t('nav.home', 'होम'), href: '/' },
    { label: t('nav.nakshatra', 'नक्षत्र'), href: '/nakshatra' },
    { label: nakshatraData.name[lang] }
  ];

  return (
    <AstroToolLayout
      title={title}
      description={nakshatraData.introduction[lang]}
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
              <strong style={{ display: 'block', color: 'var(--text-light)', fontSize: '0.9rem' }}>{t('common.number', 'संख्या (Number)')}</strong>
              <span>{nakshatraData.number} / 27</span>
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--text-light)', fontSize: '0.9rem' }}>{t('common.deity', 'देवता (Deity)')}</strong>
              <span>{nakshatraData.deity[lang]}</span>
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--text-light)', fontSize: '0.9rem' }}>{t('common.rulingPlanet', 'स्वामी ग्रह (Ruling Planet)')}</strong>
              <span>{nakshatraData.rulingPlanet[lang]}</span>
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--text-light)', fontSize: '0.9rem' }}>{t('common.symbol', 'प्रतीक (Symbol)')}</strong>
              <span>{nakshatraData.symbol[lang]}</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
            <div>
              <strong style={{ display: 'block', color: 'var(--text-light)', fontSize: '0.9rem' }}>{t('common.gana', 'गण (Gana)')}</strong>
              <span>{nakshatraData.gana[lang]}</span>
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--text-light)', fontSize: '0.9rem' }}>{t('common.yoni', 'योनि (Yoni)')}</strong>
              <span>{nakshatraData.yoni[lang]}</span>
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--text-light)', fontSize: '0.9rem' }}>{t('common.nadi', 'नाड़ी (Nadi)')}</strong>
              <span>{nakshatraData.nadi[lang]}</span>
            </div>
          </div>
        </div>

        {/* Characteristics */}
        <section>
          <h2 style={{ color: 'var(--text)', marginBottom: '1rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>
            {t('common.characteristics', 'सामान्य विशेषताएं (General Characteristics)')}
          </h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>{nakshatraData.characteristics[lang]}</p>
        </section>

        {/* Strengths and Challenges */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <section style={{ background: 'var(--surface)', padding: '1.5rem', borderRadius: '8px', borderTop: '4px solid #10b981' }}>
            <h3 style={{ color: '#10b981', marginBottom: '1rem' }}>{t('common.strengths', 'सकारात्मक पक्ष (Strengths)')}</h3>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8' }}>
              {nakshatraData.strengths[lang].map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </section>
          <section style={{ background: 'var(--surface)', padding: '1.5rem', borderRadius: '8px', borderTop: '4px solid #f43f5e' }}>
            <h3 style={{ color: '#f43f5e', marginBottom: '1rem' }}>{t('common.challenges', 'चुनौतियां (Challenges)')}</h3>
            <ul style={{ paddingLeft: '1.2rem', lineHeight: '1.8' }}>
              {nakshatraData.challenges[lang].map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Padas (Charans) */}
        <section>
          <h2 style={{ color: 'var(--text)', marginBottom: '1rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem', display: 'inline-block' }}>
            {t('common.padas', 'नक्षत्र के 4 चरण (Padas/Charans)')}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'var(--background)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{lang === 'hi' ? 'पहला चरण (Pada 1)' : 'Pada 1'}</h3>
              <p>{nakshatraData.padas[1][lang]}</p>
            </div>
            <div style={{ background: 'var(--background)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{lang === 'hi' ? 'दूसरा चरण (Pada 2)' : 'Pada 2'}</h3>
              <p>{nakshatraData.padas[2][lang]}</p>
            </div>
            <div style={{ background: 'var(--background)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{lang === 'hi' ? 'तीसरा चरण (Pada 3)' : 'Pada 3'}</h3>
              <p>{nakshatraData.padas[3][lang]}</p>
            </div>
            <div style={{ background: 'var(--background)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{lang === 'hi' ? 'चौथा चरण (Pada 4)' : 'Pada 4'}</h3>
              <p>{nakshatraData.padas[4][lang]}</p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <div style={{ marginTop: '1rem', padding: '1rem', background: '#fef3c7', borderRadius: '8px', color: '#92400e', fontSize: '0.9rem' }}>
          <strong>{t('common.note', 'ध्यान दें')}:</strong> {lang === 'hi' 
            ? 'वैदिक ज्योतिष में यह जानकारी पारंपरिक मान्यताओं के अनुसार है। इसे व्यक्तिगत जीवन की शत-प्रतिशत भविष्यवाणी नहीं माना जाना चाहिए।' 
            : 'According to Vedic astrology, this information is based on traditional beliefs. It should not be considered as a 100% guarantee of personal predictions.'}
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <Link href="/nakshatra" style={{ display: 'block', padding: '1rem', background: 'var(--primary)', color: 'white', textAlign: 'center', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}>
            {t('common.calculateYourNakshatra', 'अपना जन्म नक्षत्र जानें (Calculate Your Nakshatra)')}
          </Link>
          <Link href="/kundli" style={{ display: 'block', padding: '1rem', background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)', textAlign: 'center', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}>
            {lang === 'hi' ? 'अपनी संपूर्ण जन्म कुंडली बनाएं' : 'Generate Your Full Kundli'}
          </Link>
          <Link href="/matching" style={{ display: 'block', padding: '1rem', background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)', textAlign: 'center', borderRadius: '8px', fontWeight: 'bold', textDecoration: 'none' }}>
            {lang === 'hi' ? `गुण मिलान (अष्टकूट) के बारे में जानें` : `Learn about Kundli Matching (Ashtakoot)`}
          </Link>
        </div>
      </div>
    </AstroToolLayout>
  );
};
