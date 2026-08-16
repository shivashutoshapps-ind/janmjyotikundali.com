import { normalizeLongitude, formatDMS } from './sidereal';
import { RashiResult } from '../types';

const RASHI_NAMES = [
  'मेष (Aries)', 'वृषभ (Taurus)', 'मिथुन (Gemini)', 'कर्क (Cancer)',
  'सिंह (Leo)', 'कन्या (Virgo)', 'तुला (Libra)', 'वृश्चिक (Scorpio)',
  'धनु (Sagittarius)', 'मकर (Capricorn)', 'कुंभ (Aquarius)', 'मीन (Pisces)'
];

const RASHI_LORDS = [
  'मंगल (Mars)', 'शुक्र (Venus)', 'बुध (Mercury)', 'चंद्र (Moon)',
  'सूर्य (Sun)', 'बुध (Mercury)', 'शुक्र (Venus)', 'मंगल (Mars)',
  'गुरु (Jupiter)', 'शनि (Saturn)', 'शनि (Saturn)', 'गुरु (Jupiter)'
];

const RASHI_ELEMENTS = [
  'अग्नि (Fire)', 'पृथ्वी (Earth)', 'वायु (Air)', 'जल (Water)',
  'अग्नि (Fire)', 'पृथ्वी (Earth)', 'वायु (Air)', 'जल (Water)',
  'अग्नि (Fire)', 'पृथ्वी (Earth)', 'वायु (Air)', 'जल (Water)'
];

const RASHI_QUALITIES = [
  'चर (Movable)', 'स्थिर (Fixed)', 'द्विस्वभाव (Dual)', 'चर (Movable)',
  'स्थिर (Fixed)', 'द्विस्वभाव (Dual)', 'चर (Movable)', 'स्थिर (Fixed)',
  'द्विस्वभाव (Dual)', 'चर (Movable)', 'स्थिर (Fixed)', 'द्विस्वभाव (Dual)'
];

/**
 * Calculates Rashi details from a sidereal longitude
 */
export function calculateRashi(siderealLongitude: number): RashiResult {
  const norm = normalizeLongitude(siderealLongitude);
  const index = Math.floor(norm / 30.0);
  const degreeInRashi = norm % 30.0;
  
  const dms = formatDMS(degreeInRashi);

  return {
    rashi: RASHI_NAMES[index],
    lord: RASHI_LORDS[index],
    element: RASHI_ELEMENTS[index],
    quality: RASHI_QUALITIES[index],
    description: `${RASHI_NAMES[index]} राशि में ${dms.formatted}`
  };
}

/**
 * Helper to get the Rashi index (0-11)
 */
export function getRashiIndex(siderealLongitude: number): number {
  return Math.floor(normalizeLongitude(siderealLongitude) / 30.0);
}
