export interface DashaContent {
  slug: string;
  planet: string;
  durationYears: number;
  name: { hi: string; en: string };
  introduction: { hi: string; en: string };
  generalEffects: { hi: string; en: string };
  careerFinance: { hi: string; en: string };
  relationshipsFamily: { hi: string; en: string };
  psychologicalChanges: { hi: string; en: string };
  remedies: { hi: string; en: string };
}

export const dashaData: Record<string, DashaContent> = {
  surya: {
    slug: 'surya',
    planet: 'सूर्य (Sun)',
    durationYears: 6,
    name: { hi: 'सूर्य महादशा', en: 'Sun Mahadasha' },
    introduction: {
      hi: 'सूर्य की महादशा 6 वर्ष की होती है। वैदिक ज्योतिष में सूर्य को ग्रहों का राजा माना जाता है, जो आत्मा, पिता, सत्ता, आत्म-सम्मान और स्वास्थ्य का प्रतिनिधित्व करता है। यह महादशा व्यक्ति के जीवन में नेतृत्व, स्पष्टता और व्यक्तिगत शक्ति के विकास का समय होती है।',
      en: 'The Sun (Surya) Mahadasha lasts for 6 years. In Vedic astrology, the Sun is the king of planets, representing the soul, father, authority, self-respect, and health. This period is a time for developing leadership, clarity, and personal power.'
    },
    generalEffects: {
      hi: 'इस अवधि के दौरान, व्यक्ति के आत्मविश्वास और ऊर्जा के स्तर में वृद्धि होती है। यदि सूर्य कुंडली में मजबूत स्थिति में है, तो यह महादशा सफलता, सरकारी कृपा, और समाज में उच्च पद दिला सकती है। कमजोर सूर्य होने पर अहंकार संबंधी समस्याएं, स्वास्थ्य कष्ट या पिता से मतभेद हो सकते हैं।',
      en: 'During this period, there is an increase in self-confidence and energy levels. If the Sun is strong in the chart, this Mahadasha brings success, government favors, and high social status. A weak Sun may cause ego clashes, health issues, or conflicts with one\'s father.'
    },
    careerFinance: {
      hi: 'करियर के दृष्टिकोण से यह अक्सर प्रगति का समय होता है। प्रशासनिक पदों, राजनीति, या नेतृत्व की भूमिकाओं में सफलता मिलने की संभावना अधिक होती है। अधिकारियों से सहयोग मिलता है और मान-सम्मान में वृद्धि होती है।',
      en: 'From a career perspective, this is often a time of advancement. Success in administrative posts, politics, or leadership roles is highly probable. Support from authorities is received, and there is an increase in fame and respect.'
    },
    relationshipsFamily: {
      hi: 'पारिवारिक जीवन में, पिता के साथ संबंध महत्वपूर्ण हो जाते हैं। व्यक्ति अपने परिवार में एक सत्तावादी भूमिका निभा सकता है, लेकिन अत्यधिक अहंकार के कारण जीवनसाथी या अन्य सदस्यों के साथ टकराव से बचना चाहिए।',
      en: 'In family life, the relationship with the father becomes significant. The individual may take on an authoritative role in the family, but must avoid conflicts with the spouse or other members due to excessive ego.'
    },
    psychologicalChanges: {
      hi: 'मानसिक रूप से, व्यक्ति अधिक स्वतंत्र और महत्वाकांक्षी महसूस करता है। खुद को साबित करने और अपनी पहचान बनाने की तीव्र इच्छा होती है।',
      en: 'Psychologically, the individual feels more independent and ambitious. There is a strong desire to prove oneself and establish a distinct identity.'
    },
    remedies: {
      hi: 'सूर्य के नकारात्मक प्रभावों को कम करने के लिए प्रतिदिन उगते सूर्य को जल (अर्घ्य) देना, आदित्य हृदय स्तोत्र का पाठ करना और अपने पिता व बुजुर्गों का सम्मान करना चाहिए।',
      en: 'To mitigate negative effects, offer water (Arghya) to the rising Sun daily, recite the Aditya Hridaya Stotra, and always show respect to your father and elders.'
    }
  },
  chandra: {
    slug: 'chandra',
    planet: 'चंद्र (Moon)',
    durationYears: 10,
    name: { hi: 'चंद्र महादशा', en: 'Moon Mahadasha' },
    introduction: {
      hi: 'चंद्रमा की महादशा 10 वर्ष तक चलती है। चंद्रमा मन, भावनाओं, माता, शांति और रचनात्मकता का कारक है। यह महादशा जीवन में भावनात्मक परिवर्तन, मानसिक विकास और घरेलू मामलों पर ध्यान केंद्रित करने का समय होती है।',
      en: 'The Moon (Chandra) Mahadasha lasts for 10 years. The Moon signifies the mind, emotions, mother, peace, and creativity. This period focuses on emotional transformations, mental development, and domestic matters.'
    },
    generalEffects: {
      hi: 'इस महादशा में भावनाएं और कल्पना शक्ति चरम पर होती हैं। मजबूत चंद्रमा शांति, समृद्धि और सामाजिक लोकप्रियता लाता है। कमजोर या पीड़ित चंद्रमा मानसिक तनाव, चिंता, नींद की कमी और अकारण भय का कारण बन सकता है।',
      en: 'Emotions and imagination are at their peak during this period. A strong Moon brings peace, prosperity, and social popularity. A weak or afflicted Moon can cause mental stress, anxiety, lack of sleep, and irrational fears.'
    },
    careerFinance: {
      hi: 'रचनात्मक क्षेत्रों, कला, मनोविज्ञान, या जनता से जुड़े कार्यों (Public relations) में सफलता मिल सकती है। आर्थिक स्थिति अक्सर स्थिर रहती है, लेकिन आय के स्रोतों में उतार-चढ़ाव (चंद्रमा की कलाओं की तरह) हो सकता है।',
      en: 'Success can be achieved in creative fields, arts, psychology, or public relations. The financial situation is often stable, but income streams may fluctuate (just like the phases of the Moon).'
    },
    relationshipsFamily: {
      hi: 'माता के साथ संबंध बहुत महत्वपूर्ण हो जाते हैं। विवाह या प्रेम प्रसंगों के लिए यह अनुकूल समय हो सकता है। व्यक्ति अपने परिवार के प्रति अत्यधिक भावनात्मक और देखभाल करने वाला (caring) हो जाता है।',
      en: 'The relationship with the mother becomes very significant. It can be a favorable time for marriage or romance. The individual becomes highly emotional and caring towards their family.'
    },
    psychologicalChanges: {
      hi: 'व्यक्ति की संवेदनशीलता बढ़ जाती है। वे दूसरों की भावनाओं को बेहतर ढंग से समझ सकते हैं, लेकिन छोटी-छोटी बातों पर आहत होने की प्रवृत्ति भी बढ़ सकती है।',
      en: 'Sensitivity increases. They can understand others\' feelings better, but the tendency to get hurt over trivial matters may also increase.'
    },
    remedies: {
      hi: 'सोमवार को भगवान शिव की पूजा करना, ध्यान (Meditation) करना, और माता व वृद्ध महिलाओं का आशीर्वाद लेना चंद्रमा को बल प्रदान करता है।',
      en: 'Worshipping Lord Shiva on Mondays, practicing meditation, and seeking the blessings of the mother and elderly women strengthens the Moon.'
    }
  },
  mangal: {
    slug: 'mangal',
    planet: 'मंगल (Mars)',
    durationYears: 7,
    name: { hi: 'मंगल महादशा', en: 'Mars Mahadasha' },
    introduction: {
      hi: 'मंगल की महादशा 7 वर्ष की होती है। मंगल साहस, ऊर्जा, पराक्रम, भूमि और भाई-बहनों का प्रतिनिधित्व करता है। यह महादशा जीवन में उच्च ऊर्जा, त्वरित निर्णय और कार्यों को पूरा करने की गति का समय है।',
      en: 'The Mars (Mangal) Mahadasha lasts for 7 years. Mars represents courage, energy, valor, land, and siblings. This period is a time of high energy, quick decisions, and the drive to accomplish tasks.'
    },
    generalEffects: {
      hi: 'इस अवधि में व्यक्ति अत्यधिक सक्रिय और निडर हो जाता है। शुभ मंगल भूमि से लाभ, मुकदमों में जीत और शत्रुओं पर विजय दिलाता है। अशुभ मंगल क्रोध, दुर्घटनाएं, रक्त संबंधी विकार और अनावश्यक विवाद उत्पन्न कर सकता है।',
      en: 'The individual becomes highly active and fearless during this period. A benefic Mars brings gains from land, victory in litigation, and triumph over enemies. An afflicted Mars can cause anger, accidents, blood-related disorders, and unnecessary disputes.'
    },
    careerFinance: {
      hi: 'सेना, पुलिस, इंजीनियरिंग, रियल एस्टेट या खेल के क्षेत्र में करियर में उछाल आ सकता है। व्यक्ति अपने लक्ष्यों को प्राप्त करने के लिए कड़ी मेहनत करता है।',
      en: 'Careers in the military, police, engineering, real estate, or sports can see a significant boost. The individual works very hard to achieve their goals.'
    },
    relationshipsFamily: {
      hi: 'भाई-बहनों (विशेषकर छोटे) के साथ संबंधों पर ध्यान जाता है। वैवाहिक जीवन में क्रोध और आक्रामकता के कारण समस्याएं आ सकती हैं, इसलिए शांति बनाए रखना आवश्यक है।',
      en: 'Attention is drawn to relationships with siblings (especially younger ones). Marital life may face challenges due to anger and aggression, making it essential to maintain peace.'
    },
    psychologicalChanges: {
      hi: 'व्यक्ति अधिक मुखर (assertive) और स्वतंत्र महसूस करता है। "अभी करो" की भावना हावी रहती है, जिससे कभी-कभी जल्दबाजी में निर्णय लिए जा सकते हैं।',
      en: 'The person feels more assertive and independent. A "do it now" attitude dominates, which can sometimes lead to impulsive decisions.'
    },
    remedies: {
      hi: 'मंगलवार को हनुमान जी की पूजा करना, हनुमान चालीसा का पाठ करना, और क्रोध पर नियंत्रण रखने का अभ्यास करना चाहिए।',
      en: 'Worship Lord Hanuman on Tuesdays, recite the Hanuman Chalisa, and actively practice anger management.'
    }
  },
  rahu: {
    slug: 'rahu',
    planet: 'राहु (Rahu)',
    durationYears: 18,
    name: { hi: 'राहु महादशा', en: 'Rahu Mahadasha' },
    introduction: {
      hi: 'राहु की महादशा 18 वर्ष तक चलती है, जो जीवन के सबसे लंबे और परिवर्तनकारी कालखंडों में से एक है। राहु भौतिक इच्छाओं, भ्रम, तकनीकी विकास, और विदेशी संपर्कों का ग्रह है। यह अप्रत्याशित घटनाओं और सांसारिक उपलब्धियों का समय होता है।',
      en: 'The Rahu Mahadasha spans 18 years, making it one of the longest and most transformative periods in life. Rahu is the planet of material desires, illusions, technological advancement, and foreign connections. It is a time of unexpected events and worldly achievements.'
    },
    generalEffects: {
      hi: 'राहु की दशा अचानक सफलता या पतन ला सकती है। शुभ राहु अपार धन, विदेश यात्रा, और समाज में उच्च स्थिति प्रदान करता है। अशुभ राहु भ्रम, गलत निर्णय, धोखाधड़ी और मानसिक उलझन का कारण बनता है।',
      en: 'Rahu dasha can bring sudden success or downfall. A benefic Rahu grants immense wealth, foreign travel, and high social status. A malefic Rahu causes illusions, poor judgment, deceit, and mental confusion.'
    },
    careerFinance: {
      hi: 'तकनीकी क्षेत्र, अनुसंधान, राजनीति, या विदेशी कंपनियों के साथ काम करने में अभूतपूर्व सफलता मिल सकती है। आय में अचानक वृद्धि हो सकती है, लेकिन खर्च भी अनियंत्रित हो सकते हैं।',
      en: 'Unprecedented success can be seen in technology, research, politics, or working with foreign entities. Income may rise suddenly, but expenses can also become uncontrollable.'
    },
    relationshipsFamily: {
      hi: 'पारिवारिक जीवन में असामान्य या गैर-पारंपरिक संबंध बन सकते हैं। भ्रम के कारण गलतफहमियां उत्पन्न हो सकती हैं, इसलिए रिश्तों में स्पष्टता बनाए रखना बहुत महत्वपूर्ण है।',
      en: 'Unusual or non-traditional relationships may form in family life. Misunderstandings due to illusions can arise, making clarity in relationships extremely important.'
    },
    psychologicalChanges: {
      hi: 'महत्वाकांक्षाएं अपने चरम पर होती हैं। व्यक्ति नियमों को तोड़ने और कुछ अलग करने के लिए प्रेरित महसूस करता है। कभी-कभी असंतोष की भावना हावी हो सकती है।',
      en: 'Ambitions are at their peak. The individual feels driven to break rules and do something different. Sometimes, a persistent feeling of dissatisfaction can dominate.'
    },
    remedies: {
      hi: 'भगवान भैरव या माता दुर्गा की पूजा करना, चंदन का उपयोग करना, और मांस-मदिरा से दूर रहना राहु को शांत रखने में मदद करता है। किसी भी बड़े निर्णय से पहले अनुभवी लोगों की सलाह अवश्य लें।',
      en: 'Worshipping Lord Bhairav or Goddess Durga, using sandalwood, and abstaining from alcohol/meat helps pacify Rahu. Always seek advice from experienced individuals before making major decisions.'
    }
  },
  guru: {
    slug: 'guru',
    planet: 'गुरु (Jupiter)',
    durationYears: 16,
    name: { hi: 'गुरु महादशा', en: 'Jupiter Mahadasha' },
    introduction: {
      hi: 'बृहस्पति (गुरु) की महादशा 16 वर्ष की होती है। गुरु ज्ञान, धर्म, धन, संतान और भाग्य का सबसे बड़ा कारक है। 18 वर्ष की उथल-पुथल वाली राहु दशा के बाद, गुरु की दशा जीवन में स्थिरता, शांति और आध्यात्मिक विकास लेकर आती है।',
      en: 'The Jupiter (Guru) Mahadasha lasts for 16 years. Jupiter is the greatest significator of knowledge, dharma, wealth, children, and luck. Following the turbulent 18-year Rahu dasha, Jupiter brings stability, peace, and spiritual growth into life.'
    },
    generalEffects: {
      hi: 'यह समय आमतौर पर अत्यंत शुभ होता है। शिक्षा, ज्ञान प्राप्ति और धार्मिक कार्यों में रुचि बढ़ती है। शुभ गुरु मान-सम्मान, विवाह, संतान प्राप्ति और आर्थिक समृद्धि देता है। यदि गुरु पीड़ित हो, तो अति-आशावाद, आलस्य या मोटापे की समस्या हो सकती है।',
      en: 'This period is generally highly auspicious. Interest in education, acquiring knowledge, and religious activities increases. A benefic Jupiter grants honor, marriage, progeny, and financial prosperity. If afflicted, it may cause over-optimism, laziness, or obesity issues.'
    },
    careerFinance: {
      hi: 'शिक्षा, बैंकिंग, कानून (Law), परामर्श या धार्मिक कार्यों से जुड़े करियर में सफलता मिलती है। वित्तीय स्थिति स्थिर और मजबूत होती है, क्योंकि व्यक्ति विवेकपूर्ण निर्णय लेता है।',
      en: 'Careers related to education, banking, law, consulting, or religious roles flourish. The financial situation becomes stable and strong, as the individual makes wise decisions.'
    },
    relationshipsFamily: {
      hi: 'पारिवारिक जीवन शांतिपूर्ण रहता है। विवाह योग्य लोगों के लिए यह सबसे शुभ समय माना जाता है। बुजुर्गों और गुरुओं का मार्गदर्शन और आशीर्वाद प्राप्त होता है।',
      en: 'Family life remains peaceful. It is considered the most auspicious time for marriage for eligible individuals. Guidance and blessings from elders and teachers are received.'
    },
    psychologicalChanges: {
      hi: 'व्यक्ति अधिक दार्शनिक, आशावादी और उदार हो जाता है। जीवन के वास्तविक अर्थ को समझने की इच्छा जाग्रत होती है।',
      en: 'The person becomes more philosophical, optimistic, and generous. A desire to understand the true meaning of life awakens.'
    },
    remedies: {
      hi: 'गुरुवार को भगवान विष्णु की पूजा करना, चने की दाल या केले का दान करना, और अपने गुरुओं या शिक्षकों का सम्मान करना गुरु ग्रह को मजबूत करता है।',
      en: 'Worshipping Lord Vishnu on Thursdays, donating split chickpeas (chana dal) or bananas, and respecting one\'s teachers/gurus strengthens Jupiter.'
    }
  },
  shani: {
    slug: 'shani',
    planet: 'शनि (Saturn)',
    durationYears: 19,
    name: { hi: 'शनि महादशा', en: 'Saturn Mahadasha' },
    introduction: {
      hi: 'शनि की महादशा सबसे लंबी अवधि, 19 वर्ष की होती है। शनि कर्म, न्याय, अनुशासन, मेहनत और सीमाओं का ग्रह है। यह दशा व्यक्ति को वास्तविकता से रूबरू कराती है और जीवन के कड़े सबक सिखाती है।',
      en: 'The Saturn (Shani) Mahadasha is the longest period, lasting 19 years. Saturn is the planet of karma, justice, discipline, hard work, and limitations. This dasha grounds the individual in reality and teaches tough life lessons.'
    },
    generalEffects: {
      hi: 'शनि की दशा में सफलता धीमी लेकिन स्थायी होती है। यह परीक्षण का समय है। शुभ शनि अपार मेहनत के बाद भारी सफलता, धैर्य और समाज में एक मजबूत स्थिति देता है। अशुभ शनि संघर्ष, देरी, निराशा और स्वास्थ्य संबंधी समस्याएं (विशेषकर जोड़ों का दर्द) ला सकता है।',
      en: 'Success during Saturn\'s dasha is slow but permanent. It is a time of testing. A benefic Saturn grants massive success after intense hard work, patience, and a solid social standing. A malefic Saturn can bring struggles, delays, frustration, and health issues (especially joint pains).'
    },
    careerFinance: {
      hi: 'करियर में स्थिरता आती है, लेकिन बहुत अधिक काम और जिम्मेदारी भी बढ़ती है। विनिर्माण (manufacturing), न्यायपालिका, या जमीन से जुड़े कार्यों में सफलता मिलती है। धन संचय धीमा होता है लेकिन सुरक्षित रहता है।',
      en: 'Career stabilizes, but workload and responsibilities increase significantly. Success is seen in manufacturing, judiciary, or grassroots-level work. Wealth accumulation is slow but secure.'
    },
    relationshipsFamily: {
      hi: 'रिश्तों में परिपक्वता (maturity) आती है। व्यक्ति अपनी जिम्मेदारियों को गंभीरता से लेता है। कभी-कभी अधिक काम के कारण पारिवारिक समय में कमी आ सकती है।',
      en: 'Relationships gain maturity. The individual takes their responsibilities seriously. Sometimes, overwork can lead to a lack of quality family time.'
    },
    psychologicalChanges: {
      hi: 'व्यक्ति अधिक व्यावहारिक, गंभीर और अंतर्मुखी हो जाता है। यह समय भ्रम को दूर कर यथार्थवादी (realistic) दृष्टिकोण विकसित करता है।',
      en: 'The person becomes more practical, serious, and introverted. This period dispels illusions and develops a highly realistic outlook.'
    },
    remedies: {
      hi: 'शनिवार को शनि मंदिर जाना, सरसों के तेल का दीपक जलाना, गरीबों और जरूरतमंदों (श्रमिकों) की निस्वार्थ मदद करना शनि देव को प्रसन्न करता है।',
      en: 'Visiting a Shani temple on Saturdays, lighting a mustard oil lamp, and selflessly helping the poor and needy (laborers) pleases Lord Saturn.'
    }
  },
  budh: {
    slug: 'budh',
    planet: 'बुध (Mercury)',
    durationYears: 17,
    name: { hi: 'बुध महादशा', en: 'Mercury Mahadasha' },
    introduction: {
      hi: 'बुध की महादशा 17 वर्ष की होती है। बुध बुद्धि, वाणी, व्यापार, तर्क और संचार (Communication) का कारक है। शनि की कठिन दशा के बाद बुध की दशा जीवन में सीखने, नेटवर्किंग और बौद्धिक विकास का एक ताज़ा दौर लेकर आती है।',
      en: 'The Mercury (Budh) Mahadasha lasts for 17 years. Mercury signifies intellect, speech, trade, logic, and communication. Following Saturn\'s tough dasha, Mercury brings a refreshing phase of learning, networking, and intellectual growth.'
    },
    generalEffects: {
      hi: 'इस अवधि में मानसिक क्षमताएं बहुत तेज हो जाती हैं। शुभ बुध व्यापार में सफलता, नई भाषाएं सीखने की क्षमता और उत्कृष्ट संचार कौशल प्रदान करता है। अशुभ बुध तंत्रिका तंत्र (Nervous system) की समस्याएं, निर्णय लेने में दुविधा और त्वचा संबंधी रोग दे सकता है।',
      en: 'Mental capabilities sharpen significantly during this period. A benefic Mercury grants business success, the ability to learn new languages, and excellent communication skills. A malefic Mercury can cause nervous system issues, indecisiveness, and skin-related disorders.'
    },
    careerFinance: {
      hi: 'व्यापार, लेखन, पत्रकारिता, आईटी (IT), मार्केटिंग और अकाउंटिंग के क्षेत्र में बहुत अच्छी प्रगति होती है। व्यक्ति अपनी बुद्धिमत्ता के माध्यम से धन अर्जित करता है।',
      en: 'Excellent progress is seen in business, writing, journalism, IT, marketing, and accounting. The individual earns wealth primarily through their intellectual skills.'
    },
    relationshipsFamily: {
      hi: 'मित्र मंडली (social circle) का विस्तार होता है। भाई-बहनों और रिश्तेदारों के साथ संवाद बढ़ता है। व्यक्ति अपने रिश्तों में तर्क और हास्य (humor) का उपयोग करता है।',
      en: 'The social circle expands. Communication with siblings and relatives increases. The person uses logic and humor in their relationships.'
    },
    psychologicalChanges: {
      hi: 'मन अत्यधिक जिज्ञासु और चंचल रहता है। कई नई चीजें एक साथ सीखने की इच्छा होती है। व्यक्ति हर परिस्थिति का विश्लेषणात्मक (analytical) तरीके से मूल्यांकन करता है।',
      en: 'The mind remains highly curious and active. There is a desire to learn many new things simultaneously. The person evaluates every situation analytically.'
    },
    remedies: {
      hi: 'बुधवार को भगवान गणेश की पूजा करना, हरी वस्तुओं का दान करना, और पेड़-पौधे लगाना बुध ग्रह के सकारात्मक प्रभावों को बढ़ाता है।',
      en: 'Worshipping Lord Ganesha on Wednesdays, donating green items, and planting trees enhances the positive effects of Mercury.'
    }
  },
  ketu: {
    slug: 'ketu',
    planet: 'केतु (Ketu)',
    durationYears: 7,
    name: { hi: 'केतु महादशा', en: 'Ketu Mahadasha' },
    introduction: {
      hi: 'केतु की महादशा 7 वर्ष की होती है। केतु को मोक्ष, वैराग्य, अंतर्ज्ञान (Intuition), और रहस्यमय विद्याओं का कारक माना जाता है। यह बुध की बौद्धिक दशा के बाद आता है और व्यक्ति को आत्मनिरीक्षण और आध्यात्मिकता की ओर मोड़ता है।',
      en: 'The Ketu Mahadasha lasts for 7 years. Ketu is considered the significator of Moksha (liberation), detachment, intuition, and mystical sciences. Coming after Mercury\'s intellectual period, it forces the individual towards introspection and spirituality.'
    },
    generalEffects: {
      hi: 'यह समय भौतिक चीजों से मोहभंग और आध्यात्मिक जागृति का होता है। शुभ केतु गहरे शोध, ध्यान और अचानक सफलता दे सकता है। अशुभ केतु भ्रम, अकेलेपन की भावना, अस्पष्ट बीमारियां और जीवन में अचानक नुकसान का कारण बन सकता है।',
      en: 'This is a time of disillusionment with material things and spiritual awakening. A benefic Ketu can grant deep research abilities, meditative success, and sudden achievements. A malefic Ketu can cause confusion, feelings of isolation, undiagnosable illnesses, and sudden losses.'
    },
    careerFinance: {
      hi: 'शोध (Research), ज्योतिष, कंप्यूटर प्रोग्रामिंग या आध्यात्मिक कार्यों में सफलता मिल सकती है। पारंपरिक करियर में रुचि कम हो सकती है और करियर में अचानक बदलाव आ सकते हैं।',
      en: 'Success can be found in research, astrology, computer programming, or spiritual work. Interest in traditional careers may wane, and sudden career shifts are possible.'
    },
    relationshipsFamily: {
      hi: 'व्यक्ति अपने परिवार और सामाजिक संपर्कों से कुछ हद तक कटा हुआ महसूस कर सकता है। रिश्तों में वैराग्य या गलतफहमी की स्थिति उत्पन्न हो सकती है।',
      en: 'The individual may feel somewhat disconnected from family and social circles. A sense of detachment or misunderstandings can arise in relationships.'
    },
    psychologicalChanges: {
      hi: 'अंतर्ज्ञान (Sixth sense) बहुत मजबूत हो जाता है। व्यक्ति के मन में "मैं कौन हूँ?" जैसे गहरे दार्शनिक प्रश्न उठते हैं।',
      en: 'Intuition (the sixth sense) becomes very strong. Deep philosophical questions like "Who am I?" arise in the mind.'
    },
    remedies: {
      hi: 'भगवान गणेश या कुत्ता (भैरव का प्रतीक) की सेवा करना, ध्यान (Meditation) करना, और किसी भी प्रकार के नशे से दूर रहना केतु के कुप्रभावों को कम करता है।',
      en: 'Serving Lord Ganesha or feeding dogs (symbol of Bhairav), practicing meditation, and strictly avoiding intoxicants mitigates Ketu\'s negative effects.'
    }
  },
  shukra: {
    slug: 'shukra',
    planet: 'शुक्र (Venus)',
    durationYears: 20,
    name: { hi: 'शुक्र महादशा', en: 'Venus Mahadasha' },
    introduction: {
      hi: 'शुक्र की महादशा 20 वर्ष तक चलती है, जो राहु के बाद दूसरी सबसे लंबी दशा है। शुक्र प्रेम, विवाह, कला, विलासिता (Luxury) और वाहन का कारक है। केतु की आध्यात्मिक दशा के बाद, शुक्र की दशा व्यक्ति को वापस भौतिक सुखों और आनंद की ओर ले जाती है।',
      en: 'The Venus (Shukra) Mahadasha lasts for 20 years, making it the second longest after Rahu. Venus signifies love, marriage, art, luxury, and vehicles. Following Ketu\'s spiritual phase, Venus brings the individual back to material comforts and enjoyment.'
    },
    generalEffects: {
      hi: 'यह महादशा जीवन में आराम, रोमांस और सौंदर्य लाती है। मजबूत शुक्र अपार धन, वाहन सुख, और एक खुशहाल वैवाहिक जीवन प्रदान करता है। कमजोर या पीड़ित शुक्र चरित्र दोष, अत्यधिक खर्च, या वैवाहिक कलह का कारण बन सकता है।',
      en: 'This Mahadasha brings comfort, romance, and beauty into life. A strong Venus grants immense wealth, vehicle comforts, and a happy marital life. A weak or afflicted Venus can cause character flaws, excessive spending, or marital discord.'
    },
    careerFinance: {
      hi: 'कला, फैशन, सिनेमा, संगीत, सौंदर्य प्रसाधन या आतिथ्य (Hospitality) से जुड़े करियर में अपार सफलता मिलती है। धन कमाने और उसे विलासिता की वस्तुओं पर खर्च करने की प्रवृत्ति बढ़ती है।',
      en: 'Immense success is found in careers related to art, fashion, cinema, music, cosmetics, or hospitality. The tendency to earn wealth and spend it on luxurious items increases.'
    },
    relationshipsFamily: {
      hi: 'रोमांस और विवाह के लिए यह सबसे बेहतरीन समय माना जाता है। जीवनसाथी के साथ संबंध मधुर होते हैं और परिवार में उत्सव का माहौल रहता है।',
      en: 'It is considered the best time for romance and marriage. Relationships with the spouse become harmonious, and there is a festive atmosphere in the family.'
    },
    psychologicalChanges: {
      hi: 'व्यक्ति अधिक मिलनसार, कलात्मक और जीवन का आनंद लेने वाला हो जाता है। सौंदर्य और आराम की गहरी चाहत होती है।',
      en: 'The person becomes more sociable, artistic, and life-enjoying. There is a deep craving for beauty and comfort.'
    },
    remedies: {
      hi: 'शुक्रवार को देवी लक्ष्मी की पूजा करना, महिलाओं का सम्मान करना, और इत्र या सफेद वस्तुओं का उपयोग करना शुक्र को अनुकूल बनाता है।',
      en: 'Worshipping Goddess Lakshmi on Fridays, respecting women, and using perfumes or white items makes Venus favorable.'
    }
  }
};
