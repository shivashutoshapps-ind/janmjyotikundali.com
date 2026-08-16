import { KootResult } from './matchingTypes';
import { getNakshatraIndex } from './tara';

type GanaType = 'Deva' | 'Manushya' | 'Rakshasa';

const GANA_MAPPING: GanaType[] = [
  'Deva', 'Manushya', 'Rakshasa', 'Manushya', 'Deva', 'Manushya', 'Deva', 'Deva', 'Rakshasa', // 0-8
  'Rakshasa', 'Manushya', 'Manushya', 'Deva', 'Rakshasa', 'Deva', 'Rakshasa', 'Deva', 'Rakshasa', // 9-17
  'Rakshasa', 'Manushya', 'Manushya', 'Deva', 'Rakshasa', 'Rakshasa', 'Manushya', 'Manushya', 'Deva' // 18-26
];

const GANA_NAMES: Record<GanaType, string> = {
  'Deva': 'देव (Deva)',
  'Manushya': 'मनुष्य (Manushya)',
  'Rakshasa': 'राक्षस (Rakshasa)'
};

// Rows: Boy, Columns: Girl
const GANA_SCORES: Record<GanaType, Record<GanaType, number>> = {
  'Deva':     { 'Deva': 6, 'Manushya': 6, 'Rakshasa': 1 },
  'Manushya': { 'Deva': 5, 'Manushya': 6, 'Rakshasa': 0 },
  'Rakshasa': { 'Deva': 0, 'Manushya': 0, 'Rakshasa': 6 }
};

export function calculateGana(boyNakshatra: string, girlNakshatra: string): KootResult {
  const bIndex = getNakshatraIndex(boyNakshatra);
  const gIndex = getNakshatraIndex(girlNakshatra);

  if (bIndex === -1 || gIndex === -1) {
    return { name: 'गण (Gana)', maxScore: 6, obtainedScore: 0, explanation: 'नक्षत्र की पहचान नहीं हो सकी।' };
  }

  const boyGana = GANA_MAPPING[bIndex];
  const girlGana = GANA_MAPPING[gIndex];

  const score = GANA_SCORES[boyGana][girlGana];
  let explanation = `लड़के का गण ${GANA_NAMES[boyGana]} और लड़की का गण ${GANA_NAMES[girlGana]} है। `;

  if (score === 6) explanation += 'दोनों के गणों में उत्तम अनुकूलता (6/6) है।';
  else if (score === 5) explanation += 'दोनों के गणों में बहुत अच्छी अनुकूलता (5/6) है।';
  else if (score === 1) explanation += 'गणों में मतभेद है (1/6)।';
  else explanation += 'गणों में घोर प्रतिकूलता (गण दोष) है (0/6)।';

  return {
    name: 'गण (Gana)',
    maxScore: 6,
    obtainedScore: score,
    explanation
  };
}
