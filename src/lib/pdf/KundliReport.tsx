import React from 'react';
import { Document, Page, Text, View, Svg, Rect, Line, Polygon } from '@react-pdf/renderer';
import { KundliResult } from '../astrology/types';
import { pdfStyles as styles } from './styles';
import { PDFHeader, PDFFooter, PDFDisclaimer } from './components/Common';

interface KundliReportProps {
  data: KundliResult;
}

const RASHI_NAMES = [
  'मेष', 'वृषभ', 'मिथुन', 'कर्क',
  'सिंह', 'कन्या', 'तुला', 'वृश्चिक',
  'धनु', 'मकर', 'कुंभ', 'मीन'
];

const getSignNumber = (signStr: string) => {
  const index = RASHI_NAMES.findIndex(r => signStr.startsWith(r));
  return index >= 0 ? index + 1 : '';
};

const shortNames: Record<string, string> = {
  'सूर्य (Sun)': 'Su',
  'चंद्र (Moon)': 'Mo',
  'मंगल (Mars)': 'Ma',
  'बुध (Mercury)': 'Me',
  'गुरु (Jupiter)': 'Ju',
  'शुक्र (Venus)': 'Ve',
  'शनि (Saturn)': 'Sa',
  'राहु (Rahu)': 'Ra',
  'केतु (Ketu)': 'Ke'
};

const NorthIndianChartPDF = ({ result }: { result: KundliResult }) => {
  const W = 300;
  const H = 300;
  
  const housePositions = [
    { h: 1, x: 150, y: 75 },
    { h: 2, x: 75, y: 37 },
    { h: 3, x: 37, y: 75 },
    { h: 4, x: 75, y: 150 },
    { h: 5, x: 37, y: 225 },
    { h: 6, x: 75, y: 262 },
    { h: 7, x: 150, y: 225 },
    { h: 8, x: 225, y: 262 },
    { h: 9, x: 262, y: 225 },
    { h: 10, x: 225, y: 150 },
    { h: 11, x: 262, y: 75 },
    { h: 12, x: 225, y: 37 },
  ];

  return (
    <View style={{ width: W, height: H, margin: '0 auto', position: 'relative', marginBottom: 20 }}>
      <Svg viewBox={`0 0 ${W} ${H}`} width={W} height={H}>
        <Rect x="0" y="0" width={W} height={H} stroke="#d97706" fill="none" strokeWidth={1.5} />
        <Line x1="0" y1="0" x2={W} y2={H} stroke="#d97706" strokeWidth={1} />
        <Line x1={W} y1="0" x2="0" y2={H} stroke="#d97706" strokeWidth={1} />
        <Polygon points={`${W/2},0 ${W},${H/2} ${W/2},${H} 0,${H/2}`} stroke="#d97706" fill="none" strokeWidth={1.5} />
      </Svg>
      
      {housePositions.map((pos) => {
        const houseData = result.houses.find(h => h.houseNumber === pos.h);
        if (!houseData) return null;
        
        const signNum = getSignNumber(houseData.sign);
        const planetText = houseData.planets.map(p => shortNames[p] || p).join(', ');
        
        return (
          <View key={pos.h} style={{ position: 'absolute', left: pos.x - 30, top: pos.y - 15, width: 60, alignItems: 'center' }}>
            <Text style={{ fontSize: 9, color: '#92400e', fontWeight: 'bold' }}>{signNum}</Text>
            <Text style={{ fontSize: 8, color: '#1f2937' }}>{planetText}</Text>
          </View>
        );
      })}
    </View>
  );
};

