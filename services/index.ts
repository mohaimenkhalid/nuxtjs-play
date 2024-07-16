import authService from "~/services/authService";

export default (axiosInstance: any) => ({
    auth: authService(axiosInstance),
})