import {defineStore} from 'pinia'
import * as categoryService from "~/services/category.service"

export const useCategoryStore = defineStore('category', {
    state: () => ({
        isLoading: false
    }),
    getters: {
        getIsLoading: (state) => state.isLoading,
    },
    actions: {
        getCategoryListAction() {
            this.isLoading = true
            return new Promise(async (resolve, reject) => {
                try {
                    const response = await categoryService.getCategoryList()
                    resolve(response.data)
                    this.isLoading = false
                } catch (e: any) {
                    reject(e?.response?.data);
                } finally {

                }

            })
        }
    },
})