import { AstroTime, Body, Observer, SearchRiseSet, Equator, Ecliptic } from 'astronomy-engine';
import { getLahiriAyanamsa } from './ayanamsa';
import { convertToSidereal, normalizeLongitude } from './sidereal';
import { calculateNakshatra } from './nakshatra';
import { PanchangResult, BirthPlace, Choghadiya } from '../types';
import { calculateKaals } from './kaals';
import { calculateChoghadiya } from './choghadiya';

const TITHI_NAMES = [
  'प्रतिपदा (Pratipada)', 'द्वितीया (Dwitiya)', 'तृतीया (Tritiya)', 'चतुर्थी (Chaturthi)',
  'पंचमी (Panchami)', 'षष्ठी (Shashthi)', 'सप्तमी (Saptami)', 'अष्टमी (Ashtami)',
  'नवमी (Navami)', 'दशमी (Dashami)', 'एकादशी (Ekadashi)', 'द्वादशी (Dwadashi)',
  'त्रयोदशी (Trayodashi)', 'चतुर्दशी (Chaturdashi)', 'पूर्णिमा (Purnima)', 'अमावस्या (Amavasya)'
];

const YOGA_NAMES = [
  'विष्कुम्भ (Vishkumbha)', 'प्रीति (Priti)', 'आयुष्मान (Ayushman)', 'सौभाग्य (Saubhagya)', 'शोभन (Shobhana)', 'अतिगण्ड (Atiganda)', 'सुकर्मा (Sukarma)', 'धृति (Dhriti)',
  'शूल (Shoola)', 'गण्ड (Ganda)', 'वृद्धि (Vriddhi)', 'ध्रुव (Dhruva)', 'व्याघात (Vyaghata)', 'हर्षण (Harshana)', 'वज्र (Vajra)', 'सिद्धि (Siddhi)',
  'व्यतीपात (Vyatipata)', 'वरीयान (Variyana)', 'परिघ (Parigha)', 'शिव (Shiva)', 'सिद्ध (Siddha)', 'साध्य (Sadhya)', 'शुभ (Shubha)', 'शुक्ल (Shukla)',
  'ब्रह्म (Brahma)', 'ऐन्द्र (Indra)', 'वैधृति (Vaidhriti)'
];

const KARANA_NAMES = [
  'बव (Bava)', 'बालव (Balava)', 'कौलव (Kaulava)', 'तैतिल (Taitila)', 'गर (Gara)', 'वणिज (Vanija)', 'विष्टि/भद्रा (Vishti)'
];

const VARA_NAMES = [
  'रविवार (Sunday)', 'सोमवार (Monday)', 'मंगलवार (Tuesday)', 
  'बुधवार (Wednesday)', 'गुरुवार (Thursday)', 'शुक्रवार (Friday)', 'शनिवार (Saturday)'
];

function getStartOfLocalDay(utcTime: Date, offsetHours: number): Date {
  const localDate = new Date(utcTime.getTime() + offsetHours * 3600000);
  const year = localDate.getUTCFullYear();
  const month = localDate.getUTCMonth();
  const date = localDate.getUTCDate();
  
  return new Date(Date.UTC(year, month, date) - offsetHours * 3600000);
}

