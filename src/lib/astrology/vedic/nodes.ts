/**
 * Calculates the Mean Lunar Node (Rahu) using the Jean Meeus astronomical algorithms.
 * T is Julian centuries from J2000.0.
 * In astronomy-engine, `time.ut` gives the days since J2000.0 (JD - 2451545.0).
 */
export function calculateMeanLunarNode(utDays: number): number {
  const T = utDays / 36525.0;
  
  // Mean longitude of the ascending node
  let omega = 125.04452222 - (1934.13626197 * T) + (0.0020708 * T * T) + (Math.pow(T, 3) / 450000.0);
  
  // Normalize to 0-360
  omega = omega % 360.0;
  if (omega < 0) {
    omega += 360.0;
  }
  
  return omega;
}
