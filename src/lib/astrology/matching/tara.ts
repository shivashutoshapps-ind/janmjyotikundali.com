import { KootResult } from './matchingTypes';

export const NAKSHATRA_NAMES = [
  'अश्विनी (Ashwini)', 'भरणी (Bharani)', 'कृत्तिका (Krittika)', 'रोहिणी (Rohini)', 
  'मृगशिरा (Mrigashira)', 'आर्द्रा (Ardra)', 'पुनर्वसु (Punarvasu)', 'पुष्य (Pushya)', 
  'आश्लेषा (Ashlesha)', 'मघा (Magha)', 'पूर्वाफाल्गुनी (Purva Phalguni)', 'उत्तराफाल्गुनी (Uttara Phalguni)',
  'हस्त (Hasta)', 'चित्रा (Chitra)', 'स्वाति (Swati)', 'विशाखा (Vishakha)', 
  'अनुराधा (Anuradha)', 'ज्येष्ठा (Jyeshtha)', 'मूल (Mula)', 'पूर्वाषाढ़ा (Purva Ashadha)', 
  'उत्तराषाढ़ा (Uttara Ashadha)', 'श्रवण (Shravana)', 'धनिष्ठा (Dhanishta)', 'शतभिषा (Shatabhisha)',
  'पूर्वाभाद्रपद (Purva Bhadrapada)', 'उत्तराभाद्रपद (Uttara Bhadrapada)', 'रेवती (Revati)'
];

export function getNakshatraIndex(nakshatraName: string): number {
  return NAKSHATRA_NAMES.indexOf(nakshatraName);
}

export function calculateTara(boyNakshatra: string, girlNakshatra: string): KootResult {
  const bIndex = getNakshatraIndex(boyNakshatra);
  const gIndex = getNakshatraIndex(girlNakshatra);

  if (bIndex === -1 || gIndex === -1) {
    return { name: 'तारा (Tara)', maxScore: 3, obtainedScore: 0, explanation: 'नक्षत्र की पहचान नहीं हो सकी।' };
  }

  // Distance from Boy to Girl
  const bToG = (gIndex - bIndex + 27) % 27 + 1;
  // Distance from Girl to Boy
  const gToB = (bIndex - gIndex + 27) % 27 + 1;

  const bToGTara = bToG % 9;
  const gToBTara = gToB % 9;

  // 3, 5, 7 are inauspicious (0 points). Others are auspicious (1.5 points).
  const inauspicious = [3, 5, 7];
  
  const bScore = inauspicious.includes(bToGTara) ? 0 : 1.5;
  const gScore = inauspicious.includes(gToBTara) ? 0 : 1.5;
  
  const totalScore = bScore + gScore;

  let explanation = '';
  if (totalScore === 3) explanation = 'दोनों की तारा (जन्म नक्षत्र से दूरी) शुभ है। (3/3)';
  else if (totalScore === 1.5) explanation = 'एक की तारा शुभ और दूसरे की अशुभ है। (1.5/3)';
  else explanation = 'दोनों की तारा अशुभ है। (0/3)';

  return {
    name: 'तारा (Tara)',
    maxScore: 3,
    obtainedScore: totalScore,
    explanation
  };
}
