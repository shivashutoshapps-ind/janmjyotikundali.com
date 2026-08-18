export interface DoshaContent {
  slug: string;
  name: { hi: string; en: string };
  englishName: string;
  introduction: { hi: string; en: string };
  calculationBasis: { hi: string; en: string };
  significance: { hi: string; en: string };
  limitations: { hi: string; en: string };
  relatedGrahaSlugs: string[];
  educationalGuidance: { hi: string; en: string };
}

export const doshaData: Record<string, DoshaContent> = {
  'mangal-dosha': {
    slug: 'mangal-dosha',
    name: { hi: 'मांगलिक दोष', en: 'Manglik Dosha' },
    englishName: 'Mangal Dosha',
    introduction: {
      hi: 'वैदिक ज्योतिष में मंगल दोष (Mangal Dosha) एक अत्यंत चर्चित विषय है। जब कुंडली में मंगल (Mars) एक विशेष भाव में स्थित होता है, तो उस व्यक्ति को मांगलिक कहा जाता है। यह मुख्य रूप से विवाह और वैवाहिक सुख से जुड़ा माना जाता है।',
      en: 'In Vedic astrology, Mangal Dosha is a highly discussed topic. When Mars (Mangal) is placed in specific houses in the birth chart, the person is considered "Manglik". It is primarily associated with marriage and marital happiness.'
    },
    calculationBasis: {
      hi: 'यदि किसी व्यक्ति की जन्म कुंडली में मंगल ग्रह लग्न (Ascendant) से पहले (1st), चौथे (4th), सातवें (7th), आठवें (8th) या बारहवें (12th) भाव में स्थित हो, तो मांगलिक दोष का निर्माण होता है। (कुछ परंपराओं में चंद्रमा या शुक्र से भी इसकी गणना की जाती है)।',
      en: 'Mangal Dosha is formed if Mars is placed in the 1st, 4th, 7th, 8th, or 12th house from the Ascendant (Lagna) in a birth chart. (Some traditions also calculate it from the Moon or Venus).'
    },
    significance: {
      hi: 'मंगल ऊर्जा, साहस और आक्रामकता का ग्रह है। विवाह के दृष्टिकोण से, इन भावों में मंगल की उपस्थिति से रिश्ते में उग्रता, अहंकार या मतभेद आने की संभावना मानी जाती है। इसलिए, पारंपरिक रूप से एक मांगलिक का विवाह दूसरे मांगलिक से करने की सलाह दी जाती है ताकि दोनों की ऊर्जा संतुलित हो सके।',
      en: 'Mars is the planet of energy, courage, and aggression. From a marital perspective, its presence in these houses is traditionally believed to bring volatility, ego clashes, or disagreements into the relationship. Therefore, it is traditionally advised that a Manglik marries another Manglik to balance the energies.'
    },
    limitations: {
      hi: 'मांगलिक होना कोई "शाप" या दुर्भाग्य नहीं है। मंगल उच्च ऊर्जा का प्रतीक है, जिसे केवल सही दिशा (जैसे करियर, खेल, रक्षा) में लगाने की आवश्यकता होती है। इसके अतिरिक्त, कुंडली में गुरु (Jupiter) की दृष्टि या अन्य शुभ योग इस दोष को पूरी तरह रद्द (Cancel) कर सकते हैं।',
      en: 'Being Manglik is not a "curse" or misfortune. Mars symbolizes high energy, which simply needs to be channeled correctly (e.g., into a career, sports, or defense). Additionally, the aspect of Jupiter or other favorable yogas in the chart can completely cancel this dosha.'
    },
    relatedGrahaSlugs: ['mangal'],
    educationalGuidance: {
      hi: 'विवाह के समय केवल मंगल दोष को ही सब कुछ नहीं मानना चाहिए। समग्र अष्टकूट गुण मिलान, दोनों कुंडलियों की समग्र शक्ति, और आपसी समझ अधिक महत्वपूर्ण है। अनावश्यक भय से बचें।',
      en: 'At the time of marriage, Mangal Dosha should not be the sole deciding factor. The overall Ashtakoot Guna Milan, the overall strength of both charts, and mutual understanding are far more important. Avoid unnecessary fear.'
    }
  }
};
