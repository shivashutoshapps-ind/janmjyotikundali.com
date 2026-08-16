import { TransitSignal } from './transitTypes';

/**
 * Basic traditional interpretation mappings for transit houses from Moon Sign.
 */
export function interpretTransitSignal(signal: TransitSignal): { category: string, text: string } {
  const { planet, fromMoonHouse } = signal;

  // Defaults
  let category = 'सामान्य (General)';
  let text = 'सामान्य फल।';

  if (planet.includes('सूर्य')) {
    if ([3, 6, 10, 11].includes(fromMoonHouse)) {
      category = 'करियर / काम (Career & Success)';
      text = 'सूर्य के इस गोचर से कार्यक्षेत्र में सफलता, आत्मविश्वास में वृद्धि और मान-सम्मान मिलने के संकेत हैं।';
    } else {
      category = 'स्वास्थ्य-संबंधी सामान्य सावधानी (Health & Caution)';
      text = 'स्वास्थ्य का ध्यान रखें और अहंकार या क्रोध से बचें। शांति बनाए रखना उपयोगी हो सकता है।';
    }
  } else if (planet.includes('चंद्र')) {
    category = 'मानसिक स्थिति (Mental State)';
    if ([1, 3, 6, 7, 10, 11].includes(fromMoonHouse)) {
      text = 'मन प्रसन्न रहेगा। पारिवारिक और सामाजिक कार्यों में रुचि बढ़ेगी।';
    } else {
      text = 'मन में थोड़ी अशांति या तनाव महसूस हो सकता है। ध्यान और योग लाभदायक रहेगा।';
    }
  } else if (planet.includes('मंगल')) {
    category = 'ऊर्जा और कार्य (Energy & Action)';
    if ([3, 6, 11].includes(fromMoonHouse)) {
      text = 'पराक्रम और साहस में वृद्धि होगी। रुके हुए कार्य तेजी से पूरे हो सकते हैं।';
    } else {
      text = 'क्रोध पर नियंत्रण रखें। वाहन चलाते समय सावधानी बरतना उचित रहेगा।';
    }
  } else if (planet.includes('बुध')) {
    category = 'बुद्धि और संचार (Intellect & Communication)';
    if ([2, 4, 6, 8, 10, 11].includes(fromMoonHouse)) {
      text = 'बौद्धिक कार्यों में सफलता मिलेगी। व्यापार और संचार माध्यमों से लाभ के संकेत हैं।';
    } else {
      text = 'निर्णय लेने में जल्दबाजी न करें। संवाद में स्पष्टता बनाए रखें।';
    }
  } else if (planet.includes('गुरु')) {
    category = 'धन और ज्ञान (Wealth & Wisdom)';
    if ([2, 5, 7, 9, 11].includes(fromMoonHouse)) {
      text = 'धन, शिक्षा और पारिवारिक मामलों में शुभ संकेत हैं। बड़े-बुजुर्गों का आशीर्वाद मिलेगा।';
    } else {
      text = 'खर्चों पर नियंत्रण रखें। किसी भी बड़े निवेश से पहले सलाह जरूर लें।';
    }
  } else if (planet.includes('शुक्र')) {
    category = 'प्रेम / संबंध (Love & Relationships)';
    if ([1, 2, 3, 4, 5, 8, 9, 11, 12].includes(fromMoonHouse)) {
      text = 'रिश्तों में मधुरता आएगी। सुख-सुविधाओं और कला के क्षेत्रों में लाभ मिल सकता है।';
    } else {
      text = 'संबंधों में पारदर्शिता रखें और अनावश्यक विवादों से बचें।';
    }
  } else if (planet.includes('शनि')) {
    category = 'कर्म और धैर्य (Karma & Patience)';
    if ([3, 6, 11].includes(fromMoonHouse)) {
      text = 'कठिन परिश्रम का उत्तम फल मिलेगा। लंबे समय से रुके काम पूरे होने के योग हैं।';
    } else {
      text = 'धैर्य बनाए रखें। यह समय अनुशासन और मेहनत की मांग कर रहा है।';
    }
  } else if (planet.includes('राहु')) {
    category = 'अप्रत्याशित घटनाएं (Unexpected Events)';
    if ([3, 6, 10, 11].includes(fromMoonHouse)) {
      text = 'अचानक लाभ और सफलता के अवसर मिल सकते हैं। कूटनीतिक सफलता मिलेगी।';
    } else {
      text = 'भ्रम और गलतफहमी से बचें। अज्ञात भय से बचने के लिए सकारात्मक विचार रखें।';
    }
  } else if (planet.includes('केतु')) {
    category = 'आध्यात्मिक चिंतन (Spiritual Reflection)';
    if ([3, 6, 11].includes(fromMoonHouse)) {
      text = 'आध्यात्मिक कार्यों में रुचि बढ़ेगी और अचानक लाभ मिल सकता है।';
    } else {
      text = 'स्वास्थ्य का ध्यान रखें। वैराग्य की भावना आ सकती है, व्यावहारिक बने रहें।';
    }
  }

  return { category, text };
}
