import { Metadata } from 'next';
import styles from '../legal.module.css';

export const metadata: Metadata = {
  title: 'संपर्क करें (Contact Us)',
  description: 'JanmJyotiKundali.com से संपर्क करें।',
};

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>संपर्क करें (Contact Us)</h1>
      </div>
      <div className={styles.content}>
        <h2>हमसे जुड़ें</h2>
        <p>
          JanmJyotiKundali.com का उपयोग करने के लिए आपका धन्यवाद। 
          यदि आपके पास कोई प्रश्न, सुझाव या फीडबैक है, तो हम आपकी बात सुनना पसंद करेंगे।
        </p>
        
        <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#fef3c7', borderRadius: '8px', borderLeft: '4px solid #d97706' }}>
          <h3 style={{ marginTop: 0 }}>ईमेल (Email)</h3>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#92400e', marginBottom: 0 }}>
            shivashutosh.apps@gmail.com
          </p>
        </div>

        <p style={{ marginTop: '2rem' }}>
          हम आपके ईमेल का जल्द से जल्द उत्तर देने का प्रयास करेंगे।
          कृपया ध्यान दें कि हम व्यक्तिगत ज्योतिषीय परामर्श (Personal Consultation) 
          प्रदान नहीं करते हैं। यह वेबसाइट स्व-उपयोग (Self-service) उपकरणों के लिए बनाई गई है।
        </p>
      </div>
    </main>
  );
}
