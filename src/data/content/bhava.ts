export interface BhavaContent {
  slug: string;
  houseNumber: number;
  name: { hi: string; en: string };
  sanskritName: string;
  significance: { hi: string; en: string };
  description: { hi: string; en: string };
  bodyParts: { hi: string; en: string };
}

export const bhavaData: Record<string, BhavaContent> = {
  '1st-house': {
    slug: '1st-house',
    houseNumber: 1,
    name: { hi: 'प्रथम भाव (तनु भाव)', en: '1st House (Tanu Bhava)' },
    sanskritName: 'Tanu Bhava',
    significance: { 
      hi: 'स्वयं, शरीर, व्यक्तित्व, रूप-रंग, स्वास्थ्य, जीवन की शुरुआत', 
      en: 'Self, Physical Body, Personality, Appearance, Health, Beginnings' 
    },
    description: {
      hi: 'प्रथम भाव, जिसे लग्न भी कहा जाता है, जन्म कुंडली का सबसे महत्वपूर्ण भाव है। यह आपके स्वयं (Self) का प्रतिनिधित्व करता है। यह भाव आपके शारीरिक रूप, व्यक्तित्व, जीवन के प्रति दृष्टिकोण, ऊर्जा के स्तर और समग्र स्वास्थ्य को दर्शाता है। यह आपके जीवन की नींव है।',
      en: 'The 1st house, also known as the Ascendant or Lagna, is the most important house in the birth chart. It represents the Self. This house governs your physical appearance, personality, approach to life, vitality, and overall health. It forms the foundation of your life.'
    },
    bodyParts: { hi: 'सिर, चेहरा, मस्तिष्क', en: 'Head, Face, Brain' }
  },
  '2nd-house': {
    slug: '2nd-house',
    houseNumber: 2,
    name: { hi: 'द्वितीय भाव (धन भाव)', en: '2nd House (Dhan Bhava)' },
    sanskritName: 'Dhan Bhava',
    significance: { 
      hi: 'धन, परिवार, वाणी, प्रारंभिक शिक्षा, खान-पान', 
      en: 'Wealth, Family, Speech, Early Education, Food' 
    },
    description: {
      hi: 'द्वितीय भाव मुख्य रूप से आपकी वित्तीय स्थिति, जमापूंजी और भौतिक संपदा से जुड़ा है। इसे धन भाव कहा जाता है। यह आपके तत्काल परिवार, आपकी वाणी (बोलने का तरीका), और आपके खान-पान की आदतों का भी प्रतिनिधित्व करता है।',
      en: 'The 2nd house is primarily associated with your financial status, accumulated wealth, and material possessions. It is called the Dhan Bhava. It also represents your immediate family, your speech (how you communicate), and your eating habits.'
    },
    bodyParts: { hi: 'दाहिनी आंख, गला, गर्दन, दांत, जीभ', en: 'Right Eye, Throat, Neck, Teeth, Tongue' }
  },
  '3rd-house': {
    slug: '3rd-house',
    houseNumber: 3,
    name: { hi: 'तृतीय भाव (सहज भाव)', en: '3rd House (Sahaj Bhava)' },
    sanskritName: 'Sahaj Bhava',
    significance: { 
      hi: 'छोटे भाई-बहन, साहस, पराक्रम, संचार, छोटी यात्राएं', 
      en: 'Younger Siblings, Courage, Valor, Communication, Short Journeys' 
    },
    description: {
      hi: 'तृतीय भाव आपके साहस, पराक्रम और प्रयासों का भाव है। यह आपके छोटे भाई-बहनों, पड़ोसियों और आपके संचार कौशल (लेखन, मीडिया, आदि) को दर्शाता है। यह भाव छोटी दूरी की यात्राओं और जीवन में आपके द्वारा किए गए स्वयं के प्रयासों का भी प्रतिनिधित्व करता है।',
      en: 'The 3rd house is the house of courage, valor, and self-effort. It signifies your younger siblings, neighbors, and communication skills (writing, media, etc.). This house also represents short-distance travel and the personal initiatives you take in life.'
    },
    bodyParts: { hi: 'कंधे, हाथ, भुजाएं, दाहिना कान, फेफड़े', en: 'Shoulders, Arms, Hands, Right Ear, Lungs' }
  },
  '4th-house': {
    slug: '4th-house',
    houseNumber: 4,
    name: { hi: 'चतुर्थ भाव (सुख भाव)', en: '4th House (Sukh Bhava)' },
    sanskritName: 'Sukh Bhava',
    significance: { 
      hi: 'माता, सुख, घर, संपत्ति, वाहन, मानसिक शांति', 
      en: 'Mother, Happiness, Home, Property, Vehicles, Mental Peace' 
    },
    description: {
      hi: 'चतुर्थ भाव आपके घर, मातृभूमि और मानसिक शांति का प्रतिनिधित्व करता है। इसे सुख भाव कहा जाता है क्योंकि यह जीवन की सभी मूलभूत सुख-सुविधाओं, जमीन-जायदाद और वाहनों को दर्शाता है। यह भाव आपकी माता के साथ आपके संबंधों और आपके आंतरिक भावनात्मक स्वभाव को भी प्रदर्शित करता है।',
      en: 'The 4th house represents your home, homeland, and mental peace. Known as the Sukh Bhava, it signifies all fundamental comforts of life, real estate, property, and vehicles. This house also reflects your relationship with your mother and your inner emotional nature.'
    },
    bodyParts: { hi: 'छाती, हृदय, फेफड़े', en: 'Chest, Heart, Lungs' }
  },
  '5th-house': {
    slug: '5th-house',
    houseNumber: 5,
    name: { hi: 'पंचम भाव (पुत्र भाव)', en: '5th House (Putra Bhava)' },
    sanskritName: 'Putra Bhava',
    significance: { 
      hi: 'संतान, बुद्धि, शिक्षा, प्रेम संबंध, रचनात्मकता, पूर्व पुण्य', 
      en: 'Children, Intellect, Education, Romance, Creativity, Past Life Merits' 
    },
    description: {
      hi: 'पंचम भाव रचनात्मकता, बुद्धि और संतान का भाव है। यह आपकी उच्च शिक्षा, प्रेम संबंधों, कलात्मक प्रतिभा और सट्टेबाजी (शेयर बाजार आदि) से जुड़े मामलों को दर्शाता है। वैदिक ज्योतिष में इसे "पूर्व पुण्य" का भाव भी माना जाता है, जो पिछले जन्मों के अच्छे कर्मों को दर्शाता है।',
      en: 'The 5th house is the house of creativity, intellect, and children. It signifies your higher education, romantic relationships, artistic talents, and matters related to speculation (stock market, etc.). In Vedic astrology, it is also considered the house of "Purva Punya", representing the good karma from past lives.'
    },
    bodyParts: { hi: 'पेट, यकृत (Liver), पित्ताशय', en: 'Stomach, Liver, Gallbladder' }
  },
  '6th-house': {
    slug: '6th-house',
    houseNumber: 6,
    name: { hi: 'षष्ठम भाव (अरि भाव)', en: '6th House (Ari Bhava)' },
    sanskritName: 'Ari Bhava',
    significance: { 
      hi: 'शत्रु, रोग, ऋण, नौकरी, प्रतियोगिता, पालतू जानवर', 
      en: 'Enemies, Diseases, Debts, Service/Job, Competitions, Pets' 
    },
    description: {
      hi: 'छठा भाव जीवन की चुनौतियों, बाधाओं और संघर्षों का प्रतिनिधित्व करता है। यह मुख्य रूप से बीमारियों, कर्ज और शत्रुओं (अरि) का भाव है। इसके साथ ही यह आपकी नौकरी, दैनिक दिनचर्या, मुकदमेबाजी और प्रतियोगिताओं में आपकी सफलता का भी निर्धारण करता है।',
      en: 'The 6th house represents life\'s challenges, obstacles, and struggles. It is primarily the house of diseases, debts, and enemies (Ari). Additionally, it determines your daily service or job routine, litigation, and your success in competitive environments.'
    },
    bodyParts: { hi: 'आंतें (Intestines), पाचन तंत्र', en: 'Intestines, Digestive Tract' }
  },
  '7th-house': {
    slug: '7th-house',
    houseNumber: 7,
    name: { hi: 'सप्तम भाव (कलत्र भाव)', en: '7th House (Kalatra Bhava)' },
    sanskritName: 'Kalatra Bhava',
    significance: { 
      hi: 'विवाह, जीवनसाथी, व्यापारिक साझेदारी, सार्वजनिक संबंध', 
      en: 'Marriage, Spouse, Business Partnerships, Public Relations' 
    },
    description: {
      hi: 'सप्तम भाव मुख्य रूप से विवाह और जीवनसाथी (कलत्र) का भाव है। चूँकि यह लग्न (स्वयं) के ठीक विपरीत है, यह आपके जीवन में "अन्य" लोगों का प्रतिनिधित्व करता है। यह भाव कानूनी व्यापारिक साझेदारियों, सार्वजनिक छवि और विदेशों में होने वाले व्यापार को भी दर्शाता है।',
      en: 'The 7th house is primarily the house of marriage and spouse (Kalatra). Since it sits exactly opposite the Ascendant (Self), it represents the "other" people in your life. This house also signifies legal business partnerships, your public image, and foreign trade.'
    },
    bodyParts: { hi: 'गुर्दे (Kidneys), मूत्र पथ, श्रोणि (Pelvis)', en: 'Kidneys, Urinary Tract, Pelvis' }
  },
  '8th-house': {
    slug: '8th-house',
    houseNumber: 8,
    name: { hi: 'अष्टम भाव (आयु भाव)', en: '8th House (Ayu Bhava)' },
    sanskritName: 'Ayu Bhava',
    significance: { 
      hi: 'आयु, मृत्यु, अचानक परिवर्तन, गुप्त विद्या, पैतृक संपत्ति', 
      en: 'Longevity, Death, Sudden Changes, Occult Sciences, Inheritances' 
    },
    description: {
      hi: 'अष्टम भाव रहस्य, अचानक होने वाली घटनाओं और आयु का भाव है। यह मृत्यु (आयु का अंत), दुर्घटनाओं, और जीवन में बड़े बदलावों को दर्शाता है। यह पैतृक संपत्ति, बीमा, शोध कार्य, और ज्योतिष या तंत्र-मंत्र जैसी गुप्त विद्याओं में रुचि का भी प्रतिनिधित्व करता है।',
      en: 'The 8th house is the house of mystery, sudden events, and longevity. It signifies death (the end of longevity), accidents, and major transformations in life. It also represents inherited wealth, insurance, research work, and an interest in occult sciences like astrology or mysticism.'
    },
    bodyParts: { hi: 'प्रजनन अंग, जननांग', en: 'Reproductive Organs, Genitals' }
  },
  '9th-house': {
    slug: '9th-house',
    houseNumber: 9,
    name: { hi: 'नवम भाव (धर्म भाव)', en: '9th House (Dharma Bhava)' },
    sanskritName: 'Dharma Bhava',
    significance: { 
      hi: 'धर्म, भाग्य, पिता, गुरु, उच्च शिक्षा, लंबी यात्राएं', 
      en: 'Religion, Fortune/Luck, Father, Guru, Higher Education, Long Journeys' 
    },
    description: {
      hi: 'नवम भाव आपके भाग्य, धर्म और आध्यात्मिकता का भाव है। यह आपके पिता (कुछ मतों के अनुसार), गुरुओं और आपके जीवन दर्शन को दर्शाता है। यह भाव लंबी दूरी की यात्राओं (जैसे विदेश यात्रा या तीर्थयात्रा) और दर्शन, कानून या उच्च शिक्षा से जुड़े मामलों का भी प्रतिनिधित्व करता है।',
      en: 'The 9th house is the house of fortune (luck), dharma (religion), and spirituality. It signifies your father (according to some texts), gurus, and your philosophy of life. This house also represents long-distance travel (like foreign trips or pilgrimages) and matters related to philosophy, law, or higher learning.'
    },
    bodyParts: { hi: 'जांघें (Thighs), कूल्हे (Hips)', en: 'Thighs, Hips' }
  },
  '10th-house': {
    slug: '10th-house',
    houseNumber: 10,
    name: { hi: 'दशम भाव (कर्म भाव)', en: '10th House (Karma Bhava)' },
    sanskritName: 'Karma Bhava',
    significance: { 
      hi: 'कर्म, पेशा (Career), मान-सम्मान, पद, सरकार, पिता', 
      en: 'Karma, Profession/Career, Fame, Status, Government, Father' 
    },
    description: {
      hi: 'दशम भाव आपके कर्म (कार्य), पेशेवर जीवन और समाज में आपके रुतबे का भाव है। यह आपकी आजीविका, प्रसिद्धि, सत्ता और सरकार के साथ संबंधों को दर्शाता है। इसे जन्म कुंडली का सबसे मजबूत केंद्र भाव माना जाता है, जो आपकी महत्वाकांक्षाओं और उपलब्धियों को परिभाषित करता है।',
      en: 'The 10th house is the house of your Karma (actions), professional life, and your status in society. It signifies your livelihood, fame, authority, and relations with the government. It is considered the strongest Kendra (angular) house in the birth chart, defining your ambitions and achievements.'
    },
    bodyParts: { hi: 'घुटने (Knees), हड्डियां', en: 'Knees, Bones' }
  },
  '11th-house': {
    slug: '11th-house',
    houseNumber: 11,
    name: { hi: 'एकादश भाव (लाभ भाव)', en: '11th House (Labha Bhava)' },
    sanskritName: 'Labha Bhava',
    significance: { 
      hi: 'लाभ, आय, इच्छापूर्ति, बड़े भाई-बहन, मित्र मंडली', 
      en: 'Gains, Income, Fulfillment of Desires, Elder Siblings, Social Circle' 
    },
    description: {
      hi: 'ग्यारहवां भाव लाभ और आय का प्रतिनिधित्व करता है। दशम भाव (करियर) में किए गए प्रयासों का फल (आय) एकादश भाव से देखा जाता है। यह आपकी इच्छाओं की पूर्ति, आपके बड़े भाई-बहनों, और आपके मित्रों के नेटवर्क (सोशल सर्कल) का भी भाव है।',
      en: 'The 11th house represents gains and income. The fruits (income) of the efforts put into the 10th house (career) are seen from the 11th house. It is also the house of fulfillment of your desires, your elder siblings, and your network of friends (social circle).'
    },
    bodyParts: { hi: 'पिंडलियां (Calves), बायां कान, टखने (Ankles)', en: 'Calves, Left Ear, Ankles' }
  },
  '12th-house': {
    slug: '12th-house',
    houseNumber: 12,
    name: { hi: 'द्वादश भाव (व्यय भाव)', en: '12th House (Vyaya Bhava)' },
    sanskritName: 'Vyaya Bhava',
    significance: { 
      hi: 'व्यय (खर्च), हानि, विदेश, मोक्ष, अलगाव, अस्पताल, जेल', 
      en: 'Expenses, Losses, Foreign Lands, Moksha, Isolation, Hospitals, Asylums' 
    },
    description: {
      hi: 'बारहवां भाव राशि चक्र का अंतिम भाव है, जो व्यय (खर्च) और अंत का प्रतिनिधित्व करता है। यह अलगाव, अस्पताल, जेल और विदेश में बसने को दर्शाता है। आध्यात्मिक स्तर पर, यह मोक्ष (जन्म-मृत्यु के चक्र से मुक्ति) और भौतिक दुनिया से वैराग्य का सर्वोच्च भाव है।',
      en: 'The 12th house is the final house of the zodiac, representing expenses and endings. It signifies isolation, hospitals, prisons, and settling in foreign lands. On a spiritual level, it is the supreme house of Moksha (liberation from the cycle of birth and death) and detachment from the material world.'
    },
    bodyParts: { hi: 'पैर (Feet), बायीं आंख, नींद', en: 'Feet, Left Eye, Sleep' }
  }
};
