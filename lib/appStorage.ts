import Cookies from 'js-cookie'
const appStorage = () => {
    function getToken() {
        return Cookies.get('token');
    }
    function getRefreshToken() {
        return Cookies.get('refresh_token');
    }
    function setToken(token: string) {
        Cookies.set('access_token', token);
    }
    function setRefreshToken(token: string) {
        Cookies.set('refresh_token', token);
    }
    function getUserSession() {
        return localStorage.getItem('user');
    }
    return {
        getToken,
        setToken,
        setRefreshToken,
        getUserSession
    }
}

export default appStorage;


//
//
// export default {
//     getToken() {
//         return Cookies.get('access_token');
//     },
//     getRefreshToken() {
//         return Cookies.get('refresh_token');
//     },
//     setToken(token: string) {
//         Cookies.set('access_token', token);
//     },
//     setRefreshToken(token: string) {
//         Cookies.set('refresh_token', token);
//     },
//     getUserSession() {
//         return localStorage.getItem('user');
//     }
// }