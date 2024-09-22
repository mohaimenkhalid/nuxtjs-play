import en from './locales/en.json'
import bn from './locales/bn.json'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'lang',
        alwaysRedirect: false
    },
    fallbackLocale: 'en',
    langDir: 'lang',
    messages: {
        en,
        bn
    },
    vueI18n: {
        // If fallback is needed, you need to define
        fallbackLocale: 'en',
    },
}))
