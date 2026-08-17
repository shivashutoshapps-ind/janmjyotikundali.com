import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brandSection}>
          <h2 className={`hindi-text ${styles.brandName}`}>जन्मज्योति</h2>
          <p className={styles.brandTagline}>सरल, सत्य और सटीक भारतीय ज्योतिष</p>
        </div>
        
        <div className={styles.linksSection}>
          <div className={styles.linkGroup}>
            <h3 className={styles.linkTitle}>मुख्य लिंक्स</h3>
            <Link href="/rashifal">आज का राशिफल</Link>
            <Link href="/kundli">फ्री जन्मकुंडली</Link>
            <Link href="/panchang">आज का पंचांग</Link>
          </div>
          
          <div className={styles.linkGroup}>
            <h3 className={styles.linkTitle}>जानकारी</h3>
            <Link href="/about">हमारे बारे में</Link>
            <Link href="/privacy">प्राइवेसी पॉलिसी</Link>
            <Link href="/terms">नियम व शर्तें</Link>
            <Link href="/disclaimer">अस्वीकरण</Link>
            <Link href="/contact">संपर्क करें</Link>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} JanmJyoti. All rights reserved.</p>
          <p className={styles.disclaimer}>
            डिस्क्लेमर: ज्योतिष एक मार्गदर्शन है। हम किसी परिणाम की गारंटी नहीं देते।
          </p>
        </div>
      </div>
    </footer>
  );
};
