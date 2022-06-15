let GLOBAL_LANG = "eng";

function changeLanguage() {
  const portugueseElements = document.getElementsByClassName("lng-por");
  const englishElements = document.getElementsByClassName("lng-eng");

  if (GLOBAL_LANG === "eng") {
    revealLanguageElements(portugueseElements);
    hideLanguageElements(englishElements);
    GLOBAL_LANG = "por";
    return;
  } else {
    revealLanguageElements(englishElements);
    hideLanguageElements(portugueseElements);
    GLOBAL_LANG = "eng";
    return;
  }
}

function revealLanguageElements(languageElements) {
  for (let i = 0; i < languageElements.length; i++) {
    languageElements[i].classList.remove("hidden");
  }
}

function hideLanguageElements(languageElements) {
  for (let i = 0; i < languageElements.length; i++) {
    languageElements[i].classList.add("hidden");
  }
}

const lgnBtn = document.getElementById("lng-btn");

lgnBtn.addEventListener("click", () => changeLanguage());
