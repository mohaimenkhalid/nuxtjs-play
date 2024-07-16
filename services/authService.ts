import type {SignForm} from "~/types/user.types"
export default ($axios) => ({
    signIn(data: SignForm) {
        return $axios.post('/v1/auth/login', data);
    },
    // getUser(id) {
    //     return $axios.get(`/users/${id}`)
    // },
    // createUser(data) {
    //     return $axios.post('/users', data)
    // },
    // updateUser(id, data) {
    //     return $axios.put(`/users/${id}`, data)
    // },
    // deleteUser(id) {
    //     return $axios.delete(`/users/${id}`)
    // }
})