import React from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from './CalculationState.module.css';

interface CalculationStateProps {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export const CalculationState: React.FC<CalculationStateProps> = ({ status, message }) => {
  const { t } = useLanguage();
  if (status === 'success') return null;

  return (
    <div className={`${styles.container} ${styles[status]}`}>
      {status === 'loading' && (
        <div className={styles.loader}></div>
      )}
      <p className={styles.message}>
        {message || (
          status === 'loading' ? t('common.calculating', 'गणना की जा रही है…') :
          status === 'error' ? t('common.calcError', 'गणना पूरी नहीं हो सकी। कृपया दोबारा प्रयास करें।') :
          t('common.submit', 'विवरण दर्ज कर गणना शुरू करें।')
        )}
      </p>
      {status === 'loading' && (
        <p className={styles.submessage} style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>
          {t('common.waitMoment', 'कृपया कुछ क्षण प्रतीक्षा करें।')}
        </p>
      )}
    </div>
  );
};
