/**
 * Normalizes any degree to the 0-360 range
 */
export function normalizeLongitude(degree: number): number {
  let normalized = degree % 360.0;
  if (normalized < 0) {
    normalized += 360.0;
  }
  return normalized;
}

/**
 * Converts a Tropical longitude to Sidereal longitude using the provided Ayanamsa
 * 
 * Formula: Sidereal Longitude = Tropical Longitude - Ayanamsa
 * 
 * @param tropicalLongitude The tropical longitude in degrees
 * @param ayanamsa The ayanamsa in degrees
 * @returns The normalized sidereal longitude (0 <= x < 360)
 */
export function convertToSidereal(tropicalLongitude: number, ayanamsa: number): number {
  const sidereal = tropicalLongitude - ayanamsa;
  return normalizeLongitude(sidereal);
}

/**
 * Formats a decimal degree into Degrees° Minutes' Seconds" format
 */
export function formatDMS(degree: number): { d: number; m: number; s: number; formatted: string } {
  const norm = normalizeLongitude(degree);
  const d = Math.floor(norm);
  const m = Math.floor((norm - d) * 60);
  const s = Math.floor(((norm - d) * 60 - m) * 60);
  
  return {
    d,
    m,
    s,
    formatted: `${d}° ${m}' ${s}"`
  };
}
