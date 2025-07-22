function setLanguage(lang) {
  document.getElementById("language-select").style.display = "none";
  document.getElementById("main-content").style.display = "block";
  document.getElementById("google_translate_element").style.opacity = "1";

  setTimeout(() => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  }, 800);
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en,hi,mr,ta,te,kn',
    includedLanguages: 'en,hi,mr,ta,te,kn',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

window.onload = () => {
  const savedLang = localStorage.setItem('selectedLang' , lang);
  if (savedLang) selectLanguage(savedLang);
};
