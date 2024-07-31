import apiClient from "~/lib/apiClient";

export function getCategoryList() {
    return apiClient.get('/v1/categories');
}