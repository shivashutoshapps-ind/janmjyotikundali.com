import { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'प्राइवेसी पॉलिसी (Privacy Policy)',
  description: 'JanmJyotiKundali.com की प्राइवेसी पॉलिसी। आपकी निजता हमारी प्राथमिकता है।',
};

export default function PrivacyPage() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>प्राइवेसी पॉलिसी (Privacy Policy)</h1>
      </div>
      <div className={styles.content}>
        <h2>1. जानकारी का संग्रह (Information Collection)</h2>
        <p>
          JanmJyotiKundali.com आपके द्वारा दर्ज की गई किसी भी जन्म तिथि, समय, या स्थान (Birth Data) को 
          अपने डेटाबेस में स्थायी रूप से सुरक्षित नहीं करता है। 
          पीडीएफ (PDF) निर्माण पूरी तरह से आपके ब्राउज़र (Client-Side) में होता है।
        </p>
        
        <h2>2. कुकीज़ (Cookies)</h2>
        <p>
          हम उपयोगकर्ता के अनुभव को बेहतर बनाने के लिए बुनियादी कुकीज़ का उपयोग कर सकते हैं। 
          हम किसी भी व्यक्तिगत ज्योतिषीय डेटा को कुकीज़ में संग्रहीत नहीं करते हैं।
        </p>

        <h2>3. तृतीय पक्ष सेवाएं (Third-Party Services)</h2>
        <p>
          हमारी वेबसाइट पर एनालिटिक्स (Analytics) जैसी बुनियादी सेवाएं हो सकती हैं, 
          लेकिन वे आपके द्वारा दर्ज किए गए ज्योतिषीय डेटा को ट्रैक या रिकॉर्ड नहीं करती हैं। 
          हम किसी भी बाहरी ज्योतिष एपीआई (Astrology API) का उपयोग नहीं करते हैं।
        </p>

        <h2>4. नीति में परिवर्तन (Changes to this Policy)</h2>
        <p>
          हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। किसी भी बदलाव की स्थिति में, 
          इस पृष्ठ को संशोधित किया जाएगा।
        </p>

        <h2>संपर्क करें</h2>
        <p>
          गोपनीयता नीति से संबंधित प्रश्नों के लिए संपर्क करें:
          <br />
          <strong>ईमेल:</strong> shivashutosh.apps@gmail.com
        </p>
      </div>
    </main>
  );
}
