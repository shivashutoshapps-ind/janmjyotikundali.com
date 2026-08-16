import { KootResult } from './matchingTypes';

const VARNA_MAPPING: Record<string, number> = {
  'कर्क (Cancer)': 4, 'वृश्चिक (Scorpio)': 4, 'मीन (Pisces)': 4, // Brahmin
  'मेष (Aries)': 3, 'सिंह (Leo)': 3, 'धनु (Sagittarius)': 3, // Kshatriya
  'वृषभ (Taurus)': 2, 'कन्या (Virgo)': 2, 'मकर (Capricorn)': 2, // Vaishya
  'मिथुन (Gemini)': 1, 'तुला (Libra)': 1, 'कुंभ (Aquarius)': 1 // Shudra
};

const VARNA_NAMES: Record<number, string> = {
  4: 'ब्राह्मण (Brahmin)',
  3: 'क्षत्रिय (Kshatriya)',
  2: 'वैश्य (Vaishya)',
  1: 'शूद्र (Shudra)'
};

export function calculateVarna(boyRashi: string, girlRashi: string): KootResult {
  const boyVarna = VARNA_MAPPING[boyRashi] || 0;
  const girlVarna = VARNA_MAPPING[girlRashi] || 0;

  let score = 0;
  let explanation = '';

  if (boyVarna >= girlVarna) {
    score = 1;
    explanation = `लड़के का वर्ण (${VARNA_NAMES[boyVarna]}), लड़की के वर्ण (${VARNA_NAMES[girlVarna]}) के समान या उच्च है, जो शुभ माना जाता है।`;
  } else {
    score = 0;
    explanation = `लड़के का वर्ण (${VARNA_NAMES[boyVarna]}), लड़की के वर्ण (${VARNA_NAMES[girlVarna]}) से निम्न है, जिसे अनुकूल नहीं माना जाता।`;
  }

  return {
    name: 'वर्ण (Varna)',
    maxScore: 1,
    obtainedScore: score,
    explanation
  };
}
