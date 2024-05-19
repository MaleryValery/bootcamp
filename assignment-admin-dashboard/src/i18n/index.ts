import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ruJSON from './ru.json';
import enJSON from './en.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
    ru: { ...ruJSON },
  }, // Where we're gonna put translations' files
  lng: 'en', // Set the initial language of the App
});

export default i18n;
