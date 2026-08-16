import React from 'react';
import styles from './CalculationState.module.css';

interface CalculationStateProps {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export const CalculationState: React.FC<CalculationStateProps> = ({ status, message }) => {
  if (status === 'success') return null;

  return (
    <div className={`${styles.container} ${styles[status]}`}>
      {status === 'loading' && (
        <div className={styles.loader}></div>
      )}
      <p className={styles.message}>
        {message || (
          status === 'loading' ? 'गणना की जा रही है...' :
          status === 'error' ? 'गणना में त्रुटि आई। कृपया पुनः प्रयास करें।' :
          'विवरण दर्ज कर गणना शुरू करें।'
        )}
      </p>
    </div>
  );
};
