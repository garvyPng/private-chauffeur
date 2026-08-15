import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "../locales/en/common.json";
import enHome from "../locales/en/home.json";
import enTours from "../locales/en/tours.json";
import enExperiences from "../locales/en/experiences.json";

import deCommon from "../locales/de/common.json";
import deHome from "../locales/de/home.json";
import deTours from "../locales/de/tours.json";
import deExperiences from "../locales/de/experiences.json";


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        tours: enTours,
        experiences: enExperiences,
      },
      de: {
        common: deCommon,
        home: deHome,
        tours: deTours,
        experiences: deExperiences,
      },
    },

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });


export default i18n;