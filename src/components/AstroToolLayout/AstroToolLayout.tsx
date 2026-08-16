import React from 'react';
import styles from './AstroToolLayout.module.css';
import { ToolDisclaimer } from '../ToolDisclaimer/ToolDisclaimer';

interface AstroToolLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const AstroToolLayout: React.FC<AstroToolLayoutProps> = ({ title, description, children }) => {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <h1 className={`hindi-text ${styles.title}`}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
        
        <div className={styles.content}>
          {children}
        </div>

        <div className={styles.disclaimerWrapper}>
          <ToolDisclaimer />
        </div>
      </div>
    </main>
  );
};
