export interface TransitPlanet {
  planet: string;
  degree: number;
  rashi: string;
  nakshatra: string;
  pada: number;
  isRetrograde: boolean;
}

export interface TransitSignal {
  planet: string;
  transitRashi: string;
  fromMoonHouse: number;
}

export interface RashifalInterpretation {
  summary: string;
  career: string;
  finance: string;
  relationships: string;
  health: string;
  advice: string;
}

export interface RashifalResult {
  date: string;
  moonSign: string;
  moonSignDevanagari: string;
  signals: TransitSignal[];
  interpretation: RashifalInterpretation;
}
