import { TransitPlanet, TransitSignal, RashifalResult, RashifalInterpretation } from './transitTypes';
import { interpretTransitSignal } from './rules';
import { calculatePlanetaryPositions } from './transits';

const RASHI_NAMES_DEV = [
  'मेष', 'वृषभ', 'मिथुन', 'कर्क',
  'सिंह', 'कन्या', 'तुला', 'वृश्चिक',
  'धनु', 'मकर', 'कुंभ', 'मीन'
];

const RASHI_SLUGS = [
  'mesh', 'vrishabh', 'mithun', 'kark',
  'singh', 'kanya', 'tula', 'vrishchik',
  'dhanu', 'makar', 'kumbh', 'meen'
];

export function getRashiIndexFromSlug(slug: string): number {
  return RASHI_SLUGS.indexOf(slug.toLowerCase());
}

export function getRashiNameFromSlug(slug: string): string {
  const index = getRashiIndexFromSlug(slug);
  return index !== -1 ? RASHI_NAMES_DEV[index] : '';
}

export function getRashiIndexFromName(rashiStr: string): number {
  // rashiStr is something like "मेष (Aries)"
  const devName = rashiStr.split(' ')[0];
  return RASHI_NAMES_DEV.indexOf(devName);
}

export function calculateHouseFromMoon(transitRashiStr: string, moonRashiIndex: number): number {
  const transitIndex = getRashiIndexFromName(transitRashiStr);
  if (transitIndex === -1 || moonRashiIndex === -1) return 1;
  
  // House 1 is when transit == moon sign.
  return ((transitIndex - moonRashiIndex + 12) % 12) + 1;
}

export function calculateDailyRashifal(date: Date, moonSignSlug: string): RashifalResult | null {
  const moonRashiIndex = getRashiIndexFromSlug(moonSignSlug);
  if (moonRashiIndex === -1) return null;

  const moonSignDevanagari = RASHI_NAMES_DEV[moonRashiIndex];
  
  // Get all transiting planets for the day
  // Defaults to New Delhi for general public Rashifal
  const transitPlanets = calculatePlanetaryPositions(date);

  const signals: TransitSignal[] = transitPlanets.map(tp => ({
    planet: tp.planet,
    transitRashi: tp.rashi,
    fromMoonHouse: calculateHouseFromMoon(tp.rashi, moonRashiIndex)
  }));

  // Build the interpretation
  const interpretation: RashifalInterpretation = {
    summary: 'परंपरागत ज्योतिष के अनुसार आज का दिन आपके लिए मिले-जुले परिणाम लेकर आ सकता है।',
    career: '',
    finance: '',
    relationships: '',
    health: '',
    advice: 'महत्वपूर्ण निर्णय लेते समय शांति और धैर्य बनाए रखें।'
  };

  const careers: string[] = [];
  const finances: string[] = [];
  const relationships: string[] = [];
  const healths: string[] = [];

  signals.forEach(signal => {
    // Exclude Moon from major daily predictions unless it's the primary driver
    if (signal.planet.includes('चंद्र') && signals.length > 1) {
      // Moon moves fast, can be used for summary
      const { text } = interpretTransitSignal(signal);
      interpretation.summary = text;
    } else {
      const { category, text } = interpretTransitSignal(signal);
      
      if (category.includes('करियर') || category.includes('कर्म')) careers.push(text);
      if (category.includes('धन')) finances.push(text);
      if (category.includes('प्रेम')) relationships.push(text);
      if (category.includes('स्वास्थ्य') || category.includes('अप्रत्याशित')) healths.push(text);
    }
  });

  if (careers.length > 0) interpretation.career = careers.join(' ');
  else interpretation.career = 'कार्यक्षेत्र में स्थिति सामान्य रहेगी। अपना कार्य लगन से करते रहें।';

  if (finances.length > 0) interpretation.finance = finances.join(' ');
  else interpretation.finance = 'आर्थिक स्थिति स्थिर रहेगी। अनावश्यक खर्चों से बचें।';

  if (relationships.length > 0) interpretation.relationships = relationships.join(' ');
  else interpretation.relationships = 'पारिवारिक जीवन में शांति रहेगी। अपनों को समय दें।';

  if (healths.length > 0) interpretation.health = healths.join(' ');
  else interpretation.health = 'स्वास्थ्य सामान्य रहेगा। नियमित दिनचर्या का पालन करें।';

  return {
    date: date.toISOString().split('T')[0], // UTC Date representation
    moonSign: moonSignSlug,
    moonSignDevanagari,
    signals,
    interpretation
  };
}
