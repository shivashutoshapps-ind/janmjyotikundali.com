/**
 * Additional math helpers specifically to resolve import references
 */
import { normalizeLongitude } from './sidereal';

const NAKSHATRA_NAMES = [
  'अश्विनी (Ashwini)', 'भरणी (Bharani)', 'कृत्तिका (Krittika)', 'रोहिणी (Rohini)', 
  'मृगशिरा (Mrigashira)', 'आर्द्रा (Ardra)', 'पुनर्वसु (Punarvasu)', 'पुष्य (Pushya)', 
  'आश्लेषा (Ashlesha)', 'मघा (Magha)', 'पूर्वाफाल्गुनी (Purva Phalguni)', 'उत्तराफाल्गुनी (Uttara Phalguni)',
  'हस्त (Hasta)', 'चित्रा (Chitra)', 'स्वाति (Swati)', 'विशाखा (Vishakha)', 
  'अनुराधा (Anuradha)', 'ज्येष्ठा (Jyeshtha)', 'मूल (Mula)', 'पूर्वाषाढ़ा (Purva Ashadha)', 
  'उत्तराषाढ़ा (Uttara Ashadha)', 'श्रवण (Shravana)', 'धनिष्ठा (Dhanishta)', 'शतभिषा (Shatabhisha)',
  'पूर्वाभाद्रपद (Purva Bhadrapada)', 'उत्तराभाद्रपद (Uttara Bhadrapada)', 'रेवती (Revati)'
];

export function getNakshatraFromDegree(degree: number) {
  const norm = normalizeLongitude(degree);
  const nakshatraExtent = 360 / 27;
  const padaExtent = nakshatraExtent / 4;

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
