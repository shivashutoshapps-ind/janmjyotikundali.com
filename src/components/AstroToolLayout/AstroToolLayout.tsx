import React from 'react';
import styles from './AstroToolLayout.module.css';
import { ToolDisclaimer } from '../ToolDisclaimer/ToolDisclaimer';
import { Breadcrumbs, BreadcrumbItem } from '../Breadcrumbs/Breadcrumbs';

interface AstroToolLayoutProps {
  title: string;
  description: React.ReactNode;
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
}

export const AstroToolLayout: React.FC<AstroToolLayoutProps> = ({ title, description, children, breadcrumbs }) => {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.container}`}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs items={breadcrumbs} />
        )}
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
