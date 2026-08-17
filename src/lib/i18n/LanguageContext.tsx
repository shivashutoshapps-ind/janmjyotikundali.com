'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { hi } from './translations/hi';
import { en } from './translations/en';

export type Language = 'hi' | 'en';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const translations: Record<Language, any> = { hi, en };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('hi');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('janmjyoti_lang') as Language;
    if (savedLang === 'en' || savedLang === 'hi') {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('janmjyoti_lang', lang);
  };

  const t = (key: string, fallback?: string): string => {
    const keys = key.split('.');
    let current: any = translations[mounted ? language : 'hi'];
    
    for (const k of keys) {
      if (current === undefined || current[k] === undefined) {
        return fallback || key; // Fallback to provided string or key if not found
      }
      current = current[k];
    }
    
    return typeof current === 'string' ? current : (fallback || key);
  };

  return (
    <LanguageContext.Provider value={{ language: mounted ? language : 'hi', setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
