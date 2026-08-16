import React from 'react';
import { PlanetPosition } from '@/lib/astrology/types';
import styles from './PlanetaryTable.module.css';

interface Props {
  planets: PlanetPosition[];
}

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
          {planets.map((p, idx) => (
            <tr key={idx}>
              <td className={styles.planetName}>{p.planet} {p.isRetrograde ? '(R)' : ''}</td>
              <td>{p.rashi}</td>
              <td>{p.house}</td>
              <td>{formatDegree(p.degree)}</td>
              <td>{p.nakshatra}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
