import { AstroTime, Body, Observer, SearchRiseSet, Equator, Ecliptic } from 'astronomy-engine';
import { getLahiriAyanamsa } from './ayanamsa';
import { convertToSidereal, normalizeLongitude } from './sidereal';
import { getNakshatraFromDegree } from './math';
import { PanchangResult, BirthPlace } from '../types';

const TITHI_NAMES = [
  'प्रतिपदा (Pratipada)', 'द्वितीया (Dwitiya)', 'तृतीया (Tritiya)', 'चतुर्थी (Chaturthi)',
  'पंचमी (Panchami)', 'षष्ठी (Shashthi)', 'सप्तमी (Saptami)', 'अष्टमी (Ashtami)',
  'नवमी (Navami)', 'दशमी (Dashami)', 'एकादशी (Ekadashi)', 'द्वादशी (Dwadashi)',
  'त्रयोदशी (Trayodashi)', 'चतुर्दशी (Chaturdashi)', 'पूर्णिमा (Purnima) / अमावस्या (Amavasya)'
];

const YOGA_NAMES = [
  'विष्कुम्भ', 'प्रीति', 'आयुष्मान', 'सौभाग्य', 'शोभन', 'अतिगण्ड', 'सुकर्मा', 'धृति',
  'शूल', 'गण्ड', 'वृद्धि', 'ध्रुव', 'व्याघात', 'हर्षण', 'वज्र', 'सिद्धि',
  'व्यतीपात', 'वरीयान', 'परिघ', 'शिव', 'सिद्ध', 'साध्य', 'शुभ', 'शुक्ल',
  'ब्रह्म', 'ऐन्द्र', 'वैधृति'
];

const KARANA_NAMES = [
  'बव', 'बालव', 'कौलव', 'तैतिल', 'गर', 'वणिज', 'विष्टि', 'शकुनि', 'चतुष्पाद', 'नाग', 'किंस्तुघ्न'
];

const VARA_NAMES = [
  'रविवार (Sunday)', 'सोमवार (Monday)', 'मंगलवार (Tuesday)', 
  'बुधवार (Wednesday)', 'गुरुवार (Thursday)', 'शुक्रवार (Friday)', 'शनिवार (Saturday)'
];

/**
 * Calculates basic Panchang elements for a specific time and location
 */
export function calculatePanchang(utcTime: Date, place: BirthPlace): PanchangResult {
  const time = new AstroTime(utcTime);
  const observer = new Observer(place.latitude || 28.6139, place.longitude || 77.2090, 0); // Default to New Delhi if undefined
  
  // 1. Get Sun and Moon longitudes (Tropical geocentric/topocentric)
  const sunEqu = Equator(Body.Sun, time, observer, true, true);
  const moonEqu = Equator(Body.Moon, time, observer, true, true);
  const sunTropLon = Ecliptic(sunEqu.vec).elon;
  const moonTropLon = Ecliptic(moonEqu.vec).elon;
  
  const ayanamsa = getLahiriAyanamsa(time.ut);
  
  const sunSidereal = convertToSidereal(sunTropLon, ayanamsa);
  const moonSidereal = convertToSidereal(moonTropLon, ayanamsa);
  
  // 2. Tithi (Moon Longitude - Sun Longitude) / 12
  let tithiDiff = normalizeLongitude(moonTropLon - sunTropLon); // Tithi is based on relative distance, so tropical/sidereal diff is the same
  const tithiIndex = Math.floor(tithiDiff / 12.0);
  const isShukla = tithiDiff < 180;
  
  let tithiName = TITHI_NAMES[tithiIndex % 15];
  if (tithiIndex === 14) tithiName = isShukla ? 'पूर्णिमा (Purnima)' : 'अमावस्या (Amavasya)';
  else if (tithiIndex > 14) tithiName = tithiName + ' (Krishna Paksha)';
  else tithiName = tithiName + ' (Shukla Paksha)';
  
  // 3. Yoga (Moon Sidereal + Sun Sidereal) / 13°20'
  const yogaSum = normalizeLongitude(moonSidereal + sunSidereal);
  const yogaIndex = Math.floor(yogaSum / (360.0 / 27.0));
  const yogaName = YOGA_NAMES[yogaIndex];
  
  // 4. Karana (Tithi difference / 6)
  const karanaIndexFull = Math.floor(tithiDiff / 6.0);
  // Karana calculation has specific repeating rules (Bava to Vishti repeat 8 times starting 2nd half of Pratipada Shukla)
  let karanaName = '';
  if (karanaIndexFull === 0) karanaName = 'किंस्तुघ्न';
  else if (karanaIndexFull === 57) karanaName = 'शकुनि';
  else if (karanaIndexFull === 58) karanaName = 'चतुष्पाद';
  else if (karanaIndexFull === 59) karanaName = 'नाग';
  else karanaName = KARANA_NAMES[((karanaIndexFull - 1) % 7)];
  
  // 5. Nakshatra
  const nakshatraInfo = getNakshatraFromDegree(moonSidereal);
  
  // 6. Vara (Day of week from local date)
  // For strict Vedic Vara, it's based on sunrise to sunrise. We use a simple JS Date approximation for now based on local offset.
  const localDate = new Date(utcTime.getTime());
  const varaName = VARA_NAMES[localDate.getUTCDay()];
  
  // 7. Sunrise/Sunset
  // Using SearchRiseSet. +1 = Rise, -1 = Set
  let sunriseStr = '-';
  let sunsetStr = '-';
  
  try {
    const sunrise = SearchRiseSet(Body.Sun, observer, -1, time, 1);
    if (sunrise) {
      sunriseStr = sunrise.date.toISOString().split('T')[1].substring(0, 5) + ' UTC';
    }
    const sunset = SearchRiseSet(Body.Sun, observer, -1, time, -1);
    if (sunset) {
      sunsetStr = sunset.date.toISOString().split('T')[1].substring(0, 5) + ' UTC';
    }
  } catch(e) {
    // Polaris or extreme latitudes might not have rise/set
  }
  
  return {
    date: utcTime.toISOString().split('T')[0],
    tithi: tithiName,
    nakshatra: nakshatraInfo.nakshatraName,
    yoga: yogaName,
    karana: karanaName,
    vara: varaName,
    sunrise: sunriseStr,
    sunset: sunsetStr,
    moonrise: '-',
    moonset: '-'
  };
}
