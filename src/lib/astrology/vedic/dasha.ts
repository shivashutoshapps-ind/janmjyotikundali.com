import { 
  MahadashaPeriod, 
  AntardashaPeriod, 
  PratyantardashaPeriod, 
  CurrentDasha 
} from '../types';

interface DashaConfig {
  planet: string;
  years: number;
}

const DASHA_SEQUENCE: DashaConfig[] = [
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

// Exact milliseconds in a Gregorian year (365.2425 days)
const YEAR_MS = 365.2425 * 24 * 60 * 60 * 1000;

export function calculateVimshottariMahadasha(moonSiderealLongitude: number, birthDate: Date): MahadashaPeriod[] {
  const NAKSHATRA_SPAN = 13.333333333333334;
  
  const nakshatraIndex = Math.floor(moonSiderealLongitude / NAKSHATRA_SPAN);
  const dashaStartIndex = nakshatraIndex % 9;
  
  const degreesPassedInNakshatra = moonSiderealLongitude % NAKSHATRA_SPAN;
  const fractionPassed = degreesPassedInNakshatra / NAKSHATRA_SPAN;
  
  const birthDasha = DASHA_SEQUENCE[dashaStartIndex];
  
  // Calculate exact milliseconds of the Mahadasha that elapsed before birth
  const elapsedMs = Math.round(birthDasha.years * fractionPassed * YEAR_MS);
  const theoreticalStartMs = birthDate.getTime() - elapsedMs;
  
  const result: MahadashaPeriod[] = [];
  let currentMs = theoreticalStartMs;
  
  for (let m = 0; m < 9; m++) {
    const mahadashaIndex = (dashaStartIndex + m) % 9;
    const mahadashaConfig = DASHA_SEQUENCE[mahadashaIndex];
    
    const mahadashaStartMs = currentMs;
    const mahadashaDurationMs = Math.round(mahadashaConfig.years * YEAR_MS);
    const mahadashaEndMs = mahadashaStartMs + mahadashaDurationMs;
    
    const antardashas: AntardashaPeriod[] = [];
    let currentAntardashaMs = mahadashaStartMs;
    
    for (let a = 0; a < 9; a++) {
      const antardashaIndex = (mahadashaIndex + a) % 9;
      const antardashaConfig = DASHA_SEQUENCE[antardashaIndex];
      
      const antardashaStartMs = currentAntardashaMs;
      // Antardasha Duration = (Mahadasha Years * Antardasha Years * YEAR_MS) / 120
      const antardashaDurationMs = Math.round((mahadashaConfig.years * antardashaConfig.years * YEAR_MS) / 120);
      const antardashaEndMs = antardashaStartMs + antardashaDurationMs;
      
      const pratyantardashas: PratyantardashaPeriod[] = [];
      let currentPratMs = antardashaStartMs;
      
      for (let p = 0; p < 9; p++) {
        const pratIndex = (antardashaIndex + p) % 9;
        const pratConfig = DASHA_SEQUENCE[pratIndex];
        
        const pratStartMs = currentPratMs;
        // Pratyantardasha Duration = (Antardasha Years [fractional] * Prat Years * YEAR_MS) / 120
        // Which is (Mahadasha * Antardasha * Prat * YEAR_MS) / (120 * 120)
        const pratDurationMs = Math.round((mahadashaConfig.years * antardashaConfig.years * pratConfig.years * YEAR_MS) / 14400);
        const pratEndMs = pratStartMs + pratDurationMs;
        
        pratyantardashas.push({
          planet: pratConfig.planet,
          startDate: new Date(pratStartMs).toISOString(),
          endDate: new Date(pratEndMs).toISOString()
        });
        
        currentPratMs = pratEndMs;
      }
      
      // Fix tiny rounding errors by setting the last Prat's end exactly to the Antardasha's end
      pratyantardashas[8].endDate = new Date(antardashaEndMs).toISOString();
      
      antardashas.push({
        planet: antardashaConfig.planet,
        startDate: new Date(antardashaStartMs).toISOString(),
        endDate: new Date(antardashaEndMs).toISOString(),
        pratyantardashas
      });
      
      currentAntardashaMs = antardashaEndMs;
    }
    
    // Fix tiny rounding errors by setting the last Antardasha's end exactly to the Mahadasha's end
    antardashas[8].endDate = new Date(mahadashaEndMs).toISOString();
    
    result.push({
      planet: mahadashaConfig.planet,
      startDate: new Date(mahadashaStartMs).toISOString(),
      endDate: new Date(mahadashaEndMs).toISOString(),
      antardashas
    });
    
    currentMs = mahadashaEndMs;
  }
  
  return result;
}

export function getCurrentDasha(periods: MahadashaPeriod[], targetDate: Date = new Date()): CurrentDasha | null {
  const targetMs = targetDate.getTime();
  
  for (const m of periods) {
    if (targetMs >= new Date(m.startDate).getTime() && targetMs < new Date(m.endDate).getTime()) {
      for (const a of m.antardashas) {
        if (targetMs >= new Date(a.startDate).getTime() && targetMs < new Date(a.endDate).getTime()) {
          for (const p of a.pratyantardashas) {
            if (targetMs >= new Date(p.startDate).getTime() && targetMs < new Date(p.endDate).getTime()) {
              return {
                mahadasha: m,
                antardasha: a,
                pratyantardasha: p
              };
            }
          }
        }
      }
    }
  }
  
  return null;
}
