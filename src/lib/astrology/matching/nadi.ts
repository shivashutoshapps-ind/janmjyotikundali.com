import { KootResult } from './matchingTypes';
import { getNakshatraIndex } from './tara';

type NadiType = 'Adi' | 'Madhya' | 'Antya';

const NADI_MAPPING: NadiType[] = [
  'Adi', 'Madhya', 'Antya', 'Antya', 'Madhya', 'Adi', 'Adi', 'Madhya', 'Antya', // 0-8
  'Antya', 'Madhya', 'Adi', 'Adi', 'Madhya', 'Antya', 'Antya', 'Madhya', 'Adi', // 9-17
  'Adi', 'Madhya', 'Antya', 'Antya', 'Madhya', 'Adi', 'Adi', 'Madhya', 'Antya'  // 18-26
];

const NADI_NAMES: Record<NadiType, string> = {
  'Adi': 'आदि (Adi)',
  'Madhya': 'मध्य (Madhya)',
  'Antya': 'अन्त्य (Antya)'
};

export function calculateNadi(boyNakshatra: string, girlNakshatra: string): KootResult {
  const bIndex = getNakshatraIndex(boyNakshatra);
  const gIndex = getNakshatraIndex(girlNakshatra);

  if (bIndex === -1 || gIndex === -1) {
    return { name: 'नाड़ी (Nadi)', maxScore: 8, obtainedScore: 0, explanation: 'नक्षत्र की पहचान नहीं हो सकी।' };
  }

  const boyNadi = NADI_MAPPING[bIndex];
  const girlNadi = NADI_MAPPING[gIndex];

  let score = 0;
  let explanation = `लड़के की नाड़ी ${NADI_NAMES[boyNadi]} और लड़की की नाड़ी ${NADI_NAMES[girlNadi]} है। `;

  if (boyNadi !== girlNadi) {
    score = 8;
    explanation += 'दोनों की नाड़ी भिन्न है, जो कि अत्यंत शुभ (8/8) है।';
  } else {
    score = 0;
    explanation += 'एक ही नाड़ी होने के कारण नाड़ी दोष (0/8) है, जिसे परंपरागत रूप से बहुत अशुभ माना जाता है।';
  }

  return {
    name: 'नाड़ी (Nadi)',
    maxScore: 8,
    obtainedScore: score,
    explanation
  };
}
