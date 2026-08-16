import { AstrologyCalculationProvider } from './provider';
import { BirthData, RashiResult, NakshatraResult, LagnaResult, KundliResult, PanchangResult, PlanetPosition } from './types';
import { AstroTime, Body, Observer, Equator, Ecliptic } from 'astronomy-engine';
import { getLahiriAyanamsa } from './vedic/ayanamsa';
import { convertToSidereal } from './vedic/sidereal';
import { calculateRashi, getRashiIndex } from './vedic/rashi';
import { calculateNakshatra } from './vedic/nakshatra';
import { calculateLagna } from './vedic/lagna';
import { calculateWholeSignHouses } from './vedic/houses';
import { calculatePanchang } from './vedic/panchang';
import { calculateMeanLunarNode } from './vedic/nodes';
import { calculateVimshottariMahadasha } from './vedic/dasha';
import { checkMangalDosha } from './vedic/dosha';

/**
 * Implementation of the astrology provider using pure JS `astronomy-engine`.
 * Provides MIT-licensed, serverless-compatible astronomical calculations.
 */
export class AstronomyEngineProvider implements AstrologyCalculationProvider {
  
  /**
   * Helper to parse BirthData string dates/times into a UTC Date object.
   * Assumes basic mapping or simple local offset for this architecture phase.
   */
  private getUtcDate(data: BirthData): Date {
    // Parse "YYYY-MM-DD" and "HH:mm" explicitly as UTC, then subtract the offset
    const [year, month, day] = data.date.split('-').map(Number);
    const [hour, minute] = data.time.split(':').map(Number);
    
    // Create a UTC date representing the local time
    const localAsUtc = new Date(Date.UTC(year, month - 1, day, hour, minute, 0));
    
    // Subtract offset (5.5 hours) to get true UTC
    const tzOffsetMs = 5.5 * 60 * 60 * 1000;
    return new Date(localAsUtc.getTime() - tzOffsetMs);
  }

  async calculateRashi(data: BirthData): Promise<RashiResult | null> {
    const utcDate = this.getUtcDate(data);
    const time = new AstroTime(utcDate);
    
    const observer = new Observer(data.place.latitude || 28.6139, data.place.longitude || 77.2090, 0);
    const equ = Equator(Body.Moon, time, observer, true, true);
    const ecl = Ecliptic(equ.vec);
    const moonTropLon = ecl.elon;
    
    const ayanamsa = getLahiriAyanamsa(time.ut);
    const siderealLon = convertToSidereal(moonTropLon, ayanamsa);
    
    return calculateRashi(siderealLon);
  }

  async calculateNakshatra(data: BirthData): Promise<NakshatraResult | null> {
    const utcDate = this.getUtcDate(data);
    const time = new AstroTime(utcDate);
    
    const observer = new Observer(data.place.latitude || 28.6139, data.place.longitude || 77.2090, 0);
    const equ = Equator(Body.Moon, time, observer, true, true);
    const ecl = Ecliptic(equ.vec);
    const moonTropLon = ecl.elon;
    
    const ayanamsa = getLahiriAyanamsa(time.ut);
    const siderealLon = convertToSidereal(moonTropLon, ayanamsa);
    
    return calculateNakshatra(siderealLon);
  }

  async calculateLagna(data: BirthData): Promise<LagnaResult | null> {
    const utcDate = this.getUtcDate(data);
    return calculateLagna(utcDate, data.place.latitude || 28.6139, data.place.longitude || 77.2090);
  }

