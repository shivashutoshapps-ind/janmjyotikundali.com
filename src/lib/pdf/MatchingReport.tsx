import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import { MatchingResult } from '../astrology/matching/matchingTypes';
import { pdfStyles as styles } from './styles';
import { PDFHeader, PDFFooter, PDFDisclaimer } from './components/Common';

interface MatchingReportProps {
  data: MatchingResult;
}

const formatBirthData = (birthData: any) => {
  return `${birthData.date} ${birthData.time}, ${birthData.place.name}`;
};

export const MatchingReport: React.FC<MatchingReportProps> = ({ data }) => {
  const boyManglik = data.boyDoshas.find(d => d.name === 'Manglik Dosha')?.isPresent;
  const girlManglik = data.girlDoshas.find(d => d.name === 'Manglik Dosha')?.isPresent;
  const isManglikMatch = boyManglik === girlManglik;
  
  return (
    <Document title="Ashtakoot_Guna_Milan">
      <Page size="A4" style={styles.page}>
        <PDFHeader title="अष्टकूट गुण मिलान (Ashtakoot Guna Milan)" />

        <View style={styles.grid}>
          <View style={[styles.gridItem, { width: '50%' }]}>
            <Text style={styles.sectionTitle}>वर (Boy)</Text>
            <Text style={styles.label}>नाम (Name): <Text style={styles.value}>{data.boyData.name}</Text></Text>
            <Text style={styles.label}>जन्म (Birth): <Text style={styles.value}>{formatBirthData(data.boyData)}</Text></Text>
            <Text style={styles.label}>राशि (Sign): <Text style={styles.value}>{data.boyRashi.rashi}</Text></Text>
            <Text style={styles.label}>नक्षत्र (Star): <Text style={styles.value}>{data.boyNakshatra.nakshatra} (चरण {data.boyNakshatra.pada})</Text></Text>
          </View>
          <View style={[styles.gridItem, { width: '50%' }]}>
            <Text style={styles.sectionTitle}>वधू (Girl)</Text>
            <Text style={styles.label}>नाम (Name): <Text style={styles.value}>{data.girlData.name}</Text></Text>
            <Text style={styles.label}>जन्म (Birth): <Text style={styles.value}>{formatBirthData(data.girlData)}</Text></Text>
            <Text style={styles.label}>राशि (Sign): <Text style={styles.value}>{data.girlRashi.rashi}</Text></Text>
            <Text style={styles.label}>नक्षत्र (Star): <Text style={styles.value}>{data.girlNakshatra.nakshatra} (चरण {data.girlNakshatra.pada})</Text></Text>
          </View>
        </View>

        <View style={{ marginTop: 20, marginBottom: 20, padding: 15, backgroundColor: '#fef3c7', borderRadius: 8, textAlign: 'center' }}>
          <Text style={{ fontSize: 14, color: '#92400e', marginBottom: 5 }}>कुल गुण (Total Score)</Text>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#b45309' }}>{data.totalScore} / 36</Text>
        </View>

        <Text style={styles.sectionTitle}>अष्टकूट मिलान (Ashtakoot Details)</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCol}>कूट (Koot)</Text>
            <Text style={styles.tableCol}>अधिकतम (Max)</Text>
            <Text style={styles.tableCol}>प्राप्त (Score)</Text>
            <Text style={[styles.tableColLast, { flex: 2 }]}>विवरण (Details)</Text>
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
            <Text style={styles.label}>वर (Boy)</Text>
            <Text style={styles.value}>
              {boyManglik ? 'मांगलिक (Yes)' : 'मांगलिक नहीं (No)'}
            </Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.label}>वधू (Girl)</Text>
            <Text style={styles.value}>
              {girlManglik ? 'मांगलिक (Yes)' : 'मांगलिक नहीं (No)'}
            </Text>
          </View>
        </View>
        
        <View style={isManglikMatch ? styles.alertSuccess : styles.alertDanger}>
          <Text>
            {isManglikMatch 
              ? 'मांगलिक दृष्टिकोण से यह विवाह अनुकूल है। (Manglik compatibility is favorable)'
              : 'मांगलिक दोष के कारण इस विवाह में सावधानी आवश्यक है। (Caution required due to Manglik mismatch)'}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>निष्कर्ष (Conclusion)</Text>
        <View style={data.totalScore >= 18 ? styles.alertSuccess : styles.alertDanger}>
          <Text>{data.interpretation}</Text>
        </View>

        <PDFDisclaimer />
        <PDFFooter />
      </Page>
    </Document>
  );
};
