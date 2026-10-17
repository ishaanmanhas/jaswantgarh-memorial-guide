

const SITE_TEXT = {
  en: {
    heroEyebrow: "A DIGITAL MEMORIAL EXPERIENCE",
    heroTitle: "Jaswantgarh Memorial<br>Guide",
    heroCopy: "Scan the QR code at any memorial location or explore every story below.",
    exploreBtn: "Explore Memorial",
    storyKicker: "HISTORY & BATTLEFIELD",
    storyHeading: "The Story of Nuranang",
    legacyKicker: "REMEMBRANCE & LEGACY",
    legacyHeading: "Honour, Memory & Exploration",
    footerText: "A bilingual digital memorial guide designed for visitors at Jaswantgarh.",
    backGuide: "Memorial Guide",
    listenStory: "Listen to Story",
    showQr: "Show QR Code",
    pauseStory: "Pause Narration",
    historicalAccount: "HISTORICAL ACCOUNT",
    visitorQuick: "VISITOR GUIDE",
    locationLabel: "Location",
    recommendedTime: "Suggested time",
    contentAvailable: "Available",
    mediaKicker: "VISUAL ARCHIVE",
    galleryHeading: "Gallery & Media",
    videoHeading: "Watch the Story",
    mapKicker: "MAP / REFERENCE",
    mapHeading: "Understand the Location",
    previous: "Previous",
    next: "Next",
    audioFallback: "Demo narration is being read by your browser. Replace it with your recorded MP3 later.",
    audioMissing: "Add the recorded audio file in /assets/audio to use professional narration.",
    noVideo: "Add your documentary / memorial video file here.",
    noMap: "Add your battlefield map, site plan or visitor map here."
  },
  hi: {
    heroEyebrow: "एक डिजिटल स्मारक अनुभव",
    heroTitle: "जसवंतगढ़ स्मारक<br>मार्गदर्शिका",
    heroCopy: "स्मारक स्थल पर लगे QR कोड को स्कैन करें या नीचे दिए गए सभी प्रसंगों को देखें।",
    exploreBtn: "स्मारक देखें",
    storyKicker: "इतिहास एवं युद्धक्षेत्र",
    storyHeading: "नुरानांग की गाथा",
    legacyKicker: "स्मरण एवं विरासत",
    legacyHeading: "सम्मान, स्मृति एवं भ्रमण",
    footerText: "जसवंतगढ़ आने वाले आगंतुकों के लिए द्विभाषी डिजिटल स्मारक मार्गदर्शिका।",
    backGuide: "स्मारक मार्गदर्शिका",
    listenStory: "कथा सुनें",
    showQr: "QR कोड देखें",
    pauseStory: "वाचन रोकें",
    historicalAccount: "ऐतिहासिक विवरण",
    visitorQuick: "आगंतुक मार्गदर्शिका",
    locationLabel: "स्थान",
    recommendedTime: "अनुमानित समय",
    contentAvailable: "उपलब्ध",
    mediaKicker: "दृश्य अभिलेख",
    galleryHeading: "चित्र एवं मीडिया",
    videoHeading: "कथा देखें",
    mapKicker: "मानचित्र / संदर्भ",
    mapHeading: "स्थान को समझें",
    previous: "पिछला",
    next: "अगला",
    audioFallback: "डेमो वाचन आपके ब्राउज़र द्वारा चलाया जा रहा है। बाद में रिकॉर्ड किया हुआ MP3 जोड़ें।",
    audioMissing: "प्रोफेशनल वाचन के लिए /assets/audio में रिकॉर्ड की हुई ऑडियो फ़ाइल जोड़ें।",
    noVideo: "यहाँ अपना डॉक्यूमेंट्री / स्मारक वीडियो जोड़ें।",
    noMap: "यहाँ युद्धक्षेत्र मानचित्र, साइट प्लान या आगंतुक मानचित्र जोड़ें।"
  }
};

