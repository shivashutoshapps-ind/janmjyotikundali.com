export interface RashiContent {
  slug: string;
  name: { hi: string; en: string };
  sanskritName: { hi: string; en: string };
  symbol: { hi: string; en: string };
  rulingPlanet: { hi: string; en: string };
  element: { hi: string; en: string };
  nature: { hi: string; en: string }; // Modality
  introduction: { hi: string; en: string };
  characteristics: { hi: string; en: string };
  strengths: { hi: string[]; en: string[] };
  challenges: { hi: string[]; en: string[] };
  career: { hi: string; en: string };
  relationships: { hi: string; en: string };
}

export const rashiData: Record<string, RashiContent> = {
  mesh: {
    slug: 'mesh',
    name: { hi: 'मेष', en: 'Aries' },
    sanskritName: { hi: 'मेष (Mesh)', en: 'Mesha' },
    symbol: { hi: 'मेंढा (Ram)', en: 'The Ram' },
    rulingPlanet: { hi: 'मंगल (Mars)', en: 'Mars (Mangal)' },
    element: { hi: 'अग्नि (Fire)', en: 'Fire (Agni)' },
    nature: { hi: 'चर (Movable)', en: 'Movable (Chara)' },
    introduction: { 
      hi: 'वैदिक ज्योतिष में मेष राशि चक्र की पहली राशि है। यह ऊर्जा, साहस और नई शुरुआत का प्रतीक है। मंगल द्वारा शासित होने के कारण, इस राशि के जातक अक्सर ऊर्जावान और नेतृत्व करने वाले होते हैं।', 
      en: 'In Vedic astrology, Aries is the first sign of the zodiac. It represents energy, courage, and new beginnings. Ruled by Mars, individuals of this sign are often energetic and natural leaders.' 
    },
    characteristics: { 
      hi: 'मेष राशि के लोग स्वभाव से स्वतंत्र, साहसी और मुखर होते हैं। वे चुनौतियों का सामना निडरता से करते हैं और हमेशा आगे रहने की इच्छा रखते हैं। पारंपरिक मान्यताओं के अनुसार, इनमें जबरदस्त उत्साह होता है।', 
      en: 'Aries individuals are generally independent, courageous, and assertive. They face challenges fearlessly and always desire to be at the forefront. According to traditional beliefs, they possess tremendous enthusiasm.' 
    },
    strengths: { 
      hi: ['नेतृत्व क्षमता', 'आत्मविश्वास', 'निडरता', 'ऊर्जावान', 'ईमानदारी'], 
      en: ['Leadership Skills', 'Self-Confidence', 'Fearlessness', 'Energetic', 'Honesty'] 
    },
    challenges: { 
      hi: ['जल्दबाजी', 'क्रोध', 'धैर्य की कमी', 'आक्रामक स्वभाव'], 
      en: ['Impulsiveness', 'Anger', 'Lack of Patience', 'Aggressive Nature'] 
    },
    career: { 
      hi: 'पारंपरिक रूप से, मंगल के प्रभाव के कारण रक्षा क्षेत्र, पुलिस, खेल, इंजीनियरिंग, शल्य चिकित्सा (सर्जरी) और उद्यमिता जैसे साहसिक करियर मेष राशि वालों के लिए अनुकूल माने जाते हैं।', 
      en: 'Traditionally, due to the influence of Mars, bold careers such as defense, police, sports, engineering, surgery, and entrepreneurship are considered favorable for Aries individuals.' 
    },
    relationships: { 
      hi: 'प्रेम और रिश्तों में मेष जातक भावुक और सीधे होते हैं। वे सच्चे और वफादार साथी बनते हैं, लेकिन उनके पार्टनर को उनके उग्र स्वभाव और स्वतंत्रता की आवश्यकता को समझना चाहिए।', 
      en: 'In love and relationships, Aries individuals are passionate and straightforward. They make genuine and loyal partners, but their significant other must understand their fiery nature and need for independence.' 
    }
  },
  vrishabh: {
    slug: 'vrishabh',
    name: { hi: 'वृषभ', en: 'Taurus' },
    sanskritName: { hi: 'वृषभ (Vrishabh)', en: 'Vrishabha' },
    symbol: { hi: 'बैल (Bull)', en: 'The Bull' },
    rulingPlanet: { hi: 'शुक्र (Venus)', en: 'Venus (Shukra)' },
    element: { hi: 'पृथ्वी (Earth)', en: 'Earth (Prithvi)' },
    nature: { hi: 'स्थिर (Fixed)', en: 'Fixed (Sthira)' },
    introduction: { 
      hi: 'वृषभ राशि चक्र की दूसरी राशि है। शुक्र ग्रह द्वारा शासित यह राशि सुंदरता, कला, भौतिक सुख और स्थिरता का प्रतिनिधित्व करती है।', 
      en: 'Taurus is the second sign of the zodiac. Ruled by the planet Venus, this sign represents beauty, art, material comfort, and stability.' 
    },
    characteristics: { 
      hi: 'वृषभ राशि के जातक आमतौर पर शांत, विश्वसनीय और व्यावहारिक होते हैं। वे जीवन में स्थिरता पसंद करते हैं और कड़ी मेहनत पर विश्वास करते हैं। ये लोग प्रकृति और कला के प्रेमी होते हैं।', 
      en: 'Taurus individuals are generally calm, reliable, and practical. They prefer stability in life and believe in hard work. These individuals are lovers of nature and art.' 
    },
    strengths: { 
      hi: ['धैर्यवान', 'विश्वसनीय', 'व्यावहारिक', 'कलात्मक', 'मेहनती'], 
      en: ['Patient', 'Reliable', 'Practical', 'Artistic', 'Hardworking'] 
    },
    challenges: { 
      hi: ['जिद्दीपन', 'बदलाव का विरोध', 'भौतिकवादी', 'आलस्य (कभी-कभी)'], 
      en: ['Stubbornness', 'Resistance to Change', 'Materialistic', 'Laziness (sometimes)'] 
    },
    career: { 
      hi: 'कला, संगीत, डिजाइनिंग, बैंकिंग, कृषि, वास्तुकला (आर्किटेक्चर) और लग्जरी से जुड़े व्यवसाय वृषभ राशि वालों के लिए बहुत उपयुक्त माने जाते हैं।', 
      en: 'Careers in art, music, designing, banking, agriculture, architecture, and luxury-related businesses are considered highly suitable for Taurus individuals.' 
    },
    relationships: { 
      hi: 'रिश्तों में वृषभ राशि वाले बहुत वफादार और भरोसेमंद होते हैं। वे अपने पार्टनर को सुरक्षा और आराम देना पसंद करते हैं। उन्हें वफादारी के बदले वफादारी की उम्मीद होती है।', 
      en: 'In relationships, Taurus individuals are very loyal and trustworthy. They like providing security and comfort to their partner. They expect loyalty in return for their loyalty.' 
    }
  },
  mithun: {
    slug: 'mithun',
    name: { hi: 'मिथुन', en: 'Gemini' },
    sanskritName: { hi: 'मिथुन (Mithun)', en: 'Mithuna' },
    symbol: { hi: 'जुड़वां (Twins)', en: 'The Twins' },
    rulingPlanet: { hi: 'बुध (Mercury)', en: 'Mercury (Budha)' },
    element: { hi: 'वायु (Air)', en: 'Air (Vayu)' },
    nature: { hi: 'द्विस्वभाव (Dual)', en: 'Dual (Dvisvabhava)' },
    introduction: { 
      hi: 'मिथुन राशि चक्र की तीसरी राशि है। बुध ग्रह के प्रभाव के कारण, यह राशि बुद्धि, संचार, तर्क और जिज्ञासा से जुड़ी है।', 
      en: 'Gemini is the third sign of the zodiac. Due to the influence of Mercury, this sign is associated with intellect, communication, logic, and curiosity.' 
    },
    characteristics: { 
      hi: 'मिथुन राशि के जातक बहुमुखी प्रतिभा के धनी होते हैं। वे बातूनी, मजाकिया और जल्दी सीखने वाले होते हैं। उनका स्वभाव परिवर्तनशील होता है और उन्हें नई चीजें सीखना पसंद है।', 
      en: 'Gemini individuals possess versatile talents. They are talkative, witty, and quick learners. Their nature is changeable, and they love learning new things.' 
    },
    strengths: { 
      hi: ['बुद्धिमान', 'अच्छे वक्ता', 'बहुमुखी', 'जिज्ञासु', 'अनुकूलनीय'], 
      en: ['Intelligent', 'Good Speakers', 'Versatile', 'Curious', 'Adaptable'] 
    },
    challenges: { 
      hi: ['अस्थिरता', 'निर्णय लेने में कठिनाई', 'बेचैनी', 'एक काम पर ध्यान न देना'], 
      en: ['Instability', 'Difficulty in Decision Making', 'Restlessness', 'Lack of Focus'] 
    },
    career: { 
      hi: 'लेखन, पत्रकारिता, बिक्री (सेल्स), शिक्षण, अनुवाद, सॉफ्टवेयर विकास और मीडिया से जुड़े क्षेत्र इनके लिए उत्कृष्ट माने जाते हैं।', 
      en: 'Fields related to writing, journalism, sales, teaching, translation, software development, and media are considered excellent for them.' 
    },
    relationships: { 
      hi: 'रिश्तों में इन्हें बौद्धिक जुड़ाव सबसे ज्यादा पसंद होता है। इनका पार्टनर ऐसा होना चाहिए जो इनकी बातों को समझे और उन्हें मानसिक रूप से उत्तेजित कर सके।', 
      en: 'In relationships, they value intellectual connection the most. Their partner should be someone who understands their communication and can stimulate them mentally.' 
    }
  },
  kark: {
    slug: 'kark',
    name: { hi: 'कर्क', en: 'Cancer' },
    sanskritName: { hi: 'कर्क (Kark)', en: 'Karka' },
    symbol: { hi: 'केकड़ा (Crab)', en: 'The Crab' },
    rulingPlanet: { hi: 'चंद्रमा (Moon)', en: 'Moon (Chandra)' },
    element: { hi: 'जल (Water)', en: 'Water (Jala)' },
    nature: { hi: 'चर (Movable)', en: 'Movable (Chara)' },
    introduction: { 
      hi: 'कर्क राशि चक्र की चौथी राशि है। चंद्रमा द्वारा शासित यह राशि भावनाओं, संवेदनाओं, मातृत्व और घर-परिवार का प्रतिनिधित्व करती है।', 
      en: 'Cancer is the fourth sign of the zodiac. Ruled by the Moon, this sign represents emotions, sensitivities, motherhood, and family/home.' 
    },
    characteristics: { 
      hi: 'कर्क राशि के जातक अत्यधिक संवेदनशील, देखभाल करने वाले और सहानुभूतिपूर्ण होते हैं। उनके लिए उनका परिवार और घर सबसे महत्वपूर्ण होता है। वे बाहर से सख्त लेकिन अंदर से बहुत नर्म होते हैं।', 
      en: 'Cancer individuals are highly sensitive, caring, and empathetic. Their family and home are most important to them. They can appear tough on the outside but are very soft on the inside.' 
    },
    strengths: { 
      hi: ['संवेदनशील', 'कल्पनाशील', 'वफादार', 'सहानुभूतिपूर्ण', 'देखभाल करने वाले'], 
      en: ['Sensitive', 'Imaginative', 'Loyal', 'Empathetic', 'Caring'] 
    },
    challenges: { 
      hi: ['मूड स्विंग्स (अस्थिर मनोदशा)', 'अत्यधिक भावुकता', 'असुरक्षा की भावना', 'पुरानी बातों से चिपके रहना'], 
      en: ['Mood Swings', 'Overly Emotional', 'Feelings of Insecurity', 'Clinging to the Past'] 
    },
    career: { 
      hi: 'चिकित्सा, मनोविज्ञान, नर्सिंग, आतिथ्य (हॉस्पिटैलिटी), शिक्षण, कला और ऐसे करियर जहां दूसरों की देखभाल शामिल हो, इनके लिए अनुकूल हैं।', 
      en: 'Careers in medicine, psychology, nursing, hospitality, teaching, art, and fields involving caring for others are favorable for them.' 
    },
    relationships: { 
      hi: 'कर्क जातक रिश्तों में पूर्ण सुरक्षा और भावनात्मक गहराई चाहते हैं। वे बहुत प्रेम करने वाले पार्टनर होते हैं और अपने परिवार को हमेशा प्राथमिकता देते हैं।', 
      en: 'Cancerians seek total security and emotional depth in relationships. They are very loving partners and always prioritize their family.' 
    }
  },
  singh: {
    slug: 'singh',
    name: { hi: 'सिंह', en: 'Leo' },
    sanskritName: { hi: 'सिंह (Singh)', en: 'Simha' },
    symbol: { hi: 'शेर (Lion)', en: 'The Lion' },
    rulingPlanet: { hi: 'सूर्य (Sun)', en: 'Sun (Surya)' },
    element: { hi: 'अग्नि (Fire)', en: 'Fire (Agni)' },
    nature: { hi: 'स्थिर (Fixed)', en: 'Fixed (Sthira)' },
    introduction: { 
      hi: 'सिंह राशि चक्र की पांचवीं राशि है। सूर्य द्वारा शासित यह राशि राजसी स्वभाव, अधिकार, जीवन शक्ति और आत्म-सम्मान का प्रतीक है।', 
      en: 'Leo is the fifth sign of the zodiac. Ruled by the Sun, this sign symbolizes a royal nature, authority, vitality, and self-respect.' 
    },
    characteristics: { 
      hi: 'सिंह राशि के जातक जन्मजात लीडर होते हैं। वे उदार, आत्मविश्वासी, उत्साही और ध्यान आकर्षित करने वाले होते हैं। उन्हें सम्मान और प्रशंसा पसंद होती है और उनका हृदय बहुत विशाल होता है।', 
      en: 'Leo individuals are born leaders. They are generous, confident, enthusiastic, and love drawing attention. They appreciate respect and praise, and possess a very large heart.' 
    },
    strengths: { 
      hi: ['नेतृत्व', 'उदारता', 'रचनात्मकता', 'आत्मविश्वास', 'वफादारी'], 
      en: ['Leadership', 'Generosity', 'Creativity', 'Confidence', 'Loyalty'] 
    },
    challenges: { 
      hi: ['अहंकार', 'जिद्दीपन', 'अधिकार जताने की प्रवृत्ति', 'आलोचना सहन न कर पाना'], 
      en: ['Ego', 'Stubbornness', 'Bossy Nature', 'Inability to take criticism'] 
    },
    career: { 
      hi: 'राजनीति, प्रशासन (IAS/IPS), प्रबंधन (मैनेजमेंट), अभिनय, मनोरंजन, आभूषणों का व्यापार और किसी भी क्षेत्र में शीर्ष पद इनके लिए उपयुक्त हैं।', 
      en: 'Politics, administration (civil services), management, acting, entertainment, jewelry business, and top-tier positions in any field are suitable for them.' 
    },
    relationships: { 
      hi: 'रिश्तों में सिंह राशि वाले बहुत रोमांटिक और उदार होते हैं। वे अपने पार्टनर का बहुत ध्यान रखते हैं, लेकिन बदले में वे सम्मान और निष्ठा की पूरी उम्मीद करते हैं।', 
      en: 'In relationships, Leos are very romantic and generous. They take great care of their partner, but in return, they expect complete respect and loyalty.' 
    }
  },
  kanya: {
    slug: 'kanya',
    name: { hi: 'कन्या', en: 'Virgo' },
    sanskritName: { hi: 'कन्या (Kanya)', en: 'Kanya' },
    symbol: { hi: 'कुंवारी (Virgin/Maiden)', en: 'The Maiden' },
    rulingPlanet: { hi: 'बुध (Mercury)', en: 'Mercury (Budha)' },
    element: { hi: 'पृथ्वी (Earth)', en: 'Earth (Prithvi)' },
    nature: { hi: 'द्विस्वभाव (Dual)', en: 'Dual (Dvisvabhava)' },
    introduction: { 
      hi: 'कन्या राशि चक्र की छठी राशि है। बुध द्वारा शासित यह राशि पूर्णता (परफेक्शन), विश्लेषणात्मक क्षमता, सेवा भाव और शुद्धता का प्रतिनिधित्व करती है।', 
      en: 'Virgo is the sixth sign of the zodiac. Ruled by Mercury, this sign represents perfectionism, analytical abilities, a sense of service, and purity.' 
    },
    characteristics: { 
      hi: 'कन्या राशि के जातक बहुत ही व्यवस्थित, तार्किक और बारीकियों पर ध्यान देने वाले होते हैं। वे व्यावहारिक और मदद करने वाले स्वभाव के होते हैं। वे हमेशा हर काम को सर्वोत्तम तरीके से करना चाहते हैं।', 
      en: 'Virgo individuals are highly organized, logical, and detail-oriented. They have a practical and helpful nature. They always strive to do everything in the best possible way.' 
    },
    strengths: { 
      hi: ['विश्लेषणात्मक', 'मेहनती', 'व्यवस्थित', 'बुद्धिमान', 'सहायक'], 
      en: ['Analytical', 'Hardworking', 'Organized', 'Intelligent', 'Helpful'] 
    },
    challenges: { 
      hi: ['अत्यधिक आलोचनात्मक', 'हर काम में परफेक्शन खोजना', 'चिंता करना', 'संकोची'], 
      en: ['Overly Critical', 'Seeking Perfection in Everything', 'Worrying', 'Shy'] 
    },
    career: { 
      hi: 'लेखांकन (अकाउंटिंग), डेटा विश्लेषण, चिकित्सा, संपादन (एडिटिंग), स्वास्थ्य सेवा और शोध (रिसर्च) जैसे बारीकी वाले क्षेत्र इनके लिए बहुत अच्छे माने जाते हैं।', 
      en: 'Detail-oriented fields like accounting, data analysis, medicine, editing, healthcare, and research are considered very good for them.' 
    },
    relationships: { 
      hi: 'रिश्तों में कन्या राशि वाले बहुत केयरिंग होते हैं, हालांकि वे इसे बोलकर कम व्यक्त करते हैं। वे अपने पार्टनर की रोजमर्रा की जिंदगी को बेहतर बनाने में मदद करके अपना प्यार दिखाते हैं।', 
      en: 'In relationships, Virgos are very caring, though they may express it less verbally. They show their love by helping to improve their partner\'s everyday life.' 
    }
  },
  tula: {
    slug: 'tula',
    name: { hi: 'तुला', en: 'Libra' },
    sanskritName: { hi: 'तुला (Tula)', en: 'Tula' },
    symbol: { hi: 'तराजू (Scales)', en: 'The Scales' },
    rulingPlanet: { hi: 'शुक्र (Venus)', en: 'Venus (Shukra)' },
    element: { hi: 'वायु (Air)', en: 'Air (Vayu)' },
    nature: { hi: 'चर (Movable)', en: 'Movable (Chara)' },
    introduction: { 
      hi: 'तुला राशि चक्र की सातवीं राशि है। शुक्र ग्रह से प्रभावित यह राशि संतुलन, सद्भाव, न्याय और सौंदर्य का प्रतीक है।', 
      en: 'Libra is the seventh sign of the zodiac. Influenced by Venus, this sign is a symbol of balance, harmony, justice, and beauty.' 
    },
    characteristics: { 
      hi: 'तुला राशि के लोग शांतिप्रिय, मिलनसार और कूटनीतिक होते हैं। वे झगड़ों से दूर रहना पसंद करते हैं और हर स्थिति में संतुलन बनाने का प्रयास करते हैं। उनकी कलात्मक और सामाजिक समझ बहुत अच्छी होती है।', 
      en: 'Libra people are peace-loving, sociable, and diplomatic. They prefer staying away from conflicts and strive to create balance in every situation. Their artistic and social understanding is excellent.' 
    },
    strengths: { 
      hi: ['संतुलित', 'न्यायप्रिय', 'मिलनसार', 'आकर्षक', 'कूटनीतिक'], 
      en: ['Balanced', 'Fair-minded', 'Sociable', 'Charming', 'Diplomatic'] 
    },
    challenges: { 
      hi: ['निर्णय न ले पाना', 'टकराव से बचना (दब जाना)', 'दिखावे पर ध्यान देना', 'अस्थिरता'], 
      en: ['Indecisiveness', 'Avoiding Confrontation', 'Focusing on Appearances', 'Instability'] 
    },
    career: { 
      hi: 'कानून, न्यायपालिका, कूटनीति (डिप्लोमेसी), पीआर, फैशन डिजाइनिंग, कला, और जनसंपर्क से जुड़े करियर तुला राशि वालों के लिए उत्तम हैं।', 
      en: 'Careers in law, judiciary, diplomacy, PR, fashion designing, art, and public relations are excellent for Libra individuals.' 
    },
    relationships: { 
      hi: 'रिश्तों को तुला जातक बहुत महत्व देते हैं। वे एक आदर्श और रोमांटिक पार्टनर की तलाश में रहते हैं। जीवनसाथी के साथ सामंजस्य बिठाना इनकी खूबी है।', 
      en: 'Libras attach great importance to relationships. They search for an ideal and romantic partner. Harmonizing with their spouse is their specialty.' 
    }
  },
  vrishchik: {
    slug: 'vrishchik',
    name: { hi: 'वृश्चिक', en: 'Scorpio' },
    sanskritName: { hi: 'वृश्चिक (Vrishchik)', en: 'Vrishchika' },
    symbol: { hi: 'बिच्छू (Scorpion)', en: 'The Scorpion' },
    rulingPlanet: { hi: 'मंगल (Mars)', en: 'Mars (Mangal)' },
    element: { hi: 'जल (Water)', en: 'Water (Jala)' },
    nature: { hi: 'स्थिर (Fixed)', en: 'Fixed (Sthira)' },
    introduction: { 
      hi: 'वृश्चिक राशि चक्र की आठवीं राशि है। मंगल द्वारा शासित यह राशि जुनून, रहस्य, गहराई और परिवर्तन का प्रतीक है।', 
      en: 'Scorpio is the eighth sign of the zodiac. Ruled by Mars, this sign symbolizes passion, mystery, depth, and transformation.' 
    },
    characteristics: { 
      hi: 'वृश्चिक राशि के जातक अत्यंत भावुक, रहस्यमयी और दृढ़ निश्चयी होते हैं। वे किसी भी बात की गहराई तक जाने की क्षमता रखते हैं। बाहर से शांत दिखने वाले इन लोगों के भीतर भावनाओं का समंदर होता है।', 
      en: 'Scorpio individuals are extremely emotional, mysterious, and determined. They possess the ability to delve deep into any matter. Appearing calm on the outside, they carry an ocean of emotions within.' 
    },
    strengths: { 
      hi: ['दृढ़ निश्चयी', 'बहादुर', 'वफादार', 'गहरी सोच वाले', 'तीक्ष्ण बुद्धि'], 
      en: ['Determined', 'Brave', 'Loyal', 'Deep Thinkers', 'Sharp Intellect'] 
    },
    challenges: { 
      hi: ['ईर्ष्या', 'रहस्यमयी स्वभाव', 'बदला लेने की प्रवृत्ति', 'शक्कीपन'], 
      en: ['Jealousy', 'Secretive Nature', 'Vengefulness', 'Suspiciousness'] 
    },
    career: { 
      hi: 'जासूसी, शोध (रिसर्च), मनोविज्ञान, शल्य चिकित्सा (सर्जरी), खनन, ज्योतिष और ऐसे क्षेत्र जहां रहस्यों को सुलझाना हो, इनके लिए अनुकूल हैं।', 
      en: 'Espionage, research, psychology, surgery, mining, astrology, and fields requiring the unraveling of mysteries are favorable for them.' 
    },
    relationships: { 
      hi: 'वृश्चिक जातक प्यार में बहुत तीव्र और समर्पित होते हैं। वे सतही रिश्तों में विश्वास नहीं करते; उन्हें गहरा और आत्मिक जुड़ाव चाहिए होता है।', 
      en: 'Scorpios are very intense and dedicated in love. They do not believe in superficial relationships; they require a deep and soulful connection.' 
    }
  },
  dhanu: {
    slug: 'dhanu',
    name: { hi: 'धनु', en: 'Sagittarius' },
    sanskritName: { hi: 'धनु (Dhanu)', en: 'Dhanusha' },
    symbol: { hi: 'धनुर्धर (Archer/Centaur)', en: 'The Archer' },
    rulingPlanet: { hi: 'बृहस्पति (Jupiter)', en: 'Jupiter (Guru)' },
    element: { hi: 'अग्नि (Fire)', en: 'Fire (Agni)' },
    nature: { hi: 'द्विस्वभाव (Dual)', en: 'Dual (Dvisvabhava)' },
    introduction: { 
      hi: 'धनु राशि चक्र की नौवीं राशि है। बृहस्पति द्वारा शासित यह राशि धर्म, दर्शन, भाग्य, उच्च शिक्षा और आशावाद का प्रतीक है।', 
      en: 'Sagittarius is the ninth sign of the zodiac. Ruled by Jupiter, this sign symbolizes religion, philosophy, luck, higher education, and optimism.' 
    },
    characteristics: { 
      hi: 'धनु राशि के लोग स्वतंत्र विचारों वाले, आशावादी और सत्य की खोज करने वाले होते हैं। उन्हें यात्रा करना और नई संस्कृतियों के बारे में जानना पसंद है। वे बहुत ईमानदार और स्पष्टवादी होते हैं।', 
      en: 'Sagittarius individuals are independent thinkers, optimistic, and seekers of truth. They love traveling and learning about new cultures. They are very honest and straightforward.' 
    },
    strengths: { 
      hi: ['आशावादी', 'ईमानदार', 'स्वतंत्र', 'दार्शनिक', 'उत्साही'], 
      en: ['Optimistic', 'Honest', 'Independent', 'Philosophical', 'Enthusiastic'] 
    },
    challenges: { 
      hi: ['मुंहफट होना', 'अत्यधिक आत्मविश्वास', 'जल्दबाजी', 'जिम्मेदारी से भागना'], 
      en: ['Bluntness', 'Overconfidence', 'Impatience', 'Fleeing from Responsibility'] 
    },
    career: { 
      hi: 'शिक्षण (प्रोफेसर), कानून, यात्रा उद्योग, दर्शन, धर्मोपदेश, और प्रकाशन (पब्लिशिंग) जैसे क्षेत्र धनु राशि के लिए बहुत उपयुक्त हैं।', 
      en: 'Fields like teaching (professors), law, travel industry, philosophy, preaching, and publishing are highly suitable for Sagittarius.' 
    },
    relationships: { 
      hi: 'रिश्तों में इन्हें अपनी स्वतंत्रता बहुत प्यारी होती है। ये एक ऐसा पार्टनर चाहते हैं जो उनके रोमांचक जीवन का हिस्सा बने और उन पर बहुत ज्यादा पाबंदियां न लगाए।', 
      en: 'They dearly love their freedom in relationships. They want a partner who becomes part of their adventurous life and doesn\'t impose too many restrictions on them.' 
    }
  },
  makar: {
    slug: 'makar',
    name: { hi: 'मकर', en: 'Capricorn' },
    sanskritName: { hi: 'मकर (Makar)', en: 'Makara' },
    symbol: { hi: 'मकर (Sea-Goat)', en: 'The Sea-Goat' },
    rulingPlanet: { hi: 'शनि (Saturn)', en: 'Saturn (Shani)' },
    element: { hi: 'पृथ्वी (Earth)', en: 'Earth (Prithvi)' },
    nature: { hi: 'चर (Movable)', en: 'Movable (Chara)' },
    introduction: { 
      hi: 'मकर राशि चक्र की दसवीं राशि है। शनि ग्रह द्वारा शासित यह राशि अनुशासन, कर्म, जिम्मेदारी और महत्वाकांक्षा का प्रतिनिधित्व करती है।', 
      en: 'Capricorn is the tenth sign of the zodiac. Ruled by the planet Saturn, this sign represents discipline, karma, responsibility, and ambition.' 
    },
    characteristics: { 
      hi: 'मकर राशि के जातक अत्यधिक मेहनती, गंभीर और लक्ष्य-उन्मुख होते हैं। वे अपने कर्तव्यों को बखूबी समझते हैं और सफलता पाने के लिए निरंतर और धैर्यवान प्रयास करते हैं।', 
      en: 'Capricorn individuals are extremely hardworking, serious, and goal-oriented. They understand their duties perfectly and make continuous, patient efforts to achieve success.' 
    },
    strengths: { 
      hi: ['अनुशासित', 'जिम्मेदार', 'महत्वाकांक्षी', 'व्यावहारिक', 'धैर्यवान'], 
      en: ['Disciplined', 'Responsible', 'Ambitious', 'Practical', 'Patient'] 
    },
    challenges: { 
      hi: ['निराशावादी', 'कठोर स्वभाव', 'काम का नशा (वर्कहोलिक)', 'भावनात्मक रूप से ठंडा'], 
      en: ['Pessimistic', 'Rigid Nature', 'Workaholic', 'Emotionally Cold'] 
    },
    career: { 
      hi: 'प्रशासन, कॉर्पोरेट प्रबंधन (CEO/मैनेजर), सरकारी नौकरी, सिविल इंजीनियरिंग, वास्तुकला और वित्त (फाइनेंस) मकर राशि वालों के लिए उत्कृष्ट करियर विकल्प हैं।', 
      en: 'Administration, corporate management (CEO/Manager), government jobs, civil engineering, architecture, and finance are excellent career choices for Capricorns.' 
    },
    relationships: { 
      hi: 'मकर राशि वाले रिश्तों में बहुत पारंपरिक और स्थिर होते हैं। वे प्यार का इजहार शब्दों से कम और जिम्मेदारियां निभाकर ज्यादा करते हैं।', 
      en: 'Capricorns are very traditional and stable in relationships. They express love less through words and more by fulfilling their responsibilities.' 
    }
  },
  kumbh: {
    slug: 'kumbh',
    name: { hi: 'कुंभ', en: 'Aquarius' },
    sanskritName: { hi: 'कुम्भ (Kumbh)', en: 'Kumbha' },
    symbol: { hi: 'जल-वाहक (Water Bearer)', en: 'The Water Bearer' },
    rulingPlanet: { hi: 'शनि (Saturn)', en: 'Saturn (Shani)' },
    element: { hi: 'वायु (Air)', en: 'Air (Vayu)' },
    nature: { hi: 'स्थिर (Fixed)', en: 'Fixed (Sthira)' },
    introduction: { 
      hi: 'कुंभ राशि चक्र की ग्यारहवीं राशि है। शनि द्वारा शासित यह राशि मानवतावाद, नवाचार, सामाजिक नेटवर्क और स्वतंत्रता का प्रतीक है।', 
      en: 'Aquarius is the eleventh sign of the zodiac. Ruled by Saturn, this sign symbolizes humanitarianism, innovation, social networks, and freedom.' 
    },
    characteristics: { 
      hi: 'कुंभ राशि के जातक प्रगतिशील, बुद्धिमान और स्वतंत्र सोच वाले होते हैं। वे समाज के लिए कुछ अलग करना चाहते हैं और पुरानी रूढ़ियों को तोड़ना पसंद करते हैं। ये बहुत अच्छे दोस्त साबित होते हैं।', 
      en: 'Aquarius individuals are progressive, intelligent, and independent thinkers. They want to do something different for society and like breaking old stereotypes. They prove to be very good friends.' 
    },
    strengths: { 
      hi: ['मानवतावादी', 'आविष्कारशील', 'बुद्धिमान', 'स्वतंत्र', 'मिलनसार'], 
      en: ['Humanitarian', 'Inventive', 'Intelligent', 'Independent', 'Friendly'] 
    },
    challenges: { 
      hi: ['भावनात्मक रूप से अलग', 'जिद्दी', 'अप्रत्याशित स्वभाव', 'विद्रोही'], 
      en: ['Emotionally Detached', 'Stubborn', 'Unpredictable Nature', 'Rebellious'] 
    },
    career: { 
      hi: 'प्रौद्योगिकी (आईटी), विज्ञान, सामाजिक कार्य, अंतरिक्ष विज्ञान, विमानन और ऐसे करियर जहां नई खोज या समाज की भलाई हो, इनके लिए अनुकूल हैं।', 
      en: 'Technology (IT), science, social work, space science, aviation, and careers involving new discoveries or societal welfare are favorable for them.' 
    },
    relationships: { 
      hi: 'रिश्तों में कुंभ राशि वाले सबसे पहले एक अच्छा दोस्त खोजते हैं। वे ऐसे पार्टनर के साथ रहना पसंद करते हैं जो उनकी बौद्धिक क्षमता का सम्मान करे और उन्हें मानसिक स्पेस दे।', 
      en: 'In relationships, Aquarians seek a good friend first. They prefer being with a partner who respects their intellectual capacity and gives them mental space.' 
    }
  },
  meen: {
    slug: 'meen',
    name: { hi: 'मीन', en: 'Pisces' },
    sanskritName: { hi: 'मीन (Meen)', en: 'Meena' },
    symbol: { hi: 'मछली (Two Fishes)', en: 'Two Fishes' },
    rulingPlanet: { hi: 'बृहस्पति (Jupiter)', en: 'Jupiter (Guru)' },
    element: { hi: 'जल (Water)', en: 'Water (Jala)' },
    nature: { hi: 'द्विस्वभाव (Dual)', en: 'Dual (Dvisvabhava)' },
    introduction: { 
      hi: 'मीन राशि चक्र की बारहवीं और अंतिम राशि है। बृहस्पति द्वारा शासित यह राशि आध्यात्मिकता, करुणा, कल्पना और मोक्ष का प्रतीक है।', 
      en: 'Pisces is the twelfth and final sign of the zodiac. Ruled by Jupiter, this sign symbolizes spirituality, compassion, imagination, and liberation (Moksha).' 
    },
    characteristics: { 
      hi: 'मीन राशि के लोग अत्यधिक संवेदनशील, सहानुभूतिपूर्ण और दयालु होते हैं। इनकी कल्पना शक्ति बहुत मजबूत होती है। ये लोग दूसरों के दुखों को आसानी से समझ लेते हैं और अक्सर आध्यात्मिक स्वभाव के होते हैं।', 
      en: 'Pisces people are highly sensitive, empathetic, and kind-hearted. Their imaginative power is very strong. These individuals easily understand the sorrows of others and often possess a spiritual nature.' 
    },
    strengths: { 
      hi: ['सहानुभूतिपूर्ण', 'कलात्मक', 'सहज ज्ञानी (Intuitive)', 'दयालु', 'आध्यात्मिक'], 
      en: ['Empathetic', 'Artistic', 'Intuitive', 'Kind', 'Spiritual'] 
    },
    challenges: { 
      hi: ['यथार्थ से दूर (Daydreaming)', 'अत्यधिक भावुक', 'दूसरों पर जल्दी भरोसा करना', 'निर्णय लेने में कमी'], 
      en: ['Escaping Reality (Daydreaming)', 'Overly Emotional', 'Trusting Others Too Quickly', 'Lack of Decision Making'] 
    },
    career: { 
      hi: 'कला, संगीत, साहित्य, चिकित्सा, अध्यात्म, मनोविज्ञान, नौसेना, और ऐसे कार्य जहाँ दूसरों की सहायता की जा सके, इनके लिए बहुत अच्छे हैं।', 
      en: 'Art, music, literature, medicine, spirituality, psychology, navy, and works where others can be helped are very good for them.' 
    },
    relationships: { 
      hi: 'रिश्तों में मीन राशि वाले बहुत ही रोमांटिक, निस्वार्थ और समर्पित होते हैं। वे अपने पार्टनर से गहरा भावनात्मक जुड़ाव महसूस करते हैं और उनके लिए बहुत त्याग कर सकते हैं।', 
      en: 'In relationships, Pisces individuals are very romantic, selfless, and dedicated. They feel a deep emotional connection with their partner and can make great sacrifices for them.' 
    }
  }
};
