'use client';

import Link from 'next/link';
import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import { PanchangClient } from './PanchangClient';
import { useLanguage } from '@/lib/i18n/LanguageContext';

import { PanchangResult } from '@/lib/astrology/types';

interface Props {
  initialData?: PanchangResult | null;
}

export default function PanchangPageClient({ initialData }: Props) {
  const { t } = useLanguage();
  return (
    <AstroToolLayout 
      title={t('home.panchangToday', 'आज का पंचांग')}
      description={
        <>
          {t('panchang.subtitle', 'दैनिक हिन्दू पंचांग, तिथि, नक्षत्र, योग, करण और शुभ मुहूर्त की विस्तृत जानकारी।')} <Link href="/kundli" style={{color: 'var(--primary)', textDecoration: 'underline'}}>{t('nav.kundli')}</Link> {t('common.details', 'देखें')}
        </>
      }
      breadcrumbs={[
        { label: t('nav.home'), href: '/' },
        { label: t('nav.panchang') }
      ]}
    >
      <PanchangClient initialData={initialData} />
    </AstroToolLayout>
  );
}
