import {useAsyncData} from "#app";

export default function useApi(apiClient: () => {}) {
    const error = ref(null);
    const { data, status, execute } = useAsyncData(async () => {
        error.value = null; //reset error before execution
        try {
            return await apiClient()
        } catch (e: any) {
            error.value = {...e.response.data}
        }
    });

    return {
        data,
        error,
        status,
        execute, // Alias execute to fetchData for clarity
    };
}