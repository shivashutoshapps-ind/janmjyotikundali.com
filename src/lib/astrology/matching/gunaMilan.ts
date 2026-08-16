import { BirthData, DoshaResult } from '../types';
import { MatchingResult } from './matchingTypes';
import { AstronomyEngineProvider } from '../AstronomyEngineProvider';
import { calculateVarna } from './varna';
import { calculateVashya } from './vashya';
import { calculateTara } from './tara';
import { calculateYoni } from './yoni';
import { calculateGrahaMaitri } from './grahaMaitri';
import { calculateGana } from './gana';
import { calculateBhakoot } from './bhakoot';
import { calculateNadi } from './nadi';

export async function calculateGunaMilan(
  boyData: BirthData, 
  girlData: BirthData, 
  provider: AstronomyEngineProvider
): Promise<MatchingResult | null> {
  const boyKundli = await provider.calculateKundli(boyData);
  const girlKundli = await provider.calculateKundli(girlData);

  if (!boyKundli || !girlKundli) return null;

  const boyRashi = boyKundli.rashi;
  const boyNakshatra = boyKundli.nakshatra;
  const girlRashi = girlKundli.rashi;
  const girlNakshatra = girlKundli.nakshatra;

  const varna = calculateVarna(boyRashi.rashi, girlRashi.rashi);
  const vashya = calculateVashya(boyRashi.rashi, girlRashi.rashi);
  const tara = calculateTara(boyNakshatra.nakshatra, girlNakshatra.nakshatra);
  const yoni = calculateYoni(boyNakshatra.nakshatra, girlNakshatra.nakshatra);
  const grahaMaitri = calculateGrahaMaitri(boyRashi.rashi, girlRashi.rashi);
  const gana = calculateGana(boyNakshatra.nakshatra, girlNakshatra.nakshatra);
  const bhakoot = calculateBhakoot(boyRashi.rashi, girlRashi.rashi);
  const nadi = calculateNadi(boyNakshatra.nakshatra, girlNakshatra.nakshatra);

  const totalScore = 
    varna.obtainedScore + 
    vashya.obtainedScore + 
    tara.obtainedScore + 
    yoni.obtainedScore + 
    grahaMaitri.obtainedScore + 
    gana.obtainedScore + 
    bhakoot.obtainedScore + 
    nadi.obtainedScore;

  const percentage = Math.round((totalScore / 36) * 100);

  let interpretation = '';
  if (totalScore >= 25) {
    interpretation = 'परंपरागत गुण मिलान के अनुसार यह एक उत्तम (Strong) मिलान है।';
  } else if (totalScore >= 18) {
    interpretation = 'परंपरागत गुण मिलान के अनुसार यह एक सामान्य/मध्यम (Moderate) मिलान है।';
  } else {
    interpretation = 'परंपरागत गुण मिलान के अनुसार इस मिलान में चुनौतियां (Concerns) हो सकती हैं। विवाह का निर्णय केवल इस स्कोर के आधार पर नहीं लेना चाहिए।';
  }

  // Extract Manglik dosha if present
  const extractManglik = (doshas: DoshaResult[]) => doshas.filter(d => d.name === 'मांगलिक दोष (Mangal Dosha)');

  return {
    boyData,
    girlData,
    boyRashi,
    boyNakshatra,
    girlRashi,
    girlNakshatra,
    varna,
    vashya,
    tara,
    yoni,
    grahaMaitri,
    gana,
    bhakoot,
    nadi,
    totalScore,
    percentage,
    interpretation,
    boyDoshas: extractManglik(boyKundli.doshas),
    girlDoshas: extractManglik(girlKundli.doshas)
  };
}
