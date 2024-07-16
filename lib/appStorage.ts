export default {
    getToken() {
        return localStorage.getItem('access_token');
    },
    getRefreshToken() {
        return localStorage.getItem('refresh_token');
    },
    setToken(token: string) {
        localStorage.setItem('access_token', token);
    },
    setRefreshToken(token: string) {
        localStorage.setItem('refresh_token', token);
    },
}