import { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'हमारे बारे में (About Us)',
  description: 'JanmJyotiKundali.com के बारे में जानें। सत्य और सटीक वैदिक ज्योतिष सेवाएं।',
};

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>हमारे बारे में (About Us)</h1>
      </div>
      <div className={styles.content}>
        <h2>JanmJyotiKundali.com में आपका स्वागत है</h2>
        <p>
          जन्मज्योति एक सत्य, सरल और सटीक वैदिक ज्योतिष मंच है। हमारा उद्देश्य प्राचीन भारतीय ज्योतिष विज्ञान को 
          आधुनिक तकनीक के माध्यम से सुलभ बनाना है। 
        </p>
        
        <h2>हमारा दृष्टिकोण (Our Vision)</h2>
        <p>
          हम मानते हैं कि ज्योतिष मार्गदर्शन का एक साधन है। हमारी सभी गणनाएं (कुंडली, पंचांग, अष्टकूट मिलान) 
          प्रामाणिक स्विस एफेमेरिस (Swiss Ephemeris) और लाहिरी अयानांश (Lahiri Ayanamsa) पर आधारित हैं।
        </p>

        <h2>गोपनीयता (Privacy)</h2>
        <p>
          हम आपकी निजता का सम्मान करते हैं। जन्मज्योति पर बनाई गई कोई भी कुंडली या मिलान डेटा हमारे सर्वर पर 
          सुरक्षित या सहेजा नहीं जाता है। सभी गणनाएं सुरक्षित रूप से होती हैं और सत्र समाप्त होते ही मिटा दी जाती हैं।
        </p>

        <h2>संपर्क करें</h2>
        <p>
          यदि आपके पास कोई प्रश्न या सुझाव है, तो कृपया हमसे संपर्क करें:
          <br />
          <strong>ईमेल:</strong> shivashutosh.apps@gmail.com
        </p>
      </div>
    </main>
  );
}
