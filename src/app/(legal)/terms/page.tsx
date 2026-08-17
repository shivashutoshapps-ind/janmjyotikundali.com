import { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'नियम व शर्तें (Terms & Conditions)',
  description: 'JanmJyotiKundali.com उपयोग के नियम और शर्तें।',
};

export default function TermsPage() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>नियम व शर्तें (Terms & Conditions)</h1>
      </div>
      <div className={styles.content}>
        <h2>1. स्वीकृति (Acceptance of Terms)</h2>
        <p>
          JanmJyotiKundali.com वेबसाइट का उपयोग करके, आप इन नियमों और शर्तों से बंधे होने के लिए सहमत हैं। 
          यदि आप इनमें से किसी भी शर्त से असहमत हैं, तो कृपया हमारी वेबसाइट का उपयोग न करें।
        </p>
        
        <h2>2. सेवाओं का उपयोग (Use of Services)</h2>
        <p>
          हमारी वेबसाइट पर उपलब्ध कुण्डली, पंचांग, और मिलान सेवाएँ व्यक्तिगत उपयोग के लिए हैं। 
          आप इस साइट का उपयोग किसी भी गैर-कानूनी कार्य के लिए नहीं करेंगे।
        </p>

        <h2>3. ज्योतिषीय सलाह (Astrological Advice)</h2>
        <p>
          JanmJyotiKundali.com पर प्रदान की गई ज्योतिषीय गणनाएँ केवल मार्गदर्शन और शैक्षिक उद्देश्यों के लिए हैं। 
          यह पेशेवर चिकित्सा, कानूनी या वित्तीय सलाह का विकल्प नहीं है। हम 100% सटीक भविष्यवाणियों या किसी 
          निश्चित परिणाम की गारंटी नहीं देते हैं।
        </p>

        <h2>4. बौद्धिक संपदा (Intellectual Property)</h2>
        <p>
          JanmJyotiKundali.com की सामग्री, डिज़ाइन, और कोड हमारे बौद्धिक संपदा अधिकार हैं। 
          पूर्व लिखित अनुमति के बिना इसका व्यावसायिक उपयोग या प्रतिलिपि बनाना वर्जित है।
        </p>

        <h2>5. दायित्व की सीमा (Limitation of Liability)</h2>
        <p>
          JanmJyotiKundali.com या इससे जुड़े डेवलपर वेबसाइट के उपयोग या इस पर आधारित 
          निर्णयों से होने वाले किसी भी प्रत्यक्ष या अप्रत्यक्ष नुकसान के लिए जिम्मेदार नहीं होंगे।
        </p>

        <h2>संपर्क करें</h2>
        <p>
          यदि आपके पास इन नियमों के संबंध में कोई प्रश्न हैं, तो संपर्क करें:
          <br />
          <strong>ईमेल:</strong> shivashutosh.apps@gmail.com
        </p>
      </div>
    </main>
  );
}
