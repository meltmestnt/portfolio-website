import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./resources.js";
i18n.use(initReactI18next).init({
  resources: resources,
  lng: "en",
  fallbackLng: "en",
  debug: true,

  ns: ["translations"],
  defaultNS: "translations",

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
