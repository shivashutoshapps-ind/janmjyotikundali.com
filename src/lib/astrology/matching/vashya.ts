import { KootResult } from './matchingTypes';

type VashyaType = 'Chatushpada' | 'Manav' | 'Jalchar' | 'Vanachar' | 'Keeta';

const VASHYA_MAPPING: Record<string, VashyaType> = {
  'मेष (Aries)': 'Chatushpada',
  'वृषभ (Taurus)': 'Chatushpada',
  'मिथुन (Gemini)': 'Manav',
  'कर्क (Cancer)': 'Jalchar',
  'सिंह (Leo)': 'Vanachar',
  'कन्या (Virgo)': 'Manav',
  'तुला (Libra)': 'Manav',
  'वृश्चिक (Scorpio)': 'Keeta',
  'धनु (Sagittarius)': 'Chatushpada', // Simplified from 50/50 split
  'मकर (Capricorn)': 'Jalchar',      // Simplified from 50/50 split
  'कुंभ (Aquarius)': 'Manav',
  'मीन (Pisces)': 'Jalchar'
};

const VASHYA_NAMES: Record<VashyaType, string> = {
  'Chatushpada': 'चतुष्पद (Quadruped)',
  'Manav': 'मानव (Human)',
  'Jalchar': 'जलचर (Water-dweller)',
  'Vanachar': 'वनचर (Wild)',
  'Keeta': 'कीट (Insect)'
};

// Rows: Boy, Columns: Girl
const VASHYA_SCORES: Record<VashyaType, Record<VashyaType, number>> = {
  'Chatushpada': { 'Chatushpada': 2, 'Manav': 1, 'Jalchar': 1, 'Vanachar': 0, 'Keeta': 1 },
  'Manav':       { 'Chatushpada': 1, 'Manav': 2, 'Jalchar': 1, 'Vanachar': 0, 'Keeta': 1 },
  'Jalchar':     { 'Chatushpada': 1, 'Manav': 1, 'Jalchar': 2, 'Vanachar': 1, 'Keeta': 1 },
  'Vanachar':    { 'Chatushpada': 0, 'Manav': 0, 'Jalchar': 1, 'Vanachar': 2, 'Keeta': 0 },
  'Keeta':       { 'Chatushpada': 1, 'Manav': 1, 'Jalchar': 1, 'Vanachar': 0, 'Keeta': 2 }
};

export function calculateVashya(boyRashi: string, girlRashi: string): KootResult {
  const boyVashya = VASHYA_MAPPING[boyRashi];
  const girlVashya = VASHYA_MAPPING[girlRashi];

  if (!boyVashya || !girlVashya) {
    return { name: 'वश्य (Vashya)', maxScore: 2, obtainedScore: 0, explanation: 'राशि की पहचान नहीं हो सकी।' };
  }

  const score = VASHYA_SCORES[boyVashya][girlVashya];
  let explanation = `लड़के का वश्य ${VASHYA_NAMES[boyVashya]} और लड़की का वश्य ${VASHYA_NAMES[girlVashya]} है। `;

  if (score === 2) explanation += 'दोनों के बीच उत्तम आकर्षण और तालमेल (2/2) है।';
  else if (score === 1) explanation += 'दोनों के बीच सामान्य तालमेल (1/2) है।';
  else explanation += 'दोनों के बीच आकर्षण का अभाव या स्वभाव में विरोध (0/2) है।';

  return {
    name: 'वश्य (Vashya)',
    maxScore: 2,
    obtainedScore: score,
    explanation
  };
}
