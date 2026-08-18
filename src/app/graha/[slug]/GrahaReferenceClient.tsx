'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { GrahaContent } from '@/data/content/graha';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';

interface Props {
  grahaData: GrahaContent;
}

export const GrahaReferenceClient: React.FC<Props> = ({ grahaData }) => {
  const { language, t } = useLanguage();

  const title = language === 'hi'
    ? `${grahaData.name.hi} ग्रह`
    : `${grahaData.englishName} (Graha)`;

  const breadcrumbs = [
    { label: t('nav.home', 'होम'), href: '/' },
    { label: t('nav.tools', 'ज्योतिष टूल्स'), href: '/tools' },
    { label: language === 'hi' ? 'ग्रह' : 'Planets', href: '/graha' },
    { label: title, href: `/graha/${grahaData.slug}` }
  ];

  return (
    <AstroToolLayout
      title={title}
      description={language === 'hi' 
        ? `वैदिक ज्योतिष में ${grahaData.name.hi} ग्रह का महत्व, प्रभाव और विशेषताएं` 
        : `Significance, effects, and characteristics of ${grahaData.englishName} in Vedic Astrology`
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
              {language === 'hi' ? 'खगोलीय प्रकार (Type)' : 'Astronomical Type'}
            </p>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              {language === 'hi' ? grahaData.astronomicalType.hi : grahaData.astronomicalType.en}
            </p>
          </div>
          <div>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              {language === 'hi' ? 'वैदिक भूमिका (Role)' : 'Vedic Role'}
            </p>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              {language === 'hi' ? grahaData.role.hi : grahaData.role.en}
            </p>
          </div>
          <div>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              {language === 'hi' ? 'उच्च राशि (Exaltation)' : 'Exaltation'}
            </p>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              {language === 'hi' ? grahaData.exaltation.hi : grahaData.exaltation.en}
            </p>
          </div>
          <div>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
              {language === 'hi' ? 'नीच राशि (Debilitation)' : 'Debilitation'}
            </p>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              {language === 'hi' ? grahaData.debilitation.hi : grahaData.debilitation.en}
            </p>
          </div>
        </div>

        {/* Introduction */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>
            {language === 'hi' ? `${grahaData.name.hi} ग्रह का महत्व` : `Significance of ${grahaData.englishName}`}
          </h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
            {language === 'hi' ? grahaData.introduction.hi : grahaData.introduction.en}
          </p>
        </section>

        {/* Characteristics */}
        <section style={{ marginBottom: '2.5rem', background: 'var(--background)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.4rem' }}>
            {language === 'hi' ? 'सामान्य प्रभाव' : 'General Effects'}
          </h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
            {language === 'hi' ? grahaData.characteristics.hi : grahaData.characteristics.en}
          </p>
        </section>

        {/* Significations */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.4rem' }}>
            {language === 'hi' ? 'प्राकृतिक कारक (Significations)' : 'Natural Significations (Karakas)'}
          </h2>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8', fontSize: '1.05rem' }}>
            {(language === 'hi' ? grahaData.significations.hi : grahaData.significations.en).map((item, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Educational Notes */}
        <section style={{ marginBottom: '2.5rem', padding: '1.5rem', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '8px', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
          <h2 style={{ color: '#d97706', marginBottom: '1rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            ℹ️ {language === 'hi' ? 'शैक्षिक तथ्य' : 'Educational Note'}
          </h2>
          <p style={{ lineHeight: '1.8', fontSize: '1rem' }}>
            {language === 'hi' ? grahaData.educationalNotes.hi : grahaData.educationalNotes.en}
          </p>
        </section>

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
            {language === 'hi' ? `आपकी कुंडली में ${grahaData.name.hi} कहाँ है?` : `Where is ${grahaData.englishName} in your Kundli?`}
          </h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-light)' }}>
            {language === 'hi' 
              ? 'अपनी विस्तृत जन्म कुंडली बनाकर जानें कि यह ग्रह आपके जीवन को कैसे प्रभावित कर रहा है।' 
              : 'Create your detailed birth chart to see how this planet is affecting your life.'}
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
            <Link href="/graha" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
              {language === 'hi' ? 'सभी 9 ग्रहों के बारे में जानें' : 'Learn about all 9 Planets'}
            </Link>
          </div>
        </section>

      </div>
    </AstroToolLayout>
  );
};
