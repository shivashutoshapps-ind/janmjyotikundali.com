import { KootResult } from './matchingTypes';
import { getNakshatraIndex } from './tara';

type YoniType = 'Ashwa' | 'Gaja' | 'Mesha' | 'Sarpa' | 'Shvan' | 'Marjar' | 'Mushak' | 'Gau' | 'Mahish' | 'Vyaghra' | 'Mriga' | 'Vanar' | 'Nakul' | 'Simha';

const YONI_MAPPING: YoniType[] = [
  'Ashwa', 'Gaja', 'Mesha', 'Sarpa', // 0-3
  'Sarpa', 'Shvan', 'Marjar', 'Mesha', // 4-7
  'Marjar', 'Mushak', 'Mushak', 'Gau', // 8-11
  'Mahish', 'Vyaghra', 'Mahish', 'Vyaghra', // 12-15
  'Mriga', 'Mriga', 'Shvan', 'Vanar', // 16-19
  'Nakul', 'Vanar', 'Simha', 'Ashwa', // 20-23
  'Simha', 'Gau', 'Gaja' // 24-26
];

const YONI_NAMES: Record<YoniType, string> = {
  'Ashwa': 'अश्व (Horse)',
  'Gaja': 'गज (Elephant)',
  'Mesha': 'मेष (Sheep)',
  'Sarpa': 'सर्प (Serpent)',
  'Shvan': 'श्वान (Dog)',
  'Marjar': 'मार्जार (Cat)',
  'Mushak': 'मूषक (Rat)',
  'Gau': 'गौ (Cow)',
  'Mahish': 'महिष (Buffalo)',
  'Vyaghra': 'व्याघ्र (Tiger)',
  'Mriga': 'मृग (Deer)',
  'Vanar': 'वानर (Monkey)',
  'Nakul': 'नकुल (Mongoose)',
  'Simha': 'सिंह (Lion)'
};

