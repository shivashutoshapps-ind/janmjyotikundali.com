import React from 'react';
import { Text, View, Image } from '@react-pdf/renderer';
import { pdfStyles as styles } from '../styles';

interface PDFHeaderProps {
  title: string;
}

export const PDFHeader: React.FC<PDFHeaderProps> = ({ title }) => (
  <View style={styles.header}>
    <View>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerSubtitle}>जन्मज्योति (JanmJyotiKundali.com)</Text>
    </View>
    <View>
      <Text style={styles.headerSubtitle}>आपकी जन्मकुंडली, आपके ग्रह, आपकी दिशा।</Text>
    </View>
  </View>
);

export const PDFFooter: React.FC = () => (
  <View style={styles.footer} fixed>
    <Text>JanmJyotiKundali.com</Text>
    <Text>Technology by Shivashutosh AI Labs</Text>
    <Text render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
  </View>
);

export const PDFDisclaimer: React.FC = () => (
  <View style={styles.disclaimer} wrap={false}>
    <Text>
      यह रिपोर्ट पारंपरिक वैदिक ज्योतिषीय गणना पर आधारित है। इसे चिकित्सा, कानूनी, वित्तीय या अन्य पेशेवर सलाह का विकल्प नहीं माना जाना चाहिए।
    </Text>
  </View>
);
