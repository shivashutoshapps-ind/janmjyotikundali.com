'use client';

import React, { useState } from 'react';
import { CalculationState } from '@/components/CalculationState/CalculationState';
import { calculatePanchangAction } from '@/app/actions/astrology';
import { PanchangResult } from '@/lib/astrology/types';
import styles from './PanchangClient.module.css';

export const PanchangClient: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [result, setResult] = useState<PanchangResult | null>(null);

  const handleFetchPanchang = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const date = formData.get('date') as string;
    const location = formData.get('location') as string;
    
    try {
      const pResult = await calculatePanchangAction(date, location);
      if (pResult) {
        setResult(pResult);
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div>
      <form className={styles.panchangForm} onSubmit={handleFetchPanchang}>
        <div className={styles.inputGroup}>
          <label htmlFor="date">तिथि (Date)</label>
          <input type="date" id="date" name="date" defaultValue={new Date().toISOString().split('T')[0]} required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="location">स्थान (Location)</label>
          <input type="text" id="location" name="location" placeholder="उदा. नई दिल्ली" defaultValue="नई दिल्ली" required />
        </div>
        <button type="submit" className={styles.submitBtn}>
          पंचांग देखें
        </button>
      </form>
      
      <div style={{ marginTop: '3rem' }}>
        <CalculationState 
          status={status} 
          message={status === 'error' ? 'गणना में त्रुटि आई। कृपया विवरण जांचें।' : 'अन्य दिन का पंचांग देखने के लिए ऊपर तिथि चुनें।'} 
        />
        
        {status === 'success' && result && (
          <div className={styles.dataGrid}>
            <div className={styles.dataItem}>
              <span className={styles.label}>तिथि</span>
              <span className={styles.value}>{result.tithi}</span>
            </div>
            <div className={styles.dataItem}>
              <span className={styles.label}>नक्षत्र</span>
              <span className={styles.value}>{result.nakshatra}</span>
            </div>
            <div className={styles.dataItem}>
              <span className={styles.label}>योग</span>
              <span className={styles.value}>{result.yoga}</span>
            </div>
            <div className={styles.dataItem}>
              <span className={styles.label}>करण</span>
              <span className={styles.value}>{result.karana}</span>
            </div>
            <div className={styles.dataItem}>
              <span className={styles.label}>वार (Day)</span>
              <span className={styles.value}>{result.vara}</span>
            </div>
            <div className={styles.dataItem}>
              <span className={styles.label}>सूर्योदय</span>
              <span className={styles.value}>{result.sunrise}</span>
            </div>
            <div className={styles.dataItem}>
              <span className={styles.label}>सूर्यास्त</span>
              <span className={styles.value}>{result.sunset}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
