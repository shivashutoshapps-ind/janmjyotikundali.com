import { getRashiIndex } from './rashi';

const RASHI_NAMES = [
  'मेष (Aries)', 'वृषभ (Taurus)', 'मिथुन (Gemini)', 'कर्क (Cancer)',
  'सिंह (Leo)', 'कन्या (Virgo)', 'तुला (Libra)', 'वृश्चिक (Scorpio)',
  'धनु (Sagittarius)', 'मकर (Capricorn)', 'कुंभ (Aquarius)', 'मीन (Pisces)'
];

/**
 * Calculates the 12 houses based on the Whole Sign House System.
 * In Whole Sign, the 1st House exactly matches the entire sign of the Ascendant.
 * 
 * @param ascendantSiderealLongitude The sidereal longitude of the Ascendant
 */
export function calculateWholeSignHouses(ascendantSiderealLongitude: number) {
  const lagnaRashiIndex = getRashiIndex(ascendantSiderealLongitude);
  const houses = [];

  for (let i = 0; i < 12; i++) {
    // 1st house is lagna rashi, 2nd is next, etc.
    const rashiIndex = (lagnaRashiIndex + i) % 12;
    
    // In Whole Sign, the house cusp is technically the 0-degree mark of that sign
    const houseStartDegree = rashiIndex * 30.0;
    
    houses.push({
      houseNumber: i + 1,
      sign: RASHI_NAMES[rashiIndex],
      signIndex: rashiIndex,
      degree: houseStartDegree // starting longitude of that house
    });
  }

  return houses;
}
