import {defineStore} from 'pinia'
import {getToken, getUserSession, setLoginData, setUserSession, removeAuthStoreData} from "~/storage/appStorage"
import * as authService from "~/services/auth.service"
import type {SignForm} from "~/types/user.types"

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isInitializingStore: true,
        isLoading: false,
        isAuth: false,
        token: "",
        refresh_token: "",
        user: {},
    }),
    getters: {
        getIsLoading: (state) => state.isLoading,
        getToken: (state) => state.token,
        getIsInitializingStore: (state) => state.isInitializingStore,
    },
    actions: {
        async initializeAuthStore() {
            this.token = getToken();
            this.isAuth = !!getToken();
            this.user = getUserSession();
            await new Promise(resolve => setTimeout(resolve, 500));
            this.isInitializingStore = false;
        },
        setLoginData(data: { access_token: string, refresh_token: string }) {
            setLoginData(data)
            this.token = data.access_token;
            this.refresh_token = data.refresh_token;
            this.isAuth = true;
        },

        loginAction(formData: SignForm) {
            this.isLoading = true
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await authService.signIn(formData)
                    this.setLoginData(response.data)
                    resolve(response.data)
                } catch (e: any) {
                    this.isLoading = false
                    reject(e.response.data);
                }

            })

        },
        getUserSessionAction() {
            this.isLoading = true
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await authService.getUserSession();
                    setUserSession(response.data)
                    this.user = response.data
                    resolve(response.data)
                    this.isLoading = false
                } catch (e: any) {
                    reject(e.response.data);
                    this.isLoading = false
                }

            })
        },
        signOut() {
            removeAuthStoreData()
            this.isAuth = false;
            this.token = "";
            this.refresh_token = "";
            this.user = {};
        }
    },
})