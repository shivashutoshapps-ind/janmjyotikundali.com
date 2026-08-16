import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Star, 
  Moon, 
  Sun, 
  Calendar, 
  Clock, 
  Heart, 
  Briefcase, 
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/Button/Button';
import { ToolCard } from '@/components/ToolCard/ToolCard';
import { KundliForm } from '@/components/KundliForm/KundliForm';
import { Card } from '@/components/Card/Card';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'JanmJyoti - आपकी व्यक्तिगत जन्मकुंडली और राशिफल',
  description: 'JanmJyoti provides trustworthy Indian astrology, daily Rashifal, free personalized Kundli, Panchang, and astrology tools in Hindi.',
  openGraph: {
    title: 'JanmJyoti - आपकी व्यक्तिगत जन्मकुंडली और राशिफल',
    description: 'JanmJyoti provides trustworthy Indian astrology, daily Rashifal, free personalized Kundli, Panchang, and astrology tools in Hindi.',
    type: 'website',
    locale: 'hi_IN',
  },
  alternates: {
    canonical: '/',
  }
};

export default function Home() {
  const tools = [
    { title: 'जन्म कुंडली', desc: 'अपनी विस्तृत जन्म कुंडली बनाएं', icon: <Star />, href: '/kundli' },
    { title: 'कुंडली मिलान', desc: 'विवाह के लिए गुण मिलान', icon: <Heart />, href: '/kundli-matching' },
    { title: 'राशि', desc: 'अपनी चंद्र राशि जानें', icon: <Moon />, href: '/rashi' },
    { title: 'नक्षत्र', desc: 'अपना जन्म नक्षत्र जानें', icon: <Sun />, href: '/nakshatra' },
    { title: 'लग्न', desc: 'अपना लग्न और उसका प्रभाव जानें', icon: <Star />, href: '/lagna' },
    { title: 'पंचांग', desc: 'आज का हिन्दू पंचांग', icon: <Calendar />, href: '/panchang' },
    { title: 'आज का राशिफल', desc: 'दैनिक भविष्यफल पढ़ें', icon: <Sun />, href: '/rashifal' },
    { title: 'मुहूर्त', desc: 'शुभ कार्य के लिए मुहूर्त', icon: <Clock />, href: '/muhurat' },
  ];

  return (
    <main className={styles.main}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className={`hindi-text ${styles.heroTitle}`}>
            सत्य, सरल और सटीक <br />
            <span className={styles.textPrimary}>भारतीय ज्योतिष</span>
          </h1>
          <p className={styles.heroDescription}>
            यह एक सामान्य राशिफल नहीं है। अपनी जन्म तिथि, समय और स्थान के आधार पर अपनी व्यक्तिगत और सटीक जन्मकुंडली प्राप्त करें।
          </p>
          <div className={styles.heroActions}>
            <Link href="#kundli-form">
              <Button variant="primary" className={styles.heroBtn}>अपनी कुंडली बनाएं</Button>
            </Link>
            <Link href="#tools">
              <Button variant="outline" className={styles.heroBtn}>अन्य टूल्स देखें</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. QUICK ASTROLOGY TOOLS */}
      <section id="tools" className={styles.section}>
        <div className="container">
          <h2 className={`hindi-text ${styles.sectionTitle}`}>प्रमुख ज्योतिष टूल्स</h2>
          <p className={styles.sectionSubtitle}>अपनी आवश्यकता के अनुसार सही टूल चुनें</p>
          
          <div className={styles.toolsGrid}>
            {tools.map((tool, index) => (
              <ToolCard 
                key={index}
                title={tool.title}
                description={tool.desc}
                icon={tool.icon}
                href={tool.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. KUNDLI ENTRY SECTION */}
      <section id="kundli-form" className={`${styles.section} ${styles.bgAlt}`}>
        <div className="container">
          <KundliForm />
        </div>
      </section>

      {/* 4. RASHIFAL SECTION */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={`hindi-text ${styles.sectionTitle}`}>राशिफल</h2>
            <Link href="/rashifal" className={styles.viewAllLink}>
              सभी देखें <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className={styles.cardsGrid}>
            <Link href="/rashifal/daily">
              <Card className={styles.contentCard} interactive>
                <h3 className={styles.cardTitle}>आज का राशिफल</h3>
                <p className={styles.cardDesc}>जानें आज का दिन आपके लिए कैसा रहेगा।</p>
              </Card>
            </Link>
            <Link href="/rashifal/weekly">
              <Card className={styles.contentCard} interactive>
                <h3 className={styles.cardTitle}>साप्ताहिक राशिफल</h3>
                <p className={styles.cardDesc}>इस सप्ताह की प्रमुख घटनाओं का पूर्वानुमान।</p>
              </Card>
            </Link>
            <Link href="/rashifal/monthly">
              <Card className={styles.contentCard} interactive>
                <h3 className={styles.cardTitle}>मासिक राशिफल</h3>
                <p className={styles.cardDesc}>पूरे महीने का विस्तृत ज्योतिषीय विश्लेषण।</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PANCHANG / DAILY ASTROLOGY SECTION */}
      <section className={`${styles.section} ${styles.bgAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={`hindi-text ${styles.sectionTitle}`}>आज का पंचांग</h2>
            <Link href="/panchang" className={styles.viewAllLink}>
              विस्तृत पंचांग <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className={styles.panchangGrid}>
            <div className={styles.panchangItem}>
              <span className={styles.panchangLabel}>तिथि</span>
              <span className={styles.panchangValue}>प्रतिपदा</span>
            </div>
            <div className={styles.panchangItem}>
              <span className={styles.panchangLabel}>नक्षत्र</span>
              <span className={styles.panchangValue}>अश्विनी</span>
            </div>
            <div className={styles.panchangItem}>
              <span className={styles.panchangLabel}>योग</span>
              <span className={styles.panchangValue}>विष्कुम्भ</span>
            </div>
            <div className={styles.panchangItem}>
              <span className={styles.panchangLabel}>करण</span>
              <span className={styles.panchangValue}>बव</span>
            </div>
            <div className={styles.panchangItem}>
              <span className={styles.panchangLabel}>सूर्योदय</span>
              <span className={styles.panchangValue}>06:15 AM</span>
            </div>
            <div className={styles.panchangItem}>
              <span className={styles.panchangLabel}>सूर्यास्त</span>
              <span className={styles.panchangValue}>06:45 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED CONTENT */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={`hindi-text ${styles.sectionTitle}`}>ज्योतिष ज्ञान</h2>
          <p className={styles.sectionSubtitle}>ज्योतिष को सरल भाषा में समझें</p>

          <div className={styles.cardsGrid}>
            <Link href="/articles/career-astrology">
              <Card className={styles.contentCard} interactive>
                <Briefcase className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>करियर और ज्योतिष</h3>
                <p className={styles.cardDesc}>कुंडली से कैसे जानें अपने लिए सही करियर?</p>
              </Card>
            </Link>
            <Link href="/articles/marriage-astrology">
              <Card className={styles.contentCard} interactive>
                <Heart className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>विवाह और ज्योतिष</h3>
                <p className={styles.cardDesc}>सफल वैवाहिक जीवन के लिए गुण मिलान का महत्व।</p>
              </Card>
            </Link>
            <Link href="/articles/kundli-education">
              <Card className={styles.contentCard} interactive>
                <BookOpen className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>कुंडली कैसे पढ़ें?</h3>
                <p className={styles.cardDesc}>12 भावों और 9 ग्रहों का सरल अर्थ समझें।</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
