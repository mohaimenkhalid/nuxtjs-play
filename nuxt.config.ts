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
        vueI18n: './i18n.config.ts' // if you are using custom path, default
    },
    runtimeConfig: {
        secretKey: '',
        public: {
            API_BASE_URL: process.env.API_BASE_URL,
        }
    },
})