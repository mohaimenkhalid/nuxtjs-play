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
    return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
}
function setUserSession(data: any) {
    localStorage.setItem("user", JSON.stringify(data))
}
export {
    getToken,
    setToken,
    setRefreshToken,
    getUserSession,
    setLoginData
}