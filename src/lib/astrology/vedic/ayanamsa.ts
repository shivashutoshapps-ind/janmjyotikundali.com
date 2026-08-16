/**
 * Ayanamsa Calculation (Lahiri / Chitra Paksha)
 * 
 * Reference: 
 * The true Lahiri Ayanamsa (Chitra Paksha) is defined such that the star Spica (Chitra)
 * is exactly at 180 degrees (0 degrees Libra) in the sidereal zodiac.
 * 
 * For deterministic implementation without a full Swiss Ephemeris dependency, we use the standard
 * secular variation formula for Lahiri Ayanamsa:
 * 
 * Ayanamsa at J2000.0 (2000-01-01 12:00:00 UTC, JD 2451545.0) = 23° 51' 11" = 23.853055 degrees.
 * Mean annual precession rate = ~50.290966 arcseconds per year.
 * 
 * Formula:
 * Ayanamsa = 23.853055 + (JD - 2451545.0) / 365.25 * (50.290966 / 3600)
 * 
 * Note: This is a highly accurate mean approximation. True Ayanamsa involves slight nutation
 * corrections (wobble of the Earth's axis), but mean Ayanamsa is perfectly acceptable for 
 * standard astrological charting within the nearest arcminute.
 * 
 * @param utDaysSinceJ2000 The number of days since J2000 (AstroTime.ut)
 * @returns The Lahiri Ayanamsa in degrees
 */
export function getLahiriAyanamsa(utDaysSinceJ2000: number): number {
  const ayanamsaJ2000 = 23.853055; // 23 deg 51 min 11 sec
  
  // Calculate years since J2000
  const yearsSinceJ2000 = utDaysSinceJ2000 / 365.25;
  
  // Rate of precession per year in degrees (50.290966 arcseconds)
  const precessionRate = 50.290966 / 3600.0;
  
  const ayanamsa = ayanamsaJ2000 + (yearsSinceJ2000 * precessionRate);
  
  return ayanamsa;
}