const EXHIBITS = [
  {
    id: "nuranang",
    group: "history",
    image: "assets/images/Nura/battle-map.png",
    gallery: [
      {src:"assets/images/Nura/battle-map.png", en:"Battlefield overview / tactical map", hi:"युद्धक्षेत्र का अवलोकन / सामरिक मानचित्र"},
      {src:"assets/images/Nura/mmg.png", en:"Sten Machine Gun MK 5", hi:"यहाँ अभिलेखीय चित्र जोड़ें"},
      {src:"assets/images/Nura/Bust-2.png", en:"Bust of Rfn Jaswant Singh", hi:"यहाँ वर्तमान स्थल का चित्र जोड़ें"}
    ],
    audio: {en:"assets/audio/nura.mp3", hi:"assets/audio/nuranang-hi.mp3"},
    video: "",
    map: "assets/images/Nura/map.png",
    en: {
      checkpoint:"Checkpoint 1 · Main Battlefield",
      title:"Battle of Nuranang",
      card:"Discover the battle, terrain, tactical sequence and the courage displayed at Nuranang.",
      summary:"Explore the battlefield story through maps, photographs, narration and a detailed historical account.",
      heading:"The Battle at Nuranang",
      body: [

  `<span class="story-date">28 OCTOBER 1962</span>
   <span class="story-title">The Deployment</span>
   During the Indo-China War of 1962, <strong>4 GARH RIF</strong> was deployed at
   <strong>Nuranang, now Jaswantgarh</strong>, as covering troops for the main Indian
   defences at Sela. Their task was critical—to delay and disrupt any Chinese advance
   towards the main defensive positions.`,

  `<span class="story-date">17 NOVEMBER 1962</span>
   <span class="story-title">The Enemy Builds Up</span>
   A patrol confirmed that <strong>two Chinese infantry battalions</strong> had
   concentrated opposite ‘A’ Company. At approximately <strong>0500 hours</strong>,
   the Chinese launched their first assault against No. 2 Platoon.
   Between 0500 and 0900 hours, three successive attacks were repulsed by the Garhwalis.`,

  `<span class="story-date">1000 HOURS</span>
   <span class="story-title">The Fourth Attack</span>
   During the fourth assault, the Chinese changed their tactics. An enemy
   <strong>Medium Machine Gun</strong> was positioned barely
   <strong>30 metres</strong> from the nearest Indian LMG bunker.
   Realising the danger, <strong>2/Lt S N Tandon</strong> called for volunteers.`,

  `<span class="story-title">The Assault on the MMG</span>
   <strong>Lnk Trilok Singh Negi, Rfn Jaswant Singh Rawat and Rfn Gopal Singh Gusain</strong>
   crawled forward under intense enemy fire until they were only 15 yards from the
   Chinese MMG position. Jaswant Singh and Gopal Singh charged the position while
   Trilok Singh provided covering fire.`,

  `<span class="story-title">Courage and Sacrifice</span>
   During the withdrawal, Lnk Trilok Singh was killed by enemy automatic fire.
   Jaswant Singh and Gopal Singh were wounded. Despite his injuries,
   <strong>Rfn Jaswant Singh continued towards the Indian position with the captured MMG</strong>
   and lost his life in the process. Rfn Gopal Singh subsequently carried the weapon
   back to the Company position.`,

  `<span class="story-highlight">
   THE MYTH OF CHINESE INVINCIBILITY HAD BEEN SHATTERED
   </span>`,

  `<span class="story-title">Jaswantgarh Memorial</span>
   The courage displayed at Nuranang continues to be commemorated at Jaswantgarh.
   The memorial preserves the memory of the battle, its soldiers and the sacrifice
   associated with 17 November 1962.`

],
      location:"Nuranang / Jaswantgarh sector",
      time:"8–12 minutes",
      available:"History · Map · Gallery · Video · Audio"
    },
    hi: {
      checkpoint:"चेकपॉइंट 1 · मुख्य युद्धक्षेत्र",
      title:"नुरानांग का युद्ध",
      card:"नुरानांग के युद्ध, भूभाग, सामरिक घटनाक्रम और प्रदर्शित वीरता को जानें।",
      summary:"मानचित्र, चित्र, वाचन और विस्तृत ऐतिहासिक विवरण के माध्यम से युद्धक्षेत्र की कहानी देखें।",
      heading:"नुरानांग की लड़ाई",
      body:[
        "यह नमूना पाठ है। इसे नुरानांग के युद्ध के सत्यापित ऐतिहासिक विवरण से बदलें।",
        "विवरण को चरणों में बाँटा जा सकता है — तैनाती, शत्रु की प्रगति, हमले, वीरता के प्रसंग, वापसी और इस कार्रवाई का महत्व।",
        "आगंतुकों के लिए प्रारंभिक विवरण संक्षिप्त रखें और विस्तृत सामरिक जानकारी, मानचित्र तथा अभिलेखीय सामग्री नीचे रखें।"
      ],
      location:"नुरानांग / जसवंतगढ़ क्षेत्र",
      time:"8–12 मिनट",
      available:"इतिहास · मानचित्र · गैलरी · वीडियो · ऑडियो"
    }
  },

  {
    id: "chinese-graveyard",
    group: "history",
    image: "assets/images/Chinese/back.png",
    gallery: [
      {src:"assets/images/Chinese/place.jpg", en:"Chinese Graveyard", hi:"चीनी कब्रिस्तान"},
      {src:"assets/images/Chinese/board.jpg", en:"The Details", hi:"यहाँ स्मारक पट्ट का चित्र जोड़ें"},
      {src:"assets/images/Chinese/photo.png", en:"Rfn Jaswant Singh", hi:"यहाँ स्थल का विस्तृत चित्र जोड़ें"}
    ],
    audio: {en:"assets/audio/graveyard-en.mp3", hi:"assets/audio/graveyard-hi.mp3"},
    video: "",
    map: "assets/images/Nura/map.png",
    en: {
      checkpoint:"Checkpoint 2 · Memorial Grounds",
      title:"The Chinese Graveyard",
      card:"Understand the graveyard, its historical context and its place in the memory of the 1962 conflict.",
      summary:"A historical interpretation of the site, supported by photographs and bilingual narration.",
      heading:"A Place of Historical Memory",
      body: [

  `<span class="story-date">1965</span>
   <span class="story-title">The Chinese Graveyard</span>
   This graveyard was constructed in <strong>1965</strong>, where the remains of more than
   <strong>300 Chinese soldiers</strong> were buried following the 1962 Indo-China War.`,

  `<span class="story-date">17 NOVEMBER 1962</span>
   <span class="story-title">The Battle at Nuranang</span>
   The PLA attacked the defended locality of <strong>Nuranang</strong> on
   <strong>17 November 1962</strong>. The assault was repulsed three times by the
   troops of <strong>4 Garhwal Rifles</strong>.`,

  `<span class="story-title">Battle Casualties</span>
   The action resulted in more than <strong>500 Chinese casualties</strong>,
   while <strong>4 Garhwal Rifles</strong> suffered
   <strong>2 fatal and 4 non-fatal casualties</strong>.`,

  `<span class="story-highlight">
   A SILENT REMINDER OF THE COST OF THE BATTLE OF NURANANG
   </span>`,

  `<span class="story-title">A Place of Remembrance</span>
   Today, the graveyard remains a historical site associated with the Battle of Nuranang
   and preserves the memory of those who lost their lives during the fighting.`

],
      location:"Jaswantgarh memorial area",
      time:"4–6 minutes",
      available:"History · Gallery · Audio"
    },
    hi: {
      checkpoint:"चेकपॉइंट 2 · स्मारक परिसर",
      title:"चीनी कब्रिस्तान",
      card:"कब्रिस्तान के इतिहास, उसके संदर्भ और 1962 के संघर्ष की स्मृति में उसके स्थान को जानें।",
      summary:"चित्रों और द्विभाषी वाचन के साथ इस स्थल का ऐतिहासिक परिचय।",
      heading:"इतिहास की स्मृति का एक स्थल",
      body:[
        "यह नमूना पाठ है। इसे कब्रिस्तान, उसके निर्माण, यहाँ दफन सैनिकों और ऐतिहासिक संदर्भ से संबंधित सत्यापित जानकारी से बदलें।",
        "यह पृष्ठ यह भी समझा सकता है कि इस स्थल को क्यों संरक्षित रखा गया है और यह युद्ध की मानवीय कीमत को समझने में कैसे सहायता करता है।"
      ],
      location:"जसवंतगढ़ स्मारक क्षेत्र",
      time:"4–6 मिनट",
      available:"इतिहास · गैलरी · ऑडियो"
    }
  },

  {
    id: "jaswant-tree",
    group: "history",
    image: "assets/images/tree/bg.png",
    gallery: [
      {src:"assets/images/tree/tree1.jpg", en:"Rifleman Jaswant Singh's Tree", hi:"राइफलमैन जसवंत सिंह का वृक्ष"},
      {src:"assets/images/tree/tree3.jpg", en:"Add close detail photograph", hi:"यहाँ निकट दृश्य का चित्र जोड़ें"},
      {src:"assets/images/tree.svg", en:"Add visitor / memorial photograph", hi:"यहाँ स्मारक / आगंतुक चित्र जोड़ें"}
    ],
    audio: {en:"assets/audio/tree-en.mp3", hi:"assets/audio/tree-hi.mp3"},
    video: "",
    map: "",
    en: {
      checkpoint:"Checkpoint 3 · Living Memorial",
      title:"Rifleman Jaswant Singh's Tree",
      card:"Explore the story, symbolism and remembrance associated with this sacred memorial point.",
      summary:"A commemorative story told through photographs, text and bilingual audio.",
      heading:"A Silent Witness",
      body: [

  `<span class="story-title">The Tree of Remembrance</span>
   This tree holds profound significance as it is believed that
   <strong>Rifleman Jaswant Singh Rawat, MVC (Posthumous)</strong>,
   after sustaining fatal injuries during the 1962 Indo-China War,
   took his final breath beneath its shade.`,

  `<span class="story-title">A Sacred Sentinel</span>
   Though the tree now stands lifeless, its roots remain deeply embedded in the soil —
   echoing the spirit of bravery and devotion.`,

  `<span class="story-title">Faith and श्रद्धा</span>
   Locals and visitors offer prayers, seek blessings and write letters,
   believing that the brave soul still guards the land.`,

  `<span class="story-highlight">
   MORE THAN JUST A TREE, IT STANDS AS A SACRED SENTINEL
   </span>`,

  `<span class="story-title">An Enduring Symbol</span>
   More than just a tree, it stands as a living testament to bravery and honour,
   continuing to inspire generations who visit Jaswantgarh.`

],
      location:"Jaswantgarh Memorial",
      time:"4–6 minutes",
      available:"Story · Gallery · Audio"
    },
    hi: {
      checkpoint:"चेकपॉइंट 3 · जीवंत स्मारक",
      title:"राइफलमैन जसवंत सिंह का वृक्ष",
      card:"इस पवित्र स्मारक बिंदु से जुड़ी कथा, प्रतीकात्मकता और स्मरण को जानें।",
      summary:"चित्रों, पाठ और द्विभाषी ऑडियो के माध्यम से एक स्मरणात्मक कथा।",
      heading:"एक मौन साक्षी",
      body:[
        "इस भाग में वृक्ष से जुड़ा सत्यापित विवरण और जसवंतगढ़ आने वाले आगंतुकों के लिए उसका महत्व लिखें।",
        "इस पृष्ठ का स्वर युद्धक्षेत्र पृष्ठ की तुलना में अधिक स्मरणात्मक हो सकता है, लेकिन सत्यापित इतिहास और बाद की मान्यताओं को स्पष्ट रूप से अलग रखें।"
      ],
      location:"जसवंतगढ़ स्मारक",
      time:"4–6 मिनट",
      available:"कथा · गैलरी · ऑडियो"
    }
  },

  {
    id: "martyrs",
    group: "legacy",
    image: "assets/images/martyrs.svg",
    gallery: [
      {src:"assets/images/martyrs.svg", en:"Martyrs gallery / portraits", hi:"शहीदों की गैलरी / चित्र"},
      {src:"assets/images/martyrs.svg", en:"Add citation / memorial display", hi:"यहाँ प्रशस्ति / स्मारक प्रदर्शनी जोड़ें"},
      {src:"assets/images/martyrs.svg", en:"Add unit heritage photograph", hi:"यहाँ इकाई विरासत का चित्र जोड़ें"}
    ],
    audio: {en:"assets/audio/martyrs-en.mp3", hi:"assets/audio/martyrs-hi.mp3"},
    video: "",
    map: "",
    en: {
      checkpoint:"Section 4 · Remembrance",
      title:"The Martyrs",
      card:"Meet the brave soldiers remembered here through profiles, photographs, citations and stories of courage.",
      summary:"A dedicated remembrance gallery for the men whose courage forms the heart of the memorial.",
      heading:"Remembering the Brave",
      body:[
        "This section is best designed as a collection of individual profiles rather than one long article.",
        "For each martyr you can include rank, name, unit, photograph, role in the battle, citation or verified account, and a short bilingual narration.",
        "Later, this starter page can be expanded into separate profile pages without changing the overall design."
      ],
      location:"Memorial gallery",
      time:"8–15 minutes",
      available:"Profiles · Gallery · Citations · Audio"
    },
    hi: {
      checkpoint:"खंड 4 · स्मरण",
      title:"शहीद वीर",
      card:"प्रोफाइल, चित्र, प्रशस्ति और वीरता की कथाओं के माध्यम से स्मरण किए गए सैनिकों को जानें।",
      summary:"उन वीर सैनिकों को समर्पित स्मरण गैलरी जिनका साहस इस स्मारक का केंद्र है।",
      heading:"वीरों का स्मरण",
      body:[
        "इस खंड को एक लंबे लेख की बजाय अलग-अलग वीरों की प्रोफाइल के रूप में बनाना अधिक प्रभावी होगा।",
        "प्रत्येक प्रोफाइल में पद, नाम, इकाई, चित्र, युद्ध में भूमिका, प्रशस्ति या सत्यापित विवरण तथा संक्षिप्त द्विभाषी वाचन शामिल किया जा सकता है।",
        "बाद में इसी डिजाइन के भीतर अलग-अलग प्रोफाइल पृष्ठ भी जोड़े जा सकते हैं।"
      ],
      location:"स्मारक गैलरी",
      time:"8–15 मिनट",
      available:"प्रोफाइल · गैलरी · प्रशस्ति · ऑडियो"
    }
  },

  {
    id: "shaurya-bhoomi",
    group: "legacy",
    image: "assets/images/shaurya.svg",
    gallery: [
      {src:"assets/images/shaurya.svg", en:"Shaurya Bhoomi", hi:"शौर्य भूमि"},
      {src:"assets/images/shaurya.svg", en:"Add feature / monument photograph", hi:"यहाँ स्मारक विशेषता का चित्र जोड़ें"},
      {src:"assets/images/shaurya.svg", en:"Add ceremonial photograph", hi:"यहाँ समारोह का चित्र जोड़ें"}
    ],
    audio: {en:"assets/audio/shaurya-en.mp3", hi:"assets/audio/shaurya-hi.mp3"},
    video: "",
    map: "",
    en: {
      checkpoint:"Section 5 · Legacy",
      title:"Shaurya Bhoomi",
      card:"Discover the meaning, features and commemorative significance of Shaurya Bhoomi.",
      summary:"A visitor-focused interpretation of Shaurya Bhoomi and the values it commemorates.",
      heading:"A Landscape of Courage",
      body:[
        "Use this page to explain what Shaurya Bhoomi represents, the features a visitor should notice and the larger memorial idea behind the space.",
        "Photos, short video clips and a calm bilingual narration will work particularly well here."
      ],
      location:"Jaswantgarh Memorial complex",
      time:"5–8 minutes",
      available:"Significance · Gallery · Video · Audio"
    },
    hi: {
      checkpoint:"खंड 5 · विरासत",
      title:"शौर्य भूमि",
      card:"शौर्य भूमि के अर्थ, प्रमुख विशेषताओं और स्मरणात्मक महत्व को जानें।",
      summary:"शौर्य भूमि और उसके द्वारा स्मरण किए जाने वाले मूल्यों का आगंतुक-केंद्रित परिचय।",
      heading:"वीरता की भूमि",
      body:[
        "इस पृष्ठ में शौर्य भूमि के अर्थ, आगंतुकों द्वारा देखी जाने वाली प्रमुख विशेषताओं और इस स्थान की व्यापक स्मारक अवधारणा को समझाएँ।",
        "यहाँ चित्र, छोटे वीडियो और शांत द्विभाषी वाचन विशेष रूप से प्रभावी रहेंगे।"
      ],
      location:"जसवंतगढ़ स्मारक परिसर",
      time:"5–8 मिनट",
      available:"महत्व · गैलरी · वीडियो · ऑडियो"
    }
  },

  {
    id: "explore-nearby",
    group: "legacy",
    image: "assets/images/explore.svg",
    gallery: [
      {src:"assets/images/explore.svg", en:"Nearby places overview", hi:"आसपास के स्थानों का अवलोकन"},
      {src:"assets/images/explore.svg", en:"Add scenic destination photograph", hi:"यहाँ दर्शनीय स्थल का चित्र जोड़ें"},
      {src:"assets/images/explore.svg", en:"Add route / visitor photograph", hi:"यहाँ मार्ग / आगंतुक चित्र जोड़ें"}
    ],
    audio: {en:"assets/audio/explore-en.mp3", hi:"assets/audio/explore-hi.mp3"},
    video: "",
    map: "",
    en: {
      checkpoint:"Section 6 · Visitor Experience",
      title:"Explore Nearby",
      card:"Continue your journey with nearby historical, cultural and scenic places around Jaswantgarh.",
      summary:"A practical guide to nearby places of interest, supported by photographs and route information.",
      heading:"Continue the Journey",
      body:[
        "Use this section as a visitor guide rather than a historical exhibit.",
        "Create individual destination cards with a photograph, short description, approximate distance, travel time and a map link.",
        "This section can grow over time without affecting the core memorial history."
      ],
      location:"Around Jaswantgarh",
      time:"Visitor dependent",
      available:"Places · Routes · Gallery · Visitor Info"
    },
    hi: {
      checkpoint:"खंड 6 · आगंतुक अनुभव",
      title:"आसपास भ्रमण करें",
      card:"जसवंतगढ़ के आसपास के ऐतिहासिक, सांस्कृतिक और दर्शनीय स्थानों के साथ अपनी यात्रा जारी रखें।",
      summary:"चित्रों और मार्ग संबंधी जानकारी के साथ आसपास के प्रमुख स्थलों की उपयोगी मार्गदर्शिका।",
      heading:"यात्रा आगे बढ़ाएँ",
      body:[
        "इस खंड को ऐतिहासिक प्रदर्शनी की बजाय आगंतुक मार्गदर्शिका के रूप में रखें।",
        "हर स्थान के लिए चित्र, संक्षिप्त परिचय, अनुमानित दूरी, यात्रा समय और मानचित्र लिंक वाला कार्ड बनाया जा सकता है।",
        "यह खंड समय के साथ बढ़ाया जा सकता है और इससे मूल स्मारक इतिहास प्रभावित नहीं होगा।"
      ],
      location:"जसवंतगढ़ के आसपास",
      time:"आगंतुक पर निर्भर",
      available:"स्थान · मार्ग · गैलरी · आगंतुक जानकारी"
    }
  }
];

function getExhibit(id){
  return EXHIBITS.find(item => item.id === id) || EXHIBITS[0];
}
