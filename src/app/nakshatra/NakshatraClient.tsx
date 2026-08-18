'use client';

import React, { useState } from 'react';
import { KundliForm } from '@/components/KundliForm/KundliForm';
import { CalculationState } from '@/components/CalculationState/CalculationState';
import Link from 'next/link';

import { calculateNakshatraAction } from '@/app/actions/astrology';
import { NakshatraResult, BirthData } from '@/lib/astrology/types';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export const NakshatraClient: React.FC = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [result, setResult] = useState<NakshatraResult | null>(null);

  const handleCalculate = async (data: BirthData) => {
    setStatus('loading');
    
    try {
      const nResult = await calculateNakshatraAction(data);
      if (nResult) {
        setResult(nResult);
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
        title="अपना जन्म नक्षत्र जानें" 
        subtitle="वैदिक ज्योतिष में 27 नक्षत्र होते हैं। सही जानकारी के लिए जन्म विवरण दें।"
        buttonText="नक्षत्र जानें"
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
              const nakshatraNames = [
                'अश्विनी (Ashwini)', 'भरणी (Bharani)', 'कृत्तिका (Krittika)', 'रोहिणी (Rohini)', 
                'मृगशिरा (Mrigashira)', 'आर्द्रा (Ardra)', 'पुनर्वसु (Punarvasu)', 'पुष्य (Pushya)', 
                'आश्लेषा (Ashlesha)', 'मघा (Magha)', 'पूर्वाफाल्गुनी (Purva Phalguni)', 'उत्तराफाल्गुनी (Uttara Phalguni)',
                'हस्त (Hasta)', 'चित्रा (Chitra)', 'स्वाति (Swati)', 'विशाखा (Vishakha)', 
                'अनुराधा (Anuradha)', 'ज्येष्ठा (Jyeshtha)', 'मूल (Mula)', 'पूर्वाषाढ़ा (Purva Ashadha)', 
                'उत्तराषाढ़ा (Uttara Ashadha)', 'श्रवण (Shravana)', 'धनिष्ठा (Dhanishta)', 'शतभिषा (Shatabhisha)',
                'पूर्वाभाद्रपद (Purva Bhadrapada)', 'उत्तराभाद्रपद (Uttara Bhadrapada)', 'रेवती (Revati)'
              ];
              const nakshatraSlugs = [
                'ashwini', 'bharani', 'krittika', 'rohini',
                'mrigashira', 'ardra', 'punarvasu', 'pushya',
                'ashlesha', 'magha', 'purva-phalguni', 'uttara-phalguni',
                'hasta', 'chitra', 'swati', 'vishakha',
                'anuradha', 'jyeshtha', 'mula', 'purva-ashadha',
                'uttara-ashadha', 'shravana', 'dhanishtha', 'shatabhisha',
                'purva-bhadrapada', 'uttara-bhadrapada', 'revati'
              ];
              const index = nakshatraNames.indexOf(result.nakshatra);
              const slug = index !== -1 ? nakshatraSlugs[index] : null;

              return (
                <>
                  <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1rem' }}>
                    आपका जन्म नक्षत्र: {slug ? <Link href={`/nakshatra/${slug}`} style={{ textDecoration: 'underline' }}>{result.nakshatra}</Link> : result.nakshatra}
                  </h3>
                  <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}><strong>चरण (Pada):</strong> {result.pada}</p>
                  <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}><strong>नक्षत्र स्वामी:</strong> {result.lord}</p>
                  <p style={{ fontSize: '1.1rem', padding: '1rem', background: 'var(--background)', borderRadius: '4px' }}>{result.description}</p>
                  
                  {slug && (
                    <div style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
                      <Link href={`/nakshatra/${slug}`} style={{ padding: '0.75rem 1.5rem', background: 'var(--surface)', color: 'var(--primary)', border: '1px solid var(--primary)', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
                        {t('common.readMoreNakshatra', 'विस्तृत जानकारी पढ़ें')}
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