  async calculateKundli(data: BirthData): Promise<KundliResult | null> {
    const utcDate = this.getUtcDate(data);
    const time = new AstroTime(utcDate);
    const observer = new Observer(data.place.latitude || 28.6139, data.place.longitude || 77.2090, 0);
    
    const ayanamsa = getLahiriAyanamsa(time.ut);
    
    // Calculate Lagna
    const lagnaResult = calculateLagna(utcDate, observer.latitude, observer.longitude);
    
    // Calculate Moon Rashi and Nakshatra
    const moonEqu = Equator(Body.Moon, time, observer, true, true);
    const moonEcl = Ecliptic(moonEqu.vec);
    const moonTropLon = moonEcl.elon;
    const moonSidereal = convertToSidereal(moonTropLon, ayanamsa);
    const rashiResult = calculateRashi(moonSidereal);
    const nakshatraResult = calculateNakshatra(moonSidereal);
    
    // Calculate Planetary Positions
    const bodies = [
      { id: Body.Sun, name: 'सूर्य (Sun)' },
      { id: Body.Moon, name: 'चंद्र (Moon)' },
      { id: Body.Mars, name: 'मंगल (Mars)' },
      { id: Body.Mercury, name: 'बुध (Mercury)' },
      { id: Body.Jupiter, name: 'गुरु (Jupiter)' },
      { id: Body.Venus, name: 'शुक्र (Venus)' },
      { id: Body.Saturn, name: 'शनि (Saturn)' },
    ];
    
    // Calculate Houses (Whole Sign)
    const lagnaSignIndex = RASHI_NAMES.indexOf(lagnaResult.lagna);
    const fullLagnaLon = (lagnaSignIndex * 30) + lagnaResult.degree;
    let wholeSignHouses = calculateWholeSignHouses(fullLagnaLon).map(h => ({ ...h, planets: [] as string[] }));

    // Helper to find house number based on sign
    const getHouseNumber = (sign: string) => {
      const house = wholeSignHouses.find(h => h.sign === sign);
      return house ? house.houseNumber : 1;
    };

    const planets: PlanetPosition[] = bodies.map(b => {
      const equ = Equator(b.id, time, observer, true, true);
      const ecl = Ecliptic(equ.vec);
      const tropLon = ecl.elon;
      const sidereal = convertToSidereal(tropLon, ayanamsa);
      const rashiInfo = calculateRashi(sidereal);
      const nakshatraInfo = calculateNakshatra(sidereal);
      const houseNum = getHouseNumber(rashiInfo.rashi);
      
      return {
        planet: b.name,
        degree: sidereal,
        rashi: rashiInfo.rashi,
        nakshatra: nakshatraInfo.nakshatra,
        house: houseNum,
        isRetrograde: false // Placeholder as astronomy-engine velocity needs to be checked for real retrograde
      };
    });
    
    // Add Rahu and Ketu
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
      house: getHouseNumber(rahuRashi.rashi),
      isRetrograde: true // Nodes are always retrograde
    });

    planets.push({
      planet: 'केतु (Ketu)',
      degree: ketuSidereal,
      rashi: ketuRashi.rashi,
      nakshatra: ketuNakshatra.nakshatra,
      house: getHouseNumber(ketuRashi.rashi),
      isRetrograde: true
    });

    // Assign planets to houses
    planets.forEach(p => {
      const house = wholeSignHouses.find(h => h.houseNumber === p.house);
      if (house) {
        house.planets.push(p.planet);
      }
    });

    // Dasha Foundation
    const mahadashas = calculateVimshottariMahadasha(moonSidereal, utcDate);
    
    // Dosha Foundation
    const mars = planets.find(p => p.planet === 'मंगल (Mars)');
    const doshas = [];
    if (mars && mars.house) {
      doshas.push(checkMangalDosha(mars.house));
    }

    return {
      birthData: data,
      lagna: lagnaResult,
      rashi: rashiResult,
      nakshatra: nakshatraResult,
      planets,
      houses: wholeSignHouses,
      mahadashas,
      doshas
    };
  }

  async getPanchang(date: Date, place: BirthData['place']): Promise<PanchangResult | null> {
    return calculatePanchang(date, place);
  }
}

const RASHI_NAMES = [
  'मेष (Aries)', 'वृषभ (Taurus)', 'मिथुन (Gemini)', 'कर्क (Cancer)',
  'सिंह (Leo)', 'कन्या (Virgo)', 'तुला (Libra)', 'वृश्चिक (Scorpio)',
  'धनु (Sagittarius)', 'मकर (Capricorn)', 'कुंभ (Aquarius)', 'मीन (Pisces)'
];
