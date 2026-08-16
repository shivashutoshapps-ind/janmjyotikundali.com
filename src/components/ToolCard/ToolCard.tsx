import React from 'react';
import Link from 'next/link';
import { Card } from '../Card/Card';
import styles from './ToolCard.module.css';

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({ title, description, icon, href }) => {
  return (
    <Link href={href} className={styles.linkWrapper}>
      <Card className={styles.toolCard} interactive>
        <div className={styles.iconWrapper}>{icon}</div>
        <h3 className={`hindi-text ${styles.title}`}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </Card>
    </Link>
  );
};
