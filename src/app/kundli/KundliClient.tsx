'use client';

import React, { useState } from 'react';
import { KundliForm } from '@/components/KundliForm/KundliForm';
import { CalculationState } from '@/components/CalculationState/CalculationState';
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
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ padding: '1rem', background: 'var(--background)', borderRadius: '4px' }}>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>लग्न</p>
                  <p style={{ fontWeight: 'bold' }}>{result.lagna.lagna}</p>
                </div>
                <div style={{ padding: '1rem', background: 'var(--background)', borderRadius: '4px' }}>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>चंद्र राशि</p>
                  <p style={{ fontWeight: 'bold' }}>{result.rashi.rashi}</p>
                </div>
                <div style={{ padding: '1rem', background: 'var(--background)', borderRadius: '4px' }}>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>नक्षत्र</p>
                  <p style={{ fontWeight: 'bold' }}>{result.nakshatra.nakshatra} (चरण {result.nakshatra.pada})</p>
                </div>
              </div>

              <h4 style={{ marginBottom: '1rem' }}>ग्रह स्थिति (Planetary Positions)</h4>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--border)' }}>
                      <th style={{ padding: '0.5rem' }}>ग्रह (Planet)</th>
                      <th style={{ padding: '0.5rem' }}>राशि (Sign)</th>
                      <th style={{ padding: '0.5rem' }}>नक्षत्र (Nakshatra)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.planets.map((p, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                        <td style={{ padding: '0.5rem' }}>{p.planet}</td>
                        <td style={{ padding: '0.5rem' }}>{p.rashi}</td>
                        <td style={{ padding: '0.5rem' }}>{p.nakshatra}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button 
                  onClick={() => { setStatus('idle'); setResult(null); }}
                  style={{ marginTop: '2rem', padding: '0.75rem 1.5rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  पुनः गणना करें
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
