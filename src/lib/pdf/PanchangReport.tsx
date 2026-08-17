import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import { PanchangResult } from '../astrology/types';
import { pdfStyles as styles } from './styles';
import { PDFHeader, PDFFooter, PDFDisclaimer } from './components/Common';

interface PanchangReportProps {
  data: PanchangResult;
  locationName: string;
  t: (key: string, fallback?: string) => string;
}

const formatDate = (isoStr: string) => {
  return new Date(isoStr).toLocaleString('hi-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const formatTime = (isoStr: string) => {
  if (!isoStr) return 'N/A';
  return new Date(isoStr).toLocaleTimeString('hi-IN', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const PanchangReport: React.FC<PanchangReportProps> = ({ data, locationName, t }) => {
  return (
    <Document title={`Panchang_${data.date}`}>
      <Page size="A4" style={styles.page}>
        <PDFHeader title={t('panchang.title', 'दैनिक पंचांग (Daily Panchang)')} t={t} />

        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Text style={styles.label}>{t('common.date', 'दिनांक (Date)')}</Text>
            <Text style={styles.value}>{new Date(data.date).toLocaleDateString('hi-IN', { dateStyle: 'long' })}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.label}>{t('common.place', 'स्थान (Location)')}</Text>
            <Text style={styles.value}>{locationName}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.label}>{t('astrology.day', 'वार (Day)')}</Text>
            <Text style={styles.value}>{data.vara}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>{t('panchang.fiveLimbs', 'पंचांग के पांच अंग (Five Limbs)')}</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCol}>{t('panchang.limb', 'अंग')}</Text>
            <Text style={styles.tableColLast}>{t('common.details', 'विवरण')}</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>{t('astrology.tithi', 'तिथि (Tithi)')}</Text>
            <Text style={styles.tableColLast}>{data.tithi.name}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>{t('astrology.nakshatra', 'नक्षत्र (Nakshatra)')}</Text>
            <Text style={styles.tableColLast}>{data.nakshatra.nakshatra}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>{t('astrology.yoga', 'योग (Yoga)')}</Text>
            <Text style={styles.tableColLast}>{data.yoga.name}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>{t('astrology.karana', 'करण (Karana)')}</Text>
            <Text style={styles.tableColLast}>{data.karana.name}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>{t('panchang.sunMoon', 'सूर्य और चंद्र (Sun & Moon)')}</Text>
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Text style={styles.label}>{t('panchang.sunrise', 'सूर्योदय (Sunrise)')}</Text>
            <Text style={styles.value}>{formatTime(data.sunrise)}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.label}>{t('panchang.sunset', 'सूर्यास्त (Sunset)')}</Text>
            <Text style={styles.value}>{formatTime(data.sunset)}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.label}>{t('panchang.moonrise', 'चंद्रोदय (Moonrise)')}</Text>
            <Text style={styles.value}>{formatTime(data.moonrise)}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.label}>{t('panchang.moonset', 'चंद्रास्त (Moonset)')}</Text>
            <Text style={styles.value}>{formatTime(data.moonset)}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>{t('panchang.inauspicious', 'अशुभ समय (Inauspicious Timings)')}</Text>
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Text style={styles.label}>{t('panchang.rahuKaal', 'राहु काल (Rahu Kaal)')}</Text>
            <Text style={styles.value}>{formatTime(data.rahuKaal.start)} - {formatTime(data.rahuKaal.end)}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.label}>यमगंड (Yamaganda)</Text>
            <Text style={styles.value}>{formatTime(data.yamaganda.start)} - {formatTime(data.yamaganda.end)}</Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.label}>गुलिक काल (Gulika Kaal)</Text>
            <Text style={styles.value}>{formatTime(data.gulika.start)} - {formatTime(data.gulika.end)}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>दिन के चौघड़िया (Day Choghadiya)</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCol}>नाम</Text>
            <Text style={styles.tableColLast}>समय</Text>
          </View>
          {data.dayChoghadiya.map((chog, i) => (
            <View key={i} style={styles.tableRow} wrap={false}>
              <Text style={styles.tableCol}>{chog.name}</Text>
              <Text style={styles.tableColLast}>{formatTime(chog.start)} - {formatTime(chog.end)}</Text>
            </View>
          ))}
        </View>
        
        <Text style={styles.sectionTitle}>रात के चौघड़िया (Night Choghadiya)</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCol}>नाम</Text>
            <Text style={styles.tableColLast}>समय</Text>
          </View>
          {data.nightChoghadiya.map((chog, i) => (
            <View key={i} style={styles.tableRow} wrap={false}>
              <Text style={styles.tableCol}>{chog.name}</Text>
              <Text style={styles.tableColLast}>{formatTime(chog.start)} - {formatTime(chog.end)}</Text>
            </View>
          ))}
        </View>

        <PDFDisclaimer t={t} />
        <PDFFooter />
      </Page>
    </Document>
  );
};
