import {useAuthStore} from "~/store/useAuthStore";

export default defineNuxtPlugin((nuxtApp) => {
    const authStore = useAuthStore();
    if (process.client) {
        authStore.initializeAuthStore();
    }
})