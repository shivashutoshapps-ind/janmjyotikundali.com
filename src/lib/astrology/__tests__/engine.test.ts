import { expect, test, describe } from 'vitest';
import { AstronomyEngineProvider } from '../AstronomyEngineProvider';
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

  test('Panchang Calculation', async () => {
    const date = new Date('1947-08-14T18:30:00Z');
    const panchang = await provider.getPanchang(date, indiaIndependenceData.place);
    
    expect(panchang).toBeDefined();
    expect(panchang?.vara).toContain('Thursday');
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
});
