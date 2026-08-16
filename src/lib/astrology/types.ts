export interface BirthPlace {
  name: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
}

export interface BirthData {
  name: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  place: BirthPlace;
}

export interface PlanetPosition {
  planet: string;
  degree: number;
  rashi: string;
  nakshatra: string;
  house?: number;
  isRetrograde?: boolean;
}

export interface RashiResult {
  rashi: string;
  lord: string;
  element: string;
  quality: string;
  description: string;
}

export interface NakshatraResult {
  nakshatra: string;
  pada: number;
  lord: string;
  deity: string;
  description: string;
}

export interface LagnaResult {
  lagna: string;
  lord: string;
  degree: number;
  description: string;
}

export interface TimeRange {
  name: string;
  start: string;
  end: string;
}

export interface Choghadiya extends TimeRange {
  type: 'शुभ' | 'लाभ' | 'अमृत' | 'चल' | 'रोग' | 'काल' | 'उद्वेग';
}

export interface PanchangElement {
  number: number;
  name: string;
}

export interface TithiResult extends PanchangElement {
  paksha: 'Shukla' | 'Krishna';
}

export interface PanchangResult {
  date: string;
  location: BirthPlace;
  vara: string;
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  tithi: TithiResult;
  nakshatra: NakshatraResult;
  yoga: PanchangElement;
  karana: PanchangElement;
  rahuKaal: TimeRange;
  yamaganda: TimeRange;
  gulika: TimeRange;
  dayChoghadiya: Choghadiya[];
  nightChoghadiya: Choghadiya[];
}

export interface Mahadasha {
  planet: string;
  startDate: string;
  endDate: string;
}

export interface DoshaResult {
  name: string;
  isPresent: boolean;
  description: string;
}

export interface KundliResult {
  birthData: BirthData;
  lagna: LagnaResult;
  rashi: RashiResult;
  nakshatra: NakshatraResult;
  planets: PlanetPosition[];
  houses: { houseNumber: number; sign: string; degree: number; planets: string[] }[];
  mahadashas: Mahadasha[];
  doshas: DoshaResult[];
}
