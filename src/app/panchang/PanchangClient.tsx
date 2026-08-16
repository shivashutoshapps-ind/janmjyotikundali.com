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
          <div className={styles.dashboard}>
            <div className={styles.headerSection}>
              <h3 style={{ color: 'var(--primary)', textAlign: 'center', marginBottom: '0.5rem' }}>आज का पंचांग</h3>
              <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '2rem' }}>
                {result.date} | {result.location.name}
              </p>
            </div>

            <div className={styles.grid2}>
              <div className={styles.card}>
                <h4>मूल पंचांग</h4>
                <ul className={styles.list}>
                  <li><strong>वार (Day):</strong> {result.vara}</li>
                  <li><strong>तिथि (Tithi):</strong> {result.tithi.name} ({result.tithi.paksha} Paksha)</li>
                  <li><strong>नक्षत्र (Nakshatra):</strong> {result.nakshatra.nakshatra} (चरण {result.nakshatra.pada})</li>
                  <li><strong>योग (Yoga):</strong> {result.yoga.name}</li>
                  <li><strong>करण (Karana):</strong> {result.karana.name}</li>
                </ul>
              </div>

              <div className={styles.card}>
                <h4>सूर्य और चंद्र (Sun & Moon)</h4>
                <ul className={styles.list}>
                  <li><strong>सूर्योदय (Sunrise):</strong> {new Date(result.sunrise).toLocaleTimeString('hi-IN', {hour: '2-digit', minute:'2-digit'})}</li>
                  <li><strong>सूर्यास्त (Sunset):</strong> {new Date(result.sunset).toLocaleTimeString('hi-IN', {hour: '2-digit', minute:'2-digit'})}</li>
                  <li><strong>चंद्रोदय (Moonrise):</strong> {result.moonrise !== '-' ? new Date(result.moonrise).toLocaleTimeString('hi-IN', {hour: '2-digit', minute:'2-digit'}) : '-'}</li>
                  <li><strong>चंद्रास्त (Moonset):</strong> {result.moonset !== '-' ? new Date(result.moonset).toLocaleTimeString('hi-IN', {hour: '2-digit', minute:'2-digit'}) : '-'}</li>
                </ul>
              </div>
            </div>

            <div className={styles.card} style={{ marginTop: '2rem' }}>
              <h4>अशुभ काल (Inauspicious Timings)</h4>
              <div className={styles.grid3}>
                <div className={styles.kaalBox} style={{ borderLeftColor: '#ef4444' }}>
                  <h5>{result.rahuKaal.name}</h5>
                  <p>{new Date(result.rahuKaal.start).toLocaleTimeString('hi-IN', {hour: '2-digit', minute:'2-digit'})} - {new Date(result.rahuKaal.end).toLocaleTimeString('hi-IN', {hour: '2-digit', minute:'2-digit'})}</p>
                </div>
                <div className={styles.kaalBox} style={{ borderLeftColor: '#f97316' }}>
                  <h5>{result.yamaganda.name}</h5>
                  <p>{new Date(result.yamaganda.start).toLocaleTimeString('hi-IN', {hour: '2-digit', minute:'2-digit'})} - {new Date(result.yamaganda.end).toLocaleTimeString('hi-IN', {hour: '2-digit', minute:'2-digit'})}</p>
                </div>
                <div className={styles.kaalBox} style={{ borderLeftColor: '#eab308' }}>
                  <h5>{result.gulika.name}</h5>
                  <p>{new Date(result.gulika.start).toLocaleTimeString('hi-IN', {hour: '2-digit', minute:'2-digit'})} - {new Date(result.gulika.end).toLocaleTimeString('hi-IN', {hour: '2-digit', minute:'2-digit'})}</p>
                </div>
              </div>
            </div>

            <div className={styles.card} style={{ marginTop: '2rem' }}>
              <h4>दिन का चौघड़िया (Day Choghadiya)</h4>
              <div className={styles.choghadiyaGrid}>
                {result.dayChoghadiya.map((c, i) => (
                  <div key={i} className={`${styles.choghadiyaBox} ${styles[c.type === 'रोग' || c.type === 'उद्वेग' || c.type === 'काल' ? 'bad' : 'good']}`}>
                    <strong>{c.name}</strong>
                    <span>{new Date(c.start).toLocaleTimeString('hi-IN', {hour: '2-digit', minute:'2-digit'})}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.card} style={{ marginTop: '2rem' }}>
              <h4>रात का चौघड़िया (Night Choghadiya)</h4>
              <div className={styles.choghadiyaGrid}>
                {result.nightChoghadiya.map((c, i) => (
                  <div key={i} className={`${styles.choghadiyaBox} ${styles[c.type === 'रोग' || c.type === 'उद्वेग' || c.type === 'काल' ? 'bad' : 'good']}`}>
                    <strong>{c.name}</strong>
                    <span>{new Date(c.start).toLocaleTimeString('hi-IN', {hour: '2-digit', minute:'2-digit'})}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--background)', borderRadius: '8px', borderLeft: '4px solid #f59e0b', fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: '1.6' }}>
              <strong>अस्वीकरण (Disclaimer):</strong> यह एक पारंपरिक पंचांग गणना है। किसी भी महत्वपूर्ण कार्य से पहले स्थानीय विशेषज्ञ से परामर्श लें।
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
