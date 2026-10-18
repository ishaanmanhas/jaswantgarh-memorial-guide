const params = new URLSearchParams(location.search);
const exhibitId = params.get("id") || "nuranang";
const exhibit = getExhibit(exhibitId);
// Hide narration and QR buttons in these three sections.
if (["martyrs", "shaurya-bhoomi", "explore-nearby"].includes(exhibit.id)) {
  document.querySelector(".audio-box").style.display = "none";
}

const state = {
  lang: localStorage.getItem("jaswantgarh-language") || "en",
  speaking: false
};

const hero = document.getElementById("exhibit-hero");
const audio = document.getElementById("narration");
const audioToggle = document.getElementById("audio-toggle");
const audioIcon = document.getElementById("audio-icon");
const audioLabel = document.getElementById("audio-label");
const audioStatus = document.getElementById("audio-status");

function setLanguage(lang){
  stopAudio();

  state.lang = lang;
  localStorage.setItem("jaswantgarh-language", lang);
  document.documentElement.lang = lang === "hi" ? "hi" : "en";

  document.querySelectorAll(".lang-btn").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(SITE_TEXT[lang][key] !== undefined){
      el.innerHTML = SITE_TEXT[lang][key];
    }
  });

  renderExhibit();
}

function renderExhibit(){
  const t = exhibit[state.lang];
  document.title = `${t.title} | Jaswantgarh Memorial Guide`;

  const backgroundImage = exhibit.id === "explore-nearby"
  ? "assets/images/nearby-bg.png"
  : (exhibit.background || exhibit.image);

hero.style.setProperty("--hero", `url("${backgroundImage}")`);

if (exhibit.id === "explore-nearby") {
  hero.style.backgroundImage = `url("${backgroundImage}")`;
  hero.style.backgroundSize = "cover";
  hero.style.backgroundPosition = "center";
}
  document.getElementById("detail-eyebrow").textContent = t.checkpoint;
  document.getElementById("detail-title").textContent = t.title;
  document.getElementById("detail-summary").textContent = t.summary;
  document.getElementById("story-heading").textContent = t.heading;
  document.getElementById("story-body").innerHTML = t.body.map(p=>`<p>${p}</p>`).join("");

  document.getElementById("location-value").textContent = t.location;
  document.getElementById("time-value").textContent = t.time;
  document.getElementById("available-value").textContent = t.available;

  audio.src = exhibit.audio[state.lang] || "";
  audioLabel.textContent = SITE_TEXT[state.lang].listenStory;
  audioIcon.textContent = "▶";
  audioStatus.textContent = "";
  renderHonourRoll();
    renderGallantry();
  renderGallery();
  renderVideo();
  renderMap();
  renderNavigation();
    customiseNearbyPage();
}

function renderGallery(){
    const galleryBox = document.getElementById("gallery");
  galleryBox.classList.toggle("heroes-gallery", exhibit.id === "martyrs");

  if (exhibit.id === "martyrs") {
    const gallerySection = galleryBox.closest(".media-section");

    gallerySection.querySelector('[data-i18n="mediaKicker"]').textContent =
      state.lang === "hi" ? "स्मृति चित्र" : "IN REMEMBRANCE";

    gallerySection.querySelector('[data-i18n="galleryHeading"]').textContent =
      state.lang === "hi" ? "वीरों की छवियाँ" : "Portraits of the Brave";
  }
  const box = document.getElementById("gallery");
  box.innerHTML = exhibit.gallery.map((item,i)=>{
    const caption = item[state.lang] || item.en || "";
    return `
      <button class="gallery-item" type="button" data-index="${i}">
        <img src="${item.src}" alt="${caption}">
        <span class="gallery-caption">${caption}</span>
      </button>
    `;
  }).join("");

  box.querySelectorAll(".gallery-item").forEach(btn=>{
    btn.addEventListener("click",()=>openLightbox(Number(btn.dataset.index)));
  });
}

function renderVideo(){
  const box = document.getElementById("video-box");
  if(exhibit.video){
    box.innerHTML = `<video controls playsinline src="${exhibit.video}"></video>`;
  }else{
    box.innerHTML = `<div class="media-placeholder"><strong>${SITE_TEXT[state.lang].videoHeading}</strong>${SITE_TEXT[state.lang].noVideo}</div>`;
  }
}

function renderMap(){
  const section = document.getElementById("map-section");
  const box = document.getElementById("map-box");

  if(exhibit.map){
    section.style.display = "";
    box.innerHTML = `<img src="${exhibit.map}" alt="${SITE_TEXT[state.lang].mapHeading}">`;
  }else{
    section.style.display = "";
    box.innerHTML = `<div class="media-placeholder"><strong>${SITE_TEXT[state.lang].mapHeading}</strong>${SITE_TEXT[state.lang].noMap}</div>`;
  }
}

