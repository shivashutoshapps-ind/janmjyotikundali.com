'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import { Button } from '../Button/Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.kundli'), href: '/kundli' },
    { name: t('nav.rashifal'), href: '/rashifal' },
    { name: t('nav.panchang'), href: '/panchang' },
    { name: t('nav.matching'), href: '/matching' },
    { name: t('nav.tools'), href: '/tools' },
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
            <span className={`hindi-text ${styles.logoText}`}>{t('nav.brand', 'जन्मज्योति')}</span>
          </Link>
        </div>
        
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
          
          <div className={styles.languageSwitcher} role="group" aria-label="Language selection">
            <button 
              className={`${styles.langBtn} ${language === 'hi' ? styles.langActive : styles.langInactive}`}
              onClick={() => setLanguage('hi')}
              aria-pressed={language === 'hi'}
              lang="hi"
            >
              हिन्दी
            </button>
            <button 
              className={`${styles.langBtn} ${language === 'en' ? styles.langActive : styles.langInactive}`}
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
              lang="en"
            >
              English
            </button>
          </div>

          <Button variant="primary">{t('nav.createKundli')}</Button>
        </nav>

        <button 
          className={styles.mobileMenuBtn} 
          onClick={toggleMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <div className="container">
          <nav className={styles.mobileNavLinks}>
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={styles.mobileNavLink}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            
            <div className={styles.mobileLanguageSwitcher} role="group" aria-label="Language selection">
              <button 
                className={`${styles.langBtn} ${language === 'hi' ? styles.langActive : styles.langInactive}`}
                onClick={() => { setLanguage('hi'); closeMenu(); }}
                aria-pressed={language === 'hi'}
                lang="hi"
              >
                हिन्दी
              </button>
              <button 
                className={`${styles.langBtn} ${language === 'en' ? styles.langActive : styles.langInactive}`}
                onClick={() => { setLanguage('en'); closeMenu(); }}
                aria-pressed={language === 'en'}
                lang="en"
              >
                English
              </button>
            </div>

            <div className={styles.mobileNavAction}>
              <Button variant="primary" fullWidth>{t('nav.createKundli')}</Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
