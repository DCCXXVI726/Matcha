import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationRU from '../locales/ru.json';
import translationEN from '../locales/en.json';

/* eslint-disable-next-line no-cyrillic-string/no-cyrillic-string */
export const langsList = ['English', 'Русский'];

const resources = {
    ru: {
        translation: translationRU
    },
    en: {
        translation: translationEN
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ru',

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;