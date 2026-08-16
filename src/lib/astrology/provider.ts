import { 
  BirthData, 
  RashiResult, 
  NakshatraResult, 
  LagnaResult, 
  KundliResult, 
  PanchangResult 
} from './types';

/**
 * Interface defining the contract for any astrology calculation engine
 * connected to JanmJyoti.
 */
export interface AstrologyCalculationProvider {
  /**
   * Calculates the Moon Sign (Rashi)
   */
  calculateRashi(data: BirthData): Promise<RashiResult | null>;

  /**
   * Calculates the Birth Star (Nakshatra)
   */
  calculateNakshatra(data: BirthData): Promise<NakshatraResult | null>;

  /**
   * Calculates the Ascendant (Lagna)
   */
  calculateLagna(data: BirthData): Promise<LagnaResult | null>;

  /**
   * Calculates a complete Kundli (Birth Chart)
   */
  calculateKundli(data: BirthData): Promise<KundliResult | null>;

  /**
   * Retrieves or calculates daily Panchang data
   */
  getPanchang(date: Date, place: BirthData['place']): Promise<PanchangResult | null>;
}
