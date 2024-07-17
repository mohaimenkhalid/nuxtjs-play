import { defineStore } from 'pinia'
import appStorage from "~/lib/appStorage";
const {getToken} = appStorage()
export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoading: true,
        //isAuth: !!appStorage.getToken(),
        token: null,
        //user: appStorage.getUserSession(),
    }),
    getters: {
        getCounter: (state) => state.token,
        getLoader: (state) => state.isLoading,
    },
    actions: {
        async initializeFromCookies() {
            this.token = await getToken();
            await new Promise(resolve => setTimeout(resolve, 1000));
            this.isLoading = false;
        }
    },
})