import { Choghadiya } from '../types';
import { addMs } from './kaals';

const CHOGHADIYA_TYPES: Record<string, Choghadiya['type']> = {
  'उद्वेग (Udveg)': 'उद्वेग',
  'चल (Chal)': 'चल',
  'लाभ (Labh)': 'लाभ',
  'अमृत (Amrut)': 'अमृत',
  'काल (Kaal)': 'काल',
  'शुभ (Shubh)': 'शुभ',
  'रोग (Rog)': 'रोग'
};

const DAY_CHOGHADIYA_SEQ = [
  ['उद्वेग (Udveg)', 'चल (Chal)', 'लाभ (Labh)', 'अमृत (Amrut)', 'काल (Kaal)', 'शुभ (Shubh)', 'रोग (Rog)', 'उद्वेग (Udveg)'], // Sun
  ['अमृत (Amrut)', 'काल (Kaal)', 'शुभ (Shubh)', 'रोग (Rog)', 'उद्वेग (Udveg)', 'चल (Chal)', 'लाभ (Labh)', 'अमृत (Amrut)'], // Mon
  ['रोग (Rog)', 'उद्वेग (Udveg)', 'चल (Chal)', 'लाभ (Labh)', 'अमृत (Amrut)', 'काल (Kaal)', 'शुभ (Shubh)', 'रोग (Rog)'], // Tue
  ['लाभ (Labh)', 'अमृत (Amrut)', 'काल (Kaal)', 'शुभ (Shubh)', 'रोग (Rog)', 'उद्वेग (Udveg)', 'चल (Chal)', 'लाभ (Labh)'], // Wed
  ['शुभ (Shubh)', 'रोग (Rog)', 'उद्वेग (Udveg)', 'चल (Chal)', 'लाभ (Labh)', 'अमृत (Amrut)', 'काल (Kaal)', 'शुभ (Shubh)'], // Thu
  ['चल (Chal)', 'लाभ (Labh)', 'अमृत (Amrut)', 'काल (Kaal)', 'शुभ (Shubh)', 'रोग (Rog)', 'उद्वेग (Udveg)', 'चल (Chal)'], // Fri
  ['काल (Kaal)', 'शुभ (Shubh)', 'रोग (Rog)', 'उद्वेग (Udveg)', 'चल (Chal)', 'लाभ (Labh)', 'अमृत (Amrut)', 'काल (Kaal)']  // Sat
];

const NIGHT_CHOGHADIYA_SEQ = [
  ['शुभ (Shubh)', 'अमृत (Amrut)', 'चल (Chal)', 'रोग (Rog)', 'काल (Kaal)', 'लाभ (Labh)', 'उद्वेग (Udveg)', 'शुभ (Shubh)'], // Sun
  ['चल (Chal)', 'रोग (Rog)', 'काल (Kaal)', 'लाभ (Labh)', 'उद्वेग (Udveg)', 'शुभ (Shubh)', 'अमृत (Amrut)', 'चल (Chal)'], // Mon
  ['काल (Kaal)', 'लाभ (Labh)', 'उद्वेग (Udveg)', 'शुभ (Shubh)', 'अमृत (Amrut)', 'चल (Chal)', 'रोग (Rog)', 'काल (Kaal)'], // Tue
  ['उद्वेग (Udveg)', 'शुभ (Shubh)', 'अमृत (Amrut)', 'चल (Chal)', 'रोग (Rog)', 'काल (Kaal)', 'लाभ (Labh)', 'उद्वेग (Udveg)'], // Wed
  ['अमृत (Amrut)', 'चल (Chal)', 'रोग (Rog)', 'काल (Kaal)', 'लाभ (Labh)', 'उद्वेग (Udveg)', 'शुभ (Shubh)', 'अमृत (Amrut)'], // Thu
  ['रोग (Rog)', 'काल (Kaal)', 'लाभ (Labh)', 'उद्वेग (Udveg)', 'शुभ (Shubh)', 'अमृत (Amrut)', 'चल (Chal)', 'रोग (Rog)'], // Fri
  ['लाभ (Labh)', 'उद्वेग (Udveg)', 'शुभ (Shubh)', 'अमृत (Amrut)', 'चल (Chal)', 'रोग (Rog)', 'काल (Kaal)', 'लाभ (Labh)']  // Sat
];

export function calculateChoghadiya(
  sunrise: Date, 
  sunset: Date, 
  nextSunrise: Date, 
  weekdayIndex: number
): { day: Choghadiya[], night: Choghadiya[] } {
  const dayDiff = sunset.getTime() - sunrise.getTime();
  const daySegmentMs = dayDiff / 8.0;

  const nightDiff = nextSunrise.getTime() - sunset.getTime();
  const nightSegmentMs = nightDiff / 8.0;

  const daySeq = DAY_CHOGHADIYA_SEQ[weekdayIndex];
  const nightSeq = NIGHT_CHOGHADIYA_SEQ[weekdayIndex];

  const formatTime = (d: Date) => d.toISOString();

  const day: Choghadiya[] = daySeq.map((name, i) => ({
    name,
    type: CHOGHADIYA_TYPES[name],
    start: formatTime(addMs(sunrise, i * daySegmentMs)),
    end: formatTime(addMs(sunrise, (i + 1) * daySegmentMs))
  }));

  const night: Choghadiya[] = nightSeq.map((name, i) => ({
    name,
    type: CHOGHADIYA_TYPES[name],
    start: formatTime(addMs(sunset, i * nightSegmentMs)),
    end: formatTime(addMs(sunset, (i + 1) * nightSegmentMs))
  }));

  return { day, night };
}
