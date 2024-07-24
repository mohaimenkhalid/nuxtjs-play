import type {SignForm} from "~/types/user.types"
import apiClient from "~/lib/apiClient";

export function signIn(data: SignForm) {
    return apiClient.post('/v1/auth/login', data);
}
export function getUserSession() {
    return apiClient.get('/v1/auth/profile');
}