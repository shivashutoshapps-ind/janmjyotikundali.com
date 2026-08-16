import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', interactive = false }) => {
  return (
    <div 
      className={`${styles.card} ${interactive ? styles.clickable : ''} ${className}`}
    >
      {children}
    </div>
  );
};
