const { $axios } = useNuxtApp()

export function httpClient() {
    return $axios;
}