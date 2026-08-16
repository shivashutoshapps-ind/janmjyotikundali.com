import { AstroTime, Observer, SiderealTime } from 'astronomy-engine';
import { getLahiriAyanamsa } from './ayanamsa';
import { normalizeLongitude, convertToSidereal, formatDMS } from './sidereal';
import { getRashiIndex } from './rashi';
import { LagnaResult, BirthData } from '../types';

const RASHI_NAMES = [
  'मेष (Aries)', 'वृषभ (Taurus)', 'मिथुन (Gemini)', 'कर्क (Cancer)',
  'सिंह (Leo)', 'कन्या (Virgo)', 'तुला (Libra)', 'वृश्चिक (Scorpio)',
  'धनु (Sagittarius)', 'मकर (Capricorn)', 'कुंभ (Aquarius)', 'मीन (Pisces)'
];

const RASHI_LORDS = [
  'मंगल (Mars)', 'शुक्र (Venus)', 'बुध (Mercury)', 'चंद्र (Moon)',
  'सूर्य (Sun)', 'बुध (Mercury)', 'शुक्र (Venus)', 'मंगल (Mars)',
  'गुरु (Jupiter)', 'शनि (Saturn)', 'शनि (Saturn)', 'गुरु (Jupiter)'
];

// No extra imports needed.

/**
 * Calculates the exact Ascendant (Lagna) sidereal longitude
 * 
 * @param utcTime The exact birth time in UTC
 * @param latitude Latitude in degrees
 * @param longitude Longitude in degrees
 */
export function calculateLagna(utcTime: Date, latitude: number, longitude: number): LagnaResult {
  const time = new AstroTime(utcTime);
  
  // To calculate the Ascendant, we need the intersection of the ecliptic and the eastern horizon.
  // The 'astronomy-engine' library doesn't have a direct "Ascendant" function, but we can compute it
  // using Local Sidereal Time (LST) and spherical trigonometry.
  
  // 1. Calculate Greenwich Apparent Sidereal Time (GAST) in hours
  const gast = SiderealTime(time);
  
  // 2. Convert to Local Apparent Sidereal Time (LAST) in degrees
  // 1 hour = 15 degrees
  let lstDegrees = normalizeLongitude((gast * 15.0) + longitude);
  
  // 3. Obliquity of the Ecliptic
  // We will just use the standard constant below anyway
  
  // Let's use standard trigonometric formula for Ascendant:
  // ascendant = arctan( cos(LST) / ( -sin(LST)*cos(eps) - tan(lat)*sin(eps) ) )
  // But astronomy-engine makes this easier.
  
  // Wait, there's a more direct way:
  // We can just find the ecliptic longitude of the point on the eastern horizon.
  // We use Equator to Ecliptic conversion on the horizon point.
  // Local Zenith: Right Ascension = LST, Declination = Latitude
  // Eastern Horizon: Right Ascension = LST + 90, Declination = 0
  
  const raHorizon = normalizeLongitude(lstDegrees + 90.0);
  
  // Converting Equatorial (RA, Dec) to Ecliptic (Lon, Lat)
  // Ecliptic Longitude (Lambda) = atan2(sin(RA)*cos(eps) + tan(Dec)*sin(eps), cos(RA))
  // Since Dec of Eastern Horizon is exactly 0:
  // Lambda = atan2(sin(RA)*cos(eps), cos(RA))
  
  // Need eps (obliquity) in degrees. We can use a standard constant for J2000 (23.43929) 
  // or a more precise one. Let's use 23.43929 for simplicity in this mean calculation.
  const epsDegrees = 23.4392911;
  const epsRad = epsDegrees * (Math.PI / 180.0);
  const raRad = raHorizon * (Math.PI / 180.0);
  
  // Let's calculate the Ascendant ecliptic longitude
  // Formula for Ascendant longitude (Lambda):
  // tan(Lambda) = cos(LST) / ( -sin(LST)*cos(eps) - tan(Lat)*sin(eps) )
  
  const lstRad = lstDegrees * (Math.PI / 180.0);
  const latRad = latitude * (Math.PI / 180.0);
  
  const y = Math.cos(lstRad);
  const x = - (Math.sin(lstRad) * Math.cos(epsRad)) - (Math.tan(latRad) * Math.sin(epsRad));
  
  let ascendantTropical = Math.atan2(y, x) * (180.0 / Math.PI);
  ascendantTropical = normalizeLongitude(ascendantTropical);
  
  // 4. Convert Tropical to Sidereal using Lahiri Ayanamsa
  const ayanamsa = getLahiriAyanamsa(time.ut);
  const ascendantSidereal = convertToSidereal(ascendantTropical, ayanamsa);
  
  const rashiIndex = getRashiIndex(ascendantSidereal);
  const degreeInRashi = ascendantSidereal % 30.0;
  const dms = formatDMS(degreeInRashi);
  
  return {
    lagna: RASHI_NAMES[rashiIndex],
    lord: RASHI_LORDS[rashiIndex],
    degree: degreeInRashi,
    description: `${RASHI_NAMES[rashiIndex]} लग्न में ${dms.formatted}`
  };
}
