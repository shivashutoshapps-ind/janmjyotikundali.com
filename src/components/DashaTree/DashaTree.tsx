'use client';

import React, { useState } from 'react';
import { MahadashaPeriod, CurrentDasha } from '@/lib/astrology/types';
import styles from './DashaTree.module.css';

interface DashaTreeProps {
  mahadashas: MahadashaPeriod[];
  currentDasha: CurrentDasha | null;
}

const formatDate = (isoString: string) => {
  const d = new Date(isoString);
  return d.toLocaleDateString('hi-IN', { year: 'numeric', month: 'short', day: 'numeric' });
};

export const DashaTree: React.FC<DashaTreeProps> = ({ mahadashas, currentDasha }) => {
  const [expandedMahadasha, setExpandedMahadasha] = useState<number | null>(
    currentDasha ? mahadashas.findIndex(m => m.planet === currentDasha.mahadasha.planet) : null
  );
  
  const [expandedAntardasha, setExpandedAntardasha] = useState<number | null>(
    currentDasha ? currentDasha.mahadasha.antardashas.findIndex(a => a.planet === currentDasha.antardasha.planet) : null
  );

  const toggleMahadasha = (index: number) => {
    if (expandedMahadasha === index) {
      setExpandedMahadasha(null);
      setExpandedAntardasha(null);
    } else {
      setExpandedMahadasha(index);
      setExpandedAntardasha(null);
    }
  };

  const toggleAntardasha = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setExpandedAntardasha(expandedAntardasha === index ? null : index);
  };

  return (
    <div className={styles.dashaSection}>
      {currentDasha && (
        <div className={styles.currentDashaCard}>
          <h5>वर्तमान दशा (Current Dasha)</h5>
          <div className={styles.dashaGrid}>
            <div className={styles.dashaLevel}>
              <small>महादशा (Mahadasha)</small>
              <strong>{currentDasha.mahadasha.planet}</strong>
            </div>
            <div className={styles.dashaLevel}>
              <small>अंतरदशा (Antardasha)</small>
              <strong>{currentDasha.antardasha.planet}</strong>
            </div>
            <div className={styles.dashaLevel}>
              <small>प्रत्यंतरदशा (Pratyantardasha)</small>
              <strong>{currentDasha.pratyantardasha.planet}</strong>
            </div>
          </div>
          <p style={{ marginTop: '1rem', color: 'var(--text-light)', fontSize: '0.9rem' }}>
            यह दशा {formatDate(currentDasha.pratyantardasha.endDate)} तक चलेगी।
          </p>
        </div>
      )}

      <h4 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
        विंशोत्तरी महादशा कालक्रम (Vimshottari Timeline)
      </h4>
      
      <div className={styles.dashaList}>
        {mahadashas.map((mahadasha, mIndex) => (
          <div key={mIndex} className={styles.mahadashaItem}>
            <div 
              className={styles.mahadashaHeader}
              onClick={() => toggleMahadasha(mIndex)}
            >
              <span>{expandedMahadasha === mIndex ? '▼' : '▶'} {mahadasha.planet} महादशा</span>
              <span className={styles.dateRange}>
                {formatDate(mahadasha.startDate)} - {formatDate(mahadasha.endDate)}
              </span>
            </div>
            
            {expandedMahadasha === mIndex && (
              <div className={styles.antardashaContainer}>
                {mahadasha.antardashas.map((antardasha, aIndex) => (
                  <div key={aIndex} className={styles.antardashaItem}>
                    <div 
                      className={styles.antardashaHeader}
                      onClick={(e) => toggleAntardasha(e, aIndex)}
                    >
                      <span>{expandedAntardasha === aIndex ? '▼' : '▶'} {antardasha.planet} अंतरदशा</span>
                      <span className={styles.dateRange}>
                        {formatDate(antardasha.startDate)} - {formatDate(antardasha.endDate)}
                      </span>
                    </div>
                    
                    {expandedAntardasha === aIndex && (
                      <div className={styles.pratContainer}>
                        {antardasha.pratyantardashas.map((prat, pIndex) => (
                          <div key={pIndex} className={styles.pratItem}>
                            <span>• {prat.planet} प्रत्यंतरदशा</span>
                            <span className={styles.dateRange}>
                              {formatDate(prat.startDate)} - {formatDate(prat.endDate)}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
