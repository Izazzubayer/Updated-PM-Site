import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import bn from './locales/bn.json';
import hi from './locales/hi.json';
import ko from './locales/ko.json';
import ja from './locales/ja.json';

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  es: { translation: es },
  bn: { translation: bn },
  hi: { translation: hi },
  ko: { translation: ko },
  ja: { translation: ja }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
