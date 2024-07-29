import Cookies from "js-cookie";

function getToken() {
    return Cookies.get('token');
}
function getRefreshToken() {
    return Cookies.get('refresh_token');
}
function setToken(token: string) {
    Cookies.set('token', token);
}
function setRefreshToken(token: string) {
    Cookies.set('refresh_token', token);
}

function setLoginData(data){
    setToken(data.access_token)
    setRefreshToken(data.refresh_token)
}
function getUserSession() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}
function setUserSession(data: any) {
    localStorage.setItem("user", JSON.stringify(data))
}

function removeAuthStoreData() {
    Cookies.remove("token")
    Cookies.remove("refresh_token")
    localStorage.removeItem("user")
}
export {
    getToken,
    setToken,
    setRefreshToken,
    getUserSession,
    setLoginData,
    setUserSession,
    removeAuthStoreData
}