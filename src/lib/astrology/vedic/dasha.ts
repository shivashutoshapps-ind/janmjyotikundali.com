import { Mahadasha } from '../types';

interface DashaPeriod {
  planet: string;
  years: number;
}

const DASHA_SEQUENCE: DashaPeriod[] = [
  { planet: 'केतु (Ketu)', years: 7 },
  { planet: 'शुक्र (Venus)', years: 20 },
  { planet: 'सूर्य (Sun)', years: 6 },
  { planet: 'चंद्र (Moon)', years: 10 },
  { planet: 'मंगल (Mars)', years: 7 },
  { planet: 'राहु (Rahu)', years: 18 },
  { planet: 'गुरु (Jupiter)', years: 16 },
  { planet: 'शनि (Saturn)', years: 19 },
  { planet: 'बुध (Mercury)', years: 17 }
];

export function calculateVimshottariMahadasha(moonSiderealLongitude: number, birthDate: Date): Mahadasha[] {
  // Each nakshatra is 13° 20' = 13.333333 degrees
  const NAKSHATRA_SPAN = 13.333333333333334;
  
  // Find out which nakshatra we are in (0-26)
  const nakshatraIndex = Math.floor(moonSiderealLongitude / NAKSHATRA_SPAN);
  
  // Dasha sequence starts from Ashwini (Ketu). It repeats every 9 nakshatras.
  const dashaStartIndex = nakshatraIndex % 9;
  
  // Find out the exact position of the moon inside its current nakshatra (0 to 13.3333)
  const degreesPassedInNakshatra = moonSiderealLongitude % NAKSHATRA_SPAN;
  const fractionPassed = degreesPassedInNakshatra / NAKSHATRA_SPAN;
  const fractionRemaining = 1 - fractionPassed;
  
  const currentDasha = DASHA_SEQUENCE[dashaStartIndex];
  
  // Years remaining in the current Dasha at birth
  const yearsRemainingAtBirth = currentDasha.years * fractionRemaining;
  
  // Calculate the dates
  const result: Mahadasha[] = [];
  let currentDate = new Date(birthDate.getTime());
  
  // Calculate the end date of the first Dasha
  const firstDashaEndDate = new Date(currentDate.getTime());
  firstDashaEndDate.setFullYear(firstDashaEndDate.getFullYear() + Math.floor(yearsRemainingAtBirth));
  firstDashaEndDate.setMonth(firstDashaEndDate.getMonth() + Math.floor((yearsRemainingAtBirth % 1) * 12));
  firstDashaEndDate.setDate(firstDashaEndDate.getDate() + Math.floor((((yearsRemainingAtBirth % 1) * 12) % 1) * 30.436875)); // Approx days in month

  result.push({
    planet: currentDasha.planet,
    startDate: currentDate.toISOString(),
    endDate: firstDashaEndDate.toISOString()
  });
  
  currentDate = new Date(firstDashaEndDate.getTime());
  
  // Calculate subsequent Dashas for a full cycle (120 years total minus the portion already lived)
  // We'll return the full 120 year span starting from birth (9 mahadashas total)
  for (let i = 1; i < 9; i++) {
    const nextDashaIndex = (dashaStartIndex + i) % 9;
    const nextDasha = DASHA_SEQUENCE[nextDashaIndex];
    
    const endDate = new Date(currentDate.getTime());
    endDate.setFullYear(endDate.getFullYear() + nextDasha.years);
    
    result.push({
      planet: nextDasha.planet,
      startDate: currentDate.toISOString(),
      endDate: endDate.toISOString()
    });
    
    currentDate = new Date(endDate.getTime());
  }
  
  return result;
}
