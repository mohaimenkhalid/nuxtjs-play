import axios from "axios";
import {getToken} from "~/storage/appStorage";

const axiosInstance = axios.create({
    baseURL: "https://api.escuelajs.co/api" //config.public.API_BASE_URL, // Set your base URL here
})

let isRefreshing = false
let failedQueue: any[] = []

const processQueue = (error: any, token = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error)
        } else {
            prom.resolve(token)
        }
    })
    failedQueue = []
}

axiosInstance.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

axiosInstance.interceptors.response.use((response) => {
    return response
}, async (error) => {
    const originalRequest = error.config

    // if (error.response.status === 401 && !originalRequest._retry) {
    //     if (isRefreshing) {
    //         return new Promise((resolve, reject) => {
    //             failedQueue.push({ resolve, reject })
    //         }).then(token => {
    //             originalRequest.headers['Authorization'] = 'Bearer ' + token
    //             return axiosInstance(originalRequest)
    //         }).catch(err => {
    //             return Promise.reject(err)
    //         })
    //     }
    //
    //     originalRequest._retry = true
    //     isRefreshing = true
    //
    //     const refreshToken = authStorage.getRefreshToken();
    //     return new Promise((resolve, reject) => {
    //         axios.post(`${process.env.API_BASE_URL}/auth/refresh`, { token: refreshToken })
    //             .then(({ data }) => {
    //                 authStorage.setRefreshToken(data.access_token)
    //                 axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + data.access_token
    //                 originalRequest.headers['Authorization'] = 'Bearer ' + data.access_token
    //                 processQueue(null, data.access_token)
    //                 resolve(axiosInstance(originalRequest))
    //             })
    //             .catch((err) => {
    //                 processQueue(err, null)
    //                 reject(err)
    //             })
    //             .finally(() => {
    //                 isRefreshing = false
    //             })
    //     })
    // }

    return Promise.reject(error)
})

export default axiosInstance;