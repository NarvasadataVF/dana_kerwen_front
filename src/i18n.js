
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importing translation files

import translationEN from "./locale/en/translation.json";
import translationRU from "./locale/ru/translation.json";
import translationTM from "./locale/tm/translation.json";


//Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: translationEN,
  },
  tm: {
    translation: translationTM,
  },
  ru: {
    translation: translationRU
  }
};


//i18N Initialization
i18n
  .use(initReactI18next)
  .init({
    initImmediate : false,
    resources,
    lng: localStorage.getItem('DKLang') ? localStorage.getItem('DKLang') : "en",
    // lng: "en",
    // fallbackLng: 'en',
    // keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });
  

export default i18n;