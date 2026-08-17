'use client';

import React, { useState } from 'react';
import { KundliForm } from '@/components/KundliForm/KundliForm';
import { CalculationState } from '@/components/CalculationState/CalculationState';
import { NorthIndianChart } from '@/components/KundliChart/NorthIndianChart';
import { PlanetaryTable } from '@/components/PlanetaryTable/PlanetaryTable';
import { DashaTree } from '@/components/DashaTree/DashaTree';
import { PDFDownloadButton } from '@/components/PDFDownloadButton/PDFDownloadButton';
import { KundliReport } from '@/lib/pdf/KundliReport';
import styles from './KundliClient.module.css';

import { calculateKundliAction } from '@/app/actions/astrology';
import { KundliResult, BirthData } from '@/lib/astrology/types';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export const KundliClient: React.FC = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [result, setResult] = useState<KundliResult | null>(null);

  const handleCalculate = async (data: BirthData) => {
    setStatus('loading');
    
    try {
      const kResult = await calculateKundliAction(data);
      if (kResult) {
        setResult(kResult);
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (e) {
      console.error(e);
      setStatus('error');
    }
  };

  return (
    <div>
      {status === 'idle' && (
        <KundliForm 
          title={t('tools.kundliTitle', 'अपनी विस्तृत जन्मकुंडली बनाएं')} 
          subtitle={t('forms.createKundliSubtitle', 'संपूर्ण जन्मकुंडली (Birth Chart) प्राप्त करने के लिए सही जन्म विवरण भरें।')}
          buttonText={t('forms.createKundliBtn', 'कुंडली बनाएं')}
          onSubmitCallback={handleCalculate}
        />
      )}
      
      {status !== 'idle' && (
        <div style={{ marginTop: '3rem' }}>
          <CalculationState 
            status={status} 
            message={status === 'error' ? t('common.errorCalc', 'गणना पूरी नहीं हो सकी। कृपया दोबारा प्रयास करें।') : undefined} 
          />
          
          {status === 'success' && result && (
            <div style={{ padding: '2rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px' }}>
              <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>{t('kundli.chartDetails', 'जन्म कुंडली विवरण')}</h3>
              
              <div style={{ marginBottom: '2rem' }}>
                <p><strong>{t('forms.name')}:</strong> {result.birthData.name}</p>
                <p><strong>{t('forms.date')}:</strong> {result.birthData.date} {result.birthData.time}</p>
                <p><strong>{t('forms.place')}:</strong> {result.birthData.place.name}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
                <div style={{ padding: '1rem', background: 'var(--background)', borderRadius: '4px', borderLeft: '4px solid var(--primary)' }}>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{t('astrology.lagna')}</p>
                  <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{result.lagna.lagna}</p>
                </div>
                <div style={{ padding: '1rem', background: 'var(--background)', borderRadius: '4px', borderLeft: '4px solid var(--primary)' }}>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{t('astrology.rashi')}</p>
                  <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{result.rashi.rashi}</p>
                </div>
                <div style={{ padding: '1rem', background: 'var(--background)', borderRadius: '4px', borderLeft: '4px solid var(--primary)' }}>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{t('astrology.nakshatra')}</p>
                  <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{result.nakshatra.nakshatra}</p>
                  <p style={{ fontSize: '0.85rem' }}>{t('kundli.pada', 'चरण')}: {result.nakshatra.pada}</p>
                </div>
              </div>

              <h4 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>{t('kundli.birthChart', 'जन्म चक्र (Birth Chart)')}</h4>
              <div style={{ marginBottom: '3rem' }}>
                <NorthIndianChart result={result} />
              </div>

              <h4 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>{t('kundli.planetaryPos', 'ग्रह स्थिति (Planetary Positions)')}</h4>
              <div style={{ marginBottom: '3rem' }}>
                <PlanetaryTable planets={result.planets} />
              </div>

              <DashaTree mahadashas={result.mahadashas} currentDasha={result.currentDasha} />

              <h4 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>{t('kundli.doshaAnalysis', 'दोष विश्लेषण (Dosha Analysis)')}</h4>
              <div style={{ marginBottom: '3rem' }}>
                {result.doshas.map((dosha, i) => (
                  <div key={i} style={{ padding: '1.5rem', background: dosha.isPresent ? 'rgba(220, 38, 38, 0.05)' : 'rgba(22, 163, 74, 0.05)', borderRadius: '8px', border: `1px solid ${dosha.isPresent ? '#dc2626' : '#16a34a'}` }}>
                    <h5 style={{ color: dosha.isPresent ? '#dc2626' : '#16a34a', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{dosha.name}</h5>
                    <p style={{ lineHeight: '1.6' }}>{dosha.description}</p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--background)', borderRadius: '8px', borderLeft: '4px solid #f59e0b', fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: '1.6' }}>
                <strong>अस्वीकरण (Disclaimer):</strong> ज्योतिषीय गणनाएँ पारंपरिक मान्यताओं पर आधारित हैं। इन्हें निश्चित भविष्यवाणी या पेशेवर चिकित्सा, कानूनी या वित्तीय सलाह के रूप में न लें।
              </div>

              <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '3rem' }}>
                <PDFDownloadButton 
                  document={<KundliReport data={result} t={t} />} 
                  fileName={`JanmJyoti-Kundli-${result.birthData.name.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`}
                />
                
                <button 
                  onClick={() => { setStatus('idle'); setResult(null); }}
                  style={{ padding: '0.75rem 1.5rem', background: 'transparent', color: 'var(--primary)', border: '1px solid var(--primary)', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}
                >
                  नई कुंडली बनाएं
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
