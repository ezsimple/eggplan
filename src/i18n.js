import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import koMessages from './translations/ko.json';
import enMessages from './translations/en.json';
import viMessages from './translations/vi.json';

const resources = {
  ko: {
    translation: koMessages
  },
  en: {
    translation: enMessages
  },
  vi: {
    translation: viMessages
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko',
  fallbackLng: 'ko',
  keySeparator: false, // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});

export default i18n;
