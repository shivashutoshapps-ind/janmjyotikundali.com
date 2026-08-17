'use client';

import React, { useState } from 'react';
import { CalculationState } from '@/components/CalculationState/CalculationState';
import { calculatePanchangAction } from '@/app/actions/astrology';
import { PanchangResult } from '@/lib/astrology/types';
import { PDFDownloadButton } from '@/components/PDFDownloadButton/PDFDownloadButton';
import { PanchangReport } from '@/lib/pdf/PanchangReport';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from './PanchangClient.module.css';

export const PanchangClient: React.FC = () => {
  const { t } = useLanguage();
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
          <label htmlFor="date">{t('common.date', 'तिथि (Date)')}</label>
          <input type="date" id="date" name="date" defaultValue={new Date().toISOString().split('T')[0]} required />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="location">{t('common.place', 'स्थान (Location)')}</label>
          <input type="text" id="location" name="location" placeholder={t('forms.placePlaceholder')} defaultValue="नई दिल्ली" required />
        </div>
        <button type="submit" className={styles.submitBtn}>
          {t('home.panchangToday', 'पंचांग देखें')}
        </button>
      </form>
      
      <div style={{ marginTop: '3rem' }}>
        <CalculationState 
          status={status} 
          message={status === 'error' ? t('common.errorCalc', 'गणना पूरी नहीं हो सकी। कृपया दोबारा प्रयास करें।') : t('panchang.subtitle', 'अन्य दिन का पंचांग देखने के लिए ऊपर तिथि चुनें।')} 
        />
        
        {status === 'success' && result && (
          <div className={styles.dashboard}>
            <div className={styles.headerSection}>
              <h3 style={{ color: 'var(--primary)', textAlign: 'center', marginBottom: '0.5rem' }}>{t('home.panchangToday', 'आज का पंचांग')}</h3>
              <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '2rem' }}>
                {result.date} | {result.location.name}
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <PDFDownloadButton 
                  document={<PanchangReport data={result} locationName={result.location.name} t={t} />} 
                  fileName={`JanmJyoti-Panchang-${result.date.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`}
                />
              </div>
            </div>

            <div className={styles.grid2}>
              <div className={styles.card}>
                <h4>{t('panchang.fiveLimbs', 'मूल पंचांग')}</h4>
                <ul className={styles.list}>
                  <li><strong>{t('common.date')}:</strong> {result.vara}</li>
                  <li><strong>{t('astrology.tithi')}:</strong> {result.tithi.name} ({result.tithi.paksha} Paksha)</li>
                  <li><strong>{t('astrology.nakshatra')}:</strong> {result.nakshatra.nakshatra} ({t('kundli.pada')} {result.nakshatra.pada})</li>
                  <li><strong>{t('astrology.yoga')}:</strong> {result.yoga.name}</li>
                  <li><strong>{t('astrology.karana')}:</strong> {result.karana.name}</li>
                </ul>
              </div>

              <div className={styles.card}>
                <h4>{t('panchang.sunMoon', 'सूर्य और चंद्र (Sun & Moon)')}</h4>
                <ul className={styles.list}>
                  <li><strong>{t('panchang.sunrise')}:</strong> {new Date(result.sunrise).toLocaleTimeString('hi-IN', {hour: '2-digit', minute:'2-digit'})}</li>
                  <li><strong>{t('panchang.sunset')}:</strong> {new Date(result.sunset).toLocaleTimeString('hi-IN', {hour: '2-digit', minute:'2-digit'})}</li>
                  <li><strong>{t('panchang.moonrise')}:</strong> {result.moonrise !== '-' ? new Date(result.moonrise).toLocaleTimeString('hi-IN', {hour: '2-digit', minute:'2-digit'}) : '-'}</li>
                  <li><strong>{t('panchang.moonset')}:</strong> {result.moonset !== '-' ? new Date(result.moonset).toLocaleTimeString('hi-IN', {hour: '2-digit', minute:'2-digit'}) : '-'}</li>
                </ul>
              </div>
            </div>

            <div className={styles.card} style={{ marginTop: '2rem' }}>
              <h4>{t('panchang.inauspicious', 'अशुभ काल (Inauspicious Timings)')}</h4>
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
              <h4>{t('panchang.choghadiyaDay', 'दिन का चौघड़िया (Day Choghadiya)')}</h4>
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
              <h4>{t('panchang.choghadiyaNight', 'रात का चौघड़िया (Night Choghadiya)')}</h4>
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
              <strong>{t('footer.disclaimer', 'अस्वीकरण (Disclaimer)')}:</strong> {t('rashifal.disclaimer', 'यह एक पारंपरिक पंचांग गणना है। किसी भी महत्वपूर्ण कार्य से पहले स्थानीय विशेषज्ञ से परामर्श लें।')}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