export const KundliReport: React.FC<KundliReportProps> = ({ data }) => {
  return (
    <Document title={`Kundli_${data.birthData.name}`}>
      <Page size="A4" style={styles.page}>
        <PDFHeader title="जन्म कुंडली (Birth Chart)" />
        
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Text style={styles.label}>नाम (Name)</Text>
            <Text style={styles.value}>{data.birthData.name}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.label}>जन्म स्थान (Birth Place)</Text>
            <Text style={styles.value}>{data.birthData.place.name}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.label}>दिनांक (Date)</Text>
            <Text style={styles.value}>{data.birthData.date}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.label}>समय (Time)</Text>
            <Text style={styles.value}>{data.birthData.time}</Text>
          </View>
        </View>
        
        <View style={[styles.grid, { backgroundColor: '#fef3c7', padding: 10, borderRadius: 5 }]}>
          <View style={styles.gridItem}>
            <Text style={styles.label}>लग्न (Ascendant)</Text>
            <Text style={styles.value}>{data.lagna.lagna}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.label}>चंद्र राशि (Moon Sign)</Text>
            <Text style={styles.value}>{data.rashi.rashi}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.label}>नक्षत्र (Star)</Text>
            <Text style={styles.value}>{data.nakshatra.nakshatra} (चरण {data.nakshatra.pada})</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>जन्म चक्र (Lagna Chart)</Text>
        <NorthIndianChartPDF result={data} />
        
        <Text style={styles.sectionTitle}>ग्रह स्थिति (Planetary Positions)</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCol}>ग्रह (Planet)</Text>
            <Text style={styles.tableCol}>राशि (Sign)</Text>
            <Text style={styles.tableCol}>अंश (Degree)</Text>
            <Text style={styles.tableColLast}>भाव (House)</Text>
          </View>
          {data.planets.map((p, i) => (
            <View key={i} style={styles.tableRow} wrap={false}>
              <Text style={styles.tableCol}>{p.planet}</Text>
              <Text style={styles.tableCol}>{p.rashi}</Text>
              <Text style={styles.tableCol}>{p.degree.toFixed(2)}°</Text>
              <Text style={styles.tableColLast}>{p.house}</Text>
            </View>
          ))}
        </View>

        {data.doshas.map((dosha, i) => (
          <View key={i} style={dosha.isPresent ? styles.alertDanger : styles.alertSuccess} wrap={false}>
            <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>{dosha.name}: {dosha.isPresent ? 'हाँ (Yes)' : 'नहीं (No)'}</Text>
            <Text style={{ fontSize: 9 }}>{dosha.description}</Text>
          </View>
        ))}
        
        <PDFDisclaimer />
        <PDFFooter />
      </Page>
      
      <Page size="A4" style={styles.page}>
        <PDFHeader title="विंशोत्तरी महादशा (Vimshottari Dasha)" />
        
        {data.currentDasha && (
          <View style={{ backgroundColor: '#fef3c7', padding: 15, marginBottom: 20, borderRadius: 5 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#b45309', marginBottom: 10 }}>वर्तमान दशा (Current Dasha)</Text>
            <Text style={{ fontSize: 10 }}>महादशा (Mahadasha): <Text style={{ fontWeight: 'bold' }}>{data.currentDasha.mahadasha.planet}</Text></Text>
            <Text style={{ fontSize: 10 }}>अंतरदशा (Antardasha): <Text style={{ fontWeight: 'bold' }}>{data.currentDasha.antardasha.planet}</Text></Text>
            <Text style={{ fontSize: 10 }}>प्रत्यंतरदशा (Pratyantardasha): <Text style={{ fontWeight: 'bold' }}>{data.currentDasha.pratyantardasha.planet}</Text></Text>
          </View>
        )}
        
        <Text style={styles.sectionTitle}>महादशा कालक्रम (Timeline)</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCol}>महादशा (Mahadasha)</Text>
            <Text style={styles.tableCol}>प्रारंभ (Start Date)</Text>
            <Text style={styles.tableColLast}>अंत (End Date)</Text>
          </View>
          {data.mahadashas.map((dasha, i) => (
            <View key={i} style={styles.tableRow} wrap={false}>
              <Text style={styles.tableCol}>{dasha.planet}</Text>
              <Text style={styles.tableCol}>{new Date(dasha.startDate).toLocaleDateString('hi-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
              <Text style={styles.tableColLast}>{new Date(dasha.endDate).toLocaleDateString('hi-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
            </View>
          ))}
        </View>
        
        <PDFDisclaimer />
        <PDFFooter />
      </Page>
    </Document>
  );
};
