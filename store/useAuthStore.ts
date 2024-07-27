import { defineStore } from 'pinia'
import {getToken, getUserSession, setLoginData, setUserSession} from "~/storage/appStorage"
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
            await new Promise(resolve => setTimeout(resolve, 500));
            this.isLoading = false;
        },
        setLoginData(data: {access_token: string, refresh_token: string}) {
            setLoginData(data)
            this.token = data.access_token;
            this.refresh_token = data.refresh_token;
            this.isAuth = true;
        },

        loginAction(formData: object){
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await authService.signIn(formData)
                    this.setLoginData(response.data)
                    resolve(response.data)
                } catch (e) {
                    reject(e.response.data);
                }

            })

        },
        async getUserSessionAction() {
            return new Promise(async (resolve, reject) => {
                try {
                    const response =  await authService.getUserSession();
                    setUserSession(response.data)
                    this.user = response.data
                    resolve(response.data)
                } catch (e) {
                    reject(e.response.data);
                }

            })
        }
    },
})