function renderNavigation(){
const visibleExhibits = EXHIBITS.filter(
  item => item.id !== "shaurya-bhoomi"
);

const idx = visibleExhibits.findIndex(
  item => item.id === exhibit.id
);

const prev = visibleExhibits[
  (idx - 1 + visibleExhibits.length) % visibleExhibits.length
];

const next = visibleExhibits[
  (idx + 1) % visibleExhibits.length
];

  const prevLink = document.getElementById("prev-link");
  const nextLink = document.getElementById("next-link");

  prevLink.href = `exhibit.html?id=${prev.id}`;
  prevLink.innerHTML = `<small>← ${SITE_TEXT[state.lang].previous}</small><strong>${prev[state.lang].title}</strong>`;

  nextLink.href = `exhibit.html?id=${next.id}`;
  nextLink.innerHTML = `<small>${SITE_TEXT[state.lang].next} →</small><strong>${next[state.lang].title}</strong>`;
}

function stopAudio(){
  audio.pause();
  audio.currentTime = 0;
  if("speechSynthesis" in window) window.speechSynthesis.cancel();
  state.speaking = false;
  audioIcon.textContent = "▶";
  audioLabel.textContent = SITE_TEXT[state.lang].listenStory;
  audioStatus.textContent = "";
}

async function toggleAudio(){
  if(state.speaking){
    stopAudio();
    return;
  }

  // Try recorded MP3 first.
  if(audio.getAttribute("src")){
    try{
      await audio.play();
      state.speaking = true;
      audioIcon.textContent = "❚❚";
      audioLabel.textContent = SITE_TEXT[state.lang].pauseStory;
      return;
    }catch(e){
      // If the MP3 file has not been added yet, use browser TTS as a demo fallback.
    }
  }

  if("speechSynthesis" in window){
    const t = exhibit[state.lang];
    const utterance = new SpeechSynthesisUtterance([t.title, t.summary, ...t.body].join(". "));
    utterance.lang = state.lang === "hi" ? "hi-IN" : "en-IN";
    utterance.rate = 0.95;
    utterance.onend = stopAudio;

    state.speaking = true;
    audioIcon.textContent = "❚❚";
    audioLabel.textContent = SITE_TEXT[state.lang].pauseStory;
    audioStatus.textContent = SITE_TEXT[state.lang].audioFallback;
    speechSynthesis.speak(utterance);
  }else{
    audioStatus.textContent = SITE_TEXT[state.lang].audioMissing;
  }
}

audio.addEventListener("ended", stopAudio);
audioToggle.addEventListener("click", toggleAudio);

