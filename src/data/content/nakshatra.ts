export interface NakshatraContent {
  slug: string;
  name: { hi: string; en: string };
  sanskritName: { hi: string; en: string };
  number: number;
  rulingPlanet: { hi: string; en: string };
  deity: { hi: string; en: string };
  symbol: { hi: string; en: string };
  gana: { hi: string; en: string };
  yoni: { hi: string; en: string };
  nadi: { hi: string; en: string };
  introduction: { hi: string; en: string };
  characteristics: { hi: string; en: string };
  strengths: { hi: string[]; en: string[] };
  challenges: { hi: string[]; en: string[] };
  padas: {
    1: { hi: string; en: string };
    2: { hi: string; en: string };
    3: { hi: string; en: string };
    4: { hi: string; en: string };
  };
}

export const nakshatraData: Record<string, NakshatraContent> = {
  ashwini: {
    slug: 'ashwini',
    name: { hi: 'अश्विनी', en: 'Ashwini' },
    sanskritName: { hi: 'अश्विनी (Ashwini)', en: 'Ashwini' },
    number: 1,
    rulingPlanet: { hi: 'केतु (Ketu)', en: 'Ketu' },
    deity: { hi: 'अश्विनी कुमार (Ashwini Kumaras - The celestial physicians)', en: 'Ashwini Kumaras (Physicians of the Gods)' },
    symbol: { hi: 'घोड़े का सिर (Horse\'s Head)', en: 'Horse\'s Head' },
    gana: { hi: 'देव (Deva)', en: 'Deva (Divine)' },
    yoni: { hi: 'अश्व (Horse)', en: 'Ashwa (Horse)' },
    nadi: { hi: 'आदि (Vata)', en: 'Adi (Vata)' },
    introduction: { 
      hi: 'वैदिक ज्योतिष में अश्विनी 27 नक्षत्रों में सबसे पहला नक्षत्र है। यह मेष राशि में स्थित होता है। इसे गति, ऊर्जा और त्वरित कार्य का प्रतीक माना जाता है। इसके देवता अश्विनी कुमार हैं, जो देवताओं के वैद्य हैं, इसलिए इस नक्षत्र का संबंध चिकित्सा और उपचार से भी है।', 
      en: 'In Vedic astrology, Ashwini is the first of the 27 Nakshatras, entirely situated in the zodiac sign of Aries. It symbolizes speed, energy, and swift action. Its deities are the Ashwini Kumaras, the physicians of the gods, associating it closely with healing and medicine.' 
    },
    characteristics: { 
      hi: 'पारंपरिक ज्योतिषीय मान्यताओं के अनुसार, अश्विनी नक्षत्र में जन्मे लोग बहुत फुर्तीले, ऊर्जावान और साहसी होते हैं। वे हमेशा नई चीजों की शुरुआत करने के लिए उत्सुक रहते हैं और काम को तेजी से पूरा करना पसंद करते हैं। उनका स्वभाव आकर्षक होता है।', 
      en: 'According to traditional astrological beliefs, individuals born under Ashwini Nakshatra are swift, energetic, and courageous. They are always eager to initiate new projects and like to complete tasks quickly. They generally have a charming and vibrant nature.' 
    },
    strengths: { 
      hi: ['ऊर्जावान और फुर्तीले', 'साहसी', 'नेतृत्व करने में सक्षम', 'आकर्षक व्यक्तित्व'], 
      en: ['Energetic and Swift', 'Courageous', 'Capable of Leadership', 'Charming Personality'] 
    },
    challenges: { 
      hi: ['जल्दबाजी करना', 'धैर्य की कमी', 'काम बीच में छोड़ देना', 'जिद्दीपन'], 
      en: ['Impulsiveness', 'Lack of Patience', 'Leaving tasks uncompleted', 'Stubbornness'] 
    },
    padas: {
      1: { hi: 'पहला चरण मंगल (मेष नवांश) द्वारा शासित है, जो अत्यधिक ऊर्जा, बहादुरी और पहल करने की क्षमता देता है।', en: 'The first Pada is ruled by Mars (Aries Navamsha), providing immense energy, bravery, and initiative.' },
      2: { hi: 'दूसरा चरण शुक्र (वृषभ नवांश) द्वारा शासित है, जो रचनात्मकता, भौतिक सुख और सौंदर्य बोध लाता है।', en: 'The second Pada is ruled by Venus (Taurus Navamsha), bringing creativity, material comfort, and an appreciation for beauty.' },
      3: { hi: 'तीसरा चरण बुध (मिथुन नवांश) द्वारा शासित है, जो त्वरित बुद्धि, संचार कौशल और हास्य बोध प्रदान करता है।', en: 'The third Pada is ruled by Mercury (Gemini Navamsha), bestowing quick intellect, communication skills, and humor.' },
      4: { hi: 'चौथा चरण चंद्रमा (कर्क नवांश) द्वारा शासित है, जो संवेदनशीलता, उपचार क्षमता और भावनात्मक गहराई देता है।', en: 'The fourth Pada is ruled by the Moon (Cancer Navamsha), offering sensitivity, healing abilities, and emotional depth.' }
    }
  },
  bharani: {
    slug: 'bharani',
    name: { hi: 'भरणी', en: 'Bharani' },
    sanskritName: { hi: 'भरणी (Bharani)', en: 'Bharani' },
    number: 2,
    rulingPlanet: { hi: 'शुक्र (Venus)', en: 'Venus' },
    deity: { hi: 'यम (Yama - The god of death and justice)', en: 'Yama (God of Justice/Death)' },
    symbol: { hi: 'योनि (Yoni - The female reproductive organ)', en: 'Yoni (Female reproductive organ)' },
    gana: { hi: 'मनुष्य (Manushya)', en: 'Manushya (Human)' },
    yoni: { hi: 'गज (Elephant)', en: 'Gaja (Elephant)' },
    nadi: { hi: 'मध्य (Pitta)', en: 'Madhya (Pitta)' },
    introduction: { 
      hi: 'भरणी दूसरा नक्षत्र है और इसका विस्तार भी पूरी तरह से मेष राशि में होता है। यह रचना, जन्म, मृत्यु और परिवर्तन का प्रतीक है। इसके अधिपति देवता यमराज (धर्मराज) हैं, जो इसे न्याय, संयम और अनुशासन से जोड़ते हैं।', 
      en: 'Bharani is the second Nakshatra, also entirely located in Aries. It symbolizes creation, birth, death, and transformation. Its presiding deity is Yama (the God of Justice/Death), associating it with justice, restraint, and discipline.' 
    },
    characteristics: { 
      hi: 'भरणी नक्षत्र के जातक सत्यवादी, कलात्मक और साहसी होते हैं। वे अपने विचारों में दृढ़ होते हैं और न्याय के पक्ष में खड़े रहते हैं। शुक्र का प्रभाव उन्हें कला, सौंदर्य और सुख-सुविधाओं का प्रेमी बनाता है। वे चुनौतियों से घबराते नहीं हैं।', 
      en: 'Individuals born in Bharani Nakshatra are truthful, artistic, and brave. They are firm in their views and stand up for justice. The influence of Venus makes them lovers of art, beauty, and comforts. They do not shy away from challenges.' 
    },
    strengths: { 
      hi: ['दृढ़ संकल्पी', 'रचनात्मक', 'सच्चाई पसंद', 'चुनौतियों का सामना करने वाले'], 
      en: ['Determined', 'Creative', 'Truth-loving', 'Resilient in facing challenges'] 
    },
    challenges: { 
      hi: ['कठोर या क्रूर दिखना', 'अत्यधिक आलोचक', 'चरम सीमा तक जाना'], 
      en: ['Can appear harsh or cruel', 'Overly critical', 'Tendency to go to extremes'] 
    },
    padas: {
      1: { hi: 'पहला चरण सूर्य (सिंह नवांश) द्वारा शासित है, जो इच्छाशक्ति, रचनात्मकता और नेतृत्व गुण देता है।', en: 'The first Pada is ruled by the Sun (Leo Navamsha), giving willpower, creativity, and leadership qualities.' },
      2: { hi: 'दूसरा चरण बुध (कन्या नवांश) द्वारा शासित है, जो तार्किकता, व्यावहारिक दृष्टिकोण और व्यवस्था लाता है।', en: 'The second Pada is ruled by Mercury (Virgo Navamsha), bringing logic, practicality, and organization.' },
      3: { hi: 'तीसरा चरण शुक्र (तुला नवांश) द्वारा शासित है, जो संबंधों, कूटनीति और कलात्मकता को महत्व देता है।', en: 'The third Pada is ruled by Venus (Libra Navamsha), prioritizing relationships, diplomacy, and artistry.' },
      4: { hi: 'चौथा चरण मंगल (वृश्चिक नवांश) द्वारा शासित है, जो गहनता, शोध की प्रवृत्ति और जुनून देता है।', en: 'The fourth Pada is ruled by Mars (Scorpio Navamsha), giving intensity, research tendencies, and passion.' }
    }
  },
  krittika: {
    slug: 'krittika',
    name: { hi: 'कृत्तिका', en: 'Krittika' },
    sanskritName: { hi: 'कृत्तिका (Krittika)', en: 'Krittika' },
    number: 3,
    rulingPlanet: { hi: 'सूर्य (Sun)', en: 'Sun' },
    deity: { hi: 'अग्नि (Agni - The god of fire)', en: 'Agni (God of Fire)' },
    symbol: { hi: 'चाकू या रेज़र (Knife/Razor)', en: 'Knife or Razor' },
    gana: { hi: 'राक्षस (Rakshasa)', en: 'Rakshasa (Demon)' },
    yoni: { hi: 'मेष (Sheep)', en: 'Mesha (Sheep)' },
    nadi: { hi: 'अंत्य (Kapha)', en: 'Antya (Kapha)' },
    introduction: { 
      hi: 'कृत्तिका तीसरा नक्षत्र है, जो मेष और वृषभ दोनों राशियों में फैला हुआ है। इसका प्रतीक चाकू या रेज़र है, जो काटने, छांटने और शुद्ध करने की क्षमता को दर्शाता है। इसके देवता अग्नि हैं, जो तेज, ऊर्जा और पवित्रता के प्रतीक हैं।', 
      en: 'Krittika is the third Nakshatra, spanning across both Aries and Taurus. Its symbol is a knife or razor, representing the ability to cut, separate, and purify. Its deity is Agni (Fire), symbolizing brilliance, energy, and purity.' 
    },
    characteristics: { 
      hi: 'कृत्तिका नक्षत्र वाले लोग तीक्ष्ण बुद्धि के होते हैं। वे स्पष्टवादी होते हैं और बुराइयों को काटने (रेज़र की तरह) की प्रवृत्ति रखते हैं। सूर्य का प्रभाव उन्हें आत्मविश्वासी और नेतृत्वकर्ता बनाता है। कभी-कभी उनका स्पष्ट बोलना दूसरों को चुभ सकता है।', 
      en: 'People of Krittika Nakshatra possess a sharp intellect. They are straightforward and have a tendency to cut through negativity (like a razor). The Sun\'s influence makes them confident and natural leaders. Sometimes their bluntness can sting others.' 
    },
    strengths: { 
      hi: ['ईमानदार', 'तेजस्वी', 'सुरक्षात्मक स्वभाव', 'कठोर परिश्रमी'], 
      en: ['Honest', 'Radiant/Brilliant', 'Protective nature', 'Hardworking'] 
    },
    challenges: { 
      hi: ['क्रोध', 'मुंहफट होना', 'अत्यधिक जिद्दी'], 
      en: ['Anger', 'Being too blunt', 'Excessively stubborn'] 
    },
    padas: {
      1: { hi: 'पहला चरण गुरु (धनु नवांश, मेष राशि) द्वारा शासित है, जो साहस के साथ-साथ दार्शनिक सोच देता है।', en: 'The first Pada is ruled by Jupiter (Sagittarius Navamsha, Aries sign), giving philosophical thought along with courage.' },
      2: { hi: 'दूसरा चरण शनि (मकर नवांश, वृषभ राशि) द्वारा शासित है, जो भौतिक जीवन में अनुशासन और कड़ी मेहनत लाता है।', en: 'The second Pada is ruled by Saturn (Capricorn Navamsha, Taurus sign), bringing discipline and hard work in material life.' },
      3: { hi: 'तीसरा चरण शनि (कुंभ नवांश, वृषभ राशि) द्वारा शासित है, जो मानवतावादी सोच और बौद्धिक दृढ़ता प्रदान करता है।', en: 'The third Pada is ruled by Saturn (Aquarius Navamsha, Taurus sign), providing humanitarian thought and intellectual steadfastness.' },
      4: { hi: 'चौथा चरण गुरु (मीन नवांश, वृषभ राशि) द्वारा शासित है, जो संवेदनशीलता, रचनात्मकता और आध्यात्मिक ज्ञान देता है।', en: 'The fourth Pada is ruled by Jupiter (Pisces Navamsha, Taurus sign), giving sensitivity, creativity, and spiritual knowledge.' }
    }
  },
  rohini: {
    slug: 'rohini',
    name: { hi: 'रोहिणी', en: 'Rohini' },
    sanskritName: { hi: 'रोहिणी (Rohini)', en: 'Rohini' },
    number: 4,
    rulingPlanet: { hi: 'चंद्र (Moon)', en: 'Moon' },
    deity: { hi: 'ब्रह्मा (Brahma - The Creator)', en: 'Brahma (The Creator)' },
    symbol: { hi: 'बैलगाड़ी (Oxcart) / बरगद का पेड़ (Banyan tree)', en: 'Oxcart / Banyan tree' },
    gana: { hi: 'मनुष्य (Manushya)', en: 'Manushya (Human)' },
    yoni: { hi: 'सर्प (Serpent)', en: 'Sarpa (Serpent)' },
    nadi: { hi: 'अंत्य (Kapha)', en: 'Antya (Kapha)' },
    introduction: { 
      hi: 'रोहिणी चौथा नक्षत्र है, जो पूरी तरह से वृषभ राशि में स्थित है। यह विकास, उर्वरता, सुंदरता और भौतिक समृद्धि का प्रतीक है। इसके देवता ब्रह्मा (सृष्टिकर्ता) हैं। वैदिक कथाओं में रोहिणी को चंद्रमा की सबसे प्रिय पत्नी माना गया है।', 
      en: 'Rohini is the fourth Nakshatra, located entirely in Taurus. It symbolizes growth, fertility, beauty, and material prosperity. Its deity is Brahma (the Creator). In Vedic lore, Rohini is considered the favorite wife of the Moon.' 
    },
    characteristics: { 
      hi: 'रोहिणी नक्षत्र के जातक बेहद आकर्षक, कोमल और कला प्रेमी होते हैं। वे सुख-सुविधाओं और प्रकृति से गहराई से जुड़े होते हैं। वे शांत स्वभाव के होते हैं, लेकिन जब कोई उनके करीबियों को नुकसान पहुंचाए, तो वे दृढ़ता से खड़े होते हैं।', 
      en: 'Individuals born under Rohini Nakshatra are highly attractive, gentle, and lovers of art. They are deeply connected to material comforts and nature. They have a calm demeanor, but stand firm if their loved ones are threatened.' 
    },
    strengths: { 
      hi: ['आकर्षक व्यक्तित्व', 'रचनात्मकता', 'देखभाल करने वाले', 'स्थिरता'], 
      en: ['Charming personality', 'Creativity', 'Caring nature', 'Stability'] 
    },
    challenges: { 
      hi: ['ईर्ष्या', 'अत्यधिक भौतिकवादी', 'बदलाव से डरना'], 
      en: ['Jealousy', 'Overly materialistic', 'Fear of change'] 
    },
    padas: {
      1: { hi: 'पहला चरण मंगल (मेष नवांश) द्वारा शासित है, जो सौंदर्य के प्रति जुनून और त्वरित कार्य करने की क्षमता देता है।', en: 'The first Pada is ruled by Mars (Aries Navamsha), giving passion for beauty and the ability to act swiftly.' },
      2: { hi: 'दूसरा चरण शुक्र (वृषभ नवांश) द्वारा शासित है, जो कला, भौतिक प्रचुरता और गायन/वादन में उत्कृष्ट बनाता है।', en: 'The second Pada is ruled by Venus (Taurus Navamsha), excelling in art, material abundance, and music.' },
      3: { hi: 'तीसरा चरण बुध (मिथुन नवांश) द्वारा शासित है, जो बौद्धिक संवाद, व्यापारिक समझ और चंचलता लाता है।', en: 'The third Pada is ruled by Mercury (Gemini Navamsha), bringing intellectual dialogue, business acumen, and playfulness.' },
      4: { hi: 'चौथा चरण चंद्रमा (कर्क नवांश) द्वारा शासित है, जो पारिवारिक सुख, मातृत्व भावना और भावनात्मक जुड़ाव को गहरा करता है।', en: 'The fourth Pada is ruled by the Moon (Cancer Navamsha), deepening family happiness, maternal instincts, and emotional connection.' }
    }
  },
  mrigashira: {
    slug: 'mrigashira',
    name: { hi: 'मृगशिरा', en: 'Mrigashira' },
    sanskritName: { hi: 'मृगशिरा (Mrigashira)', en: 'Mrigashira' },
    number: 5,
    rulingPlanet: { hi: 'मंगल (Mars)', en: 'Mars' },
    deity: { hi: 'सोम (Soma - The Moon god)', en: 'Soma (Moon God)' },
    symbol: { hi: 'हिरण का सिर (Deer\'s head)', en: 'Deer\'s head' },
    gana: { hi: 'देव (Deva)', en: 'Deva (Divine)' },
    yoni: { hi: 'सर्प (Serpent)', en: 'Sarpa (Serpent)' },
    nadi: { hi: 'मध्य (Pitta)', en: 'Madhya (Pitta)' },
    introduction: { 
      hi: 'मृगशिरा पांचवां नक्षत्र है, जिसका विस्तार वृषभ और मिथुन राशि में है। इसका प्रतीक हिरण का सिर है, जो चंचलता, खोज और निरंतर जिज्ञासा को दर्शाता है। इसके अधिपति सोम (चंद्र देवता) हैं।', 
      en: 'Mrigashira is the fifth Nakshatra, spanning across Taurus and Gemini. Its symbol is a deer\'s head, representing restlessness, searching, and continuous curiosity. Its presiding deity is Soma (the Moon God).' 
    },
    characteristics: { 
      hi: 'मृगशिरा नक्षत्र वाले जातक जिज्ञासु, ज्ञान पिपासु और हमेशा कुछ नया खोजने वाले होते हैं। हिरण की तरह वे बहुत चंचल और फुर्तीले होते हैं। उन्हें यात्रा करना और नई चीजें सीखना पसंद होता है, लेकिन अक्सर वे एक चीज़ पर ध्यान केंद्रित करने में संघर्ष करते हैं।', 
      en: 'Mrigashira individuals are inquisitive, thirsty for knowledge, and always searching for something new. Like a deer, they are very restless and swift. They love to travel and learn, but often struggle to focus on one single thing.' 
    },
    strengths: { 
      hi: ['जिज्ञासु', 'बौद्धिक रूप से तेज', 'अच्छे संवादी', 'आकर्षक'], 
      en: ['Curious', 'Intellectually sharp', 'Good communicators', 'Charming'] 
    },
    challenges: { 
      hi: ['अस्थिरता', 'संदेह करने की प्रवृत्ति', 'एक जगह टिकने में मुश्किल'], 
      en: ['Instability', 'Tendency to doubt', 'Difficulty staying in one place'] 
    },
    padas: {
      1: { hi: 'पहला चरण सूर्य (सिंह नवांश, वृषभ राशि) द्वारा शासित है, जो आत्म-अभिव्यक्ति और कलात्मक प्रतिभा देता है।', en: 'The first Pada is ruled by the Sun (Leo Navamsha, Taurus sign), giving self-expression and artistic talent.' },
      2: { hi: 'दूसरा चरण बुध (कन्या नवांश, वृषभ राशि) द्वारा शासित है, जो उत्कृष्ट तर्क शक्ति और मजाकिया स्वभाव लाता है।', en: 'The second Pada is ruled by Mercury (Virgo Navamsha, Taurus sign), bringing excellent logical abilities and a witty nature.' },
      3: { hi: 'तीसरा चरण शुक्र (तुला नवांश, मिथुन राशि) द्वारा शासित है, जो सामाजिक संपर्क, कूटनीति और साझेदारी पर ध्यान केंद्रित करता है।', en: 'The third Pada is ruled by Venus (Libra Navamsha, Gemini sign), focusing on social connections, diplomacy, and partnerships.' },
      4: { hi: 'चौथा चरण मंगल (वृश्चिक नवांश, मिथुन राशि) द्वारा शासित है, जो रहस्यमय चीजों को खोजने का जुनून और गहरी बौद्धिक क्षमता देता है।', en: 'The fourth Pada is ruled by Mars (Scorpio Navamsha, Gemini sign), giving a passion for uncovering mysteries and deep intellectual capacity.' }
    }
  },
  ardra: {
    slug: 'ardra',
    name: { hi: 'आर्द्रा', en: 'Ardra' },
    sanskritName: { hi: 'आर्द्रा (Ardra)', en: 'Ardra' },
    number: 6,
    rulingPlanet: { hi: 'राहु (Rahu)', en: 'Rahu' },
    deity: { hi: 'रुद्र (Rudra - Fierce form of Shiva)', en: 'Rudra (Fierce form of Shiva)' },
    symbol: { hi: 'आंसू की बूंद (Teardrop)', en: 'Teardrop' },
    gana: { hi: 'मनुष्य (Manushya)', en: 'Manushya (Human)' },
    yoni: { hi: 'श्वान (Dog)', en: 'Shwan (Dog)' },
    nadi: { hi: 'आदि (Vata)', en: 'Adi (Vata)' },
    introduction: { 
      hi: 'आर्द्रा छठा नक्षत्र है, जो पूरी तरह से मिथुन राशि में आता है। इसका प्रतीक "आंसू की बूंद" है, जो दुख के बाद आने वाले शुद्धिकरण और नवीकरण (Renewal) का प्रतीक है। इसके देवता शिव का उग्र रूप "रुद्र" (तूफान के देवता) हैं।', 
      en: 'Ardra is the sixth Nakshatra, falling entirely within Gemini. Its symbol is a "teardrop," representing the purification and renewal that comes after sorrow. Its deity is Rudra (the fierce form of Shiva, the God of Storms).' 
    },
    characteristics: { 
      hi: 'आर्द्रा नक्षत्र के लोग बहुत ही विश्लेषणात्मक, बौद्धिक और अनुसंधान करने वाले होते हैं। राहु के प्रभाव के कारण इनकी सोच अपरंपरागत होती है। ये जीवन के तूफानों से गुजरकर निखरते हैं। बाहरी तौर पर ये कठोर लग सकते हैं, लेकिन भीतर से कोमल होते हैं।', 
      en: 'People of Ardra Nakshatra are highly analytical, intellectual, and research-oriented. Due to Rahu\'s influence, their thinking is unconventional. They shine after weathering life\'s storms. They may appear harsh on the outside but are soft inside.' 
    },
    strengths: { 
      hi: ['गहरी सोच', 'विश्लेषणात्मक क्षमता', 'कठोर परिस्थितियों से उबरने की ताकत', 'ज्ञान प्राप्त करने की लालसा'], 
      en: ['Deep thinking', 'Analytical ability', 'Power to bounce back from adversity', 'Desire to acquire knowledge'] 
    },
    challenges: { 
      hi: ['भावनात्मक उथल-पुथल', 'कठोर वाणी', 'असंतोष'], 
      en: ['Emotional turmoil', 'Harsh speech', 'Dissatisfaction'] 
    },
    padas: {
      1: { hi: 'पहला चरण गुरु (धनु नवांश) द्वारा शासित है, जो दार्शनिक दृष्टिकोण, अन्वेषण और खोज की प्रवृत्ति देता है।', en: 'The first Pada is ruled by Jupiter (Sagittarius Navamsha), giving a philosophical outlook, exploration, and investigative tendencies.' },
      2: { hi: 'दूसरा चरण शनि (मकर नवांश) द्वारा शासित है, जो भौतिक जीवन की वास्तविकताओं, जिम्मेदारी और अनुशासन को दर्शाता है।', en: 'The second Pada is ruled by Saturn (Capricorn Navamsha), reflecting the realities of material life, responsibility, and discipline.' },
      3: { hi: 'तीसरा चरण शनि (कुंभ नवांश) द्वारा शासित है, जो वैज्ञानिक सोच, नवीन विचारों और बौद्धिक गहराई लाता है।', en: 'The third Pada is ruled by Saturn (Aquarius Navamsha), bringing scientific thinking, innovative ideas, and intellectual depth.' },
      4: { hi: 'चौथा चरण गुरु (मीन नवांश) द्वारा शासित है, जो अत्यधिक करुणा, आध्यात्मिक जुड़ाव और दूसरों की पीड़ा को समझने की क्षमता देता है।', en: 'The fourth Pada is ruled by Jupiter (Pisces Navamsha), giving immense compassion, spiritual connection, and the ability to understand others\' pain.' }
    }
  },
  punarvasu: {
    slug: 'punarvasu',
    name: { hi: 'पुनर्वसु', en: 'Punarvasu' },
    sanskritName: { hi: 'पुनर्वसु (Punarvasu)', en: 'Punarvasu' },
    number: 7,
    rulingPlanet: { hi: 'गुरु (Jupiter)', en: 'Jupiter' },
    deity: { hi: 'अदिति (Aditi - The mother of the gods)', en: 'Aditi (Mother of the Gods)' },
    symbol: { hi: 'तीरों से भरा तरकश (Quiver of arrows)', en: 'Quiver of arrows' },
    gana: { hi: 'देव (Deva)', en: 'Deva (Divine)' },
    yoni: { hi: 'मार्जार (Cat)', en: 'Marjar (Cat)' },
    nadi: { hi: 'आदि (Vata)', en: 'Adi (Vata)' },
    introduction: { 
      hi: 'पुनर्वसु सातवां नक्षत्र है, जिसका विस्तार मिथुन और कर्क राशि में है। "पुनर्वसु" का अर्थ है "धन की वापसी" या "पुनर्प्राप्ति"। इसका प्रतीक तीरों से भरा तरकश है। इसकी देवी अदिति हैं, जो अनंत आकाश और देवमाता हैं। भगवान राम का जन्म इसी नक्षत्र में हुआ था।', 
      en: 'Punarvasu is the seventh Nakshatra, spanning Gemini and Cancer. "Punarvasu" means "return of light/wealth" or "renewal." Its symbol is a quiver of arrows. Its deity is Aditi, the boundless sky and mother of the gods. Lord Rama was born under this Nakshatra.' 
    },
    characteristics: { 
      hi: 'पुनर्वसु नक्षत्र के लोग बहुत आशावादी, दयालु और सकारात्मक सोच वाले होते हैं। वे असफलताओं के बाद फिर से उठ खड़े होने (पुनर्प्राप्ति) की अद्भुत क्षमता रखते हैं। वे नैतिक मूल्यों का पालन करते हैं और शांतिपूर्ण जीवन जीना पसंद करते हैं।', 
      en: 'Punarvasu people are highly optimistic, kind, and positive thinkers. They possess an amazing ability to bounce back (recovery) after failures. They adhere to moral values and prefer living a peaceful life.' 
    },
    strengths: { 
      hi: ['आशावादी', 'शांत स्वभाव', 'नैतिक', 'दूसरों को प्रेरित करने वाले'], 
      en: ['Optimistic', 'Calm nature', 'Moral', 'Inspiring to others'] 
    },
    challenges: { 
      hi: ['अत्यधिक सरलता', 'स्थिरता की कमी', 'कभी-कभी अति-आदर्शवादी'], 
      en: ['Oversimplicity', 'Lack of stability', 'Sometimes overly idealistic'] 
    },
    padas: {
      1: { hi: 'पहला चरण मंगल (मेष नवांश, मिथुन राशि) द्वारा शासित है, जो बौद्धिक ऊर्जा और नए विचारों को लागू करने का साहस देता है।', en: 'The first Pada is ruled by Mars (Aries Navamsha, Gemini sign), giving intellectual energy and the courage to implement new ideas.' },
      2: { hi: 'दूसरा चरण शुक्र (वृषभ नवांश, मिथुन राशि) द्वारा शासित है, जो भौतिक आराम, कलात्मकता और सुरक्षित वातावरण की इच्छा लाता है।', en: 'The second Pada is ruled by Venus (Taurus Navamsha, Gemini sign), bringing a desire for material comforts, artistry, and a secure environment.' },
      3: { hi: 'तीसरा चरण बुध (मिथुन नवांश, मिथुन राशि) द्वारा शासित है, जो उत्कृष्ट संचार, तीक्ष्ण बुद्धि और बहुमुखी प्रतिभा प्रदान करता है।', en: 'The third Pada is ruled by Mercury (Gemini Navamsha, Gemini sign), providing excellent communication, sharp intellect, and versatility.' },
      4: { hi: 'चौथा चरण चंद्रमा (कर्क नवांश, कर्क राशि) द्वारा शासित है, जो गहरी मातृ भावना, संवेदनशीलता और अपार देखभाल करने की प्रकृति (अदिति का गुण) देता है।', en: 'The fourth Pada is ruled by the Moon (Cancer Navamsha, Cancer sign), giving deep maternal instincts, sensitivity, and immense nurturing nature (quality of Aditi).' }
    }
  },
  pushya: {
    slug: 'pushya',
    name: { hi: 'पुष्य', en: 'Pushya' },
    sanskritName: { hi: 'पुष्य (Pushya)', en: 'Pushya' },
    number: 8,
    rulingPlanet: { hi: 'शनि (Saturn)', en: 'Saturn' },
    deity: { hi: 'बृहस्पति (Brihaspati - Priest of the gods)', en: 'Brihaspati (Priest of the Gods)' },
    symbol: { hi: 'गाय का थन (Cow\'s udder) / कमल (Lotus)', en: 'Cow\'s udder / Lotus' },
    gana: { hi: 'देव (Deva)', en: 'Deva (Divine)' },
    yoni: { hi: 'मेष (Sheep)', en: 'Mesha (Sheep)' },
    nadi: { hi: 'मध्य (Pitta)', en: 'Madhya (Pitta)' },
    introduction: { 
      hi: 'पुष्य आठवां नक्षत्र है, जो पूरी तरह से कर्क राशि में आता है। इसे सभी नक्षत्रों में सबसे शुभ और "नक्षत्रों का राजा" माना जाता है। "पुष्य" का अर्थ है "पोषण करने वाला"। इसका प्रतीक गाय का थन या कमल है। इसके देवता बृहस्पति (ज्ञान के देवता) हैं।', 
      en: 'Pushya is the eighth Nakshatra, located entirely in Cancer. It is considered the most auspicious of all Nakshatras and the "King of Nakshatras." "Pushya" means "to nourish." Its symbol is a cow\'s udder or a lotus. Its deity is Brihaspati (God of Wisdom).' 
    },
    characteristics: { 
      hi: 'पुष्य नक्षत्र के जातक बहुत ही देखभाल करने वाले, आध्यात्मिक और विश्वसनीय होते हैं। वे समाज और परिवार का पोषण करना अपना धर्म मानते हैं। शनि का शासन उन्हें अनुशासित बनाता है, जबकि बृहस्पति की ऊर्जा उन्हें ज्ञानी बनाती है।', 
      en: 'Individuals born under Pushya are very caring, spiritual, and reliable. They consider nurturing society and family as their duty. Saturn\'s rulership makes them disciplined, while Jupiter\'s energy makes them wise.' 
    },
    strengths: { 
      hi: ['पोषण करने वाले', 'अध्यात्मिक', 'विश्वसनीय', 'परोपकारी'], 
      en: ['Nurturing', 'Spiritual', 'Reliable', 'Philanthropic'] 
    },
    challenges: { 
      hi: ['अपनी जरूरतों को नजरअंदाज करना', 'रूढ़िवादी सोच', 'अत्यधिक गंभीर होना'], 
      en: ['Ignoring personal needs', 'Orthodox thinking', 'Being overly serious'] 
    },
    padas: {
      1: { hi: 'पहला चरण सूर्य (सिंह नवांश) द्वारा शासित है, जो नेतृत्व, मान-सम्मान और धर्म के प्रति दृढ़ता देता है।', en: 'The first Pada is ruled by the Sun (Leo Navamsha), giving leadership, honor, and steadfastness towards dharma.' },
      2: { hi: 'दूसरा चरण बुध (कन्या नवांश) द्वारा शासित है, जो व्यावहारिक ज्ञान, सेवा भाव और उत्कृष्ट संगठनात्मक क्षमता लाता है।', en: 'The second Pada is ruled by Mercury (Virgo Navamsha), bringing practical knowledge, a sense of service, and excellent organizational skills.' },
      3: { hi: 'तीसरा चरण शुक्र (तुला नवांश) द्वारा शासित है, जो सामाजिक सद्भाव, साझेदारी और कूटनीति के माध्यम से दूसरों की मदद करने पर केंद्रित है।', en: 'The third Pada is ruled by Venus (Libra Navamsha), focusing on social harmony, partnerships, and helping others through diplomacy.' },
      4: { hi: 'चौथा चरण मंगल (वृश्चिक नवांश) द्वारा शासित है, जो गहन शोध, रहस्यवाद और सुरक्षा की गहरी भावना प्रदान करता है।', en: 'The fourth Pada is ruled by Mars (Scorpio Navamsha), providing intense research, mysticism, and a deep sense of protection.' }
    }
  },
  ashlesha: {
    slug: 'ashlesha',
    name: { hi: 'आश्लेषा', en: 'Ashlesha' },
    sanskritName: { hi: 'आश्लेषा (Ashlesha)', en: 'Ashlesha' },
    number: 9,
    rulingPlanet: { hi: 'बुध (Mercury)', en: 'Mercury' },
    deity: { hi: 'नाग (Nagas - The Serpents)', en: 'Nagas (The Serpents)' },
    symbol: { hi: 'कुंडली मारे हुए सांप (Coiled Serpent)', en: 'Coiled Serpent' },
    gana: { hi: 'राक्षस (Rakshasa)', en: 'Rakshasa (Demon)' },
    yoni: { hi: 'मार्जार (Cat)', en: 'Marjar (Cat)' },
    nadi: { hi: 'अंत्य (Kapha)', en: 'Antya (Kapha)' },
    introduction: { 
      hi: 'आश्लेषा नौवां नक्षत्र है, जो कर्क राशि के अंत में स्थित है (इसे गंडमूल नक्षत्र भी कहा जाता है)। इसका प्रतीक कुंडली मारा हुआ सांप है, जो रहस्य, ज्ञान, खतरे और परिवर्तन का प्रतीक है। इसके देवता नाग हैं।', 
      en: 'Ashlesha is the ninth Nakshatra, located at the end of Cancer (it is also known as a Gandamool Nakshatra). Its symbol is a coiled serpent, representing mystery, wisdom, danger, and transformation. Its deities are the Nagas (serpents).' 
    },
    characteristics: { 
      hi: 'आश्लेषा नक्षत्र के लोग बहुत चतुर, तीक्ष्ण बुद्धि वाले और रहस्यमयी होते हैं। सांप की तरह, वे आसानी से किसी के ध्यान में नहीं आते लेकिन सही समय पर वार (या कार्य) कर सकते हैं। वे गहन शोधकर्ता और अच्छे रणनीतिकार होते हैं।', 
      en: 'People of Ashlesha Nakshatra are very clever, sharp-witted, and mysterious. Like a serpent, they might go unnoticed but can strike (or act) at the perfect moment. They are deep researchers and excellent strategists.' 
    },
    strengths: { 
      hi: ['अंतर्दृष्टि', 'चतुर रणनीतिकार', 'गहरे विचारक', 'परिवर्तन को अपनाने वाले'], 
      en: ['Insightful', 'Clever strategists', 'Deep thinkers', 'Embrace transformation'] 
    },
    challenges: { 
      hi: ['शक्की स्वभाव', 'ईर्ष्या', 'हेरफेर (Manipulation) करने की प्रवृत्ति'], 
      en: ['Suspicious nature', 'Jealousy', 'Tendency towards manipulation'] 
    },
    padas: {
      1: { hi: 'पहला चरण गुरु (धनु नवांश) द्वारा शासित है, जो गुप्त विद्याओं और दार्शनिक विषयों में गहरी रुचि देता है।', en: 'The first Pada is ruled by Jupiter (Sagittarius Navamsha), giving a deep interest in occult sciences and philosophical subjects.' },
      2: { hi: 'दूसरा चरण शनि (मकर नवांश) द्वारा शासित है, जो भौतिक लक्ष्यों को प्राप्त करने के लिए तीव्र अनुशासन और चालाकी लाता है।', en: 'The second Pada is ruled by Saturn (Capricorn Navamsha), bringing intense discipline and cunning to achieve material goals.' },
      3: { hi: 'तीसरा चरण शनि (कुंभ नवांश) द्वारा शासित है, जो वैज्ञानिक दृष्टिकोण और सामूहिक रहस्यों को समझने की क्षमता प्रदान करता है।', en: 'The third Pada is ruled by Saturn (Aquarius Navamsha), providing a scientific outlook and the ability to understand collective mysteries.' },
      4: { hi: 'चौथा चरण गुरु (मीन नवांश) द्वारा शासित है, जो भ्रम, मोक्ष और आध्यात्मिक गहराई का प्रतीक है।', en: 'The fourth Pada is ruled by Jupiter (Pisces Navamsha), symbolizing illusions, liberation (moksha), and spiritual depth.' }
    }
  },
  magha: {
    slug: 'magha',
    name: { hi: 'मघा', en: 'Magha' },
    sanskritName: { hi: 'मघा (Magha)', en: 'Magha' },
    number: 10,
    rulingPlanet: { hi: 'केतु (Ketu)', en: 'Ketu' },
    deity: { hi: 'पितृ (Pitris - The Ancestors)', en: 'Pitris (The Ancestors)' },
    symbol: { hi: 'राजगद्दी (Royal Throne)', en: 'Royal Throne' },
    gana: { hi: 'राक्षस (Rakshasa)', en: 'Rakshasa (Demon)' },
    yoni: { hi: 'मूषक (Rat)', en: 'Mushaka (Rat)' },
    nadi: { hi: 'आदि (Vata)', en: 'Adi (Vata)' },
    introduction: { 
      hi: 'मघा दसवां नक्षत्र है, जो पूरी तरह से सिंह राशि में स्थित है (यह भी एक गंडमूल नक्षत्र है)। "मघा" का अर्थ है "महान" या "भव्य"। इसका प्रतीक राजगद्दी है, जो सत्ता, परंपरा और विरासत को दर्शाता है। इसके देवता पितृ (पूर्वज) हैं।', 
      en: 'Magha is the tenth Nakshatra, located entirely in Leo (it is also a Gandamool Nakshatra). "Magha" means "grand" or "magnificent." Its symbol is a royal throne, representing power, tradition, and legacy. Its deities are the Pitris (ancestors).' 
    },
    characteristics: { 
      hi: 'मघा नक्षत्र के लोग राजसी स्वभाव, महत्वाकांक्षी और अपनी जड़ों/परंपराओं से गहराई से जुड़े होते हैं। वे सम्मान और सत्ता की चाह रखते हैं। उन्हें अपने पूर्वजों पर गर्व होता है और वे एक मजबूत विरासत छोड़ना चाहते हैं।', 
      en: 'Magha individuals have a royal demeanor, are ambitious, and deeply connected to their roots/traditions. They desire respect and power. They take pride in their ancestry and wish to leave a strong legacy.' 
    },
    strengths: { 
      hi: ['नेतृत्व क्षमता', 'परंपराओं का सम्मान', 'राजसी व्यक्तित्व', 'वफादार'], 
      en: ['Leadership ability', 'Respect for traditions', 'Royal personality', 'Loyal'] 
    },
    challenges: { 
      hi: ['अहंकार', 'अत्यधिक अधिकार जताना', 'आलोचना सहन न कर पाना'], 
      en: ['Ego', 'Being overly authoritative', 'Inability to take criticism'] 
    },
    padas: {
      1: { hi: 'पहला चरण मंगल (मेष नवांश) द्वारा शासित है, जो अपार नेतृत्व क्षमता, साहस और एक मजबूत (कभी-कभी आक्रामक) इच्छाशक्ति देता है।', en: 'The first Pada is ruled by Mars (Aries Navamsha), giving immense leadership ability, courage, and a strong (sometimes aggressive) willpower.' },
      2: { hi: 'दूसरा चरण शुक्र (वृषभ नवांश) द्वारा शासित है, जो शाही जीवनशैली, भव्यता और भौतिक सफलता लाता है।', en: 'The second Pada is ruled by Venus (Taurus Navamsha), bringing a royal lifestyle, grandeur, and material success.' },
      3: { hi: 'तीसरा चरण बुध (मिथुन नवांश) द्वारा शासित है, जो कूटनीति, वाक्पटुता और ज्ञान को सत्ता के साधन के रूप में उपयोग करने की क्षमता प्रदान करता है।', en: 'The third Pada is ruled by Mercury (Gemini Navamsha), providing diplomacy, eloquence, and the ability to use knowledge as an instrument of power.' },
      4: { hi: 'चौथा चरण चंद्रमा (कर्क नवांश) द्वारा शासित है, जो वंश, परिवार, पूर्वजों और जनता के कल्याण के प्रति गहरा जुड़ाव देता है।', en: 'The fourth Pada is ruled by the Moon (Cancer Navamsha), giving a deep connection to lineage, family, ancestors, and the welfare of the masses.' }
    }
  },
  "purva-phalguni": {
    slug: 'purva-phalguni',
    name: { hi: 'पूर्वाफाल्गुनी', en: 'Purva Phalguni' },
    sanskritName: { hi: 'पूर्वाफाल्गुनी (Purva Phalguni)', en: 'Purva Phalguni' },
    number: 11,
    rulingPlanet: { hi: 'शुक्र (Venus)', en: 'Venus' },
    deity: { hi: 'भग (Bhaga - God of luck and marriage)', en: 'Bhaga (God of Luck/Marriage)' },
    symbol: { hi: 'पलंग के आगे के पाये (Front legs of a bed) / झूला (Hammock)', en: 'Front legs of a bed / Hammock' },
    gana: { hi: 'मनुष्य (Manushya)', en: 'Manushya (Human)' },
    yoni: { hi: 'मूषक (Rat)', en: 'Mushaka (Rat)' },
    nadi: { hi: 'मध्य (Pitta)', en: 'Madhya (Pitta)' },
    introduction: { 
      hi: 'पूर्वाफाल्गुनी ग्यारहवां नक्षत्र है, जो पूरी तरह से सिंह राशि में स्थित है। इसका प्रतीक विश्राम और आराम को दर्शाता है (पलंग/झूला)। इसके देवता भग हैं, जो वैवाहिक सुख, भाग्य और समृद्धि के देवता हैं।', 
      en: 'Purva Phalguni is the eleventh Nakshatra, located entirely in Leo. Its symbol denotes relaxation and rest (a bed/hammock). Its deity is Bhaga, the god of marital bliss, luck, and prosperity.' 
    },
    characteristics: { 
      hi: 'इस नक्षत्र में जन्मे लोग जीवन का आनंद लेने वाले, कलात्मक और आरामदायक जीवन शैली पसंद करने वाले होते हैं। वे आकर्षक, मिलनसार और रोमांटिक होते हैं। उन्हें काम के साथ-साथ आराम और मनोरंजन का महत्व पता होता है।', 
      en: 'People born under this Nakshatra love to enjoy life, are artistic, and prefer a comfortable lifestyle. They are charming, sociable, and romantic. They understand the importance of rest and recreation along with work.' 
    },
    strengths: { 
      hi: ['रचनात्मक', 'आकर्षक', 'रोमांटिक', 'आरामदायक (Relaxed)'], 
      en: ['Creative', 'Charming', 'Romantic', 'Relaxed'] 
    },
    challenges: { 
      hi: ['आलस्य', 'अत्यधिक सुख-सुविधाओं की चाह', 'दिखावा करना'], 
      en: ['Laziness', 'Excessive desire for comforts', 'Showing off'] 
    },
    padas: {
      1: { hi: 'पहला चरण सूर्य (सिंह नवांश) द्वारा शासित है, जो व्यक्तित्व में राजसी चमक, आत्मविश्वास और कलात्मक अभिव्यक्ति देता है।', en: 'The first Pada is ruled by the Sun (Leo Navamsha), giving a royal glow to the personality, confidence, and artistic expression.' },
      2: { hi: 'दूसरा चरण बुध (कन्या नवांश) द्वारा शासित है, जो रचनात्मकता में व्यावहारिकता और बुद्धि लाता है।', en: 'The second Pada is ruled by Mercury (Virgo Navamsha), bringing practicality and intellect into creativity.' },
      3: { hi: 'तीसरा चरण शुक्र (तुला नवांश) द्वारा शासित है, जो वैवाहिक सुख, साझेदारी, और सौंदर्य के प्रति अत्यंत आकर्षण प्रदान करता है।', en: 'The third Pada is ruled by Venus (Libra Navamsha), providing marital bliss, partnerships, and extreme attraction towards beauty.' },
      4: { hi: 'चौथा चरण मंगल (वृश्चिक नवांश) द्वारा शासित है, जो जुनून, गहन भावनाएं और कभी-कभी रिश्तों में तीव्रता लाता है।', en: 'The fourth Pada is ruled by Mars (Scorpio Navamsha), bringing passion, intense emotions, and sometimes intensity in relationships.' }
    }
  },
  "uttara-phalguni": {
    slug: 'uttara-phalguni',
    name: { hi: 'उत्तराफाल्गुनी', en: 'Uttara Phalguni' },
    sanskritName: { hi: 'उत्तराफाल्गुनी (Uttara Phalguni)', en: 'Uttara Phalguni' },
    number: 12,
    rulingPlanet: { hi: 'सूर्य (Sun)', en: 'Sun' },
    deity: { hi: 'अर्यमा (Aryaman - God of patronage and unions)', en: 'Aryaman (God of Patronage/Unions)' },
    symbol: { hi: 'पलंग के पीछे के पाये (Back legs of a bed)', en: 'Back legs of a bed' },
    gana: { hi: 'मनुष्य (Manushya)', en: 'Manushya (Human)' },
    yoni: { hi: 'गौ (Cow)', en: 'Gau (Cow)' },
    nadi: { hi: 'आदि (Vata)', en: 'Adi (Vata)' },
    introduction: { 
      hi: 'उत्तराफाल्गुनी बारहवां नक्षत्र है, जिसका विस्तार सिंह और कन्या राशि में है। यह विवाह, दान, अनुबंध और सामाजिक जिम्मेदारी का प्रतीक है। इसके देवता अर्यमा हैं, जो मित्रता, समाज और समझौतों के रक्षक हैं।', 
      en: 'Uttara Phalguni is the twelfth Nakshatra, spanning Leo and Virgo. It symbolizes marriage, charity, contracts, and social responsibility. Its deity is Aryaman, the protector of friendship, society, and agreements.' 
    },
    characteristics: { 
      hi: 'उत्तराफाल्गुनी के जातक उदार, जिम्मेदार और विश्वसनीय मित्र होते हैं। पूर्वाफाल्गुनी की तरह ये भी आरामदायक जीवन पसंद करते हैं, लेकिन इनमें कर्तव्यबोध अधिक होता है। वे अपने वादों के पक्के होते हैं और समाज में सम्मानित होते हैं।', 
      en: 'Natives of Uttara Phalguni are generous, responsible, and reliable friends. Like Purva Phalguni, they enjoy a comfortable life, but possess a much stronger sense of duty. They keep their promises and are respected in society.' 
    },
    strengths: { 
      hi: ['जिम्मेदार', 'विश्वसनीय मित्र', 'उदार', 'वचन के पक्के'], 
      en: ['Responsible', 'Reliable friend', 'Generous', 'True to their word'] 
    },
    challenges: { 
      hi: ['कठोर (Rigid) होना', 'दूसरों से अत्यधिक उम्मीदें रखना', 'अहंकार (कभी-कभी)'], 
      en: ['Being rigid', 'Having extremely high expectations of others', 'Ego (sometimes)'] 
    },
    padas: {
      1: { hi: 'पहला चरण गुरु (धनु नवांश, सिंह राशि) द्वारा शासित है, जो दार्शनिक नेतृत्व, सत्यवादिता और उच्च आदर्श देता है।', en: 'The first Pada is ruled by Jupiter (Sagittarius Navamsha, Leo sign), giving philosophical leadership, truthfulness, and high ideals.' },
      2: { hi: 'दूसरा चरण शनि (मकर नवांश, कन्या राशि) द्वारा शासित है, जो समाज की सेवा में व्यावहारिक संगठन और अनुशासन लाता है।', en: 'The second Pada is ruled by Saturn (Capricorn Navamsha, Virgo sign), bringing practical organization and discipline in the service of society.' },
      3: { hi: 'तीसरा चरण शनि (कुंभ नवांश, कन्या राशि) द्वारा शासित है, जो मानवतावादी लक्ष्य और सामूहिक लाभ के लिए काम करने की प्रवृत्ति देता है।', en: 'The third Pada is ruled by Saturn (Aquarius Navamsha, Virgo sign), giving a tendency to work for humanitarian goals and collective benefit.' },
      4: { hi: 'चौथा चरण गुरु (मीन नवांश, कन्या राशि) द्वारा शासित है, जो करुणा, बौद्धिक गहराई और दूसरों की मदद करने की आध्यात्मिक इच्छा प्रदान करता है।', en: 'The fourth Pada is ruled by Jupiter (Pisces Navamsha, Virgo sign), providing compassion, intellectual depth, and a spiritual desire to help others.' }
    }
  },
  hasta: {
    slug: 'hasta',
    name: { hi: 'हस्त', en: 'Hasta' },
    sanskritName: { hi: 'हस्त (Hasta)', en: 'Hasta' },
    number: 13,
    rulingPlanet: { hi: 'चंद्र (Moon)', en: 'Moon' },
    deity: { hi: 'सवितृ (Savitr - The Sun god associated with dawn)', en: 'Savitr (Sun God of Dawn)' },
    symbol: { hi: 'हाथ / मुट्ठी (Hand / Fist)', en: 'Hand / Fist' },
    gana: { hi: 'देव (Deva)', en: 'Deva (Divine)' },
    yoni: { hi: 'महिष (Buffalo)', en: 'Mahisha (Buffalo)' },
    nadi: { hi: 'आदि (Vata)', en: 'Adi (Vata)' },
    introduction: { 
      hi: 'हस्त तेरहवां नक्षत्र है, जो पूरी तरह से कन्या राशि में स्थित है। इसका प्रतीक "हाथ" या मुट्ठी है, जो हस्तशिल्प, पकड़ने, कुशलता और कर्मठता को दर्शाता है। इसके देवता सवितृ हैं, जो प्रेरणा और नव-जागरण (भोर) के देवता हैं।', 
      en: 'Hasta is the thirteenth Nakshatra, located entirely in Virgo. Its symbol is a "hand" or fist, representing handicrafts, grasping, dexterity, and industriousness. Its deity is Savitr, the god of inspiration and awakening (dawn).' 
    },
    characteristics: { 
      hi: 'हस्त नक्षत्र के लोग बहुत कुशल, मेहनती और व्यावहारिक होते हैं। वे अपने हाथों से काम करने (शिल्प, हीलिंग, लेखन) में माहिर होते हैं। बुध (कन्या राशि) और चंद्र (हस्त के स्वामी) के प्रभाव से वे चतुर और अच्छे संवादकर्ता होते हैं।', 
      en: 'People of Hasta Nakshatra are very skilled, hardworking, and practical. They excel in working with their hands (crafts, healing, writing). The influence of Mercury (Virgo sign) and Moon (Hasta\'s lord) makes them clever and good communicators.' 
    },
    strengths: { 
      hi: ['कुशल (Dexterous)', 'बारीकियों पर ध्यान', 'मेहनती', 'चतुर'], 
      en: ['Dexterous', 'Attention to detail', 'Hardworking', 'Clever'] 
    },
    challenges: { 
      hi: ['अत्यधिक चिंता करना', 'चालबाज़ी', 'मानसिक तनाव'], 
      en: ['Over-worrying', 'Trickery/Cunningness', 'Mental stress'] 
    },
    padas: {
      1: { hi: 'पहला चरण मंगल (मेष नवांश) द्वारा शासित है, जो तेज दिमाग, त्वरित प्रतिक्रिया और शिल्प में ऊर्जा देता है।', en: 'The first Pada is ruled by Mars (Aries Navamsha), giving a sharp mind, quick reflexes, and energy in crafts.' },
      2: { hi: 'दूसरा चरण शुक्र (वृषभ नवांश) द्वारा शासित है, जो कलात्मकता, सौंदर्य और व्यावहारिक सुंदरता को आकार देने की क्षमता लाता है।', en: 'The second Pada is ruled by Venus (Taurus Navamsha), bringing artistry, aesthetics, and the ability to shape practical beauty.' },
      3: { hi: 'तीसरा चरण बुध (मिथुन नवांश) द्वारा शासित है, जो उत्कृष्ट संचार, लेखन क्षमता और व्यापारिक चालाकी प्रदान करता है।', en: 'The third Pada is ruled by Mercury (Gemini Navamsha), providing excellent communication, writing ability, and business cunningness.' },
      4: { hi: 'चौथा चरण चंद्रमा (कर्क नवांश) द्वारा शासित है, जो पारिवारिक जुड़ाव, हीलिंग (अपने हाथों से) और गहरी संवेदनशीलता देता है।', en: 'The fourth Pada is ruled by the Moon (Cancer Navamsha), giving familial connection, healing abilities (through hands), and deep sensitivity.' }
    }
  },
  chitra: {
    slug: 'chitra',
    name: { hi: 'चित्रा', en: 'Chitra' },
    sanskritName: { hi: 'चित्रा (Chitra)', en: 'Chitra' },
    number: 14,
    rulingPlanet: { hi: 'मंगल (Mars)', en: 'Mars' },
    deity: { hi: 'विश्वकर्मा (Vishwakarma - The celestial architect)', en: 'Vishwakarma (Celestial Architect)' },
    symbol: { hi: 'चमकदार मोती / रत्न (Bright Jewel / Pearl)', en: 'Bright Jewel / Pearl' },
    gana: { hi: 'राक्षस (Rakshasa)', en: 'Rakshasa (Demon)' },
    yoni: { hi: 'व्याघ्र (Tiger)', en: 'Vyaghra (Tiger)' },
    nadi: { hi: 'मध्य (Pitta)', en: 'Madhya (Pitta)' },
    introduction: { 
      hi: 'चित्रा चौदहवां नक्षत्र है, जो कन्या और तुला राशि में फैला हुआ है। "चित्रा" का अर्थ है "चमकीला" या "सुंदर चित्र"। इसका प्रतीक चमकता हुआ मोती है। इसके देवता देवताओं के वास्तुकार विश्वकर्मा हैं, जो इसे निर्माण, वास्तुकला और सुंदरता से जोड़ते हैं।', 
      en: 'Chitra is the fourteenth Nakshatra, spanning Virgo and Libra. "Chitra" means "bright" or "beautiful picture." Its symbol is a shining pearl. Its deity is Vishwakarma, the celestial architect, linking it to construction, architecture, and beauty.' 
    },
    characteristics: { 
      hi: 'चित्रा नक्षत्र के जातक बेहद रचनात्मक, कलात्मक और पूर्णतावादी (perfectionist) होते हैं। वे आकर्षक व्यक्तित्व वाले होते हैं और सुंदरता की गहरी समझ रखते हैं। मंगल का प्रभाव उन्हें ऊर्जावान और लक्ष्य-उन्मुख बनाता है।', 
      en: 'Chitra natives are highly creative, artistic, and perfectionists. They possess a charming personality and a deep understanding of beauty. Mars\' influence makes them energetic and goal-oriented.' 
    },
    strengths: { 
      hi: ['रचनात्मक', 'आकर्षक', 'कला और वास्तुकला में रुचि', 'ऊर्जावान'], 
      en: ['Creative', 'Charming', 'Interest in art and architecture', 'Energetic'] 
    },
    challenges: { 
      hi: ['दिखावे पर ज्यादा ध्यान', 'अहंकार', 'हर चीज़ में परफेक्शन की चाहत'], 
      en: ['Too focused on outward appearance', 'Ego', 'Desire for perfection in everything'] 
    },
    padas: {
      1: { hi: 'पहला चरण सूर्य (सिंह नवांश, कन्या राशि) द्वारा शासित है, जो अत्यधिक आत्म-अभिव्यक्ति, चमक और विश्लेषणात्मक पूर्णता देता है।', en: 'The first Pada is ruled by the Sun (Leo Navamsha, Virgo sign), giving extreme self-expression, brilliance, and analytical perfection.' },
      2: { hi: 'दूसरा चरण बुध (कन्या नवांश, कन्या राशि) द्वारा शासित है, जो उत्कृष्ट तकनीकी कौशल, शिल्प कौशल और विवरणों पर ध्यान लाता है।', en: 'The second Pada is ruled by Mercury (Virgo Navamsha, Virgo sign), bringing excellent technical skills, craftsmanship, and attention to detail.' },
      3: { hi: 'तीसरा चरण शुक्र (तुला नवांश, तुला राशि) द्वारा शासित है, जो कला, डिजाइनिंग, कूटनीति और सामाजिक सद्भाव में सफलता प्रदान करता है।', en: 'The third Pada is ruled by Venus (Libra Navamsha, Libra sign), providing success in art, designing, diplomacy, and social harmony.' },
      4: { hi: 'चौथा चरण मंगल (वृश्चिक नवांश, तुला राशि) द्वारा शासित है, जो रहस्यमय सुंदरता, गहरी इच्छाओं और कलात्मक जुनून को दर्शाता है।', en: 'The fourth Pada is ruled by Mars (Scorpio Navamsha, Libra sign), reflecting mysterious beauty, deep desires, and artistic passion.' }
    }
  },
  swati: {
    slug: 'swati',
    name: { hi: 'स्वाति', en: 'Swati' },
    sanskritName: { hi: 'स्वाति (Swati)', en: 'Swati' },
    number: 15,
    rulingPlanet: { hi: 'राहु (Rahu)', en: 'Rahu' },
    deity: { hi: 'वायु (Vayu - The Wind god)', en: 'Vayu (Wind God)' },
    symbol: { hi: 'हवा में झूलता पौधा / मूंगा (Young shoot blowing in the wind / Coral)', en: 'Young shoot blowing in wind / Coral' },
    gana: { hi: 'देव (Deva)', en: 'Deva (Divine)' },
    yoni: { hi: 'महिष (Buffalo)', en: 'Mahisha (Buffalo)' },
    nadi: { hi: 'अंत्य (Kapha)', en: 'Antya (Kapha)' },
    introduction: { 
      hi: 'स्वाति पंद्रहवां नक्षत्र है, जो पूरी तरह से तुला राशि में स्थित है। इसका अर्थ "स्वतंत्र" या "पवित्र" (ओस की पहली बूंद) है। इसके देवता वायु (पवन देव) हैं। यह नक्षत्र स्वतंत्रता, गतिशीलता और कूटनीति का प्रतीक है।', 
      en: 'Swati is the fifteenth Nakshatra, located entirely in Libra. It means "independent" or "pure" (the first drop of dew). Its deity is Vayu (the Wind God). This Nakshatra symbolizes freedom, mobility, and diplomacy.' 
    },
    characteristics: { 
      hi: 'स्वाति नक्षत्र के लोग बहुत ही स्वतंत्र, लचीले और मिलनसार होते हैं। हवा की तरह, वे आसानी से किसी भी परिस्थिति में ढल जाते हैं और उन्हें बांधकर रखना मुश्किल होता है। वे उत्कृष्ट कूटनीतिज्ञ (Diplomat) होते हैं।', 
      en: 'People of Swati Nakshatra are very independent, flexible, and sociable. Like the wind, they easily adapt to any situation and are difficult to tie down. They are excellent diplomats.' 
    },
    strengths: { 
      hi: ['कूटनीतिक', 'स्वतंत्र विचार वाले', 'लचीलापन', 'अच्छे संवादी'], 
      en: ['Diplomatic', 'Independent thinkers', 'Flexible', 'Good communicators'] 
    },
    challenges: { 
      hi: ['निर्णय न ले पाना', 'अस्थिरता', 'बहुत अधिक समझौता करना'], 
      en: ['Indecisiveness', 'Instability', 'Compromising too much'] 
    },
    padas: {
      1: { hi: 'पहला चरण गुरु (धनु नवांश) द्वारा शासित है, जो दार्शनिक सोच, न्याय की भावना और ज्ञान के विस्तार को दर्शाता है।', en: 'The first Pada is ruled by Jupiter (Sagittarius Navamsha), reflecting philosophical thought, a sense of justice, and expansion of knowledge.' },
      2: { hi: 'दूसरा चरण शनि (मकर नवांश) द्वारा शासित है, जो स्वतंत्रता और व्यापारिक महत्वाकांक्षाओं को भौतिक वास्तविकता में बदलता है।', en: 'The second Pada is ruled by Saturn (Capricorn Navamsha), turning independence and business ambitions into material reality.' },
      3: { hi: 'तीसरा चरण शनि (कुंभ नवांश) द्वारा शासित है, जो वैज्ञानिक दृष्टिकोण, मानवतावाद और नवीन कूटनीतिक रणनीतियां लाता है।', en: 'The third Pada is ruled by Saturn (Aquarius Navamsha), bringing a scientific approach, humanitarianism, and innovative diplomatic strategies.' },
      4: { hi: 'चौथा चरण गुरु (मीन नवांश) द्वारा शासित है, जो आध्यात्मिक स्वतंत्रता, गहरी समझ और करुणा प्रदान करता है।', en: 'The fourth Pada is ruled by Jupiter (Pisces Navamsha), providing spiritual freedom, deep understanding, and compassion.' }
    }
  },
  vishakha: {
    slug: 'vishakha',
    name: { hi: 'विशाखा', en: 'Vishakha' },
    sanskritName: { hi: 'विशाखा (Vishakha)', en: 'Vishakha' },
    number: 16,
    rulingPlanet: { hi: 'गुरु (Jupiter)', en: 'Jupiter' },
    deity: { hi: 'इंद्राग्नि (Indragni - Indra and Agni pair)', en: 'Indragni (Indra & Agni)' },
    symbol: { hi: 'तोरण (Triumphal archway) / कुम्हार का चाक (Potter\'s wheel)', en: 'Triumphal archway / Potter\'s wheel' },
    gana: { hi: 'राक्षस (Rakshasa)', en: 'Rakshasa (Demon)' },
    yoni: { hi: 'व्याघ्र (Tiger)', en: 'Vyaghra (Tiger)' },
    nadi: { hi: 'अंत्य (Kapha)', en: 'Antya (Kapha)' },
    introduction: { 
      hi: 'विशाखा सोलहवां नक्षत्र है, जो तुला और वृश्चिक राशि में फैला हुआ है। इसका प्रतीक तोरण (सफलता का प्रवेश द्वार) है। इसके देवता इंद्र (राजा) और अग्नि (तेज) दोनों हैं। यह महत्वकांक्षा, लक्ष्य-प्राप्ति और दृढ़ संकल्प का प्रतीक है।', 
      en: 'Vishakha is the sixteenth Nakshatra, spanning Libra and Scorpio. Its symbol is a triumphal archway (gateway of success). Its deities are both Indra (the King) and Agni (Fire). It symbolizes ambition, goal-achievement, and determination.' 
    },
    characteristics: { 
      hi: 'विशाखा नक्षत्र के जातक अत्यधिक महत्वाकांक्षी और लक्ष्य-उन्मुख होते हैं। वे जो ठान लेते हैं, उसे हासिल करके ही दम लेते हैं। गुरु का प्रभाव उन्हें ज्ञान देता है, लेकिन इन्द्राग्नि की ऊर्जा उन्हें सत्ता और सफलता के लिए उग्र बनाती है।', 
      en: 'Vishakha natives are highly ambitious and goal-oriented. Once they set their mind on something, they don\'t rest until they achieve it. Jupiter\'s influence gives them wisdom, but the energy of Indragni makes them fierce for power and success.' 
    },
    strengths: { 
      hi: ['महत्वाकांक्षी', 'दृढ़ संकल्पी', 'लक्ष्य-उन्मुख', 'नेतृत्व क्षमता'], 
      en: ['Ambitious', 'Determined', 'Goal-oriented', 'Leadership ability'] 
    },
    challenges: { 
      hi: ['ईर्ष्या', 'लक्ष्य के प्रति अत्यधिक जुनूनी', 'असंतोष'], 
      en: ['Jealousy', 'Overly obsessed with goals', 'Dissatisfaction'] 
    },
    padas: {
      1: { hi: 'पहला चरण मंगल (मेष नवांश, तुला राशि) द्वारा शासित है, जो अपार ऊर्जा, मुखरता और महत्वाकांक्षाओं को आक्रामक रूप से प्राप्त करने की इच्छा देता है।', en: 'The first Pada is ruled by Mars (Aries Navamsha, Libra sign), giving immense energy, assertiveness, and a desire to aggressively achieve ambitions.' },
      2: { hi: 'दूसरा चरण शुक्र (वृषभ नवांश, तुला राशि) द्वारा शासित है, जो भौतिक सफलता, कला, और सामाजिक संबंधों के माध्यम से लक्ष्यों को प्राप्त करने पर केंद्रित है।', en: 'The second Pada is ruled by Venus (Taurus Navamsha, Libra sign), focusing on achieving goals through material success, art, and social connections.' },
      3: { hi: 'तीसरा चरण बुध (मिथुन नवांश, तुला राशि) द्वारा शासित है, जो कूटनीति, उत्कृष्ट संचार कौशल और चतुर रणनीतियों के माध्यम से सफलता दिलाता है।', en: 'The third Pada is ruled by Mercury (Gemini Navamsha, Libra sign), bringing success through diplomacy, excellent communication skills, and clever strategies.' },
      4: { hi: 'चौथा चरण चंद्रमा (कर्क नवांश, वृश्चिक राशि) द्वारा शासित है, जो तीव्र भावनाओं, रहस्यों को समझने की क्षमता और गहरे दृढ़ संकल्प को दर्शाता है।', en: 'The fourth Pada is ruled by the Moon (Cancer Navamsha, Scorpio sign), reflecting intense emotions, the ability to understand mysteries, and deep determination.' }
    }
  },
  anuradha: {
    slug: 'anuradha',
    name: { hi: 'अनुराधा', en: 'Anuradha' },
    sanskritName: { hi: 'अनुराधा (Anuradha)', en: 'Anuradha' },
    number: 17,
    rulingPlanet: { hi: 'शनि (Saturn)', en: 'Saturn' },
    deity: { hi: 'मित्र (Mitra - God of friendship and cooperation)', en: 'Mitra (God of Friendship)' },
    symbol: { hi: 'कमल (Lotus) / तोरण (Triumphal archway)', en: 'Lotus / Triumphal archway' },
    gana: { hi: 'देव (Deva)', en: 'Deva (Divine)' },
    yoni: { hi: 'मृग (Deer)', en: 'Mriga (Deer)' },
    nadi: { hi: 'मध्य (Pitta)', en: 'Madhya (Pitta)' },
    introduction: { 
      hi: 'अनुराधा सत्रहवां नक्षत्र है, जो पूरी तरह से वृश्चिक राशि में स्थित है। इसका प्रतीक कमल का फूल है, जो कीचड़ (कठिन परिस्थितियों) में भी खिलने (सफलता) को दर्शाता है। इसके देवता "मित्र" हैं, जो सहयोग और दोस्ती के देवता हैं।', 
      en: 'Anuradha is the seventeenth Nakshatra, located entirely in Scorpio. Its symbol is a lotus flower, signifying blooming (success) even in mud (difficult circumstances). Its deity is "Mitra", the god of cooperation and friendship.' 
    },
    characteristics: { 
      hi: 'अनुराधा नक्षत्र के जातक मिलनसार, संगठनात्मक और यात्रा प्रेमी होते हैं। वृश्चिक राशि की गहनता और शनि (नक्षत्र स्वामी) के अनुशासन का मेल उन्हें बहुत ही सफल बनाता है। वे मित्रता और सहयोग के माध्यम से आगे बढ़ते हैं।', 
      en: 'Natives of Anuradha Nakshatra are sociable, organizational, and love traveling. The combination of Scorpio\'s intensity and Saturn\'s (Nakshatra lord) discipline makes them highly successful. They progress through friendship and cooperation.' 
    },
    strengths: { 
      hi: ['मिलनसार', 'समर्पित', 'कठोर परिस्थितियों में पनपने की क्षमता', 'सहयोग करने वाले'], 
      en: ['Sociable', 'Dedicated', 'Ability to thrive in tough conditions', 'Cooperative'] 
    },
    challenges: { 
      hi: ['अत्यधिक उदासी (Melancholy)', 'नियंत्रण की चाह', 'रहस्यमयी स्वभाव'], 
      en: ['Extreme melancholy', 'Desire to control', 'Secretive nature'] 
    },
    padas: {
      1: { hi: 'पहला चरण सूर्य (सिंह नवांश) द्वारा शासित है, जो आत्मविश्वास, नेतृत्व और अपने दोस्तों के बीच केंद्र बिंदु बनने की इच्छा देता है।', en: 'The first Pada is ruled by the Sun (Leo Navamsha), giving confidence, leadership, and a desire to be the focal point among friends.' },
      2: { hi: 'दूसरा चरण बुध (कन्या नवांश) द्वारा शासित है, जो विश्लेषणात्मक कौशल, तार्किकता और संगठन के माध्यम से सफलता लाता है।', en: 'The second Pada is ruled by Mercury (Virgo Navamsha), bringing success through analytical skills, logic, and organization.' },
      3: { hi: 'तीसरा चरण शुक्र (तुला नवांश) द्वारा शासित है, जो सद्भाव, कला, और साझेदारी या समूहों के माध्यम से बड़ी सफलता प्रदान करता है।', en: 'The third Pada is ruled by Venus (Libra Navamsha), providing grand success through harmony, art, and partnerships or groups.' },
      4: { hi: 'चौथा चरण मंगल (वृश्चिक नवांश) द्वारा शासित है, जो रहस्यवाद, गहरी आध्यात्मिक ऊर्जा और लक्ष्यों को प्राप्त करने के लिए अत्यधिक जुनून देता है।', en: 'The fourth Pada is ruled by Mars (Scorpio Navamsha), giving mysticism, deep spiritual energy, and extreme passion for achieving goals.' }
    }
  },
  jyeshtha: {
    slug: 'jyeshtha',
    name: { hi: 'ज्येष्ठा', en: 'Jyeshtha' },
    sanskritName: { hi: 'ज्येष्ठा (Jyeshtha)', en: 'Jyeshtha' },
    number: 18,
    rulingPlanet: { hi: 'बुध (Mercury)', en: 'Mercury' },
    deity: { hi: 'इंद्र (Indra - King of the gods)', en: 'Indra (King of the Gods)' },
    symbol: { hi: 'छतरी (Umbrella) / ताबीज (Talisman)', en: 'Umbrella / Talisman' },
    gana: { hi: 'राक्षस (Rakshasa)', en: 'Rakshasa (Demon)' },
    yoni: { hi: 'मृग (Deer)', en: 'Mriga (Deer)' },
    nadi: { hi: 'आदि (Vata)', en: 'Adi (Vata)' },
    introduction: { 
      hi: 'ज्येष्ठा अठारहवां नक्षत्र है, जो पूरी तरह से वृश्चिक राशि में स्थित है (यह एक गंडमूल नक्षत्र है)। "ज्येष्ठा" का अर्थ है "सबसे बड़ा" या "वरिष्ठ"। इसका प्रतीक छतरी (सुरक्षा और सत्ता) है। इसके देवता इंद्र (देवराज) हैं।', 
      en: 'Jyeshtha is the eighteenth Nakshatra, located entirely in Scorpio (it is a Gandamool Nakshatra). "Jyeshtha" means "the eldest" or "senior most." Its symbol is an umbrella (protection and power). Its deity is Indra (King of Gods).' 
    },
    characteristics: { 
      hi: 'ज्येष्ठा नक्षत्र के लोग बहुत परिपक्व, रक्षा करने वाले और सत्ता प्राप्त करने के इच्छुक होते हैं। वे अक्सर अपने परिवार या समूह में "वरिष्ठ" की भूमिका निभाते हैं। बुध और वृश्चिक के प्रभाव से उनकी बुद्धि बहुत तीक्ष्ण और विश्लेषणात्मक होती है।', 
      en: 'People of Jyeshtha Nakshatra are very mature, protective, and desirous of power. They often play the role of the "senior" in their family or group. The influence of Mercury and Scorpio makes their intellect very sharp and analytical.' 
    },
    strengths: { 
      hi: ['नेतृत्व', 'परिपक्वता', 'सुरक्षात्मक', 'तीक्ष्ण बुद्धि'], 
      en: ['Leadership', 'Maturity', 'Protective', 'Sharp intellect'] 
    },
    challenges: { 
      hi: ['अहंकार', 'सत्ता का मोह', 'क्रोध', 'जल्दी आहत हो जाना'], 
      en: ['Ego', 'Lust for power', 'Anger', 'Easily hurt'] 
    },
    padas: {
      1: { hi: 'पहला चरण गुरु (धनु नवांश) द्वारा शासित है, जो उच्च आदर्शों, ज्ञान और समाज में एक सम्मानित वरिष्ठ व्यक्ति की स्थिति देता है।', en: 'The first Pada is ruled by Jupiter (Sagittarius Navamsha), giving high ideals, wisdom, and the status of a respected senior in society.' },
      2: { hi: 'दूसरा चरण शनि (मकर नवांश) द्वारा शासित है, जो अत्यधिक जिम्मेदारी, सत्ता के लिए कठोर परिश्रम और अनुशासन लाता है।', en: 'The second Pada is ruled by Saturn (Capricorn Navamsha), bringing immense responsibility, hard work for power, and discipline.' },
      3: { hi: 'तीसरा चरण शनि (कुंभ नवांश) द्वारा शासित है, जो वैज्ञानिक सोच, नवीनता और समाज के लिए अपनी सत्ता/बुद्धि का उपयोग करने की प्रवृत्ति देता है।', en: 'The third Pada is ruled by Saturn (Aquarius Navamsha), giving scientific thought, innovation, and a tendency to use power/intellect for society.' },
      4: { hi: 'चौथा चरण गुरु (मीन नवांश) द्वारा शासित है, जो भौतिक सत्ता से परे जाकर आध्यात्मिक नेतृत्व और रहस्यवाद में गहराई प्रदान करता है।', en: 'The fourth Pada is ruled by Jupiter (Pisces Navamsha), providing a shift beyond material power into spiritual leadership and depth in mysticism.' }
    }
  },
  mula: {
    slug: 'mula',
    name: { hi: 'मूल', en: 'Mula' },
    sanskritName: { hi: 'मूल (Mula)', en: 'Mula' },
    number: 19,
    rulingPlanet: { hi: 'केतु (Ketu)', en: 'Ketu' },
    deity: { hi: 'निरृति (Nirriti - Goddess of dissolution)', en: 'Nirriti (Goddess of dissolution)' },
    symbol: { hi: 'जड़ों का गुच्छा (Bunch of roots)', en: 'Bunch of roots' },
    gana: { hi: 'राक्षस (Rakshasa)', en: 'Rakshasa (Demon)' },
    yoni: { hi: 'श्वान (Dog)', en: 'Shwan (Dog)' },
    nadi: { hi: 'आदि (Vata)', en: 'Adi (Vata)' },
    introduction: { 
      hi: 'मूल उन्नीसवां नक्षत्र है, जो पूरी तरह से धनु राशि में स्थित है (यह एक महत्वपूर्ण गंडमूल नक्षत्र है)। "मूल" का अर्थ है "जड़"। इसका प्रतीक जड़ों का गुच्छा है, जो चीजों की गहराई तक जाने को दर्शाता है। इसकी देवी निरृति (विनाश की देवी) हैं।', 
      en: 'Mula is the nineteenth Nakshatra, located entirely in Sagittarius (it is an important Gandamool Nakshatra). "Mula" means "root." Its symbol is a tied bunch of roots, representing going to the core of things. Its deity is Nirriti (Goddess of dissolution).' 
    },
    characteristics: { 
      hi: 'मूल नक्षत्र के जातक सत्य की खोज करने वाले, दार्शनिक और चीजों की तह तक जाने वाले होते हैं। वे पुरानी चीजों (या विचारों) को नष्ट करके नई शुरुआत करने में सक्षम होते हैं। उनका जीवन अक्सर बड़े बदलावों से भरा होता है।', 
      en: 'Mula individuals are truth-seekers, philosophical, and driven to get to the bottom of things. They are capable of destroying old things (or concepts) to make a fresh start. Their lives are often filled with major transformations.' 
    },
    strengths: { 
      hi: ['गहरे विचारक', 'सत्य के खोजी', 'साहसी', 'दृढ़ संकल्पी'], 
      en: ['Deep thinkers', 'Truth seekers', 'Courageous', 'Determined'] 
    },
    challenges: { 
      hi: ['कठोरता', 'विनाशकारी प्रवृत्तियां', 'अस्थिरता'], 
      en: ['Harshness', 'Destructive tendencies', 'Instability'] 
    },
    padas: {
      1: { hi: 'पहला चरण मंगल (मेष नवांश) द्वारा शासित है, जो सच्चाई को उजागर करने के लिए आक्रामक दृष्टिकोण और अपार ऊर्जा देता है।', en: 'The first Pada is ruled by Mars (Aries Navamsha), giving an aggressive approach and immense energy to uncover the truth.' },
      2: { hi: 'दूसरा चरण शुक्र (वृषभ नवांश) द्वारा शासित है, जो भौतिक स्थिरता की खोज और कला या सौंदर्य की जड़ों तक जाने की इच्छा लाता है।', en: 'The second Pada is ruled by Venus (Taurus Navamsha), bringing a search for material stability and a desire to go to the roots of art or beauty.' },
      3: { hi: 'तीसरा चरण बुध (मिथुन नवांश) द्वारा शासित है, जो अनुसंधान, उत्कृष्ट संवाद और विचारों के मूल को समझने की क्षमता प्रदान करता है।', en: 'The third Pada is ruled by Mercury (Gemini Navamsha), providing research, excellent communication, and the ability to understand the core of ideas.' },
      4: { hi: 'चौथा चरण चंद्रमा (कर्क नवांश) द्वारा शासित है, जो गहरी भावनात्मक समझ, हीलिंग और आध्यात्मिक परिवर्तन (Transformation) की ओर ले जाता है।', en: 'The fourth Pada is ruled by the Moon (Cancer Navamsha), leading to deep emotional understanding, healing, and spiritual transformation.' }
    }
  },
  "purva-ashadha": {
    slug: 'purva-ashadha',
    name: { hi: 'पूर्वाषाढ़ा', en: 'Purva Ashadha' },
    sanskritName: { hi: 'पूर्वाषाढ़ा (Purva Ashadha)', en: 'Purva Ashadha' },
    number: 20,
    rulingPlanet: { hi: 'शुक्र (Venus)', en: 'Venus' },
    deity: { hi: 'आपः (Apah - The Water god)', en: 'Apah (God of Water)' },
    symbol: { hi: 'हाथी का दांत (Elephant tusk) / पंखा (Fan)', en: 'Elephant tusk / Fan' },
    gana: { hi: 'मनुष्य (Manushya)', en: 'Manushya (Human)' },
    yoni: { hi: 'वानर (Monkey)', en: 'Vanara (Monkey)' },
    nadi: { hi: 'मध्य (Pitta)', en: 'Madhya (Pitta)' },
    introduction: { 
      hi: 'पूर्वाषाढ़ा बीसवां नक्षत्र है, जो पूरी तरह से धनु राशि में स्थित है। इसका अर्थ है "अपराजेय" (The Invincible One)। इसका प्रतीक हाथी का दांत या हाथ का पंखा है। इसके देवता "आपः" (जल के देवता) हैं, जो भावना, सफाई और प्रवाह का प्रतीक हैं।', 
      en: 'Purva Ashadha is the twentieth Nakshatra, located entirely in Sagittarius. It means "The Invincible One." Its symbol is an elephant tusk or a hand fan. Its deity is "Apah" (the Water God), symbolizing emotion, cleansing, and flow.' 
    },
    characteristics: { 
      hi: 'पूर्वाषाढ़ा नक्षत्र के लोग बहुत ही स्वतंत्र, साहसी और आसानी से हार न मानने वाले (अपराजेय) होते हैं। शुक्र के प्रभाव के कारण वे कलात्मक और जीवन का आनंद लेने वाले होते हैं, लेकिन धनु राशि उन्हें उच्च आदर्श भी देती है।', 
      en: 'People of Purva Ashadha Nakshatra are very independent, courageous, and do not give up easily (invincible). Due to Venus\' influence, they are artistic and enjoy life, but the Sagittarius sign also gives them high ideals.' 
    },
    strengths: { 
      hi: ['अपराजेय भावना', 'आशावादी', 'कलात्मक', 'प्रेरक'], 
      en: ['Invincible spirit', 'Optimistic', 'Artistic', 'Inspiring'] 
    },
    challenges: { 
      hi: ['जिद्दीपन', 'अत्यधिक बहस करने की प्रवृत्ति', 'कभी-कभी अव्यावहारिक'], 
      en: ['Stubbornness', 'Tendency to argue excessively', 'Sometimes impractical'] 
    },
    padas: {
      1: { hi: 'पहला चरण सूर्य (सिंह नवांश) द्वारा शासित है, जो अपार आत्मविश्वास, नेतृत्व और अपनी मान्यताओं के प्रति गर्व (Proud) देता है।', en: 'The first Pada is ruled by the Sun (Leo Navamsha), giving immense self-confidence, leadership, and pride in one\'s beliefs.' },
      2: { hi: 'दूसरा चरण बुध (कन्या नवांश) द्वारा शासित है, जो तार्किकता, व्यावहारिक दृष्टिकोण और उच्च ज्ञान को लागू करने की क्षमता लाता है।', en: 'The second Pada is ruled by Mercury (Virgo Navamsha), bringing logic, practical outlook, and the ability to apply higher knowledge.' },
      3: { hi: 'तीसरा चरण शुक्र (तुला नवांश) द्वारा शासित है, जो सौंदर्यशास्त्र, साझेदारी और सामाजिक सद्भाव के माध्यम से जीत प्राप्त करने पर केंद्रित है।', en: 'The third Pada is ruled by Venus (Libra Navamsha), focusing on achieving victory through aesthetics, partnerships, and social harmony.' },
      4: { hi: 'चौथा चरण मंगल (वृश्चिक नवांश) द्वारा शासित है, जो रहस्यवाद, गहन भावनाओं और सत्य के लिए दृढ़ता से लड़ने का जुनून प्रदान करता है।', en: 'The fourth Pada is ruled by Mars (Scorpio Navamsha), providing mysticism, intense emotions, and a passion to fight fiercely for the truth.' }
    }
  },
  "uttara-ashadha": {
    slug: 'uttara-ashadha',
    name: { hi: 'उत्तराषाढ़ा', en: 'Uttara Ashadha' },
    sanskritName: { hi: 'उत्तराषाढ़ा (Uttara Ashadha)', en: 'Uttara Ashadha' },
    number: 21,
    rulingPlanet: { hi: 'सूर्य (Sun)', en: 'Sun' },
    deity: { hi: 'विश्वेदेव (Vishwadevas - The Universal gods)', en: 'Vishwadevas (Universal Gods)' },
    symbol: { hi: 'हाथी का दांत (Elephant tusk)', en: 'Elephant tusk' },
    gana: { hi: 'मनुष्य (Manushya)', en: 'Manushya (Human)' },
    yoni: { hi: 'नकुल (Mongoose)', en: 'Nakula (Mongoose)' },
    nadi: { hi: 'अंत्य (Kapha)', en: 'Antya (Kapha)' },
    introduction: { 
      hi: 'उत्तराषाढ़ा इक्कीसवां नक्षत्र है, जिसका विस्तार धनु और मकर राशि में है। यह भी "अपराजेयता" का प्रतीक है, लेकिन यह अधिक परिपक्व और धर्म-उन्मुख है। इसके देवता विश्वेदेव (सार्वभौमिक देवता) हैं, जो इसे सामूहिक अच्छाई और नेतृत्व से जोड़ते हैं।', 
      en: 'Uttara Ashadha is the twenty-first Nakshatra, spanning Sagittarius and Capricorn. It also symbolizes "invincibility," but is more mature and dharma-oriented. Its deities are the Vishwadevas (Universal Gods), linking it to collective goodness and leadership.' 
    },
    characteristics: { 
      hi: 'उत्तराषाढ़ा के जातक बहुत ही जिम्मेदार, नैतिक और दृढ़ निश्चयी होते हैं। वे अपने काम के प्रति अत्यधिक समर्पित होते हैं। वे समाज में एक सम्मानित स्थान प्राप्त करते हैं और अंततः स्थायी सफलता (अपराजेयता) हासिल करते हैं।', 
      en: 'Natives of Uttara Ashadha are very responsible, ethical, and determined. They are highly dedicated to their work. They achieve a respected position in society and ultimately attain lasting success (invincibility).' 
    },
    strengths: { 
      hi: ['नेतृत्व', 'जिम्मेदारी', 'सहिष्णुता', 'स्थायी सफलता'], 
      en: ['Leadership', 'Responsibility', 'Tolerance', 'Lasting success'] 
    },
    challenges: { 
      hi: ['अत्यधिक गंभीरता', 'कठोरता', 'अकेले काम करने की जिद'], 
      en: ['Extreme seriousness', 'Rigidity', 'Stubbornness to work alone'] 
    },
    padas: {
      1: { hi: 'पहला चरण गुरु (धनु नवांश, धनु राशि) द्वारा शासित है, जो मजबूत नैतिक मूल्य, दार्शनिक दृष्टिकोण और ज्ञान के माध्यम से सफलता देता है।', en: 'The first Pada is ruled by Jupiter (Sagittarius Navamsha, Sagittarius sign), giving strong moral values, philosophical outlook, and success through wisdom.' },
      2: { hi: 'दूसरा चरण शनि (मकर नवांश, मकर राशि) द्वारा शासित है, जो अत्यधिक अनुशासन, कड़ी मेहनत और करियर में महत्वाकांक्षा लाता है।', en: 'The second Pada is ruled by Saturn (Capricorn Navamsha, Capricorn sign), bringing extreme discipline, hard work, and ambition in career.' },
      3: { hi: 'तीसरा चरण शनि (कुंभ नवांश, मकर राशि) द्वारा शासित है, जो समाज के उत्थान, मानवतावाद और नवीन विचारों को लागू करने की क्षमता प्रदान करता है।', en: 'The third Pada is ruled by Saturn (Aquarius Navamsha, Capricorn sign), providing the ability to uplift society, humanitarianism, and implement innovative ideas.' },
      4: { hi: 'चौथा चरण गुरु (मीन नवांश, मकर राशि) द्वारा शासित है, जो भौतिक सफलताओं के साथ-साथ आध्यात्मिक समझ और करुणा देता है।', en: 'The fourth Pada is ruled by Jupiter (Pisces Navamsha, Capricorn sign), giving spiritual understanding and compassion along with material successes.' }
    }
  },
  shravana: {
    slug: 'shravana',
    name: { hi: 'श्रवण', en: 'Shravana' },
    sanskritName: { hi: 'श्रवण (Shravana)', en: 'Shravana' },
    number: 22,
    rulingPlanet: { hi: 'चंद्र (Moon)', en: 'Moon' },
    deity: { hi: 'विष्णु (Vishnu - The Preserver)', en: 'Vishnu (The Preserver)' },
    symbol: { hi: 'कान (Ear) / तीन पैरों के निशान (Three footprints)', en: 'Ear / Three footprints' },
    gana: { hi: 'देव (Deva)', en: 'Deva (Divine)' },
    yoni: { hi: 'वानर (Monkey)', en: 'Vanara (Monkey)' },
    nadi: { hi: 'अंत्य (Kapha)', en: 'Antya (Kapha)' },
    introduction: { 
      hi: 'श्रवण बाईसवां नक्षत्र है, जो पूरी तरह से मकर राशि में आता है। "श्रवण" का अर्थ है "सुनना"। इसका प्रतीक "कान" है, जो ज्ञान को ग्रहण करने की क्षमता को दर्शाता है। इसके देवता भगवान विष्णु (पालनकर्ता) हैं।', 
      en: 'Shravana is the twenty-second Nakshatra, located entirely in Capricorn. "Shravana" means "hearing" or "listening." Its symbol is an "ear," signifying the ability to receive knowledge. Its deity is Lord Vishnu (The Preserver).' 
    },
    characteristics: { 
      hi: 'श्रवण नक्षत्र के लोग महान श्रोता, विद्वान और ज्ञानी होते हैं। वे दूसरों की बातों को ध्यान से सुनते हैं और ज्ञान अर्जित करना उन्हें पसंद है। वे बहुत ही शांत, जिम्मेदार और समाज के कल्याण के लिए काम करने वाले होते हैं।', 
      en: 'People of Shravana Nakshatra are great listeners, scholarly, and knowledgeable. They listen carefully to others and love acquiring wisdom. They are very calm, responsible, and work for the welfare of society.' 
    },
    strengths: { 
      hi: ['अच्छे श्रोता', 'बुद्धिमान', 'शांत', 'समाज के लिए उपयोगी'], 
      en: ['Good listeners', 'Intelligent', 'Calm', 'Useful to society'] 
    },
    challenges: { 
      hi: ['गपशप या अफवाहों में पड़ना', 'अत्यधिक संवेदनशील', 'अकेलेपन की प्रवृत्ति'], 
      en: ['Falling into gossip or rumors', 'Overly sensitive', 'Tendency towards isolation'] 
    },
    padas: {
      1: { hi: 'पहला चरण मंगल (मेष नवांश) द्वारा शासित है, जो तार्किक बहस करने की क्षमता, साहस और तेजी से सीखने की प्रवृत्ति देता है।', en: 'The first Pada is ruled by Mars (Aries Navamsha), giving the ability for logical debate, courage, and a tendency to learn quickly.' },
      2: { hi: 'दूसरा चरण शुक्र (वृषभ नवांश) द्वारा शासित है, जो कला, संगीत, वाणी में मधुरता और संगठनात्मक कौशल लाता है।', en: 'The second Pada is ruled by Venus (Taurus Navamsha), bringing art, music, sweetness in speech, and organizational skills.' },
      3: { hi: 'तीसरा चरण बुध (मिथुन नवांश) द्वारा शासित है, जो उत्कृष्ट संचार, मीडिया, पत्रकारिता और बहुमुखी ज्ञान प्रदान करता है।', en: 'The third Pada is ruled by Mercury (Gemini Navamsha), providing excellent communication, media, journalism, and versatile knowledge.' },
      4: { hi: 'चौथा चरण चंद्रमा (कर्क नवांश) द्वारा शासित है, जो गहरी सहानुभूति, जनसेवा की इच्छा और अत्यधिक संवेदनशीलता देता है।', en: 'The fourth Pada is ruled by the Moon (Cancer Navamsha), giving deep empathy, a desire for public service, and extreme sensitivity.' }
    }
  },
  dhanishtha: {
    slug: 'dhanishtha',
    name: { hi: 'धनिष्ठा', en: 'Dhanishtha' },
    sanskritName: { hi: 'धनिष्ठा (Dhanishtha)', en: 'Dhanishtha' },
    number: 23,
    rulingPlanet: { hi: 'मंगल (Mars)', en: 'Mars' },
    deity: { hi: 'अष्ट वसु (Eight Vasus - Deities of earthly abundance)', en: 'Eight Vasus (Deities of abundance)' },
    symbol: { hi: 'डमरू (Drum) / बांसुरी (Flute)', en: 'Drum / Flute' },
    gana: { hi: 'राक्षस (Rakshasa)', en: 'Rakshasa (Demon)' },
    yoni: { hi: 'सिंह (Lion)', en: 'Simha (Lion)' },
    nadi: { hi: 'मध्य (Pitta)', en: 'Madhya (Pitta)' },
    introduction: { 
      hi: 'धनिष्ठा तेईसवां नक्षत्र है, जिसका विस्तार मकर और कुंभ राशि में है। "धनिष्ठा" का अर्थ है "सबसे धनी"। इसका प्रतीक डमरू या बांसुरी (ताल और संगीत) है। इसके देवता अष्ट वसु हैं, जो भौतिक प्रचुरता के देवता माने जाते हैं।', 
      en: 'Dhanishtha is the twenty-third Nakshatra, spanning Capricorn and Aquarius. "Dhanishtha" means "the wealthiest." Its symbol is a drum (Damaru) or flute (rhythm and music). Its deities are the Eight Vasus, gods of material abundance.' 
    },
    characteristics: { 
      hi: 'धनिष्ठा नक्षत्र वाले लोग संगीत, ताल और कला के प्रेमी होते हैं। वे अत्यधिक महत्वाकांक्षी, ऊर्जावान और संगठनात्मक होते हैं। मंगल के प्रभाव के कारण वे किसी भी चुनौती का सामना करने से नहीं डरते और अक्सर समाज में प्रसिद्ध होते हैं।', 
      en: 'Dhanishtha individuals are lovers of music, rhythm, and art. They are highly ambitious, energetic, and organizational. Due to Mars\' influence, they do not fear facing challenges and often become famous in society.' 
    },
    strengths: { 
      hi: ['संगीत और कला में रुचि', 'महत्वाकांक्षी', 'धन और प्रसिद्धि आकर्षित करने वाले', 'साहसी'], 
      en: ['Interest in music and art', 'Ambitious', 'Attracts wealth and fame', 'Courageous'] 
    },
    challenges: { 
      hi: ['कठोरता', 'रिश्तों में समस्या', 'अहंकार'], 
      en: ['Harshness', 'Problems in relationships', 'Ego'] 
    },
    padas: {
      1: { hi: 'पहला चरण सूर्य (सिंह नवांश, मकर राशि) द्वारा शासित है, जो अपार सफलता, नेतृत्व क्षमता और महत्वाकांक्षाओं को आक्रामक रूप से प्राप्त करने की इच्छा देता है।', en: 'The first Pada is ruled by the Sun (Leo Navamsha, Capricorn sign), giving immense success, leadership ability, and a desire to aggressively achieve ambitions.' },
      2: { hi: 'दूसरा चरण बुध (कन्या नवांश, मकर राशि) द्वारा शासित है, जो उत्कृष्ट तार्किक कौशल, संचार क्षमता और तकनीकी निपुणता लाता है।', en: 'The second Pada is ruled by Mercury (Virgo Navamsha, Capricorn sign), bringing excellent logical skills, communication ability, and technical mastery.' },
      3: { hi: 'तीसरा चरण शुक्र (तुला नवांश, कुंभ राशि) द्वारा शासित है, जो कला, संगीत, सामाजिक समूहों के साथ काम करने और सौंदर्यशास्त्र में सफलता प्रदान करता है।', en: 'The third Pada is ruled by Venus (Libra Navamsha, Aquarius sign), providing success in art, music, working with social groups, and aesthetics.' },
      4: { hi: 'चौथा चरण मंगल (वृश्चिक नवांश, कुंभ राशि) द्वारा शासित है, जो तीव्र ऊर्जा, अनुसंधान क्षमता और समाज में बड़े बदलाव लाने का जुनून देता है।', en: 'The fourth Pada is ruled by Mars (Scorpio Navamsha, Aquarius sign), giving intense energy, research ability, and a passion to bring major changes in society.' }
    }
  },
  shatabhisha: {
    slug: 'shatabhisha',
    name: { hi: 'शतभिषा', en: 'Shatabhisha' },
    sanskritName: { hi: 'शतभिषा (Shatabhisha)', en: 'Shatabhisha' },
    number: 24,
    rulingPlanet: { hi: 'राहु (Rahu)', en: 'Rahu' },
    deity: { hi: 'वरुण (Varuna - God of the cosmic waters)', en: 'Varuna (God of cosmic waters)' },
    symbol: { hi: 'खाली घेरा (Empty circle) / 100 चिकित्सक', en: 'Empty circle / 100 physicians' },
    gana: { hi: 'राक्षस (Rakshasa)', en: 'Rakshasa (Demon)' },
    yoni: { hi: 'अश्व (Horse)', en: 'Ashwa (Horse)' },
    nadi: { hi: 'आदि (Vata)', en: 'Adi (Vata)' },
    introduction: { 
      hi: 'शतभिषा चौबीसवां नक्षत्र है, जो पूरी तरह से कुंभ राशि में स्थित है। "शतभिषा" का अर्थ है "सौ चिकित्सक" या "सौ उपचारक"। इसका प्रतीक एक खाली घेरा है, जो रहस्य, शून्यता और अनंतता को दर्शाता है। इसके देवता वरुण हैं।', 
      en: 'Shatabhisha is the twenty-fourth Nakshatra, located entirely in Aquarius. "Shatabhisha" means "a hundred physicians" or "a hundred healers." Its symbol is an empty circle, representing mystery, void, and infinity. Its deity is Varuna.' 
    },
    characteristics: { 
      hi: 'शतभिषा नक्षत्र के जातक बहुत ही रहस्यमयी, स्वतंत्र और गहराई से सोचने वाले होते हैं। उनमें प्राकृतिक रूप से उपचार (हीलिंग) की क्षमता होती है। राहु के प्रभाव के कारण इनकी सोच वैज्ञानिक, विद्रोही या अपरंपरागत हो सकती है।', 
      en: 'Shatabhisha natives are very mysterious, independent, and deep thinkers. They possess a natural ability for healing. Due to Rahu\'s influence, their thinking can be scientific, rebellious, or unconventional.' 
    },
    strengths: { 
      hi: ['उपचार क्षमता (Healing)', 'वैज्ञानिक दृष्टिकोण', 'स्वतंत्र विचार', 'रहस्यों को सुलझाने वाले'], 
      en: ['Healing ability', 'Scientific outlook', 'Independent thought', 'Unravelers of mysteries'] 
    },
    challenges: { 
      hi: ['अकेलापन', 'जिद्दी स्वभाव', 'भावनाओं को व्यक्त न कर पाना'], 
      en: ['Loneliness', 'Stubborn nature', 'Inability to express emotions'] 
    },
    padas: {
      1: { hi: 'पहला चरण गुरु (धनु नवांश) द्वारा शासित है, जो दार्शनिक दृष्टिकोण, चिकित्सा ज्ञान और सत्य की खोज करने की प्रवृत्ति देता है।', en: 'The first Pada is ruled by Jupiter (Sagittarius Navamsha), giving a philosophical outlook, medical knowledge, and a tendency to seek the truth.' },
      2: { hi: 'दूसरा चरण शनि (मकर नवांश) द्वारा शासित है, जो अत्यंत व्यावहारिक सोच, अनुशासन और संगठनात्मक कौशल के माध्यम से लक्ष्य प्राप्ति लाता है।', en: 'The second Pada is ruled by Saturn (Capricorn Navamsha), bringing goal achievement through highly practical thinking, discipline, and organizational skills.' },
      3: { hi: 'तीसरा चरण शनि (कुंभ नवांश) द्वारा शासित है, जो वैज्ञानिक प्रतिभा, अपरंपरागत विचारों और मानवता की सेवा करने की इच्छा प्रदान करता है।', en: 'The third Pada is ruled by Saturn (Aquarius Navamsha), providing scientific brilliance, unconventional ideas, and a desire to serve humanity.' },
      4: { hi: 'चौथा चरण गुरु (मीन नवांश) द्वारा शासित है, जो अत्यधिक अंतर्ज्ञान, करुणा और आध्यात्मिक हीलिंग की क्षमता देता है।', en: 'The fourth Pada is ruled by Jupiter (Pisces Navamsha), giving extreme intuition, compassion, and the capacity for spiritual healing.' }
    }
  },
  "purva-bhadrapada": {
    slug: 'purva-bhadrapada',
    name: { hi: 'पूर्वाभाद्रपद', en: 'Purva Bhadrapada' },
    sanskritName: { hi: 'पूर्वाभाद्रपद (Purva Bhadrapada)', en: 'Purva Bhadrapada' },
    number: 25,
    rulingPlanet: { hi: 'गुरु (Jupiter)', en: 'Jupiter' },
    deity: { hi: 'अजैकपाद (Aja Ekapada - One-footed goat)', en: 'Aja Ekapada (One-footed goat)' },
    symbol: { hi: 'दो चेहरे वाला व्यक्ति / अंतिम संस्कार की शय्या के आगे के पाये', en: 'Two-faced man / Front legs of funeral cot' },
    gana: { hi: 'मनुष्य (Manushya)', en: 'Manushya (Human)' },
    yoni: { hi: 'सिंह (Lion)', en: 'Simha (Lion)' },
    nadi: { hi: 'आदि (Vata)', en: 'Adi (Vata)' },
    introduction: { 
      hi: 'पूर्वाभाद्रपद पच्चीसवां नक्षत्र है, जिसका विस्तार कुंभ और मीन राशि में है। यह परिवर्तन, रहस्यवाद और आध्यात्मिक शुद्धि का नक्षत्र है। इसका प्रतीक अंतिम संस्कार की शय्या के आगे के पाये हैं, जो पुराने का अंत और नए की शुरुआत का प्रतीक है।', 
      en: 'Purva Bhadrapada is the twenty-fifth Nakshatra, spanning Aquarius and Pisces. It is a Nakshatra of transformation, mysticism, and spiritual purification. Its symbol is the front legs of a funeral cot, symbolizing the end of the old and beginning of the new.' 
    },
    characteristics: { 
      hi: 'इस नक्षत्र में जन्मे लोग अक्सर दोहरे व्यक्तित्व (दुनिया के लिए अलग, अंदर से अलग) वाले हो सकते हैं। वे बहुत आदर्शवादी, आध्यात्मिक और कभी-कभी उग्र (विद्रोही) होते हैं। गुरु के प्रभाव से वे गहरे ज्ञानी होते हैं और समाज के लिए बहुत त्याग कर सकते हैं।', 
      en: 'People born in this Nakshatra can often have dual personalities (one for the world, one inside). They are highly idealistic, spiritual, and sometimes fierce (rebellious). Under Jupiter\'s influence, they are deeply knowledgeable and can make great sacrifices for society.' 
    },
    strengths: { 
      hi: ['आध्यात्मिक ज्ञान', 'आदर्शवादी', 'दृढ़ विश्वासी', 'परोपकारी'], 
      en: ['Spiritual knowledge', 'Idealistic', 'Firm believers', 'Philanthropic'] 
    },
    challenges: { 
      hi: ['उग्र स्वभाव', 'अति-आदर्शवाद', 'तनाव'], 
      en: ['Fierce temper', 'Over-idealism', 'Stress'] 
    },
    padas: {
      1: { hi: 'पहला चरण मंगल (मेष नवांश, कुंभ राशि) द्वारा शासित है, जो मानसिक ऊर्जा, विद्रोह और अपने आदर्शों के लिए लड़ने की आक्रामक इच्छा देता है।', en: 'The first Pada is ruled by Mars (Aries Navamsha, Aquarius sign), giving mental energy, rebellion, and an aggressive desire to fight for one\'s ideals.' },
      2: { hi: 'दूसरा चरण शुक्र (वृषभ नवांश, कुंभ राशि) द्वारा शासित है, जो भौतिक और आध्यात्मिक दुनिया के बीच संतुलन बनाने की कोशिश करता है और गुप्त ज्ञान लाता है।', en: 'The second Pada is ruled by Venus (Taurus Navamsha, Aquarius sign), trying to balance the material and spiritual worlds and bringing occult knowledge.' },
      3: { hi: 'तीसरा चरण बुध (मिथुन नवांश, कुंभ राशि) द्वारा शासित है, जो बौद्धिक जिज्ञासा, उत्कृष्ट संवाद और विचारों को समाज तक पहुँचाने की क्षमता प्रदान करता है।', en: 'The third Pada is ruled by Mercury (Gemini Navamsha, Aquarius sign), providing intellectual curiosity, excellent communication, and the ability to convey ideas to society.' },
      4: { hi: 'चौथा चरण चंद्रमा (कर्क नवांश, मीन राशि) द्वारा शासित है, जो अत्यधिक संवेदनशीलता, दूसरों की पीड़ा को समझने की क्षमता और आध्यात्मिक मोक्ष की तीव्र इच्छा देता है।', en: 'The fourth Pada is ruled by the Moon (Cancer Navamsha, Pisces sign), giving extreme sensitivity, the ability to understand others\' pain, and an intense desire for spiritual liberation (moksha).' }
    }
  },
  "uttara-bhadrapada": {
    slug: 'uttara-bhadrapada',
    name: { hi: 'उत्तराभाद्रपद', en: 'Uttara Bhadrapada' },
    sanskritName: { hi: 'उत्तराभाद्रपद (Uttara Bhadrapada)', en: 'Uttara Bhadrapada' },
    number: 26,
    rulingPlanet: { hi: 'शनि (Saturn)', en: 'Saturn' },
    deity: { hi: 'अहिर्बुध्न्य (Ahirbudhnya - Serpent of the deep)', en: 'Ahirbudhnya (Serpent of the Deep)' },
    symbol: { hi: 'अंतिम संस्कार की शय्या के पीछे के पाये / जुड़वा (Twins)', en: 'Back legs of funeral cot / Twins' },
    gana: { hi: 'मनुष्य (Manushya)', en: 'Manushya (Human)' },
    yoni: { hi: 'गौ (Cow)', en: 'Gau (Cow)' },
    nadi: { hi: 'मध्य (Pitta)', en: 'Madhya (Pitta)' },
    introduction: { 
      hi: 'उत्तराभाद्रपद छब्बीसवां नक्षत्र है, जो पूरी तरह से मीन राशि में स्थित है। यह पूर्वाभाद्रपद का अधिक शांत और परिपक्व रूप है। इसका प्रतीक अंतिम संस्कार की शय्या के पीछे के पाये हैं, जो आध्यात्मिक जागरण और शांति का प्रतीक है।', 
      en: 'Uttara Bhadrapada is the twenty-sixth Nakshatra, located entirely in Pisces. It is a calmer and more mature version of Purva Bhadrapada. Its symbol is the back legs of a funeral cot, symbolizing spiritual awakening and peace.' 
    },
    characteristics: { 
      hi: 'उत्तराभाद्रपद के जातक बहुत ही शांत, ज्ञानी और धैर्यवान होते हैं। शनि (नक्षत्र स्वामी) उन्हें अनुशासन देता है और मीन राशि उन्हें करुणा देती है। वे अच्छे सलाहकार होते हैं और समस्याओं को गहराई से समझते हैं।', 
      en: 'Natives of Uttara Bhadrapada are very calm, wise, and patient. Saturn (Nakshatra lord) gives them discipline and Pisces sign gives them compassion. They are good counselors and understand problems deeply.' 
    },
    strengths: { 
      hi: ['धैर्यवान', 'ज्ञानी', 'करुणामय', 'अच्छे सलाहकार'], 
      en: ['Patient', 'Wise', 'Compassionate', 'Good counselors'] 
    },
    challenges: { 
      hi: ['आलस्य', 'अलगाव (Isolation)', 'चीजों को टालना'], 
      en: ['Laziness', 'Isolation', 'Procrastination'] 
    },
    padas: {
      1: { hi: 'पहला चरण सूर्य (सिंह नवांश) द्वारा शासित है, जो ज्ञान को प्रकाशित करने, नेतृत्व और आध्यात्मिक मामलों में गर्व का भाव देता है।', en: 'The first Pada is ruled by the Sun (Leo Navamsha), giving illumination of knowledge, leadership, and a sense of pride in spiritual matters.' },
      2: { hi: 'दूसरा चरण बुध (कन्या नवांश) द्वारा शासित है, जो विश्लेषणात्मक क्षमता, तार्किकता और आध्यात्मिक ज्ञान को व्यावहारिक रूप में लागू करने की क्षमता लाता है।', en: 'The second Pada is ruled by Mercury (Virgo Navamsha), bringing analytical ability, logic, and the capacity to apply spiritual knowledge practically.' },
      3: { hi: 'तीसरा चरण शुक्र (तुला नवांश) द्वारा शासित है, जो संतुलन, सद्भाव और दूसरों की सहायता करने में आनंद प्राप्त करने पर केंद्रित है।', en: 'The third Pada is ruled by Venus (Libra Navamsha), focusing on balance, harmony, and finding joy in helping others.' },
      4: { hi: 'चौथा चरण मंगल (वृश्चिक नवांश) द्वारा शासित है, जो गहरी रहस्यमयी ऊर्जा, छिपे हुए ज्ञान को खोजने का जुनून और आध्यात्मिक परिवर्तन प्रदान करता है।', en: 'The fourth Pada is ruled by Mars (Scorpio Navamsha), providing deep mystical energy, a passion for uncovering hidden knowledge, and spiritual transformation.' }
    }
  },
  revati: {
    slug: 'revati',
    name: { hi: 'रेवती', en: 'Revati' },
    sanskritName: { hi: 'रेवती (Revati)', en: 'Revati' },
    number: 27,
    rulingPlanet: { hi: 'बुध (Mercury)', en: 'Mercury' },
    deity: { hi: 'पूषन (Pushan - The nourisher and protector of travelers)', en: 'Pushan (Nourisher/Protector of Travelers)' },
    symbol: { hi: 'मछली (Fish) / नगाड़ा (Drum)', en: 'Fish / Drum' },
    gana: { hi: 'देव (Deva)', en: 'Deva (Divine)' },
    yoni: { hi: 'गज (Elephant)', en: 'Gaja (Elephant)' },
    nadi: { hi: 'अंत्य (Kapha)', en: 'Antya (Kapha)' },
    introduction: { 
      hi: 'रेवती सत्ताईसवां और अंतिम नक्षत्र है, जो पूरी तरह से मीन राशि में स्थित है (यह भी एक गंडमूल नक्षत्र है)। "रेवती" का अर्थ है "धनवान" या "समृद्ध"। इसका प्रतीक पानी में तैरती मछली है, जो मोक्ष, जीवन की यात्रा और पूर्णता को दर्शाती है। इसके देवता पूषन (मार्गदर्शक) हैं।', 
      en: 'Revati is the twenty-seventh and final Nakshatra, located entirely in Pisces (it is also a Gandamool Nakshatra). "Revati" means "wealthy" or "prosperous." Its symbol is a fish swimming in water, signifying moksha, life\'s journey, and completion. Its deity is Pushan (the Guide).' 
    },
    characteristics: { 
      hi: 'रेवती नक्षत्र के लोग बहुत ही दयालु, मिलनसार और परिष्कृत (Refined) होते हैं। यह नक्षत्र चक्र का अंतिम चरण है, इसलिए इनमें एक आध्यात्मिक पूर्णता होती है। वे हमेशा दूसरों की मदद करने के लिए तैयार रहते हैं और उत्कृष्ट मार्गदर्शक साबित होते हैं।', 
      en: 'People of Revati Nakshatra are very kind, sociable, and refined. As this is the final stage of the zodiac cycle, they possess a sense of spiritual completion. They are always ready to help others and prove to be excellent guides.' 
    },
    strengths: { 
      hi: ['दयालु', 'सहज ज्ञानी (Intuitive)', 'रचनात्मक', 'दूसरों का मार्गदर्शन करने वाले'], 
      en: ['Kind', 'Intuitive', 'Creative', 'Guiding others'] 
    },
    challenges: { 
      hi: ['अत्यधिक भावुकता', 'स्वयं की उपेक्षा करना', 'दूसरों पर बहुत जल्दी भरोसा करना'], 
      en: ['Over-emotionality', 'Neglecting oneself', 'Trusting others too quickly'] 
    },
    padas: {
      1: { hi: 'पहला चरण गुरु (धनु नवांश) द्वारा शासित है, जो दार्शनिक दृष्टिकोण, आशावाद और उच्च ज्ञान प्राप्त करने की गहरी इच्छा देता है।', en: 'The first Pada is ruled by Jupiter (Sagittarius Navamsha), giving a philosophical outlook, optimism, and a deep desire to attain higher knowledge.' },
      2: { hi: 'दूसरा चरण शनि (मकर नवांश) द्वारा शासित है, जो करुणा के साथ व्यावहारिकता और जीवन में संरचना या अनुशासन लाता है।', en: 'The second Pada is ruled by Saturn (Capricorn Navamsha), bringing practicality alongside compassion, and structure or discipline in life.' },
      3: { hi: 'तीसरा चरण शनि (कुंभ नवांश) द्वारा शासित है, जो मानवता की भलाई, वैज्ञानिक सोच और समाज में सकारात्मक योगदान देने की प्रवृत्ति प्रदान करता है।', en: 'The third Pada is ruled by Saturn (Aquarius Navamsha), providing a tendency to contribute positively to society, scientific thought, and the welfare of humanity.' },
      4: { hi: 'चौथा चरण गुरु (मीन नवांश) द्वारा शासित है, जो अत्यधिक संवेदनशीलता, पूर्ण आध्यात्मिक समर्पण और आत्मा की अंतिम मुक्ति (मोक्ष) का प्रतीक है।', en: 'The fourth Pada is ruled by Jupiter (Pisces Navamsha), symbolizing extreme sensitivity, complete spiritual surrender, and the ultimate liberation of the soul (moksha).' }
    }
  }
};
