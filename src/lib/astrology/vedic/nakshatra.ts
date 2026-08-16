import { normalizeLongitude, formatDMS } from './sidereal';
import { NakshatraResult } from '../types';

const NAKSHATRA_NAMES = [
  'अश्विनी (Ashwini)', 'भरणी (Bharani)', 'कृत्तिका (Krittika)', 'रोहिणी (Rohini)', 
  'मृगशिरा (Mrigashira)', 'आर्द्रा (Ardra)', 'पुनर्वसु (Punarvasu)', 'पुष्य (Pushya)', 
  'आश्लेषा (Ashlesha)', 'मघा (Magha)', 'पूर्वाफाल्गुनी (Purva Phalguni)', 'उत्तराफाल्गुनी (Uttara Phalguni)',
  'हस्त (Hasta)', 'चित्रा (Chitra)', 'स्वाति (Swati)', 'विशाखा (Vishakha)', 
  'अनुराधा (Anuradha)', 'ज्येष्ठा (Jyeshtha)', 'मूल (Mula)', 'पूर्वाषाढ़ा (Purva Ashadha)', 
  'उत्तराषाढ़ा (Uttara Ashadha)', 'श्रवण (Shravana)', 'धनिष्ठा (Dhanishta)', 'शतभिषा (Shatabhisha)',
  'पूर्वाभाद्रपद (Purva Bhadrapada)', 'उत्तराभाद्रपद (Uttara Bhadrapada)', 'रेवती (Revati)'
];

const NAKSHATRA_LORDS = [
  'केतु (Ketu)', 'शुक्र (Venus)', 'सूर्य (Sun)', 'चंद्र (Moon)', 
  'मंगल (Mars)', 'राहु (Rahu)', 'गुरु (Jupiter)', 'शनि (Saturn)', 
  'बुध (Mercury)'
];

/**
 * Calculates Nakshatra details from a sidereal longitude
 */
export function calculateNakshatra(siderealLongitude: number): NakshatraResult {
  const norm = normalizeLongitude(siderealLongitude);
  const nakshatraExtent = 360.0 / 27.0; // 13.333333... degrees
  const padaExtent = nakshatraExtent / 4.0; // 3.333333... degrees

  const index = Math.floor(norm / nakshatraExtent);
  const degreeInNakshatra = norm % nakshatraExtent;
  const pada = Math.floor(degreeInNakshatra / padaExtent) + 1;
  
  // Nakshatra lords follow a cyclical pattern of 9 planets
  const lordIndex = index % 9;
  
  const dms = formatDMS(degreeInNakshatra);

  return {
    nakshatra: NAKSHATRA_NAMES[index],
    pada: pada,
    lord: NAKSHATRA_LORDS[lordIndex],
    deity: 'उपलब्ध नहीं (Not mapped yet)',
    description: `${NAKSHATRA_NAMES[index]} नक्षत्र, चरण ${pada} में ${dms.formatted}`
  };
}
