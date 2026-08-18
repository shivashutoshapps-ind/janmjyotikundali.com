import React from 'react';
import Link from 'next/link';
import { KundliResult } from '@/lib/astrology/types';
import styles from './KundliChart.module.css';

interface Props {
  result: KundliResult;
}

export const NorthIndianChart: React.FC<Props> = ({ result }) => {
  // SVG coordinates for a 400x400 viewBox
  const W = 400;
  const H = 400;
  
  // House text positions (center of each geometric region)
  const housePositions = [
    { h: 1, x: 200, y: 100 }, // Top center diamond
    { h: 2, x: 100, y: 50 },  // Top left triangle
    { h: 3, x: 50,  y: 100 }, // Far left triangle
    { h: 4, x: 100, y: 200 }, // Middle left diamond
    { h: 5, x: 50,  y: 300 }, // Bottom left triangle
    { h: 6, x: 100, y: 350 }, // Bottom middle triangle
    { h: 7, x: 200, y: 300 }, // Bottom center diamond
    { h: 8, x: 300, y: 350 }, // Bottom right triangle
    { h: 9, x: 350, y: 300 }, // Far right triangle
    { h: 10, x: 300, y: 200 }, // Middle right diamond
    { h: 11, x: 350, y: 100 }, // Top right triangle
    { h: 12, x: 300, y: 50 },  // Top right top triangle
  ];

  // Map signs to numbers for display (Aries=1, Taurus=2, etc.)
  const RASHI_NAMES = [
    'मेष', 'वृषभ', 'मिथुन', 'कर्क',
    'सिंह', 'कन्या', 'तुला', 'वृश्चिक',
    'धनु', 'मकर', 'कुंभ', 'मीन'
  ];
  
  const getSignNumber = (signStr: string) => {
    // The string format is 'मेष (Aries)' so we check the start
    const index = RASHI_NAMES.findIndex(r => signStr.startsWith(r));
    return index >= 0 ? index + 1 : '';
  };

  const getOrdinal = (n: number) => {
    if (n === 1) return '1st';
    if (n === 2) return '2nd';
    if (n === 3) return '3rd';
    return `${n}th`;
  };

  const renderHouse = (pos: {h: number, x: number, y: number}) => {
    const houseData = result.houses.find(h => h.houseNumber === pos.h);
    if (!houseData) return null;

    const signNum = getSignNumber(houseData.sign);
    
    // Shorten planet names for chart (e.g. "सूर्य (Sun)" -> "Su")
    const shortNames: Record<string, string> = {
      'सूर्य (Sun)': 'Su',
      'चंद्र (Moon)': 'Mo',
      'मंगल (Mars)': 'Ma',
      'बुध (Mercury)': 'Me',
      'गुरु (Jupiter)': 'Ju',
      'शुक्र (Venus)': 'Ve',
      'शनि (Saturn)': 'Sa',
      'राहु (Rahu)': 'Ra',
      'केतु (Ketu)': 'Ke'
    };

    const planetText = houseData.planets.map(p => shortNames[p] || p).join(', ');

    return (
      <Link href={`/bhava/${getOrdinal(pos.h)}-house`} key={pos.h} passHref legacyBehavior>
        <a className={styles.houseLink} aria-label={`View details for ${getOrdinal(pos.h)} house`}>
          <g className={styles.houseGroup}>
            {/* Sign Number */}
            <text x={pos.x} y={pos.y - 15} className={styles.signNumber} textAnchor="middle">
              {signNum}
            </text>
            {/* Planets */}
            <text x={pos.x} y={pos.y + 5} className={styles.planetsText} textAnchor="middle">
              {planetText}
            </text>
            {/* Hit area (transparent circle for better clicking) */}
            <circle cx={pos.x} cy={pos.y - 5} r="25" fill="transparent" />
          </g>
        </a>
      </Link>
    );
  };

  return (
    <div className={styles.chartContainer} aria-label="North Indian Style Birth Chart">
      <svg viewBox={`0 0 ${W} ${H}`} className={styles.svgChart}>
        {/* Outer Square */}
        <rect x="0" y="0" width={W} height={H} className={styles.line} fill="none" />
        
        {/* Diagonals */}
        <line x1="0" y1="0" x2={W} y2={H} className={styles.line} />
        <line x1={W} y1="0" x2="0" y2={H} className={styles.line} />
        
        {/* Inner Diamond */}
        <polygon points={`${W/2},0 ${W},${H/2} ${W/2},${H} 0,${H/2}`} className={styles.line} fill="none" />

        {/* House Content */}
        {housePositions.map(renderHouse)}
      </svg>
    </div>
  );
};
