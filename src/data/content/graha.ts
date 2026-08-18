export interface GrahaContent {
  slug: string;
  name: { hi: string; en: string };
  englishName: string;
  sanskritName: string;
  astronomicalType: { hi: string; en: string };
  role: { hi: string; en: string };
  introduction: { hi: string; en: string };
  significations: { hi: string[]; en: string[] };
  exaltation: { hi: string; en: string };
  debilitation: { hi: string; en: string };
  ownSigns: { hi: string[]; en: string[] };
  characteristics: { hi: string; en: string };
  educationalNotes: { hi: string; en: string };
}

export const grahaData: Record<string, GrahaContent> = {
  surya: {
    slug: 'surya',
    name: { hi: 'सूर्य', en: 'Sun' },
    englishName: 'Sun',
    sanskritName: 'Surya',
    astronomicalType: { hi: 'तारा (Star)', en: 'Star' },
    role: { hi: 'राजा (King)', en: 'King' },
    introduction: {
      hi: 'वैदिक ज्योतिष में सूर्य (Surya) सभी ग्रहों का राजा माना जाता है। यह आत्मा, पिता, ऊर्जा, और आत्मविश्वास का कारक है। सूर्य ही संपूर्ण ब्रह्मांड में प्रकाश और जीवन का मुख्य स्रोत है।',
      en: 'In Vedic astrology, the Sun (Surya) is considered the king of all planets. It represents the soul, father, vitality, and self-confidence. The Sun is the primary source of light and life in the universe.'
    },
    significations: {
      hi: ['आत्मा', 'पिता', 'नेतृत्व', 'सरकारी सेवा', 'मान-सम्मान', 'शक्ति'],
      en: ['Soul', 'Father', 'Leadership', 'Government Service', 'Honor', 'Power']
    },
    exaltation: { hi: 'मेष (Aries)', en: 'Aries (Mesh)' },
    debilitation: { hi: 'तुला (Libra)', en: 'Libra (Tula)' },
    ownSigns: { hi: ['सिंह (Leo)'], en: ['Leo (Singh)'] },
    characteristics: {
      hi: 'सूर्य एक क्रूर ग्रह माना जाता है जो अनुशासन और स्पष्टता पसंद करता है। मजबूत सूर्य वाले व्यक्ति जन्मजात नेता होते हैं, उनमें असीम ऊर्जा और आत्म-सम्मान होता है।',
      en: 'The Sun is considered a fierce planet that prefers discipline and clarity. Individuals with a strong Sun are natural leaders, possessing boundless energy and self-respect.'
    },
    educationalNotes: {
      hi: 'खगोल विज्ञान के अनुसार सूर्य एक तारा है, लेकिन ज्योतिषीय गणनाओं में इसे प्राथमिक ग्रह (नवग्रह) के रूप में महत्व दिया गया है।',
      en: 'Astronomically, the Sun is a star, but in astrological calculations, it is given the importance of a primary planet (Navagraha).'
    }
  },
  chandra: {
    slug: 'chandra',
    name: { hi: 'चंद्र', en: 'Moon' },
    englishName: 'Moon',
    sanskritName: 'Chandra',
    astronomicalType: { hi: 'उपग्रह (Satellite)', en: 'Satellite' },
    role: { hi: 'रानी (Queen)', en: 'Queen' },
    introduction: {
      hi: 'चंद्र (Moon) हमारे मन, भावनाओं और माता का प्रतिनिधित्व करता है। वैदिक ज्योतिष में, जन्म के समय चंद्रमा जिस राशि में होता है, वही व्यक्ति की चंद्र राशि (Rashi) कहलाती है।',
      en: 'The Moon (Chandra) represents our mind, emotions, and mother. In Vedic astrology, the sign the Moon is in at the time of birth is considered a person\'s Moon Sign (Rashi).'
    },
    significations: {
      hi: ['मन और भावनाएं', 'माता', 'जल तत्व', 'शांति', 'यात्रा', 'कल्पना'],
      en: ['Mind and Emotions', 'Mother', 'Water Element', 'Peace', 'Travel', 'Imagination']
    },
    exaltation: { hi: 'वृषभ (Taurus)', en: 'Taurus (Vrishabh)' },
    debilitation: { hi: 'वृश्चिक (Scorpio)', en: 'Scorpio (Vrishchik)' },
    ownSigns: { hi: ['कर्क (Cancer)'], en: ['Cancer (Kark)'] },
    characteristics: {
      hi: 'चंद्रमा बहुत ही संवेदनशील और शीतल ग्रह है। यह हमारी मानसिक स्थिति और सोचने के तरीके को गहराई से प्रभावित करता है।',
      en: 'The Moon is a highly sensitive and cooling planet. It deeply influences our mental state and our way of thinking.'
    },
    educationalNotes: {
      hi: 'खगोलीय रूप से चंद्रमा पृथ्वी का एकमात्र प्राकृतिक उपग्रह है। ज्योतिष में इसका प्रभाव सबसे तीव्र माना जाता है क्योंकि यह पृथ्वी के सबसे करीब है।',
      en: 'Astronomically, the Moon is Earth\'s only natural satellite. In astrology, its impact is considered the most immediate as it is closest to Earth.'
    }
  },
  mangal: {
    slug: 'mangal',
    name: { hi: 'मंगल', en: 'Mars' },
    englishName: 'Mars',
    sanskritName: 'Mangal',
    astronomicalType: { hi: 'ग्रह (Planet)', en: 'Planet' },
    role: { hi: 'सेनापति (Commander)', en: 'Commander' },
    introduction: {
      hi: 'मंगल (Mars) ऊर्जा, साहस, पराक्रम और शक्ति का कारक है। इसे देवताओं का सेनापति माना जाता है। मंगल व्यक्ति की कार्यक्षमता और इच्छाशक्ति को नियंत्रित करता है।',
      en: 'Mars (Mangal) represents energy, courage, valor, and strength. It is considered the commander of the gods. Mars controls an individual\'s drive and willpower.'
    },
    significations: {
      hi: ['साहस और ऊर्जा', 'छोटे भाई-बहन', 'भूमि और संपत्ति', 'शस्त्र और तकनीकी कौशल', 'रक्त'],
      en: ['Courage and Energy', 'Younger Siblings', 'Land and Property', 'Weapons and Technical Skills', 'Blood']
    },
    exaltation: { hi: 'मकर (Capricorn)', en: 'Capricorn (Makar)' },
    debilitation: { hi: 'कर्क (Cancer)', en: 'Cancer (Kark)' },
    ownSigns: { hi: ['मेष (Aries)', 'वृश्चिक (Scorpio)'], en: ['Aries (Mesh)', 'Scorpio (Vrishchik)'] },
    characteristics: {
      hi: 'मंगल प्रधान लोग अक्सर निर्भीक, ऊर्जावान और आक्रामक होते हैं। वे चुनौतियों से नहीं डरते और रक्षा या खेल जैसे क्षेत्रों में उत्कृष्ट प्रदर्शन कर सकते हैं।',
      en: 'Mars-dominant individuals are often fearless, energetic, and assertive. They do not fear challenges and can excel in fields like defense or sports.'
    },
    educationalNotes: {
      hi: 'वैदिक ज्योतिष में मंगल को मांगलिक दोष (Mangal Dosha) के संदर्भ में महत्वपूर्ण माना जाता है, जिसका विचार कुंडली मिलान में किया जाता है।',
      en: 'In Vedic astrology, Mars is significant in the context of Mangalik Dosha, which is considered during horoscope matching.'
    }
  },
  budh: {
    slug: 'budh',
    name: { hi: 'बुध', en: 'Mercury' },
    englishName: 'Mercury',
    sanskritName: 'Budha',
    astronomicalType: { hi: 'ग्रह (Planet)', en: 'Planet' },
    role: { hi: 'राजकुमार (Prince)', en: 'Prince' },
    introduction: {
      hi: 'बुध (Mercury) बुद्धि, तर्क, वाणी और व्यापार का ग्रह है। यह हमारे संचार कौशल (Communication) और सोचने-समझने की विश्लेषणात्मक क्षमता को दर्शाता है।',
      en: 'Mercury (Budh) is the planet of intellect, logic, speech, and commerce. It represents our communication skills and analytical ability to think and understand.'
    },
    significations: {
      hi: ['बुद्धि और तर्क', 'संचार (वाणी)', 'व्यापार और वाणिज्य', 'गणित', 'मित्रता'],
      en: ['Intellect and Logic', 'Communication (Speech)', 'Business and Commerce', 'Mathematics', 'Friendship']
    },
    exaltation: { hi: 'कन्या (Virgo)', en: 'Virgo (Kanya)' },
    debilitation: { hi: 'मीन (Pisces)', en: 'Pisces (Meen)' },
    ownSigns: { hi: ['मिथुन (Gemini)', 'कन्या (Virgo)'], en: ['Gemini (Mithun)', 'Virgo (Kanya)'] },
    characteristics: {
      hi: 'बुध एक तटस्थ ग्रह है जो जिस ग्रह के साथ बैठता है, वैसा ही फल देने लगता है। मजबूत बुध वाले लोग बहुत अच्छे वक्ता और विश्लेषक होते हैं।',
      en: 'Mercury is a neutral planet that tends to give results akin to the planet it associates with. People with a strong Mercury are excellent speakers and analysts.'
    },
    educationalNotes: {
      hi: 'चूंकि बुध सूर्य के सबसे करीब है, यह कुंडली में अक्सर सूर्य के ही साथ या उससे एक घर आगे-पीछे पाया जाता है।',
      en: 'Since Mercury is closest to the Sun, it is often found in the same house as the Sun or one house away in a birth chart.'
    }
  },
  guru: {
    slug: 'guru',
    name: { hi: 'गुरु', en: 'Jupiter' },
    englishName: 'Jupiter',
    sanskritName: 'Guru / Brihaspati',
    astronomicalType: { hi: 'ग्रह (Planet)', en: 'Planet' },
    role: { hi: 'मंत्री / सलाहकार (Minister/Advisor)', en: 'Minister/Advisor' },
    introduction: {
      hi: 'गुरु (Jupiter) या बृहस्पति को सभी ग्रहों में सबसे शुभ माना जाता है। यह ज्ञान, धर्म, विस्तार, भाग्य और आध्यात्मिकता का कारक है।',
      en: 'Jupiter (Guru or Brihaspati) is considered the most auspicious of all planets. It is the significator of knowledge, dharma, expansion, fortune, and spirituality.'
    },
    significations: {
      hi: ['ज्ञान और शिक्षा', 'धन और समृद्धि', 'धर्म', 'संतान', 'शिक्षक'],
      en: ['Knowledge and Education', 'Wealth and Prosperity', 'Religion/Dharma', 'Children', 'Teacher']
    },
    exaltation: { hi: 'कर्क (Cancer)', en: 'Cancer (Kark)' },
    debilitation: { hi: 'मकर (Capricorn)', en: 'Capricorn (Makar)' },
    ownSigns: { hi: ['धनु (Sagittarius)', 'मीन (Pisces)'], en: ['Sagittarius (Dhanu)', 'Pisces (Meen)'] },
    characteristics: {
      hi: 'गुरु सात्विक स्वभाव का है और यह जिस भाव में बैठता है, उस भाव के फलों का विस्तार करता है। मजबूत गुरु व्यक्ति को आशावादी, ज्ञानी और न्यायप्रिय बनाता है।',
      en: 'Jupiter is sattvic by nature and expands the results of the house it occupies. A strong Jupiter makes a person optimistic, knowledgeable, and just.'
    },
    educationalNotes: {
      hi: 'वैदिक ज्योतिष में गुरु को "जीव" भी कहा जाता है, जिसका अर्थ है जीवन शक्ति।',
      en: 'In Vedic astrology, Jupiter is also called "Jiva," meaning life force.'
    }
  },
  shukra: {
    slug: 'shukra',
    name: { hi: 'शुक्र', en: 'Venus' },
    englishName: 'Venus',
    sanskritName: 'Shukra',
    astronomicalType: { hi: 'ग्रह (Planet)', en: 'Planet' },
    role: { hi: 'मंत्री (Minister)', en: 'Minister' },
    introduction: {
      hi: 'शुक्र (Venus) प्रेम, सौंदर्य, कला, वैवाहिक सुख और विलासिता (Luxury) का ग्रह है। यह भौतिक सुखों और रचनात्मकता को नियंत्रित करता है।',
      en: 'Venus (Shukra) is the planet of love, beauty, art, marital happiness, and luxury. It controls material comforts and creativity.'
    },
    significations: {
      hi: ['विवाह और प्रेम', 'सौंदर्य और कला', 'वाहन और विलासिता', 'आकर्षण', 'पत्नी (पुरुष की कुंडली में)'],
      en: ['Marriage and Love', 'Beauty and Art', 'Vehicles and Luxuries', 'Attraction', 'Wife (in a male chart)']
    },
    exaltation: { hi: 'मीन (Pisces)', en: 'Pisces (Meen)' },
    debilitation: { hi: 'कन्या (Virgo)', en: 'Virgo (Kanya)' },
    ownSigns: { hi: ['वृषभ (Taurus)', 'तुला (Libra)'], en: ['Taurus (Vrishabh)', 'Libra (Tula)'] },
    characteristics: {
      hi: 'मजबूत शुक्र व्यक्ति को कलात्मक, आकर्षक और शांतिप्रिय बनाता है। वे अच्छे भोजन, संगीत और जीवन की सुख-सुविधाओं का आनंद लेना पसंद करते हैं।',
      en: 'A strong Venus makes a person artistic, attractive, and peace-loving. They enjoy good food, music, and the comforts of life.'
    },
    educationalNotes: {
      hi: 'शुक्र को दैत्यों का गुरु (शुक्राचार्य) भी माना जाता है, इसलिए इसके पास असाधारण कूटनीतिक कौशल है।',
      en: 'Venus is also considered the guru of the Asuras (Shukracharya), therefore possessing extraordinary diplomatic skills.'
    }
  },
  shani: {
    slug: 'shani',
    name: { hi: 'शनि', en: 'Saturn' },
    englishName: 'Saturn',
    sanskritName: 'Shani',
    astronomicalType: { hi: 'ग्रह (Planet)', en: 'Planet' },
    role: { hi: 'सेवक / न्यायाधीश (Servant/Judge)', en: 'Servant/Judge' },
    introduction: {
      hi: 'शनि (Saturn) कर्मफल दाता और न्याय के देवता हैं। यह अनुशासन, कड़ी मेहनत, धैर्य, देरी और जिम्मेदारियों का प्रतिनिधित्व करता है।',
      en: 'Saturn (Shani) is the giver of karmic results and the lord of justice. It represents discipline, hard work, patience, delays, and responsibilities.'
    },
    significations: {
      hi: ['कर्म और न्याय', 'कठोर परिश्रम', 'अनुशासन', 'आयु (Longevity)', 'विलंब (Delay)'],
      en: ['Karma and Justice', 'Hard Work', 'Discipline', 'Longevity', 'Delay']
    },
    exaltation: { hi: 'तुला (Libra)', en: 'Libra (Tula)' },
    debilitation: { hi: 'मेष (Aries)', en: 'Aries (Mesh)' },
    ownSigns: { hi: ['मकर (Capricorn)', 'कुंभ (Aquarius)'], en: ['Capricorn (Makar)', 'Aquarius (Kumbh)'] },
    characteristics: {
      hi: 'शनि हमें जीवन की वास्तविकता सिखाते हैं। यह व्यक्ति को उसके कर्मों के अनुसार फल देते हैं। शनि का प्रभाव व्यक्ति को गंभीर, दार्शनिक और मेहनती बनाता है।',
      en: 'Saturn teaches us the reality of life. It rewards a person strictly according to their karma. Saturn\'s influence makes a person serious, philosophical, and hardworking.'
    },
    educationalNotes: {
      hi: 'वैदिक ज्योतिष में "साढ़े साती" (Sade Sati) शनि की ही 7.5 वर्ष की लंबी पारगमन (Transit) अवधि है, जो आत्मनिरीक्षण और परिवर्तन का समय मानी जाती है।',
      en: 'In Vedic astrology, "Sade Sati" is Saturn\'s 7.5-year-long transit period, regarded as a time of introspection and transformation.'
    }
  },
  rahu: {
    slug: 'rahu',
    name: { hi: 'राहु', en: 'Rahu' },
    englishName: 'North Node',
    sanskritName: 'Rahu',
    astronomicalType: { hi: 'छाया ग्रह (Shadow Planet)', en: 'Shadow Node' },
    role: { hi: 'विद्रोही (Rebel)', en: 'Rebel' },
    introduction: {
      hi: 'राहु (North Node) एक छाया ग्रह है। भौतिक जगत में इसका कोई वास्तविक अस्तित्त्व नहीं है, यह एक गणितीय बिंदु है। यह माया, भ्रम, असीमित इच्छाओं और भौतिकवाद का कारक है।',
      en: 'Rahu (North Node) is a shadow planet. It has no physical mass in the material world; it is a mathematical point. It represents illusion (Maya), obsession, limitless desires, and materialism.'
    },
    significations: {
      hi: ['इच्छाएं और जुनून', 'भ्रम (Illusion)', 'विदेशी तकनीक', 'विद्रोह', 'अचानक घटनाएँ'],
      en: ['Desires and Obsession', 'Illusion', 'Foreign Technology', 'Rebellion', 'Sudden Events']
    },
    exaltation: { hi: 'मिथुन (Gemini) / वृषभ (Taurus)*', en: 'Gemini (Mithun) / Taurus (Vrishabh)*' },
    debilitation: { hi: 'धनु (Sagittarius) / वृश्चिक (Scorpio)*', en: 'Sagittarius (Dhanu) / Scorpio (Vrishchik)*' },
    ownSigns: { hi: ['कन्या (Virgo)*'], en: ['Virgo (Kanya)*'] },
    characteristics: {
      hi: 'राहु विस्तार और सीमाओं को तोड़ने का ग्रह है। यह जिस भाव में बैठता है, उस क्षेत्र से जुड़ी चीजों को पाने की तीव्र इच्छा (Obsession) उत्पन्न करता है।',
      en: 'Rahu is the planet of expansion and breaking boundaries. It creates intense desires and obsessions related to the house it occupies.'
    },
    educationalNotes: {
      hi: 'खगोलीय रूप से, राहु वह बिंदु है जहां चंद्रमा की कक्षा सूर्य की कक्षा (Ecliptic) को उत्तर की ओर काटती है। (*राहु-केतु की उच्च-नीच राशियों पर विभिन्न मत हैं)',
      en: 'Astronomically, Rahu is the point where the Moon\'s orbit intersects the Sun\'s orbit (Ecliptic) ascendingly. (*There are varying classical opinions on the exaltation/debilitation signs of Rahu-Ketu).'
    }
  },
  ketu: {
    slug: 'ketu',
    name: { hi: 'केतु', en: 'Ketu' },
    englishName: 'South Node',
    sanskritName: 'Ketu',
    astronomicalType: { hi: 'छाया ग्रह (Shadow Planet)', en: 'Shadow Node' },
    role: { hi: 'वैरागी (Ascetic)', en: 'Ascetic' },
    introduction: {
      hi: 'केतु (South Node) राहु का विपरीत बिंदु है। इसे मोक्ष, आध्यात्मिकता, वैराग्य और पिछले जन्म के कर्मों का कारक माना जाता है। यह भौतिक चीजों से दूर ले जाने का काम करता है।',
      en: 'Ketu (South Node) is the opposite point of Rahu. It is considered the significator of liberation (Moksha), spirituality, detachment, and past-life karma. It tends to pull one away from materialism.'
    },
    significations: {
      hi: ['मोक्ष', 'वैराग्य और आध्यात्मिकता', 'पिछला जन्म', 'गुह्य विद्या (Occult)', 'त्याग'],
      en: ['Liberation (Moksha)', 'Detachment and Spirituality', 'Past Life', 'Occult Knowledge', 'Renunciation']
    },
    exaltation: { hi: 'धनु (Sagittarius) / वृश्चिक (Scorpio)*', en: 'Sagittarius (Dhanu) / Scorpio (Vrishchik)*' },
    debilitation: { hi: 'मिथुन (Gemini) / वृषभ (Taurus)*', en: 'Gemini (Mithun) / Taurus (Vrishabh)*' },
    ownSigns: { hi: ['मीन (Pisces)*'], en: ['Pisces (Meen)*'] },
    characteristics: {
      hi: 'केतु बिना सिर वाला धड़ है, इसलिए यह तर्क से नहीं बल्कि गहराई से महसूस करता है। यह जिस भाव में बैठता है, व्यक्ति को अक्सर उस भाव की चीजों से विरक्ति या असंतोष होता है।',
      en: 'Ketu is a headless body, so it feels deeply rather than logically reasoning. Individuals often feel detached or unsatisfied with the significations of the house Ketu occupies.'
    },
    educationalNotes: {
      hi: 'खगोलीय रूप से, केतु वह बिंदु है जहां चंद्रमा की कक्षा सूर्य की कक्षा को दक्षिण की ओर काटती है। राहु और केतु हमेशा एक-दूसरे से ठीक 180 डिग्री की दूरी पर होते हैं।',
      en: 'Astronomically, Ketu is the point where the Moon\'s orbit intersects the Sun\'s orbit descendingly. Rahu and Ketu are always exactly 180 degrees apart.'
    }
  }
};
