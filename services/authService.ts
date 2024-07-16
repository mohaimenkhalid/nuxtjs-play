export default ($axios) => ({
    getUsers() {
        return $axios.get('/users')
    },
    getUser(id) {
        return $axios.get(`/users/${id}`)
    },
    createUser(data) {
        return $axios.post('/users', data)
    },
    updateUser(id, data) {
        return $axios.put(`/users/${id}`, data)
    },
    deleteUser(id) {
        return $axios.delete(`/users/${id}`)
    }
})