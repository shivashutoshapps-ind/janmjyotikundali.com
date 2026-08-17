import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import { MatchingResult } from '../astrology/matching/matchingTypes';
import { pdfStyles as styles } from './styles';
import { PDFHeader, PDFFooter, PDFDisclaimer } from './components/Common';

interface MatchingReportProps {
  data: MatchingResult;
  t: (key: string, fallback?: string) => string;
}

const formatBirthData = (birthData: any) => {
  return `${birthData.date} ${birthData.time}, ${birthData.place.name}`;
};

export const MatchingReport: React.FC<MatchingReportProps> = ({ data, t }) => {
  const boyManglik = data.boyDoshas.find(d => d.name === 'Manglik Dosha')?.isPresent;
  const girlManglik = data.girlDoshas.find(d => d.name === 'Manglik Dosha')?.isPresent;
  const isManglikMatch = boyManglik === girlManglik;
  
  return (
    <Document title="Ashtakoot_Guna_Milan">
      <Page size="A4" style={styles.page}>
        <PDFHeader title={t('matching.title', 'अष्टकूट गुण मिलान (Ashtakoot Guna Milan)')} t={t} />

        <View style={styles.grid}>
          <View style={[styles.gridItem, { width: '50%' }]}>
            <Text style={styles.sectionTitle}>{t('matching.boy', 'वर (Boy)')}</Text>
            <Text style={styles.label}>{t('common.name', 'नाम (Name)')}: <Text style={styles.value}>{data.boyData.name}</Text></Text>
            <Text style={styles.label}>{t('common.date', 'जन्म (Birth)')}: <Text style={styles.value}>{formatBirthData(data.boyData)}</Text></Text>
            <Text style={styles.label}>{t('astrology.rashi', 'राशि (Sign)')}: <Text style={styles.value}>{data.boyRashi.rashi}</Text></Text>
            <Text style={styles.label}>{t('astrology.nakshatra', 'नक्षत्र (Star)')}: <Text style={styles.value}>{data.boyNakshatra.nakshatra} ({t('kundli.pada', 'चरण')} {data.boyNakshatra.pada})</Text></Text>
          </View>
          <View style={[styles.gridItem, { width: '50%' }]}>
            <Text style={styles.sectionTitle}>{t('matching.girl', 'वधू (Girl)')}</Text>
            <Text style={styles.label}>{t('common.name', 'नाम (Name)')}: <Text style={styles.value}>{data.girlData.name}</Text></Text>
            <Text style={styles.label}>{t('common.date', 'जन्म (Birth)')}: <Text style={styles.value}>{formatBirthData(data.girlData)}</Text></Text>
            <Text style={styles.label}>{t('astrology.rashi', 'राशि (Sign)')}: <Text style={styles.value}>{data.girlRashi.rashi}</Text></Text>
            <Text style={styles.label}>{t('astrology.nakshatra', 'नक्षत्र (Star)')}: <Text style={styles.value}>{data.girlNakshatra.nakshatra} ({t('kundli.pada', 'चरण')} {data.girlNakshatra.pada})</Text></Text>
          </View>
        </View>

        <View style={{ marginTop: 20, marginBottom: 20, padding: 15, backgroundColor: '#fef3c7', borderRadius: 8, textAlign: 'center' }}>
          <Text style={{ fontSize: 14, color: '#92400e', marginBottom: 5 }}>{t('matching.totalScore', 'कुल गुण (Total Score)')}</Text>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#b45309' }}>{data.totalScore} / 36</Text>
        </View>

        <Text style={styles.sectionTitle}>{t('matching.koot', 'अष्टकूट मिलान (Ashtakoot Details)')}</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCol}>{t('matching.koot', 'कूट (Koot)')}</Text>
            <Text style={styles.tableCol}>{t('common.max', 'अधिकतम (Max)')}</Text>
            <Text style={styles.tableCol}>{t('common.score', 'प्राप्त (Score)')}</Text>
            <Text style={[styles.tableColLast, { flex: 2 }]}>{t('common.details', 'विवरण (Details)')}</Text>
          </View>
          
          {[data.varna, data.vashya, data.tara, data.yoni, data.grahaMaitri, data.gana, data.bhakoot, data.nadi].map((koot, i) => (
            <View key={i} style={styles.tableRow} wrap={false}>
              <Text style={styles.tableCol}>{koot.name}</Text>
              <Text style={styles.tableCol}>{koot.maxScore}</Text>
              <Text style={styles.tableCol}>{koot.obtainedScore}</Text>
              <Text style={[styles.tableColLast, { flex: 2, fontSize: 8 }]}>{koot.explanation}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>मांगलिक दोष (Manglik Dosha)</Text>
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Text style={styles.label}>{t('matching.boy', 'वर (Boy)')}</Text>
            <Text style={styles.value}>
              {boyManglik ? t('matching.manglikYes', 'मांगलिक') : t('matching.manglikNo', 'मांगलिक नहीं')}
            </Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.label}>{t('matching.girl', 'वधू (Girl)')}</Text>
            <Text style={styles.value}>
              {girlManglik ? t('matching.manglikYes', 'मांगलिक') : t('matching.manglikNo', 'मांगलिक नहीं')}
            </Text>
          </View>
        </View>
        
        <View style={isManglikMatch ? styles.alertSuccess : styles.alertDanger}>
          <Text>
            {isManglikMatch 
              ? 'मांगलिक दृष्टिकोण से यह विवाह अनुकूल है।'
              : 'मांगलिक दोष के कारण इस विवाह में सावधानी आवश्यक है।'}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>{t('common.details', 'निष्कर्ष (Conclusion)')}</Text>
        <View style={data.totalScore >= 18 ? styles.alertSuccess : styles.alertDanger}>
          <Text>{data.interpretation}</Text>
        </View>

        <PDFDisclaimer t={t} />
        <PDFFooter />
      </Page>
    </Document>
  );
};
