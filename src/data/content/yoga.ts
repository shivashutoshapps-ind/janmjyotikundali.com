export interface YogaContent {
  slug: string;
  name: { hi: string; en: string };
  sanskritName: string;
  category: 'wealth' | 'intellect' | 'panchamahapurusha' | 'mixed';
  introduction: { hi: string; en: string };
  formation: { hi: string; en: string };
  significance: { hi: string; en: string };
  traditionalInterpretation: { hi: string; en: string };
  limitations: { hi: string; en: string };
  relatedGrahas: string[];
}

export const yogaData: Record<string, YogaContent> = {
  gajakesari: {
    slug: 'gajakesari',
    name: { hi: 'गजकेसरी योग', en: 'Gajakesari Yoga' },
    sanskritName: 'Gajakesari Yoga',
    category: 'wealth',
    introduction: {
      hi: 'गजकेसरी योग वैदिक ज्योतिष में सबसे शुभ और शक्तिशाली योगों में से एक है। यह ज्ञान, धन, नेतृत्व और सामाजिक प्रतिष्ठा का प्रतीक है। "गज" का अर्थ हाथी और "केसरी" का अर्थ शेर है, जो इस योग वाले व्यक्ति की शक्ति और अपराजेयता को दर्शाता है।',
      en: 'Gajakesari Yoga is one of the most auspicious and powerful yogas in Vedic astrology. It symbolizes wisdom, wealth, leadership, and social prestige. "Gaja" means elephant and "Kesari" means lion, denoting the power and invincibility of a person with this yoga.'
    },
    formation: {
      hi: 'यह योग तब बनता है जब देवगुरु बृहस्पति (Jupiter) और चंद्रमा (Moon) एक-दूसरे से केंद्र भावों (1, 4, 7, 10) में स्थित होते हैं।',
      en: 'This yoga is formed when Jupiter (Guru) and the Moon (Chandra) are placed in Kendra (1st, 4th, 7th, or 10th houses) from each other.'
    },
    significance: {
      hi: 'यह योग व्यक्ति को उच्च कोटि की बुद्धि, वाक्पटुता, और धन संचय करने की क्षमता प्रदान करता है। ऐसे लोग अक्सर समाज में सम्माननीय स्थिति प्राप्त करते हैं और अपने ज्ञान के लिए जाने जाते हैं।',
      en: 'This yoga grants the individual a high level of intelligence, eloquence, and the ability to accumulate wealth. Such people often achieve a respectable position in society and are known for their wisdom.'
    },
    traditionalInterpretation: {
      hi: 'पारंपरिक ग्रंथों के अनुसार, गजकेसरी योग वाला व्यक्ति एक राजा के समान जीवन जीता है, शत्रुओं को परास्त करता है, और उसकी ख्याति मृत्यु के बाद भी बनी रहती है।',
      en: 'According to traditional texts, a person with Gajakesari Yoga lives a life like a king, defeats their enemies, and their fame lasts even after death.'
    },
    limitations: {
      hi: 'ध्यान दें: केवल बृहस्पति और चंद्रमा के केंद्र में होने से राजयोग नहीं मिलता। यदि दोनों ग्रह नीच राशि में हों, या राहु/केतु/शनि से गंभीर रूप से पीड़ित हों, तो इस योग का प्रभाव बहुत कम हो जाता है।',
      en: 'Note: Merely having Jupiter and Moon in Kendra does not guarantee a Raj Yoga. If both planets are in their debilitated signs, or severely afflicted by Rahu, Ketu, or Saturn, the effects of this yoga are greatly diminished.'
    },
    relatedGrahas: ['guru', 'chandra']
  },
  budhaditya: {
    slug: 'budhaditya',
    name: { hi: 'बुधादित्य योग', en: 'Budhaditya Yoga' },
    sanskritName: 'Budhaditya Yoga',
    category: 'intellect',
    introduction: {
      hi: 'बुधादित्य योग बुद्धि, संचार कौशल और व्यावसायिक सफलता का एक अत्यंत शुभ योग है। यह कुंडली में सूर्य (आदित्य) और बुध के मिलन से बनता है।',
      en: 'Budhaditya Yoga is a highly auspicious yoga for intellect, communication skills, and commercial success. It is formed by the conjunction of the Sun (Aditya) and Mercury (Budh) in the chart.'
    },
    formation: {
      hi: 'यह योग तब बनता है जब सूर्य और बुध कुंडली के एक ही भाव में एक साथ (युति में) बैठे हों।',
      en: 'This yoga is formed when the Sun and Mercury are placed together (in conjunction) in the same house of the birth chart.'
    },
    significance: {
      hi: 'यह संयोजन व्यक्ति को बहुत तार्किक, विश्लेषणात्मक और उत्कृष्ट संचारक बनाता है। ऐसे लोग चार्टर्ड अकाउंटेंट, वकील, पत्रकार, लेखक या सफल व्यवसायी बन सकते हैं।',
      en: 'This combination makes a person highly logical, analytical, and an excellent communicator. Such individuals often excel as chartered accountants, lawyers, journalists, writers, or successful businesspeople.'
    },
    traditionalInterpretation: {
      hi: 'ज्योतिषीय ग्रंथों में कहा गया है कि बुधादित्य योग व्यक्ति को बहुत विद्वान, प्रसिद्ध और समाज में एक प्रभावशाली वक्ता बनाता है।',
      en: 'Astrological texts state that Budhaditya Yoga makes a person highly learned, famous, and an influential speaker in society.'
    },
    limitations: {
      hi: 'चूंकि बुध अक्सर सूर्य के करीब ही रहता है, इसलिए यह योग बहुत आम है। यह विशेष फल तब देता है जब यह 1, 5, 9, या 10वें भाव में बने और बुध सूर्य से बहुत अधिक अस्त (Combust) न हो।',
      en: 'Since Mercury always stays close to the Sun, this yoga is very common. It gives special results only when formed in the 1st, 5th, 9th, or 10th house, and provided Mercury is not deeply combust (Ast) by the Sun.'
    },
    relatedGrahas: ['surya', 'budh']
  },
  'chandra-mangal': {
    slug: 'chandra-mangal',
    name: { hi: 'चंद्र मंगल योग', en: 'Chandra Mangal Yoga' },
    sanskritName: 'Chandra Mangala Yoga',
    category: 'wealth',
    introduction: {
      hi: 'चंद्र मंगल योग धन और भौतिक सफलता से जुड़ा एक प्रमुख योग है। यह व्यक्ति को अत्यंत महत्वाकांक्षी, ऊर्जावान और धन कमाने के लिए प्रेरित करता है।',
      en: 'Chandra Mangal Yoga is a prominent yoga associated with wealth and material success. It makes a person highly ambitious, energetic, and driven to accumulate money.'
    },
    formation: {
      hi: 'यह योग तब बनता है जब चंद्रमा और मंगल कुंडली के एक ही भाव में एक साथ (युति में) हों, या एक-दूसरे पर दृष्टि डाल रहे हों।',
      en: 'This yoga is formed when the Moon and Mars are together in the same house (conjunction), or are aspecting each other.'
    },
    significance: {
      hi: 'इस योग वाले लोग वित्तीय मामलों में बहुत चतुर होते हैं। वे रियल एस्टेट, इंजीनियरिंग, व्यापार और उन क्षेत्रों में सफल होते हैं जहाँ त्वरित निर्णय लेने की आवश्यकता होती है।',
      en: 'People with this yoga are very astute in financial matters. They succeed in real estate, engineering, business, and fields that require quick decision-making.'
    },
    traditionalInterpretation: {
      hi: 'शास्त्रों के अनुसार, यह एक महाधन योग है जो व्यक्ति को अपने प्रयासों और उद्यम से अमीर बनाता है। हालांकि, यह कभी-कभी मां के प्रति आक्रामक व्यवहार का संकेत भी दे सकता है।',
      en: 'According to scriptures, this is a Maha-Dhan Yoga that makes a person rich through their own efforts and enterprise. However, it can sometimes indicate an aggressive attitude toward the mother.'
    },
    limitations: {
      hi: 'यह योग व्यक्ति को स्वार्थी और भौतिकवादी बना सकता है। यदि चंद्रमा बहुत क्षीण हो या दोनों नीच राशि में हों, तो धन कमाने के लिए अनैतिक साधनों का उपयोग करने की प्रवृत्ति हो सकती है।',
      en: 'This yoga can make a person selfish and overly materialistic. If the Moon is very weak or both are in debilitation, there might be a tendency to use unethical means to earn money.'
    },
    relatedGrahas: ['chandra', 'mangal']
  },
  ruchaka: {
    slug: 'ruchaka',
    name: { hi: 'रुचक योग', en: 'Ruchaka Yoga' },
    sanskritName: 'Ruchaka Yoga',
    category: 'panchamahapurusha',
    introduction: {
      hi: 'रुचक योग मंगल द्वारा निर्मित पंचमहापुरुष योगों में से एक है। यह अदम्य साहस, शारीरिक शक्ति, नेतृत्व और भूमि से जुड़े कार्यों में अपार सफलता का प्रतीक है।',
      en: 'Ruchaka Yoga is one of the Panchamahapurusha Yogas formed by Mars. It symbolizes indomitable courage, physical strength, leadership, and immense success in land-related endeavors.'
    },
    formation: {
      hi: 'यह योग तब बनता है जब मंगल अपनी स्वराशि (मेष, वृश्चिक) या उच्च राशि (मकर) में होकर कुंडली के केंद्र (1, 4, 7, 10) भाव में बैठा हो।',
      en: 'This yoga is formed when Mars is placed in its own signs (Aries, Scorpio) or exalted sign (Capricorn) and occupies a Kendra (1st, 4th, 7th, or 10th house).'
    },
    significance: {
      hi: 'इस योग से संपन्न व्यक्ति ऊर्जावान, निडर और सैन्य या प्रशासनिक क्षेत्रों (पुलिस, सेना, खेल) में सफल होता है। उन्हें भूमि और संपत्तियों का बहुत सुख मिलता है।',
      en: 'A person blessed with this yoga is energetic, fearless, and highly successful in military or administrative fields (police, army, sports). They enjoy significant property and land assets.'
    },
    traditionalInterpretation: {
      hi: 'शास्त्रों में कहा गया है कि रुचक योग वाला व्यक्ति एक महान योद्धा या सेनापति होता है, शत्रुओं पर विजय प्राप्त करता है और अपने पराक्रम से राज्य जीतता है।',
      en: 'Scriptures state that a person with Ruchaka Yoga is a great warrior or commander, conquers enemies, and wins kingdoms through their valor.'
    },
    limitations: {
      hi: 'यदि मंगल राहु या शनि से पीड़ित हो, तो व्यक्ति आक्रामक, क्रोधी और हिंसक स्वभाव का हो सकता है। यह योग तभी अपना पूर्ण शुभ फल देता है जब मंगल पर कोई अशुभ दृष्टि न हो।',
      en: 'If Mars is afflicted by Rahu or Saturn, the person may become aggressive, short-tempered, and violent. This yoga gives its full benefic results only when Mars is free from malefic aspects.'
    },
    relatedGrahas: ['mangal']
  },
  bhadra: {
    slug: 'bhadra',
    name: { hi: 'भद्र योग', en: 'Bhadra Yoga' },
    sanskritName: 'Bhadra Yoga',
    category: 'panchamahapurusha',
    introduction: {
      hi: 'भद्र योग बुध द्वारा निर्मित पंचमहापुरुष योग है। यह उत्कृष्ट बुद्धि, संचार कौशल, आकर्षक व्यक्तित्व और व्यापारिक सफलता का प्रतीक है।',
      en: 'Bhadra Yoga is a Panchamahapurusha Yoga formed by Mercury. It symbolizes outstanding intellect, communication skills, a charming personality, and business success.'
    },
    formation: {
      hi: 'यह योग तब बनता है जब बुध अपनी स्वराशि या उच्च राशि (मिथुन, कन्या) में होकर कुंडली के केंद्र (1, 4, 7, 10) भाव में बैठा हो।',
      en: 'This yoga is formed when Mercury is placed in its own or exalted signs (Gemini, Virgo) and occupies a Kendra (1st, 4th, 7th, or 10th house).'
    },
    significance: {
      hi: 'भद्र योग वाले लोग बहुत हाजिरजवाब (witty), विश्लेषणात्मक और उत्कृष्ट वक्ता होते हैं। वे आईटी, मीडिया, पत्रकारिता और बड़े व्यापार में बहुत नाम कमाते हैं।',
      en: 'People with Bhadra Yoga are highly witty, analytical, and excellent orators. They make a great name in IT, media, journalism, and large-scale business.'
    },
    traditionalInterpretation: {
      hi: 'शास्त्रों के अनुसार, यह व्यक्ति को विद्वान, हमेशा युवा दिखने वाला, मधुर भाषी और एक सफल व्यापारी या मंत्री बनाता है।',
      en: 'According to scriptures, it makes a person learned, ever-youthful in appearance, sweet-spoken, and a successful merchant or minister.'
    },
    limitations: {
      hi: 'बुध एक संवेदनशील ग्रह है। यदि बुध सूर्य से अधिक अस्त हो या राहु/केतु के साथ बैठा हो, तो यह योग भ्रम, घबराहट और अस्थिर मानसिकता दे सकता है।',
      en: 'Mercury is a sensitive planet. If Mercury is deeply combust by the Sun or conjunct with Rahu/Ketu, this yoga can cause confusion, nervousness, and an unstable mindset.'
    },
    relatedGrahas: ['budh']
  },
  hamsa: {
    slug: 'hamsa',
    name: { hi: 'हंस योग', en: 'Hamsa Yoga' },
    sanskritName: 'Hamsa Yoga',
    category: 'panchamahapurusha',
    introduction: {
      hi: 'हंस योग बृहस्पति (गुरु) द्वारा निर्मित पंचमहापुरुष योग है। यह आध्यात्मिकता, शुद्ध चरित्र, अपार ज्ञान और समाज में एक पूजनीय स्थिति का प्रतीक है।',
      en: 'Hamsa Yoga is a Panchamahapurusha Yoga formed by Jupiter. It symbolizes spirituality, pure character, immense knowledge, and a revered position in society.'
    },
    formation: {
      hi: 'यह योग तब बनता है जब गुरु अपनी स्वराशि (धनु, मीन) या उच्च राशि (कर्क) में होकर कुंडली के केंद्र (1, 4, 7, 10) भाव में स्थित हो।',
      en: 'This yoga is formed when Jupiter is placed in its own signs (Sagittarius, Pisces) or exalted sign (Cancer) and occupies a Kendra (1st, 4th, 7th, or 10th house).'
    },
    significance: {
      hi: 'इस योग वाले व्यक्ति सत्यवादी, धार्मिक और ज्ञानी होते हैं। वे उत्कृष्ट शिक्षक, न्यायाधीश, दार्शनिक और सलाहकार बनते हैं। उनका पारिवारिक जीवन भी प्रायः सुखमय होता है।',
      en: 'Individuals with this yoga are truthful, religious, and knowledgeable. They become excellent teachers, judges, philosophers, and advisors. Their family life is also generally peaceful.'
    },
    traditionalInterpretation: {
      hi: 'शास्त्रों के अनुसार, हंस योग वाला व्यक्ति हंस की तरह निर्मल, वेदों और शास्त्रों का ज्ञाता, और समाज में एक आदर्श पुरुष (या स्त्री) होता है।',
      en: 'According to scriptures, a person with Hamsa Yoga is pure like a swan, a master of Vedas and scriptures, and an ideal man (or woman) in society.'
    },
    limitations: {
      hi: 'यदि बृहस्पति राहु के साथ हो (गुरु चांडाल दोष) या शनि से बुरी तरह दृष्ट हो, तो यह व्यक्ति को पाखंडी (hypocrite) बना सकता है। योग के फल के लिए गुरु का बलवान होना आवश्यक है।',
      en: 'If Jupiter is conjunct Rahu (Guru Chandal Dosha) or heavily aspected by Saturn, it can make the person hypocritical. Jupiter must be strong for the yoga to yield its true fruits.'
    },
    relatedGrahas: ['guru']
  },
  malavya: {
    slug: 'malavya',
    name: { hi: 'मालव्य योग', en: 'Malavya Yoga' },
    sanskritName: 'Malavya Yoga',
    category: 'panchamahapurusha',
    introduction: {
      hi: 'मालव्य योग शुक्र द्वारा निर्मित पंचमहापुरुष योग है। यह विलासिता, सौंदर्य, रोमांस, कला और एक अत्यंत आरामदायक जीवन का प्रतीक है।',
      en: 'Malavya Yoga is a Panchamahapurusha Yoga formed by Venus. It symbolizes luxury, beauty, romance, art, and an extremely comfortable life.'
    },
    formation: {
      hi: 'यह योग तब बनता है जब शुक्र अपनी स्वराशि (वृषभ, तुला) या उच्च राशि (मीन) में होकर कुंडली के केंद्र (1, 4, 7, 10) भाव में विराजमान हो।',
      en: 'This yoga is formed when Venus is placed in its own signs (Taurus, Libra) or exalted sign (Pisces) and occupies a Kendra (1st, 4th, 7th, or 10th house).'
    },
    significance: {
      hi: 'इस योग से संपन्न लोग कला, फैशन, सिनेमा या रचनात्मक क्षेत्रों में बहुत सफल होते हैं। उनके पास अच्छे वाहन, आलीशान घर और एक आकर्षक व्यक्तित्व होता है।',
      en: 'People blessed with this yoga are highly successful in art, fashion, cinema, or creative fields. They possess good vehicles, luxurious homes, and an attractive personality.'
    },
    traditionalInterpretation: {
      hi: 'पारंपरिक तौर पर यह माना जाता है कि मालव्य योग व्यक्ति को भौतिक सुखों की प्राप्ति कराता है, उसे एक सुंदर जीवनसाथी मिलता है और वह कला का महान पारखी होता है।',
      en: 'Traditionally, it is believed that Malavya Yoga bestows all material comforts, a beautiful spouse, and makes the person a great connoisseur of the arts.'
    },
    limitations: {
      hi: 'यह योग व्यक्ति को अत्यधिक भौतिकवादी और कामुक बना सकता है। यदि शुक्र पीड़ित हो, तो विलासिता और प्रेम प्रसंगों के कारण व्यक्ति को बदनामी या आर्थिक नुकसान हो सकता है।',
      en: 'This yoga can make a person overly materialistic and sensual. If Venus is afflicted, the pursuit of luxury and romantic affairs can lead to disrepute or financial losses.'
    },
    relatedGrahas: ['shukra']
  },
  sasha: {
    slug: 'sasha',
    name: { hi: 'शश योग', en: 'Sasha Yoga' },
    sanskritName: 'Sasha Yoga',
    category: 'panchamahapurusha',
    introduction: {
      hi: 'शश योग शनि द्वारा निर्मित पंचमहापुरुष योग है। यह न्याय, धैर्य, कठोर परिश्रम, अनुशासन और जनता पर अपार प्रभाव का प्रतीक है।',
      en: 'Sasha Yoga is a Panchamahapurusha Yoga formed by Saturn. It symbolizes justice, patience, hard work, discipline, and immense influence over the masses.'
    },
    formation: {
      hi: 'यह योग तब बनता है जब शनि अपनी स्वराशि (मकर, कुंभ) या उच्च राशि (तुला) में होकर कुंडली के केंद्र (1, 4, 7, 10) भाव में बैठा हो।',
      en: 'This yoga is formed when Saturn is placed in its own signs (Capricorn, Aquarius) or exalted sign (Libra) and occupies a Kendra (1st, 4th, 7th, or 10th house).'
    },
    significance: {
      hi: 'यह योग व्यक्ति को एक महान राजनेता, न्यायाधीश, या एक बड़े संगठन का मुखिया बना सकता है। सफलता धीमी होती है, लेकिन जीवन में जो पद मिलता है वह अत्यंत स्थायी होता है।',
      en: 'This yoga can make a person a great politician, judge, or the head of a large organization. Success comes slowly, but the position achieved in life is extremely permanent.'
    },
    traditionalInterpretation: {
      hi: 'शास्त्र कहते हैं कि शश योग वाला व्यक्ति एक छोटे से गांव से निकलकर एक राज्य का नेता बन सकता है। वह न्यायप्रिय होता है और गरीबों का मसीहा माना जाता है।',
      en: 'Scriptures say a person with Sasha Yoga can rise from a small village to become the leader of a state. They are just and often regarded as a messiah for the poor.'
    },
    limitations: {
      hi: 'शनि विलंब का कारक है, इसलिए इस योग के पूर्ण फल 35 वर्ष की आयु के बाद ही दिखाई देते हैं। यदि शनि चंद्रमा के साथ पीड़ित हो, तो यह व्यक्ति को अत्यधिक गंभीर या अवसादग्रस्त बना सकता है।',
      en: 'Saturn represents delays, so the full fruits of this yoga are usually seen only after the age of 35. If Saturn is afflicted along with the Moon, it can make the person overly serious or depressed.'
    },
    relatedGrahas: ['shani']
  },
  'guru-chandal': {
    slug: 'guru-chandal',
    name: { hi: 'गुरु चांडाल योग', en: 'Guru Chandal Yoga' },
    sanskritName: 'Guru Chandala Yoga',
    category: 'mixed',
    introduction: {
      hi: 'गुरु चांडाल योग एक मिश्रित और अक्सर नकारात्मक योग माना जाता है। यह व्यक्ति की मान्यताओं, नैतिकता और धार्मिक दृष्टिकोण को चुनौती देता है।',
      en: 'Guru Chandal Yoga is considered a mixed and often negative yoga. It challenges a person\'s beliefs, morality, and religious outlook.'
    },
    formation: {
      hi: 'यह योग तब बनता है जब देवगुरु बृहस्पति (Jupiter) और राहु (Rahu) कुंडली के एक ही भाव में एक साथ (युति) स्थित हों।',
      en: 'This yoga is formed when Jupiter (Guru) and Rahu are placed together (in conjunction) in the same house of the birth chart.'
    },
    significance: {
      hi: 'राहु का भ्रम गुरु के ज्ञान को दूषित करता है। ऐसे व्यक्ति पारंपरिक धर्म और नियमों पर सवाल उठाते हैं। यदि शुभ हो, तो वे एक महान और अपरंपरागत दार्शनिक बन सकते हैं, और यदि अशुभ हो, तो वे अनैतिक कार्यों में शामिल हो सकते हैं।',
      en: 'Rahu\'s illusion corrupts Jupiter\'s wisdom. Such individuals question traditional religion and rules. If well-placed, they can become great unconventional philosophers; if malefic, they may engage in unethical activities.'
    },
    traditionalInterpretation: {
      hi: 'शास्त्रों में इसे एक हानिकारक योग माना गया है जो व्यक्ति को पाखंडी बनाता है, बुजुर्गों का निरादर करवाता है और गलत आदतों की ओर ले जाता है।',
      en: 'In scriptures, it is considered a harmful yoga that makes a person a hypocrite, disrespectful to elders, and prone to bad habits.'
    },
    limitations: {
      hi: 'यदि गुरु अत्यंत बलवान (स्वराशि या उच्च का) हो, तो राहु के दुष्प्रभाव काफी हद तक कम हो जाते हैं और व्यक्ति अपनी तेज बुद्धि का उपयोग सकारात्मक शोध और तकनीकी कार्यों में करता है।',
      en: 'If Jupiter is extremely strong (in its own or exalted sign), Rahu\'s negative effects are significantly reduced, and the person uses their sharp intellect for positive research and technical fields.'
    },
    relatedGrahas: ['guru', 'rahu']
  }
};
