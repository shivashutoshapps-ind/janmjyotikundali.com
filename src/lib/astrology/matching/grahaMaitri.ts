import { KootResult } from './matchingTypes';

type Planet = 'Sun' | 'Moon' | 'Mars' | 'Mercury' | 'Jupiter' | 'Venus' | 'Saturn';

const RASHI_LORD: Record<string, Planet> = {
  'मेष (Aries)': 'Mars',
  'वृषभ (Taurus)': 'Venus',
  'मिथुन (Gemini)': 'Mercury',
  'कर्क (Cancer)': 'Moon',
  'सिंह (Leo)': 'Sun',
  'कन्या (Virgo)': 'Mercury',
  'तुला (Libra)': 'Venus',
  'वृश्चिक (Scorpio)': 'Mars',
  'धनु (Sagittarius)': 'Jupiter',
  'मकर (Capricorn)': 'Saturn',
  'कुंभ (Aquarius)': 'Saturn',
  'मीन (Pisces)': 'Jupiter'
};

const PLANET_NAMES: Record<Planet, string> = {
  'Sun': 'सूर्य', 'Moon': 'चंद्र', 'Mars': 'मंगल', 
  'Mercury': 'बुध', 'Jupiter': 'गुरु', 'Venus': 'शुक्र', 'Saturn': 'शनि'
};

// Values: 5=Best Friends/Same, 4=Friend/Neutral, 3=Neutral/Neutral, 1=Friend/Enemy, 0.5=Neutral/Enemy, 0=Enemy/Enemy
const MAITRI_SCORES: Record<Planet, Record<Planet, number>> = {
  'Sun':     { 'Sun':5, 'Moon':5, 'Mars':5, 'Mercury':4, 'Jupiter':5, 'Venus':0, 'Saturn':0 },
  'Moon':    { 'Sun':5, 'Moon':5, 'Mars':4, 'Mercury':1, 'Jupiter':4, 'Venus':0.5, 'Saturn':0.5 },
  'Mars':    { 'Sun':5, 'Moon':4, 'Mars':5, 'Mercury':0.5, 'Jupiter':5, 'Venus':3, 'Saturn':0.5 },
  'Mercury': { 'Sun':4, 'Moon':1, 'Mars':0.5, 'Mercury':5, 'Jupiter':0.5, 'Venus':5, 'Saturn':4 },
  'Jupiter': { 'Sun':5, 'Moon':4, 'Mars':5, 'Mercury':0.5, 'Jupiter':5, 'Venus':0.5, 'Saturn':3 },
  'Venus':   { 'Sun':0, 'Moon':0.5, 'Mars':3, 'Mercury':5, 'Jupiter':0.5, 'Venus':5, 'Saturn':5 },
  'Saturn':  { 'Sun':0, 'Moon':0.5, 'Mars':0.5, 'Mercury':4, 'Jupiter':3, 'Venus':5, 'Saturn':5 }
};

export function calculateGrahaMaitri(boyRashi: string, girlRashi: string): KootResult {
  const boyLord = RASHI_LORD[boyRashi];
  const girlLord = RASHI_LORD[girlRashi];

  if (!boyLord || !girlLord) {
    return { name: 'ग्रह मैत्री (Graha Maitri)', maxScore: 5, obtainedScore: 0, explanation: 'राशि स्वामी की पहचान नहीं हो सकी।' };
  }

  const score = MAITRI_SCORES[boyLord][girlLord];
  let explanation = `लड़के के राशि स्वामी ${PLANET_NAMES[boyLord]} और लड़की के राशि स्वामी ${PLANET_NAMES[girlLord]} हैं। `;

  if (score === 5) explanation += 'दोनों के राशि स्वामी परम मित्र हैं या समान हैं (5/5)।';
  else if (score === 4) explanation += 'एक मित्र और दूसरा सम (तटस्थ) है (4/5)।';
  else if (score === 3) explanation += 'दोनों के राशि स्वामी सम (तटस्थ) हैं (3/5)।';
  else if (score === 1) explanation += 'एक मित्र और दूसरा शत्रु है (1/5)।';
  else if (score === 0.5) explanation += 'एक सम और दूसरा शत्रु है (0.5/5)।';
  else explanation += 'दोनों के राशि स्वामी आपस में घोर शत्रु हैं (0/5)।';

  return {
    name: 'ग्रह मैत्री (Graha Maitri)',
    maxScore: 5,
    obtainedScore: score,
    explanation
  };
}
