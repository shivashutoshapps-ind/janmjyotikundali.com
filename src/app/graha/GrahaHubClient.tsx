'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { grahaData } from '@/data/content/graha';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';

export const GrahaHubClient: React.FC = () => {
  const { language, t } = useLanguage();

  const title = language === 'hi' ? 'नवग्रह (9 Planets in Vedic Astrology)' : 'Navagraha (9 Planets in Vedic Astrology)';
  const description = language === 'hi'
    ? 'वैदिक ज्योतिष में नवग्रहों का महत्व, उनके प्रभाव और विशेषताएं विस्तार से जानें।'
    : 'Learn about the significance, effects, and characteristics of the Navagraha (9 Planets) in Vedic Astrology.';

  const breadcrumbs = [
    { label: t('nav.home', 'होम'), href: '/' },
    { label: t('nav.tools', 'ज्योतिष टूल्स'), href: '/tools' },
    { label: language === 'hi' ? 'ग्रह' : 'Planets', href: '/graha' },
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
            ? 'वैदिक ज्योतिष में 9 ग्रहों (नवग्रह) का अध्ययन किया जाता है। ये ग्रह हमारे जीवन, कर्म और भाग्य को गहरे स्तर पर प्रभावित करते हैं। किसी भी ग्रह के बारे में विस्तार से जानने के लिए उस पर क्लिक करें।'
            : 'Vedic astrology studies 9 planets (Navagraha). These planets deeply influence our lives, karma, and destiny. Click on any planet to learn about it in detail.'}
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {Object.values(grahaData).map((graha) => (
            <Link 
              key={graha.slug} 
              href={`/graha/${graha.slug}`}
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
                {language === 'hi' ? graha.name.hi : graha.englishName}
              </h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                {language === 'hi' ? graha.englishName : graha.name.hi}
              </p>
              <div style={{ 
                marginTop: '1rem', 
                paddingTop: '1rem', 
                borderTop: '1px solid var(--border)',
                fontSize: '0.9rem'
              }}>
                {language === 'hi' ? `भूमिका: ${graha.role.hi}` : `Role: ${graha.role.en}`}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AstroToolLayout>
  );
};
