const params = new URLSearchParams(location.search);
const exhibitId = params.get("id") || "nuranang";
const exhibit = getExhibit(exhibitId);

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

  hero.style.setProperty("--hero", `url('${exhibit.image}')`);
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

  renderGallery();
  renderVideo();
  renderMap();
  renderNavigation();
}

function renderGallery(){
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
  const idx = EXHIBITS.findIndex(x=>x.id===exhibit.id);
  const prev = EXHIBITS[(idx - 1 + EXHIBITS.length) % EXHIBITS.length];
  const next = EXHIBITS[(idx + 1) % EXHIBITS.length];

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
