import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "../locales/en/common.json";
import enTours from "../locales/en/tours.json";

import deCommon from "../locales/de/common.json";
import deTours from "../locales/de/tours.json";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        tours: enTours,
      },
      de: {
        common: deCommon,
        tours: deTours,
      },
    },

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });


export default i18n;