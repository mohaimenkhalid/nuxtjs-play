import { defineStore } from 'pinia'
import {getToken, getUserSession, setLoginData} from "~/storage/appStorage"
import * as authService from "~/services/auth.service"

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

        loginAction(formData: object){

            return new Promise(async (resolve, reject) => {
                try {
                    const response = await authService.signIn(formData)
                    console.log(response)
                    resolve(true)
                } catch ({message}) {
                    console.log(message)
                    reject(message);
                }

            })

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