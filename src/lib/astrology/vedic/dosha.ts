import { DoshaResult, PlanetPosition } from '../types';

/**
 * Basic Mangal Dosha check based on Lagna (Ascendant).
 * If Mars is in the 1st, 4th, 7th, 8th, or 12th house, it forms Mangal Dosha.
 */
export function checkMangalDosha(marsHouseNumber: number): DoshaResult {
  const isManglik = [1, 4, 7, 8, 12].includes(marsHouseNumber);
  
  return {
    name: "मंगल दोष (Manglik Dosha)",
    isPresent: isManglik,
    description: isManglik 
      ? `आपकी कुंडली में मंगल ${marsHouseNumber} भाव में स्थित है, जो एक मंगल दोष का निर्माण करता है। यह एक सामान्य खगोलीय स्थिति है। विवाह से पूर्व कुंडली मिलान की सलाह दी जाती है।`
      : "आपकी कुंडली में मंगल दोष (मांगलिक) उपस्थित नहीं है।"
  };
}
