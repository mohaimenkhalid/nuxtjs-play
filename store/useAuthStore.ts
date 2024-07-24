import { defineStore } from 'pinia'
import {getToken, getUserSession, setLoginData} from "~/storage/appStorage"

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoading: true,
        isAuth: false,
        token: "",
        refresh_token: "",
        user: {},
    }),
    getters: {
        getCounter: (state) => state.token,
        getLoader: (state) => state.isLoading,
        getToken: (state) => state.token,
    },
    actions: {
        async initializeAuthStore() {
            this.token = getToken();
            this.isAuth = !!getToken();
            this.user = getUserSession();
            await new Promise(resolve => setTimeout(resolve, 1000));
            this.isLoading = false;
        },
        setLogin(data: {access_token: string, refresh_token: string}) {
            setLoginData(data)
            this.token = data.access_token;
            this.refresh_token = data.refresh_token;
            this.isAuth = true;
        },
        async getUserSession() {
            try {
                const response =  await $services.auth.getUserSession();
                console.log(response)
            } catch (e) {
                console.log(e)
            }
        }
    },
})