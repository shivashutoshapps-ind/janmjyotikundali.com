import React from 'react';
import styles from './ToolDisclaimer.module.css';

export const ToolDisclaimer: React.FC = () => {
  return (
    <div className={styles.disclaimerBox}>
      <h4 className={styles.title}>महत्वपूर्ण सूचना (Disclaimer)</h4>
      <p className={styles.text}>
        ज्योतिष एक प्राचीन और प्रतीकात्मक विद्या है। यह मार्गदर्शन प्रदान करती है, लेकिन जीवन की घटनाओं (जैसे विवाह, नौकरी, स्वास्थ्य या धन) की कोई 100% सटीक गारंटी नहीं देती। कृपया अपने विवेक और कर्मों पर विश्वास रखें।
      </p>
    </div>
  );
};
