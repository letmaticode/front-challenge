import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

import common_es from "./translations/es/common.json";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  es:{
    translation: common_es
  },
};

i18n
  .use(LanguageDetector)  // https://github.com/i18next/i18next-browser-languageDetector
  .use(initReactI18next)  // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "es",

    interpolation: {
      escapeValue: false  // react already safes from xss
    },

    react: {
      wait: true
    }
  });

export default i18n;