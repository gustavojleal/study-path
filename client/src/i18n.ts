import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslations from './shared/locales/en/translation.json'
import ptTranslations from './shared/locales/pt/translation.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      pt: { translation: ptTranslations },
    },
    lng: 'pt',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n