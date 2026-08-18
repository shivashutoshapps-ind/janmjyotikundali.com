import React from 'react';
import { PlanetPosition } from '@/lib/astrology/types';
import styles from './PlanetaryTable.module.css';

import Link from 'next/link';

interface Props {
  planets: PlanetPosition[];
}

// Mapping of planet names to slugs
const GRAHA_SLUG_MAP: Record<string, string> = {
  'सूर्य (Sun)': 'surya',
  'चंद्र (Moon)': 'chandra',
  'मंगल (Mars)': 'mangal',
  'बुध (Mercury)': 'budh',
  'गुरु (Jupiter)': 'guru',
  'शुक्र (Venus)': 'shukra',
  'शनि (Saturn)': 'shani',
  'राहु (Rahu)': 'rahu',
  'केतु (Ketu)': 'ketu'
};

export const PlanetaryTable: React.FC<Props> = ({ planets }) => {
  // Format degree like "14° 23'"
  const formatDegree = (decDegree: number) => {
    // A sign is 30 degrees, so we only want the degree within the sign
    const signDegree = decDegree % 30;
    const d = Math.floor(signDegree);
    const m = Math.floor((signDegree - d) * 60);
    return `${d}° ${m}'`;
  };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ग्रह (Planet)</th>
            <th>राशि (Sign)</th>
            <th>भाव (House)</th>
            <th>अंश (Degree)</th>
            <th>नक्षत्र (Star)</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((p, idx) => {
            const slug = GRAHA_SLUG_MAP[p.planet];
            return (
              <tr key={idx}>
                <td className={styles.planetName}>
                  {slug ? (
                    <Link href={`/graha/${slug}`} style={{ textDecoration: 'underline' }}>
                      {p.planet}
                    </Link>
                  ) : (
                    p.planet
                  )} {p.isRetrograde ? '(R)' : ''}
                </td>
                <td>{p.rashi}</td>
                <td>{p.house}</td>
                <td>{formatDegree(p.degree)}</td>
                <td>{p.nakshatra}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
