import { TimeRange } from '../types';

/**
 * Adds milliseconds to a Date
 */
export function addMs(date: Date, ms: number): Date {
  return new Date(date.getTime() + ms);
}

/**
 * Calculates Rahu Kaal, Yamaganda, and Gulika Kaal for a given day.
 * Daytime (Sunrise to Sunset) is divided into 8 equal segments.
 * 
 * Rules for mapping weekday to segments (1-indexed):
 * Weekday:     Sun Mon Tue Wed Thu Fri Sat
 * Rahu Kaal:   8   2   7   5   6   4   3
 * Yamaganda:   5   4   3   2   1   7   6
 * Gulika:      7   6   5   4   3   2   1
 */
export function calculateKaals(sunrise: Date, sunset: Date, weekdayIndex: number): {
  rahuKaal: TimeRange;
  yamaganda: TimeRange;
  gulika: TimeRange;
} {
  const diffMs = sunset.getTime() - sunrise.getTime();
  const segmentMs = diffMs / 8;

  // JS getDay() returns 0 for Sunday, 1 for Monday, etc.
  const rahuSegments = [8, 2, 7, 5, 6, 4, 3];
  const yamaSegments = [5, 4, 3, 2, 1, 7, 6];
  const guliSegments = [7, 6, 5, 4, 3, 2, 1];

  const rahuIdx = rahuSegments[weekdayIndex] - 1;
  const yamaIdx = yamaSegments[weekdayIndex] - 1;
  const guliIdx = guliSegments[weekdayIndex] - 1;

  const formatTime = (d: Date) => d.toISOString();

  return {
    rahuKaal: {
      name: 'राहु काल (Rahu Kaal)',
      start: formatTime(addMs(sunrise, rahuIdx * segmentMs)),
      end: formatTime(addMs(sunrise, (rahuIdx + 1) * segmentMs))
    },
    yamaganda: {
      name: 'यमगंड (Yamaganda)',
      start: formatTime(addMs(sunrise, yamaIdx * segmentMs)),
      end: formatTime(addMs(sunrise, (yamaIdx + 1) * segmentMs))
    },
    gulika: {
      name: 'गुलिक काल (Gulika Kaal)',
      start: formatTime(addMs(sunrise, guliIdx * segmentMs)),
      end: formatTime(addMs(sunrise, (guliIdx + 1) * segmentMs))
    }
  };
}
