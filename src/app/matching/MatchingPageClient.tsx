'use client';

import { AstroToolLayout } from '@/components/AstroToolLayout/AstroToolLayout';
import { MatchingClient } from './MatchingClient';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function MatchingPageClient() {
  const { t } = useLanguage();



  return (
    <AstroToolLayout 
      title={t('matching.title', 'कुंडली मिलान (Kundli Matching)')}
      description={t('matching.subtitle', 'विवाह के लिए 36 गुणों का मिलान')}
      breadcrumbs={[
        { label: t('nav.home', 'होम'), href: '/' },
        { label: t('nav.matching', 'कुंडली मिलान') }
      ]}
    >
      <MatchingClient />
    </AstroToolLayout>
  );
}
