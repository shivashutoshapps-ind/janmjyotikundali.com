'use client';

import { useState } from 'react';
import { KundliForm } from '@/components/KundliForm/KundliForm';
import { PDFDownloadButton } from '@/components/PDFDownloadButton/PDFDownloadButton';
import { MatchingReport } from '@/lib/pdf/MatchingReport';
import { calculateMatchingAction } from '@/app/actions/astrology';
import { BirthData } from '@/lib/astrology/types';
import { MatchingResult } from '@/lib/astrology/matching/matchingTypes';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import styles from './MatchingClient.module.css';

export function MatchingClient() {
  const { t } = useLanguage();
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
        setError(t('common.calcError', 'गणना पूरी नहीं हो सकी। कृपया दोबारा प्रयास करें।'));
      }
    } catch (e) {
      setError(t('common.errorCalc', 'गणना पूरी नहीं हो सकी। कृपया दोबारा प्रयास करें।'));
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
              <h3>{t('matching.boy', 'वर (Boy)')} {t('common.details', 'का विवरण')}</h3>
              <KundliForm 
                onSubmitCallback={(data) => {
                  setBoyData(data);
                  if (girlData) setError('');
                }} 
                buttonText={boyData ? `✓` : t('common.submit', 'सहेजें')}
              />
            </div>
            <div className={styles.formCard}>
              <h3>{t('matching.girl', 'वधू (Girl)')} {t('common.details', 'का विवरण')}</h3>
              <KundliForm 
                onSubmitCallback={(data) => {
                  setGirlData(data);
                  if (boyData) setError('');
                }} 
                buttonText={girlData ? `✓` : t('common.submit', 'सहेजें')}
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
              {isLoading ? t('common.loading', 'गणना हो रही है...') : t('forms.matchBtn', 'कुंडली मिलान करें')}
            </button>
          </div>
        </>
      ) : (
        <div className={styles.resultSection}>
          <div style={{ textAlign: 'center', marginBottom: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <PDFDownloadButton 
              document={<MatchingReport data={result} t={t} />} 
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
              ← {t('common.back', 'नया मिलान करें')}
            </button>
          </div>

          <div className={styles.scoreBanner}>
            <h2>{result.totalScore} / 36</h2>
            <p>{t('matching.totalScore', 'गुण मिले')}</p>
            <div className={styles.interpretation}>{result.interpretation}</div>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h4>{t('matching.boy', 'वर')}</h4>
              <p>{t('astrology.rashi')}: {result.boyRashi.rashi}</p>
              <p>{t('astrology.nakshatra')}: {result.boyNakshatra.nakshatra} ({t('kundli.pada')} {result.boyNakshatra.pada})</p>
              {result.boyDoshas.length > 0 ? (
                <div className={styles.doshaWarning}>{t('matching.manglikYes', 'मांगलिक दोष उपस्थित है')}</div>
              ) : (
                <div className={styles.doshaClear}>{t('matching.manglikNo', 'मांगलिक दोष नहीं है')}</div>
              )}
            </div>
            <div className={styles.infoCard}>
              <h4>{t('matching.girl', 'वधू')}</h4>
              <p>{t('astrology.rashi')}: {result.girlRashi.rashi}</p>
              <p>{t('astrology.nakshatra')}: {result.girlNakshatra.nakshatra} ({t('kundli.pada')} {result.girlNakshatra.pada})</p>
              {result.girlDoshas.length > 0 ? (
                <div className={styles.doshaWarning}>{t('matching.manglikYes', 'मांगलिक दोष उपस्थित है')}</div>
              ) : (
                <div className={styles.doshaClear}>{t('matching.manglikNo', 'मांगलिक दोष नहीं है')}</div>
              )}
            </div>
          </div>

          <table className={styles.kootTable}>
            <thead>
              <tr>
                <th>{t('matching.koot', 'कूट (Koot)')}</th>
                <th style={{textAlign: 'center'}}>{t('common.max', 'अधिकतम अंक (Max)')}</th>
                <th style={{textAlign: 'center'}}>{t('common.score', 'प्राप्त अंक (Obtained)')}</th>
                <th>{t('common.details', 'विवरण (Explanation)')}</th>
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
            <strong>{t('footer.disclaimer', 'अस्वीकरण')}:</strong> {t('rashifal.disclaimer', 'यह अष्टकूट गुण मिलान पारंपरिक वैदिक ज्योतिष नियमों पर आधारित है। इसे पूर्ण अंतिम निर्णय न मानें।')}
          </div>
        </div>
      )}
    </div>
  );
}
