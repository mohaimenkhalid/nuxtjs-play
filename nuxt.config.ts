// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@sidebase/nuxt-auth"],
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui'
    },
    auth: {
        globalAppMiddleware: true,
        baseURL: "https://api.escuelajs.co/",
        provider: {
            type: 'local',
            endpoints: {
                signIn: {path: 'api/v1/auth/login', method: 'post'},
                signOut: {path: '/identity/accounts/logout', method: 'get'},
                signUp: {path: '/identity/accounts/register', method: 'post'},
                getSession: {path: 'api/v1/auth/profile', method: 'get'}
            },
            pages: {
                login: '/'
            },
            token: {
                signInResponseTokenPointer: '/access_token',
                type: 'Bearer',

            },
            sessionDataType: {}
        },
        enableSessionRefreshPeriodically: 5000,
        enableSessionRefreshOnWindowFocus: true,
        globalMiddlewareOptions: {
            allow404WithoutAuth: true, // Defines if the 404 page will be accessible while unauthenticated
            addDefaultCallbackUrl: "/"
        },
        // sessionRefresh: {
        //     enablePeriodically: true,
        //     enableOnWindowFocus: true,
        // }
    }
})