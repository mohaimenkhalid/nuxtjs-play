// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    app: {
        head: {
            titleTemplate: '%s - Nuxt3 Play App',
        },
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@pinia/nuxt", "@nuxt/image", "@nuxtjs/i18n"], //"@sidebase/nuxt-auth"
    plugins: ['~/plugins/storeInit.ts', '~/plugins/fetchInterceptor.ts'],
    shadcn: {
        prefix: '',
        componentDir: './components/ui'
    },
    image: {

    },
    i18n: {
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'lang',
            alwaysRedirect: false
        },
        defaultLocale: 'en',
        locales: [
            {
                code: 'en',
                name: 'English',
                file: 'en.json',
                iso:'en-US',
                dir: 'ltr'
            },
            {
                code: 'bn',
                name: 'Bangla',
                file: 'bn.json',
                iso:'bn-BD',
                dir: 'rtl'
            },
        ],
        fallbackLocale: 'en',
        langDir: 'locales',
    },
    runtimeConfig: {
        secretKey: '',
        public: {
            API_BASE_URL: process.env.API_BASE_URL,
        }
    },
})