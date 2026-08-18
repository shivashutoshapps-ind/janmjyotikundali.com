'use client';

import React, { useState } from 'react';
import { KundliForm } from '@/components/KundliForm/KundliForm';
import { CalculationState } from '@/components/CalculationState/CalculationState';
import Link from 'next/link';

import { calculateRashiAction } from '@/app/actions/astrology';
import { RashiResult, BirthData } from '@/lib/astrology/types';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export const RashiClient: React.FC = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [result, setResult] = useState<RashiResult | null>(null);

  const handleCalculate = async (data: BirthData) => {
    setStatus('loading');
    
    try {
      const rashiResult = await calculateRashiAction(data);
      if (rashiResult) {
        setResult(rashiResult);
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
      <KundliForm 
        title="अपनी चंद्र राशि जानें" 
        subtitle="चंद्र राशि (Moon Sign) जानने के लिए अपना जन्म विवरण भरें।"
        buttonText="राशि जानें"
        onSubmitCallback={handleCalculate}
      />
      
      <div style={{ marginTop: '3rem' }}>
        <CalculationState 
          status={status} 
          message={status === 'error' ? t('common.errorCalc', 'गणना पूरी नहीं हो सकी। कृपया दोबारा प्रयास करें।') : undefined} 
        />
        
        {status === 'success' && result && (
          <div style={{ padding: '2rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', textAlign: 'center' }}>
            {(() => {
              const rashiNames = [
                'मेष (Aries)', 'वृषभ (Taurus)', 'मिथुन (Gemini)', 'कर्क (Cancer)',
                'सिंह (Leo)', 'कन्या (Virgo)', 'तुला (Libra)', 'वृश्चिक (Scorpio)',
                'धनु (Sagittarius)', 'मकर (Capricorn)', 'कुंभ (Aquarius)', 'मीन (Pisces)'
              ];
              const rashiSlugs = [
                'mesh', 'vrishabh', 'mithun', 'kark',
                'singh', 'kanya', 'tula', 'vrishchik',
                'dhanu', 'makar', 'kumbh', 'meen'
              ];
              const index = rashiNames.indexOf(result.rashi);
              const slug = index !== -1 ? rashiSlugs[index] : null;

              return (
                <>
                  <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                    आपकी चंद्र राशि: {slug ? <Link href={`/rashi/${slug}`} style={{ textDecoration: 'underline' }}>{result.rashi}</Link> : result.rashi}
                  </h3>
                  <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}><strong>राशि स्वामी:</strong> {result.lord}</p>
                  <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}><strong>तत्व:</strong> {result.element}</p>
                  <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}><strong>स्वभाव:</strong> {result.quality}</p>
                  <p style={{ fontSize: '1.1rem', padding: '1rem', background: 'var(--background)', borderRadius: '4px' }}>{result.description}</p>
                  
                  {slug && (
                    <div style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
                      <Link href={`/rashi/${slug}`} style={{ padding: '0.75rem 1.5rem', background: 'var(--surface)', color: 'var(--primary)', border: '1px solid var(--primary)', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
                        {t('common.readMore', 'विस्तृत जानकारी पढ़ें')}
                      </Link>
                    </div>
                  )}
                </>
              );
            })()}
            
            <button 
              onClick={() => { setStatus('idle'); setResult(null); }}
              style={{ marginTop: '1.5rem', padding: '0.75rem 1.5rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              पुनः गणना करें
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
