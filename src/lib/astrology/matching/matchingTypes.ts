import { BirthData, RashiResult, NakshatraResult, DoshaResult } from '../types';

export interface KootResult {
  name: string;
  maxScore: number;
  obtainedScore: number;
  explanation: string;
}

export interface MatchingResult {
  boyData: BirthData;
  girlData: BirthData;
  boyRashi: RashiResult;
  boyNakshatra: NakshatraResult;
  girlRashi: RashiResult;
  girlNakshatra: NakshatraResult;
  
  varna: KootResult;
  vashya: KootResult;
  tara: KootResult;
  yoni: KootResult;
  grahaMaitri: KootResult;
  gana: KootResult;
  bhakoot: KootResult;
  nadi: KootResult;
  
  totalScore: number;
  percentage: number;
  interpretation: string;
  
  boyDoshas: DoshaResult[];
  girlDoshas: DoshaResult[];
}
