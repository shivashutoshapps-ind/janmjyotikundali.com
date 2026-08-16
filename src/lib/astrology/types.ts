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

export interface PanchangResult {
  date: string;
  tithi: string;
  nakshatra: string;
  yoga: string;
  karana: string;
  vara: string;
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
}

export interface KundliResult {
  birthData: BirthData;
  lagna: LagnaResult;
  rashi: RashiResult;
  nakshatra: NakshatraResult;
  planets: PlanetPosition[];
  houses: { houseNumber: number; sign: string; degree: number }[];
  // Dashas, Yogas, and Doshas will be added when engine is fully implemented
}
