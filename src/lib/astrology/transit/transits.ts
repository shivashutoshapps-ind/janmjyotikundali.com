import { AstroTime, Body, Observer, Equator, Ecliptic } from 'astronomy-engine';
import { getLahiriAyanamsa } from '../vedic/ayanamsa';
import { convertToSidereal } from '../vedic/sidereal';
import { calculateRashi } from '../vedic/rashi';
import { calculateNakshatra } from '../vedic/nakshatra';
import { calculateMeanLunarNode } from '../vedic/nodes';
import { TransitPlanet } from './transitTypes';

/**
 * Calculates geocentric sidereal planetary positions for a given UTC Date.
 * Uses New Delhi as default topocentric fallback.
 */
export function calculatePlanetaryPositions(utcDate: Date, latitude = 28.6139, longitude = 77.2090): TransitPlanet[] {
  const time = new AstroTime(utcDate);
  const observer = new Observer(latitude, longitude, 0);
  const ayanamsa = getLahiriAyanamsa(time.ut);
  
  const bodies = [
    { id: Body.Sun, name: 'सूर्य (Sun)' },
    { id: Body.Moon, name: 'चंद्र (Moon)' },
    { id: Body.Mars, name: 'मंगल (Mars)' },
    { id: Body.Mercury, name: 'बुध (Mercury)' },
    { id: Body.Jupiter, name: 'गुरु (Jupiter)' },
    { id: Body.Venus, name: 'शुक्र (Venus)' },
    { id: Body.Saturn, name: 'शनि (Saturn)' },
  ];

  const planets: TransitPlanet[] = bodies.map(b => {
    const equ = Equator(b.id, time, observer, true, true);
    const ecl = Ecliptic(equ.vec);
    const tropLon = ecl.elon;
    const sidereal = convertToSidereal(tropLon, ayanamsa);
    const rashiInfo = calculateRashi(sidereal);
    const nakshatraInfo = calculateNakshatra(sidereal);
    
    return {
      planet: b.name,
      degree: sidereal,
      rashi: rashiInfo.rashi,
      nakshatra: nakshatraInfo.nakshatra,
      pada: nakshatraInfo.pada,
      isRetrograde: false // astronomy-engine does not easily export retrograde velocity without secondary samples.
    };
  });
  
  // Add Nodes
  const rahuSidereal = (calculateMeanLunarNode(time.ut) - ayanamsa + 360) % 360;
  const ketuSidereal = (rahuSidereal + 180) % 360;
  
  const rahuRashi = calculateRashi(rahuSidereal);
  const ketuRashi = calculateRashi(ketuSidereal);
  const rahuNakshatra = calculateNakshatra(rahuSidereal);
  const ketuNakshatra = calculateNakshatra(ketuSidereal);

  planets.push({
    planet: 'राहु (Rahu)',
    degree: rahuSidereal,
    rashi: rahuRashi.rashi,
    nakshatra: rahuNakshatra.nakshatra,
    pada: rahuNakshatra.pada,
    isRetrograde: true
  });

  planets.push({
    planet: 'केतु (Ketu)',
    degree: ketuSidereal,
    rashi: ketuRashi.rashi,
    nakshatra: ketuNakshatra.nakshatra,
    pada: ketuNakshatra.pada,
    isRetrograde: true
  });

  return planets;
}
