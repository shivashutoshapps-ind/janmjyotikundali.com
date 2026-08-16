'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import { Button } from '../Button/Button';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'होम', href: '/' },
    { name: 'जन्मकुंडली', href: '/kundli' },
    { name: 'राशिफल', href: '/rashifal' },
    { name: 'पंचांग', href: '/panchang' },
    { name: 'मुहूर्त', href: '/muhurat' },
    { name: 'टूल्स', href: '/tools' },
    { name: 'लेख', href: '/articles' },
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
            <span className={`hindi-text ${styles.logoText}`}>जन्मज्योति</span>
          </Link>
        </div>
        
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
          <Button variant="primary">अपनी कुंडली बनाएं</Button>
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
            <div className={styles.mobileNavAction}>
              <Button variant="primary" fullWidth>अपनी कुंडली बनाएं</Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