document.querySelectorAll(".lang-btn").forEach(btn=>{
  btn.addEventListener("click",()=>setLanguage(btn.dataset.lang));
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");

function openLightbox(index){
  const item = exhibit.gallery[index];
  lightboxImage.src = item.src;
  lightboxImage.alt = item[state.lang] || item.en || "";
  lightboxCaption.textContent = item[state.lang] || item.en || "";
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox(){
  lightbox.hidden = true;
  document.body.style.overflow = "";
}
document.getElementById("lightbox-close").addEventListener("click",closeLightbox);
lightbox.addEventListener("click",e=>{ if(e.target===lightbox) closeLightbox(); });
document.addEventListener("keydown",e=>{ if(e.key==="Escape") closeLightbox(); });

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(state.lang);


// Section QR code
const qrModal = document.getElementById("qr-modal");
const qrBox = document.getElementById("section-qr");
const qrModalTitle = document.getElementById("qr-modal-title");
const qrModalUrl = document.getElementById("qr-modal-url");
const qrModalHelp = document.getElementById("qr-modal-help");
const qrModalWarning = document.getElementById("qr-modal-warning");

function currentSectionUrl(){
  // Uses the live domain automatically after hosting.
  const u = new URL(window.location.href);
  u.search = "";
  u.hash = "";
  u.searchParams.set("id", exhibit.id);
  return u.toString();
}

function qrLooksLocal(url){
  return /localhost|127\.0\.0\.1|0\.0\.0\.0|192\.168\.|10\.\d+\.\d+\.\d+|172\.(1[6-9]|2\d|3[0-1])\./i.test(url)
      || location.protocol === "file:";
}

function openQrModal(){
  const url = currentSectionUrl();
  qrModalTitle.textContent = exhibit[state.lang].title;
  qrModalUrl.textContent = url;
  qrModalHelp.textContent = state.lang === "hi"
    ? "इस QR को स्कैन करने पर यह अनुभाग सीधे खुलेगा।"
    : "Scanning this QR opens this memorial section directly.";
  qrModalWarning.hidden = !qrLooksLocal(url);

  qrBox.innerHTML = "";
  new QRCode(qrBox, {
    text: url,
    width: 250,
    height: 250,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  qrModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeQrModal(){
  qrModal.hidden = true;
  document.body.style.overflow = "";
}

document.getElementById("show-qr").addEventListener("click", openQrModal);
document.getElementById("qr-close").addEventListener("click", closeQrModal);
document.getElementById("qr-print").addEventListener("click", () => window.print());
qrModal.addEventListener("click", e => { if(e.target === qrModal) closeQrModal(); });
function renderHonourRoll() {
  const section = document.getElementById("honour-section");

  if (!section) return;

  section.hidden = exhibit.id !== "martyrs";
  if (section.hidden) return;

  const hindi = state.lang === "hi";

  document.getElementById("honour-kicker").textContent =
    hindi ? "सर्वोच्च बलिदान" : "IN HONOUR OF THE FALLEN";

  document.getElementById("honour-heading").textContent =
    hindi ? "शहीदों की नामावली — 1962" : "Roll of Honour — 1962";

  document.getElementById("honour-search-label").textContent =
    hindi
      ? "नाम, रैंक या सेना संख्या से खोजें"
      : "Search by name, rank or army number";

  document.getElementById("honour-col-number").textContent =
    hindi ? "क्रमांक" : "No.";

  document.getElementById("honour-col-army").textContent =
    hindi ? "सेना संख्या" : "Army number";

  document.getElementById("honour-col-rank").textContent =
    hindi ? "रैंक / नियुक्ति" : "Rank / appointment";

  document.getElementById("honour-col-name").textContent =
    hindi ? "नाम" : "Name";

  const search = document.getElementById("honour-search");

  search.placeholder = hindi
    ? "उदाहरण: Jaswant या 4039009"
    : "For example: Jaswant or 4039009";

  search.oninput = updateHonourRows;
  updateHonourRows();
}

function updateHonourRows() {
  const query = document.getElementById("honour-search")
    .value.trim().toLowerCase();

  const matches = MARTYRS_ROLL
    .map((person, index) => ({ ...person, number: index + 1 }))
    .filter(person =>
      `${person.armyNo} ${person.rank} ${person.name}`
        .toLowerCase()
        .includes(query)
    );

  const body = document.getElementById("honour-rows");
  body.replaceChildren();

  matches.forEach(person => {
    const row = document.createElement("tr");

    [person.number, person.armyNo, person.rank, person.name]
      .forEach(value => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
      });

    body.appendChild(row);
  });

  if (!matches.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 4;
    cell.textContent = state.lang === "hi"
      ? "कोई नाम नहीं मिला।"
      : "No matching records.";
    row.appendChild(cell);
    body.appendChild(row);
  }

  document.getElementById("honour-count").textContent =
    state.lang === "hi"
      ? `कुल ${MARTYRS_ROLL.length} में से ${matches.length} नाम प्रदर्शित`
      : `Showing ${matches.length} of ${MARTYRS_ROLL.length} names`;
}

function renderGallantry() {
  const section = document.getElementById("gallantry-section");

  if (!section) return;

  section.hidden = exhibit.id !== "martyrs";
  if (section.hidden) return;

  const lang = state.lang;
  const hindi = lang === "hi";

  const awards = {
    mvc: hindi ? "महावीर चक्र" : "Maha Vir Chakra",
    vrc: hindi ? "वीर चक्र" : "Vir Chakra",
    sm: hindi ? "सेना पदक" : "Sena Medal",
    mid: hindi ? "मेंशन-इन-डिस्पैचेज़" : "Mention in Despatches"
  };

  document.getElementById("gallantry-kicker").textContent =
    hindi ? "वीरता का सम्मान" : "RECOGNISING GALLANTRY";

  document.getElementById("gallantry-heading").textContent =
    hindi
      ? "वीरता अलंकरण एवं प्रशस्ति-पत्र"
      : "Gallantry Awards & Citations";

  document.getElementById("gallantry-note").textContent =
    hindi
      ? "यहाँ उपलब्ध प्रशस्ति-पत्रों के संक्षिप्त विवरण प्रस्तुत हैं। विवरण पढ़ने के लिए किसी नाम पर क्लिक करें।"
      : "These accounts summarise the supplied citations. Select a name to read the account.";

  const list = document.getElementById("gallantry-list");
  list.replaceChildren();

  Object.entries(awards).forEach(([awardKey, awardTitle]) => {
    const group = document.createElement("div");
    group.className = "gallantry-group";

    const heading = document.createElement("h3");
    heading.className = "gallantry-award-heading";
    heading.textContent = awardTitle;
    group.appendChild(heading);

    GALLANTRY_HEROES
      .filter(hero => hero.award === awardKey)
      .forEach(hero => {
        const content = hero[lang];

        const card = document.createElement(
          content.text ? "details" : "article"
        );
        card.className = "gallantry-card";

        const header = document.createElement(
          content.text ? "summary" : "div"
        );
        header.className = "gallantry-card-header";

        const name = document.createElement("span");
        name.className = "gallantry-name";
        name.textContent = content.name;

        const meta = document.createElement("span");
        meta.className = "gallantry-meta";
        meta.textContent =
          `${hero.number} · ${awardTitle}` +
          (hero.posthumous
            ? (hindi ? " · मरणोपरांत" : " · Posthumous")
            : "");

        header.append(name, meta);

        if (content.text) {
          const prompt = document.createElement("span");
          prompt.className = "gallantry-prompt";
          prompt.textContent = hindi
            ? "प्रशस्ति-सार पढ़ें"
            : "Read citation summary";
          header.appendChild(prompt);
        }

        card.appendChild(header);

        const body = document.createElement("div");
        body.className = "gallantry-body";

        const paragraph = document.createElement("p");
        paragraph.textContent = content.text || (
          hindi
            ? "उपलब्ध नामावली में सम्मान का उल्लेख है। अलग प्रशस्ति-पत्र उपलब्ध नहीं है।"
            : "The supplied roll records this recognition. No separate citation was provided."
        );

        body.appendChild(paragraph);
        card.appendChild(body);
        group.appendChild(card);
      });

    list.appendChild(group);
  });
}

function customiseNearbyPage() {
  if (exhibit.id !== "explore-nearby") return;

  const hindi = state.lang === "hi";

  // Hide the existing Gallery & Media section.
  const gallerySection = document
    .getElementById("gallery")
    .closest(".media-section");

  gallerySection.style.display = "none";

  // Rename the introductory label.
  const introLabel = document.querySelector(
    '.story-panel [data-i18n="historicalAccount"]'
  );

  if (introLabel) {
    introLabel.textContent = hindi
      ? "आसपास की यात्रा"
      : "EXPLORE THE REGION";
  }

  // Use the map section for the single landscape poster.
  const posterSection = document.getElementById("map-section");

  posterSection.querySelector('[data-i18n="mapKicker"]').textContent =
    hindi ? "दर्शनीय स्थल एवं दूरियाँ" : "DESTINATIONS & DISTANCES";

  posterSection.querySelector('[data-i18n="mapHeading"]').textContent =
    hindi ? "आसपास के दर्शनीय स्थल" : "Places to Explore Nearby";

  const poster = document.querySelector("#map-box img");

  if (poster) {
    poster.alt = hindi
      ? "जसवंतगढ़ से आसपास के दर्शनीय स्थलों की दूरियाँ"
      : "Places to explore nearby and their distances from Jaswantgarh";
  }

  // Place the video section after the poster.
  const videoSection = document.getElementById("video-section");

  posterSection.after(videoSection);

  videoSection.querySelector(".eyebrow").textContent =
    hindi ? "वीडियो" : "VIDEO";

  videoSection.querySelector('[data-i18n="videoHeading"]').textContent =
    hindi ? "आसपास के स्थलों की एक झलक" : "A Glimpse of Nearby Places";

  // Show a simple message until a video path is added.
  if (!exhibit.video) {
    document.getElementById("video-box").textContent = hindi
      ? "वीडियो जल्द उपलब्ध होगा।"
      : "Video coming soon.";
  }

  document.body.classList.add("nearby-page");
  const tourismLinks = [
  "https://tawang.nic.in/tourism/tourist-places/",
  "https://tawang.nic.in/tourism/",
  "https://arunachaltourism.com/tawang-2/",
  "https://westkameng.nic.in/tourist-place/sangti-valley/",
  "https://arunachaltourism.com/dirang/",
  "https://arunachaltourism.com/bomdila/",
  "https://tawang.nic.in/tourism/culture-heritage/"
];

document.querySelectorAll("#story-body .nearby-place-title")
  .forEach((heading, index) => {
    const url = tourismLinks[index];
    if (!url) return;

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = heading.textContent;
    link.title = hindi
      ? "पर्यटन जानकारी नई टैब में खोलें"
      : "Open tourism information in a new tab";

    heading.replaceChildren(link);
  });
}