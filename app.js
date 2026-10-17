const state = {
  lang: localStorage.getItem("jaswantgarh-language") || "en"
};

const historyGrid = document.getElementById("history-grid");
const legacyGrid = document.getElementById("legacy-grid");

function setLanguage(lang){
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

  renderCards();
}

function cardTemplate(item){
  const t = item[state.lang];
  return `
    <a class="exhibit-card" href="exhibit.html?id=${encodeURIComponent(item.id)}" aria-label="${t.title}">
      <div class="card-image-wrap">
        <img class="card-image" src="${item.image}" alt="${t.title}" />
        <span class="sound-pill" aria-hidden="true">🔊</span>
      </div>
      <div class="card-content">
        <p class="card-kicker">${t.checkpoint}</p>
        <h3>${t.title}</h3>
        <p>${t.card}</p>
      </div>
    </a>
  `;
}

function renderCards(){
  historyGrid.innerHTML = EXHIBITS.filter(x=>x.group==="history").map(cardTemplate).join("");
  legacyGrid.innerHTML = EXHIBITS.filter(x=>x.group==="legacy").map(cardTemplate).join("");
}

document.querySelectorAll(".lang-btn").forEach(btn=>{
  btn.addEventListener("click",()=>setLanguage(btn.dataset.lang));
});

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(state.lang);
