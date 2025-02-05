import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ar from './locales/ar.json';

i18next
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: { en: { translation: en }, ar: { translation: ar } },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18next;