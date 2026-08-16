/**
 * Mathematical utilities for Vedic Astrology conversions
 */

const RASHI_NAMES = [
  'मेष (Aries)', 'वृषभ (Taurus)', 'मिथुन (Gemini)', 'कर्क (Cancer)',
  'सिंह (Leo)', 'कन्या (Virgo)', 'तुला (Libra)', 'वृश्चिक (Scorpio)',
  'धनु (Sagittarius)', 'मकर (Capricorn)', 'कुंभ (Aquarius)', 'मीन (Pisces)'
];

const NAKSHATRA_NAMES = [
  'अश्विनी', 'भरणी', 'कृत्तिका', 'रोहिणी', 'मृगशिरा', 'आर्द्रा',
  'पुनर्वसु', 'पुष्य', 'आश्लेषा', 'मघा', 'पूर्वाफाल्गुनी', 'उत्तराफाल्गुनी',
  'हस्त', 'चित्रा', 'स्वाति', 'विशाखा', 'अनुराधा', 'ज्येष्ठा',
  'मूल', 'पूर्वाषाढ़ा', 'उत्तराषाढ़ा', 'श्रवण', 'धनिष्ठा', 'शतभिषा',
  'पूर्वाभाद्रपद', 'उत्तराभाद्रपद', 'रेवती'
];

/**
 * Normalizes any degree to the 0-360 range
 */
export function normalizeDegree(degree: number): number {
  let normalized = degree % 360;
  if (normalized < 0) normalized += 360;
  return normalized;
}

/**
 * Maps a sidereal longitude (0-360) to its corresponding Rashi (Sign)
 * Each Rashi is exactly 30 degrees.
 */
export function getRashiFromDegree(degree: number) {
  const norm = normalizeDegree(degree);
  const rashiIndex = Math.floor(norm / 30);
  const degreeInRashi = norm % 30;
  
  return {
    rashiIndex,
    rashiName: RASHI_NAMES[rashiIndex],
    degreeInRashi
  };
}

/**
 * Maps a sidereal longitude (0-360) to its corresponding Nakshatra
 * Each Nakshatra is exactly 13 degrees 20 minutes (13.333333... degrees).
 * Each Pada is exactly 3 degrees 20 minutes (3.333333... degrees).
 */
export function getNakshatraFromDegree(degree: number) {
  const norm = normalizeDegree(degree);
  const nakshatraExtent = 360 / 27; // 13.3333333...
  const padaExtent = nakshatraExtent / 4; // 3.3333333...

  const nakshatraIndex = Math.floor(norm / nakshatraExtent);
  const degreeInNakshatra = norm % nakshatraExtent;
  const pada = Math.floor(degreeInNakshatra / padaExtent) + 1;

  return {
    nakshatraIndex,
    nakshatraName: NAKSHATRA_NAMES[nakshatraIndex],
    pada,
    degreeInNakshatra
  };
}

/**
 * Formats a decimal degree into Degrees° Minutes' Seconds" format
 */
export function formatDMS(degree: number): string {
  const norm = normalizeDegree(degree);
  const d = Math.floor(norm);
  const m = Math.floor((norm - d) * 60);
  const s = Math.floor(((norm - d) * 60 - m) * 60);
  
  return `${d}° ${m}' ${s}"`;
}
