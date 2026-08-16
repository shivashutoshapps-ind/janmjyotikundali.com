'use client';

import React from 'react';
import { Input } from '../Form/Input';
import { Button } from '../Button/Button';
import styles from './KundliForm.module.css';

interface KundliFormProps {
  onSubmitCallback?: (data: any) => void;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const KundliForm: React.FC<KundliFormProps> = ({ 
  onSubmitCallback,
  title = "अपनी जन्मकुंडली बनाएं",
  subtitle = "सटीक फलादेश के लिए सही जन्म विवरण भरें",
  buttonText = "कुंडली बनाएं (Free)"
}) => {
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
      alert('फॉर्म सबमिट किया गया! (गणना इंजन अभी उपलब्ध नहीं है)');
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h2 className={`hindi-text ${styles.formTitle}`}>{title}</h2>
      <p className={styles.formSubtitle}>{subtitle}</p>

      <div className={styles.inputGrid}>
        <Input 
          name="name"
          label="पूरा नाम" 
          placeholder="उदा. राहुल कुमार" 
          required 
        />
        <Input 
          name="date"
          label="जन्म तिथि" 
          type="date" 
          required 
        />
        <Input 
          name="time"
          label="जन्म समय" 
          type="time" 
          required 
        />
        <Input 
          name="place"
          label="जन्म स्थान" 
          placeholder="उदा. नई दिल्ली" 
          required 
        />
      </div>

      <div className={styles.actionContainer}>
        <Button type="submit" variant="primary" fullWidth className={styles.submitBtn}>
          {buttonText}
        </Button>
      </div>
      
      <p className={styles.privacyNote}>
        🔒 आपका डेटा सुरक्षित है और इसे किसी के साथ साझा नहीं किया जाएगा।
      </p>
    </form>
  );
};