export function calculatePanchang(targetDateUtc: Date, place: BirthPlace): PanchangResult {
  // Approximate standard Indian timezone
  const offsetHours = 5.5; 
  
  // 1. Get midnight of the local requested date
  const startOfDayUtc = getStartOfLocalDay(targetDateUtc, offsetHours);
  const nextDayUtc = new Date(startOfDayUtc.getTime() + 24 * 3600000);
  
  const observer = new Observer(place.latitude || 28.6139, place.longitude || 77.2090, 0);

  // Default Rise/Set times (fallback if astronomically absent e.g., polar)
  let sunriseDate: Date | null = null;
  let sunsetDate: Date | null = null;
  let nextSunriseDate: Date | null = null;
  let moonriseDate: Date | null = null;
  let moonsetDate: Date | null = null;

  const formatTime = (d: Date | null) => d ? d.toISOString() : '-';

  try {
    const sunriseObj = SearchRiseSet(Body.Sun, observer, 1, new AstroTime(startOfDayUtc), 1);
    if (sunriseObj) sunriseDate = sunriseObj.date;

    const sunsetObj = SearchRiseSet(Body.Sun, observer, -1, new AstroTime(startOfDayUtc), 1);
    if (sunsetObj) sunsetDate = sunsetObj.date;

    if (sunriseDate) {
      const nextSunriseObj = SearchRiseSet(Body.Sun, observer, 1, new AstroTime(new Date(sunriseDate.getTime() + 24 * 3600000)), 1);
      if (nextSunriseObj) nextSunriseDate = nextSunriseObj.date;
    }

    const moonriseObj = SearchRiseSet(Body.Moon, observer, 1, new AstroTime(startOfDayUtc), 1);
    if (moonriseObj) moonriseDate = moonriseObj.date;

    const moonsetObj = SearchRiseSet(Body.Moon, observer, -1, new AstroTime(startOfDayUtc), 1);
    if (moonsetObj) moonsetDate = moonsetObj.date;

  } catch (e) {
    console.error("Rise/Set calculation failed:", e);
  }

  // Panchang calculations are traditionally at Sunrise
  const panchangTimeDate = sunriseDate || startOfDayUtc;
  const time = new AstroTime(panchangTimeDate);
  const ayanamsa = getLahiriAyanamsa(time.ut);

  const sunEqu = Equator(Body.Sun, time, observer, true, true);
  const moonEqu = Equator(Body.Moon, time, observer, true, true);
  
  const sunTropLon = Ecliptic(sunEqu.vec).elon;
  const moonTropLon = Ecliptic(moonEqu.vec).elon;
  const sunSidereal = convertToSidereal(sunTropLon, ayanamsa);
  const moonSidereal = convertToSidereal(moonTropLon, ayanamsa);

  // 2. Tithi
  let tithiDiff = normalizeLongitude(moonTropLon - sunTropLon);
  const tithiIndex = Math.floor(tithiDiff / 12.0);
  const paksha = tithiDiff < 180 ? 'Shukla' : 'Krishna';
  
  let tithiNameIndex = tithiIndex % 15;
  if (tithiIndex === 14) tithiNameIndex = 14; // Purnima
  if (tithiIndex === 29) tithiNameIndex = 15; // Amavasya
  
  // 3. Yoga
  const yogaSum = normalizeLongitude(moonSidereal + sunSidereal);
  const yogaIndex = Math.floor(yogaSum / (360.0 / 27.0));
  
  // 4. Karana
  const karanaIndexFull = Math.floor(tithiDiff / 6.0);
  let karanaName = '';
  if (karanaIndexFull === 0) karanaName = 'किंस्तुघ्न (Kintughna)';
  else if (karanaIndexFull === 57) karanaName = 'शकुनि (Shakuni)';
  else if (karanaIndexFull === 58) karanaName = 'चतुष्पाद (Chatushpada)';
  else if (karanaIndexFull === 59) karanaName = 'नाग (Naga)';
  else karanaName = KARANA_NAMES[((karanaIndexFull - 1) % 7)];
  
  // 5. Nakshatra
  const nakshatraInfo = calculateNakshatra(moonSidereal);

  // 6. Vara (Weekday at sunrise local)
  const localSunriseTime = new Date((sunriseDate || startOfDayUtc).getTime() + offsetHours * 3600000);
  const weekdayIndex = localSunriseTime.getUTCDay();

  // Kaals & Choghadiya
  let kaals = {
    rahuKaal: { name: 'राहु काल', start: '-', end: '-' },
    yamaganda: { name: 'यमगंड', start: '-', end: '-' },
    gulika: { name: 'गुलिक काल', start: '-', end: '-' }
  };
  let choghadiya: { day: Choghadiya[], night: Choghadiya[] } = { day: [], night: [] };

  if (sunriseDate && sunsetDate) {
    kaals = calculateKaals(sunriseDate, sunsetDate, weekdayIndex);
    if (nextSunriseDate) {
      choghadiya = calculateChoghadiya(sunriseDate, sunsetDate, nextSunriseDate, weekdayIndex);
    }
  }

  // Use the local Date string as the result date
  const localDisplayDate = new Date(targetDateUtc.getTime() + offsetHours * 3600000);
  const dateStr = `${localDisplayDate.getUTCFullYear()}-${String(localDisplayDate.getUTCMonth()+1).padStart(2, '0')}-${String(localDisplayDate.getUTCDate()).padStart(2, '0')}`;

  return {
    date: dateStr,
    location: place,
    vara: VARA_NAMES[weekdayIndex],
    sunrise: formatTime(sunriseDate),
    sunset: formatTime(sunsetDate),
    moonrise: formatTime(moonriseDate),
    moonset: formatTime(moonsetDate),
    tithi: {
      number: (tithiIndex % 15) + 1,
      name: TITHI_NAMES[tithiNameIndex],
      paksha
    },
    nakshatra: nakshatraInfo,
    yoga: {
      number: yogaIndex + 1,
      name: YOGA_NAMES[yogaIndex]
    },
    karana: {
      number: karanaIndexFull + 1,
      name: karanaName
    },
    rahuKaal: kaals.rahuKaal,
    yamaganda: kaals.yamaganda,
    gulika: kaals.gulika,
    dayChoghadiya: choghadiya.day,
    nightChoghadiya: choghadiya.night
  };
}
