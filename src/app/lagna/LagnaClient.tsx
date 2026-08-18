'use client';

import React, { useState } from 'react';
import { KundliForm } from '@/components/KundliForm/KundliForm';
import { CalculationState } from '@/components/CalculationState/CalculationState';
import Link from 'next/link';

import { calculateLagnaAction } from '@/app/actions/astrology';
import { LagnaResult, BirthData } from '@/lib/astrology/types';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export const LagnaClient: React.FC = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [result, setResult] = useState<LagnaResult | null>(null);

  const handleCalculate = async (data: BirthData) => {
    setStatus('loading');
    
    try {
      const lResult = await calculateLagnaAction(data);
      if (lResult) {
        setResult(lResult);
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
        title="अपना लग्न जानें" 
        subtitle="लग्न आपके व्यक्तित्व और बाहरी आवरण को दर्शाता है।"
        buttonText="लग्न जानें"
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
              const lagnaNames = [
                'मेष (Aries)', 'वृषभ (Taurus)', 'मिथुन (Gemini)', 'कर्क (Cancer)',
                'सिंह (Leo)', 'कन्या (Virgo)', 'तुला (Libra)', 'वृश्चिक (Scorpio)',
                'धनु (Sagittarius)', 'मकर (Capricorn)', 'कुंभ (Aquarius)', 'मीन (Pisces)'
              ];
              const lagnaSlugs = [
                'mesh', 'vrishabh', 'mithun', 'kark',
                'singh', 'kanya', 'tula', 'vrishchik',
                'dhanu', 'makar', 'kumbh', 'meen'
              ];
              const index = lagnaNames.indexOf(result.lagna);
              const slug = index !== -1 ? lagnaSlugs[index] : null;

              return (
                <>
                  <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                    आपका लग्न: {slug ? <Link href={`/lagna/${slug}`} style={{ textDecoration: 'underline' }}>{result.lagna}</Link> : result.lagna}
                  </h3>
                  <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}><strong>लग्न स्वामी:</strong> {result.lord}</p>
                  <p style={{ fontSize: '1.1rem', padding: '1rem', background: 'var(--background)', borderRadius: '4px' }}>{result.description}</p>
                  
                  {slug && (
                    <div style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
                      <Link href={`/lagna/${slug}`} style={{ padding: '0.75rem 1.5rem', background: 'var(--surface)', color: 'var(--primary)', border: '1px solid var(--primary)', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
                        अपने लग्न के बारे में विस्तृत जानकारी पढ़ें
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
