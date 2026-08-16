import { KootResult } from './matchingTypes';

const RASHI_SLUGS = [
  'मेष (Aries)', 'वृषभ (Taurus)', 'मिथुन (Gemini)', 'कर्क (Cancer)',
  'सिंह (Leo)', 'कन्या (Virgo)', 'तुला (Libra)', 'वृश्चिक (Scorpio)',
  'धनु (Sagittarius)', 'मकर (Capricorn)', 'कुंभ (Aquarius)', 'मीन (Pisces)'
];

export function calculateBhakoot(boyRashi: string, girlRashi: string): KootResult {
  const bIndex = RASHI_SLUGS.indexOf(boyRashi);
  const gIndex = RASHI_SLUGS.indexOf(girlRashi);

  if (bIndex === -1 || gIndex === -1) {
    return { name: 'भकूट (Bhakoot)', maxScore: 7, obtainedScore: 0, explanation: 'राशि की पहचान नहीं हो सकी।' };
  }

  // Distance from Boy to Girl (1 to 12)
  const distance = (gIndex - bIndex + 12) % 12 + 1;
  const reverseDistance = (bIndex - gIndex + 12) % 12 + 1;

  let score = 7;
  let explanation = `लड़के की राशि से लड़की की राशि की दूरी ${distance}/${reverseDistance} अक्ष पर है। `;

  if (distance === 1) {
    score = 7;
    explanation += 'एक ही राशि होने के कारण भकूट शुभ (7/7) है।';
  } else if (distance === 7) {
    score = 7;
    explanation += 'समसप्तक (7/7) भकूट शुभ (7/7) माना जाता है।';
  } else if (distance === 3 || distance === 11) {
    score = 7;
    explanation += 'एकादश-तृतीय (3/11) भकूट शुभ (7/7) माना जाता है।';
  } else if (distance === 4 || distance === 10) {
    score = 7;
    explanation += 'चतुर्थ-दशम (4/10) भकूट शुभ (7/7) माना जाता है।';
  } else if (distance === 2 || distance === 12) {
    score = 0;
    explanation += 'द्विर्द्वादश (2/12) भकूट दोष के कारण अशुभ (0/7) माना जाता है।';
  } else if (distance === 5 || distance === 9) {
    score = 0;
    explanation += 'नवपंचम (5/9) भकूट दोष के कारण अशुभ (0/7) माना जाता है।';
  } else if (distance === 6 || distance === 8) {
    score = 0;
    explanation += 'षडाष्टक (6/8) भकूट दोष के कारण अत्यंत अशुभ (0/7) माना जाता है।';
  }

  return {
    name: 'भकूट (Bhakoot)',
    maxScore: 7,
    obtainedScore: score,
    explanation
  };
}
