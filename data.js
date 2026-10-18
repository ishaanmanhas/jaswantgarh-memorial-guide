

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
    image: "assets/images/nuranag-cover.png",
   gallery: [
  {
    src: "assets/images/Nura/battle-map.png",
    en: "Battlefield overview / tactical map",
    hi: "नूरानांग युद्धक्षेत्र का मानचित्र"
  },
  {
    src: "assets/images/Nura/mmg.png",
    en: "Sten Machine Gun MK 5",
    hi: "स्टेन मशीन गन मार्क 5"
  },
  {
    src: "assets/images/Nura/Bust-2.png",
    en: "Bust of Rfn Jaswant Singh",
    hi: "राइफलमैन जसवंत सिंह रावत की आवक्ष प्रतिमा"
  }
],
    audio: {en:"assets/audio/nura.mp3", hi:"assets/audio/Hindi_Nura.mp3"},
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
      heading: "नूरानांग का युद्ध",
heading: "नूरानांग का युद्ध",
body: [
  `<strong>शौर्य, संकल्प एवं सर्वोच्च बलिदान की गाथा</strong>`,

  `<span class="story-date">28 अक्टूबर 1962</span>
   <span class="story-title">तैनाती एवं दायित्व</span>
   भारत–चीन युद्ध के दौरान <strong>4 गढ़वाल राइफल्स</strong> को
   <strong>नूरानांग, वर्तमान जसवंतगढ़</strong>, में सेला की मुख्य भारतीय
   रक्षापंक्ति के अग्रिम सुरक्षा बल के रूप में तैनात किया गया था।
   बटालियन का दायित्व चीनी सेना की प्रगति को बाधित एवं विलंबित करना था,
   ताकि शत्रु मुख्य रक्षात्मक मोर्चों तक निर्बाध न पहुँच सके।`,

  `<span class="story-date">17 नवंबर 1962</span>
   <span class="story-title">शत्रु का जमावड़ा एवं प्रारंभिक आक्रमण</span>
   एक गश्ती दल ने <strong>‘ए’ कंपनी के सम्मुख चीन की दो पैदल सेना
   बटालियनों</strong> के एकत्र होने की पुष्टि की। प्रातः लगभग
   <strong>0500 बजे</strong>, चीनी सेना ने <strong>नंबर 2 प्लाटून</strong>
   के मोर्चे पर पहला आक्रमण किया।`,

  `<strong>0500 से 0900 बजे के बीच</strong>, शत्रु ने तीन क्रमिक आक्रमण
   किए। गढ़वाली सैनिकों ने अदम्य साहस और दृढ़ संकल्प का परिचय देते हुए
   प्रत्येक आक्रमण को विफल किया तथा अपने मोर्चों पर डटे रहे।`,

  `<span class="story-date">1000 बजे</span>
   <span class="story-title">चतुर्थ आक्रमण एवं गंभीर चुनौती</span>
   चौथे आक्रमण के दौरान शत्रु ने अपनी रणनीति में परिवर्तन किया।
   चीनी सैनिकों ने निकटतम भारतीय <strong>लाइट मशीन गन (एलएमजी) बंकर से
   मात्र 30 मीटर की दूरी पर एक मीडियम मशीन गन (एमएमजी)</strong> स्थापित
   कर दी। अत्यंत निकट से हो रही इसकी गोलीबारी भारतीय मोर्चे के लिए
   गंभीर चुनौती बन गई।`,

  `इस संकट का तत्काल निवारण करने के लिए <strong>सेकंड लेफ्टिनेंट
   एस. एन. टंडन</strong> ने शत्रु के एमएमजी ठिकाने पर कार्रवाई हेतु
   स्वयंसेवकों का आह्वान किया।`,

  `<span class="story-title">शत्रु के एमएमजी ठिकाने पर साहसिक धावा</span>
   <strong>लांस नायक त्रिलोक सिंह नेगी, राइफलमैन जसवंत सिंह रावत एवं
   राइफलमैन गोपाल सिंह गुसाईं</strong> ने इस अत्यंत जोखिमपूर्ण कार्य
   का दायित्व स्वेच्छा से स्वीकार किया।`,

  `शत्रु की तीव्र गोलीबारी के बीच तीनों सैनिक रेंगते हुए एमएमजी ठिकाने
   से लगभग <strong>15 गज की दूरी</strong> तक पहुँच गए।
   <strong>लांस नायक त्रिलोक सिंह नेगी ने आड़ देने के लिए गोलीबारी की</strong>,
   जबकि <strong>राइफलमैन जसवंत सिंह रावत और राइफलमैन गोपाल सिंह गुसाईं
   ने ठिकाने पर धावा बोलकर शत्रु की एमएमजी पर अधिकार कर लिया।</strong>`,

  `<span class="story-title">कर्तव्यनिष्ठा एवं सर्वोच्च बलिदान</span>
   वापसी के दौरान शत्रु के स्वचालित हथियारों की गोलीबारी में
   <strong>लांस नायक त्रिलोक सिंह नेगी वीरगति को प्राप्त हुए</strong>।
   <strong>राइफलमैन जसवंत सिंह रावत और राइफलमैन गोपाल सिंह गुसाईं</strong>
   भी घायल हो गए।`,

  `घायल होने के बावजूद <strong>राइफलमैन जसवंत सिंह रावत शत्रु से प्राप्त
   एमएमजी को लेकर भारतीय मोर्चे की ओर बढ़ते रहे</strong> और इसी प्रयास
   में कर्तव्यपथ पर अपने प्राणों का सर्वोच्च बलिदान दिया। तत्पश्चात,
   <strong>राइफलमैन गोपाल सिंह गुसाईं घायल अवस्था में ही उस हथियार को
   कंपनी के मोर्चे तक ले आए।</strong>`,

  `<strong>इन तीनों वीरों का अदम्य साहस, अटूट कर्तव्यनिष्ठा और आत्मोत्सर्ग
   भारतीय सेना की गौरवशाली परंपराओं का अमिट अध्याय है।</strong>`
],
location: "नूरानांग / जसवंतगढ़",
time: "8–12 मिनट",
available: "ऐतिहासिक वृत्तांत · मानचित्र · चित्र दीर्घा · ऑडियो"
    }
  },

  {
    id: "chinese-graveyard",
    group: "history",
    image: "assets/images/Chinese/back.png",
    gallery: [
  {
    src: "assets/images/Chinese/place.jpg",
    en: "Chinese Graveyard",
    hi: "चीनी सैनिकों का कब्रिस्तान"
  },
  {
    src: "assets/images/Chinese/board.jpg",
    en: "Historical Inscription",
    hi: "ऐतिहासिक विवरण पट्ट"
  },
  {
    src: "assets/images/Chinese/photo.png",
    en: "Bust of Rifleman Jaswant Singh Rawat",
    hi: "राइफलमैन जसवंत सिंह रावत की आवक्ष प्रतिमा"
  }
],
    audio: {en:"assets/audio/Graveyard.mp3", hi:"assets/audio/Chinese_Hindi.mp3"},
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
      heading: "इतिहास का मूक साक्षी",
body: [

  `<span class="story-date">1965</span>
   <span class="story-title">चीनी कब्रिस्तान का निर्माण</span>
   इस कब्रिस्तान का निर्माण <strong>1965</strong> में किया गया था।
   यहाँ 1962 के भारत–चीन युद्ध के बाद
   <strong>300 से अधिक चीनी सैनिकों के अवशेष</strong>
   दफनाए गए थे।`,

  `<span class="story-date">17 नवंबर 1962</span>
   <span class="story-title">नूरानांग का युद्ध</span>
   <strong>17 नवंबर 1962</strong> को चीन की
   <strong>पीपुल्स लिबरेशन आर्मी</strong> ने
   <strong>नूरानांग के भारतीय रक्षात्मक मोर्चों</strong> पर आक्रमण किया।
   <strong>4 गढ़वाल राइफल्स</strong> के सैनिकों ने
   शत्रु के लगातार तीन आक्रमणों को विफल कर दिया।`,

  `<span class="story-title">युद्ध में हुई क्षति</span>
   इस कार्रवाई में <strong>500 से अधिक चीनी सैनिक हताहत हुए</strong>।
   वहीं, <strong>4 गढ़वाल राइफल्स</strong> के
   <strong>दो सैनिक वीरगति को प्राप्त हुए और चार सैनिक घायल हुए</strong>।`,

  `<span class="story-highlight">
   नूरानांग के युद्ध की मानवीय कीमत का मूक साक्षी
   </span>`,

  `<span class="story-title">स्मरण का स्थल</span>
   आज यह कब्रिस्तान नूरानांग के युद्ध से जुड़ा एक ऐतिहासिक स्थल है।
   यह उन सैनिकों की स्मृति को संजोए हुए है,
   जिन्होंने इस संघर्ष में अपने प्राण गँवाए।`

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
  {
    src: "assets/images/tree/tree1.jpg",
    en: "The Sacred Tree of Rifleman Jaswant Singh Rawat",
    hi: "राइफलमैन जसवंत सिंह रावत का पवित्र वृक्ष"
  },
  {
    src: "assets/images/tree/tree3.jpg",
    en: "Bust of Rifleman Jaswant Singh Rawat",
    hi: "राइफलमैन जसवंत सिंह रावत की आवक्ष प्रतिमा"
  }
],
    audio: {en:"assets/audio/Tree_English.mp3", hi:"assets/audio/Tree_Hindi.mp3"},
    video: "",
    map: "assets/images/Nura/map.png",
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
    image: "assets/images/martyr-cover.png",
   gallery: [
  {
    src: "assets/images/heroes/jaswant-singh.png",
    en: "Rifleman Jaswant Singh Rawat",
    hi: "राइफलमैन जसवंत सिंह रावत"
  },
  {
    src: "assets/images/heroes/trilok-singh.png",
    en: "Lance Naik Trilok Singh Negi",
    hi: "लांस नायक त्रिलोक सिंह नेगी"
  },
  {
    src: "assets/images/heroes/gopal-singh.png",
    en: "Rifleman Gopal Singh Gusain",
    hi: "राइफलमैन गोपाल सिंह गुसाईं"
  },
  {
    src: "assets/images/heroes/sangram-singh.png",
    en: "Havildar Sangram Singh",
    hi: "हवलदार संग्राम सिंह"
  },
  {
    src: "assets/images/heroes/hukum-singh.png",
    en: "Hukum Singh Rawat",
    hi: "हुकुम सिंह रावत"
  },
  {
    src: "assets/images/heroes/jangbir-singh.png",
    en: "Lance Naik Jangbir Singh",
    hi: "लांस नायक जंगबीर सिंह"
  },
  {
    src: "assets/images/heroes/bakhtawar-singh.png",
    en: "Rifleman Bakhtawar Singh Bhandari",
    hi: "राइफलमैन बख्तावर सिंह भंडारी"
  },
  {
    src: "assets/images/heroes/dhyan-singh.png",
    en: "Rifleman Dhyan Singh Bisht",
    hi: "राइफलमैन ध्यान सिंह बिष्ट"
  },
  {
    src: "assets/images/heroes/dilbar-singh.png",
    en: "Rifleman Dilbar Singh Bisht",
    hi: "राइफलमैन दिलबर सिंह बिष्ट"
  },
  {
    src: "assets/images/heroes/gulab-singh.png",
    en: "Rifleman Gulab Singh Chirkhundi",
    hi: "राइफलमैन गुलाब सिंह चिरखुंडी"
  },
  {
    src: "assets/images/heroes/kunwar-singh.png",
    en: "Rifleman Kunwar Singh Rana",
    hi: "राइफलमैन कुंवर सिंह राणा"
  },
  {
    src: "assets/images/heroes/madan-singh.png",
    en: "Rifleman Madan Singh Rawat",
    hi: "राइफलमैन मदन सिंह रावत"
  },
  {
    src: "assets/images/heroes/prem-singh.png",
    en: "Rifleman Prem Singh Rawat",
    hi: "राइफलमैन प्रेम सिंह रावत"
  },
  {
    src: "assets/images/heroes/hayat-singh.png",
    en: "Subedar Hayat Singh Rauthan",
    hi: "सूबेदार हयात सिंह रौथाण"
  },
  {
    src: "assets/images/heroes/jatan-singh.png",
    en: "Subedar Major and Honorary Captain Jatan Singh",
    hi: "सूबेदार मेजर एवं मानद कैप्टन जतन सिंह"
  },
  {
    src: "assets/images/heroes/udai-singh.png",
    en: "Subedar Udai Singh Rawat",
    hi: "सूबेदार उदय सिंह रावत"
  }
],
    audio: {en:"assets/audio/martyrs-en.mp3", hi:"assets/audio/martyrs-hi.mp3"},
    video: "",
    map: "",
    en: {
      checkpoint:"Section 4 · Remembrance",
      title: "Martyrs & Gallantry Heroes",
card: "Honouring the fallen and the gallantry of the Fourth Battalion of the Garhwal Rifles during the 1962 War.",
summary: "Explore the roll of honour, portraits of the brave, and accounts of gallantry from the 1962 War.",
heading: "In Honour of the Brave",
   body: [
  `This page honours the soldiers of the <strong>Fourth Battalion of the Garhwal Rifles and its attached personnel</strong> who gave their lives during the 1962 India–China War and commemorates those recognised for their gallantry.`,

  `Behind every name is a life of service, a family and a story deserving remembrance. The roll of honour preserves the names of the fallen while the portraits and gallantry citations bring visitors closer to the men and their deeds.`,

  `<span class="story-highlight">We remember their courage. We honour their sacrifice. We preserve their legacy.</span>`
],
      location:"Memorial gallery",
      time:"8–15 minutes",
      available:"Profiles · Gallery · Citations · Audio"
    },
    hi: {
      checkpoint: "खंड 4 · स्मरण",
title: "अमर शहीद एवं शौर्यवीर",
summary: "शहीदों की नामावली, वीरों की छवियों और वीरता की गाथाओं के माध्यम से 1962 के युद्ध में उनके योगदान को जानें।",
heading: "वीरों को नमन",
      body: [
  `यह पृष्ठ <strong>गढ़वाल राइफल्स की चौथी बटालियन तथा उससे संबद्ध सैन्यकर्मियों</strong> को समर्पित है जिन्होंने 1962 के भारत–चीन युद्ध में अपने प्राणों का सर्वोच्च बलिदान दिया। यह उन शौर्यवीरों की वीरता का भी स्मरण करता है जिन्हें उनके पराक्रम के लिए सम्मानित किया गया।`,

  `प्रत्येक नाम के पीछे सेवा को समर्पित एक जीवन, एक परिवार और स्मरण योग्य एक गाथा है। शहीदों की नामावली उनके नामों को संजोती है जबकि वीरों के चित्र और प्रशस्ति-पत्र उनके जीवन एवं साहसिक कार्यों से हमारा परिचय कराते हैं।`,

  `<span class="story-highlight">उनके शौर्य को नमन। उनके बलिदान को प्रणाम। उनकी गौरवगाथा सदैव अमर रहे।</span>`
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
    background: "assets/images/nearby-bg.png",
    group: "legacy",
    image: "assets/images/nearby-cover.png",
    gallery: [
      {src:"assets/images/explore.svg", en:"Nearby places overview", hi:"आसपास के स्थानों का अवलोकन"},
      {src:"assets/images/explore.svg", en:"Add scenic destination photograph", hi:"यहाँ दर्शनीय स्थल का चित्र जोड़ें"},
      {src:"assets/images/explore.svg", en:"Add route / visitor photograph", hi:"यहाँ मार्ग / आगंतुक चित्र जोड़ें"}
    ],
    audio: {en:"assets/audio/explore-en.mp3", hi:"assets/audio/explore-hi.mp3"},
    video: "assets/video/nearby-places.mp4",
map: "assets/images/nearby-places.png",
    en: {
      checkpoint:"Section 5 · Visitor Experience",
      title:"Explore Nearby",
      card:"Continue your journey with nearby historical, cultural and scenic places around Jaswantgarh.",
      summary:"A practical guide to nearby places of interest, supported by photographs and route information.",
      heading: "Discover Arunachal Pradesh",
heading: "Explore Beyond Jaswantgarh",
body: [
  `<strong class="nearby-place-title">Nuranang Waterfall · Jang Falls</strong>
  A spectacular waterfall surrounded by green hills. Pause to enjoy the cascading water and mountain scenery.`,

  `<strong class="nearby-place-title">Sela Pass &amp; Sela Lake</strong>
  Dramatic mountain views and a high-altitude lake. A scenic stop along your journey through the Eastern Himalayas.`,

  `<strong class="nearby-place-title">Tawang</strong>
  Explore the monastery, stroll through the town and pay homage at the war memorial.`,

  `<strong class="nearby-place-title">Sangti Valley</strong>
  A peaceful valley with riverside scenery and open fields. Take a quiet break amid the mountains.`,

  `<strong class="nearby-place-title">Chug Valley</strong>
  Discover village life and mountain landscapes. A quieter stop for those who enjoy exploring at a relaxed pace.`,

  `<strong class="nearby-place-title">Thembang Heritage Village</strong>
  Explore traditional architecture and Monpa heritage in a historic mountain village.`,

  `<strong class="nearby-place-title">Zemithang Valley &amp; Gorsam Chorten</strong>
  Discover a quiet Himalayan valley and the impressive Gorsam Chorten, a place of Buddhist faith and heritage.`
],
      location:"Around Jaswantgarh",
      time:"Visitor dependent",
      available:"Places · Routes · Gallery · Visitor Info"
    },
    hi: {
      checkpoint:"खंड 5 · आगंतुक अनुभव",
      title:"आसपास भ्रमण करें",
      card:"जसवंतगढ़ के आसपास के ऐतिहासिक, सांस्कृतिक और दर्शनीय स्थानों के साथ अपनी यात्रा जारी रखें।",
      summary:"चित्रों और मार्ग संबंधी जानकारी के साथ आसपास के प्रमुख स्थलों की उपयोगी मार्गदर्शिका।",
      heading: "अरुणाचल प्रदेश की सुंदरता को जानें",
heading: "जसवंतगढ़ से आगे की यात्रा",
body: [
  `<strong class="nearby-place-title">नूरानांग जलप्रपात · जंग फॉल्स</strong>
  हरी पहाड़ियों के बीच गिरता भव्य जलप्रपात। बहते पानी और पर्वतीय दृश्यों का आनंद लेने के लिए यहाँ कुछ समय बिताएँ।`,

  `<strong class="nearby-place-title">सेला दर्रा एवं सेला झील</strong>
  ऊँचे पर्वतों के बीच स्थित झील और मनोहारी दृश्य। पूर्वी हिमालय की यात्रा में एक सुंदर पड़ाव।`,

  `<strong class="nearby-place-title">तवांग</strong>
  तवांग मठ के दर्शन करें, नगर में घूमें और युद्ध स्मारक पर वीर सैनिकों को श्रद्धांजलि अर्पित करें।`,

  `<strong class="nearby-place-title">सांगती घाटी</strong>
  नदी किनारे के दृश्य और खुले खेतों वाली शांत घाटी। पहाड़ों के बीच कुछ सुकून भरे पल बिताएँ।`,

  `<strong class="nearby-place-title">चुग घाटी</strong>
  ग्रामीण जीवन और पर्वतीय सुंदरता को करीब से देखें। आराम से घूमने वालों के लिए एक शांत पड़ाव।`,

  `<strong class="nearby-place-title">थेम्बांग विरासत गाँव</strong>
  इस ऐतिहासिक पर्वतीय गाँव में पारंपरिक वास्तुकला और मोनपा सांस्कृतिक विरासत से परिचित हों।`,

  `<strong class="nearby-place-title">ज़ेमिथांग घाटी एवं गोरसम चोर्टेन</strong>
  शांत हिमालयी घाटी और भव्य गोरसम चोर्टेन का भ्रमण करें। बौद्ध आस्था और सांस्कृतिक विरासत को जानने का अवसर।`
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
const MARTYRS_ROLL = `
MS-6416|Capt|BK Nath, AMC (RMO)
IC-12073|Lt|Hari Kishan Dev
IC-12323|2Lt|Vinod Kumar Goswami, VrC
JC-5032|Sub|Hayat Singh Rauthan
JC-10920|Jem|Pratap Singh Rawat
JC-10361|Jem|Kumbhajeshwar Prasad Dhasmana, AEC
JC-15219|Jem|Bhawan Singh Ramola
4029400|Nk|Sangram Singh Chauhan
4030313|LNk|Man Singh Rawat
4030960|Nk|Natha Singh Negi
4031266|Hav|Bhawan Singh Negi
4031361|Nk|Dev Singh Mahar
4031632|Nk|Gabar Singh Rawat
4032348|Hav|Meharwan Singh Bhandari
4032908|LHav|Sohan Singh Kathait
4032932|CHM|Alam Singh Negi
4033157|CHM|Kanthu Singh Rawat
4033666|Hav|Hukam Sigh Rawat
4034193|Nk|Madan Singh Rawat
4034544|Rfn (Ck)|Dhyan Singh Bisht
4034551|Rfn|Mangal Singh Negi
4034642|Rfn (Ck)|Shyam Singh Rawat
4034649|Nk|Balwant Singh Pundir
4034684|Nk (Clk)|Kripal Singh Negi
4034944|Rfn|Dalip Singh Rawat
4034956|LNk|Bachan Singh Bisht
4035064|LNk|Darwan Singh Barthwal
4035104|Nk|Prem Singh Rawat
4035267|LNk|Ganga Singh Pundir
4035362|LNk|Bachan Singh Bisht
4035539|LNk|Puran Singh Rawat
4035588|LNk|Gabar Singh Dusad
4035740|Rfn|Dev Singh Bisht
4035824|LNk|Bachi Ram Dobriyal
4035883|Rfn|Kripal Singh Negi
4035996|Rfn|Shivraj Singh Rawat
4036070|Rfn|Araj Mani Sharma
4036210|Rfn|Bakhtawar Singh Negi
4036214|Rfn|Inder Singh Bisht
4036216|LNk|Bakhtawar Singh Bhandari
4036237|LNk|Umrao Singh Bisht
4036280|Rfn|Dharma Nanda Deowal
4036287|Rfn|Matbar Singh Rawat
4036324|LNk|Bharat Singh Rawat
4036348|Nk|Khem Singh Bisht
4036463|Rfn (Ck)|Gyan Singh Negi
4036514|Rfn|Bakhtawar Singh Rawat
4036540|Rfn|Shivraj Singh Negi
4036847|Rfn (Carp)|Narayan Singh Rana
4036860|LNk|Umrao Singh Bhandari
4036941|Rfn|Khushal Singh Gusain
4036956|Rfn|Alam Singh Negi
4036960|Rfn|Ram Chander Nainwal
4037167|Rfn|Anand Singh Rawat
4037168|Rfn|Ghusdu Singh Kandiyal
4037197|Rfn|Pushkar Singh Negi
4037238|Rfn|Anar Singh Dhotyal
4037528|Rfn|Narayan Singh Bisht
4037586|Rfn|Murlidhar Bijlwan
4037598|Rfn|Udai Singh Sunar
4037612|Rfn|Bhuvneshwar Prasad Khanduri
4037614|LNk|Trilok Singh Negi, VrC
4037620|LNk|Bhaktawar Singh Rawat
4037635|LNk|Jagat Singh Negi
4037716|Rfn|Madan Singh Rawat
4037742|Rfn|Bhairav Singh Rawat
4037774|Rfn|Suresha Nand Khanduri
4037791|Rfn|Trilok Singh Panwar
4037816|LNk|Keshwa Nand Dhyani
4037822|LNk|Nanda Singh Rawat
4037834|Rfn|Prabhu Dayal Bedwal
4037867|Rfn|Dhan Singh Negi
4037868|LNk|Rajendra Singh Bisht
4037872|Rfn|Harsh Mani Mawal
4037879|Rfn|Jagat Singh Rawat
4037915|Rfn|Yashwant Singh Negi
4037921|Rfn|Dalip Singh Negi
4037927|LNk|Kundan Singh Rawat
4037982|Rfn|Man Singh Rawat
4038015|Rfn|Yudhvir Singh Chinwan
4038044|Rfn|Awatar Singh Chinwan
4038053|Rfn|Dharam Singh Kunwar
4038126|Rfn|Chait Singh Negi
4038153|Rfn|Chitra Singh Rawat
4038154|Rfn|Kundan Singh Negi
4038155|Rfn|Kunwar Singh Rana
4038157|Rfn|Dharam Singh Negi
4038164|Rfn|Dhyan Singh Rawat
4038229|Rfn|Sidha Singh Bisht
4038256|Rfn|Vidhya Datt Purohit
4038259|Rfn|Dwarika Prasad Sati
4038260|Rfn|Thakur Singh Negi
4038300|Rfn|Dalip Singh Negi
4038355|Rfn (Ck)|Awar Singh Chinwan
4038364|Rfn|Mahavir Prasad Deoli
4038376|Rfn|Khem Singh Rawat
4038385|Rfn|Darwan Singh Pundir
4038388|Rfn|Gulab Singh Chirkhuni
4038391|Rfn|Hayat Singh Chauhan
4038449|Rfn|Ratan Singh Dotiyal
4038457|Rfn|Sitab Singh Negi
4038560|Rfn|Narendar Singh Rawat
4038645|Rfn|Ram Sarup Lakhera
4038657|Rfn|Puran Singh Rawat
4038757|Rfn|Diwan Singh Chinwan
4038802|Rfn|Bakhtawar Singh Bisht
4038831|Rfn|Suresha Nand Bhatt
4038835|Rfn|Anand Singh Gusain
4038869|Rfn|Hukam Singh Rana
4038980|Rfn|Ranjit Singh Rawat
4039009|Rfn|Jaswant Singh Rawat, MVC
4039012|Rfn|Sadho Singh Rawat
4039013|Rfn|Rup Singh Rawat
4039016|Rfn|Shyam Singh Rana
4039027|Rfn|Satya Singh Pundir
4039042|Rfn|Gauri Datt Chamoli
4039045|Rfn|Dharam Nand Balodhi
4039094|Rfn|Kunwar Singh Rawat
4039232|Rfn|Bhagat Singh Negi
4039286|Rfn|Dalip Singh Negi
4039287|Rfn|Fateh Singh Negi
4039290|Rfn|Amar Dev Bhatt
4039389|Rfn|Tek Singh Rawat
4039408|Rfn|Shyam Singh Dhanola
4039426|Rfn|Govind Singh Rawat
4039430|Rfn|Mohan Singh Bangari
4039493|Rfn|Hari Singh Rawat
4039572|Rfn|Lakhan Singh Rawat
4039606|Rfn (Tlr)|Darshan Lal
4039614|Rfn|Jeet Singh Lingwal
4039615|Rfn|Dhyal Singh
4039632|Rfn|Bhawan Singh Gusain
4039708|Rfn|Raichand Singh Negi
4039738|Rfn|Govind Singh Bhandari
4039759|Rfn|Data Ram Dyani
4039779|Rfn|Narayan Singh Gusain
4039786|Rfn|Balbir Singh Negi
4039791|Rfn|Darwan Singh Rana
4039842|Rfn|Balam Singh Negi
4039881|Rfn|Trilok Singh Chauhan
4039885|Rfn|Shyam Singh Negi
4039889|Rfn|Trilok Singh Gusain
4039907|Rfn|Dalbir Singh Negi
4040004|Rfn|Yogeshwar Prasad Baunthiyal
4040006|Rfn|Govind Singh Bisht
4040008|Rfn|Madan Singh Rawat, VrC
4040013|Rfn|Sundar Singh Rawat
4040014|Rfn|Gaje Singh Rawat
4040016|Rfn|Dalbir Singh Bisht
4040018|Rfn|Kalam Singh Bisht
4040020|Rfn|Bir Singh Bisht
4040066|Rfn|Chiranji Lal Semwal
4040069|Rfn|Madan Singh Pundir
4040226|Rfn|Trilok Singh Rawat
4040236|Rfn|Pancham Singh Danu
4037089|(W/M)|Sita Ram
4037412|Mess/Cook|Ram Singh
4038030|Barber|Shri Ram
4038032|Sweeper|Jhandu Ram
4038127|Barber|Rama Dhar
4038204|Rfn/(W/M)|Kumar Shahi
4038271|Sweeper|Gopal Dass
`.trim().split("\n").map(line => {
  const [armyNo, rank, name] = line.split("|");
  return { armyNo, rank, name };
});

const GALLANTRY_HEROES = [
  {
    number: "IC-1338",
    award: "mvc",
    posthumous: false,
    en: {
      name: "Lieutenant Colonel B. M. Bhattacharjea",
      text: "As Commanding Officer of the Fourth Battalion of the Garhwal Rifles, Lieutenant Colonel B. M. Bhattacharjea organised the defences at Nuranang, supervised preparations and restored confidence after the withdrawal from Tawang. He personally inspected forward posts, checked ammunition and encouraged vigorous patrolling. During the attacks on 17 November 1962, he reinforced the forward company and arranged ammunition supply and casualty evacuation. His vigilance, determination and leadership enabled the battalion to repel repeated assaults."
    },
    hi: {
      name: "लेफ्टिनेंट कर्नल बी. एम. भट्टाचार्जी",
      text: "गढ़वाल राइफल्स की चौथी बटालियन के कमान अधिकारी के रूप में लेफ्टिनेंट कर्नल बी. एम. भट्टाचार्जी ने नूरानांग की रक्षा तैयारियों का नेतृत्व किया और तवांग से वापसी के बाद सैनिकों का मनोबल बढ़ाया। उन्होंने अग्रिम चौकियों का निरीक्षण किया, गोला-बारूद की उपलब्धता सुनिश्चित की और गश्ती गतिविधियों को प्रोत्साहित किया। 17 नवंबर 1962 के आक्रमणों के दौरान उन्होंने अग्रिम कंपनी को अतिरिक्त सैनिक भेजे तथा गोला-बारूद की आपूर्ति और घायलों की निकासी की व्यवस्था की। उनकी सतर्कता, दृढ़ संकल्प और नेतृत्व से बटालियन बार-बार हुए आक्रमणों को विफल करने में सफल रही।"
    }
  },
  {
    number: "4039009",
    award: "mvc",
    posthumous: true,
    en: {
      name: "Rifleman Jaswant Singh Rawat",
      text: "On 17 November 1962, Rifleman Jaswant Singh Rawat volunteered with Lance Naik Trilok Singh Negi and Rifleman Gopal Singh Gusain to silence an enemy medium machine gun threatening their company’s defences. While Trilok Singh provided covering fire, Jaswant Singh and Gopal Singh attacked the position with grenades and captured the weapon. During their withdrawal, Jaswant Singh was fatally wounded close to the Indian trenches while carrying the captured machine gun. His courage and sacrifice were recognised with the Maha Vir Chakra, awarded posthumously."
    },
    hi: {
      name: "राइफलमैन जसवंत सिंह रावत",
      text: "17 नवंबर 1962 को राइफलमैन जसवंत सिंह रावत ने लांस नायक त्रिलोक सिंह नेगी और राइफलमैन गोपाल सिंह गुसाईं के साथ शत्रु की उस मीडियम मशीन गन को निष्क्रिय करने का दायित्व स्वेच्छा से स्वीकार किया जो कंपनी की रक्षा के लिए गंभीर खतरा बन गई थी। त्रिलोक सिंह ने आड़ देने के लिए गोलीबारी की जबकि जसवंत सिंह और गोपाल सिंह ने ग्रेनेड से धावा बोलकर मशीन गन पर अधिकार कर लिया। वापसी के दौरान कब्ज़े में ली गई मशीन गन को लेकर भारतीय खाइयों के निकट पहुँचते समय जसवंत सिंह वीरगति को प्राप्त हुए। उनके अदम्य साहस और सर्वोच्च बलिदान के लिए उन्हें मरणोपरांत महावीर चक्र प्रदान किया गया।"
    }
  },
  {
    number: "IC-12323",
    award: "vrc",
    posthumous: true,
    en: {
      name: "Second Lieutenant Vinod Kumar Goswami",
      text: "On 14 November 1962, Second Lieutenant Vinod Kumar Goswami led a patrol to observe Chinese movements across the Tawang Chu near Rho village. After reconnaissance, he took a small party across the river under cover of darkness. With Rifleman Madan Singh Rawat, he attempted to capture an enemy sentry and seized his rifle. When the encounter drew enemy fire, he directed the patrol’s withdrawal. The party returned to battalion headquarters with the captured weapon on 15 November. He was awarded the Vir Chakra posthumously."
    },
    hi: {
      name: "सेकंड लेफ्टिनेंट विनोद कुमार गोस्वामी",
      text: "14 नवंबर 1962 को सेकंड लेफ्टिनेंट विनोद कुमार गोस्वामी ने रो गाँव के निकट तवांग चू के पार चीनी गतिविधियों का पता लगाने के लिए एक गश्ती दल का नेतृत्व किया। क्षेत्र की टोह लेने के बाद वे अंधेरे में एक छोटे दल के साथ नदी पार कर गए। राइफलमैन मदन सिंह रावत के साथ उन्होंने शत्रु के एक संतरी को पकड़ने का प्रयास किया और उसकी राइफल छीन ली। शत्रु की गोलीबारी शुरू होने पर उन्होंने दल की वापसी का नेतृत्व किया। गश्ती दल 15 नवंबर को कब्ज़े में ली गई राइफल के साथ बटालियन मुख्यालय लौटा। उन्हें मरणोपरांत वीर चक्र प्रदान किया गया।"
    }
  },
  {
    number: "IC-12691",
    award: "vrc",
    posthumous: false,
    en: {
      name: "Second Lieutenant Surendra Nath Tandon",
      text: "Second Lieutenant Surendra Nath Tandon commanded Alpha Company in the foremost defensive position at Nuranang. On 17 November 1962, he moved among forward posts under fire, encouraged his men and maintained control during repeated attacks. He requested reinforcements and distributed them among his platoons. When an enemy medium machine gun threatened the defences, he coordinated with Subedar Udai Singh Rawat to send volunteers against it. His courage, initiative and leadership helped the company hold its position."
    },
    hi: {
      name: "सेकंड लेफ्टिनेंट सुरेंद्र नाथ टंडन",
      text: "सेकंड लेफ्टिनेंट सुरेंद्र नाथ टंडन नूरानांग की सबसे अग्रिम रक्षात्मक स्थिति में तैनात अल्फा कंपनी का नेतृत्व कर रहे थे। 17 नवंबर 1962 को वे शत्रु की गोलीबारी के बीच अग्रिम चौकियों तक पहुँचे, सैनिकों का उत्साह बढ़ाया और लगातार आक्रमणों के दौरान कंपनी पर प्रभावी नियंत्रण बनाए रखा। उन्होंने अतिरिक्त सैनिकों की माँग की और उन्हें अपनी प्लाटूनों में तैनात किया। शत्रु की मीडियम मशीन गन से खतरा उत्पन्न होने पर उन्होंने सूबेदार उदय सिंह रावत के साथ समन्वय कर स्वयंसेवकों को कार्रवाई के लिए भेजा। उनके साहस, पहल और नेतृत्व ने कंपनी को अपने मोर्चे पर डटे रहने में महत्वपूर्ण योगदान दिया।"
    }
  },
  {
    number: "JC-10211",
    award: "vrc",
    posthumous: false,
    en: {
      name: "Subedar Udai Singh Rawat",
      text: "Subedar Udai Singh Rawat commanded Number Three Platoon of Alpha Company at Nuranang. During the attacks on 17 November 1962, he maintained effective command of the position protecting the company’s left rear flank. When an enemy medium machine gun threatened his platoon, he coordinated with the company commander and supported the volunteers sent to capture it. His steadfast leadership and control helped prevent a breach that could have endangered the company and battalion defences."
    },
    hi: {
      name: "सूबेदार उदय सिंह रावत",
      text: "सूबेदार उदय सिंह रावत नूरानांग में अल्फा कंपनी की नंबर तीन प्लाटून का नेतृत्व कर रहे थे। 17 नवंबर 1962 के आक्रमणों के दौरान उन्होंने कंपनी के बाएँ पिछले पार्श्व की रक्षा कर रही अपनी प्लाटून पर प्रभावी नियंत्रण बनाए रखा। शत्रु की मीडियम मशीन गन से खतरा उत्पन्न होने पर उन्होंने कंपनी कमांडर के साथ समन्वय किया और उस पर कब्ज़ा करने गए स्वयंसेवकों को सहायता दी। उनके दृढ़ नेतृत्व और नियंत्रण ने ऐसे भेदन को रोका जिससे कंपनी तथा बटालियन की रक्षा संकट में पड़ सकती थी।"
    }
  },
  {
    number: "JC-10921",
    award: "vrc",
    posthumous: false,
    en: {
      name: "Jemadar Jatan Singh Gusain",
      text: "Jemadar Jatan Singh Gusain commanded Number One Platoon at Nuranang. On 17 November 1962, when the crew of a light machine gun was wounded, he operated the weapon himself and helped repel the assault. He also brought wounded section commander Naik Ranjit Singh Gusain to safety. During operations near Nyukmadong the following day, he silenced an enemy machine-gun position. When the force was subsequently ambushed, he gathered 41 men and led them out. His conduct demonstrated outstanding bravery and leadership."
    },
    hi: {
      name: "जमादार जतन सिंह गुसाईं",
      text: "जमादार जतन सिंह गुसाईं नूरानांग में नंबर एक प्लाटून का नेतृत्व कर रहे थे। 17 नवंबर 1962 को एक लाइट मशीन गन के सैनिकों के घायल होने पर उन्होंने स्वयं हथियार सँभाला और आक्रमण को विफल करने में योगदान दिया। उन्होंने घायल सेक्शन कमांडर नायक रणजीत सिंह गुसाईं को भी सुरक्षित स्थान तक पहुँचाया। अगले दिन न्युकमाडोंग के निकट कार्रवाई के दौरान उन्होंने शत्रु की मशीन गन के ठिकाने को निष्क्रिय किया। बाद में दल के घात में फँस जाने पर उन्होंने 41 सैनिकों को एकत्र किया और उन्हें बाहर निकाल लाए। उनका आचरण उत्कृष्ट वीरता और नेतृत्व का उदाहरण था।"
    }
  },
  {
    number: "4037614",
    award: "vrc",
    posthumous: true,
    en: {
      name: "Lance Naik Trilok Singh Negi",
      text: "On 17 November 1962, Lance Naik Trilok Singh Negi volunteered with Rifleman Jaswant Singh Rawat and Rifleman Gopal Singh Gusain to attack an enemy medium machine gun near their platoon position. He provided covering fire with his Sten gun while his comrades assaulted the position and captured the weapon. Though severely wounded by enemy fire, he continued covering their withdrawal before succumbing to his injuries. He was awarded the Vir Chakra posthumously."
    },
    hi: {
      name: "लांस नायक त्रिलोक सिंह नेगी",
      text: "17 नवंबर 1962 को लांस नायक त्रिलोक सिंह नेगी ने राइफलमैन जसवंत सिंह रावत और राइफलमैन गोपाल सिंह गुसाईं के साथ अपनी प्लाटून के निकट स्थित शत्रु की मीडियम मशीन गन पर धावा बोलने का दायित्व स्वेच्छा से स्वीकार किया। उन्होंने अपनी स्टेन गन से आड़ देने के लिए गोलीबारी की जबकि उनके साथियों ने ठिकाने पर धावा बोलकर हथियार पर कब्ज़ा कर लिया। शत्रु की गोलीबारी से गंभीर रूप से घायल होने के बावजूद वे अपने साथियों की वापसी को सुरक्षा देते रहे और अंततः वीरगति को प्राप्त हुए। उन्हें मरणोपरांत वीर चक्र प्रदान किया गया।"
    }
  },
  {
    number: "4038646",
    award: "vrc",
    posthumous: false,
    en: {
      name: "Rifleman Gopal Singh Gusain",
      text: "On 17 November 1962, Rifleman Gopal Singh Gusain joined Lance Naik Trilok Singh Negi and Rifleman Jaswant Singh Rawat in a voluntary assault on an enemy medium machine gun. Under covering fire, he and Jaswant Singh attacked with grenades and seized the weapon. Enemy automatic fire struck the party during its withdrawal. Although badly wounded, Gopal Singh reached the Indian trenches and received first aid before evacuation. His courage and teamwork were recognised with the Vir Chakra."
    },
    hi: {
      name: "राइफलमैन गोपाल सिंह गुसाईं",
      text: "17 नवंबर 1962 को राइफलमैन गोपाल सिंह गुसाईं ने लांस नायक त्रिलोक सिंह नेगी और राइफलमैन जसवंत सिंह रावत के साथ शत्रु की मीडियम मशीन गन पर धावा बोलने का दायित्व स्वेच्छा से स्वीकार किया। आड़ देने वाली गोलीबारी के बीच उन्होंने जसवंत सिंह के साथ ग्रेनेड से हमला किया और हथियार पर कब्ज़ा कर लिया। वापसी के दौरान दल शत्रु के स्वचालित हथियारों की गोलीबारी की चपेट में आ गया। गंभीर रूप से घायल होने के बावजूद गोपाल सिंह भारतीय खाइयों तक पहुँचे जहाँ उन्हें प्राथमिक उपचार दिया गया और बाद में सुरक्षित निकाला गया। उनके साहस और सामूहिक कार्रवाई के लिए उन्हें वीर चक्र प्रदान किया गया।"
    }
  },
  {
    number: "4040008",
    award: "vrc",
    posthumous: true,
    en: {
      name: "Rifleman Madan Singh Rawat",
      text: "On the night of 14 November 1962, Rifleman Madan Singh Rawat accompanied Second Lieutenant Vinod Kumar Goswami on a patrol across the Tawang Chu near Rho village. During an attempt to capture an enemy sentry, he restrained the sentry while the patrol leader seized the rifle. Despite the intervention of another enemy soldier and incoming fire, he showed exceptional courage and determination. The patrol withdrew to its base during the early hours of 15 November. He was awarded the Vir Chakra posthumously."
    },
    hi: {
      name: "राइफलमैन मदन सिंह रावत",
      text: "14 नवंबर 1962 की रात राइफलमैन मदन सिंह रावत सेकंड लेफ्टिनेंट विनोद कुमार गोस्वामी के नेतृत्व में रो गाँव के निकट तवांग चू के पार गए गश्ती दल में शामिल थे। शत्रु के एक संतरी को पकड़ने के प्रयास में उन्होंने उसे काबू में रखा जबकि गश्ती दल के नेता ने उसकी राइफल छीन ली। दूसरे शत्रु सैनिक के हस्तक्षेप और गोलीबारी के बावजूद उन्होंने असाधारण साहस तथा दृढ़ संकल्प दिखाया। गश्ती दल 15 नवंबर के शुरुआती घंटों में अपने आधार स्थान पर लौट आया। उन्हें मरणोपरांत वीर चक्र प्रदान किया गया।"
    }
  },
  {
    number: "4034010",
    award: "sm",
    posthumous: false,
    en: {
      name: "Naik Ranjit Singh Gusain",
      text: "On 17 November 1962, Naik Ranjit Singh Gusain commanded a forward section of Number One Platoon. Under repeated attacks and heavy shelling, he encouraged his men and maintained the defence. Seeing enemy troops approaching below his position, he moved to an exposed trench from which he could use grenades more effectively. Despite a bullet wound to his head, he continued resisting the assault until he lost consciousness. He was brought to safety and evacuated. His gallantry was recognised with the Sena Medal."
    },
    hi: {
      name: "नायक रणजीत सिंह गुसाईं",
      text: "17 नवंबर 1962 को नायक रणजीत सिंह गुसाईं नंबर एक प्लाटून के एक अग्रिम सेक्शन का नेतृत्व कर रहे थे। लगातार आक्रमणों और भारी गोलाबारी के बीच उन्होंने सैनिकों का उत्साह बनाए रखा तथा मोर्चे की रक्षा की। अपनी स्थिति के नीचे शत्रु सैनिकों को आते देखकर वे एक खुली खाई में पहुँचे जहाँ से ग्रेनेड अधिक प्रभावी ढंग से फेंके जा सकते थे। सिर में गोली लगने के बावजूद वे अचेत होने तक आक्रमण का प्रतिरोध करते रहे। उन्हें सुरक्षित स्थान पर लाकर उपचार के लिए निकाला गया। उनकी वीरता के लिए उन्हें सेना पदक प्रदान किया गया।"
    }
  },
  {
    number: "JC-11778",
    award: "mid",
    posthumous: false,
    en: {
      name: "Jemadar Gabar Singh Rawat",
      text: null
    },
    hi: {
      name: "जमादार गबर सिंह रावत",
      text: null
    }
  }
];