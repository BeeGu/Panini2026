// src/i18n/index.js

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en";
import ro from "./locales/ro";
import es from "./locales/es";
import fr from "./locales/fr";
import de from "./locales/de";
import it from "./locales/it";
import pt from "./locales/pt";
import nl from "./locales/nl";

import { DEFAULT_LANGUAGE } from "./languages";

export const LANGUAGE_STORAGE_KEY = "@panini_language";

const resources = {
  en: { translation: en },
  ro: { translation: ro },
  es: { translation: es },
  fr: { translation: fr },
  de: { translation: de },
  it: { translation: it },
  pt: { translation: pt },
  nl: { translation: nl },
};

function getDeviceLanguage() {
  const deviceLanguage = getLocales()[0]?.languageCode;

  if (deviceLanguage && resources[deviceLanguage]) {
    return deviceLanguage;
  }

  return DEFAULT_LANGUAGE;
}

export async function initializeI18n() {
  const savedLanguage = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);

  const language = savedLanguage || getDeviceLanguage();

  await i18n.use(initReactI18next).init({
    resources,
    lng: language,
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: "v4",
  });

  return language;
}

export async function setLanguage(language) {
  if (!resources[language]) {
    return;
  }

  await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, language);

  await i18n.changeLanguage(language);
}

export default i18n;
