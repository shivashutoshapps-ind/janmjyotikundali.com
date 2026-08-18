'use client';
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

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function HomeClient() {
  const { language, t } = useLanguage();
  const tools = [
    { title: t('nav.kundli'), desc: t('home.kundliDesc', 'अपनी विस्तृत जन्म कुंडली बनाएं'), icon: <Star />, href: '/kundli' },
    { title: t('nav.matching'), desc: t('home.matchingDesc', 'विवाह के लिए गुण मिलान'), icon: <Heart />, href: '/kundli-matching' },
    { title: t('nav.rashi'), desc: t('home.rashiDesc', 'अपनी चंद्र राशि जानें'), icon: <Moon />, href: '/rashi' },
    { title: t('nav.nakshatra'), desc: t('home.nakshatraDesc', 'अपना जन्म नक्षत्र जानें'), icon: <Sun />, href: '/nakshatra' },
    { title: t('nav.lagna'), desc: t('home.lagnaDesc', 'अपना लग्न और उसका प्रभाव जानें'), icon: <Star />, href: '/lagna' },
    { title: t('nav.panchang'), desc: t('home.panchangDesc', 'आज का हिन्दू पंचांग'), icon: <Calendar />, href: '/panchang' },
    { title: t('home.dailyRashifal'), desc: t('home.rashifalDesc', 'दैनिक भविष्यफल पढ़ें'), icon: <Sun />, href: '/rashifal' },
    { title: t('nav.muhurat'), desc: t('home.muhuratDesc', 'शुभ कार्य के लिए मुहूर्त'), icon: <Clock />, href: '/muhurat' },
  ];

  return (
    <main className={styles.main}>
      {/* 1. HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <h1 className={`hindi-text ${styles.heroTitle}`}>
            {t('home.heroTitleMain', 'सत्य, सरल और सटीक')} <br />
            <span className={styles.textPrimary}>{t('home.heroTitleSpan', 'भारतीय ज्योतिष')}</span>
          </h1>
          <p className={styles.heroDescription}>
            {t('home.heroDescription', 'यह एक सामान्य राशिफल नहीं है। अपनी जन्म तिथि, समय और स्थान के आधार पर अपनी व्यक्तिगत और सटीक जन्मकुंडली प्राप्त करें।')}
          </p>
          <div className={styles.heroActions}>
            <Link href="#kundli-form">
              <Button variant="primary" className={styles.heroBtn}>{t('nav.createKundli')}</Button>
            </Link>
            <Link href="#tools">
              <Button variant="outline" className={styles.heroBtn}>{t('home.viewTools', 'अन्य टूल्स देखें')}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. QUICK ASTROLOGY TOOLS */}
      <section id="tools" className={styles.section}>
        <div className="container">
          <h2 className={`hindi-text ${styles.sectionTitle}`}>{t('home.topTools', 'प्रमुख ज्योतिष टूल्स')}</h2>
          <p className={styles.sectionSubtitle}>{t('home.chooseTool', 'अपनी आवश्यकता के अनुसार सही टूल चुनें')}</p>
          
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
            <h2 className={`hindi-text ${styles.sectionTitle}`}>{t('nav.rashifal')}</h2>
            <Link href="/rashifal" className={styles.viewAllLink}>
              {t('common.viewAll', 'सभी देखें')} <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className={styles.cardsGrid}>
            <Link href="/rashifal/daily">
              <Card className={styles.contentCard} interactive>
                <h3 className={styles.cardTitle}>{t('home.dailyRashifal')}</h3>
                <p className={styles.cardDesc}>{t('home.dailyRashifalDesc', 'जानें आज का दिन आपके लिए कैसा रहेगा।')}</p>
              </Card>
            </Link>
            <Link href="/rashifal/weekly">
              <Card className={styles.contentCard} interactive>
                <h3 className={styles.cardTitle}>{t('home.weeklyRashifal', 'साप्ताहिक राशिफल')}</h3>
                <p className={styles.cardDesc}>{t('home.weeklyRashifalDesc', 'इस सप्ताह की प्रमुख घटनाओं का पूर्वानुमान।')}</p>
              </Card>
            </Link>
            <Link href="/rashifal/monthly">
              <Card className={styles.contentCard} interactive>
                <h3 className={styles.cardTitle}>{t('home.monthlyRashifal', 'मासिक राशिफल')}</h3>
                <p className={styles.cardDesc}>{t('home.monthlyRashifalDesc', 'पूरे महीने का विस्तृत ज्योतिषीय विश्लेषण।')}</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PANCHANG / DAILY ASTROLOGY SECTION */}
      <section className={`${styles.section} ${styles.bgAlt}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={`hindi-text ${styles.sectionTitle}`}>{t('home.panchangToday')}</h2>
            <Link href="/panchang" className={styles.viewAllLink}>
              {t('home.detailedPanchang', 'विस्तृत पंचांग')} <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className={styles.panchangGrid}>
            <div className={styles.panchangItem}>
              <span className={styles.panchangLabel}>{t('astrology.tithi')}</span>
              <span className={styles.panchangValue}>{t('panchang.pratipada', 'प्रतिपदा')}</span>
            </div>
            <div className={styles.panchangItem}>
              <span className={styles.panchangLabel}>{t('astrology.nakshatra')}</span>
              <span className={styles.panchangValue}>{t('panchang.ashwini', 'अश्विनी')}</span>
            </div>
            <div className={styles.panchangItem}>
              <span className={styles.panchangLabel}>{t('astrology.yoga')}</span>
              <span className={styles.panchangValue}>{t('panchang.vishkumbha', 'विष्कुम्भ')}</span>
            </div>
            <div className={styles.panchangItem}>
              <span className={styles.panchangLabel}>{t('astrology.karana')}</span>
              <span className={styles.panchangValue}>{t('panchang.bava', 'बव')}</span>
            </div>
            <div className={styles.panchangItem}>
              <span className={styles.panchangLabel}>{t('panchang.sunrise', 'सूर्योदय')}</span>
              <span className={styles.panchangValue}>06:15 AM</span>
            </div>
            <div className={styles.panchangItem}>
              <span className={styles.panchangLabel}>{t('panchang.sunset', 'सूर्यास्त')}</span>
              <span className={styles.panchangValue}>06:45 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED CONTENT */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={`hindi-text ${styles.sectionTitle}`}>{t('home.astroKnowledge', 'ज्योतिष ज्ञान')}</h2>
          <p className={styles.sectionSubtitle}>{t('home.astroKnowledgeSub', 'ज्योतिष को सरल भाषा में समझें')}</p>

          <div className={styles.cardsGrid}>
            <Link href="/articles/career-astrology">
              <Card className={styles.contentCard} interactive>
                <Briefcase className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>{t('home.careerAstro', 'करियर और ज्योतिष')}</h3>
                <p className={styles.cardDesc}>{t('home.careerAstroDesc', 'कुंडली से कैसे जानें अपने लिए सही करियर?')}</p>
              </Card>
            </Link>
            <Link href="/articles/marriage-astrology">
              <Card className={styles.contentCard} interactive>
                <Heart className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>{t('home.marriageAstro', 'विवाह और ज्योतिष')}</h3>
                <p className={styles.cardDesc}>{t('home.marriageAstroDesc', 'सफल वैवाहिक जीवन के लिए गुण मिलान का महत्व।')}</p>
              </Card>
            </Link>
            <Link href="/articles/kundli-education">
              <Card className={styles.contentCard} interactive>
                <BookOpen className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>{t('home.readKundli', 'कुंडली कैसे पढ़ें?')}</h3>
                <p className={styles.cardDesc}>{t('home.readKundliDesc', '12 भावों और 9 ग्रहों का सरल अर्थ समझें।')}</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
