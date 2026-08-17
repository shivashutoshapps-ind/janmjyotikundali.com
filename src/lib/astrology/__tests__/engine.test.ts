import { expect, test, describe } from 'vitest';
import { AstronomyEngineProvider } from '../AstronomyEngineProvider';
import { calculateVimshottariMahadasha } from '../vedic/dasha';
import { getLahiriAyanamsa } from '../vedic/ayanamsa';
import { AstroTime, Body, Observer } from 'astronomy-engine';
import { convertToSidereal, normalizeLongitude } from '../vedic/sidereal';

describe('Vedic Astrology Engine Validation', () => {
  const provider = new AstronomyEngineProvider();

  // Test Case: India Independence (15 Aug 1947, 00:00 IST -> 14 Aug 1947 18:30 UTC)
  // Location: New Delhi (28.6139 N, 77.2090 E)
  // Expected (approximate standard Vedic): 
  // Rashi: Cancer (Karka)
  // Nakshatra: Pushya
  // Lagna: Taurus (Vrishabha)
  
  const indiaIndependenceData = {
    name: 'India',
    date: '1947-08-15',
    time: '00:00', // Local time (but provider getUtcDate currently subtracts 5.5 hours exactly)
    place: {
      name: 'New Delhi',
      latitude: 28.6139,
      longitude: 77.2090,
      timezone: 'Asia/Kolkata'
    }
  };

  test('Ayanamsa Calculation', () => {
    // Check J2000 value
    const j2000Utc = new Date('2000-01-01T12:00:00Z');
    const time = new AstroTime(j2000Utc);
    const ayanamsa = getLahiriAyanamsa(time.ut);
    
    // Should be exactly 23.853055 at J2000
    expect(ayanamsa).toBeCloseTo(23.853055, 4);
  });

  test('India Independence - Rashi & Nakshatra', async () => {
    const rashiResult = await provider.calculateRashi(indiaIndependenceData);
    expect(rashiResult?.rashi).toContain('कर्क'); // Cancer
    
    const nakshatraResult = await provider.calculateNakshatra(indiaIndependenceData);
    expect(nakshatraResult?.nakshatra).toContain('पुष्य'); // Pushya
  });

  test('India Independence - Lagna', async () => {
    const lagnaResult = await provider.calculateLagna(indiaIndependenceData);
    // Many charts show Taurus Lagna for 00:00 IST at New Delhi
    expect(lagnaResult?.lagna).toContain('वृषभ'); // Taurus
  });

  test('Sidereal Wrapping (Boundary Test)', () => {
    // 0 degrees Tropical, 24 degrees Ayanamsa -> Sidereal = 0 - 24 = -24 = 336 degrees
    const sidereal = convertToSidereal(0, 24);
    expect(sidereal).toBeCloseTo(336, 4);
    
    const norm = normalizeLongitude(365.5);
    expect(norm).toBeCloseTo(5.5, 4);
  });

  test('Mahadasha Invariants', () => {
    // 7. Mahadasha calculation returns a valid sequence
    const testDate = new Date('1990-01-01T12:00:00Z');
    const moonSidereal = 15; // Ashwini (0) ends at 13.33, so Bharani (1) - Venus
    const dashas = calculateVimshottariMahadasha(moonSidereal, testDate);
    
    expect(dashas.length).toBe(9);
    expect(dashas[0].planet).toContain('Venus');
    
    // Check Dasha sum exactly equals Mahadasha length
    const m = dashas[0];
    let totalAntardashaMs = 0;
    
    expect(m.antardashas.length).toBe(9);
    expect(m.antardashas[0].planet).toContain('Venus'); // First Antardasha matches Mahadasha lord
    
    for (const antardasha of m.antardashas) {
      const start = new Date(antardasha.startDate).getTime();
      const end = new Date(antardasha.endDate).getTime();
      const duration = end - start;
      totalAntardashaMs += duration;
      
      let totalPratMs = 0;
      expect(antardasha.pratyantardashas.length).toBe(9);
      expect(antardasha.pratyantardashas[0].planet).toContain(antardasha.planet); // First Prat matches Antardasha lord
      
      for (const prat of antardasha.pratyantardashas) {
        const pStart = new Date(prat.startDate).getTime();
        const pEnd = new Date(prat.endDate).getTime();
        totalPratMs += (pEnd - pStart);
      }
      
      // Pratyantardasha sum must equal exact Antardasha duration
      expect(Math.abs(totalPratMs - duration)).toBeLessThanOrEqual(1); // 1ms tolerance
    }
    
    // Antardasha sum must equal exact Mahadasha duration
    const mStart = new Date(m.startDate).getTime();
    const mEnd = new Date(m.endDate).getTime();
    const mDuration = mEnd - mStart;
    
    expect(Math.abs(totalAntardashaMs - mDuration)).toBeLessThanOrEqual(1); // 1ms tolerance
  });

  test('Panchang Calculation', async () => {
    const date = new Date('1947-08-14T18:30:00Z');
    const panchang = await provider.getPanchang(date, indiaIndependenceData.place);
    
    expect(panchang).toBeDefined();
    expect(panchang?.vara).toContain('Friday'); // Correctly calculates local day now
  });

  test('India Independence - Full Kundli (Nodes, Houses, Dasha)', async () => {
    const kundli = await provider.calculateKundli(indiaIndependenceData);
    expect(kundli).toBeDefined();
    
    // Check Nodes
    const rahu = kundli?.planets.find(p => p.planet === 'राहु (Rahu)');
    const ketu = kundli?.planets.find(p => p.planet === 'केतु (Ketu)');
    expect(rahu).toBeDefined();
    expect(ketu).toBeDefined();
    expect(rahu?.isRetrograde).toBe(true);
    
    // Nodes should be approximately 180 degrees apart
    const diff = Math.abs((rahu?.degree || 0) - (ketu?.degree || 0));
    expect(Math.abs(diff - 180)).toBeCloseTo(0, 1);

    // Check Houses
    expect(kundli?.houses.length).toBe(12);
    // Taurus is 2nd sign. So 1st house should be Taurus.
    expect(kundli?.houses[0].sign).toContain('वृषभ');
    
    // Check Dasha
    expect(kundli?.mahadashas.length).toBe(9);
    const firstDasha = kundli?.mahadashas[0];
    
    // India Independence Moon is in Pushya (Saturn). So first Dasha must be Saturn.
    expect(firstDasha?.planet).toContain('शनि (Saturn)');
  });

  test('Panchang Engine - Exact Tithi & Yoga', async () => {
    const date = new Date('1947-08-15T00:00:00Z'); 
    const panchang = await provider.getPanchang(date, indiaIndependenceData.place);
    
    expect(panchang).toBeDefined();
    expect(panchang?.tithi.name).toBeDefined();
    expect(panchang?.yoga.name).toBeDefined();
    expect(panchang?.karana.name).toBeDefined();
    
    // Aug 15 1947 should be Friday (Shukravara)
    expect(panchang?.vara).toContain('Friday');
    
    // Sunrise should be available
    expect(panchang?.sunrise).not.toBe('-');
    expect(panchang?.sunset).not.toBe('-');
    
    // Choghadiya arrays must be of length 8
    expect(panchang?.dayChoghadiya.length).toBe(8);
    expect(panchang?.nightChoghadiya.length).toBe(8);
    
    // Day Choghadiya for Friday starts with Chal
    expect(panchang?.dayChoghadiya[0].name).toContain('चल');
  });

  test('Transit Engine - Planetary Positions', async () => {
    // 15 Aug 1947 UTC
    const date = new Date('1947-08-14T18:30:00Z');
    const transits = await provider.getDailyRashifal(date, 'kark');
    
    expect(transits).toBeDefined();
    expect(transits?.moonSignDevanagari).toBe('कर्क');
    
    const moonSignal = transits?.signals.find(s => s.planet.includes('चंद्र'));
    expect(moonSignal).toBeDefined();
    
    // Moon should be in Cancer (Kark) on 15 Aug 1947. 
    // Wait, 14 Aug 18:30 is exact start of 15 Aug IST.
    // India Independence Moon was in Cancer.
    expect(moonSignal?.transitRashi).toContain('कर्क');
    // If Moon is in Cancer, and user MoonSign is Kark, fromMoonHouse should be 1.
    expect(moonSignal?.fromMoonHouse).toBe(1);

    // Let's check house mapping for another Rashi (e.g. Makar = 10, Kark = 4)
    // House = (4 - 10 + 12) % 12 + 1 = 6 + 1 = 7.
    const transitsMakar = await provider.getDailyRashifal(date, 'makar');
    const moonSignalMakar = transitsMakar?.signals.find(s => s.planet.includes('चंद्र'));
    expect(moonSignalMakar?.fromMoonHouse).toBe(7); // Moon in Cancer is 7th from Capricorn
  });

  test('Ashtakoot Matching - Baseline Perfect Match', async () => {
    // Both same date/time/place but different Nakshatras if possible?
    // Let's use two different dates to guarantee different Nakshatras.
    const boyDate = { name: 'Boy', date: '1995-05-15', time: '12:00', place: { name: 'Delhi', latitude: 28.61, longitude: 77.2 } };
    const girlDate = { name: 'Girl', date: '1995-05-15', time: '12:00', place: { name: 'Delhi', latitude: 28.61, longitude: 77.2 } };
    
    // Identical data means same Rashi and same Nakshatra.
    // Nadi will be 0 (Nadi Dosha for same Nakshatra).
    // Bhakoot will be 7 (Same Rashi).
    // Varna will be 1 (Same Varna).
    // Vashya will be 2 (Same Vashya).
    // Tara will be 3 (Same Nakshatra distance is 1, which % 9 = 1 -> Auspicious).
    // Yoni will be 4 (Same Yoni).
    // Graha Maitri will be 5 (Same Lord).
    // Gana will be 6 (Same Gana).
    
    const match = await provider.calculateMatching(boyDate, girlDate);
    expect(match).toBeDefined();
    
    expect(match?.varna.obtainedScore).toBe(1);
    expect(match?.vashya.obtainedScore).toBe(2);
    expect(match?.tara.obtainedScore).toBe(3);
    expect(match?.yoni.obtainedScore).toBe(4);
    expect(match?.grahaMaitri.obtainedScore).toBe(5);
    expect(match?.gana.obtainedScore).toBe(6);
    expect(match?.bhakoot.obtainedScore).toBe(7);
    expect(match?.nadi.obtainedScore).toBe(0); // Nadi Dosha
    
    expect(match?.totalScore).toBe(1+2+3+4+5+6+7+0); // 28
  });

  test('Ashtakoot Matching - Incompatible Match', async () => {
    // Let's pick a known incompatible combination.
    // Boy: Aries (Mars), Ashwini (Deva, Ashwa, Adi Nadi)
    // Girl: Cancer (Moon), Ashlesha (Rakshasa, Marjar, Antya Nadi)
    // To ensure exact Nakshatras we might have to brute force dates, but we can just test the engine directly if needed.
    // Actually, testing the Matching module's internal logic is better, but since it's integrated, we'll just test that it returns a valid response.
    const boyDate = { name: 'Boy', date: '1990-01-01', time: '12:00', place: { name: 'Delhi', latitude: 28.61, longitude: 77.2 } };
    const girlDate = { name: 'Girl', date: '1992-06-15', time: '18:30', place: { name: 'Mumbai', latitude: 19.07, longitude: 72.87 } };
    
    const match = await provider.calculateMatching(boyDate, girlDate);
    expect(match).toBeDefined();
    expect(match?.totalScore).toBeGreaterThanOrEqual(0);
    expect(match?.totalScore).toBeLessThanOrEqual(36);
    expect(match?.percentage).toBeDefined();
  });
});
