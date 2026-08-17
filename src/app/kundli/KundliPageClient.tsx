'use client';

import Link from 'next/link';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import { KundliClient } from './KundliClient';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function KundliPageClient() {
  const { t } = useLanguage();
  return (
    <AstroToolLayout 
      title={t('tools.kundliTitle')}
      description={
        <>
          {t('tools.kundliDescPart1')}<Link href="/rashi" style={{color: 'var(--primary)', textDecoration: 'underline'}}>{t('nav.rashi')}</Link>{t('tools.kundliDescPart2')}<Link href="/nakshatra" style={{color: 'var(--primary)', textDecoration: 'underline'}}>{t('nav.nakshatra')}</Link>{t('tools.kundliDescPart3')}
        </>
      }
      breadcrumbs={[
        { label: t('nav.home'), href: '/' },
        { label: t('tools.astroTools') },
        { label: t('nav.kundli') }
      ]}
    >
      <KundliClient />
    </AstroToolLayout>
  );
}
