'use client';

import React, { useState } from 'react';
import { KundliForm } from '@/components/KundliForm/KundliForm';
import { CalculationState } from '@/components/CalculationState/CalculationState';
import { NorthIndianChart } from '@/components/KundliChart/NorthIndianChart';
import { PlanetaryTable } from '@/components/PlanetaryTable/PlanetaryTable';
import { DashaTree } from '@/components/DashaTree/DashaTree';
import styles from './KundliClient.module.css';

import { calculateKundliAction } from '@/app/actions/astrology';
import { KundliResult, BirthData } from '@/lib/astrology/types';

export const KundliClient: React.FC = () => {
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
          title="अपनी विस्तृत जन्मकुंडली बनाएं" 
          subtitle="संपूर्ण जन्मकुंडली (Birth Chart) प्राप्त करने के लिए सही जन्म विवरण भरें।"
          buttonText="कुंडली बनाएं"
          onSubmitCallback={handleCalculate}
        />
      )}
      
      {status !== 'idle' && (
        <div style={{ marginTop: '3rem' }}>
          <CalculationState 
            status={status} 
            message={status === 'error' ? 'गणना में त्रुटि आई। कृपया विवरण जांचें और पुनः प्रयास करें।' : undefined} 
          />
          
          {status === 'success' && result && (
            <div style={{ padding: '2rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px' }}>
              <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>जन्म कुंडली विवरण</h3>
              
              <div style={{ marginBottom: '2rem' }}>
                <p><strong>नाम:</strong> {result.birthData.name}</p>
                <p><strong>जन्म:</strong> {result.birthData.date} {result.birthData.time}</p>
                <p><strong>स्थान:</strong> {result.birthData.place.name}</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
                <div style={{ padding: '1rem', background: 'var(--background)', borderRadius: '4px', borderLeft: '4px solid var(--primary)' }}>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>लग्न (Ascendant)</p>
                  <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{result.lagna.lagna}</p>
                </div>
                <div style={{ padding: '1rem', background: 'var(--background)', borderRadius: '4px', borderLeft: '4px solid var(--primary)' }}>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>चंद्र राशि (Moon Sign)</p>
                  <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{result.rashi.rashi}</p>
                </div>
                <div style={{ padding: '1rem', background: 'var(--background)', borderRadius: '4px', borderLeft: '4px solid var(--primary)' }}>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>नक्षत्र (Star)</p>
                  <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{result.nakshatra.nakshatra}</p>
                  <p style={{ fontSize: '0.85rem' }}>चरण (Pada): {result.nakshatra.pada}</p>
                </div>
              </div>

              <h4 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>जन्म चक्र (Birth Chart)</h4>
              <div style={{ marginBottom: '3rem' }}>
                <NorthIndianChart result={result} />
              </div>

              <h4 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>ग्रह स्थिति (Planetary Positions)</h4>
              <div style={{ marginBottom: '3rem' }}>
                <PlanetaryTable planets={result.planets} />
              </div>

              <DashaTree mahadashas={result.mahadashas} currentDasha={result.currentDasha} />

              <h4 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>दोष विश्लेषण (Dosha Analysis)</h4>
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

              <div style={{ textAlign: 'center' }}>
                <button 
                  onClick={() => { setStatus('idle'); setResult(null); }}
                  style={{ marginTop: '3rem', padding: '1rem 2rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem' }}
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
