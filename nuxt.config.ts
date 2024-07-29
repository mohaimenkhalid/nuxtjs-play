// https://nuxt.com/docs/api/configuration/nuxt-config
import {cookies} from "next/headers";

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@pinia/nuxt",], //"@sidebase/nuxt-auth"
    plugins: ['~/plugins/storeInit.ts'],
    shadcn: {
        prefix: '',
        componentDir: './components/ui'
    },
    runtimeConfig: {
        secretKey: '',
        public: {
            API_BASE_URL: process.env.API_BASE_URL,
        }
    },
})