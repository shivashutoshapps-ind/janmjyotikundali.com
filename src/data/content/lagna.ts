export interface LagnaContent {
  slug: string;
  name: { hi: string; en: string };
  englishName: string;
  rulingPlanet: { hi: string; en: string };
  element: { hi: string; en: string };
  modality: { hi: string; en: string };
  introduction: { hi: string; en: string };
  characteristics: { hi: string; en: string };
  strengths: { hi: string[]; en: string[] };
  challenges: { hi: string[]; en: string[] };
  physicalTraits: { hi: string; en: string };
}

export const lagnaData: Record<string, LagnaContent> = {
  mesh: {
    slug: 'mesh',
    name: { hi: 'मेष', en: 'Aries' },
    englishName: 'Aries',
    rulingPlanet: { hi: 'मंगल (Mars)', en: 'Mars' },
    element: { hi: 'अग्नि (Fire)', en: 'Fire' },
    modality: { hi: 'चर (Movable)', en: 'Movable' },
    introduction: {
      hi: 'वैदिक ज्योतिष में मेष (Aries) राशि चक्र की पहली राशि है। जब जन्म के समय पूर्वी क्षितिज पर मेष राशि उदित हो रही होती है, तो उसे मेष लग्न कहा जाता है। मेष लग्न जन्म कुंडली का पहला भाव बनाता है, जो व्यक्ति के शरीर, बाहरी व्यक्तित्व, ऊर्जा और जीवन के प्रति दृष्टिकोण को दर्शाता है। इसका स्वामी मंगल है।',
      en: 'In Vedic astrology, Aries (Mesh) is the first sign of the zodiac. When Aries is rising on the eastern horizon at the time of birth, it is called the Aries Ascendant (Lagna). The Aries Ascendant forms the first house of the birth chart, representing the physical body, outward personality, energy, and approach to life. Its ruling planet is Mars.'
    },
    characteristics: {
      hi: 'मेष लग्न में जन्म लेने वाले व्यक्ति स्वभाव से बेहद ऊर्जावान, स्वतंत्र और पहल करने वाले (Initiator) होते हैं। मंगल के प्रभाव के कारण वे जन्मजात नेता (Leader) होते हैं। वे किसी भी काम को जल्द से जल्द शुरू करना और उसमें अपनी छाप छोड़ना पसंद करते हैं। उनका जीवन के प्रति दृष्टिकोण सीधा, साहसिक और कभी-कभी आक्रामक होता है।',
      en: 'Individuals born with an Aries Ascendant are highly energetic, independent, and initiators by nature. Influenced by Mars, they are born leaders. They like to start tasks as quickly as possible and leave their mark. Their approach to life is direct, courageous, and sometimes aggressive.'
    },
    strengths: {
      hi: ['साहस और निडरता', 'जन्मजात नेतृत्व क्षमता', 'त्वरित निर्णय लेने की क्षमता', 'ऊर्जा और उत्साह'],
      en: ['Courage and fearlessness', 'Innate leadership ability', 'Quick decision-making capacity', 'Energy and enthusiasm']
    },
    challenges: {
      hi: ['धैर्य की कमी (जल्दबाजी)', 'क्रोध और आक्रामकता', 'दूसरों की सलाह न मानना', 'काम को बीच में छोड़ देना'],
      en: ['Lack of patience (impulsiveness)', 'Anger and aggression', 'Ignoring others\' advice', 'Leaving tasks uncompleted']
    },
    physicalTraits: {
      hi: 'पारंपरिक ज्योतिषीय ग्रंथों में, मेष लग्न को अक्सर एक मजबूत, एथलेटिक और फुर्तीले शरीर के साथ जोड़ा जाता है। इनकी चाल तेज हो सकती है और चेहरे पर एक स्वाभाविक तेज या लालिमा (मंगल का प्रभाव) देखने को मिल सकती है।',
      en: 'In traditional astrological texts, the Aries Ascendant is often associated with a strong, athletic, and agile body. They may have a fast walk and a natural glow or ruddiness on their face (the influence of Mars).'
    }
  },
  vrishabh: {
    slug: 'vrishabh',
    name: { hi: 'वृषभ', en: 'Taurus' },
    englishName: 'Taurus',
    rulingPlanet: { hi: 'शुक्र (Venus)', en: 'Venus' },
    element: { hi: 'पृथ्वी (Earth)', en: 'Earth' },
    modality: { hi: 'स्थिर (Fixed)', en: 'Fixed' },
    introduction: {
      hi: 'वृषभ (Taurus) राशि चक्र की दूसरी राशि है। जब जन्म के समय पूर्वी क्षितिज पर वृषभ राशि उदित होती है, तो उसे वृषभ लग्न कहा जाता है। यह लग्न स्थिरता, कला, सौंदर्य और भौतिक सुखों का प्रतीक है। वृषभ लग्न का स्वामी शुक्र (Venus) है, जो जीवन में प्रेम, आराम और सामंजस्य लाता है।',
      en: 'Taurus (Vrishabh) is the second sign of the zodiac. When Taurus rises on the eastern horizon at birth, it is called the Taurus Ascendant. This Ascendant symbolizes stability, art, beauty, and material comforts. The ruling planet of Taurus Ascendant is Venus, which brings love, comfort, and harmony into life.'
    },
    characteristics: {
      hi: 'वृषभ लग्न वाले जातक अत्यंत व्यावहारिक, धैर्यवान और दृढ़ निश्चयी होते हैं। वे जीवन में सुरक्षा और स्थिरता को सबसे ज्यादा महत्व देते हैं। शुक्र के प्रभाव के कारण इनकी रुचि कला, संगीत, अच्छे भोजन और आरामदायक जीवनशैली में होती है। ये लोग भरोसेमंद होते हैं और किसी भी काम को अंत तक ले जाने में विश्वास रखते हैं।',
      en: 'Natives with a Taurus Ascendant are highly practical, patient, and determined. They value security and stability above all else in life. Due to Venus\'s influence, they are interested in art, music, good food, and a comfortable lifestyle. They are reliable and believe in seeing things through to the end.'
    },
    strengths: {
      hi: ['अत्यधिक धैर्य', 'भरोसेमंद और वफादार', 'सौंदर्य और कला की अच्छी परख', 'दृढ़ संकल्प'],
      en: ['Extreme patience', 'Reliable and loyal', 'Good appreciation of beauty and art', 'Strong determination']
    },
    challenges: {
      hi: ['जिद्दीपन (हठ)', 'बदलाव का विरोध करना', 'भौतिक चीजों के प्रति अत्यधिक लगाव', 'आलस्य (कभी-कभी)'],
      en: ['Stubbornness', 'Resisting change', 'Excessive attachment to material things', 'Laziness (sometimes)']
    },
    physicalTraits: {
      hi: 'पारंपरिक रूप से वृषभ लग्न को एक गठीले, मजबूत और आकर्षक शरीर से जोड़ा जाता है। इनकी आंखें सुंदर और चेहरा चौड़ा हो सकता है। गर्दन और कंधे विशेष रूप से मजबूत दिखाई देते हैं (वृषभ का प्रतीक बैल है)।',
      en: 'Traditionally, the Taurus Ascendant is associated with a well-built, strong, and attractive body. They may have beautiful eyes and a broad face. The neck and shoulders often appear particularly strong (the symbol of Taurus is the Bull).'
    }
  },
  mithun: {
    slug: 'mithun',
    name: { hi: 'मिथुन', en: 'Gemini' },
    englishName: 'Gemini',
    rulingPlanet: { hi: 'बुध (Mercury)', en: 'Mercury' },
    element: { hi: 'वायु (Air)', en: 'Air' },
    modality: { hi: 'द्विस्वभाव (Dual)', en: 'Dual' },
    introduction: {
      hi: 'मिथुन (Gemini) राशि चक्र की तीसरी राशि है। जन्म के समय पूर्वी क्षितिज पर मिथुन राशि के उदित होने पर मिथुन लग्न बनता है। यह वायु तत्व और द्विस्वभाव वाली राशि है। इसका स्वामी बुध (Mercury) है, जो बुद्धि, संचार (Communication) और चंचलता का ग्रह है।',
      en: 'Gemini (Mithun) is the third sign of the zodiac. When Gemini rises on the eastern horizon at birth, the Gemini Ascendant is formed. It is an air element and dual-natured sign. Its ruling planet is Mercury, the planet of intellect, communication, and playfulness.'
    },
    characteristics: {
      hi: 'मिथुन लग्न वाले जातक अत्यंत मिलनसार, जिज्ञासु और बातूनी होते हैं। वे हर विषय के बारे में कुछ न कुछ जानना चाहते हैं। बुध के प्रभाव के कारण इनकी बुद्धि बहुत तेज होती है और ये किसी भी परिस्थिति में जल्दी ढल जाते हैं। इन्हें एक ही समय में कई काम करना पसंद होता है।',
      en: 'Individuals with a Gemini Ascendant are highly sociable, curious, and talkative. They want to know something about every topic. Due to Mercury\'s influence, their intellect is very sharp and they adapt quickly to any situation. They like to multitask.'
    },
    strengths: {
      hi: ['उत्कृष्ट संचार कौशल (Communication)', 'तेज बुद्धि और हास्य बोध', 'अनुकूलन क्षमता (Adaptability)', 'बहुमुखी प्रतिभा (Versatile)'],
      en: ['Excellent communication skills', 'Sharp intellect and sense of humor', 'Adaptability', 'Versatility']
    },
    challenges: {
      hi: ['निर्णय लेने में दुविधा (द्विस्वभाव)', 'ध्यान केंद्रित करने में कमी', 'जल्दी बोर हो जाना', 'बेचैनी'],
      en: ['Indecisiveness (dual nature)', 'Lack of focus', 'Getting bored quickly', 'Restlessness']
    },
    physicalTraits: {
      hi: 'ज्योतिषीय मान्यताओं के अनुसार, मिथुन लग्न वाले आमतौर पर दुबले-पतले, लंबे और फुर्तीले होते हैं। इनके हाथों और आंखों में एक विशेष प्रकार की ऊर्जा या चंचलता देखी जा सकती है। वे अक्सर अपनी वास्तविक उम्र से छोटे दिखाई देते हैं।',
      en: 'According to astrological beliefs, Gemini Ascendants are usually slender, tall, and agile. A special kind of energy or restlessness can be seen in their hands and eyes. They often appear younger than their actual age.'
    }
  },
  kark: {
    slug: 'kark',
    name: { hi: 'कर्क', en: 'Cancer' },
    englishName: 'Cancer',
    rulingPlanet: { hi: 'चंद्र (Moon)', en: 'Moon' },
    element: { hi: 'जल (Water)', en: 'Water' },
    modality: { hi: 'चर (Movable)', en: 'Movable' },
    introduction: {
      hi: 'कर्क (Cancer) राशि चक्र की चौथी राशि है। जब जन्म के समय पूर्वी क्षितिज पर कर्क राशि उदित हो रही हो, तो कर्क लग्न बनता है। यह एक जल तत्व की राशि है और इसका स्वामी चंद्रमा (Moon) है। कर्क लग्न वाले व्यक्ति भावनाओं, परिवार और अंतर्ज्ञान (Intuition) से गहराई से जुड़े होते हैं।',
      en: 'Cancer (Kark) is the fourth sign of the zodiac. When Cancer is rising on the eastern horizon at birth, the Cancer Ascendant is formed. It is a water sign, and its ruling planet is the Moon. Individuals with a Cancer Ascendant are deeply connected to emotions, family, and intuition.'
    },
    characteristics: {
      hi: 'कर्क लग्न वाले जातक अत्यंत संवेदनशील, देखभाल करने वाले और रक्षात्मक स्वभाव के होते हैं। चंद्रमा के प्रभाव के कारण इनकी मनोदशा (Mood) बदलती रहती है। ये अपने घर, परिवार और प्रियजनों से बहुत गहरा जुड़ाव महसूस करते हैं। बाहर से ये कठोर लग सकते हैं, लेकिन भीतर से बहुत कोमल होते हैं।',
      en: 'Natives with a Cancer Ascendant are highly sensitive, caring, and protective by nature. Due to the Moon\'s influence, their mood can fluctuate. They feel a very deep connection to their home, family, and loved ones. They may appear tough on the outside but are very soft inside.'
    },
    strengths: {
      hi: ['गहरी सहानुभूति (Empathy)', 'मजबूत अंतर्ज्ञान', 'देखभाल और पोषण करने का गुण', 'स्मरण शक्ति'],
      en: ['Deep empathy', 'Strong intuition', 'Caring and nurturing nature', 'Good memory']
    },
    challenges: {
      hi: ['अत्यधिक भावुकता (Mood swings)', 'पुरानी बातों को न भूल पाना', 'चीजों को व्यक्तिगत रूप से लेना', 'असुरक्षा की भावना'],
      en: ['Extreme emotionality (mood swings)', 'Inability to let go of the past', 'Taking things personally', 'Feelings of insecurity']
    },
    physicalTraits: {
      hi: 'पारंपरिक ग्रंथों के अनुसार, कर्क लग्न वालों का चेहरा गोल (चंद्रमा जैसा) और आंखें दयालु या पानीदार हो सकती हैं। शरीर का ऊपरी हिस्सा थोड़ा भारी हो सकता है, और वे वजन आसानी से बढ़ा सकते हैं।',
      en: 'According to traditional texts, Cancer Ascendants may have a round (moon-like) face and kind or watery eyes. The upper body might be slightly heavier, and they can gain weight easily.'
    }
  },
  singh: {
    slug: 'singh',
    name: { hi: 'सिंह', en: 'Leo' },
    englishName: 'Leo',
    rulingPlanet: { hi: 'सूर्य (Sun)', en: 'Sun' },
    element: { hi: 'अग्नि (Fire)', en: 'Fire' },
    modality: { hi: 'स्थिर (Fixed)', en: 'Fixed' },
    introduction: {
      hi: 'सिंह (Leo) राशि चक्र की पांचवीं राशि है। पूर्वी क्षितिज पर सिंह राशि के उदित होने से सिंह लग्न बनता है। यह अग्नि तत्व की एक स्थिर राशि है, जिसका स्वामी सभी ग्रहों का राजा, सूर्य (Sun) है। सिंह लग्न सत्ता, आत्मविश्वास, और रचनात्मकता का प्रतीक है।',
      en: 'Leo (Singh) is the fifth sign of the zodiac. Leo Ascendant is formed when Leo rises on the eastern horizon. It is a fixed fire sign, ruled by the king of all planets, the Sun. The Leo Ascendant symbolizes power, confidence, and creativity.'
    },
    characteristics: {
      hi: 'सिंह लग्न वाले जातक राजसी स्वभाव के, आत्मविश्वासी और महत्वाकांक्षी होते हैं। वे जहां भी जाते हैं, ध्यान का केंद्र बनना पसंद करते हैं। सूर्य के प्रभाव के कारण इनमें प्राकृतिक रूप से एक गरिमा और स्वाभिमान होता है। वे बहुत उदार और अपने प्रियजनों के प्रति वफादार होते हैं।',
      en: 'Individuals with a Leo Ascendant have a royal demeanor, are confident, and ambitious. They like to be the center of attention wherever they go. Due to the Sun\'s influence, they naturally possess dignity and self-respect. They are very generous and loyal to their loved ones.'
    },
    strengths: {
      hi: ['मजबूत आत्मविश्वास', 'नेतृत्व क्षमता', 'उदारता (Generosity)', 'कलात्मक अभिव्यक्ति'],
      en: ['Strong self-confidence', 'Leadership ability', 'Generosity', 'Artistic expression']
    },
    challenges: {
      hi: ['अहंकार (Ego)', 'ध्यान आकर्षित करने की तीव्र इच्छा', 'तानाशाही प्रवृत्ति', 'आलोचना सहन न कर पाना'],
      en: ['Ego', 'Intense desire for attention', 'Dictatorial tendencies', 'Inability to tolerate criticism']
    },
    physicalTraits: {
      hi: 'ज्योतिषीय परंपराओं में, सिंह लग्न को चौड़े कंधों, भव्य उपस्थिति और आकर्षक बालों (शेर के अयाल की तरह) के साथ जोड़ा जाता है। इनकी आवाज अक्सर स्पष्ट और प्रभावशाली होती है, और इनका व्यक्तित्व बहुत चुंबकीय होता है।',
      en: 'In astrological traditions, the Leo Ascendant is associated with broad shoulders, a grand presence, and striking hair (like a lion\'s mane). Their voice is often clear and authoritative, and their personality is very magnetic.'
    }
  },
  kanya: {
    slug: 'kanya',
    name: { hi: 'कन्या', en: 'Virgo' },
    englishName: 'Virgo',
    rulingPlanet: { hi: 'बुध (Mercury)', en: 'Mercury' },
    element: { hi: 'पृथ्वी (Earth)', en: 'Earth' },
    modality: { hi: 'द्विस्वभाव (Dual)', en: 'Dual' },
    introduction: {
      hi: 'कन्या (Virgo) राशि चक्र की छठी राशि है। जन्म के समय क्षितिज पर कन्या राशि का उदय होना कन्या लग्न का निर्माण करता है। यह पृथ्वी तत्व की राशि है, जिसका स्वामी बुध (Mercury) है। कन्या लग्न विश्लेषण, पूर्णता (Perfection), और सेवा भाव का प्रतिनिधित्व करता है।',
      en: 'Virgo (Kanya) is the sixth sign of the zodiac. The rise of Virgo on the horizon at birth forms the Virgo Ascendant. It is an earth sign, ruled by Mercury. The Virgo Ascendant represents analysis, perfection, and a sense of service.'
    },
    characteristics: {
      hi: 'कन्या लग्न वाले लोग बहुत ही व्यावहारिक, विश्लेषणात्मक और विवरणों पर ध्यान देने वाले (Detail-oriented) होते हैं। वे हर काम को सटीकता के साथ करना पसंद करते हैं। बुध का प्रभाव इन्हें बेहतरीन योजनाकार बनाता है। ये लोग स्वास्थ्य, स्वच्छता और व्यवस्था के प्रति बहुत जागरूक होते हैं।',
      en: 'People with a Virgo Ascendant are highly practical, analytical, and detail-oriented. They like to do every task with precision. Mercury\'s influence makes them excellent planners. These individuals are very conscious about health, hygiene, and order.'
    },
    strengths: {
      hi: ['विश्लेषणात्मक क्षमता', 'व्यावहारिकता', 'समस्याओं को सुलझाने में माहिर', 'सेवा और समर्पण का भाव'],
      en: ['Analytical ability', 'Practicality', 'Adept at solving problems', 'Sense of service and dedication']
    },
    challenges: {
      hi: ['अत्यधिक आलोचनात्मक होना', 'छोटी-छोटी बातों पर चिंता करना (Overthinking)', 'परफेक्शन की जिद', 'स्वयं को नजरअंदाज करना'],
      en: ['Being overly critical', 'Worrying over small things (overthinking)', 'Insistence on perfection', 'Neglecting oneself']
    },
    physicalTraits: {
      hi: 'पारंपरिक ग्रंथों में, कन्या लग्न को अक्सर युवा और नाजुक उपस्थिति से जोड़ा जाता है। ये लोग आमतौर पर अपनी उम्र से छोटे दिखते हैं (बुध के प्रभाव के कारण)। इनका माथा चौड़ा और आंखें जांचने वाली (Observant) हो सकती हैं।',
      en: 'In traditional texts, the Virgo Ascendant is often associated with a youthful and delicate appearance. They generally look younger than their age (due to Mercury\'s influence). They may have a broad forehead and observant eyes.'
    }
  },
  tula: {
    slug: 'tula',
    name: { hi: 'तुला', en: 'Libra' },
    englishName: 'Libra',
    rulingPlanet: { hi: 'शुक्र (Venus)', en: 'Venus' },
    element: { hi: 'वायु (Air)', en: 'Air' },
    modality: { hi: 'चर (Movable)', en: 'Movable' },
    introduction: {
      hi: 'तुला (Libra) राशि चक्र की सातवीं राशि है। जन्म के समय पूर्वी क्षितिज पर तुला राशि के उदित होने पर तुला लग्न बनता है। यह वायु तत्व की राशि है और इसका प्रतीक एक तराजू है। इसका स्वामी शुक्र (Venus) है, जो सौंदर्य, संतुलन, कूटनीति और रिश्तों का प्रतिनिधित्व करता है।',
      en: 'Libra (Tula) is the seventh sign of the zodiac. When Libra rises on the eastern horizon at birth, the Libra Ascendant is formed. It is an air sign, and its symbol is the scales. Its ruling planet is Venus, which represents beauty, balance, diplomacy, and relationships.'
    },
    characteristics: {
      hi: 'तुला लग्न वाले व्यक्ति हमेशा जीवन में सद्भाव और संतुलन बनाए रखने की कोशिश करते हैं। वे बहुत कूटनीतिक, मिलनसार और आकर्षक होते हैं। शुक्र के प्रभाव से उनकी रुचि कला, फैशन और सुंदरता में होती है। ये लोग अकेले रहने से बचते हैं और इन्हें हमेशा एक साथी (पार्टनर) की तलाश रहती है।',
      en: 'Individuals with a Libra Ascendant always try to maintain harmony and balance in life. They are very diplomatic, sociable, and charming. Influenced by Venus, they are interested in art, fashion, and beauty. They avoid being alone and are always looking for a partner.'
    },
    strengths: {
      hi: ['कूटनीति (Diplomacy)', 'निष्पक्षता और न्याय की समझ', 'आकर्षक व्यक्तित्व', 'दूसरों के साथ मिलकर काम करने की क्षमता'],
      en: ['Diplomacy', 'Sense of fairness and justice', 'Charming personality', 'Ability to work well with others']
    },
    challenges: {
      hi: ['निर्णय लेने में अत्यधिक कठिनाई', 'विवादों से बचने के लिए समझौता करना', 'दूसरों पर ज्यादा निर्भर रहना'],
      en: ['Extreme difficulty in making decisions', 'Compromising just to avoid conflict', 'Relying too much on others']
    },
    physicalTraits: {
      hi: 'पारंपरिक ज्योतिष के अनुसार, तुला लग्न वाले बहुत सुंदर और आकर्षक चेहरे वाले होते हैं। इनके चेहरे पर एक स्वाभाविक मुस्कान (अक्सर डिंपल) हो सकती है। इनका शरीर आमतौर पर बहुत संतुलित और अनुपात (Proportion) में होता है।',
      en: 'According to traditional astrology, Libra Ascendants have very beautiful and attractive faces. They may have a natural smile (often with dimples) on their face. Their body is usually very well-balanced and in proportion.'
    }
  },
  vrishchik: {
    slug: 'vrishchik',
    name: { hi: 'वृश्चिक', en: 'Scorpio' },
    englishName: 'Scorpio',
    rulingPlanet: { hi: 'मंगल (Mars) / केतु (Ketu)', en: 'Mars / Ketu' },
    element: { hi: 'जल (Water)', en: 'Water' },
    modality: { hi: 'स्थिर (Fixed)', en: 'Fixed' },
    introduction: {
      hi: 'वृश्चिक (Scorpio) राशि चक्र की आठवीं राशि है। जब जन्म के समय क्षितिज पर वृश्चिक राशि उदित होती है, तो उसे वृश्चिक लग्न कहा जाता है। यह जल तत्व की राशि है जिसका स्वामी पारंपरिक रूप से मंगल (और केतु) माना जाता है। वृश्चिक लग्न तीव्रता, रहस्य, और परिवर्तन (Transformation) का प्रतीक है।',
      en: 'Scorpio (Vrishchik) is the eighth sign of the zodiac. When Scorpio rises on the horizon at birth, it is called the Scorpio Ascendant. It is a water sign traditionally ruled by Mars (and Ketu). The Scorpio Ascendant symbolizes intensity, mystery, and transformation.'
    },
    characteristics: {
      hi: 'वृश्चिक लग्न वाले व्यक्ति अत्यधिक गहन (Intense), रहस्यमयी और दृढ़ निश्चयी होते हैं। वे जीवन को बहुत गहराई से महसूस करते हैं और चीजों की तह तक जाने की क्षमता रखते हैं। वे अपने इरादों को गुप्त रखते हैं। जब वे कोई लक्ष्य तय कर लेते हैं, तो उसे हासिल करने के लिए अपनी पूरी ऊर्जा लगा देते हैं।',
      en: 'Individuals with a Scorpio Ascendant are extremely intense, mysterious, and determined. They feel life very deeply and have the ability to get to the bottom of things. They keep their intentions secret. Once they set a goal, they pour all their energy into achieving it.'
    },
    strengths: {
      hi: ['तीव्र इच्छाशक्ति', 'गहरा अंतर्ज्ञान (Intuition)', 'रिसर्च और खोज की क्षमता', 'कठिन परिस्थितियों से उबरने की ताकत'],
      en: ['Intense willpower', 'Deep intuition', 'Research and investigative ability', 'Strength to bounce back from adversity']
    },
    challenges: {
      hi: ['ईर्ष्या और शक्की स्वभाव', 'बदला लेने की भावना', 'अपनी भावनाओं को छिपाकर रखना', 'अत्यधिक नियंत्रण चाहना'],
      en: ['Jealousy and suspicious nature', 'Vindictiveness', 'Hiding their emotions', 'Wanting excessive control']
    },
    physicalTraits: {
      hi: 'ज्योतिषीय ग्रंथों के अनुसार, वृश्चिक लग्न वालों की आंखें बहुत गहरी, तेज और सम्मोहक (Piercing) होती हैं। ऐसा लगता है जैसे वे आपके भीतर तक देख रहे हैं। इनका शरीर मजबूत होता है और इनका व्यक्तित्व रहस्यमयी आकर्षण लिए होता है।',
      en: 'According to astrological texts, Scorpio Ascendants have very deep, sharp, and piercing eyes. It feels as if they are looking right through you. They have a strong physical constitution and their personality carries a mysterious magnetism.'
    }
  },
  dhanu: {
    slug: 'dhanu',
    name: { hi: 'धनु', en: 'Sagittarius' },
    englishName: 'Sagittarius',
    rulingPlanet: { hi: 'गुरु (Jupiter)', en: 'Jupiter' },
    element: { hi: 'अग्नि (Fire)', en: 'Fire' },
    modality: { hi: 'द्विस्वभाव (Dual)', en: 'Dual' },
    introduction: {
      hi: 'धनु (Sagittarius) राशि चक्र की नौवीं राशि है। जन्म के समय पूर्वी क्षितिज पर धनु राशि के उदित होने पर धनु लग्न बनता है। यह अग्नि तत्व की राशि है और इसका स्वामी देवगुरु बृहस्पति (Jupiter) है। धनु लग्न ज्ञान, धर्म, दर्शन, और आशावाद का प्रतीक है।',
      en: 'Sagittarius (Dhanu) is the ninth sign of the zodiac. When Sagittarius rises on the eastern horizon at birth, the Sagittarius Ascendant is formed. It is a fire sign, and its ruling planet is Jupiter (Devaguru). The Sagittarius Ascendant symbolizes knowledge, dharma, philosophy, and optimism.'
    },
    characteristics: {
      hi: 'धनु लग्न वाले व्यक्ति अत्यंत आशावादी, स्वतंत्र और सत्य की खोज करने वाले होते हैं। गुरु के प्रभाव के कारण इनकी रुचि उच्च शिक्षा, दर्शन और यात्राओं में होती है। वे हमेशा चीजों के उजले पक्ष को देखते हैं। वे ईमानदार और स्पष्टवादी होते हैं, जो कभी-कभी दूसरों को तीखा लग सकता है।',
      en: 'Individuals with a Sagittarius Ascendant are highly optimistic, independent, and truth-seekers. Influenced by Jupiter, they are interested in higher education, philosophy, and travel. They always look at the bright side of things. They are honest and straightforward, which can sometimes come across as blunt to others.'
    },
    strengths: {
      hi: ['अटूट आशावाद', 'ईमानदारी और सत्यनिष्ठा', 'दार्शनिक दृष्टिकोण', 'स्वतंत्र विचार'],
      en: ['Unwavering optimism', 'Honesty and integrity', 'Philosophical outlook', 'Independent thought']
    },
    challenges: {
      hi: ['बिना सोचे-समझे बोलना (मुंहफट होना)', 'जिम्मेदारियों से भागना', 'अत्यधिक वादे कर देना', 'अस्थिरता'],
      en: ['Speaking without thinking (bluntness)', 'Running away from responsibilities', 'Overpromising', 'Instability']
    },
    physicalTraits: {
      hi: 'पारंपरिक रूप से धनु लग्न वालों का कद लंबा और व्यक्तित्व गरिमापूर्ण माना जाता है। इनका माथा चौड़ा और मुस्कान खुली होती है। बृहस्पति के प्रभाव के कारण जीवन के उत्तरार्ध में इनका वजन बढ़ सकता है।',
      en: 'Traditionally, Sagittarius Ascendants are considered to have a tall stature and a dignified personality. They have a broad forehead and an open smile. Due to Jupiter\'s influence, they may gain weight in the latter part of life.'
    }
  },
  makar: {
    slug: 'makar',
    name: { hi: 'मकर', en: 'Capricorn' },
    englishName: 'Capricorn',
    rulingPlanet: { hi: 'शनि (Saturn)', en: 'Saturn' },
    element: { hi: 'पृथ्वी (Earth)', en: 'Earth' },
    modality: { hi: 'चर (Movable)', en: 'Movable' },
    introduction: {
      hi: 'मकर (Capricorn) राशि चक्र की दसवीं राशि है। क्षितिज पर मकर राशि के उदित होने से मकर लग्न का निर्माण होता है। यह पृथ्वी तत्व की राशि है, जिसका स्वामी न्याय के देवता शनि (Saturn) हैं। मकर लग्न महत्वाकांक्षा, अनुशासन, कड़ी मेहनत और संरचना (Structure) का प्रतिनिधित्व करता है।',
      en: 'Capricorn (Makar) is the tenth sign of the zodiac. The rise of Capricorn on the horizon creates the Capricorn Ascendant. It is an earth sign, ruled by the god of justice, Saturn. The Capricorn Ascendant represents ambition, discipline, hard work, and structure.'
    },
    characteristics: {
      hi: 'मकर लग्न वाले व्यक्ति बहुत ही गंभीर, अनुशासित और लक्ष्य-उन्मुख (Goal-oriented) होते हैं। शनि के प्रभाव से ये जीवन की वास्तविकताओं को जल्दी समझ लेते हैं। वे बहुत मेहनती होते हैं और सफलता के लिए धीरे-धीरे लेकिन निश्चित रूप से सीढ़ियां चढ़ते हैं। वे जिम्मेदारियों को बहुत गंभीरता से लेते हैं।',
      en: 'Individuals with a Capricorn Ascendant are very serious, disciplined, and goal-oriented. Under Saturn\'s influence, they understand the realities of life early on. They are very hardworking and climb the ladder of success slowly but surely. They take responsibilities very seriously.'
    },
    strengths: {
      hi: ['कठोर अनुशासन', 'अत्यधिक महत्वाकांक्षी', 'व्यावहारिक (Practical)', 'जिम्मेदारी का अहसास'],
      en: ['Strict discipline', 'Highly ambitious', 'Practical', 'Sense of responsibility']
    },
    challenges: {
      hi: ['अत्यधिक गंभीरता या निराशावाद', 'काम को ही जीवन मान लेना (Workaholic)', 'भावनाओं को व्यक्त न करना', 'कठोरता'],
      en: ['Extreme seriousness or pessimism', 'Treating work as life itself (workaholic)', 'Inability to express emotions', 'Rigidity']
    },
    physicalTraits: {
      hi: 'ज्योतिषीय मान्यताओं के अनुसार, मकर लग्न वाले अक्सर दुबले और हड्डियों वाले शरीर की बनावट रखते हैं। इनके चेहरे पर एक गंभीरता और परिपक्वता (Maturity) होती है। शनि के प्रभाव से ये समय के साथ और अधिक आकर्षक (Like fine wine) होते जाते हैं।',
      en: 'According to astrological beliefs, Capricorn Ascendants often have a lean and bony physical structure. There is a seriousness and maturity on their face. Influenced by Saturn, they often become more attractive over time (like fine wine).'
    }
  },
  kumbh: {
    slug: 'kumbh',
    name: { hi: 'कुंभ', en: 'Aquarius' },
    englishName: 'Aquarius',
    rulingPlanet: { hi: 'शनि (Saturn) / राहु (Rahu)', en: 'Saturn / Rahu' },
    element: { hi: 'वायु (Air)', en: 'Air' },
    modality: { hi: 'स्थिर (Fixed)', en: 'Fixed' },
    introduction: {
      hi: 'कुंभ (Aquarius) राशि चक्र की ग्यारहवीं राशि है। जन्म के समय पूर्वी क्षितिज पर कुंभ राशि के उदित होने पर कुंभ लग्न बनता है। यह वायु तत्व की राशि है, जिसके पारंपरिक स्वामी शनि और आधुनिक/सह-स्वामी राहु हैं। कुंभ लग्न समाज, मानवता, नवीनता और स्वतंत्रता का प्रतीक है।',
      en: 'Aquarius (Kumbh) is the eleventh sign of the zodiac. When Aquarius rises on the eastern horizon at birth, the Aquarius Ascendant is formed. It is an air sign, traditionally ruled by Saturn and co-ruled by Rahu. The Aquarius Ascendant symbolizes society, humanity, innovation, and freedom.'
    },
    characteristics: {
      hi: 'कुंभ लग्न वाले जातक अत्यंत स्वतंत्र विचार वाले, बौद्धिक और मानवतावादी होते हैं। वे समाज के लिए कुछ अलग और नया करना चाहते हैं। उनकी सोच अक्सर अपने समय से आगे (Forward-thinking) होती है। वे मिलनसार होते हैं, लेकिन फिर भी एक भावनात्मक दूरी बनाए रखते हैं।',
      en: 'Individuals with an Aquarius Ascendant are highly independent thinkers, intellectual, and humanitarian. They want to do something different and new for society. Their thinking is often ahead of their time. They are friendly, yet maintain an emotional distance.'
    },
    strengths: {
      hi: ['नवीन और वैज्ञानिक सोच', 'मानवतावादी दृष्टिकोण', 'स्वतंत्रता प्रेमी', 'बौद्धिक गहराई'],
      en: ['Innovative and scientific thinking', 'Humanitarian outlook', 'Freedom-loving', 'Intellectual depth']
    },
    challenges: {
      hi: ['भावनात्मक रूप से अलग-थलग दिखना', 'विद्रोही स्वभाव', 'जिद्दीपन (अपने विचारों को लेकर)', 'अप्रत्याशित व्यवहार'],
      en: ['Appearing emotionally detached', 'Rebellious nature', 'Stubbornness (regarding their ideas)', 'Unpredictable behavior']
    },
    physicalTraits: {
      hi: 'पारंपरिक ग्रंथों में कुंभ लग्न वालों को आकर्षक लेकिन थोड़े अपरंपरागत (Unconventional) रूप-रंग वाला माना जाता है। इनका माथा बड़ा हो सकता है, जो इनके गहरे बौद्धिक स्तर को दर्शाता है। इनकी आंखों में दूरदृष्टि और विचारशीलता दिखाई देती है।',
      en: 'In traditional texts, Aquarius Ascendants are considered to have an attractive but slightly unconventional appearance. They may have a large forehead, reflecting their deep intellectual capacity. Their eyes show vision and thoughtfulness.'
    }
  },
  meen: {
    slug: 'meen',
    name: { hi: 'मीन', en: 'Pisces' },
    englishName: 'Pisces',
    rulingPlanet: { hi: 'गुरु (Jupiter)', en: 'Jupiter' },
    element: { hi: 'जल (Water)', en: 'Water' },
    modality: { hi: 'द्विस्वभाव (Dual)', en: 'Dual' },
    introduction: {
      hi: 'मीन (Pisces) राशि चक्र की बारहवीं और अंतिम राशि है। क्षितिज पर मीन राशि के उदय होने से मीन लग्न बनता है। यह जल तत्व की राशि है और इसका स्वामी गुरु (Jupiter) है। मीन लग्न आध्यात्मिकता, करुणा, कल्पना और मोक्ष का प्रतीक है।',
      en: 'Pisces (Meen) is the twelfth and final sign of the zodiac. The rise of Pisces on the horizon forms the Pisces Ascendant. It is a water sign, and its ruling planet is Jupiter. The Pisces Ascendant symbolizes spirituality, compassion, imagination, and moksha (liberation).'
    },
    characteristics: {
      hi: 'मीन लग्न वाले जातक अत्यधिक संवेदनशील, दयालु और स्वप्नशील (Dreamer) होते हैं। गुरु के प्रभाव से इनकी अंतर्दृष्टि (Intuition) और आध्यात्मिक जुड़ाव बहुत गहरा होता है। वे रचनात्मक होते हैं और कला या संगीत से जुड़े हो सकते हैं। वे अक्सर अपनी ही काल्पनिक दुनिया में रहना पसंद करते हैं।',
      en: 'Natives with a Pisces Ascendant are extremely sensitive, compassionate, and dreamers. Influenced by Jupiter, their intuition and spiritual connection are very deep. They are creative and might be connected to art or music. They often prefer living in their own imaginative world.'
    },
    strengths: {
      hi: ['अत्यधिक करुणा और दया', 'गहरी रचनात्मकता और कल्पना', 'मजबूत अंतर्ज्ञान', 'आध्यात्मिक समझ'],
      en: ['Extreme compassion and kindness', 'Deep creativity and imagination', 'Strong intuition', 'Spiritual understanding']
    },
    challenges: {
      hi: ['यथार्थ (Reality) से भागना', 'दूसरों पर बहुत जल्दी भरोसा करना', 'निर्णय न ले पाना', 'अत्यधिक भावुकता'],
      en: ['Escaping reality', 'Trusting others too quickly', 'Indecisiveness', 'Extreme emotionality']
    },
    physicalTraits: {
      hi: 'ज्योतिषीय परंपराओं के अनुसार, मीन लग्न वालों की आंखें बहुत सुंदर, बड़ी और स्वप्निल होती हैं, जिनमें गहरी करुणा दिखाई देती है। इनकी कद-काठी अक्सर औसत और शरीर थोड़ा कोमल या गद्देदार (Plump) हो सकता है।',
      en: 'According to astrological traditions, Pisces Ascendants have very beautiful, large, and dreamy eyes that reflect deep compassion. Their stature is often average, and their body might be soft or slightly plump.'
    }
  }
};
