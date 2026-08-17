'use client';

import React from 'react';
import { Input } from '../Form/Input';
import { Button } from '../Button/Button';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useRouter } from 'next/navigation';
import styles from './KundliForm.module.css';

interface KundliFormProps {
  onSubmitCallback?: (data: any) => void;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const KundliForm: React.FC<KundliFormProps> = ({ 
  onSubmitCallback,
  title,
  subtitle,
  buttonText
}) => {
  const { t } = useLanguage();
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      place: {
        name: formData.get('place') as string,
        latitude: 28.6139, // Default for development (New Delhi)
        longitude: 77.2090,
        timezone: 'Asia/Kolkata'
      }
    };

    if (onSubmitCallback) {
      onSubmitCallback(data);
    } else {
      sessionStorage.setItem('janmjyoti_kundli_data', JSON.stringify(data));
      router.push(`/kundli`);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h2 className={`hindi-text ${styles.formTitle}`}>{title || t('forms.createKundliTitle')}</h2>
      <p className={styles.formSubtitle}>{subtitle || t('forms.createKundliSubtitle')}</p>

      <div className={styles.inputGrid}>
        <Input 
          name="name"
          label={t('forms.name')} 
          placeholder={t('forms.namePlaceholder')} 
          required 
        />
        <Input 
          name="date"
          label={t('forms.date')} 
          type="date" 
          required 
        />
        <Input 
          name="time"
          label={t('forms.time')} 
          type="time" 
          required 
        />
        <Input 
          name="place"
          label={t('forms.place')} 
          placeholder={t('forms.placePlaceholder')} 
          required 
        />
      </div>

      <div className={styles.actionContainer}>
        <Button type="submit" variant="primary" fullWidth className={styles.submitBtn}>
          {buttonText || t('forms.createKundliBtn')}
        </Button>
      </div>
      
      <p className={styles.privacyNote}>
        {t('forms.privacyNote')}
      </p>
    </form>
  );
};
