import type {SignForm} from "~/types/user.types"
export default ($axios: any) => ({
    signIn(data: SignForm) {
        return $axios.post('/v1/auth/login', data);
    },
    getUserSession() {
        return $axios.get('/v1/auth/profile');
    },
})