// Simplified standard Yoni scoring matrix. 
// Rows & Columns are mapped based on traditional enmity/friendship.
// (4 = Same, 3 = Friend, 2 = Neutral, 1 = Enemy, 0 = Sworn Enemy)
const YONI_SCORES: Record<YoniType, Record<YoniType, number>> = {
  'Ashwa':  { 'Ashwa':4, 'Gaja':2, 'Mesha':2, 'Sarpa':3, 'Shvan':2, 'Marjar':2, 'Mushak':2, 'Gau':2, 'Mahish':0, 'Vyaghra':1, 'Mriga':3, 'Vanar':3, 'Nakul':2, 'Simha':1 },
  'Gaja':   { 'Ashwa':2, 'Gaja':4, 'Mesha':3, 'Sarpa':3, 'Shvan':2, 'Marjar':2, 'Mushak':2, 'Gau':2, 'Mahish':2, 'Vyaghra':1, 'Mriga':2, 'Vanar':3, 'Nakul':2, 'Simha':0 },
  'Mesha':  { 'Ashwa':2, 'Gaja':3, 'Mesha':4, 'Sarpa':2, 'Shvan':1, 'Marjar':2, 'Mushak':2, 'Gau':3, 'Mahish':2, 'Vyaghra':1, 'Mriga':2, 'Vanar':0, 'Nakul':2, 'Simha':1 },
  'Sarpa':  { 'Ashwa':3, 'Gaja':3, 'Mesha':2, 'Sarpa':4, 'Shvan':2, 'Marjar':1, 'Mushak':1, 'Gau':2, 'Mahish':2, 'Vyaghra':2, 'Mriga':2, 'Vanar':2, 'Nakul':0, 'Simha':2 },
  'Shvan':  { 'Ashwa':2, 'Gaja':2, 'Mesha':1, 'Sarpa':2, 'Shvan':4, 'Marjar':2, 'Mushak':1, 'Gau':2, 'Mahish':2, 'Vyaghra':1, 'Mriga':0, 'Vanar':2, 'Nakul':2, 'Simha':1 },
  'Marjar': { 'Ashwa':2, 'Gaja':2, 'Mesha':2, 'Sarpa':1, 'Shvan':2, 'Marjar':4, 'Mushak':0, 'Gau':2, 'Mahish':2, 'Vyaghra':1, 'Mriga':2, 'Vanar':3, 'Nakul':2, 'Simha':1 },
  'Mushak': { 'Ashwa':2, 'Gaja':2, 'Mesha':2, 'Sarpa':1, 'Shvan':1, 'Marjar':0, 'Mushak':4, 'Gau':2, 'Mahish':2, 'Vyaghra':2, 'Mriga':2, 'Vanar':2, 'Nakul':1, 'Simha':2 },
  'Gau':    { 'Ashwa':2, 'Gaja':2, 'Mesha':3, 'Sarpa':2, 'Shvan':2, 'Marjar':2, 'Mushak':2, 'Gau':4, 'Mahish':3, 'Vyaghra':0, 'Mriga':3, 'Vanar':2, 'Nakul':2, 'Simha':1 },
  'Mahish': { 'Ashwa':0, 'Gaja':2, 'Mesha':2, 'Sarpa':2, 'Shvan':2, 'Marjar':2, 'Mushak':2, 'Gau':3, 'Mahish':4, 'Vyaghra':1, 'Mriga':2, 'Vanar':2, 'Nakul':2, 'Simha':1 },
  'Vyaghra':{ 'Ashwa':1, 'Gaja':1, 'Mesha':1, 'Sarpa':2, 'Shvan':1, 'Marjar':1, 'Mushak':2, 'Gau':0, 'Mahish':1, 'Vyaghra':4, 'Mriga':1, 'Vanar':2, 'Nakul':2, 'Simha':1 },
  'Mriga':  { 'Ashwa':3, 'Gaja':2, 'Mesha':2, 'Sarpa':2, 'Shvan':0, 'Marjar':2, 'Mushak':2, 'Gau':3, 'Mahish':2, 'Vyaghra':1, 'Mriga':4, 'Vanar':2, 'Nakul':2, 'Simha':1 },
  'Vanar':  { 'Ashwa':3, 'Gaja':3, 'Mesha':0, 'Sarpa':2, 'Shvan':2, 'Marjar':3, 'Mushak':2, 'Gau':2, 'Mahish':2, 'Vyaghra':2, 'Mriga':2, 'Vanar':4, 'Nakul':2, 'Simha':2 },
  'Nakul':  { 'Ashwa':2, 'Gaja':2, 'Mesha':2, 'Sarpa':0, 'Shvan':2, 'Marjar':2, 'Mushak':1, 'Gau':2, 'Mahish':2, 'Vyaghra':2, 'Mriga':2, 'Vanar':2, 'Nakul':4, 'Simha':2 },
  'Simha':  { 'Ashwa':1, 'Gaja':0, 'Mesha':1, 'Sarpa':2, 'Shvan':1, 'Marjar':1, 'Mushak':2, 'Gau':1, 'Mahish':1, 'Vyaghra':1, 'Mriga':1, 'Vanar':2, 'Nakul':2, 'Simha':4 }
};

export function calculateYoni(boyNakshatra: string, girlNakshatra: string): KootResult {
  const bIndex = getNakshatraIndex(boyNakshatra);
  const gIndex = getNakshatraIndex(girlNakshatra);

  if (bIndex === -1 || gIndex === -1) {
    return { name: 'योनि (Yoni)', maxScore: 4, obtainedScore: 0, explanation: 'नक्षत्र की पहचान नहीं हो सकी।' };
  }

  const boyYoni = YONI_MAPPING[bIndex];
  const girlYoni = YONI_MAPPING[gIndex];

  const score = YONI_SCORES[boyYoni][girlYoni];
  
  let explanation = `लड़के की योनि ${YONI_NAMES[boyYoni]} और लड़की की योनि ${YONI_NAMES[girlYoni]} है। `;
  if (score === 4) explanation += 'दोनों की योनि समान है, जो उत्तम तालमेल (4/4) है।';
  else if (score === 3) explanation += 'दोनों के बीच मित्र भाव (3/4) है।';
  else if (score === 2) explanation += 'दोनों के बीच सम (सामान्य) भाव (2/4) है।';
  else if (score === 1) explanation += 'दोनों के बीच शत्रु भाव (1/4) है।';
  else explanation += 'दोनों के बीच घोर शत्रुता (0/4) है।';

  return {
    name: 'योनि (Yoni)',
    maxScore: 4,
    obtainedScore: score,
    explanation
  };
}
