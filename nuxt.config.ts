// https://nuxt.com/docs/api/configuration/nuxt-config
import {cookies} from "next/headers";

export default defineNuxtConfig({
    app: {
        head: {
            titleTemplate: '%s - Nuxt3 Play App',
        },
    },
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@pinia/nuxt", "@nuxt/image"], //"@sidebase/nuxt-auth"
    plugins: ['~/plugins/storeInit.ts', '~/plugins/fetchInterceptor.ts'],
    shadcn: {
        prefix: '',
        componentDir: './components/ui'
    },
    image: {

    },
    runtimeConfig: {
        secretKey: '',
        public: {
            API_BASE_URL: process.env.API_BASE_URL,
        }
    },
})