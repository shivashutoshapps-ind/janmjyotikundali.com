'use client';

import { useState } from 'react';
import { KundliForm } from '@/components/KundliForm/KundliForm';
import { PDFDownloadButton } from '@/components/PDFDownloadButton/PDFDownloadButton';
import { MatchingReport } from '@/lib/pdf/MatchingReport';
import { calculateMatchingAction } from '@/app/actions/astrology';
import { BirthData } from '@/lib/astrology/types';
import { MatchingResult } from '@/lib/astrology/matching/matchingTypes';
import styles from './MatchingClient.module.css';

export function MatchingClient() {
  const [boyData, setBoyData] = useState<BirthData | null>(null);
  const [girlData, setGirlData] = useState<BirthData | null>(null);
  const [result, setResult] = useState<MatchingResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCalculate = async () => {
    if (!boyData || !girlData) {
      setError('कृपया वर और वधू दोनों का जन्म विवरण दर्ज करें।');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const matchResult = await calculateMatchingAction(boyData, girlData);
      if (matchResult) {
        setResult(matchResult);
      } else {
        setError('मिलान की गणना करने में विफल।');
      }
    } catch (e) {
      setError('सर्वर त्रुटि। कृपया पुनः प्रयास करें।');
    } finally {
      setIsLoading(false);
    }
  };

  const renderKootRow = (koot: any) => {
    const isFull = koot.obtainedScore === koot.maxScore;
    const isZero = koot.obtainedScore === 0;
    
    return (
      <tr key={koot.name}>
        <td className={styles.kootName}>{koot.name}</td>
        <td className={styles.kootScore}>{koot.maxScore}</td>
        <td className={`${styles.kootScore} ${isFull ? styles.fullScore : ''} ${isZero ? styles.zeroScore : ''}`}>
          {koot.obtainedScore}
        </td>
        <td>{koot.explanation}</td>
      </tr>
    );
  };

  return (
    <div className={styles.container}>
      {!result ? (
        <>
          <div className={styles.formsGrid}>
            <div className={styles.formCard}>
              <h3>वर (Boy) का विवरण</h3>
              <KundliForm 
                onSubmitCallback={(data) => {
                  setBoyData(data);
                  if (girlData) setError('');
                }} 
                buttonText={boyData ? "वर का विवरण सहेजा गया ✓" : "सहेजें"}
              />
            </div>
            <div className={styles.formCard}>
              <h3>वधू (Girl) का विवरण</h3>
              <KundliForm 
                onSubmitCallback={(data) => {
                  setGirlData(data);
                  if (boyData) setError('');
                }} 
                buttonText={girlData ? "वधू का विवरण सहेजा गया ✓" : "सहेजें"}
              />
            </div>
          </div>

          {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}

          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <button 
              onClick={handleCalculate} 
              disabled={isLoading || !boyData || !girlData}
              style={{
                padding: '0.75rem 2rem',
                fontSize: '1.1rem',
                backgroundColor: (isLoading || !boyData || !girlData) ? 'var(--border)' : 'var(--primary)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                cursor: (isLoading || !boyData || !girlData) ? 'not-allowed' : 'pointer'
              }}
            >
              {isLoading ? 'गणना हो रही है...' : 'कुंडली मिलान करें (Calculate Match)'}
            </button>
          </div>
        </>
      ) : (
        <div className={styles.resultSection}>
          <div style={{ textAlign: 'center', marginBottom: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <PDFDownloadButton 
              document={<MatchingReport data={result} />} 
              fileName={`JanmJyoti-Matching-${result.boyData.name.replace(/[^a-zA-Z0-9]/g, '_')}-${result.girlData.name.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`}
            />
            <button 
              onClick={() => setResult(null)}
              style={{
                background: 'none',
                border: '1px solid var(--primary)',
                color: 'var(--primary)',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer'
              }}
            >
              ← नया मिलान करें (New Match)
            </button>
          </div>

          <div className={styles.scoreBanner}>
            <h2>{result.totalScore} / 36</h2>
            <p>गुण मिले (Guna Matched)</p>
            <div className={styles.interpretation}>{result.interpretation}</div>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h4>वर (Boy)</h4>
              <p>राशि: {result.boyRashi.rashi}</p>
              <p>नक्षत्र: {result.boyNakshatra.nakshatra} (चरण {result.boyNakshatra.pada})</p>
              {result.boyDoshas.length > 0 ? (
                <div className={styles.doshaWarning}>मांगलिक दोष उपस्थित है</div>
              ) : (
                <div className={styles.doshaClear}>मांगलिक दोष नहीं है</div>
              )}
            </div>
            <div className={styles.infoCard}>
              <h4>वधू (Girl)</h4>
              <p>राशि: {result.girlRashi.rashi}</p>
              <p>नक्षत्र: {result.girlNakshatra.nakshatra} (चरण {result.girlNakshatra.pada})</p>
              {result.girlDoshas.length > 0 ? (
                <div className={styles.doshaWarning}>मांगलिक दोष उपस्थित है</div>
              ) : (
                <div className={styles.doshaClear}>मांगलिक दोष नहीं है</div>
              )}
            </div>
          </div>

          <table className={styles.kootTable}>
            <thead>
              <tr>
                <th>कूट (Koot)</th>
                <th style={{textAlign: 'center'}}>अधिकतम अंक (Max)</th>
                <th style={{textAlign: 'center'}}>प्राप्त अंक (Obtained)</th>
                <th>विवरण (Explanation)</th>
              </tr>
            </thead>
            <tbody>
              {renderKootRow(result.varna)}
              {renderKootRow(result.vashya)}
              {renderKootRow(result.tara)}
              {renderKootRow(result.yoni)}
              {renderKootRow(result.grahaMaitri)}
              {renderKootRow(result.gana)}
              {renderKootRow(result.bhakoot)}
              {renderKootRow(result.nadi)}
            </tbody>
          </table>

          <div className={styles.disclaimer}>
            <strong>अस्वीकरण:</strong> यह अष्टकूट गुण मिलान पारंपरिक वैदिक ज्योतिष नियमों पर आधारित है। इसे पूर्ण अंतिम निर्णय न मानें। विवाह जैसे महत्वपूर्ण निर्णय के लिए विद्वान ज्योतिषी से दोनों कुंडलियों (ग्रह दृष्टि, दशा, और नवमांश) का संपूर्ण विश्लेषण अवश्य करवाएं।
          </div>
        </div>
      )}
    </div>
  );
}
